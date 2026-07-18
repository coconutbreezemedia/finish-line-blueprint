/*
 * backend.js — talks to the Fit Bitch sync function on Vercel.
 * The Airtable token lives ONLY on that server. The app just sends the
 * access key ("fit bitch") + a log; the server validates and writes.
 * The access key is stored on this device so you log in once.
 */
window.Backend = (function () {
  const API_BASE = "https://fitbitch-sync-coconut-breeze-media.vercel.app";

  function session() {
    try { return JSON.parse(localStorage.getItem("flb.session") || "null"); } catch (_) { return null; }
  }
  function save(s) { localStorage.setItem("flb.session", JSON.stringify(s)); }

  function isLoggedIn() { const s = session(); return !!(s && (s.password || s.offline)); }
  function canSync() { const s = session(); return !!(s && s.password); }

  async function login(password) {
    try {
      const r = await fetch(API_BASE + "/api/log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (r.ok) { save({ password }); return { ok: true }; }
      if (r.status === 401) return { ok: false, error: "That access key didn't match. Try again." };
      if (r.status === 500) return { ok: false, error: "Server isn't finished setting up yet." };
      return { ok: false, error: "Server error (" + r.status + ")." };
    } catch (_) {
      return { ok: false, error: "Can't reach the sync server. Check your connection." };
    }
  }
  function loginOffline() { save({ offline: true }); }
  function logout() { localStorage.removeItem("flb.session"); }

  async function pushLog(entry) {
    const s = session();
    if (!s || !s.password) return { ok: false, skipped: true };
    const r = await fetch(API_BASE + "/api/log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: s.password, log: entry }),
    });
    const data = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error(data.error || ("http " + r.status));
    return data;
  }

  return { isLoggedIn, canSync, login, loginOffline, logout, pushLog, API_BASE };
})();
