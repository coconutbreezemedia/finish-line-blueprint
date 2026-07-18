/* icons.js — inline SVG icon set (surf identity).
 * All use currentColor so they inherit text color; size via CSS. */
window.ICON = {
  gear:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>',
  close:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  chevron:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>',
  // sun with rays — used for the streak (replaces 🔥) and "phase complete"
  sun:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4.4" fill="currentColor" stroke="none"/><path d="M12 1.8v2.4M12 19.8v2.4M3 12H.6M23.4 12H21M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7"/></svg>',
  // little flag on a pole — used for race markers on the progress bar
  flag:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 21V4"/><path d="M6 4.5h11l-2.2 3.2L17 11H6" fill="currentColor" stroke="none"/></svg>',
  // wave — decorative
  wave:
    '<svg viewBox="0 0 48 12" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M1 7 q5.5 -6 11 0 t11 0 t11 0 t11 0"/></svg>',
  check:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12.5l5 5L20 6"/></svg>',
};

/* Header lockup (Horizon direction C) — horizontal, scales with the header. */
window.LOGO_LOCKUP =
  '<svg class="logo-lockup" viewBox="0 0 250 60" fill="none" role="img" aria-label="Fit Bitch">' +
  '<defs><linearGradient id="flbSun" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd15c"/><stop offset="1" stop-color="#ff6b4a"/></linearGradient></defs>' +
  '<clipPath id="flbClip"><rect x="8" y="6" width="60" height="34"/></clipPath>' +
  '<g clip-path="url(#flbClip)"><circle cx="38" cy="40" r="30" fill="url(#flbSun)"/>' +
  '<rect x="8" y="26" width="60" height="3" fill="#071a24"/><rect x="8" y="33" width="60" height="4" fill="#071a24"/></g>' +
  '<path d="M8 46 q7.5 -6 15 0 t15 0 t15 0 t15 0" fill="none" stroke="#16c2b3" stroke-width="3.2" stroke-linecap="round"/>' +
  '<text x="80" y="30" font-family="-apple-system,Segoe UI,Roboto,Arial,sans-serif" font-size="26" font-weight="900" letter-spacing="1" fill="#fdf6ec">FIT</text>' +
  '<text x="80" y="52" font-family="-apple-system,Segoe UI,Roboto,Arial,sans-serif" font-size="26" font-weight="900" letter-spacing="1" fill="#ff6b4a">BITCH</text>' +
  '</svg>';
