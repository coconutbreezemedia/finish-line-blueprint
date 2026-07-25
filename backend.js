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

  // Why sync is not running right now — drives the visible banner.
  // null = syncing fine. "offline" = chose to skip login. "rejected" = server
  // refused the stored key (env var changed / key rotated). "unreachable" = network.
  function syncState() {
    const s = session();
    if (!s) return "offline";
    if (s.offline) return "offline";
    if (s.broken) return s.broken;
    return null;
  }
  function markBroken(kind) {
    const s = session() || {};
    s.broken = kind;
    save(s);
  }
  function clearBroken() {
    const s = session();
    if (s && s.broken) { delete s.broken; save(s); }
  }

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
    if (!s || !s.password) return { ok: false, skipped: true, reason: "offline" };

    let r, data;
    try {
      r = await fetch(API_BASE + "/api/log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: s.password, log: entry }),
      });
    } catch (_) {
      // Network/DNS/offline — the key may still be good, so don't mark it rejected.
      markBroken("unreachable");
      return { ok: false, reason: "unreachable" };
    }
    data = await r.json().catch(() => ({}));

    if (r.status === 401) {
      // Stored key no longer matches the server. Nothing will sync until it's
      // re-entered, so make it sticky rather than a toast that disappears.
      markBroken("rejected");
      return { ok: false, reason: "rejected" };
    }
    if (!r.ok) {
      markBroken("server");
      return { ok: false, reason: "server", detail: data.error || ("http " + r.status) };
    }
    clearBroken();
    return { ok: true, id: data.id };
  }

  return {
    isLoggedIn, canSync, login, loginOffline, logout, pushLog,
    syncState, markBroken, clearBroken, API_BASE,
  };
})();
