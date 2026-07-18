# Finish Line Blueprint 🏁

A bold, mobile-first training app for a beginner taking on **Hyrox + a Sprint Triathlon** in the same season — built around a low-impact ramp and a daily foot-care protocol so run-heavy training doesn't wreck your feet.

It's a single-page static web app. The whole plan is baked in, so it works offline with zero setup. Your daily logs save on your device and can optionally mirror to your own Airtable base.

**Live:** https://coconutbreezemedia.github.io/finish-line-blueprint/

---

## What's inside

- **Today** — the day's session, a running-gate warning on run days, the foot-protocol checklist, and a quick log (session done, morning heel pain, RPE, notes).
- **Plan** — the three season phases, a 2-day prep block, and 8 weeks of Foundation training as expandable day-by-day cards.
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
| `plan.js` | The plan data (generic — no personal info) |
| `app.js` | Rendering, date logic, local logging |
| `airtable.js` | Optional Airtable sync layer |
| `styles.css` | Bold/energetic design system |

## A note on privacy & safety

- **No personal data is committed.** Your name, weight, calorie target, real race dates, and every log live only in your browser (and your Airtable, if you connect it).
- **Not medical advice.** Get cleared before Day 1, respect the running gate, and stop on sharp or worsening pain.

---

Built with [Coconut Breeze Media](https://coconutbreezemedia.com).
