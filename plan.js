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
    { key: "hyrox", label: "Hyrox", date: "2027-02-28", estimated: true,
      note: "8×1km run + 8 stations: SkiErg 1000m, sled push 50m, sled pull 50m, burpee broad jump 80m, row 1000m, farmers carry 200m, sandbag lunge 100m, 100 wall balls." },
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
      "goal": "Run 25 min continuous pain-free, and post a first honest 1000m SkiErg + 1000m row benchmark."
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
      "focus": "Ramp running to the full 8km race volume, hammer station strength-endurance, and run compromised (off a station) every single week. Monthly simulations of increasing completeness.",
      "goal": "Complete a full 8-station Hyrox simulation and run 8 × 1km at a pace you could hold on race day."
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
      "focus": "Volume stops growing; everything moves to race pace. Three full simulations, then a three-week taper into race day.",
      "goal": "Cross the Hyrox finish line on Sun 28 Feb 2027, faster than your week 20 simulation."
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
          "t": "Strength A · full body",
          "k": "strength",
          "d": "Hevy: goblet squat 4×8, trap-bar/RDL hinge 4×8, farmers carry 4×40m heavy, walking lunge 3×20 steps, dead-bug 3×12. Log loads in Hevy — this is your Hyrox base.",
          "min": 60,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "SkiErg + Row intro",
          "k": "erg",
          "d": "SkiErg 4 × 500m @ moderate, 90s rest. Then Row 3 × 500m @ moderate, 90s rest. Learn the stroke now — both are race stations.",
          "min": 45,
          "impact": "zero",
          "hyrox": true
        },
        {
          "t": "Zone 2 Bike",
          "k": "bike",
          "d": "45 min conversational spin. You should be able to talk in full sentences the whole way.",
          "min": 45,
          "impact": "zero"
        },
        {
          "t": "Strength B · posterior + press",
          "k": "strength",
          "d": "Hevy: deadlift 4×6, overhead press 4×8, sled push 6×20m (or heavy incline walk), sandbag/DB lunge 3×20 steps, wall balls 3×20, plank 3×45s.",
          "min": 60,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "800m total: 8 × 50m easy w/ 20s rest, then 400m continuous relaxed. Breathing first, speed never.",
          "min": 40,
          "impact": "zero"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "75 min steady bike. Last 15 min a touch harder. Practice mid-session fuel + fluid.",
          "min": 75,
          "impact": "zero"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "Full rest. Foot protocol + 10 min mobility flow. Nothing else.",
          "min": 15,
          "impact": "zero"
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
          "t": "Strength A",
          "k": "strength",
          "d": "Same lifts, +2.5–5kg where week 1 felt clean. Carries 4×50m.",
          "min": 60,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Walk/Run trial",
          "k": "run",
          "d": "GATED. 10 min brisk walk, then 6 × (1 min easy jog / 2 min walk), 5 min walk down. Grass or track. Total jog: 6 min — deliberately tiny.",
          "min": 40,
          "impact": "high",
          "run": true
        },
        {
          "t": "SkiErg intervals",
          "k": "erg",
          "d": "SkiErg 6 × 500m @ moderate-hard, 90s rest. Target: hold the same split across all 6.",
          "min": 45,
          "impact": "zero",
          "hyrox": true
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "Progress loads. Sled push 8×20m. Wall balls 4×20 — get the squat depth honest.",
          "min": 60,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "1000m: 4 × 100m easy, 300m continuous, 4 × 50m build, 100m cool. ",
          "min": 40,
          "impact": "zero"
        },
        {
          "t": "Long aerobic + row",
          "k": "bike",
          "d": "60 min bike straight into 2000m row @ steady. Back-to-back modality is a Hyrox skill.",
          "min": 80,
          "impact": "zero",
          "hyrox": true
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "Full rest. Foot protocol + 10 min mobility flow. Nothing else.",
          "min": 15,
          "impact": "zero"
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
          "t": "Strength A",
          "k": "strength",
          "d": "Progress. Add step-ups 3×12/leg for single-leg strength (sled + lunges need it).",
          "min": 60,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Walk/Run",
          "k": "run",
          "d": "GATED. 10 min walk, then 6 × (2 min jog / 90s walk), walk down. Total jog: 12 min.",
          "min": 45,
          "impact": "high",
          "run": true
        },
        {
          "t": "Row intervals",
          "k": "erg",
          "d": "Row 5 × 750m @ moderate-hard, 2 min rest. Then SkiErg 500m easy to finish.",
          "min": 50,
          "impact": "zero",
          "hyrox": true
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "Deadlift 4×5 heavier. Sled 8×20m. Wall balls 4×25. Extra calf/foot work today.",
          "min": 60,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "1200m: 200m warm, 6 × 100m @ steady w/ 20s rest, 300m continuous, 100m cool.",
          "min": 45,
          "impact": "zero"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "85 min steady bike. Hold a slightly firmer pace than week 2.",
          "min": 85,
          "impact": "zero"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "Full rest. Foot protocol + 10 min mobility flow. Nothing else.",
          "min": 15,
          "impact": "zero"
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
          "t": "Strength A",
          "k": "strength",
          "d": "Squat 4×6 heavier, hinge 4×6, carries 4×60m. Push the loads — form still first.",
          "min": 65,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Continuous run",
          "k": "run",
          "d": "GATED. 10 min walk warm-up, then 15 min continuous easy jog (~1.5–2km), walk down. Slow is correct.",
          "min": 40,
          "impact": "high",
          "run": true
        },
        {
          "t": "SkiErg + Row",
          "k": "erg",
          "d": "SkiErg 1000m @ race effort (this is the exact station distance — note your time). Rest 3 min. Row 1000m @ race effort. Note that too. These are your first benchmarks.",
          "min": 45,
          "impact": "zero",
          "hyrox": true
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "Sled push 10×20m heavy. Wall balls 5×25. Sandbag lunge 4×25m. Overhead press 4×6.",
          "min": 65,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "1400m: 300m warm, 8 × 100m @ steady, 400m continuous, 100m cool.",
          "min": 45,
          "impact": "zero"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "90 min bike. Longest yet. Eat and drink on schedule, not by feel.",
          "min": 90,
          "impact": "zero"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "Full rest. Foot protocol + 10 min mobility flow. Nothing else.",
          "min": 15,
          "impact": "zero"
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
          "t": "Strength A",
          "k": "strength",
          "d": "Progress all lifts. Carries 4×80m — race is 200m, we're building to it.",
          "min": 65,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Continuous run",
          "k": "run",
          "d": "GATED. 20 min continuous easy jog (~2–2.5km). Conversational the whole way.",
          "min": 45,
          "impact": "high",
          "run": true
        },
        {
          "t": "Compromised intervals",
          "k": "erg",
          "d": "4 rounds: 500m row @ hard → 400m easy jog (or 3 min brisk walk if the foot's grumpy) → 90s rest. Legs will feel strange running off the erg. That's the point.",
          "min": 50,
          "impact": "low",
          "hyrox": true,
          "run": true
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "Sled push + pull 8×20m each. Wall balls 5×25. Burpee broad jump 4×10m — learn the movement now.",
          "min": 65,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "1600m: 300m warm, 10 × 100m @ steady w/ 15s rest, 200m continuous, 100m cool.",
          "min": 50,
          "impact": "zero"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "95 min bike, steady. Or 70 min bike + 3000m row if weather's bad.",
          "min": 95,
          "impact": "zero"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "Full rest. Foot protocol + 10 min mobility flow. Nothing else.",
          "min": 15,
          "impact": "zero"
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
          "t": "Strength A (light)",
          "k": "strength",
          "d": "All lifts at ~75% of last week's loads. Move fast and clean, don't grind.",
          "min": 45,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Benchmark run",
          "k": "run",
          "d": "GATED. Easy continuous jog as far as comfortable up to 25 min (~3km). Note distance + how the foot felt. This is your Phase 1 finish line.",
          "min": 45,
          "impact": "high",
          "run": true
        },
        {
          "t": "Benchmark ergs",
          "k": "erg",
          "d": "SkiErg 1000m all-out. Rest 5 min. Row 1000m all-out. Write both times down — you'll chase them for 26 weeks.",
          "min": 40,
          "impact": "zero",
          "hyrox": true
        },
        {
          "t": "Strength B (light)",
          "k": "strength",
          "d": "~75% loads. Good long foot-care session to close the phase.",
          "min": 45,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Easy swim",
          "k": "swim",
          "d": "1000m relaxed, no clock, no intervals.",
          "min": 35,
          "impact": "zero"
        },
        {
          "t": "Long aerobic (easy)",
          "k": "bike",
          "d": "60 min easy spin. Reflect: 6 weeks in, what's actually changed?",
          "min": 60,
          "impact": "zero"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "Rest + review. Log your benchmarks, then read the Phase 2 brief in the Plan tab.",
          "min": 15,
          "impact": "zero"
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
          "d": "Hevy: Squat 5×5, hinge 4×6, farmers carry 4×100m, walking lunge 4×20, wall balls 5×25.",
          "min": 65,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Run · 3km",
          "k": "run",
          "d": "GATED. 3 × 1km @ easy-steady w/ 2 min walk between. First time touching race distance.",
          "min": 55,
          "impact": "high",
          "run": true
        },
        {
          "t": "Erg session",
          "k": "erg",
          "d": "SkiErg 8 × 500m @ hard, 60s rest. Then row 2000m steady.",
          "min": 55,
          "impact": "zero",
          "hyrox": true
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "Hevy: Sled push 10×25m, sled pull 8×25m, overhead press 4×8, burpee broad jump 5×20m, plank 3×60s.",
          "min": 65,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "1600m: 300m warm, main set of 100s and 200s @ steady, 200m easy cool.",
          "min": 50,
          "impact": "zero"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "95 min steady bike (or 70 min bike + 3000m row). Zero impact, pure engine.",
          "min": 95,
          "impact": "zero"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "Full rest. Foot protocol + 10 min mobility flow. Nothing else.",
          "min": 15,
          "impact": "zero"
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
          "d": "Hevy: Squat 5×5, hinge 4×6, farmers carry 4×100m, walking lunge 4×20, wall balls 5×25.",
          "min": 65,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Run · 4km",
          "k": "run",
          "d": "GATED. 4 × 1km @ easy-steady, 2 min walk. Hold an even pace across all four.",
          "min": 55,
          "impact": "high",
          "run": true
        },
        {
          "t": "Erg session",
          "k": "erg",
          "d": "Row 6 × 750m @ hard, 90s rest. SkiErg 1000m to finish.",
          "min": 55,
          "impact": "zero",
          "hyrox": true
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "Hevy: Sled push 10×25m, sled pull 8×25m, overhead press 4×8, burpee broad jump 5×20m, plank 3×60s.",
          "min": 65,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "1800m: 300m warm, main set of 100s and 200s @ steady, 200m easy cool.",
          "min": 50,
          "impact": "zero"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "100 min steady bike (or 70 min bike + 3000m row). Zero impact, pure engine.",
          "min": 100,
          "impact": "zero"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "Full rest. Foot protocol + 10 min mobility flow. Nothing else.",
          "min": 15,
          "impact": "zero"
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
          "d": "Hevy: Squat 5×5, hinge 4×6, farmers carry 4×100m, walking lunge 4×20, wall balls 5×25.",
          "min": 65,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Run · 5km",
          "k": "run",
          "d": "GATED. 25–30 min continuous easy run (~4–5km). Longest continuous run yet.",
          "min": 55,
          "impact": "high",
          "run": true
        },
        {
          "t": "Erg session",
          "k": "erg",
          "d": "SkiErg 1000m + Row 1000m + SkiErg 1000m, 3 min rest between. Race-pace effort.",
          "min": 55,
          "impact": "zero",
          "hyrox": true
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "Hevy: Sled push 10×25m, sled pull 8×25m, overhead press 4×8, burpee broad jump 5×20m, plank 3×60s.",
          "min": 65,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "2000m: 300m warm, main set of 100s and 200s @ steady, 200m easy cool.",
          "min": 50,
          "impact": "zero"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "105 min steady bike (or 70 min bike + 3000m row). Zero impact, pure engine.",
          "min": 105,
          "impact": "zero"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "Full rest. Foot protocol + 10 min mobility flow. Nothing else.",
          "min": 15,
          "impact": "zero"
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
          "d": "Hevy: Squat 5×5, hinge 4×6, farmers carry 4×100m, walking lunge 4×20, wall balls 5×25.",
          "min": 65,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Run · 5km",
          "k": "run",
          "d": "GATED. 5 × 1km @ steady, 90s walk. Shorter rest than week 8 — that's the progression.",
          "min": 55,
          "impact": "high",
          "run": true
        },
        {
          "t": "Erg session",
          "k": "erg",
          "d": "Row 8 × 500m @ hard, 60s rest.",
          "min": 55,
          "impact": "zero",
          "hyrox": true
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "Hevy: Sled push 10×25m, sled pull 8×25m, overhead press 4×8, burpee broad jump 5×20m, plank 3×60s.",
          "min": 65,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "2000m: 300m warm, main set of 100s and 200s @ steady, 200m easy cool.",
          "min": 50,
          "impact": "zero"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "110 min steady bike (or 70 min bike + 3000m row). Zero impact, pure engine.",
          "min": 110,
          "impact": "zero"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "Full rest. Foot protocol + 10 min mobility flow. Nothing else.",
          "min": 15,
          "impact": "zero"
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
          "d": "Hevy: Squat 5×5 (+load), hinge 4×5, farmers carry 4×120m, sandbag lunge 4×25m, wall balls 6×25.",
          "min": 65,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Run · 6km",
          "k": "run",
          "d": "GATED. 30–35 min continuous easy run (~5–6km).",
          "min": 55,
          "impact": "high",
          "run": true
        },
        {
          "t": "Hyrox sim",
          "k": "hyrox",
          "d": "HALF SIM: 4 rounds of (1km run → one station). Stations: SkiErg 1000m, sled push 50m, burpee broad jump 80m, row 1000m. Rest as needed — completion, not time.",
          "min": 90,
          "impact": "high",
          "hyrox": true,
          "run": true
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "Hevy: Sled push 12×25m heavy, sled pull 10×25m, push press 4×6, burpee broad jump 6×20m.",
          "min": 65,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "2200m: 300m warm, main set of 100s and 200s @ steady, 200m easy cool.",
          "min": 50,
          "impact": "zero"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "110 min steady bike (or 70 min bike + 3000m row). Zero impact, pure engine.",
          "min": 110,
          "impact": "zero"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "Full rest. Foot protocol + 10 min mobility flow. Nothing else.",
          "min": 15,
          "impact": "zero"
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
          "d": "Hevy: Squat 5×5 (+load), hinge 4×5, farmers carry 4×120m, sandbag lunge 4×25m, wall balls 6×25.",
          "min": 65,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Run · 6km",
          "k": "run",
          "d": "GATED. 6 × 1km @ steady, 90s walk.",
          "min": 55,
          "impact": "high",
          "run": true
        },
        {
          "t": "Erg session",
          "k": "erg",
          "d": "SkiErg 10 × 500m @ hard, 60s rest. Brutal but zero impact.",
          "min": 55,
          "impact": "zero",
          "hyrox": true
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "Hevy: Sled push 12×25m heavy, sled pull 10×25m, push press 4×6, burpee broad jump 6×20m.",
          "min": 65,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "2400m: 300m warm, main set of 100s and 200s @ steady, 200m easy cool.",
          "min": 50,
          "impact": "zero"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "115 min steady bike (or 70 min bike + 3000m row). Zero impact, pure engine.",
          "min": 115,
          "impact": "zero"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "Full rest. Foot protocol + 10 min mobility flow. Nothing else.",
          "min": 15,
          "impact": "zero"
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
          "d": "Hevy: Squat 5×5 (+load), hinge 4×5, farmers carry 4×120m, sandbag lunge 4×25m, wall balls 6×25.",
          "min": 65,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Run · 7km",
          "k": "run",
          "d": "GATED. 35–40 min continuous run (~6–7km). Fuel mid-run if it goes past 35 min.",
          "min": 55,
          "impact": "high",
          "run": true
        },
        {
          "t": "Erg session",
          "k": "erg",
          "d": "Row 5 × 1000m @ race effort, 2 min rest. Match your week 6 benchmark on every rep.",
          "min": 55,
          "impact": "zero",
          "hyrox": true
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "Hevy: Sled push 12×25m heavy, sled pull 10×25m, push press 4×6, burpee broad jump 6×20m.",
          "min": 65,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "2400m: 300m warm, main set of 100s and 200s @ steady, 200m easy cool.",
          "min": 50,
          "impact": "zero"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "120 min steady bike (or 70 min bike + 3000m row). Zero impact, pure engine.",
          "min": 120,
          "impact": "zero"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "Full rest. Foot protocol + 10 min mobility flow. Nothing else.",
          "min": 15,
          "impact": "zero"
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
          "d": "Hevy: Squat 5×5 (+load), hinge 4×5, farmers carry 4×120m, sandbag lunge 4×25m, wall balls 6×25.",
          "min": 45,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Run · 5km",
          "k": "run",
          "d": "DELOAD. 4 × 1km @ easy, generous walk breaks.",
          "min": 40,
          "impact": "high",
          "run": true
        },
        {
          "t": "Erg session",
          "k": "erg",
          "d": "SkiErg 4 × 500m easy. Row 2000m easy. Nothing hard.",
          "min": 55,
          "impact": "zero",
          "hyrox": true
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "Hevy: Sled push 12×25m heavy, sled pull 10×25m, push press 4×6, burpee broad jump 6×20m.",
          "min": 45,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "1800m: 300m warm, main set of 100s and 200s @ steady, 200m easy cool.",
          "min": 50,
          "impact": "zero"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "75 min steady bike (or 70 min bike + 3000m row). Zero impact, pure engine.",
          "min": 75,
          "impact": "zero"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "Full rest. Foot protocol + 10 min mobility flow. Nothing else.",
          "min": 15,
          "impact": "zero"
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
          "d": "Hevy: Front squat 5×5, deadlift 4×5, farmers carry 3×150m, lunge 4×25m, wall balls 5×30.",
          "min": 65,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Run · 7km",
          "k": "run",
          "d": "GATED. 6 × 1km @ steady, 75s walk.",
          "min": 55,
          "impact": "high",
          "run": true
        },
        {
          "t": "Erg session",
          "k": "erg",
          "d": "SkiErg 1000m, row 1000m, SkiErg 1000m, row 1000m @ race effort, 2 min rest.",
          "min": 55,
          "impact": "zero",
          "hyrox": true
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "Hevy: Sled push 8×50m (race distance), sled pull 6×50m, press 4×6, burpee broad jump 4×40m.",
          "min": 65,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "2600m: 300m warm, main set of 100s and 200s @ steady, 200m easy cool.",
          "min": 50,
          "impact": "zero"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "115 min steady bike (or 70 min bike + 3000m row). Zero impact, pure engine.",
          "min": 115,
          "impact": "zero"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "Full rest. Foot protocol + 10 min mobility flow. Nothing else.",
          "min": 15,
          "impact": "zero"
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
          "d": "Hevy: Front squat 5×5, deadlift 4×5, farmers carry 3×150m, lunge 4×25m, wall balls 5×30.",
          "min": 65,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Run · 8km",
          "k": "run",
          "d": "GATED. 40–45 min continuous run (~7–8km).",
          "min": 55,
          "impact": "high",
          "run": true
        },
        {
          "t": "Hyrox sim",
          "k": "hyrox",
          "d": "3/4 SIM: 6 rounds of (1km run → station). SkiErg 1000m, sled push 50m, sled pull 50m, burpee broad jump 80m, row 1000m, farmers carry 200m.",
          "min": 90,
          "impact": "high",
          "hyrox": true,
          "run": true
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "Hevy: Sled push 8×50m (race distance), sled pull 6×50m, press 4×6, burpee broad jump 4×40m.",
          "min": 65,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "2600m: 300m warm, main set of 100s and 200s @ steady, 200m easy cool.",
          "min": 50,
          "impact": "zero"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "120 min steady bike (or 70 min bike + 3000m row). Zero impact, pure engine.",
          "min": 120,
          "impact": "zero"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "Full rest. Foot protocol + 10 min mobility flow. Nothing else.",
          "min": 15,
          "impact": "zero"
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
          "d": "Hevy: Front squat 5×5, deadlift 4×5, farmers carry 3×150m, lunge 4×25m, wall balls 5×30.",
          "min": 65,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Run · 8km",
          "k": "run",
          "d": "GATED. 8 × 1km @ steady, 60s walk. Race rep count for the first time.",
          "min": 55,
          "impact": "high",
          "run": true
        },
        {
          "t": "Erg session",
          "k": "erg",
          "d": "Row 6 × 1000m @ race effort, 90s rest.",
          "min": 55,
          "impact": "zero",
          "hyrox": true
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "Hevy: Sled push 8×50m (race distance), sled pull 6×50m, press 4×6, burpee broad jump 4×40m.",
          "min": 65,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "2800m: 300m warm, main set of 100s and 200s @ steady, 200m easy cool.",
          "min": 50,
          "impact": "zero"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "120 min steady bike (or 70 min bike + 3000m row). Zero impact, pure engine.",
          "min": 120,
          "impact": "zero"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "Full rest. Foot protocol + 10 min mobility flow. Nothing else.",
          "min": 15,
          "impact": "zero"
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
          "d": "Hevy: Front squat 5×5, deadlift 4×5, farmers carry 3×150m, lunge 4×25m, wall balls 5×30.",
          "min": 45,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Run · 6km",
          "k": "run",
          "d": "DELOAD. 4 × 1km easy.",
          "min": 40,
          "impact": "high",
          "run": true
        },
        {
          "t": "Erg session",
          "k": "erg",
          "d": "Easy SkiErg 3 × 500m, row 1500m. Recovery only.",
          "min": 55,
          "impact": "zero",
          "hyrox": true
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "Hevy: Sled push 8×50m (race distance), sled pull 6×50m, press 4×6, burpee broad jump 4×40m.",
          "min": 45,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "2000m: 300m warm, main set of 100s and 200s @ steady, 200m easy cool.",
          "min": 50,
          "impact": "zero"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "80 min steady bike (or 70 min bike + 3000m row). Zero impact, pure engine.",
          "min": 80,
          "impact": "zero"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "Full rest. Foot protocol + 10 min mobility flow. Nothing else.",
          "min": 15,
          "impact": "zero"
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
          "d": "Hevy: Squat 4×6 @ heavy, hinge 4×5, carry 3×200m (race distance — unbroken), wall balls 6×25.",
          "min": 65,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Run · 9km",
          "k": "run",
          "d": "GATED. 45–50 min continuous run (~8–9km). Longest of the season.",
          "min": 55,
          "impact": "high",
          "run": true
        },
        {
          "t": "Erg session",
          "k": "erg",
          "d": "SkiErg 12 × 500m @ hard, 45s rest.",
          "min": 55,
          "impact": "zero",
          "hyrox": true
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "Hevy: Sled push 6×50m heavy, sled pull 6×50m, press 5×5, burpee broad jump 80m for time.",
          "min": 65,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "2800m: 300m warm, main set of 100s and 200s @ steady, 200m easy cool.",
          "min": 50,
          "impact": "zero"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "120 min steady bike (or 70 min bike + 3000m row). Zero impact, pure engine.",
          "min": 120,
          "impact": "zero"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "Full rest. Foot protocol + 10 min mobility flow. Nothing else.",
          "min": 15,
          "impact": "zero"
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
          "d": "Hevy: Squat 4×6 @ heavy, hinge 4×5, carry 3×200m (race distance — unbroken), wall balls 6×25.",
          "min": 65,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Run · 8km",
          "k": "run",
          "d": "GATED. 8 × 1km @ race pace, 60s walk. Faster than week 17, same volume.",
          "min": 55,
          "impact": "high",
          "run": true
        },
        {
          "t": "Hyrox sim",
          "k": "hyrox",
          "d": "FULL SIM #1: all 8 stations with 1km runs between. Take rests where needed. Record the total time.",
          "min": 90,
          "impact": "high",
          "hyrox": true,
          "run": true
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "Hevy: Sled push 6×50m heavy, sled pull 6×50m, press 5×5, burpee broad jump 80m for time.",
          "min": 65,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "2800m: 300m warm, main set of 100s and 200s @ steady, 200m easy cool.",
          "min": 50,
          "impact": "zero"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "110 min steady bike (or 70 min bike + 3000m row). Zero impact, pure engine.",
          "min": 110,
          "impact": "zero"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "Full rest. Foot protocol + 10 min mobility flow. Nothing else.",
          "min": 15,
          "impact": "zero"
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
          "d": "Hevy: Squat 4×6 @ heavy, hinge 4×5, carry 3×200m (race distance — unbroken), wall balls 6×25.",
          "min": 65,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Run · 9km",
          "k": "run",
          "d": "GATED. 5 × 1.5km @ steady, 2 min walk. Longer reps, same total.",
          "min": 55,
          "impact": "high",
          "run": true
        },
        {
          "t": "Erg session",
          "k": "erg",
          "d": "Row 8 × 750m @ hard, 60s. SkiErg 1000m @ race effort to close.",
          "min": 55,
          "impact": "zero",
          "hyrox": true
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "Hevy: Sled push 6×50m heavy, sled pull 6×50m, press 5×5, burpee broad jump 80m for time.",
          "min": 65,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "3000m: 300m warm, main set of 100s and 200s @ steady, 200m easy cool.",
          "min": 50,
          "impact": "zero"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "120 min steady bike (or 70 min bike + 3000m row). Zero impact, pure engine.",
          "min": 120,
          "impact": "zero"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "Full rest. Foot protocol + 10 min mobility flow. Nothing else.",
          "min": 15,
          "impact": "zero"
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
          "d": "Hevy: Squat 4×6 @ heavy, hinge 4×5, carry 3×200m (race distance — unbroken), wall balls 6×25.",
          "min": 45,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Run · 7km",
          "k": "run",
          "d": "DELOAD. 5 × 1km easy.",
          "min": 40,
          "impact": "high",
          "run": true
        },
        {
          "t": "Erg session",
          "k": "erg",
          "d": "Easy ergs, 20 min total, nothing above conversational.",
          "min": 55,
          "impact": "zero",
          "hyrox": true
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "Hevy: Sled push 6×50m heavy, sled pull 6×50m, press 5×5, burpee broad jump 80m for time.",
          "min": 45,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "2200m: 300m warm, main set of 100s and 200s @ steady, 200m easy cool.",
          "min": 50,
          "impact": "zero"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "80 min steady bike (or 70 min bike + 3000m row). Zero impact, pure engine.",
          "min": 80,
          "impact": "zero"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "Full rest. Foot protocol + 10 min mobility flow. Nothing else.",
          "min": 15,
          "impact": "zero"
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
          "t": "Strength A",
          "k": "strength",
          "d": "Hevy: squat 4×4 @ heavy, hinge 3×4, carry 2×200m, wall balls 4×25. Sharp and short.",
          "min": 50,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Run · race pace",
          "k": "run",
          "d": "GATED. 6 × 1km @ RACE PACE, 60s walk. Pick a pace you could hold for eight. Hold it.",
          "min": 50,
          "impact": "high",
          "run": true
        },
        {
          "t": "Erg session",
          "k": "erg",
          "d": "SkiErg 1000m + row 1000m @ race effort, then 8 × 100m wall-ball sprints.",
          "min": 45,
          "impact": "zero",
          "hyrox": true
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "Hevy: sled push 6×50m, sled pull 6×50m, burpee broad jump 80m, press 4×5.",
          "min": 50,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "2600m easy — recovery, not training. Loosens everything up.",
          "min": 40,
          "impact": "zero"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "100 min steady bike. Zero impact recovery volume.",
          "min": 100,
          "impact": "zero"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "Full rest. Foot protocol + 10 min mobility flow. Nothing else.",
          "min": 15,
          "impact": "zero"
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
          "t": "Strength A",
          "k": "strength",
          "d": "Hevy: squat 4×4 @ heavy, hinge 3×4, carry 2×200m, wall balls 4×25. Sharp and short.",
          "min": 50,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Run · race pace",
          "k": "run",
          "d": "GATED. 5 × (1km @ race pace → 20 wall balls) — run straight off the reps.",
          "min": 50,
          "impact": "high",
          "run": true
        },
        {
          "t": "Hyrox sim",
          "k": "hyrox",
          "d": "FULL SIM #2: all 8 stations. Push the pace this time. Compare to your week 20 time.",
          "min": 90,
          "impact": "high",
          "hyrox": true,
          "run": true
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "Hevy: sled push 6×50m, sled pull 6×50m, burpee broad jump 80m, press 4×5.",
          "min": 50,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "2600m easy — recovery, not training. Loosens everything up.",
          "min": 40,
          "impact": "zero"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "100 min steady bike. Zero impact recovery volume.",
          "min": 100,
          "impact": "zero"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "Full rest. Foot protocol + 10 min mobility flow. Nothing else.",
          "min": 15,
          "impact": "zero"
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
          "t": "Strength A",
          "k": "strength",
          "d": "Hevy: squat 4×4 @ heavy, hinge 3×4, carry 2×200m, wall balls 4×25. Sharp and short.",
          "min": 50,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Run · race pace",
          "k": "run",
          "d": "GATED. 8 × 1km @ race pace, 45s walk. The full race distance at the target pace.",
          "min": 50,
          "impact": "high",
          "run": true
        },
        {
          "t": "Erg session",
          "k": "erg",
          "d": "SkiErg 10 × 500m @ hard, 45s rest. Row 3 × 1000m @ race effort.",
          "min": 45,
          "impact": "zero",
          "hyrox": true
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "Hevy: sled push 6×50m, sled pull 6×50m, burpee broad jump 80m, press 4×5.",
          "min": 50,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "2800m easy — recovery, not training. Loosens everything up.",
          "min": 40,
          "impact": "zero"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "110 min steady bike. Zero impact recovery volume.",
          "min": 110,
          "impact": "zero"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "Full rest. Foot protocol + 10 min mobility flow. Nothing else.",
          "min": 15,
          "impact": "zero"
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
          "t": "Strength A",
          "k": "strength",
          "d": "Hevy: squat 4×4 @ heavy, hinge 3×4, carry 2×200m, wall balls 4×25. Sharp and short.",
          "min": 50,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Run · race pace",
          "k": "run",
          "d": "GATED. 4 × 1km easy.",
          "min": 50,
          "impact": "high",
          "run": true
        },
        {
          "t": "Erg session",
          "k": "erg",
          "d": "Easy ergs 20 min. Nothing hard.",
          "min": 45,
          "impact": "zero",
          "hyrox": true
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "Hevy: sled push 6×50m, sled pull 6×50m, burpee broad jump 80m, press 4×5.",
          "min": 50,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "2000m easy — recovery, not training. Loosens everything up.",
          "min": 40,
          "impact": "zero"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "75 min steady bike. Zero impact recovery volume.",
          "min": 75,
          "impact": "zero"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "Full rest. Foot protocol + 10 min mobility flow. Nothing else.",
          "min": 15,
          "impact": "zero"
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
          "t": "Strength A",
          "k": "strength",
          "d": "Hevy: squat 4×4 @ heavy, hinge 3×4, carry 2×200m, wall balls 4×25. Sharp and short.",
          "min": 50,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Run · race pace",
          "k": "run",
          "d": "GATED. 6 × 1km @ race pace, 45s walk.",
          "min": 50,
          "impact": "high",
          "run": true
        },
        {
          "t": "Hyrox sim",
          "k": "hyrox",
          "d": "6 rounds: 1km run → station, at race intensity. Pick your 6 weakest stations.",
          "min": 90,
          "impact": "high",
          "hyrox": true,
          "run": true
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "Hevy: sled push 6×50m, sled pull 6×50m, burpee broad jump 80m, press 4×5.",
          "min": 50,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "2600m easy — recovery, not training. Loosens everything up.",
          "min": 40,
          "impact": "zero"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "100 min steady bike. Zero impact recovery volume.",
          "min": 100,
          "impact": "zero"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "Full rest. Foot protocol + 10 min mobility flow. Nothing else.",
          "min": 15,
          "impact": "zero"
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
          "t": "Strength A",
          "k": "strength",
          "d": "Hevy: squat 4×4 @ heavy, hinge 3×4, carry 2×200m, wall balls 4×25. Sharp and short.",
          "min": 50,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Run · race pace",
          "k": "run",
          "d": "GATED. 8 × 1km @ race pace, 45s walk.",
          "min": 50,
          "impact": "high",
          "run": true
        },
        {
          "t": "Hyrox sim",
          "k": "hyrox",
          "d": "FULL SIM #3: all 8 stations, raced. This is your dress rehearsal — same kit, same fuel, same warm-up as race day.",
          "min": 90,
          "impact": "high",
          "hyrox": true,
          "run": true
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "Hevy: sled push 6×50m, sled pull 6×50m, burpee broad jump 80m, press 4×5.",
          "min": 50,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "2800m easy — recovery, not training. Loosens everything up.",
          "min": 40,
          "impact": "zero"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "105 min steady bike. Zero impact recovery volume.",
          "min": 105,
          "impact": "zero"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "Full rest. Foot protocol + 10 min mobility flow. Nothing else.",
          "min": 15,
          "impact": "zero"
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
          "t": "Strength A",
          "k": "strength",
          "d": "Hevy: squat 3×3 @ moderate, carry 1×200m, wall balls 2×20. Movement only — no grinding.",
          "min": 35,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Run · race pace",
          "k": "run",
          "d": "GATED. 4 × 1km @ race pace, 90s walk. Sharp, not tiring.",
          "min": 35,
          "impact": "high",
          "run": true
        },
        {
          "t": "Erg session",
          "k": "erg",
          "d": "SkiErg 4 × 500m @ race effort. Row 2 × 1000m @ race effort. Stop while it still feels good.",
          "min": 45,
          "impact": "zero",
          "hyrox": true
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "Hevy: sled push 3×50m light, burpee broad jump 40m, press 3×5. Keep it easy.",
          "min": 35,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "2000m easy — recovery, not training. Loosens everything up.",
          "min": 40,
          "impact": "zero"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "75 min steady bike. Zero impact recovery volume.",
          "min": 75,
          "impact": "zero"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "Full rest. Foot protocol + 10 min mobility flow. Nothing else.",
          "min": 15,
          "impact": "zero"
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
          "t": "Strength A",
          "k": "strength",
          "d": "Hevy: squat 3×3 @ moderate, carry 1×200m, wall balls 2×20. Movement only — no grinding.",
          "min": 35,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Run · race pace",
          "k": "run",
          "d": "GATED. 3 × 1km @ race pace, 2 min walk.",
          "min": 35,
          "impact": "high",
          "run": true
        },
        {
          "t": "Hyrox sim",
          "k": "hyrox",
          "d": "One round of each station at race pace, generous rest. Movement quality only.",
          "min": 45,
          "impact": "high",
          "hyrox": true,
          "run": true
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "Hevy: sled push 3×50m light, burpee broad jump 40m, press 3×5. Keep it easy.",
          "min": 35,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "1600m easy — recovery, not training. Loosens everything up.",
          "min": 40,
          "impact": "zero"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "60 min steady bike. Zero impact recovery volume.",
          "min": 60,
          "impact": "zero"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "Full rest. Foot protocol + 10 min mobility flow. Nothing else.",
          "min": 15,
          "impact": "zero"
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
          "t": "Strength A",
          "k": "strength",
          "d": "Hevy: squat 3×3 @ moderate, carry 1×200m, wall balls 2×20. Movement only — no grinding.",
          "min": 35,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Run · race pace",
          "k": "run",
          "d": "GATED. 2 × 1km @ race pace. Done.",
          "min": 35,
          "impact": "high",
          "run": true
        },
        {
          "t": "Erg session",
          "k": "erg",
          "d": "SkiErg 500m + row 500m @ race pace. 15 min total. Walk away feeling fresh.",
          "min": 45,
          "impact": "zero",
          "hyrox": true
        },
        {
          "t": "Strength B",
          "k": "strength",
          "d": "Hevy: sled push 3×50m light, burpee broad jump 40m, press 3×5. Keep it easy.",
          "min": 35,
          "impact": "low",
          "hyrox": true
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "1200m easy — recovery, not training. Loosens everything up.",
          "min": 40,
          "impact": "zero"
        },
        {
          "t": "Long aerobic",
          "k": "bike",
          "d": "45 min steady bike. Zero impact recovery volume.",
          "min": 45,
          "impact": "zero"
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "Full rest. Foot protocol + 10 min mobility flow. Nothing else.",
          "min": 15,
          "impact": "zero"
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
          "d": "20 min easy walk or spin, full foot protocol, then stay off your feet.",
          "min": 25,
          "impact": "zero"
        },
        {
          "t": "Run · shakeout",
          "k": "run",
          "d": "20 min easy jog with 4 × 20s strides. Should feel effortless.",
          "min": 30,
          "impact": "high",
          "run": true
        },
        {
          "t": "Openers",
          "k": "erg",
          "d": "10 min easy erg + a few race-pace strokes on SkiErg and rower. Wake the system, don't tire it.",
          "min": 25,
          "impact": "zero",
          "hyrox": true
        },
        {
          "t": "Rest + kit check",
          "k": "rest",
          "d": "Off your feet. Lay out kit, pin the bib, plan fuel and warm-up timings. Foot protocol as normal.",
          "min": 15,
          "impact": "zero"
        },
        {
          "t": "Travel + shakeout",
          "k": "rest",
          "d": "Travel, 10 min easy walk, full foot protocol. Early night.",
          "min": 20,
          "impact": "zero"
        },
        {
          "t": "Rest",
          "k": "rest",
          "d": "Complete rest. Hydrate, carbs, feet up. Nothing else.",
          "min": 15,
          "impact": "zero"
        },
        {
          "t": "★ HYROX — RACE DAY",
          "k": "hyrox",
          "d": "8 × 1km run + 8 stations: SkiErg 1000m · sled push 50m · sled pull 50m · burpee broad jump 80m · row 1000m · farmers carry 200m · sandbag lunge 100m · 100 wall balls. Go get it.",
          "min": 150,
          "impact": "high",
          "hyrox": true,
          "run": true
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
          "t": "Strength (maintain)",
          "k": "strength",
          "d": "Hevy: squat 3×6, hinge 3×6, carry 2×100m, core. Maintenance only — the racing is elsewhere now.",
          "min": 40,
          "impact": "low"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "1000m. Technique-focused: drills, then 100s @ steady. Sprint tri swim is 750m.",
          "min": 50,
          "impact": "zero"
        },
        {
          "t": "Run",
          "k": "run",
          "d": "Easy 20 min jog, walk breaks fine.",
          "min": 45,
          "impact": "high",
          "run": true
        },
        {
          "t": "Bike",
          "k": "bike",
          "d": "Easy 45 min spin. Nothing structured.",
          "min": 45,
          "impact": "zero"
        },
        {
          "t": "Swim #2",
          "k": "swim",
          "d": "700m easy technique swim. Frequency beats volume in the pool.",
          "min": 40,
          "impact": "zero"
        },
        {
          "t": "Long ride or brick",
          "k": "brick",
          "d": "65 min ride, last 20 min @ race effort, then 10 min jog off the bike.",
          "min": 75,
          "impact": "high",
          "run": true
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "Full rest. Foot protocol + 10 min mobility flow. Nothing else.",
          "min": 15,
          "impact": "zero"
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
          "t": "Strength (maintain)",
          "k": "strength",
          "d": "Hevy: squat 3×6, hinge 3×6, carry 2×100m, core. Maintenance only — the racing is elsewhere now.",
          "min": 40,
          "impact": "low"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "1600m. Technique-focused: drills, then 100s @ steady. Sprint tri swim is 750m.",
          "min": 50,
          "impact": "zero"
        },
        {
          "t": "Run",
          "k": "run",
          "d": "Easy 30 min continuous run.",
          "min": 45,
          "impact": "high",
          "run": true
        },
        {
          "t": "Bike",
          "k": "bike",
          "d": "60 min steady bike with 4 × 3 min @ tempo.",
          "min": 60,
          "impact": "zero"
        },
        {
          "t": "Swim #2",
          "k": "swim",
          "d": "1120m easy technique swim. Frequency beats volume in the pool.",
          "min": 40,
          "impact": "zero"
        },
        {
          "t": "Long ride or brick",
          "k": "brick",
          "d": "80 min ride, last 20 min @ race effort, then 10 min jog off the bike.",
          "min": 90,
          "impact": "high",
          "run": true
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "Full rest. Foot protocol + 10 min mobility flow. Nothing else.",
          "min": 15,
          "impact": "zero"
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
          "t": "Strength (maintain)",
          "k": "strength",
          "d": "Hevy: squat 3×6, hinge 3×6, carry 2×100m, core. Maintenance only — the racing is elsewhere now.",
          "min": 40,
          "impact": "low"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "2000m. Technique-focused: drills, then 100s @ steady. Sprint tri swim is 750m.",
          "min": 50,
          "impact": "zero"
        },
        {
          "t": "Run",
          "k": "run",
          "d": "35 min run, last 10 min @ tempo.",
          "min": 45,
          "impact": "high",
          "run": true
        },
        {
          "t": "Bike",
          "k": "bike",
          "d": "70 min bike, 5 × 4 min @ 20km race effort.",
          "min": 70,
          "impact": "zero"
        },
        {
          "t": "Swim #2",
          "k": "swim",
          "d": "1400m easy technique swim. Frequency beats volume in the pool.",
          "min": 40,
          "impact": "zero"
        },
        {
          "t": "Long ride or brick",
          "k": "brick",
          "d": "90 min ride, last 20 min @ race effort, then 10 min jog off the bike.",
          "min": 100,
          "impact": "high",
          "run": true
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "Full rest. Foot protocol + 10 min mobility flow. Nothing else.",
          "min": 15,
          "impact": "zero"
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
          "t": "Strength (maintain)",
          "k": "strength",
          "d": "Hevy: squat 3×6, hinge 3×6, carry 2×100m, core. Maintenance only — the racing is elsewhere now.",
          "min": 40,
          "impact": "low"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "2200m. Technique-focused: drills, then 100s @ steady. Sprint tri swim is 750m.",
          "min": 50,
          "impact": "zero"
        },
        {
          "t": "Run",
          "k": "run",
          "d": "BRICK. 40 min bike → 15 min run immediately. Legs will feel like concrete for 5 min, then clear.",
          "min": 45,
          "impact": "high",
          "run": true
        },
        {
          "t": "Bike",
          "k": "bike",
          "d": "75 min bike with 6 × 3 min @ race effort.",
          "min": 75,
          "impact": "zero"
        },
        {
          "t": "Swim #2",
          "k": "swim",
          "d": "1540m easy technique swim. Frequency beats volume in the pool.",
          "min": 40,
          "impact": "zero"
        },
        {
          "t": "Long ride or brick",
          "k": "brick",
          "d": "95 min ride, last 20 min @ race effort, then 10 min jog off the bike.",
          "min": 105,
          "impact": "high",
          "run": true
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "Full rest. Foot protocol + 10 min mobility flow. Nothing else.",
          "min": 15,
          "impact": "zero"
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
          "t": "Strength (maintain)",
          "k": "strength",
          "d": "Hevy: squat 3×6, hinge 3×6, carry 2×100m, core. Maintenance only — the racing is elsewhere now.",
          "min": 40,
          "impact": "low"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "2400m. Technique-focused: drills, then 100s @ steady. Sprint tri swim is 750m.",
          "min": 50,
          "impact": "zero"
        },
        {
          "t": "Run",
          "k": "run",
          "d": "BRICK. 20km bike @ race effort → 5km run. Full race distance, one rehearsal.",
          "min": 45,
          "impact": "high",
          "run": true
        },
        {
          "t": "Bike",
          "k": "bike",
          "d": "Open water if you can get it — very different from a pool.",
          "min": 80,
          "impact": "zero"
        },
        {
          "t": "Swim #2",
          "k": "swim",
          "d": "1680m easy technique swim. Frequency beats volume in the pool.",
          "min": 40,
          "impact": "zero"
        },
        {
          "t": "Long ride or brick",
          "k": "brick",
          "d": "100 min ride, last 20 min @ race effort, then 10 min jog off the bike.",
          "min": 110,
          "impact": "high",
          "run": true
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "Full rest. Foot protocol + 10 min mobility flow. Nothing else.",
          "min": 15,
          "impact": "zero"
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
          "t": "Strength (maintain)",
          "k": "strength",
          "d": "Hevy: squat 3×6, hinge 3×6, carry 2×100m, core. Maintenance only — the racing is elsewhere now.",
          "min": 40,
          "impact": "low"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "2400m. Technique-focused: drills, then 100s @ steady. Sprint tri swim is 750m.",
          "min": 50,
          "impact": "zero"
        },
        {
          "t": "Run",
          "k": "run",
          "d": "BRICK. 40 min bike → 20 min run @ race pace.",
          "min": 45,
          "impact": "high",
          "run": true
        },
        {
          "t": "Bike",
          "k": "bike",
          "d": "70 min bike, 4 × 5 min @ race effort.",
          "min": 70,
          "impact": "zero"
        },
        {
          "t": "Swim #2",
          "k": "swim",
          "d": "1680m easy technique swim. Frequency beats volume in the pool.",
          "min": 40,
          "impact": "zero"
        },
        {
          "t": "Long ride or brick",
          "k": "brick",
          "d": "90 min ride, last 20 min @ race effort, then 10 min jog off the bike.",
          "min": 100,
          "impact": "high",
          "run": true
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "Full rest. Foot protocol + 10 min mobility flow. Nothing else.",
          "min": 15,
          "impact": "zero"
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
          "t": "Strength (maintain)",
          "k": "strength",
          "d": "Hevy: squat 3×6, hinge 3×6, carry 2×100m, core. Maintenance only — the racing is elsewhere now.",
          "min": 40,
          "impact": "low"
        },
        {
          "t": "Swim",
          "k": "swim",
          "d": "1600m. Technique-focused: drills, then 100s @ steady. Sprint tri swim is 750m.",
          "min": 50,
          "impact": "zero"
        },
        {
          "t": "Run",
          "k": "run",
          "d": "25 min run with 4 × 90s @ race pace.",
          "min": 45,
          "impact": "high",
          "run": true
        },
        {
          "t": "Bike",
          "k": "bike",
          "d": "50 min easy spin with 3 × 2 min @ race effort.",
          "min": 50,
          "impact": "zero"
        },
        {
          "t": "Swim #2",
          "k": "swim",
          "d": "1120m easy technique swim. Frequency beats volume in the pool.",
          "min": 40,
          "impact": "zero"
        },
        {
          "t": "Long ride or brick",
          "k": "brick",
          "d": "70 min ride, last 20 min @ race effort, then 10 min jog off the bike.",
          "min": 80,
          "impact": "high",
          "run": true
        },
        {
          "t": "Rest + mobility",
          "k": "rest",
          "d": "Full rest. Foot protocol + 10 min mobility flow. Nothing else.",
          "min": 15,
          "impact": "zero"
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
          "d": "600m relaxed. Feel the water, nothing more.",
          "min": 30,
          "impact": "zero"
        },
        {
          "t": "Shakeout run",
          "k": "run",
          "d": "15 min easy jog with 4 × 20s strides.",
          "min": 25,
          "impact": "high",
          "run": true
        },
        {
          "t": "Easy spin",
          "k": "bike",
          "d": "30 min easy with 3 × 1 min @ race effort. Check the bike over.",
          "min": 30,
          "impact": "zero"
        },
        {
          "t": "Rest + kit",
          "k": "rest",
          "d": "Off your feet. Rack kit, plan transitions, check the bike again.",
          "min": 15,
          "impact": "zero"
        },
        {
          "t": "Openers",
          "k": "bike",
          "d": "20 min spin + 5 min jog. Short and sharp.",
          "min": 25,
          "impact": "zero",
          "run": true
        },
        {
          "t": "Rest",
          "k": "rest",
          "d": "Complete rest. Hydrate, eat well, feet up.",
          "min": 15,
          "impact": "zero"
        },
        {
          "t": "★ SPRINT TRIATHLON — RACE DAY",
          "k": "brick",
          "d": "750m swim · 20km bike · 5km run. The second finish line. You've earned this one twice over.",
          "min": 100,
          "impact": "high",
          "run": true
        }
      ]
    }
  ],
};
