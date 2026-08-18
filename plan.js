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
    prepStart: "2026-07-18",
    seasonStart: "2026-07-20",
    timezone: "America/New_York",
    totalWeeks: 40,
  },

  races: [
    { key: "hyrox", label: "Hyrox", date: "2027-02-28", estimated: true, division: "Women's Doubles",
      note: "Women's Doubles. You BOTH run all 8×1km together (within 5s of each other). Stations are split you-go-I-go, but the loads are full Women's Open: SkiErg 1000m · sled push 50m @ 102kg · sled pull 50m @ 78kg · burpee broad jump 80m · row 1000m · farmers carry 200m @ 2×16kg · sandbag lunge 100m @ 10kg · 100 wall balls @ 4kg." },
    { key: "tri", label: "Sprint Triathlon", date: "2027-04-25", estimated: true,
      note: "750m swim · 20km bike · 5km run. Built on the same engine, sharpened after Hyrox." },
  ],

  phases: [
    {
      "n": 1,
      "key": "foundation",
      "name": "Foundation",
      "weeks": [
        1,
        6
      ],
      "range": "Weeks 1–6 · Jul–Aug",
      "focus": "Build a real aerobic engine on zero-impact modalities, rebuild foot tolerance, and start Hyrox station work from day one. Running phases in on the foot's terms.",
      "goal": "Run 25 min continuous pain-free, post a first honest 1000m SkiErg + row benchmark — and lock in a doubles partner whose easy 1km pace matches yours."
    },
    {
      "n": 2,
      "key": "hyrox-build",
      "name": "Hyrox Build",
      "weeks": [
        7,
        22
      ],
      "range": "Weeks 7–22 · Aug–Dec",
      "focus": "Ramp running to the full 8km race volume (doubles doesn't split the running — you run all of it), and train stations as short violent you-go-I-go intervals at full race load. Monthly doubles simulations of increasing completeness.",
      "goal": "Complete a full doubles simulation — 8km of running plus your half of all 8 stations — and run 8 × 1km at a pace you and your partner can both hold."
    },
    {
      "n": 3,
      "key": "hyrox-peak",
      "name": "Peak & Race",
      "weeks": [
        23,
        32
      ],
      "range": "Weeks 23–32 · Dec–Feb",
      "focus": "Volume stops growing; everything moves to race pace. Three full doubles simulations with your agreed changeover splits, then a three-week taper into race day.",
      "goal": "Cross the Hyrox Women's Doubles finish line on Sun 28 Feb 2027, faster than your week 20 simulation — together, within 5 seconds, the whole way."
    },
    {
      "n": 4,
      "key": "tri-sharpen",
      "name": "Tri Sharpen",
      "weeks": [
        33,
        40
      ],
      "range": "Weeks 33–40 · Mar–Apr",
      "focus": "Recover from Hyrox, then turn the swim from the weak link into a finish. Bike gets race-specific and bricks come weekly.",
      "goal": "Cross the Sprint Triathlon finish line on Sun 25 Apr 2027 — second finish line, one season."
    }
  ],

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
    { star: true, cat: "Doubles · running", text:
      "You and your partner run all 8km together, within 5 seconds of each other — more than that is a 1-minute penalty, and three penalties puts you out of competition. Running is the one thing doubles does NOT split, so it's the one thing you can't be carried on. Train the runs as if you were racing singles." },
    { cat: "Doubles · loads", text:
      "Doubles does not reduce the weights. You still push the full 102kg sled and lunge the full 10kg bag — you just do fewer metres of it. Keep training the heavy loads; only the volume drops." },
    { cat: "Doubles · you-go-I-go", text:
      "Stations are split however you like, switching as often as you like. That makes them ~1:1 work-to-rest intervals at a much higher intensity than singles. Train short violent bursts, not long grinds — and practise recovering ON YOUR FEET, since the resting partner isn't allowed to kneel or sit." },
    { cat: "Doubles · your partner", text:
      "Pick a partner whose easy 1km pace matches yours. Mismatched run pace is the single most common way doubles teams bleed time and collect penalties — it matters far more than who's stronger on the sled." },
    { cat: "Doubles · changeovers", text:
      "Eight stations × several switches each = a lot of handovers. Sloppy changeovers cost more time than a slow rep. Agree your splits BEFORE the race (e.g. wall balls 10-at-a-time, row 250m each) and rehearse them in your sim sessions." },
    { cat: "Strength · machine first", text:
      "Build strength on stable machines first: leg press or hack squat, seated leg curl or glute drive, chest-supported row or lat pulldown, and chest/shoulder press. Keep 2–3 clean reps in reserve. Free weights and functional tools enter after the machine work only when they train an actual Hyrox skill: farmers carry, sled, sandbag lunge, wall ball, and controlled burpee broad jump." }
  ],

  fueling: [
    { topic: "Daily target", text: "Set your own calorie target in Settings. Flex it UP on your hardest days — the number is a guide, not a cage." },
    { topic: "Around sessions", text: "Prioritize carbs before and after workouts — a little fuel in, then protein + carbs to recover." },
    { topic: "Protein", text: "Aim ~1.6–2.0 g/kg bodyweight daily to protect muscle and support tissue repair (including the fascia)." },
    { topic: "Ramp weeks", text: "On your highest-volume weeks, ease the deficit. Recovery and injury-prevention outrank the scale short-term." },
    { topic: "Hydration", text: "Drink through the day; add electrolytes on long or sweaty sessions." },
  ],

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

  weeks: [
    {
      "n": 1,
      "phase": 1,
      "start": "2026-07-20",
      "focus": "Meet the engine. Zero impact, but real volume from day one.",
      "runGuidance": "No running yet — one week of foot protocol first. Everything else starts now, and starts honest.",
      "deload": false,
      "days": [
        {
          "t": "Strength A · machine full body",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: MACHINE FIRST. Leg press 4×8–10, seated leg curl 3×10, chest-supported row machine 3×10, chest press machine 3×10. Then Hyrox skill: farmers carry 4×40m + dead-bug 3×12. Log machine settings and loads in Hevy. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "SkiErg + Row intro",
          "k": "erg",
          "d": "45-MIN COACHED · 0–5 WARM: easy SkiErg/row · 5–17 BASE: technique + steady work · 17–29 PUSH: prescribed intervals · 29–40 POWER: short all-outs with standing recovery · 40–45 COOL: easy pull + lats/calves. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: SkiErg 4 × 500m @ moderate, 90s rest. Then Row 3 × 500m @ moderate, 90s rest. Learn the stroke now — both are race stations. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Zone 2 Bike",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 45 min conversational spin. You should be able to talk in full sentences the whole way. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Strength B · machines + sled",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: MACHINE FIRST. Glute-drive/hip-thrust machine 4×8, shoulder press machine 3×10, lat pulldown 3×10, leg extension 3×10. Then Hyrox skill: sled push 6×20m, wall balls 3×12, plank 3×45s. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 800m total: 8 × 50m easy w/ 20s rest, then 400m continuous relaxed. Breathing first, speed never. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block steady bike. Last 15 min a touch harder. Practice mid-session fuel + fluid. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Full rest. Foot protocol + 10 min mobility flow. Nothing else. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        }
      ]
    },
    {
      "n": 2,
      "phase": 1,
      "start": "2026-07-27",
      "focus": "Add erg volume. First run trial if the foot allows.",
      "runGuidance": "★ If morning heel pain has been ≤3/10 for 5+ days, take the walk/run trial. If not, swap it for the SkiErg session and try again next week — you lose nothing.",
      "deload": false,
      "days": [
        {
          "t": "Strength A · machine full body",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Repeat the machine circuit. Add the smallest stack increment only where week 1 felt clean; keep 2–3 reps in reserve. Farmers carries 4×50m after the machines. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Walk/Run trial",
          "k": "run",
          "d": "45-MIN COACHED · 0–5 WARM: brisk walk + dynamic ankles · 5–17 BASE: conversational run/walk · 17–29 PUSH: controlled intervals · 29–40 POWER: short faster efforts with full walk recoveries · 40–45 COOL: easy walk + calf mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: GATED. 10 min brisk walk, then 6 × (1 min easy jog / 2 min walk), 5 min walk down. Grass or track. Total jog: 6 min — deliberately tiny. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "SkiErg intervals",
          "k": "erg",
          "d": "45-MIN COACHED · 0–5 WARM: easy SkiErg/row · 5–17 BASE: technique + steady work · 17–29 PUSH: prescribed intervals · 29–40 POWER: short all-outs with standing recovery · 40–45 COOL: easy pull + lats/calves. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: SkiErg 6 × 500m @ moderate-hard, 90s rest. Target: hold the same split across all 6. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Strength B · machines + sled",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Glute-drive machine, shoulder press machine, lat pulldown and leg extension: 3×10 each. Then sled push 8×20m and wall balls 4×15 — controlled depth before speed. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 1000m: 4 × 100m easy, 300m continuous, 4 × 50m build, 100m cool.  Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Long aerobic + row",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block bike straight into 2000m row @ steady. Back-to-back modality is a Hyrox skill. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Full rest. Foot protocol + 10 min mobility flow. Nothing else. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        }
      ]
    },
    {
      "n": 3,
      "phase": 1,
      "start": "2026-08-03",
      "focus": "Running becomes a real session. Erg volume climbs.",
      "runGuidance": "★ Still gated on the morning number. Jog time roughly doubles — it should feel almost too easy.",
      "deload": false,
      "days": [
        {
          "t": "Strength A · machine full body",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Leg press, seated leg curl, chest-supported row and chest press: 3×8–10 each. Then supported low step-ups 3×10/leg + farmers carry 4×50m. Machines stay the strength base. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Walk/Run",
          "k": "run",
          "d": "45-MIN COACHED · 0–5 WARM: brisk walk + dynamic ankles · 5–17 BASE: conversational run/walk · 17–29 PUSH: controlled intervals · 29–40 POWER: short faster efforts with full walk recoveries · 40–45 COOL: easy walk + calf mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: GATED. 10 min walk, then 6 × (2 min jog / 90s walk), walk down. Total jog: 12 min. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Row intervals",
          "k": "erg",
          "d": "45-MIN COACHED · 0–5 WARM: easy SkiErg/row · 5–17 BASE: technique + steady work · 17–29 PUSH: prescribed intervals · 29–40 POWER: short all-outs with standing recovery · 40–45 COOL: easy pull + lats/calves. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Row 5 × 750m @ moderate-hard, 2 min rest. Then SkiErg 500m easy to finish. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Strength B · machines + sled",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Glute-drive machine 4×8, shoulder press machine 3×8–10, lat pulldown 3×10, leg extension 3×10. Then sled 8×20m + wall balls 4×15. Extra calf/foot work today. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 1200m: 200m warm, 6 × 100m @ steady w/ 20s rest, 300m continuous, 100m cool. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block steady bike. Hold a slightly firmer pace than week 2. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Full rest. Foot protocol + 10 min mobility flow. Nothing else. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        }
      ]
    },
    {
      "n": 4,
      "phase": 1,
      "start": "2026-08-10",
      "focus": "First continuous jog. Sled and carry loads go up.",
      "runGuidance": "★ Replace intervals with a short CONTINUOUS jog if the last two run days were pain-free. Walk breaks allowed any time, no penalty.",
      "deload": false,
      "days": [
        {
          "t": "Strength A · machine strength",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Leg press 4×6–8 heavier, seated leg curl 4×8, chest-supported row 3×8, chest press machine 3×8. Then farmers carries 4×60m. Increase the machine stack only with clean form. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Continuous run",
          "k": "run",
          "d": "45-MIN COACHED · 0–5 WARM: brisk walk + dynamic ankles · 5–17 BASE: conversational run/walk · 17–29 PUSH: controlled intervals · 29–40 POWER: short faster efforts with full walk recoveries · 40–45 COOL: easy walk + calf mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: GATED. 10 min walk warm-up, then 15 min continuous easy jog (~1.5–2km), walk down. Slow is correct. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "SkiErg + Row",
          "k": "erg",
          "d": "45-MIN COACHED · 0–5 WARM: easy SkiErg/row · 5–17 BASE: technique + steady work · 17–29 PUSH: prescribed intervals · 29–40 POWER: short all-outs with standing recovery · 40–45 COOL: easy pull + lats/calves. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: SkiErg 1000m @ race effort (this is the exact station distance — note your time). Rest 3 min. Row 1000m @ race effort. Note that too. These are your first benchmarks. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Strength B · machines + sled",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Shoulder press machine 4×8, glute-drive machine 4×8 and lat pulldown 3×8. Then sled push 10×20m, wall balls 5×15 and supported sandbag lunge 3×15m. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 1400m: 300m warm, 8 × 100m @ steady, 400m continuous, 100m cool. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block bike. Longest yet. Eat and drink on schedule, not by feel. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Full rest. Foot protocol + 10 min mobility flow. Nothing else. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        }
      ]
    },
    {
      "n": 5,
      "phase": 1,
      "start": "2026-08-17",
      "focus": "Compromised running starts. This is the Hyrox skill.",
      "runGuidance": "★ Running off a station is the single most race-specific thing you can practise. Kept short and easy on purpose.",
      "deload": false,
      "days": [
        {
          "t": "Strength A · machine strength",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Progress the leg press, seated leg curl, chest-supported row and chest press machine by the smallest clean increment. Then farmers carries 4×80m — race is 200m, so this remains the specific free-weight skill. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Continuous run",
          "k": "run",
          "d": "45-MIN COACHED · 0–5 WARM: brisk walk + dynamic ankles · 5–17 BASE: conversational run/walk · 17–29 PUSH: controlled intervals · 29–40 POWER: short faster efforts with full walk recoveries · 40–45 COOL: easy walk + calf mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: GATED. 20 min continuous easy jog (~2–2.5km). Conversational the whole way. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Compromised intervals",
          "k": "erg",
          "d": "45-MIN COACHED · 0–5 WARM: easy SkiErg/row · 5–17 BASE: technique + steady work · 17–29 PUSH: prescribed intervals · 29–40 POWER: short all-outs with standing recovery · 40–45 COOL: easy pull + lats/calves. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 4 rounds: 500m row @ hard → 400m easy jog (or 3 min brisk walk if the foot's grumpy) → 90s rest. Legs will feel strange running off the erg. That's the point. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Strength B · machines + sled",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Glute-drive machine 3×8, shoulder press machine 3×8 and lat pulldown 3×10 first. Then sled push + pull 8×20m each, wall balls 5×15 and burpee broad jump 4×10m. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 1600m: 300m warm, 10 × 100m @ steady w/ 15s rest, 200m continuous, 100m cool. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block bike, steady. Or the available work block bike + 3000m row if weather's bad. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Full rest. Foot protocol + 10 min mobility flow. Nothing else. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        }
      ]
    },
    {
      "n": 6,
      "phase": 1,
      "start": "2026-08-24",
      "focus": "Deload + benchmark. Bank the work before the build.",
      "runGuidance": "★ Lighter week on purpose. One benchmark run so Phase 2 starts from a real number, not a guess.",
      "deload": false,
      "days": [
        {
          "t": "Strength A · machines (light)",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Leg press, seated leg curl, chest-supported row and chest press machine at ~75% of last week's loads. Two clean sets each; no grinding. Easy carries only if time remains. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Benchmark run",
          "k": "run",
          "d": "45-MIN COACHED · 0–5 WARM: brisk walk + dynamic ankles · 5–17 BASE: conversational run/walk · 17–29 PUSH: controlled intervals · 29–40 POWER: short faster efforts with full walk recoveries · 40–45 COOL: easy walk + calf mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: GATED. Easy continuous jog as far as comfortable up to 25 min (~3km). Note distance + how the foot felt. This is your Phase 1 finish line. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Benchmark ergs",
          "k": "erg",
          "d": "45-MIN COACHED · 0–5 WARM: easy SkiErg/row · 5–17 BASE: technique + steady work · 17–29 PUSH: prescribed intervals · 29–40 POWER: short all-outs with standing recovery · 40–45 COOL: easy pull + lats/calves. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: SkiErg 1000m all-out. Rest 5 min. Row 1000m all-out. Write both times down — you'll chase them for 26 weeks. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Strength B · machines (light)",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Glute-drive, shoulder press, lat pulldown and leg-extension machines at ~75% loads, two clean sets each. Good long foot-care session to close the phase. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Easy swim",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 1000m relaxed, no clock, no intervals. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Long aerobic (easy)",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block easy spin. Reflect: 6 weeks in, what's actually changed? Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Rest + review. Log your benchmarks, then read the Phase 2 brief in the Plan tab. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        }
      ]
    },
    {
      "n": 7,
      "phase": 2,
      "start": "2026-08-31",
      "focus": "Race distance appears. 1km reps, easy pace.",
      "runGuidance": "★ 1km is the Hyrox run distance — you'll do 8 of them on race day. Meeting it now, easy and rested, is the whole point.",
      "deload": false,
      "days": [
        {
          "t": "Strength A",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: MACHINE FIRST: leg press 4×8, seated leg curl 4×10, chest press + chest-supported row 3×10 each. THEN RACE SKILL: farmers carry 6×50m @ 2×16kg and wall balls 6×15. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Run · 3km",
          "k": "run",
          "d": "45-MIN COACHED · 0–5 WARM: brisk walk + dynamic ankles · 5–17 BASE: conversational run/walk · 17–29 PUSH: controlled intervals · 29–40 POWER: short faster efforts with full walk recoveries · 40–45 COOL: easy walk + calf mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: GATED. 3 × 1km @ easy-steady w/ 2 min walk between. First time touching race distance. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Erg session",
          "k": "erg",
          "d": "45-MIN COACHED · 0–5 WARM: easy SkiErg/row · 5–17 BASE: technique + steady work · 17–29 PUSH: prescribed intervals · 29–40 POWER: short all-outs with standing recovery · 40–45 COOL: easy pull + lats/calves. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: DOUBLES PACING: SkiErg 8 × 250m @ SPRINT, 60s standing rest (that's your partner's 250m). Then row 1000m steady. Short violent efforts, standing recovery. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: MACHINE FIRST: shoulder press machine 3×10, lat pulldown 3×10, glute-drive machine 3×8. THEN RACE SKILL: sled push 12×12.5m, sled pull 10×12.5m, burpee broad jump 6×10m. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 1600m: 300m warm, main set of 100s and 200s @ steady, 200m easy cool. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block steady bike (or the available work block bike + 3000m row). Zero impact, pure engine. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Full rest. Foot protocol + 10 min mobility flow. Nothing else. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        }
      ]
    },
    {
      "n": 8,
      "phase": 2,
      "start": "2026-09-07",
      "focus": "Four reps. Pacing discipline.",
      "runGuidance": "★ Even splits beat fast-then-fade every time. Run the first rep slower than feels right.",
      "deload": false,
      "days": [
        {
          "t": "Strength A",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: MACHINE FIRST: leg press 4×8, seated leg curl 4×10, chest press + chest-supported row 3×10 each. THEN RACE SKILL: farmers carry 6×50m @ 2×16kg and wall balls 6×15. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Run · 4km",
          "k": "run",
          "d": "45-MIN COACHED · 0–5 WARM: brisk walk + dynamic ankles · 5–17 BASE: conversational run/walk · 17–29 PUSH: controlled intervals · 29–40 POWER: short faster efforts with full walk recoveries · 40–45 COOL: easy walk + calf mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: GATED. 4 × 1km @ easy-steady, 2 min walk. Hold an even pace across all four. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Erg session",
          "k": "erg",
          "d": "45-MIN COACHED · 0–5 WARM: easy SkiErg/row · 5–17 BASE: technique + steady work · 17–29 PUSH: prescribed intervals · 29–40 POWER: short all-outs with standing recovery · 40–45 COOL: easy pull + lats/calves. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Row 10 × 250m @ SPRINT, 60s standing rest. Then SkiErg 500m. Practise starting hard from cold — every changeover is a cold start. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: MACHINE FIRST: shoulder press machine 3×10, lat pulldown 3×10, glute-drive machine 3×8. THEN RACE SKILL: sled push 12×12.5m, sled pull 10×12.5m, burpee broad jump 6×10m. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 1800m: 300m warm, main set of 100s and 200s @ steady, 200m easy cool. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block steady bike (or the available work block bike + 3000m row). Zero impact, pure engine. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Full rest. Foot protocol + 10 min mobility flow. Nothing else. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        }
      ]
    },
    {
      "n": 9,
      "phase": 2,
      "start": "2026-09-14",
      "focus": "Longest continuous run. Station stamina.",
      "runGuidance": "★ Continuous running builds a different quality than intervals. Keep it genuinely easy.",
      "deload": false,
      "days": [
        {
          "t": "Strength A",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: MACHINE FIRST: leg press 4×8, seated leg curl 4×10, chest press + chest-supported row 3×10 each. THEN RACE SKILL: farmers carry 6×50m @ 2×16kg and wall balls 6×15. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Run · 5km",
          "k": "run",
          "d": "45-MIN COACHED · 0–5 WARM: brisk walk + dynamic ankles · 5–17 BASE: conversational run/walk · 17–29 PUSH: controlled intervals · 29–40 POWER: short faster efforts with full walk recoveries · 40–45 COOL: easy walk + calf mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: GATED. 25–30 min continuous easy run (~4–5km). Longest continuous run yet. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Erg session",
          "k": "erg",
          "d": "45-MIN COACHED · 0–5 WARM: easy SkiErg/row · 5–17 BASE: technique + steady work · 17–29 PUSH: prescribed intervals · 29–40 POWER: short all-outs with standing recovery · 40–45 COOL: easy pull + lats/calves. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Alternating you-go-I-go sim: 4 × (SkiErg 250m sprint / 60s standing rest), then 4 × (row 250m sprint / 60s standing rest). This is exactly what a doubles station feels like. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: MACHINE FIRST: shoulder press machine 3×10, lat pulldown 3×10, glute-drive machine 3×8. THEN RACE SKILL: sled push 12×12.5m, sled pull 10×12.5m, burpee broad jump 6×10m. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 2000m: 300m warm, main set of 100s and 200s @ steady, 200m easy cool. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block steady bike (or the available work block bike + 3000m row). Zero impact, pure engine. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Full rest. Foot protocol + 10 min mobility flow. Nothing else. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        }
      ]
    },
    {
      "n": 10,
      "phase": 2,
      "start": "2026-09-21",
      "focus": "Deload the legs, build the ergs.",
      "runGuidance": "★ Shrinking rest is how you build race fitness without adding mileage. Kind to the foot, hard on the engine.",
      "deload": false,
      "days": [
        {
          "t": "Strength A",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: MACHINE FIRST: leg press 4×8, seated leg curl 4×10, chest press + chest-supported row 3×10 each. THEN RACE SKILL: farmers carry 6×50m @ 2×16kg and wall balls 6×15. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Run · 5km",
          "k": "run",
          "d": "45-MIN COACHED · 0–5 WARM: brisk walk + dynamic ankles · 5–17 BASE: conversational run/walk · 17–29 PUSH: controlled intervals · 29–40 POWER: short faster efforts with full walk recoveries · 40–45 COOL: easy walk + calf mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: GATED. 5 × 1km @ steady, 90s walk. Shorter rest than week 8 — that's the progression. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Erg session",
          "k": "erg",
          "d": "45-MIN COACHED · 0–5 WARM: easy SkiErg/row · 5–17 BASE: technique + steady work · 17–29 PUSH: prescribed intervals · 29–40 POWER: short all-outs with standing recovery · 40–45 COOL: easy pull + lats/calves. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Row 8 × 250m @ SPRINT, 45s standing rest. Then SkiErg 4 × 250m same. Tight turnarounds. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: MACHINE FIRST: shoulder press machine 3×10, lat pulldown 3×10, glute-drive machine 3×8. THEN RACE SKILL: sled push 12×12.5m, sled pull 10×12.5m, burpee broad jump 6×10m. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 2000m: 300m warm, main set of 100s and 200s @ steady, 200m easy cool. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block steady bike (or the available work block bike + 3000m row). Zero impact, pure engine. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Full rest. Foot protocol + 10 min mobility flow. Nothing else. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        }
      ]
    },
    {
      "n": 11,
      "phase": 2,
      "start": "2026-09-28",
      "focus": "First half simulation. Learn the format.",
      "runGuidance": "★ Your first taste of the real thing. Do not race it. Finish it, note what hurt, and log the total time as a baseline.",
      "deload": false,
      "days": [
        {
          "t": "Strength A",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: MACHINE FIRST: hack squat or leg press 4×8, glute-drive machine 4×8, lat pulldown + chest press 3×8–10. THEN RACE SKILL: carry 6×60m, sandbag lunge 4×15m, wall balls 6×15. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Run · 6km",
          "k": "run",
          "d": "45-MIN COACHED · 0–5 WARM: brisk walk + dynamic ankles · 5–17 BASE: conversational run/walk · 17–29 PUSH: controlled intervals · 29–40 POWER: short faster efforts with full walk recoveries · 40–45 COOL: easy walk + calf mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: GATED. 30–35 min continuous easy run (~5–6km). Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Hyrox sim",
          "k": "hyrox",
          "d": "ASSESSMENT / EVENT — 90 MIN PLANNED. This is intentionally longer than the daily 45-minute class so pacing and late-race fatigue are tested honestly. TODAY'S TARGET: DOUBLES HALF SIM: 4 rounds of (FULL 1km run → your half of a station). Stations: SkiErg 500m, sled push 25m @ race weight, burpee broad jump 40m, row 500m. Between your reps, stand and rest ~equal to your work. Note total time.",
          "min": 90,
          "impact": "high",
          "hyrox": true,
          "run": true,
          "format": "event"
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: MACHINE FIRST: shoulder press machine + seated row 3×8–10, leg extension 3×10. THEN RACE SKILL: sled push 14×12.5m, sled pull 12×12.5m, burpee broad jump 8×10m. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 2200m: 300m warm, main set of 100s and 200s @ steady, 200m easy cool. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block steady bike (or the available work block bike + 3000m row). Zero impact, pure engine. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Full rest. Foot protocol + 10 min mobility flow. Nothing else. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        }
      ]
    },
    {
      "n": 12,
      "phase": 2,
      "start": "2026-10-05",
      "focus": "Six reps at race distance.",
      "runGuidance": "★ Six of eight. The engine is nearly there — the foot is the limiter, so keep gating honestly.",
      "deload": false,
      "days": [
        {
          "t": "Strength A",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: MACHINE FIRST: hack squat or leg press 4×8, glute-drive machine 4×8, lat pulldown + chest press 3×8–10. THEN RACE SKILL: carry 6×60m, sandbag lunge 4×15m, wall balls 6×15. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Run · 6km",
          "k": "run",
          "d": "45-MIN COACHED · 0–5 WARM: brisk walk + dynamic ankles · 5–17 BASE: conversational run/walk · 17–29 PUSH: controlled intervals · 29–40 POWER: short faster efforts with full walk recoveries · 40–45 COOL: easy walk + calf mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: GATED. 6 × 1km @ steady, 90s walk. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Erg session",
          "k": "erg",
          "d": "45-MIN COACHED · 0–5 WARM: easy SkiErg/row · 5–17 BASE: technique + steady work · 17–29 PUSH: prescribed intervals · 29–40 POWER: short all-outs with standing recovery · 40–45 COOL: easy pull + lats/calves. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: SkiErg 12 × 250m @ SPRINT, 45s standing rest. Brutal, zero impact, and the exact rhythm of a doubles station. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: MACHINE FIRST: shoulder press machine + seated row 3×8–10, leg extension 3×10. THEN RACE SKILL: sled push 14×12.5m, sled pull 12×12.5m, burpee broad jump 8×10m. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 2400m: 300m warm, main set of 100s and 200s @ steady, 200m easy cool. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block steady bike (or the available work block bike + 3000m row). Zero impact, pure engine. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Full rest. Foot protocol + 10 min mobility flow. Nothing else. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        }
      ]
    },
    {
      "n": 13,
      "phase": 2,
      "start": "2026-10-12",
      "focus": "Long run + threshold rowing.",
      "runGuidance": "★ Compare today's 1000m row splits to your week 6 benchmark. That number should be visibly better.",
      "deload": false,
      "days": [
        {
          "t": "Strength A",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: MACHINE FIRST: hack squat or leg press 4×8, glute-drive machine 4×8, lat pulldown + chest press 3×8–10. THEN RACE SKILL: carry 6×60m, sandbag lunge 4×15m, wall balls 6×15. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Run · 7km",
          "k": "run",
          "d": "45-MIN COACHED · 0–5 WARM: brisk walk + dynamic ankles · 5–17 BASE: conversational run/walk · 17–29 PUSH: controlled intervals · 29–40 POWER: short faster efforts with full walk recoveries · 40–45 COOL: easy walk + calf mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: GATED. 35–40 min continuous run (~6–7km). Fuel mid-run if it goes past 35 min. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Erg session",
          "k": "erg",
          "d": "45-MIN COACHED · 0–5 WARM: easy SkiErg/row · 5–17 BASE: technique + steady work · 17–29 PUSH: prescribed intervals · 29–40 POWER: short all-outs with standing recovery · 40–45 COOL: easy pull + lats/calves. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Row 6 × 500m @ race effort, 90s standing rest. Then SkiErg 500m. Compare your 500m split to your week 6 benchmark. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: MACHINE FIRST: shoulder press machine + seated row 3×8–10, leg extension 3×10. THEN RACE SKILL: sled push 14×12.5m, sled pull 12×12.5m, burpee broad jump 8×10m. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 2400m: 300m warm, main set of 100s and 200s @ steady, 200m easy cool. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block steady bike (or the available work block bike + 3000m row). Zero impact, pure engine. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Full rest. Foot protocol + 10 min mobility flow. Nothing else. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        }
      ]
    },
    {
      "n": 14,
      "phase": 2,
      "start": "2026-10-19",
      "focus": "Deload. Absorb 8 weeks of build.",
      "runGuidance": "★ Deload weeks are where adaptation actually happens. Resist the urge to add anything.",
      "deload": false,
      "days": [
        {
          "t": "Strength A",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: MACHINE FIRST: hack squat or leg press 4×8, glute-drive machine 4×8, lat pulldown + chest press 3×8–10. THEN RACE SKILL: carry 6×60m, sandbag lunge 4×15m, wall balls 6×15. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Run · 5km",
          "k": "run",
          "d": "45-MIN COACHED · 0–5 WARM: brisk walk + dynamic ankles · 5–17 BASE: conversational run/walk · 17–29 PUSH: controlled intervals · 29–40 POWER: short faster efforts with full walk recoveries · 40–45 COOL: easy walk + calf mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: DELOAD. 4 × 1km @ easy, generous walk breaks. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Erg session",
          "k": "erg",
          "d": "45-MIN COACHED · 0–5 WARM: easy SkiErg/row · 5–17 BASE: technique + steady work · 17–29 PUSH: prescribed intervals · 29–40 POWER: short all-outs with standing recovery · 40–45 COOL: easy pull + lats/calves. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: SkiErg 4 × 250m easy. Row 1500m easy. Nothing hard. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: MACHINE FIRST: shoulder press machine + seated row 3×8–10, leg extension 3×10. THEN RACE SKILL: sled push 14×12.5m, sled pull 12×12.5m, burpee broad jump 8×10m. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 1800m: 300m warm, main set of 100s and 200s @ steady, 200m easy cool. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block steady bike (or the available work block bike + 3000m row). Zero impact, pure engine. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Full rest. Foot protocol + 10 min mobility flow. Nothing else. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        }
      ]
    },
    {
      "n": 15,
      "phase": 2,
      "start": "2026-10-26",
      "focus": "Tight rests. Station volume.",
      "runGuidance": "★ You're now doing more erg metres in a session than the race asks for. That's deliberate insurance.",
      "deload": false,
      "days": [
        {
          "t": "Strength A",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: GUIDED STRENGTH FIRST: hack squat 4×6, Smith-machine RDL 3×8 or seated leg curl 4×8, chest-supported row 3×8. THEN RACE SKILL: carry 4×100m, lunge 4×20m, wall balls 6×20. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Run · 7km",
          "k": "run",
          "d": "45-MIN COACHED · 0–5 WARM: brisk walk + dynamic ankles · 5–17 BASE: conversational run/walk · 17–29 PUSH: controlled intervals · 29–40 POWER: short faster efforts with full walk recoveries · 40–45 COOL: easy walk + calf mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: GATED. 6 × 1km @ steady, 75s walk. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Erg session",
          "k": "erg",
          "d": "45-MIN COACHED · 0–5 WARM: easy SkiErg/row · 5–17 BASE: technique + steady work · 17–29 PUSH: prescribed intervals · 29–40 POWER: short all-outs with standing recovery · 40–45 COOL: easy pull + lats/calves. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 8 × 250m alternating SkiErg/row @ race effort, 60s standing rest between. Changeover practice: get on the machine and pull hard within 3 seconds. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: MACHINE FIRST: shoulder press machine 4×8 + lat pulldown 3×8. THEN RACE SKILL: sled push 8×25m, sled pull 8×25m, burpee broad jump 6×20m. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 2600m: 300m warm, main set of 100s and 200s @ steady, 200m easy cool. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block steady bike (or the available work block bike + 3000m row). Zero impact, pure engine. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Full rest. Foot protocol + 10 min mobility flow. Nothing else. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        }
      ]
    },
    {
      "n": 16,
      "phase": 2,
      "start": "2026-11-02",
      "focus": "Six stations, six runs.",
      "runGuidance": "★ Six of the eight stations, back to back. Note which station wrecks the run that follows it — that's your weak link.",
      "deload": false,
      "days": [
        {
          "t": "Strength A",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: GUIDED STRENGTH FIRST: hack squat 4×6, Smith-machine RDL 3×8 or seated leg curl 4×8, chest-supported row 3×8. THEN RACE SKILL: carry 4×100m, lunge 4×20m, wall balls 6×20. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Run · 8km",
          "k": "run",
          "d": "45-MIN COACHED · 0–5 WARM: brisk walk + dynamic ankles · 5–17 BASE: conversational run/walk · 17–29 PUSH: controlled intervals · 29–40 POWER: short faster efforts with full walk recoveries · 40–45 COOL: easy walk + calf mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: GATED. 40–45 min continuous run (~7–8km). Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Hyrox sim",
          "k": "hyrox",
          "d": "ASSESSMENT / EVENT — 90 MIN PLANNED. This is intentionally longer than the daily 45-minute class so pacing and late-race fatigue are tested honestly. TODAY'S TARGET: DOUBLES 3/4 SIM: 6 rounds of (FULL 1km run → your half). SkiErg 500m, sled push 25m, sled pull 25m, burpee broad jump 40m, row 500m, farmers carry 100m @ 2×16kg. Standing rest only.",
          "min": 90,
          "impact": "high",
          "hyrox": true,
          "run": true,
          "format": "event"
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: MACHINE FIRST: shoulder press machine 4×8 + lat pulldown 3×8. THEN RACE SKILL: sled push 8×25m, sled pull 8×25m, burpee broad jump 6×20m. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 2600m: 300m warm, main set of 100s and 200s @ steady, 200m easy cool. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block steady bike (or the available work block bike + 3000m row). Zero impact, pure engine. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Full rest. Foot protocol + 10 min mobility flow. Nothing else. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        }
      ]
    },
    {
      "n": 17,
      "phase": 2,
      "start": "2026-11-09",
      "focus": "Eight reps. The full race count.",
      "runGuidance": "★ Eight kilometres of running in one session — the exact race volume, just without the stations in between. Big psychological week.",
      "deload": false,
      "days": [
        {
          "t": "Strength A",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: GUIDED STRENGTH FIRST: hack squat 4×6, Smith-machine RDL 3×8 or seated leg curl 4×8, chest-supported row 3×8. THEN RACE SKILL: carry 4×100m, lunge 4×20m, wall balls 6×20. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Run · 8km",
          "k": "run",
          "d": "45-MIN COACHED · 0–5 WARM: brisk walk + dynamic ankles · 5–17 BASE: conversational run/walk · 17–29 PUSH: controlled intervals · 29–40 POWER: short faster efforts with full walk recoveries · 40–45 COOL: easy walk + calf mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: GATED. 8 × 1km @ steady, 60s walk. Race rep count for the first time. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Erg session",
          "k": "erg",
          "d": "45-MIN COACHED · 0–5 WARM: easy SkiErg/row · 5–17 BASE: technique + steady work · 17–29 PUSH: prescribed intervals · 29–40 POWER: short all-outs with standing recovery · 40–45 COOL: easy pull + lats/calves. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Row 8 × 250m @ SPRINT, 45s standing rest, then SkiErg 8 × 250m same. Sixteen changeovers — that's a realistic race count. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: MACHINE FIRST: shoulder press machine 4×8 + lat pulldown 3×8. THEN RACE SKILL: sled push 8×25m, sled pull 8×25m, burpee broad jump 6×20m. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 2800m: 300m warm, main set of 100s and 200s @ steady, 200m easy cool. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block steady bike (or the available work block bike + 3000m row). Zero impact, pure engine. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Full rest. Foot protocol + 10 min mobility flow. Nothing else. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        }
      ]
    },
    {
      "n": 18,
      "phase": 2,
      "start": "2026-11-16",
      "focus": "Deload.",
      "runGuidance": "★ Second deload. Same rule: don't add anything.",
      "deload": false,
      "days": [
        {
          "t": "Strength A",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: GUIDED STRENGTH FIRST: hack squat 4×6, Smith-machine RDL 3×8 or seated leg curl 4×8, chest-supported row 3×8. THEN RACE SKILL: carry 4×100m, lunge 4×20m, wall balls 6×20. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Run · 6km",
          "k": "run",
          "d": "45-MIN COACHED · 0–5 WARM: brisk walk + dynamic ankles · 5–17 BASE: conversational run/walk · 17–29 PUSH: controlled intervals · 29–40 POWER: short faster efforts with full walk recoveries · 40–45 COOL: easy walk + calf mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: DELOAD. 4 × 1km easy. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Erg session",
          "k": "erg",
          "d": "45-MIN COACHED · 0–5 WARM: easy SkiErg/row · 5–17 BASE: technique + steady work · 17–29 PUSH: prescribed intervals · 29–40 POWER: short all-outs with standing recovery · 40–45 COOL: easy pull + lats/calves. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Easy SkiErg 3 × 250m, row 1200m. Recovery only. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: MACHINE FIRST: shoulder press machine 4×8 + lat pulldown 3×8. THEN RACE SKILL: sled push 8×25m, sled pull 8×25m, burpee broad jump 6×20m. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 2000m: 300m warm, main set of 100s and 200s @ steady, 200m easy cool. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block steady bike (or the available work block bike + 3000m row). Zero impact, pure engine. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Full rest. Foot protocol + 10 min mobility flow. Nothing else. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        }
      ]
    },
    {
      "n": 19,
      "phase": 2,
      "start": "2026-11-23",
      "focus": "Peak long run.",
      "runGuidance": "★ This is the longest single run you need for Hyrox. Everything after this is sharpening, not building.",
      "deload": false,
      "days": [
        {
          "t": "Strength A",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: GUIDED STRENGTH FIRST: heavy leg press or Smith squat 4×6, glute-drive machine 4×6, machine row 3×8. THEN RACE SKILL: carry 2×100m unbroken and wall balls 5×20. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Run · 9km",
          "k": "run",
          "d": "45-MIN COACHED · 0–5 WARM: brisk walk + dynamic ankles · 5–17 BASE: conversational run/walk · 17–29 PUSH: controlled intervals · 29–40 POWER: short faster efforts with full walk recoveries · 40–45 COOL: easy walk + calf mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: GATED. 45–the available work block continuous run (~8–9km). Longest of the season. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Erg session",
          "k": "erg",
          "d": "45-MIN COACHED · 0–5 WARM: easy SkiErg/row · 5–17 BASE: technique + steady work · 17–29 PUSH: prescribed intervals · 29–40 POWER: short all-outs with standing recovery · 40–45 COOL: easy pull + lats/calves. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: SkiErg 14 × 250m @ SPRINT, 40s standing rest. Peak erg session of the build. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: MACHINE FIRST: shoulder press machine 4×6 + seated row 3×8. THEN RACE SKILL: sled push 6×25m heavy, sled pull 6×25m, burpee broad jump 40m for time. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 2800m: 300m warm, main set of 100s and 200s @ steady, 200m easy cool. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block steady bike (or the available work block bike + 3000m row). Zero impact, pure engine. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Full rest. Foot protocol + 10 min mobility flow. Nothing else. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        }
      ]
    },
    {
      "n": 20,
      "phase": 2,
      "start": "2026-11-30",
      "focus": "First full simulation.",
      "runGuidance": "★ The whole race, start to finish, however long it takes. The number you record today is the one you'll beat in week 29.",
      "deload": false,
      "days": [
        {
          "t": "Strength A",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: GUIDED STRENGTH FIRST: heavy leg press or Smith squat 4×6, glute-drive machine 4×6, machine row 3×8. THEN RACE SKILL: carry 2×100m unbroken and wall balls 5×20. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Run · 8km",
          "k": "run",
          "d": "45-MIN COACHED · 0–5 WARM: brisk walk + dynamic ankles · 5–17 BASE: conversational run/walk · 17–29 PUSH: controlled intervals · 29–40 POWER: short faster efforts with full walk recoveries · 40–45 COOL: easy walk + calf mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: GATED. 8 × 1km @ race pace, 60s walk. Faster than week 17, same volume. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Hyrox sim",
          "k": "hyrox",
          "d": "ASSESSMENT / EVENT — 90 MIN PLANNED. This is intentionally longer than the daily 45-minute class so pacing and late-race fatigue are tested honestly. TODAY'S TARGET: DOUBLES FULL SIM #1: all 8 stations, FULL 8km of running, your half of every station (SkiErg 500m, sled push 25m, sled pull 25m, BBJ 40m, row 500m, carry 100m, lunge 50m, 50 wall balls). Do it WITH your partner if you have one. Record the total time.",
          "min": 90,
          "impact": "high",
          "hyrox": true,
          "run": true,
          "format": "event"
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: MACHINE FIRST: shoulder press machine 4×6 + seated row 3×8. THEN RACE SKILL: sled push 6×25m heavy, sled pull 6×25m, burpee broad jump 40m for time. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 2800m: 300m warm, main set of 100s and 200s @ steady, 200m easy cool. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block steady bike (or the available work block bike + 3000m row). Zero impact, pure engine. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Full rest. Foot protocol + 10 min mobility flow. Nothing else. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        }
      ]
    },
    {
      "n": 21,
      "phase": 2,
      "start": "2026-12-07",
      "focus": "Longer reps.",
      "runGuidance": "★ 1.5km reps make the race's 1km feel short. That's the trick.",
      "deload": false,
      "days": [
        {
          "t": "Strength A",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: GUIDED STRENGTH FIRST: heavy leg press or Smith squat 4×6, glute-drive machine 4×6, machine row 3×8. THEN RACE SKILL: carry 2×100m unbroken and wall balls 5×20. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Run · 9km",
          "k": "run",
          "d": "45-MIN COACHED · 0–5 WARM: brisk walk + dynamic ankles · 5–17 BASE: conversational run/walk · 17–29 PUSH: controlled intervals · 29–40 POWER: short faster efforts with full walk recoveries · 40–45 COOL: easy walk + calf mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: GATED. 5 × 1.5km @ steady, 2 min walk. Longer reps, same total. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Erg session",
          "k": "erg",
          "d": "45-MIN COACHED · 0–5 WARM: easy SkiErg/row · 5–17 BASE: technique + steady work · 17–29 PUSH: prescribed intervals · 29–40 POWER: short all-outs with standing recovery · 40–45 COOL: easy pull + lats/calves. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Row 10 × 250m @ SPRINT, 45s standing rest. SkiErg 500m @ race effort to close. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: MACHINE FIRST: shoulder press machine 4×6 + seated row 3×8. THEN RACE SKILL: sled push 6×25m heavy, sled pull 6×25m, burpee broad jump 40m for time. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 3000m: 300m warm, main set of 100s and 200s @ steady, 200m easy cool. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block steady bike (or the available work block bike + 3000m row). Zero impact, pure engine. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Full rest. Foot protocol + 10 min mobility flow. Nothing else. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        }
      ]
    },
    {
      "n": 22,
      "phase": 2,
      "start": "2026-12-14",
      "focus": "Deload into Phase 3.",
      "runGuidance": "★ Last easy week before the sharpening block. Arrive fresh.",
      "deload": false,
      "days": [
        {
          "t": "Strength A",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: GUIDED STRENGTH FIRST: heavy leg press or Smith squat 4×6, glute-drive machine 4×6, machine row 3×8. THEN RACE SKILL: carry 2×100m unbroken and wall balls 5×20. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Run · 7km",
          "k": "run",
          "d": "45-MIN COACHED · 0–5 WARM: brisk walk + dynamic ankles · 5–17 BASE: conversational run/walk · 17–29 PUSH: controlled intervals · 29–40 POWER: short faster efforts with full walk recoveries · 40–45 COOL: easy walk + calf mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: DELOAD. 5 × 1km easy. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Erg session",
          "k": "erg",
          "d": "45-MIN COACHED · 0–5 WARM: easy SkiErg/row · 5–17 BASE: technique + steady work · 17–29 PUSH: prescribed intervals · 29–40 POWER: short all-outs with standing recovery · 40–45 COOL: easy pull + lats/calves. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Easy ergs, 20 min total, nothing above conversational. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: MACHINE FIRST: shoulder press machine 4×6 + seated row 3×8. THEN RACE SKILL: sled push 6×25m heavy, sled pull 6×25m, burpee broad jump 40m for time. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 2200m: 300m warm, main set of 100s and 200s @ steady, 200m easy cool. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block steady bike (or the available work block bike + 3000m row). Zero impact, pure engine. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Full rest. Foot protocol + 10 min mobility flow. Nothing else. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        }
      ]
    },
    {
      "n": 23,
      "phase": 3,
      "start": "2026-12-21",
      "focus": "Race-pace sharpening begins.",
      "runGuidance": "★ Volume stops growing. From here it's about running the 1km reps at the pace you actually want on race day.",
      "deload": false,
      "days": [
        {
          "t": "Strength A · machines + race skill",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: leg press or hack squat 4×6, glute-drive machine 3×6, machine row 3×8; then carry 2×200m + wall balls 4×20. Sharp and short. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Run · race pace",
          "k": "run",
          "d": "45-MIN COACHED · 0–5 WARM: brisk walk + dynamic ankles · 5–17 BASE: conversational run/walk · 17–29 PUSH: controlled intervals · 29–40 POWER: short faster efforts with full walk recoveries · 40–45 COOL: easy walk + calf mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: GATED. 6 × 1km @ RACE PACE, 60s walk. Pick a pace you could hold for eight. Hold it. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Erg session",
          "k": "erg",
          "d": "45-MIN COACHED · 0–5 WARM: easy SkiErg/row · 5–17 BASE: technique + steady work · 17–29 PUSH: prescribed intervals · 29–40 POWER: short all-outs with standing recovery · 40–45 COOL: easy pull + lats/calves. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: SkiErg 500m + row 500m @ race effort, then 4 × 25 wall balls unbroken (your likely split), 60s standing rest between. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Strength B · machines + sled",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: shoulder press machine 4×6 + lat pulldown 3×8 first; then sled push 6×50m, sled pull 6×50m and burpee broad jump 80m. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 2600m easy — recovery, not training. Loosens everything up. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block steady bike. Zero impact recovery volume. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Full rest. Foot protocol + 10 min mobility flow. Nothing else. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        }
      ]
    },
    {
      "n": 24,
      "phase": 3,
      "start": "2026-12-28",
      "focus": "Compromised running under real fatigue.",
      "runGuidance": "★ The hardest weeks of the season are 24–29. Sleep and eat like it's part of training, because it is.",
      "deload": false,
      "days": [
        {
          "t": "Strength A · machines + race skill",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: leg press or hack squat 4×6, glute-drive machine 3×6, machine row 3×8; then carry 2×200m + wall balls 4×20. Sharp and short. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Run · race pace",
          "k": "run",
          "d": "45-MIN COACHED · 0–5 WARM: brisk walk + dynamic ankles · 5–17 BASE: conversational run/walk · 17–29 PUSH: controlled intervals · 29–40 POWER: short faster efforts with full walk recoveries · 40–45 COOL: easy walk + calf mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: GATED. 5 × (1km @ race pace → 20 wall balls) — run straight off the reps. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Hyrox sim",
          "k": "hyrox",
          "d": "ASSESSMENT / EVENT — 90 MIN PLANNED. This is intentionally longer than the daily 45-minute class so pacing and late-race fatigue are tested honestly. TODAY'S TARGET: DOUBLES FULL SIM #2: all 8 stations, full 8km running, your half of each. Push the pace. Compare to week 20. Rehearse your actual changeover splits.",
          "min": 90,
          "impact": "high",
          "hyrox": true,
          "run": true,
          "format": "event"
        },
        {
          "t": "Strength B · machines + sled",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: shoulder press machine 4×6 + lat pulldown 3×8 first; then sled push 6×50m, sled pull 6×50m and burpee broad jump 80m. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 2600m easy — recovery, not training. Loosens everything up. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block steady bike. Zero impact recovery volume. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Full rest. Foot protocol + 10 min mobility flow. Nothing else. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        }
      ]
    },
    {
      "n": 25,
      "phase": 3,
      "start": "2027-01-04",
      "focus": "Peak intensity.",
      "runGuidance": "★ Peak week. If something hurts sharply, stop — a missed session in week 25 costs nothing, an injury costs the race.",
      "deload": false,
      "days": [
        {
          "t": "Strength A · machines + race skill",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: leg press or hack squat 4×6, glute-drive machine 3×6, machine row 3×8; then carry 2×200m + wall balls 4×20. Sharp and short. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Run · race pace",
          "k": "run",
          "d": "45-MIN COACHED · 0–5 WARM: brisk walk + dynamic ankles · 5–17 BASE: conversational run/walk · 17–29 PUSH: controlled intervals · 29–40 POWER: short faster efforts with full walk recoveries · 40–45 COOL: easy walk + calf mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: GATED. 8 × 1km @ race pace, 45s walk. The full race distance at the target pace. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Erg session",
          "k": "erg",
          "d": "45-MIN COACHED · 0–5 WARM: easy SkiErg/row · 5–17 BASE: technique + steady work · 17–29 PUSH: prescribed intervals · 29–40 POWER: short all-outs with standing recovery · 40–45 COOL: easy pull + lats/calves. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: SkiErg 12 × 250m @ SPRINT, 40s standing rest. Row 6 × 250m @ SPRINT, 40s standing rest. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Strength B · machines + sled",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: shoulder press machine 4×6 + lat pulldown 3×8 first; then sled push 6×50m, sled pull 6×50m and burpee broad jump 80m. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 2800m easy — recovery, not training. Loosens everything up. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block steady bike. Zero impact recovery volume. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Full rest. Foot protocol + 10 min mobility flow. Nothing else. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        }
      ]
    },
    {
      "n": 26,
      "phase": 3,
      "start": "2027-01-11",
      "focus": "Deload.",
      "runGuidance": "★ Back off hard. You've done the work.",
      "deload": false,
      "days": [
        {
          "t": "Strength A · machines + race skill",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: leg press or hack squat 4×6, glute-drive machine 3×6, machine row 3×8; then carry 2×200m + wall balls 4×20. Sharp and short. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Run · race pace",
          "k": "run",
          "d": "45-MIN COACHED · 0–5 WARM: brisk walk + dynamic ankles · 5–17 BASE: conversational run/walk · 17–29 PUSH: controlled intervals · 29–40 POWER: short faster efforts with full walk recoveries · 40–45 COOL: easy walk + calf mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: GATED. 4 × 1km easy. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Erg session",
          "k": "erg",
          "d": "45-MIN COACHED · 0–5 WARM: easy SkiErg/row · 5–17 BASE: technique + steady work · 17–29 PUSH: prescribed intervals · 29–40 POWER: short all-outs with standing recovery · 40–45 COOL: easy pull + lats/calves. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Easy ergs 20 min. Nothing hard. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Strength B · machines + sled",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: shoulder press machine 4×6 + lat pulldown 3×8 first; then sled push 6×50m, sled pull 6×50m and burpee broad jump 80m. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 2000m easy — recovery, not training. Loosens everything up. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block steady bike. Zero impact recovery volume. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Full rest. Foot protocol + 10 min mobility flow. Nothing else. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        }
      ]
    },
    {
      "n": 27,
      "phase": 3,
      "start": "2027-01-18",
      "focus": "Sharpen again.",
      "runGuidance": "★ Two hard weeks, then taper. Stay patient.",
      "deload": false,
      "days": [
        {
          "t": "Strength A · machines + race skill",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: leg press or hack squat 4×6, glute-drive machine 3×6, machine row 3×8; then carry 2×200m + wall balls 4×20. Sharp and short. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Run · race pace",
          "k": "run",
          "d": "45-MIN COACHED · 0–5 WARM: brisk walk + dynamic ankles · 5–17 BASE: conversational run/walk · 17–29 PUSH: controlled intervals · 29–40 POWER: short faster efforts with full walk recoveries · 40–45 COOL: easy walk + calf mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: GATED. 6 × 1km @ race pace, 45s walk. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Hyrox sim",
          "k": "hyrox",
          "d": "45-MIN COACHED · 0–5 WARM: easy cardio + movement prep · 5–17 TREAD: gated run/walk intervals · 17–29 ERG: SkiErg/row rotation · 29–40 FLOOR: sled/carry/lunge/wall-ball circuit · 40–45 COOL: walk + breathing. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 6 rounds: FULL 1km run → your half of a station, at race intensity. Pick the 6 stations you're weakest on. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "hyrox": true,
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Strength B · machines + sled",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: shoulder press machine 4×6 + lat pulldown 3×8 first; then sled push 6×50m, sled pull 6×50m and burpee broad jump 80m. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 2600m easy — recovery, not training. Loosens everything up. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block steady bike. Zero impact recovery volume. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Full rest. Foot protocol + 10 min mobility flow. Nothing else. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        }
      ]
    },
    {
      "n": 28,
      "phase": 3,
      "start": "2027-01-25",
      "focus": "Last big week.",
      "runGuidance": "★ Final heavy load of the season. After this, everything gets easier and you get faster.",
      "deload": false,
      "days": [
        {
          "t": "Strength A · machines + race skill",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: leg press or hack squat 4×6, glute-drive machine 3×6, machine row 3×8; then carry 2×200m + wall balls 4×20. Sharp and short. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Run · race pace",
          "k": "run",
          "d": "45-MIN COACHED · 0–5 WARM: brisk walk + dynamic ankles · 5–17 BASE: conversational run/walk · 17–29 PUSH: controlled intervals · 29–40 POWER: short faster efforts with full walk recoveries · 40–45 COOL: easy walk + calf mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: GATED. 8 × 1km @ race pace, 45s walk. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Hyrox sim",
          "k": "hyrox",
          "d": "ASSESSMENT / EVENT — 90 MIN PLANNED. This is intentionally longer than the daily 45-minute class so pacing and late-race fatigue are tested honestly. TODAY'S TARGET: DOUBLES FULL SIM #3: all 8 stations raced, with your partner, using your agreed splits. Dress rehearsal — same kit, same fuel, same warm-up, same changeovers as race day.",
          "min": 90,
          "impact": "high",
          "hyrox": true,
          "run": true,
          "format": "event"
        },
        {
          "t": "Strength B · machines + sled",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: shoulder press machine 4×6 + lat pulldown 3×8 first; then sled push 6×50m, sled pull 6×50m and burpee broad jump 80m. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 2800m easy — recovery, not training. Loosens everything up. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block steady bike. Zero impact recovery volume. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Full rest. Foot protocol + 10 min mobility flow. Nothing else. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        }
      ]
    },
    {
      "n": 29,
      "phase": 3,
      "start": "2027-02-01",
      "focus": "Taper begins. Volume down, intensity stays.",
      "runGuidance": "★ Taper feels wrong. You'll feel sluggish and doubt everything. That's the taper working — trust it.",
      "deload": true,
      "days": [
        {
          "t": "Strength A · machines + race skill",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: leg press 3×6 moderate, machine row 2×8; then carry 1×200m + wall balls 2×15. Movement only — no grinding. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Run · race pace",
          "k": "run",
          "d": "45-MIN COACHED · 0–5 WARM: brisk walk + dynamic ankles · 5–17 BASE: conversational run/walk · 17–29 PUSH: controlled intervals · 29–40 POWER: short faster efforts with full walk recoveries · 40–45 COOL: easy walk + calf mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: GATED. 4 × 1km @ race pace, 90s walk. Sharp, not tiring. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Erg session",
          "k": "erg",
          "d": "45-MIN COACHED · 0–5 WARM: easy SkiErg/row · 5–17 BASE: technique + steady work · 17–29 PUSH: prescribed intervals · 29–40 POWER: short all-outs with standing recovery · 40–45 COOL: easy pull + lats/calves. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: SkiErg 4 × 250m @ race effort. Row 4 × 250m @ race effort. Stop while it still feels good. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Strength B · machines + sled",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: shoulder press machine 2×8 first; then sled push 3×50m light + burpee broad jump 40m. Keep it easy. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 2000m easy — recovery, not training. Loosens everything up. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block steady bike. Zero impact recovery volume. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Full rest. Foot protocol + 10 min mobility flow. Nothing else. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        }
      ]
    },
    {
      "n": 30,
      "phase": 3,
      "start": "2027-02-08",
      "focus": "Taper deepens.",
      "runGuidance": "★ Half the volume, all of the sharpness. Extra sleep is a training session this week.",
      "deload": true,
      "days": [
        {
          "t": "Strength A · machines + race skill",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: leg press 3×6 moderate, machine row 2×8; then carry 1×200m + wall balls 2×15. Movement only — no grinding. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Run · race pace",
          "k": "run",
          "d": "45-MIN COACHED · 0–5 WARM: brisk walk + dynamic ankles · 5–17 BASE: conversational run/walk · 17–29 PUSH: controlled intervals · 29–40 POWER: short faster efforts with full walk recoveries · 40–45 COOL: easy walk + calf mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: GATED. 3 × 1km @ race pace, 2 min walk. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Hyrox sim",
          "k": "hyrox",
          "d": "45-MIN COACHED · 0–5 WARM: easy cardio + movement prep · 5–17 TREAD: gated run/walk intervals · 17–29 ERG: SkiErg/row rotation · 29–40 FLOOR: sled/carry/lunge/wall-ball circuit · 40–45 COOL: walk + breathing. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: One round of your half of each station at race pace, generous rest. Movement quality and changeovers only. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "hyrox": true,
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Strength B · machines + sled",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: shoulder press machine 2×8 first; then sled push 3×50m light + burpee broad jump 40m. Keep it easy. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 1600m easy — recovery, not training. Loosens everything up. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block steady bike. Zero impact recovery volume. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Full rest. Foot protocol + 10 min mobility flow. Nothing else. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        }
      ]
    },
    {
      "n": 31,
      "phase": 3,
      "start": "2027-02-15",
      "focus": "Race week minus one. Everything short and sharp.",
      "runGuidance": "★ Nothing you do this week makes you fitter. Plenty could make you tired. Keep it short.",
      "deload": true,
      "days": [
        {
          "t": "Strength A · machines + race skill",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: leg press 3×6 moderate, machine row 2×8; then carry 1×200m + wall balls 2×15. Movement only — no grinding. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Run · race pace",
          "k": "run",
          "d": "45-MIN COACHED · 0–5 WARM: brisk walk + dynamic ankles · 5–17 BASE: conversational run/walk · 17–29 PUSH: controlled intervals · 29–40 POWER: short faster efforts with full walk recoveries · 40–45 COOL: easy walk + calf mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: GATED. 2 × 1km @ race pace. Done. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Erg session",
          "k": "erg",
          "d": "45-MIN COACHED · 0–5 WARM: easy SkiErg/row · 5–17 BASE: technique + steady work · 17–29 PUSH: prescribed intervals · 29–40 POWER: short all-outs with standing recovery · 40–45 COOL: easy pull + lats/calves. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: SkiErg 250m + row 250m @ race pace. 15 min total. Walk away feeling fresh. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Strength B · machines + sled",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Hevy: shoulder press machine 2×8 first; then sled push 3×50m light + burpee broad jump 40m. Keep it easy. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 1200m easy — recovery, not training. Loosens everything up. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 45 min steady bike. Zero impact recovery volume. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Full rest. Foot protocol + 10 min mobility flow. Nothing else. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        }
      ]
    },
    {
      "n": 32,
      "phase": 3,
      "start": "2027-02-22",
      "focus": "RACE WEEK.",
      "runGuidance": "★ Hyrox is Sunday. Legs up, carbs in, nothing new. You built this over 32 weeks — go collect it.",
      "deload": true,
      "days": [
        {
          "t": "Shakeout + mobility",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: 20 min easy walk or spin, full foot protocol, then stay off your feet. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Run · shakeout",
          "k": "run",
          "d": "45-MIN COACHED · 0–5 WARM: brisk walk + dynamic ankles · 5–17 BASE: conversational run/walk · 17–29 PUSH: controlled intervals · 29–40 POWER: short faster efforts with full walk recoveries · 40–45 COOL: easy walk + calf mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 20 min easy jog with 4 × 20s strides. Should feel effortless. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Openers",
          "k": "erg",
          "d": "45-MIN COACHED · 0–5 WARM: easy SkiErg/row · 5–17 BASE: technique + steady work · 17–29 PUSH: prescribed intervals · 29–40 POWER: short all-outs with standing recovery · 40–45 COOL: easy pull + lats/calves. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 10 min easy erg + a few race-pace strokes on SkiErg and rower. Wake the system, don't tire it. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "hyrox": true,
          "format": "otf45"
        },
        {
          "t": "Rest + kit check",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Off your feet. Lay out kit, pin the bib, plan fuel and warm-up timings. Foot protocol as normal. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Travel + shakeout",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Travel, 10 min easy walk, full foot protocol. Early night. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Rest",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Complete rest. Hydrate, carbs, feet up. Nothing else. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "★ HYROX — RACE DAY",
          "k": "hyrox",
          "d": "ASSESSMENT / EVENT — 150 MIN PLANNED. This is intentionally longer than the daily 45-minute class so pacing and late-race fatigue are tested honestly. TODAY'S TARGET: DOUBLES. You both run all 8 × 1km together (stay within 5s). Split every station you-go-I-go: SkiErg 1000m · sled push 50m · sled pull 50m · burpee broad jump 80m · row 1000m · farmers carry 200m · sandbag lunge 100m · 100 wall balls. Go get it.",
          "min": 150,
          "impact": "high",
          "hyrox": true,
          "run": true,
          "format": "event"
        }
      ]
    },
    {
      "n": 33,
      "phase": 4,
      "start": "2027-03-01",
      "focus": "Recover from Hyrox. Move gently.",
      "runGuidance": "★ No hard training this week. Your body just raced — respect it.",
      "deload": false,
      "days": [
        {
          "t": "Strength · machine maintenance",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: MACHINE FIRST: leg press 3×8, seated leg curl 3×10, chest-supported row + chest press 2×10. THEN RACE SKILL: carry 2×100m + core. Maintenance only. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "format": "otf45"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 1000m. Technique-focused: drills, then 100s @ steady. Sprint tri swim is 750m. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Run",
          "k": "run",
          "d": "45-MIN COACHED · 0–5 WARM: brisk walk + dynamic ankles · 5–17 BASE: conversational run/walk · 17–29 PUSH: controlled intervals · 29–40 POWER: short faster efforts with full walk recoveries · 40–45 COOL: easy walk + calf mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Easy 20 min jog, walk breaks fine. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Bike",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Easy 45 min spin. Nothing structured. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Swim #2",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 700m easy technique swim. Frequency beats volume in the pool. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Long ride or brick",
          "k": "brick",
          "d": "45-MIN COACHED · 0–5 WARM: easy bike · 5–25 BIKE: base-to-push intervals · 25–27 TRANSITION: shoes + reset · 27–40 RUN: gated easy-to-push run/walk · 40–45 COOL: walk + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block ride, last 20 min @ race effort, then 10 min jog off the bike. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Full rest. Foot protocol + 10 min mobility flow. Nothing else. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        }
      ]
    },
    {
      "n": 34,
      "phase": 4,
      "start": "2027-03-08",
      "focus": "Back to work. Swim becomes the priority.",
      "runGuidance": "★ Sprint tri is 750m swim / 20km bike / 5km run. Your run is race-ready — the swim is the gap.",
      "deload": false,
      "days": [
        {
          "t": "Strength · machine maintenance",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: MACHINE FIRST: leg press 3×8, seated leg curl 3×10, chest-supported row + chest press 2×10. THEN RACE SKILL: carry 2×100m + core. Maintenance only. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "format": "otf45"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 1600m. Technique-focused: drills, then 100s @ steady. Sprint tri swim is 750m. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Run",
          "k": "run",
          "d": "45-MIN COACHED · 0–5 WARM: brisk walk + dynamic ankles · 5–17 BASE: conversational run/walk · 17–29 PUSH: controlled intervals · 29–40 POWER: short faster efforts with full walk recoveries · 40–45 COOL: easy walk + calf mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Easy 30 min continuous run. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Bike",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block steady bike with 4 × 3 min @ tempo. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Swim #2",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 1120m easy technique swim. Frequency beats volume in the pool. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Long ride or brick",
          "k": "brick",
          "d": "45-MIN COACHED · 0–5 WARM: easy bike · 5–25 BIKE: base-to-push intervals · 25–27 TRANSITION: shoes + reset · 27–40 RUN: gated easy-to-push run/walk · 40–45 COOL: walk + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block ride, last 20 min @ race effort, then 10 min jog off the bike. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Full rest. Foot protocol + 10 min mobility flow. Nothing else. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        }
      ]
    },
    {
      "n": 35,
      "phase": 4,
      "start": "2027-03-15",
      "focus": "Swim volume + bike specificity.",
      "runGuidance": "★ Swim 3× this week if you can. Technique work beats hard efforts at this distance.",
      "deload": false,
      "days": [
        {
          "t": "Strength · machine maintenance",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: MACHINE FIRST: leg press 3×8, seated leg curl 3×10, chest-supported row + chest press 2×10. THEN RACE SKILL: carry 2×100m + core. Maintenance only. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "format": "otf45"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 2000m. Technique-focused: drills, then 100s @ steady. Sprint tri swim is 750m. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Run",
          "k": "run",
          "d": "45-MIN COACHED · 0–5 WARM: brisk walk + dynamic ankles · 5–17 BASE: conversational run/walk · 17–29 PUSH: controlled intervals · 29–40 POWER: short faster efforts with full walk recoveries · 40–45 COOL: easy walk + calf mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 35 min run, last 10 min @ tempo. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Bike",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block bike, 5 × 4 min @ 20km race effort. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Swim #2",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 1400m easy technique swim. Frequency beats volume in the pool. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Long ride or brick",
          "k": "brick",
          "d": "45-MIN COACHED · 0–5 WARM: easy bike · 5–25 BIKE: base-to-push intervals · 25–27 TRANSITION: shoes + reset · 27–40 RUN: gated easy-to-push run/walk · 40–45 COOL: walk + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block ride, last 20 min @ race effort, then 10 min jog off the bike. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Full rest. Foot protocol + 10 min mobility flow. Nothing else. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        }
      ]
    },
    {
      "n": 36,
      "phase": 4,
      "start": "2027-03-22",
      "focus": "First proper bricks.",
      "runGuidance": "★ Bike→run off the bike is the whole trick of triathlon. Short bricks, done often.",
      "deload": false,
      "days": [
        {
          "t": "Strength · machine maintenance",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: MACHINE FIRST: leg press 3×8, seated leg curl 3×10, chest-supported row + chest press 2×10. THEN RACE SKILL: carry 2×100m + core. Maintenance only. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "format": "otf45"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 2200m. Technique-focused: drills, then 100s @ steady. Sprint tri swim is 750m. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Run",
          "k": "run",
          "d": "45-MIN COACHED · 0–5 WARM: brisk walk + dynamic ankles · 5–17 BASE: conversational run/walk · 17–29 PUSH: controlled intervals · 29–40 POWER: short faster efforts with full walk recoveries · 40–45 COOL: easy walk + calf mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: BRICK. 40 min bike → 15 min run immediately. Legs will feel like concrete for 5 min, then clear. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Bike",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block bike with 6 × 3 min @ race effort. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Swim #2",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 1540m easy technique swim. Frequency beats volume in the pool. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Long ride or brick",
          "k": "brick",
          "d": "45-MIN COACHED · 0–5 WARM: easy bike · 5–25 BIKE: base-to-push intervals · 25–27 TRANSITION: shoes + reset · 27–40 RUN: gated easy-to-push run/walk · 40–45 COOL: walk + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block ride, last 20 min @ race effort, then 10 min jog off the bike. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Full rest. Foot protocol + 10 min mobility flow. Nothing else. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        }
      ]
    },
    {
      "n": 37,
      "phase": 4,
      "start": "2027-03-29",
      "focus": "Race-distance rehearsals.",
      "runGuidance": "★ Swim the full 750m continuous this week. Know what it feels like before race day.",
      "deload": false,
      "days": [
        {
          "t": "Strength · machine maintenance",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: MACHINE FIRST: leg press 3×8, seated leg curl 3×10, chest-supported row + chest press 2×10. THEN RACE SKILL: carry 2×100m + core. Maintenance only. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "format": "otf45"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 2400m. Technique-focused: drills, then 100s @ steady. Sprint tri swim is 750m. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Run",
          "k": "run",
          "d": "45-MIN COACHED · 0–5 WARM: brisk walk + dynamic ankles · 5–17 BASE: conversational run/walk · 17–29 PUSH: controlled intervals · 29–40 POWER: short faster efforts with full walk recoveries · 40–45 COOL: easy walk + calf mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: BRICK. 20km bike @ race effort → 5km run. Full race distance, one rehearsal. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Bike",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: Open water if you can get it — very different from a pool. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Swim #2",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 1680m easy technique swim. Frequency beats volume in the pool. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Long ride or brick",
          "k": "brick",
          "d": "45-MIN COACHED · 0–5 WARM: easy bike · 5–25 BIKE: base-to-push intervals · 25–27 TRANSITION: shoes + reset · 27–40 RUN: gated easy-to-push run/walk · 40–45 COOL: walk + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block ride, last 20 min @ race effort, then 10 min jog off the bike. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Full rest. Foot protocol + 10 min mobility flow. Nothing else. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        }
      ]
    },
    {
      "n": 38,
      "phase": 4,
      "start": "2027-04-05",
      "focus": "Sharpen.",
      "runGuidance": "★ Everything at race pace, nothing longer than race distance.",
      "deload": false,
      "days": [
        {
          "t": "Strength · machine maintenance",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: MACHINE FIRST: leg press 3×8, seated leg curl 3×10, chest-supported row + chest press 2×10. THEN RACE SKILL: carry 2×100m + core. Maintenance only. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "format": "otf45"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 2400m. Technique-focused: drills, then 100s @ steady. Sprint tri swim is 750m. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Run",
          "k": "run",
          "d": "45-MIN COACHED · 0–5 WARM: brisk walk + dynamic ankles · 5–17 BASE: conversational run/walk · 17–29 PUSH: controlled intervals · 29–40 POWER: short faster efforts with full walk recoveries · 40–45 COOL: easy walk + calf mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: BRICK. 40 min bike → 20 min run @ race pace. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Bike",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block bike, 4 × 5 min @ race effort. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Swim #2",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 1680m easy technique swim. Frequency beats volume in the pool. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Long ride or brick",
          "k": "brick",
          "d": "45-MIN COACHED · 0–5 WARM: easy bike · 5–25 BIKE: base-to-push intervals · 25–27 TRANSITION: shoes + reset · 27–40 RUN: gated easy-to-push run/walk · 40–45 COOL: walk + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block ride, last 20 min @ race effort, then 10 min jog off the bike. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Full rest. Foot protocol + 10 min mobility flow. Nothing else. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        }
      ]
    },
    {
      "n": 39,
      "phase": 4,
      "start": "2027-04-12",
      "focus": "Taper.",
      "runGuidance": "★ Volume drops by half. Keep the intensity short and sharp.",
      "deload": true,
      "days": [
        {
          "t": "Strength · machine maintenance",
          "k": "strength",
          "d": "45-MIN COACHED · 0–5 WARM: bike/row + dynamic joints · 5–17 MACHINES 1: lower body · 17–29 MACHINES 2: upper body · 29–40 HYROX SKILL: carries/sled/lunge/wall-ball intervals · 40–45 COOL: easy walk + calf/hip mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: MACHINE FIRST: leg press 3×8, seated leg curl 3×10, chest-supported row + chest press 2×10. THEN RACE SKILL: carry 2×100m + core. Maintenance only. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "low",
          "format": "otf45"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 1600m. Technique-focused: drills, then 100s @ steady. Sprint tri swim is 750m. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Run",
          "k": "run",
          "d": "45-MIN COACHED · 0–5 WARM: brisk walk + dynamic ankles · 5–17 BASE: conversational run/walk · 17–29 PUSH: controlled intervals · 29–40 POWER: short faster efforts with full walk recoveries · 40–45 COOL: easy walk + calf mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 25 min run with 4 × 90s @ race pace. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Bike",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block easy spin with 3 × 2 min @ race effort. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Swim #2",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 1120m easy technique swim. Frequency beats volume in the pool. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Long ride or brick",
          "k": "brick",
          "d": "45-MIN COACHED · 0–5 WARM: easy bike · 5–25 BIKE: base-to-push intervals · 25–27 TRANSITION: shoes + reset · 27–40 RUN: gated easy-to-push run/walk · 40–45 COOL: walk + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: the available work block ride, last 20 min @ race effort, then 10 min jog off the bike. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Full rest. Foot protocol + 10 min mobility flow. Nothing else. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        }
      ]
    },
    {
      "n": 40,
      "phase": 4,
      "start": "2027-04-19",
      "focus": "RACE WEEK — Sprint Triathlon.",
      "runGuidance": "★ Sunday is the finish line of the whole season. Two races, one build. Go enjoy it.",
      "deload": true,
      "days": [
        {
          "t": "Easy swim",
          "k": "swim",
          "d": "45-MIN COACHED · 0–5 WARM: relaxed swim · 5–15 SKILL: breathing + technique drills · 15–30 BASE: steady aerobic set · 30–40 PUSH: short strong repeats with easy recovery · 40–45 COOL: relaxed swim. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 600m relaxed. Feel the water, nothing more. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Shakeout run",
          "k": "run",
          "d": "45-MIN COACHED · 0–5 WARM: brisk walk + dynamic ankles · 5–17 BASE: conversational run/walk · 17–29 PUSH: controlled intervals · 29–40 POWER: short faster efforts with full walk recoveries · 40–45 COOL: easy walk + calf mobility. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 15 min easy jog with 4 × 20s strides. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "high",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Easy spin",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 30 min easy with 3 × 1 min @ race effort. Check the bike over. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Rest + kit",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Off your feet. Rack kit, plan transitions, check the bike again. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "Openers",
          "k": "bike",
          "d": "45-MIN COACHED · 0–5 WARM: easy spin · 5–17 BASE: conversational cadence · 17–29 PUSH: controlled tempo · 29–40 POWER: short hill/all-out repeats with easy spin · 40–45 COOL: easy spin + calves/hips. EFFORT: Base = RPE 4–5, Push = 6–7, All Out = 8–9 for short bursts only. TODAY'S TARGET: 20 min spin + 5 min jog. Short and sharp. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "run": true,
          "format": "otf45"
        },
        {
          "t": "Rest",
          "k": "rest",
          "d": "45-MIN COACHED · 0–5 RESET: breathing + gentle joint circles · 5–15 EASY: relaxed walk or spin · 15–27 MOBILITY: calves, hips, thoracic spine · 27–40 FOOT: full foot protocol + heavy-slow calf raises if scheduled · 40–45 DOWN: easy stretch. EFFORT: Easy throughout at RPE 2–3; recovery quality is today's win. TODAY'S TARGET: Complete rest. Hydrate, eat well, feet up. Stop at 45:00 even if reps remain; log what you completed. On run/brick days, the morning heel-pain gate overrides every interval.",
          "min": 45,
          "impact": "zero",
          "format": "otf45"
        },
        {
          "t": "★ SPRINT TRIATHLON — RACE DAY",
          "k": "brick",
          "d": "ASSESSMENT / EVENT — 100 MIN PLANNED. This is intentionally longer than the daily 45-minute class so pacing and late-race fatigue are tested honestly. TODAY'S TARGET: 750m swim · 20km bike · 5km run. The second finish line. You've earned this one twice over.",
          "min": 100,
          "impact": "high",
          "run": true,
          "format": "event"
        }
      ]
    }
  ],
};
