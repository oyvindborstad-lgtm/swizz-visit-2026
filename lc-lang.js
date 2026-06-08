/* ============================================================
   Shared language helper — used by main page AND subpages.
   Language is global: ?lang= in the URL wins, then the shared
   localStorage key "iwo-lang", then the default.
   ============================================================ */
(function () {
  "use strict";
  var LANGS = ["no", "en", "es", "de"];
  var DEFAULT = "en";
  var KEY = "iwo-lang";

  function fromQuery() {
    var m = /[?&]lang=([a-z]{2})/i.exec(window.location.search || "");
    return m ? m[1].toLowerCase() : null;
  }
  function ok(l) { return LANGS.indexOf(l) !== -1; }

  function get() {
    var q = fromQuery();
    if (q && ok(q)) return q;
    try { var s = localStorage.getItem(KEY); if (s && ok(s)) return s; } catch (e) {}
    return DEFAULT;
  }
  function set(l) {
    if (!ok(l)) l = DEFAULT;
    try { localStorage.setItem(KEY, l); } catch (e) {}
    return l;
  }

  window.LCLang = { LANGS: LANGS, DEFAULT: DEFAULT, KEY: KEY, get: get, set: set };
})();
