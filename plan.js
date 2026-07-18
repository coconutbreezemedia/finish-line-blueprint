/*
 * Finish Line Blueprint — training plan data
 * -------------------------------------------------------------
 * This file is the single source of truth the app renders from.
 * It is intentionally GENERIC (no personal data): the plan is a
 * beginner-friendly, low-impact foundation block for a combined
 * Hyrox + Sprint-Triathlon season, built around protecting the
 * feet while building an aerobic engine.
 *
 * Anything personal (your name, weight, calorie target, real race
 * dates, and every workout log) is entered in the app and stored
 * in your browser + your Airtable base — never committed here.
 */

window.PLAN = {
  meta: {
    title: "Finish Line Blueprint",
    tagline: "Two finish lines. One foundation.",
    // Prep = the two days before the first Monday. Week 1 starts Monday.
    prepStart: "2026-07-18", // Sat
    seasonStart: "2026-07-20", // Mon — Week 1, Day 1
    timezone: "America/New_York",
  },

  // Race dates are ESTIMATES until you register — edit in Settings.
  races: [
    { key: "hyrox", label: "Hyrox", date: "2027-02-28", estimated: true,
      note: "8×1km run + 8 functional stations. Run-heavy — foot care matters." },
    { key: "tri", label: "Sprint Triathlon", date: "2027-04-25", estimated: true,
      note: "~750m swim · 20km bike · 5k run. 'Just finish' as a beginner." },
  ],

  phases: [
    { n: 1, key: "foundation", name: "Foundation",
      range: "Weeks 1–8 · Jul–Sep",
      focus: "Build the aerobic engine with zero-impact work, rebuild foot tolerance, and lay a strength base. Running phases in only when the foot says yes.",
      goal: "Finish an easy 25–30 min continuous run pain-free, comfortably bike 60 min, swim continuous laps, and own the daily foot protocol." },
    { n: 2, key: "hyrox-build", name: "Hyrox Build",
      range: "Weeks 9–~28 · Sep–Feb",
      focus: "Station-specific strength-endurance (sled, carries, wall balls, rower/ski), compromised running off strength, and race simulations.",
      goal: "Complete a full Hyrox simulation and toe the start line ready to finish. Detailed after Phase 1 — come back ~2 weeks out." },
    { n: 3, key: "tri-sharpen", name: "Tri Sharpen",
      range: "Post-Hyrox · Feb–Apr",
      focus: "Swim volume, brick sessions (bike→run), and open-water/pool confidence while holding the strength base.",
      goal: "Cross the Sprint-Tri finish line. Built after Hyrox is done." },
  ],

  // The load-bearing wall. Daily unless noted. Morning heel-pain (0–10)
  // is the gate metric that controls when running is allowed to progress.
  footProtocol: [
    { key: "heel-check", title: "Morning heel-pain check", cadence: "Every morning",
      how: "Before your feet hit the floor, rate first-step heel pain 0–10. Log it. This number gates your running (see the ★ rule).",
      why: "First-step pain is the cleanest daily read on how the fascia is doing." },
    { key: "calf-raise", title: "Heavy-slow calf raise (Rathleff)", cadence: "Every other day",
      how: "Single leg, towel bunched under the toes, on a step. 3s up · 2s hold · 3s down. 3 sets of 8–12. Add a loaded backpack as it gets easy.",
      why: "The single most evidence-backed plantar-fasciitis fix — beats stretching alone in head-to-head trials." },
    { key: "pf-stretch", title: "Plantar fascia stretch", cadence: "Morning + before activity",
      how: "Cross ankle over knee, pull toes back toward shin until you feel the arch stretch. 10 reps × 10s.",
      why: "Loads the fascia gently through range before you ask it to work." },
    { key: "calf-stretch", title: "Calf + soleus stretch", cadence: "Daily",
      how: "Wall stretch, back leg straight (calf) then bent (soleus). 2 × 30s each.",
      why: "Tight calves pull on the fascia. Keep them long." },
    { key: "roll", title: "Arch roll", cadence: "Daily / post-session",
      how: "Roll a ball or frozen water bottle under the arch, moderate pressure, 2–3 min per foot.",
      why: "Desensitizes and brings blood flow; the cold doubles as anti-inflammatory." },
    { key: "footwear", title: "Supportive footwear", cadence: "All day",
      how: "Cushioned, supportive shoes. Avoid barefoot on hard floors, especially first thing in the morning.",
      why: "Most of your fascia's daily load is just walking around — win that quietly." },
  ],

  rules: [
    { star: true, cat: "Running gate", text:
      "Only ADD or PROGRESS running when morning heel pain has been ≤3/10 for 5+ straight days. If it climbs above 4, drop that week's running and go back to zero-impact until it settles." },
    { cat: "Impact", text:
      "Zero-impact first. The Peloton, pool, and rower build the exact same aerobic engine both races need — without loading the fascia. You lose nothing by starting there." },
    { cat: "Consistency", text:
      "The foot protocol is daily and non-negotiable — treat it like brushing your teeth. Consistency beats intensity every week." },
    { cat: "Efficiency", text:
      "Everything does double duty. Farmers carries, sled pushes and the rower are literally Hyrox stations AND your strength/cardio work." },
    { cat: "Fueling", text:
      "Fuel the work. Don't stack your steepest calorie deficit on your highest-volume weeks — under-fueling a hard ramp is how beginners get stress injuries." },
    { cat: "Safety", text:
      "Get medical clearance before Day 1. Sharp, worsening, or lingering pain is a stop sign — back off and check with a professional." },
    { cat: "Recovery", text:
      "Recovery is training. Cold plunge post-session, 7–9h sleep, and at least one full rest day (Sundays) every week." },
  ],

  fueling: [
    { topic: "Daily target", text: "Set your own calorie target in Settings. Flex it UP on your hardest days — the number is a guide, not a cage." },
    { topic: "Around sessions", text: "Prioritize carbs before and after workouts — a little fuel in, then protein + carbs to recover." },
    { topic: "Protein", text: "Aim ~1.6–2.0 g/kg bodyweight daily to protect muscle and support tissue repair (including the fascia)." },
    { topic: "Ramp weeks", text: "On your highest-volume weeks, ease the deficit. Recovery and injury-prevention outrank the scale short-term." },
    { topic: "Hydration", text: "Drink through the day; add electrolytes on long or sweaty sessions." },
  ],

  // Two-day on-ramp before Week 1.
  prep: [
    { key: "prep-1", offset: 0, title: "Clearance + gear",
      items: [
        "Get (or book) your doctor's green light to start training",
        "Get supportive, cushioned trainers — no worn-out shoes",
        "Confirm access: Peloton / bike, pool, rower or ski-erg",
        "Watch the foot-protocol moves once so the form is right",
        "Open this app on your phone and add it to your home screen",
      ] },
    { key: "prep-2", offset: 1, title: "Baseline + first protocol",
      items: [
        "Capture a baseline: bodyweight, resting heart rate, morning heel pain",
        "Note how long you can comfortably bike and walk today",
        "Do your first full Foot Protocol session",
        "Register the races so we can lock real dates (edit them in Settings)",
        "Block Week 1's sessions into your calendar",
      ] },
  ],

  /*
   * Weeks. Each day: t=title, k=kind, d=detail, min=minutes,
   * impact = zero | low | high, hyrox=true if it doubles as a Hyrox
   * station, run=true if it contains running. Day 7 (Sun) is rest.
   * The app computes each day's real date from the week start.
   */
  weeks: [
    { n: 1, phase: 1, start: "2026-07-20", focus: "Meet the engine. Zero impact all week.",
      runGuidance: "No running this week — on purpose. We build fitness on the bike, in the pool and on the rower while the foot protocol goes to work.",
      days: [
        { t: "Strength A", k: "strength", d: "Full-body foundations: goblet squat, hip hinge, farmers carry, dead-bug core. 3 rounds, easy loads, focus on form.", min: 50, impact: "low", hyrox: true },
        { t: "Zone 2 Bike", k: "bike", d: "Peloton or road bike at a conversational pace — you can still talk. Easy spin.", min: 30, impact: "zero" },
        { t: "Swim / Rower", k: "swim", d: "Pool: easy laps with rest as needed, focus on relaxed breathing. No pool? 20 min easy rower.", min: 30, impact: "zero" },
        { t: "Strength B", k: "strength", d: "Posterior chain + upper: glute bridge, row, sled push (or band pull), suitcase carry, plank.", min: 50, impact: "low", hyrox: true },
        { t: "Zone 2 Bike", k: "bike", d: "Easy spin again — keep it conversational. Add 5 min if you feel good.", min: 35, impact: "zero" },
        { t: "Long easy aerobic", k: "bike", d: "Longer conversational bike (or split bike + rower). This is your weekly endurance builder.", min: 60, impact: "zero" },
        { t: "Rest + mobility", k: "rest", d: "Full rest. Foot protocol + a gentle 10 min mobility flow only.", min: 15, impact: "zero" },
      ] },

    { n: 2, phase: 1, start: "2026-07-27", focus: "Same shape, a touch more volume. Still zero impact.",
      runGuidance: "Still no running. If your heel pain is trending down all week, you're on track to trial running in Week 3.",
      days: [
        { t: "Strength A", k: "strength", d: "Repeat Week 1 A-day, add a little load where form is solid. Same 3 rounds.", min: 55, impact: "low", hyrox: true },
        { t: "Zone 2 Bike", k: "bike", d: "Conversational spin, 35–40 min.", min: 40, impact: "zero" },
        { t: "Swim / Rower", k: "swim", d: "Easy continuous swim — try to reduce rest between lengths. Or 25 min rower.", min: 35, impact: "zero" },
        { t: "Strength B", k: "strength", d: "B-day, add load on carries and hinge. Keep the sled/band push honest.", min: 55, impact: "low", hyrox: true },
        { t: "Zone 2 Bike / Rower", k: "bike", d: "Mixed easy cardio — 20 min bike + 20 min rower, both easy.", min: 40, impact: "zero" },
        { t: "Long easy aerobic", k: "bike", d: "Longer conversational bike, 65–70 min. Fuel a little mid-ride.", min: 70, impact: "zero" },
        { t: "Rest + mobility", k: "rest", d: "Full rest. Foot protocol + mobility only.", min: 15, impact: "zero" },
      ] },

    { n: 3, phase: 1, start: "2026-08-03", focus: "First running trial — if the foot says yes.",
      runGuidance: "★ Only if morning heel pain has been ≤3/10 for 5+ days: trial walk/run. If not, repeat Week 2 and try again next week — you lose nothing.",
      days: [
        { t: "Strength A", k: "strength", d: "A-day, steady progression. Add a set of step-ups for single-leg strength.", min: 55, impact: "low", hyrox: true },
        { t: "Walk/Run trial", k: "run", d: "GATED: 5 min brisk walk warm-up, then 5 × (1 min easy jog / 2 min walk), 5 min walk down. On grass/track if possible. Skip if heel pain >3.", min: 35, impact: "high", run: true },
        { t: "Swim / Rower", k: "swim", d: "Easy swim or rower intervals: 6 × 3 min moderate / 1 min easy.", min: 35, impact: "zero" },
        { t: "Strength B", k: "strength", d: "B-day. Extra calf and foot work today given the new running load.", min: 55, impact: "low", hyrox: true },
        { t: "Zone 2 Bike", k: "bike", d: "Easy recovery-paced spin to flush the legs after the run trial.", min: 40, impact: "zero" },
        { t: "Long easy aerobic", k: "bike", d: "Long conversational bike, 70 min.", min: 70, impact: "zero" },
        { t: "Rest + mobility", k: "rest", d: "Full rest. Check in: how did the foot handle running? Log it.", min: 15, impact: "zero" },
      ] },

    { n: 4, phase: 1, start: "2026-08-10", focus: "Progress the run intervals, add a mini brick.",
      runGuidance: "★ If Week 3's run trial felt fine and morning pain stayed ≤3: progress the intervals below. If the foot flared, hold at Week 3's volume.",
      days: [
        { t: "Strength A", k: "strength", d: "A-day progression. Loads climbing, form still first.", min: 55, impact: "low", hyrox: true },
        { t: "Walk/Run", k: "run", d: "GATED: warm-up walk, then 5 × (2 min jog / 1.5 min walk), walk down. Easy effort throughout.", min: 38, impact: "high", run: true },
        { t: "Swim / Rower", k: "swim", d: "Swim endurance — longest continuous effort yet, easy pace. Or rower 30 min.", min: 40, impact: "zero" },
        { t: "Strength B", k: "strength", d: "B-day + foot care. Sled push a little heavier — it's a Hyrox station.", min: 55, impact: "low", hyrox: true },
        { t: "Mini brick", k: "brick", d: "30 min easy bike straight into a 10 min brisk walk (add 1–2 short jogs only if the foot's happy). Teaches legs to run off the bike.", min: 45, impact: "low", run: true },
        { t: "Long easy aerobic", k: "bike", d: "Long conversational bike, 75 min.", min: 75, impact: "zero" },
        { t: "Rest + mobility", k: "rest", d: "Full rest. Foot protocol + mobility only.", min: 15, impact: "zero" },
      ] },

    { n: 5, phase: 1, start: "2026-08-17", focus: "Runs get longer intervals; bike gets longer.",
      runGuidance: "★ Keep gating on the morning number. Running should still feel almost too easy — that's correct at this stage.",
      days: [
        { t: "Strength A", k: "strength", d: "A-day. Introduce a light overhead press for Hyrox wall-ball readiness.", min: 55, impact: "low", hyrox: true },
        { t: "Walk/Run", k: "run", d: "GATED: 6 × (3 min jog / 1 min walk). Keep the jog conversational.", min: 40, impact: "high", run: true },
        { t: "Swim / Rower", k: "swim", d: "Swim technique + endurance, or rower 5 × 4 min moderate.", min: 40, impact: "zero" },
        { t: "Strength B", k: "strength", d: "B-day, carries longer (Hyrox farmers-carry is 200m). Extra foot care.", min: 55, impact: "low", hyrox: true },
        { t: "Zone 2 Bike", k: "bike", d: "Easy spin, 45 min.", min: 45, impact: "zero" },
        { t: "Long easy aerobic", k: "bike", d: "Long conversational bike, 80 min. Practice mid-session fueling.", min: 80, impact: "zero" },
        { t: "Rest + mobility", k: "rest", d: "Full rest. Foot protocol + mobility only.", min: 15, impact: "zero" },
      ] },

    { n: 6, phase: 1, start: "2026-08-24", focus: "First continuous run.",
      runGuidance: "★ If the intervals have been comfortable and pain-free, replace one interval run with a short CONTINUOUS easy jog. Walk breaks still allowed anytime.",
      days: [
        { t: "Strength A", k: "strength", d: "A-day. Steady progression across the board.", min: 55, impact: "low", hyrox: true },
        { t: "Continuous run", k: "run", d: "GATED: warm-up walk, then 10–15 min continuous easy jog, walk down. Slow is fine — finishing is the win.", min: 35, impact: "high", run: true },
        { t: "Swim / Rower", k: "swim", d: "Swim endurance, longest yet. Or rower 35 min steady.", min: 40, impact: "zero" },
        { t: "Strength B", k: "strength", d: "B-day + foot care. Sled and carries heavier.", min: 55, impact: "low", hyrox: true },
        { t: "Zone 2 Bike / Rower", k: "bike", d: "Easy mixed cardio, 45 min.", min: 45, impact: "zero" },
        { t: "Long easy aerobic", k: "bike", d: "Long conversational bike, 80 min.", min: 80, impact: "zero" },
        { t: "Rest + mobility", k: "rest", d: "Full rest. Foot protocol + mobility only.", min: 15, impact: "zero" },
      ] },

    { n: 7, phase: 1, start: "2026-08-31", focus: "Longer continuous run, first run-off-bike brick.",
      runGuidance: "★ Still gating. This week introduces a proper brick — the tri skill of running on bike legs — kept very short.",
      days: [
        { t: "Strength A", k: "strength", d: "A-day. Hold loads, sharpen form; you'll test next week.", min: 55, impact: "low", hyrox: true },
        { t: "Continuous run", k: "run", d: "GATED: 15–20 min continuous easy jog. Conversational the whole way.", min: 35, impact: "high", run: true },
        { t: "Swim / Rower", k: "swim", d: "Swim endurance + a few faster lengths. Or rower intervals.", min: 40, impact: "zero" },
        { t: "Strength B", k: "strength", d: "B-day + foot care.", min: 55, impact: "low", hyrox: true },
        { t: "Brick (bike→run)", k: "brick", d: "40 min easy bike → 8–10 min easy jog immediately after. Short on purpose. Note how the legs feel.", min: 50, impact: "high", run: true },
        { t: "Long easy aerobic", k: "bike", d: "Long conversational bike, 80–85 min.", min: 85, impact: "zero" },
        { t: "Rest + mobility", k: "rest", d: "Full rest. Foot protocol + mobility only.", min: 15, impact: "zero" },
      ] },

    { n: 8, phase: 1, start: "2026-09-07", focus: "Test + deload. Take stock before Phase 2.",
      runGuidance: "★ Lighter week to absorb the work. One benchmark run to see how far you've come — then rest up for Hyrox Build.",
      days: [
        { t: "Strength A (light)", k: "strength", d: "A-day at ~80% loads. Move well, don't grind.", min: 45, impact: "low", hyrox: true },
        { t: "Benchmark run", k: "run", d: "GATED: easy 25–30 min continuous jog if the foot's ready — your Phase 1 finish line. Otherwise repeat your best interval session.", min: 40, impact: "high", run: true },
        { t: "Easy swim", k: "swim", d: "Relaxed continuous swim, no clock.", min: 30, impact: "zero" },
        { t: "Strength B (light)", k: "strength", d: "B-day at ~80%. Good foot care to close the phase.", min: 45, impact: "low", hyrox: true },
        { t: "Easy bike", k: "bike", d: "Short easy spin, 30 min.", min: 30, impact: "zero" },
        { t: "Long easy aerobic", k: "bike", d: "Relaxed 60 min bike. Reflect on 8 weeks of progress.", min: 60, impact: "zero" },
        { t: "Rest + review", k: "rest", d: "Rest. Review baselines vs. now, then come back to build Phase 2 (Hyrox).", min: 15, impact: "zero" },
      ] },
  ],
};
