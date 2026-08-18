# Fit Bitch

A bold, surf-flavored, mobile-first training app for a beginner taking on **Hyrox + a Sprint Triathlon** in the same season — built around a low-impact ramp and a daily foot-care protocol so run-heavy training doesn't wreck your feet.

It's an installable **PWA** (offline-capable). The whole plan is baked in, so it works with zero setup. Your daily logs save on your device and can optionally mirror to your own Airtable base.

**Live:** https://coconutbreezemedia.github.io/finish-line-blueprint/
**Install:** open the link on your phone → Share → *Add to Home Screen* (iOS) / install prompt (Android).

---

## The adaptive daily coach

Every day's workout is **generated each morning**, not just read off the season
template. The engine (`coach.js`) takes today's template day + your workout
history + your weight baselines + a set of editable rules, and produces a
structured 45-minute class card where **every line is checkable**:

- **Strength days** prescribe exact machine work — *"Leg press — 4 × 8–10 @ 90 lb"* —
  machine-first order (lower → upper → Hyrox skill). Weights progress by **double
  progression**: tag an exercise *too easy / just right / too hard* after the
  workout and the next session's load moves accordingly.
- **Cardio days** (run, SkiErg, row, bike, swim) get pace targets computed from
  *your own* best efforts in the last 28 days — e.g. a SkiErg split target a few
  seconds off your recent best.
- The **★ heel-pain run gate** still overrides everything: running only appears
  when your morning heel readings have earned it, otherwise the day swaps to
  zero-impact work automatically.
- Two RPE ≥ 9 days in a row and the next day's Push/Power blocks demote to Base.
- The **rules themselves learn**: consistent feedback slowly retunes the
  progression knobs, and every change is explained in the Info tab.

Starting weights are deliberately **pretend placeholders** — set your real
numbers in **Settings → Weights** (or in the Airtable `Baselines` table). Editing
a weight resets that exercise's progression from that date.

A Vercel cron (`vercel-sync/api/generate`) runs the same engine every morning at
5:30am ET and writes the day's plan to the Airtable `Daily Plans` table.

## What's inside

- **Cal** — the selected day's generated class card (timed blocks, per-item checkoffs, feedback chips), the foot-protocol checklist, and the numbers log that feeds tomorrow's targets.
- **Plan** — four season phases, a 2-day prep block, and the full 40-week season as expandable day-by-day cards. Ordinary days use a consistent 45-minute Base / Push / All Out class rhythm; full simulations and races stay event-length.
- **Foot** — the six-part plantar-fasciitis protocol (the load-bearing wall) plus a streak counter.
- **Log** — your history, a heel-pain trend sparkline, and simple stats.
- **Info** — the rules (the ★ running gate), fueling guidance, and your race dates.
- **Settings** — your name, calorie target, real race dates, and optional Airtable sync.

The schedule is **date-aware**: it knows what today is and surfaces the right session. Week 1 starts Monday; the two days before it are a prep block.

## Run it locally

No build step. Any static server works:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Optional: sync logs to Airtable

The app works fully without this. To mirror your logs to an Airtable base:

1. Create an Airtable **Personal Access Token** scoped to **just your base**, with `data.records:read` and `data.records:write`.
2. In the app, open **Settings → Airtable sync**, paste your **Base ID** and **token**, and hit **Test connection**.
3. The token is stored **only in your browser** (localStorage) and is never sent anywhere except Airtable. It is never committed to this repo.

The base uses these tables: `Workout Log` (your logs), plus `Phases`, `Weekly Plan`, `Foot Protocol`, `Rules`, and `Fueling` (a reference mirror of the plan).

## Deploy (GitHub Pages)

Push to the default branch, then **Settings → Pages → Deploy from branch → `main` / root**. Because it's fully static, that's the whole deploy.

## Files

| File | What it is |
|------|-----------|
| `index.html` | App shell |
| `plan.js` | The season template data (generic — no personal info) |
| `coach.js` | The adaptive daily generator (pure, deterministic, runs in browser + Node) |
| `app.js` | Rendering, date logic, local logging, animations |
| `backend.js` | Sync layer (app → Vercel function → Airtable) |
| `icons.js` | Inline SVG icon set + header logo lockup |
| `styles.css` | Surf design system + animations |
| `manifest.webmanifest` · `service-worker.js` · `icons/` | PWA install + offline shell + app icons |

## A note on privacy & safety

- **No personal data is committed.** Your name, weight, calorie target, real race dates, and every log live only in your browser (and your Airtable, if you connect it).
- **Not medical advice.** Get cleared before Day 1, respect the running gate, and stop on sharp or worsening pain.

---

Built with [Coconut Breeze Media](https://coconutbreezemedia.com).
