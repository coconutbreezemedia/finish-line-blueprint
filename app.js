/* app.js — Finish Line Blueprint
 * All rendering + logic. Plan display works offline; logs live in
 * localStorage and (optionally) sync to Airtable.
 */
(function () {
  "use strict";
  const P = window.PLAN;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const DOW = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  // ---------- storage ----------
  const store = {
    logs() { try { return JSON.parse(localStorage.getItem("flb.logs") || "{}"); } catch { return {}; } },
    saveLogs(o) { localStorage.setItem("flb.logs", JSON.stringify(o)); },
    settings() { try { return JSON.parse(localStorage.getItem("flb.settings") || "{}"); } catch { return {}; } },
    saveSettings(o) { localStorage.setItem("flb.settings", JSON.stringify(o)); },
    airtable() { try { return JSON.parse(localStorage.getItem("flb.airtable") || "null"); } catch { return null; } },
    saveAirtable(o) { localStorage.setItem("flb.airtable", JSON.stringify(o)); },
  };

  // ---------- dates (parse as LOCAL midnight; no UTC drift) ----------
  function parseDate(str) {
    const [y, m, d] = str.split("-").map(Number);
    return new Date(y, m - 1, d);
  }
  function fmtISO(dt) {
    return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, "0")}-${String(dt.getDate()).padStart(2, "0")}`;
  }
  function addDays(dt, n) { const c = new Date(dt); c.setDate(c.getDate() + n); return c; }
  function startOfDay(dt) { return new Date(dt.getFullYear(), dt.getMonth(), dt.getDate()); }
  function diffDays(a, b) { return Math.round((startOfDay(a) - startOfDay(b)) / 86400000); }
  function prettyDate(dt) { return `${DOW[(dt.getDay() + 6) % 7]} ${MONTHS[dt.getMonth()]} ${dt.getDate()}`; }
  function today() { return startOfDay(new Date()); }

  function raceDate(key) {
    const s = store.settings();
    const override = s.races && s.races[key];
    if (override) return { date: parseDate(override), estimated: false };
    const r = P.races.find((x) => x.key === key);
    return { date: parseDate(r.date), estimated: r.estimated, label: r.label, note: r.note };
  }

  // ---------- figure out where "today" sits in the plan ----------
  function locate(dt) {
    const seasonStart = parseDate(P.meta.seasonStart);
    const prepStart = parseDate(P.meta.prepStart);
    const d = diffDays(dt, seasonStart);
    if (dt < prepStart) return { state: "pre", daysToStart: diffDays(seasonStart, dt) };
    if (dt < seasonStart) {
      const off = diffDays(dt, prepStart);
      return { state: "prep", prep: P.prep[off] || P.prep[P.prep.length - 1], prepOffset: off };
    }
    const wi = Math.floor(d / 7);
    const di = ((d % 7) + 7) % 7;
    if (wi >= P.weeks.length) return { state: "beyond", week: P.weeks.length };
    const week = P.weeks[wi];
    return { state: "in", week, weekIndex: wi, dayIndex: di, day: week.days[di] };
  }

  // ---------- streak (consecutive days incl. today with footDone) ----------
  function footStreak() {
    const logs = store.logs();
    let n = 0;
    let cur = today();
    // allow today to be un-logged yet without breaking a prior streak
    if (!(logs[fmtISO(cur)] && logs[fmtISO(cur)].footDone)) cur = addDays(cur, -1);
    while (logs[fmtISO(cur)] && logs[fmtISO(cur)].footDone) { n++; cur = addDays(cur, -1); }
    return n;
  }

  // ---------- small UI helpers ----------
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
  function badge(impact) {
    const label = { zero: "Zero impact", low: "Low impact", high: "Running / impact" }[impact] || impact;
    return `<span class="badge badge--${impact}">${label}</span>`;
  }
  let toastTimer;
  function toast(msg, isError) {
    const t = $("#toast");
    t.textContent = msg;
    t.hidden = false;
    t.className = "toast toast--show" + (isError ? " toast--error" : "");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { t.className = "toast"; t.hidden = true; }, 2600);
  }

  // ---------- animation utils ----------
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function animateCount(el, to) {
    if (!el) return;
    to = Number(to);
    if (reduceMotion || !isFinite(to) || to <= 0) { el.textContent = isFinite(to) ? to : el.textContent; return; }
    const dur = Math.min(1100, 300 + to * 3);
    const start = performance.now();
    function tick(now) {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(to * eased);
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = to;
    }
    requestAnimationFrame(tick);
  }
  function animateProgressFill(el, targetPct) {
    if (!el) return;
    if (reduceMotion) { el.style.width = targetPct + "%"; return; }
    el.style.width = "0%";
    requestAnimationFrame(() => requestAnimationFrame(() => { el.style.width = targetPct + "%"; }));
  }

  // ---------- HERO ----------
  function renderHero() {
    const hy = raceDate("hyrox");
    const tri = raceDate("tri");
    const t = today();
    const dToHy = diffDays(hy.date, t);
    const dToTri = diffDays(tri.date, t);
    const seasonStart = parseDate(P.meta.seasonStart);
    const span = Math.max(1, diffDays(tri.date, seasonStart));
    const pct = (dt) => Math.max(0, Math.min(100, (diffDays(dt, seasonStart) / span) * 100));
    const todayPct = pct(t);
    const hyPct = pct(hy.date);

    const nextIsHy = dToHy >= 0 && (dToHy <= dToTri || dToTri < 0);
    const primary = nextIsHy
      ? { n: dToHy, label: "days to Hyrox", cls: "hyrox" }
      : { n: dToTri, label: "days to your Tri", cls: "tri" };

    $("#hero").innerHTML = `
      <div class="hero__top">
        <div class="hero__count race-count--${primary.cls}">
          <div class="race-count__num">${primary.n < 0 ? "—" : primary.n}</div>
          <div class="race-count__label">${primary.label}</div>
        </div>
        <div class="hero__side">
          <div class="mini-count">
            <span class="mini-count__k">HYROX</span>
            <span class="mini-count__v">${dToHy < 0 ? "done" : dToHy + "d"}</span>
            <span class="mini-count__d">${prettyDate(hy.date)}${hy.estimated ? " · est" : ""}</span>
          </div>
          <div class="mini-count">
            <span class="mini-count__k">TRI</span>
            <span class="mini-count__v">${dToTri < 0 ? "done" : dToTri + "d"}</span>
            <span class="mini-count__d">${prettyDate(tri.date)}${tri.estimated ? " · est" : ""}</span>
          </div>
        </div>
      </div>
      <div class="progress">
        <div class="progress__track">
          <div class="progress__fill" style="width:${todayPct}%"></div>
          <div class="progress__marker" style="left:${hyPct}%" title="Hyrox"><span class="mk">${window.ICON.flag}</span></div>
          <div class="progress__marker progress__marker--end" title="Tri"><span class="mk">${window.ICON.flag}</span></div>
          <div class="progress__today" style="left:${todayPct}%" title="You are here"></div>
        </div>
        <div class="progress__caption"><span>Season start</span><span>Hyrox</span><span>Tri finish</span></div>
      </div>`;

    animateCount($("#hero .race-count__num"), primary.n);
    animateProgressFill($("#hero .progress__fill"), todayPct);
  }

  // ---------- CALENDAR (home) + day detail ----------
  let calSelected = fmtISO(today());
  let calView = { y: today().getFullYear(), m: today().getMonth() };

  function footChecklistHTML(dateStr) {
    const logs = store.logs();
    const done = (logs[dateStr] && logs[dateStr].footItems) || {};
    return P.footProtocol.map((f) => `
      <label class="check ${done[f.key] ? "is-checked" : ""}">
        <input type="checkbox" data-foot="${f.key}" ${done[f.key] ? "checked" : ""} />
        <span class="check__box" aria-hidden="true"></span>
        <span class="check__label"><strong>${esc(f.title)}</strong><em>${esc(f.cadence)}</em></span>
      </label>`).join("");
  }

  function renderCalendar() {
    const panel = $("#panel-cal");
    const { y, m } = calView;
    const logs = store.logs();
    const todayISO = fmtISO(today());

    let html = `<div class="cal">
      <div class="cal__head">
        <button class="cal__nav" data-dir="-1" aria-label="Previous month">${window.ICON.chevron}</button>
        <div class="cal__title">${MONTHS[m]} ${y}</div>
        <button class="cal__nav cal__nav--next" data-dir="1" aria-label="Next month">${window.ICON.chevron}</button>
      </div>
      <div class="cal__dow">${DOW.map((d) => `<div>${d}</div>`).join("")}</div>
      <div class="cal__grid">`;

    const offset = (new Date(y, m, 1).getDay() + 6) % 7;
    for (let i = 0; i < offset; i++) html += `<div class="cal__blank"></div>`;

    const daysInMonth = new Date(y, m + 1, 0).getDate();
    for (let d = 1; d <= daysInMonth; d++) {
      const iso = fmtISO(new Date(y, m, d));
      const loc = locate(parseDate(iso));
      let cls = "cal__cell", dot = "";
      if (loc.state === "in") {
        dot = `<span class="cal__dot cal__dot--${loc.day.k}"></span>`;
        if (loc.day.run) cls += " cal__cell--run";
      } else if (loc.state === "prep") {
        dot = `<span class="cal__dot cal__dot--prep"></span>`;
      }
      if (logs[iso] && logs[iso].completed) cls += " cal__cell--done";
      if (iso === todayISO) cls += " cal__cell--today";
      if (iso === calSelected) cls += " cal__cell--sel";
      html += `<button class="${cls}" data-date="${iso}"><span class="cal__num">${d}</span>${dot}</button>`;
    }
    html += `</div></div><div id="day-detail"></div>`;
    panel.innerHTML = html;

    $$("#panel-cal .cal__cell").forEach((cell) =>
      cell.addEventListener("click", () => { calSelected = cell.dataset.date; renderCalendar(); }));
    $$("#panel-cal .cal__nav").forEach((btn) =>
      btn.addEventListener("click", () => {
        let nm = calView.m + parseInt(btn.dataset.dir, 10), ny = calView.y;
        if (nm < 0) { nm = 11; ny--; } else if (nm > 11) { nm = 0; ny++; }
        calView = { y: ny, m: nm };
        renderCalendar();
      }));

    renderDayDetail(calSelected);
  }

  function renderDayDetail(dateStr) {
    const el = $("#day-detail");
    if (!el) return;
    const loc = locate(parseDate(dateStr));
    const log = store.logs()[dateStr] || {};
    const dt = parseDate(dateStr);
    let html = `<div class="today-head"><p class="eyebrow">${prettyDate(dt)}</p>`;
    let sessionTitle = "Off-plan";

    if (loc.state === "in") {
      const w = loc.week, day = loc.day;
      sessionTitle = day.t;
      html += `<h2 class="big">${esc(day.t)}</h2><p class="muted">Week ${w.n} · Phase ${w.phase} · ${esc(w.focus)}</p></div>
        <div class="session-card">
          <div class="session-card__head"><span class="session-kind session-kind--${esc(day.k)}">${esc(day.k)}</span>${badge(day.impact)}<span class="session-mins">${day.min} min</span></div>
          <p class="session-card__detail">${esc(day.d)}</p>
          ${day.run ? `<div class="gate-warning">★ Run day — only go if morning heel pain has been ≤3/10. Otherwise swap in an easy bike or rower session.</div>` : ""}
        </div>`;
    } else if (loc.state === "prep") {
      sessionTitle = "Prep: " + loc.prep.title;
      html += `<h2 class="big">${esc(loc.prep.title)}</h2><p class="muted">Prep · Day ${loc.prepOffset + 1} of ${P.prep.length}</p></div>
        <div class="card"><ul class="tasklist">${loc.prep.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul></div>`;
    } else if (loc.state === "pre") {
      html += `<h2 class="big">Nothing scheduled</h2><p class="muted">Your plan starts ${prettyDate(parseDate(P.meta.seasonStart))}.</p></div>`;
    } else {
      html += `<h2 class="big">Season stretch</h2><p class="muted">You're past the planned 8 weeks — keep the momentum and build Phase 2.</p></div>`;
    }

    html += `<div class="card footcard">
      <div class="footcard__head"><h3 class="section-title">Foot protocol</h3>
        <span class="streak-pill" title="Foot-protocol streak"><span class="mk mk--sun">${window.ICON.sun}</span><span class="streak-pill__n">${footStreak()}</span>d</span></div>
      <div class="checklist" id="day-foot">${footChecklistHTML(dateStr)}</div>
    </div>`;

    if (dt <= today()) {
      html += `<div class="card logcard">
        <h3 class="section-title">Log this day</h3>
        <div class="logform">
          <label class="check ${log.completed ? "is-checked" : ""} check--big">
            <input type="checkbox" id="log-completed" ${log.completed ? "checked" : ""} />
            <span class="check__box"></span>
            <span class="check__label"><strong>Session done</strong><em>${esc(sessionTitle)}</em></span>
          </label>
          <div class="field"><label class="field__label" for="log-heel">Morning heel pain <span class="muted">(0 none – 10 worst)</span></label>
            <input class="input" id="log-heel" type="number" min="0" max="10" inputmode="numeric" value="${log.heelPain != null ? log.heelPain : ""}" placeholder="e.g. 2" /></div>
          <div class="field"><label class="field__label" for="log-rpe">How hard did it feel? <span class="muted">RPE 1–10</span></label>
            <input class="input" id="log-rpe" type="number" min="1" max="10" inputmode="numeric" value="${log.rpe != null ? log.rpe : ""}" placeholder="optional" /></div>
          <div class="field"><label class="field__label" for="log-notes">Notes</label>
            <textarea class="input textarea" id="log-notes" rows="2" placeholder="How'd it go?">${esc(log.notes || "")}</textarea></div>
          <div class="btnrow"><button class="btn btn--primary" id="save-log">Save</button>
            <span class="sync-hint">${window.Backend.canSync() ? "Syncs to Airtable" : "Saved on this device"}</span></div>
        </div>
      </div>`;
    } else {
      html += `<div class="card"><p class="muted">Future session — nothing to log yet. Check back on the day.</p></div>`;
    }

    el.innerHTML = html;
    wireDayDetail(dateStr);
  }

  function wireDayDetail(dateStr) {
    $$("#day-foot input[data-foot]").forEach((cb) => {
      cb.addEventListener("change", () => {
        const logs = store.logs();
        const entry = logs[dateStr] || { date: dateStr };
        entry.footItems = entry.footItems || {};
        entry.footItems[cb.dataset.foot] = cb.checked;
        entry.footDone = P.footProtocol.every((f) => entry.footItems[f.key]);
        entry.date = dateStr;
        logs[dateStr] = entry;
        store.saveLogs(logs);
        cb.closest(".check").classList.toggle("is-checked", cb.checked);
        renderHeroStreakBits();
        const pillN = $("#day-detail .streak-pill__n");
        if (pillN) pillN.textContent = footStreak();
        maybeSync(dateStr);
      });
    });
    const save = $("#save-log");
    if (save) save.addEventListener("click", () => { saveTodayLog(dateStr); renderCalendar(); });
  }

  function renderHeroStreakBits() {
    const n = $(".streak-pill .streak-pill__n");
    if (n) n.textContent = footStreak();
  }

  function saveTodayLog(dateStr) {
    const logs = store.logs();
    const entry = logs[dateStr] || {};
    entry.date = dateStr;
    entry.completed = $("#log-completed") ? $("#log-completed").checked : entry.completed;
    const heel = $("#log-heel").value;
    entry.heelPain = heel === "" ? null : Math.max(0, Math.min(10, Number(heel)));
    const rpe = $("#log-rpe").value;
    entry.rpe = rpe === "" ? null : Math.max(1, Math.min(10, Number(rpe)));
    entry.notes = $("#log-notes").value.trim();
    const loc = locate(parseDate(dateStr));
    entry.session = loc.state === "in" ? loc.day.t : (loc.state === "prep" ? "Prep: " + loc.prep.title : "Off-plan");
    logs[dateStr] = entry;
    store.saveLogs(logs);
    toast("Saved ✓");
    maybeSync(dateStr);
    renderLog();
  }

  async function maybeSync(dateStr) {
    if (!window.Backend.canSync()) return;
    const s = store.settings();
    if (s.syncOff) return;
    const e = store.logs()[dateStr];
    if (!e) return;
    try {
      await window.Backend.pushLog({
        name: `${dateStr} · ${e.session || "log"}`,
        date: dateStr,
        session: e.session,
        completed: e.completed,
        heelPain: e.heelPain,
        footDone: e.footDone,
        rpe: e.rpe,
        notes: e.notes,
      });
      const hint = $("#sync-hint");
      if (hint) hint.textContent = "Synced ✓";
    } catch (err) {
      toast("Sync failed — saved locally", true);
      console.warn(err);
    }
  }

  // ---------- PLAN ----------
  function renderPlan() {
    const loc = locate(today());
    const prep = `
      <div class="prep">
        <h3 class="section-title">Prep · before Week 1</h3>
        <div class="prep-grid">
          ${P.prep.map((p, i) => {
            const dt = addDays(parseDate(P.meta.prepStart), i);
            const isToday = fmtISO(dt) === fmtISO(today());
            return `<div class="prep-card ${isToday ? "is-today" : ""}">
              <div class="prep-card__day">${prettyDate(dt)}</div>
              <div class="prep-card__title">${esc(p.title)}</div>
              <ul>${p.items.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
            </div>`;
          }).join("")}
        </div>
      </div>`;

    const weeks = P.weeks.map((w) => {
      const start = parseDate(w.start);
      const open = loc.state === "in" && loc.weekIndex === P.weeks.indexOf(w);
      const rows = w.days.map((d, i) => {
        const dt = addDays(start, i);
        const isToday = fmtISO(dt) === fmtISO(today());
        return `<div class="day-row ${isToday ? "is-today" : ""}">
          <div class="day-row__dow">${DOW[i]}<span class="day-row__date">${dt.getDate()}</span></div>
          <div class="day-row__body">
            <div class="day-row__title">${esc(d.t)} ${badge(d.impact)}</div>
            <div class="day-row__detail">${esc(d.d)}</div>
            <div class="day-row__meta">${d.min} min${d.hyrox ? " · Hyrox-relevant" : ""}${d.run ? " · ★ gated run" : ""}</div>
          </div>
        </div>`;
      }).join("");
      return `<div class="week ${open ? "is-open" : ""}">
        <button class="week__head" aria-expanded="${open}">
          <span class="week__n">Week ${w.n}</span>
          <span class="week__focus">${esc(w.focus)}</span>
          <span class="week__chev">${window.ICON.chevron}</span>
        </button>
        <div class="week__panel">
          <div class="week__guide">${esc(w.runGuidance)}</div>
          ${rows}
        </div>
      </div>`;
    }).join("");

    const phases = `
      <div class="phases">
        ${P.phases.map((ph) => `<div class="phase-chip phase-chip--${ph.n}">
          <span class="phase-chip__n">Phase ${ph.n}</span>
          <span class="phase-chip__name">${esc(ph.name)}</span>
          <span class="phase-chip__range">${esc(ph.range)}</span>
        </div>`).join("")}
      </div>`;

    $("#panel-plan").innerHTML = phases + prep + `<div class="weeks">${weeks}</div>`;
    $$("#panel-plan .week__head").forEach((h) => {
      h.addEventListener("click", () => {
        const w = h.closest(".week");
        const isOpen = w.classList.toggle("is-open");
        h.setAttribute("aria-expanded", isOpen);
      });
    });
  }

  // ---------- FOOT ----------
  function renderFoot() {
    const dateStr = fmtISO(today());
    $("#panel-foot").innerHTML = `
      <div class="card streakcard">
        <div class="streak"><div class="streak__num">${footStreak()}</div><div class="streak__label">day foot-protocol streak <span class="mk mk--sun">${window.ICON.sun}</span></div></div>
        <p class="muted">All six boxes checked = today counts. Miss a day and the streak resets — that's the point.</p>
      </div>
      <div class="card">
        <h3 class="section-title">Today's checklist</h3>
        <div class="checklist" id="foot-checklist">${footChecklistHTML(dateStr)}</div>
      </div>
      <h3 class="section-title section-title--loose">The protocol</h3>
      ${P.footProtocol.map((f) => `
        <div class="protocol-item">
          <div class="protocol-item__top"><strong>${esc(f.title)}</strong><span class="protocol-item__cadence">${esc(f.cadence)}</span></div>
          <p class="protocol-item__how">${esc(f.how)}</p>
          <p class="protocol-item__why"><em>Why:</em> ${esc(f.why)}</p>
        </div>`).join("")}`;
    // wire checklist
    $$('#foot-checklist input[data-foot]').forEach((cb) => {
      cb.addEventListener("change", () => {
        const logs = store.logs();
        const entry = logs[dateStr] || { date: dateStr };
        entry.footItems = entry.footItems || {};
        entry.footItems[cb.dataset.foot] = cb.checked;
        entry.footDone = P.footProtocol.every((f) => entry.footItems[f.key]);
        logs[dateStr] = entry;
        store.saveLogs(logs);
        cb.closest(".check").classList.toggle("is-checked", cb.checked);
        renderFoot();
        maybeSync(dateStr);
      });
    });
  }

  // ---------- LOG ----------
  function renderLog() {
    const logs = store.logs();
    const dates = Object.keys(logs).sort().reverse();
    const done = dates.filter((d) => logs[d].completed).length;
    const stats = `
      <div class="logstats">
        <div class="stat"><div class="stat__num">${done}</div><div class="stat__label">sessions done</div></div>
        <div class="stat"><div class="stat__num">${footStreak()}</div><div class="stat__label">foot streak</div></div>
        <div class="stat"><div class="stat__num">${dates.length}</div><div class="stat__label">days logged</div></div>
      </div>`;
    const rows = dates.length ? dates.map((d) => {
      const e = logs[d];
      const dt = parseDate(d);
      return `<div class="logrow">
        <div class="logrow__date">${prettyDate(dt)}</div>
        <div class="logrow__body">
          <div class="logrow__title">${e.completed ? "✅" : "⬜"} ${esc(e.session || "—")}</div>
          <div class="logrow__meta">
            ${e.heelPain != null ? `heel ${e.heelPain}/10` : ""}
            ${e.rpe != null ? ` · RPE ${e.rpe}` : ""}
            ${e.footDone ? " · foot ✓" : ""}
          </div>
          ${e.notes ? `<div class="logrow__notes">${esc(e.notes)}</div>` : ""}
        </div>
      </div>`;
    }).join("") : `<p class="muted empty">No entries yet. Log your first day from the Today tab.</p>`;

    const painData = dates.slice().reverse().filter((d) => logs[d].heelPain != null);
    let painChart = "";
    if (painData.length > 1) {
      const pts = painData.map((d) => logs[d].heelPain);
      const w = 300, h = 60, max = 10;
      const step = w / (pts.length - 1);
      const path = pts.map((v, i) => `${i === 0 ? "M" : "L"}${(i * step).toFixed(1)},${(h - (v / max) * h).toFixed(1)}`).join(" ");
      painChart = `<div class="card"><h3 class="section-title">Morning heel pain trend</h3>
        <svg class="spark" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none"><path d="${path}" fill="none" stroke="currentColor" stroke-width="2"/></svg>
        <p class="muted">Lower is better. This is your running gate.</p></div>`;
    }

    $("#panel-log").innerHTML = stats + painChart + `<div class="logrows">${rows}</div>`;
  }

  // ---------- INFO (rules + fueling) ----------
  function renderInfo() {
    const rules = P.rules.map((r) => `
      <div class="rule ${r.star ? "rule--star" : ""}">
        <div class="rule__cat">${r.star ? "★ " : ""}${esc(r.cat)}</div>
        <div class="rule__text">${esc(r.text)}</div>
      </div>`).join("");
    const fuel = P.fueling.map((f) => `
      <div class="fuel"><div class="fuel__topic">${esc(f.topic)}</div><div class="fuel__text">${esc(f.text)}</div></div>`).join("");
    const races = P.races.map((r) => {
      const rd = raceDate(r.key);
      return `<li><strong>${esc(r.label)}</strong> — ${prettyDate(rd.date)}${rd.estimated ? " (estimated)" : ""}<br /><span class="muted">${esc(r.note)}</span></li>`;
    }).join("");
    $("#panel-info").innerHTML = `
      <h3 class="section-title">The rules</h3>${rules}
      <h3 class="section-title section-title--loose">Fueling</h3>${fuel}
      <h3 class="section-title section-title--loose">Your races</h3>
      <div class="card"><ul class="racelist">${races}</ul>
      <p class="muted">Edit dates in Settings once you register.</p></div>`;
  }

  // ---------- SETTINGS DRAWER ----------
  function renderDrawer() {
    const s = store.settings();
    const rd = { hyrox: raceDate("hyrox"), tri: raceDate("tri") };
    const synced = window.Backend.canSync();
    $("#drawer-body").innerHTML = `
      <div class="field">
        <label class="field__label" for="set-name">Your name <span class="muted">(this device only)</span></label>
        <input class="input" id="set-name" value="${esc(s.name || "")}" placeholder="optional" />
      </div>
      <div class="field">
        <label class="field__label" for="set-cal">Daily calorie target</label>
        <input class="input" id="set-cal" type="number" inputmode="numeric" value="${s.calorieTarget || ""}" placeholder="optional" />
      </div>
      <div class="field2">
        <div class="field"><label class="field__label" for="set-hyrox">Hyrox date</label>
          <input class="input" id="set-hyrox" type="date" value="${fmtISO(rd.hyrox.date)}" /></div>
        <div class="field"><label class="field__label" for="set-tri">Tri date</label>
          <input class="input" id="set-tri" type="date" value="${fmtISO(rd.tri.date)}" /></div>
      </div>
      ${synced ? `
      <label class="check ${s.syncOff ? "" : "is-checked"} check--inline">
        <input type="checkbox" id="set-sync" ${s.syncOff ? "" : "checked"} />
        <span class="check__box"></span><span class="check__label"><strong>Auto-sync my workouts to Airtable</strong></span>
      </label>` : ""}
      <div class="btnrow">
        <button class="btn btn--primary" id="save-settings">Save</button>
      </div>

      <hr class="rule-line" />
      <h3 class="section-title">Account</h3>
      <p class="conn-status ${synced ? "conn-status--ok" : ""}">${synced
        ? "Logged in — workouts sync to Airtable automatically."
        : "Using offline (no sync). Log in to sync to Airtable."}</p>
      <div class="btnrow">
        <button class="btn btn--ghost" id="logout-btn">${synced ? "Log out" : "Log in"}</button>
      </div>`;

    $("#save-settings").addEventListener("click", () => {
      const ns = store.settings();
      ns.name = $("#set-name").value.trim();
      ns.calorieTarget = $("#set-cal").value ? Number($("#set-cal").value) : null;
      ns.races = ns.races || {};
      ns.races.hyrox = $("#set-hyrox").value || null;
      ns.races.tri = $("#set-tri").value || null;
      if ($("#set-sync")) ns.syncOff = !$("#set-sync").checked;
      store.saveSettings(ns);
      toast("Settings saved ✓");
      renderAll();
      closeDrawer();
    });

    $("#logout-btn").addEventListener("click", () => {
      window.Backend.logout();
      closeDrawer();
      showLogin();
    });
  }

  function openDrawer() { renderDrawer(); $("#drawer").hidden = false; $("#drawer-backdrop").hidden = false; requestAnimationFrame(() => { $("#drawer").classList.add("is-open"); $("#drawer-backdrop").classList.add("is-open"); }); }
  function closeDrawer() { $("#drawer").classList.remove("is-open"); $("#drawer-backdrop").classList.remove("is-open"); setTimeout(() => { $("#drawer").hidden = true; $("#drawer-backdrop").hidden = true; }, 250); }

  // ---------- tabs ----------
  function switchTab(name) {
    $$(".tab").forEach((t) => t.classList.toggle("is-active", t.dataset.panel === name));
    $$(".panel").forEach((p) => p.classList.toggle("is-active", p.id === "panel-" + name));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---------- render all ----------
  function renderAll() {
    renderHero();
    renderCalendar();
    renderPlan();
    renderFoot();
    renderLog();
    renderInfo();
    animateCount($("#panel-foot .streak__num"), footStreak());
    $$("#panel-log .stat__num").forEach((el) => animateCount(el, el.textContent));
  }

  function injectChrome() {
    const brand = $("#brand");
    if (brand && window.LOGO_LOCKUP) brand.innerHTML = window.LOGO_LOCKUP;
    const gear = $("#open-settings");
    if (gear && window.ICON) gear.innerHTML = window.ICON.gear;
    const close = $("#close-settings");
    if (close && window.ICON) close.innerHTML = window.ICON.close;
    const lb = $("#login-badge");
    if (lb && window.LOGO_BADGE) lb.innerHTML = window.LOGO_BADGE;
  }

  function registerSW() {
    if (!("serviceWorker" in navigator)) return;
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("service-worker.js").catch(() => {});
    });
  }

  // ---------- login gate ----------
  function showLogin() {
    const el = $("#login");
    el.hidden = false;
    requestAnimationFrame(() => el.classList.add("is-open"));
    const input = $("#login-input");
    if (input) setTimeout(() => input.focus(), 120);
  }
  function hideLogin() {
    const el = $("#login");
    el.classList.remove("is-open");
    setTimeout(() => { el.hidden = true; }, 250);
  }
  function wireLogin() {
    const go = $("#login-go"), input = $("#login-input"), err = $("#login-err"), skip = $("#login-skip");
    async function attempt() {
      const pw = input.value.trim();
      if (!pw) { input.focus(); return; }
      go.disabled = true; go.textContent = "Checking…"; err.hidden = true;
      const res = await window.Backend.login(pw);
      go.disabled = false; go.textContent = "Let's ride";
      if (res.ok) { hideLogin(); toast("You're in ✓"); renderAll(); }
      else { err.textContent = res.error; err.hidden = false; }
    }
    go.addEventListener("click", attempt);
    input.addEventListener("keydown", (e) => { if (e.key === "Enter") attempt(); });
    skip.addEventListener("click", () => { window.Backend.loginOffline(); hideLogin(); renderAll(); });
  }

  function init() {
    injectChrome();
    registerSW();
    renderAll();
    wireLogin();
    $$(".tab").forEach((t) => t.addEventListener("click", () => switchTab(t.dataset.panel)));
    $("#open-settings").addEventListener("click", openDrawer);
    $("#close-settings").addEventListener("click", closeDrawer);
    $("#drawer-backdrop").addEventListener("click", closeDrawer);
    if (!window.Backend.isLoggedIn()) showLogin();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
