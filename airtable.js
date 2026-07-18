/*
 * airtable.js — thin, optional sync layer.
 * The app works fully WITHOUT this (logs live in localStorage).
 * When the user pastes a Personal Access Token + Base ID in Settings,
 * we mirror each day's log to the "Workout Log" table.
 *
 * The token is stored ONLY in the browser (localStorage) and is never
 * committed to the repo. Because Airtable's API is called directly from
 * the browser, use a token scoped to just this one base.
 */
window.AirtableSync = (function () {
  const API = "https://api.airtable.com/v0";
  const LOG_TABLE = "Workout Log"; // table name works as an endpoint segment

  function cfg() {
    try {
      return JSON.parse(localStorage.getItem("flb.airtable") || "null");
    } catch (_) {
      return null;
    }
  }

  function isConnected() {
    const c = cfg();
    return !!(c && c.token && c.baseId);
  }

  async function req(path, opts = {}) {
    const c = cfg();
    if (!c || !c.token || !c.baseId) throw new Error("Not connected");
    const res = await fetch(`${API}/${c.baseId}/${path}`, {
      ...opts,
      headers: {
        Authorization: `Bearer ${c.token}`,
        "Content-Type": "application/json",
        ...(opts.headers || {}),
      },
    });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      throw new Error(`Airtable ${res.status}: ${body.slice(0, 200)}`);
    }
    return res.json();
  }

  // Verify the token can see the base + Workout Log table.
  async function test() {
    await req(`${encodeURIComponent(LOG_TABLE)}?maxRecords=1`);
    return true;
  }

  // Find an existing log record for a date so we upsert rather than duplicate.
  async function findByDate(dateStr) {
    const formula = encodeURIComponent(`DATESTR({Date})='${dateStr}'`);
    const data = await req(
      `${encodeURIComponent(LOG_TABLE)}?maxRecords=1&filterByFormula=${formula}`
    );
    return data.records && data.records[0] ? data.records[0].id : null;
  }

  // Push one day's log. `entry` uses plain field names.
  async function pushLog(entry) {
    const fields = {
      Name: entry.name,
      Date: entry.date,
      Session: entry.session || "",
      Completed: !!entry.completed,
      "Morning Heel Pain":
        entry.heelPain === "" || entry.heelPain == null ? null : Number(entry.heelPain),
      "Foot Protocol Done": !!entry.footDone,
      RPE: entry.rpe === "" || entry.rpe == null ? null : Number(entry.rpe),
      Notes: entry.notes || "",
    };
    // Drop null numerics so Airtable doesn't complain.
    if (fields["Morning Heel Pain"] === null) delete fields["Morning Heel Pain"];
    if (fields.RPE === null) delete fields.RPE;

    const existingId = await findByDate(entry.date);
    if (existingId) {
      return req(`${encodeURIComponent(LOG_TABLE)}/${existingId}`, {
        method: "PATCH",
        body: JSON.stringify({ fields }),
      });
    }
    return req(encodeURIComponent(LOG_TABLE), {
      method: "POST",
      body: JSON.stringify({ fields, typecast: true }),
    });
  }

  return { isConnected, test, pushLog, cfg };
})();
