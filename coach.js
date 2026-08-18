/* coach.js — the Fit Bitch adaptive daily coach.
 *
 * Pure functions only: given (date, template day, workout history, weight
 * baselines, rules) it deterministically produces today's workout — exact
 * machine exercises with reps × weight, and cardio targets derived from your
 * own recent splits. Feedback you log ("too easy / just right / too hard",
 * RPE, heel pain) changes what tomorrow generates.
 *
 * Runs in the browser (window.Coach) and in Node (module.exports) so the
 * Vercel morning cron generates with the exact same logic as the app.
 *
 * No personal data lives here: starting weights are deliberately made-up
 * placeholders ("pretend") that you replace in Settings or in Airtable.
 */
(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.Coach = api;
})(typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : null, function () {
  "use strict";

  // ---------- default baselines (PRETEND weights — replace with real ones) ----
  // Mirrors the Airtable "Baselines" table. `fixed` = race-defined implement
  // load: progress distance/reps, never the weight (the engine won't bump it).
  const DEFAULT_BASELINES = {
    "leg-press":          { name: "Leg press",              cat: "lower", weight: 90, inc: 10, repLow: 8,  repHigh: 10, sets: 4, pretend: true },
    "hack-squat":         { name: "Hack squat",             cat: "lower", weight: 70, inc: 10, repLow: 8,  repHigh: 10, sets: 3, pretend: true },
    "leg-curl":           { name: "Seated leg curl",        cat: "lower", weight: 55, inc: 10, repLow: 8,  repHigh: 12, sets: 3, pretend: true },
    "leg-ext":            { name: "Leg extension",          cat: "lower", weight: 50, inc: 10, repLow: 10, repHigh: 12, sets: 3, pretend: true },
    "glute-drive":        { name: "Glute drive",            cat: "lower", weight: 90, inc: 10, repLow: 8,  repHigh: 12, sets: 3, pretend: true },
    "calf-raise-machine": { name: "Seated calf raise",      cat: "lower", weight: 70, inc: 10, repLow: 8,  repHigh: 12, sets: 3, pretend: true,
                            note: "3s up · 2s hold · 3s down — this is the Rathleff PF work" },
    "chest-press":        { name: "Chest press machine",    cat: "upper", weight: 40, inc: 5,  repLow: 8,  repHigh: 12, sets: 3, pretend: true },
    "shoulder-press":     { name: "Shoulder press machine", cat: "upper", weight: 30, inc: 5,  repLow: 8,  repHigh: 12, sets: 3, pretend: true },
    "lat-pulldown":       { name: "Lat pulldown",           cat: "upper", weight: 55, inc: 5,  repLow: 8,  repHigh: 12, sets: 3, pretend: true },
    "row-machine":        { name: "Chest-supported row",    cat: "upper", weight: 50, inc: 5,  repLow: 8,  repHigh: 12, sets: 3, pretend: true },
    "tri-pushdown":       { name: "Triceps pushdown",       cat: "upper", weight: 25, inc: 5,  repLow: 10, repHigh: 12, sets: 3, pretend: true },
    "bi-curl":            { name: "Cable biceps curl",      cat: "upper", weight: 20, inc: 5,  repLow: 10, repHigh: 12, sets: 3, pretend: true },
    "farmers":            { name: "Farmers carry",          cat: "skill", weight: 35, inc: 5,  fixed: true, pretend: true, unit: "lb/hand" },
    "sandbag":            { name: "Sandbag lunge",          cat: "skill", weight: 22, inc: 11, fixed: true, pretend: true },
    "wall-ball":          { name: "Wall ball",              cat: "skill", weight: 9,  inc: 2,  repLow: 10, repHigh: 15, sets: 4, fixed: true, pretend: true },
    "sled-push":          { name: "Sled push (added load)", cat: "skill", weight: 90, inc: 25, pretend: true },
    "sled-pull":          { name: "Sled pull (added load)", cat: "skill", weight: 70, inc: 25, pretend: true },
    "pallof":             { name: "Cable Pallof press",     cat: "core",  weight: 20, inc: 5,  repLow: 10, repHigh: 12, sets: 3, pretend: true },
  };

  // ---------- default rules (mirrors the Airtable "Generation Rules" table) --
  const DEFAULT_RULES = {
    version: 1,
    "progression-strength": { upSignals: 2, rpeCap: 8, downAfterHard: 2, downPct: 0.05 },
    "run-gate":             { heelMax: 3, streakDays: 5, backOffAbove: 4 },
    "cardio-target":        { lookbackDays: 28, skiPadSec: [3, 8], rowPadSec: [3, 8],
                              runPadSecPerKm: [10, 25], swimPadSecPer100: [5, 10], bikePadSecPerKm: [5, 15] },
    "class-format":         { minutes: 45 },
    "recovery-adjust":      { rpeHigh: 9, consecutiveDays: 2, easePct: 0.1 },
    "learning":             { minSessionsPerChange: 4, maxParamStepPct: 0.25 },
  };

  // ---------- strength session menus -----------------------------------------
  // Machine-first order is a hard rule: lower machines → upper machines →
  // Hyrox skill. Accessories alternate by week so A/B days stay fresh.
  const STRENGTH_MENUS = {
    A: {
      lower: ["leg-press", "leg-curl"],
      upper: ["row-machine", "chest-press"],
      accessoryEven: "leg-ext", accessoryOdd: "tri-pushdown",
      skill: [
        { key: "farmers", text: (w) => `Farmers carry 4 × 40 m @ ${w} lb per hand` },
        { key: null,      text: () => "Dead-bug 3 × 12 — slow, ribs down" },
      ],
    },
    B: {
      lower: ["hack-squat", "glute-drive"],
      upper: ["lat-pulldown", "shoulder-press"],
      accessoryEven: "bi-curl", accessoryOdd: "pallof",
      skill: [
        { key: "sandbag",   text: (w) => `Sandbag walking lunge 4 × 20 m @ ${w} lb` },
        { key: "wall-ball", text: (w, b) => `Wall ball ${b.sets} × ${b.repLow}–${b.repHigh} @ ${w} lb` },
      ],
      sledSkill: [
        { key: "sled-push", text: (w) => `Sled push 4 × 15 m @ +${w} lb (build toward race 102 kg total)` },
        { key: "sled-pull", text: (w) => `Sled pull 4 × 15 m @ +${w} lb` },
      ],
    },
    M: { // maintenance — lighter, 2 working sets
      lower: ["leg-press", "leg-curl"],
      upper: ["row-machine", "shoulder-press"],
      accessoryEven: "pallof", accessoryOdd: "pallof",
      setsCap: 2,
      skill: [{ key: "farmers", text: (w) => `Farmers carry 3 × 40 m @ ${w} lb per hand — smooth, no grind` }],
    },
  };

  // ---------- tiny utils ------------------------------------------------------
  function parseDate(str) { const [y, m, d] = String(str).split("-").map(Number); return new Date(y, m - 1, d); }
  function fmtISO(dt) { return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, "0")}-${String(dt.getDate()).padStart(2, "0")}`; }
  function addDays(dt, n) { const c = new Date(dt); c.setDate(c.getDate() + n); return c; }
  function fmtSplit(sec) {
    if (sec == null || !isFinite(sec)) return null;
    const m = Math.floor(sec / 60), s = Math.round(sec % 60);
    return s === 60 ? `${m + 1}:00` : `${m}:${String(s).padStart(2, "0")}`;
  }
  function round5(x) { return Math.round(x / 5) * 5; }
  function toSeconds(v) {
    if (v == null || v === "") return null;
    const parts = String(v).trim().split(":").map(Number);
    if (parts.some((n) => !isFinite(n))) return null;
    if (parts.length === 1) return Math.round(parts[0] * 60); // bare number = minutes
    if (parts.length === 2) return Math.round(parts[0] * 60 + parts[1]);
    if (parts.length === 3) return Math.round(parts[0] * 3600 + parts[1] * 60 + parts[2]);
    return null;
  }
  function sortedLogs(logs) {
    return Object.keys(logs || {}).sort().map((k) => logs[k]).filter((e) => e && e.date);
  }

  function mergeBaselines(overrides) {
    const out = {};
    Object.keys(DEFAULT_BASELINES).forEach((k) => {
      out[k] = Object.assign({}, DEFAULT_BASELINES[k], (overrides || {})[k] || {});
    });
    return out;
  }
  function mergeRules(overrides) {
    const out = { version: (overrides && overrides.version) || DEFAULT_RULES.version };
    Object.keys(DEFAULT_RULES).forEach((k) => {
      if (k === "version") return;
      out[k] = Object.assign({}, DEFAULT_RULES[k], (overrides || {})[k] || {});
    });
    return out;
  }

  // ---------- template parsing ------------------------------------------------
  // Day prescriptions in plan.js are flat strings with stable markers. Split
  // them into the class clock, the effort legend, and the day's target.
  function parseTemplate(day) {
    const d = String(day.d || "");
    const effortIdx = d.indexOf("EFFORT:");
    const targetIdx = d.indexOf("TODAY'S TARGET:");
    let clockStr = effortIdx > -1 ? d.slice(0, effortIdx) : (targetIdx > -1 ? d.slice(0, targetIdx) : d);
    let effort = effortIdx > -1 ? d.slice(effortIdx + 7, targetIdx > -1 ? targetIdx : undefined).trim() : "";
    let target = targetIdx > -1 ? d.slice(targetIdx + 15) : (effortIdx === -1 && targetIdx === -1 ? d : "");
    // Strip the per-day boilerplate that repeats on every card.
    target = target.replace(/Stop at 45:00[^]*$/i, "").replace(/On run\/brick days[^]*$/i, "").trim();
    const clock = [];
    clockStr.split("·").forEach((seg) => {
      const m = seg.trim().match(/^(\d+[–-]\d+)\s+([A-Z0-9 /&+]+):\s*(.*)$/);
      if (m) clock.push({ time: m[1], label: m[2].trim(), desc: m[3].trim() });
    });
    return { clock, effort, target };
  }

  // ---------- history: heel gate ----------------------------------------------
  function heelGate(logs, dateStr, params) {
    const entries = logs || {};
    const yesterday = addDays(parseDate(dateStr), -1);
    // Latest heel reading within the last 3 days — a spike closes the gate.
    for (let i = 0; i < 3; i++) {
      const e = entries[fmtISO(addDays(parseDate(dateStr), -i))];
      if (e && e.heelPain != null) {
        if (e.heelPain > params.backOffAbove) {
          return { open: false, reason: `heel pain hit ${e.heelPain}/10 — back to zero-impact until it settles` };
        }
        break;
      }
    }
    // Streak: consecutive logged days ending yesterday with heel ≤ heelMax.
    let streak = 0, cur = yesterday, sawAny = false;
    while (true) {
      const e = entries[fmtISO(cur)];
      if (!e || e.heelPain == null) break;
      sawAny = true;
      if (e.heelPain > params.heelMax) break;
      streak++; cur = addDays(cur, -1);
      if (streak >= params.streakDays) break;
    }
    if (streak >= params.streakDays) return { open: true, reason: `heel ≤${params.heelMax}/10 for ${streak} straight days` };
    if (!sawAny) return { open: false, reason: "no morning heel readings yet — log heel pain daily to open the run gate" };
    return { open: false, reason: `heel ≤${params.heelMax}/10 streak is ${streak}/${params.streakDays} days — keep it low-impact for now` };
  }

  // ---------- history: best paces ---------------------------------------------
  // Best normalised pace per modality inside the lookback window.
  // ski/row → sec per 500m · run/bike → sec per km · swim → sec per 100m.
  function bestPace(logs, dateStr, modality, lookbackDays) {
    const cutoff = fmtISO(addDays(parseDate(dateStr), -lookbackDays));
    let best = null;
    sortedLogs(logs).forEach((e) => {
      if (e.date >= dateStr || e.date < cutoff) return;
      const dist = Number(e[modality + "Dist"]);
      const sec = toSeconds(e[modality + "Time"]);
      if (!dist || !sec || !e[modality + "Done"]) return;
      let pace = null;
      if (modality === "ski" || modality === "row") { if (dist >= 200) pace = sec / (dist / 500); }
      else if (modality === "run" || modality === "bike") { if (dist >= 1) pace = sec / dist; }
      else if (modality === "swim") { if (dist >= 100) pace = sec / (dist / 100); }
      if (pace && (best == null || pace < best)) best = pace;
    });
    return best;
  }

  // Short reps get the tight pad (near your best); long/steady work gets the
  // generous pad. "Is it intervals?" is read off the target text.
  function padFor(target, range) {
    const isIntervals = /\d\s*[×x]\s*\d/.test(target);
    return isIntervals ? range[0] : range[1];
  }

  // ---------- strength: effective weight from feedback -------------------------
  // Double progression, derived (not stored): walk the feedback history since
  // the baseline was last edited. Editing a baseline naturally resets it.
  function effectiveWeight(key, base, logs, rules) {
    if (base.fixed) return { weight: base.weight, why: null };
    const p = rules["progression-strength"];
    let w = base.weight, ups = 0, hards = 0, lastWhy = null;
    sortedLogs(logs).forEach((e) => {
      if (base.updated && e.date <= base.updated) return;
      const fb = e.fb && e.fb[key];
      if (!fb) return;
      if (fb === "easy" && (e.rpe == null || e.rpe <= p.rpeCap)) {
        hards = 0; ups++;
        if (ups >= p.upSignals) { w += base.inc; ups = 0; lastWhy = `felt easy ${p.upSignals}× — moved up`; }
      } else if (fb === "ok") {
        hards = 0; // "just right" holds the weight — it neither builds nor breaks a streak
      } else if (fb === "hard") {
        ups = 0; hards++;
        if (hards >= p.downAfterHard) {
          // Drop at least one machine increment — a % alone rounds to zero on
          // light stacks (5% of 40 lb ≈ 0), which made back-off a silent no-op.
          const drop = Math.max(base.inc, round5(w * p.downPct));
          w = Math.max(base.inc, w - drop);
          hards = 0; lastWhy = "too hard twice — backed off";
        } else lastWhy = "too hard — holding";
      }
    });
    return { weight: w, why: w !== base.weight ? lastWhy : (lastWhy === "too hard — holding" ? lastWhy : null) };
  }

  function exItem(key, B, logs, rules, setsCap) {
    const b = B[key];
    const eff = effectiveWeight(key, b, logs, rules);
    const sets = Math.min(b.sets || 3, setsCap || 99);
    const reps = b.repLow ? `${b.repLow}–${b.repHigh}` : "";
    const delta = eff.weight - b.weight;
    return {
      id: "ex-" + key, fbKey: key,
      text: `${b.name} — ${sets} × ${reps} @ ${eff.weight} lb${b.note ? ` · ${b.note}` : ""}`,
      meta: { key, sets, reps, weight: eff.weight, delta, why: eff.why, pretend: !!b.pretend },
    };
  }

  // ---------- feedback → next-day fatigue check ---------------------------------
  function fatigueEase(logs, dateStr, rules) {
    const p = rules["recovery-adjust"];
    let n = 0, cur = addDays(parseDate(dateStr), -1);
    while (n < p.consecutiveDays) {
      const e = (logs || {})[fmtISO(cur)];
      if (!e || e.rpe == null || e.rpe < p.rpeHigh) break;
      n++; cur = addDays(cur, -1);
    }
    return n >= p.consecutiveDays ? p : null;
  }

  // ---------- the generator ------------------------------------------------------
  // Input: { date:"YYYY-MM-DD", day:<plan.js day>, week:<plan.js week>,
  //          logs:{date:entry}, baselines:{key:{...}}, rules:{...} }
  // Output: a structured, checkable plan. Deterministic for identical input.
  function generate(input) {
    const { date, day, week } = input;
    const logs = input.logs || {};
    const B = mergeBaselines(input.baselines);
    const R = mergeRules(input.rules);
    const tpl = parseTemplate(day);
    const adjustments = [];
    const rulesFired = [];
    let idc = 0;
    const mk = (text, extra) => Object.assign({ id: "i" + idc++, text }, extra || {});

    const weekNum = week ? week.n : 0;
    const isEvent = day.format === "event";
    let targetItems = [];
    let gateInfo = null;

    // -- fatigue check applies to every hard day --
    const eased = !isEvent && day.k !== "rest" ? fatigueEase(logs, date, R) : null;
    if (eased) {
      rulesFired.push("recovery-adjust");
      adjustments.push(`Yesterday and the day before both logged RPE ≥ ${eased.rpeHigh} — today's Push/Power blocks drop to Base effort and targets ease ~${Math.round(eased.easePct * 100)}%. Recovery earns the next hard day.`);
    }

    if (isEvent) {
      // Sims and race days pass through untouched — they're assessments.
      targetItems = tpl.target.split("·").map((s) => s.trim()).filter(Boolean).map((s) => mk(s));
      if (!targetItems.length) targetItems = [mk(tpl.target || day.t)];
    } else if (day.k === "strength") {
      rulesFired.push("progression-strength");
      const title = day.t || "";
      const menu = /Strength B/i.test(title) ? STRENGTH_MENUS.B
        : /Strength A/i.test(title) ? STRENGTH_MENUS.A
        : STRENGTH_MENUS.M;
      const setsCap = menu.setsCap;
      const accessory = weekNum % 2 === 0 ? menu.accessoryEven : menu.accessoryOdd;
      const machineKeys = menu.lower.concat(menu.upper, accessory ? [accessory] : []);
      targetItems = machineKeys.map((k) => exItem(k, B, logs, R, setsCap));
      let skill = menu.skill || [];
      if (menu.sledSkill && /sled/i.test(title)) skill = skill.concat(menu.sledSkill);
      skill.forEach((s) => {
        if (!s.key) { targetItems.push(mk(s.text())); return; }
        const b = B[s.key];
        const eff = effectiveWeight(s.key, b, logs, R);
        targetItems.push(mk(s.text(eff.weight, b), { fbKey: s.key, meta: { key: s.key, weight: eff.weight, pretend: !!b.pretend } }));
      });
      targetItems.forEach((it) => {
        if (it.meta && it.meta.why) adjustments.push(`${B[it.meta.key].name}: now ${it.meta.weight} lb — ${it.meta.why}.`);
      });
      if (targetItems.some((it) => it.meta && it.meta.pretend)) {
        adjustments.push("Some weights are still the made-up starting values — set your real weights in Settings → Weights (or Airtable → Baselines).");
      }
      adjustments.push("Machine order is the rule: lower machines → upper machines → Hyrox skill. Keep 2–3 clean reps in reserve.");
    } else {
      // Cardio and rest days: template target + a pace target from your history.
      const gate = day.run ? heelGate(logs, date, R["run-gate"]) : null;
      if (gate) {
        rulesFired.push("run-gate");
        gateInfo = gate;
        if (!gate.open) {
          adjustments.push(`★ Run gate CLOSED — ${gate.reason}. Running is swapped for zero-impact work today.`);
        } else {
          adjustments.push(`★ Run gate open — ${gate.reason}.`);
        }
      }
      if (gate && !gate.open) {
        targetItems = [
          mk("SWAP (gate closed): SkiErg or row — match the planned running time at the same effort cues"),
          mk("Keep every interval zero-impact today; the plan resumes running once the heel settles"),
        ];
      } else {
        const raw = tpl.target || day.t;
        targetItems = (raw.match(/[^.]+(?:\.|$)/g) || [raw]).map((s) => s.trim()).filter(Boolean).slice(0, 4).map((s) => mk(s));
        // Day-specific pace targets from the last 28 days of your own numbers.
        rulesFired.push("cardio-target");
        const ct = R["cardio-target"];
        const paceLines = [];
        const easeMult = eased ? 1 + eased.easePct : 1;
        const wantSki = /skierg|ski erg/i.test(day.t + " " + raw);
        const wantRow = /\brow/i.test(day.t + " " + raw);
        if (day.k === "erg" || day.k === "hyrox") {
          if (wantSki || (!wantSki && !wantRow)) {
            const b = bestPace(logs, date, "ski", ct.lookbackDays);
            if (b) paceLines.push(`SkiErg target: ${fmtSplit(b * easeMult + padFor(raw, ct.skiPadSec))}/500m (best recent ${fmtSplit(b)})`);
          }
          if (wantRow) {
            const b = bestPace(logs, date, "row", ct.lookbackDays);
            if (b) paceLines.push(`Row target: ${fmtSplit(b * easeMult + padFor(raw, ct.rowPadSec))}/500m (best recent ${fmtSplit(b)})`);
          }
        } else if (day.k === "run" || (day.k === "brick" && day.run)) {
          const b = bestPace(logs, date, "run", ct.lookbackDays);
          if (b) paceLines.push(`Run target: ${fmtSplit(b * easeMult + padFor(raw, ct.runPadSecPerKm))}/km (best recent ${fmtSplit(b)}/km)`);
        } else if (day.k === "bike") {
          const b = bestPace(logs, date, "bike", ct.lookbackDays);
          if (b) paceLines.push(`Bike target: ${fmtSplit(b * easeMult + padFor(raw, ct.bikePadSecPerKm))}/km (best recent ${fmtSplit(b)}/km)`);
        } else if (day.k === "swim") {
          const b = bestPace(logs, date, "swim", ct.lookbackDays);
          if (b) paceLines.push(`Swim target: ${fmtSplit(b * easeMult + padFor(raw, ct.swimPadSecPer100))}/100m (best recent ${fmtSplit(b)}/100m)`);
        }
        if (paceLines.length) {
          paceLines.forEach((p) => targetItems.push(mk(p)));
          adjustments.push("Pace targets are set from your own best efforts in the last 28 days" + (eased ? ", eased for recovery" : "") + ".");
        } else if (day.k !== "rest") {
          targetItems.push(mk("No recent " + day.k + " history — go by the effort cues and log distance + time to unlock pace targets"));
        }
      }
    }

    // -- assemble blocks: the class clock, then the day's target ------------------
    const blocks = tpl.clock.map((c) => ({
      time: c.time,
      label: eased && /PUSH|POWER|ALL OUT/i.test(c.label) ? c.label + " → BASE" : c.label,
      items: [mk(c.desc)],
    }));
    blocks.push({ time: null, label: "TODAY'S TARGET", items: targetItems });

    return {
      date, title: day.t, kind: day.k, min: day.min, format: day.format || "otf45",
      impact: day.impact,
      effort: tpl.effort || "Base = RPE 4–5 · Push = 6–7 · All Out = 8–9 in short bursts only",
      blocks, adjustments, rulesFired,
      gate: gateInfo,
      rulesVersion: R.version,
    };
  }

  // ---------- rule self-tuning ---------------------------------------------------
  // Looks for a persistent signal and proposes ONE bounded knob change.
  // The app applies it to stored rules and records it, so the system's own
  // rules genuinely evolve — slowly, and always explained.
  function learn(logs, rules) {
    const R = mergeRules(rules);
    const p = R["learning"];
    const entries = sortedLogs(logs).filter((e) => e.fb && Object.keys(e.fb).length);
    const recent = entries.slice(-p.minSessionsPerChange);
    if (recent.length < p.minSessionsPerChange) return null;
    const all = recent.flatMap((e) => Object.values(e.fb));
    if (!all.length) return null;
    const prog = R["progression-strength"];
    if (all.every((f) => f === "easy") && prog.upSignals > 1) {
      return {
        rule: "progression-strength", param: "upSignals",
        from: prog.upSignals, to: prog.upSignals - 1,
        note: `Everything felt easy across ${recent.length} straight sessions — progressing after every good session instead of every ${prog.upSignals}.`,
      };
    }
    if (all.filter((f) => f === "hard").length >= all.length * 0.6 && prog.upSignals < 4) {
      return {
        rule: "progression-strength", param: "upSignals",
        from: prog.upSignals, to: prog.upSignals + 1,
        note: `Most exercises felt too hard across ${recent.length} sessions — slowing progression down.`,
      };
    }
    return null;
  }

  // ---------- render helpers -------------------------------------------------------
  function planToText(plan) {
    const lines = [`${plan.title} · ${plan.min} min`];
    plan.blocks.forEach((b) => {
      lines.push((b.time ? b.time + " " : "") + b.label + ":");
      b.items.forEach((i) => lines.push("  · " + i.text));
    });
    if (plan.adjustments.length) {
      lines.push("Adjustments:");
      plan.adjustments.forEach((a) => lines.push("  – " + a));
    }
    return lines.join("\n");
  }

  function feedbackSummary(entry, baselines) {
    const B = mergeBaselines(baselines);
    const bits = [];
    if (entry.fb) Object.keys(entry.fb).forEach((k) => {
      const label = { easy: "too easy", ok: "just right", hard: "too hard" }[entry.fb[k]] || entry.fb[k];
      bits.push(`${(B[k] && B[k].name) || k}: ${label}`);
    });
    if (entry.rpe != null) bits.push(`RPE ${entry.rpe}`);
    return bits.join(" · ");
  }

  return {
    DEFAULT_BASELINES, DEFAULT_RULES, STRENGTH_MENUS,
    generate, learn, planToText, feedbackSummary,
    heelGate, bestPace, effectiveWeight, parseTemplate, mergeBaselines, mergeRules,
    _util: { fmtSplit, toSeconds, round5 },
  };
});
