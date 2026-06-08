/* ============================================================
   Innovation Week Oslo 2026 — app logic
   i18n engine · scroll reveal · circular org model · takt flow
   ============================================================ */
(function () {
  "use strict";

  var LANGS = ["no", "en", "es", "de"];
  var DEFAULT = "en";
  var dict = window.I18N || {};
  var cur = DEFAULT;

  /* ---------- i18n ---------- */
  function t(key) {
    var d = dict[cur] || {};
    return (key in d) ? d[key] : (dict[DEFAULT][key] || key);
  }

  function applyLang(lang) {
    if (LANGS.indexOf(lang) === -1) lang = DEFAULT;
    cur = lang;
    document.documentElement.setAttribute("lang", lang === "no" ? "nb" : lang);
    document.title = t("doc.title");

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n"));
    });

    document.querySelectorAll(".lang-btn").forEach(function (b) {
      var on = b.getAttribute("data-lang") === lang;
      b.classList.toggle("on", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });

    try { localStorage.setItem("iwo-lang", lang); } catch (e) {}

    buildOrg();
    buildTakt();
  }

  /* ---------- circular organisation model ---------- */
  function buildOrg() {
    var ring = document.getElementById("orgRing");
    if (!ring) return;
    ring.querySelectorAll(".org-node, .org-spoke").forEach(function (n) { n.remove(); });

    var hub = document.getElementById("orgHub");
    if (hub) hub.innerHTML = t("org.hub");

    var keys = ["org.t1","org.t2","org.t3","org.t4","org.t5","org.t6","org.t7","org.t8"];
    var n = keys.length;
    var R = 41;          // % radius for node centres
    for (var i = 0; i < n; i++) {
      var ang = (-90 + i * (360 / n)) * Math.PI / 180;
      var x = 50 + R * Math.cos(ang);
      var y = 50 + R * Math.sin(ang);

      var spoke = document.createElement("div");
      spoke.className = "org-spoke";
      var len = R; // approx in % of half-size
      spoke.style.left = "50%";
      spoke.style.top = "50%";
      spoke.style.width = len + "%";
      spoke.style.transform = "rotate(" + (ang * 180 / Math.PI) + "deg)";
      spoke.dataset.idx = i;
      ring.appendChild(spoke);

      var node = document.createElement("div");
      node.className = "org-node";
      node.style.left = x + "%";
      node.style.top = y + "%";
      node.dataset.idx = i;
      node.innerHTML = "<span>" + t(keys[i]) + "</span>";
      node.addEventListener("mouseenter", function () {
        var id = this.dataset.idx;
        ring.querySelectorAll('.org-spoke[data-idx="' + id + '"]').forEach(function (s) { s.classList.add("hot"); });
        this.classList.add("hot");
      });
      node.addEventListener("mouseleave", function () {
        var id = this.dataset.idx;
        ring.querySelectorAll('.org-spoke[data-idx="' + id + '"]').forEach(function (s) { s.classList.remove("hot"); });
        this.classList.remove("hot");
      });
      ring.appendChild(node);
    }
  }

  /* ---------- takt flow ---------- */
  var taktTimer = null;
  function buildTakt() {
    var grid = document.getElementById("taktGrid");
    if (!grid) return;
    if (taktTimer) { clearInterval(taktTimer); taktTimer = null; }
    grid.innerHTML = "";

    // Trades (fag) flow horizontally through time; locations (control areas) are the rows.
    var trades = (dict[cur]["takt.cars"]) || dict[DEFAULT]["takt.cars"];
    var locs = (dict[cur]["takt.locs"]) || dict[DEFAULT]["takt.locs"];
    var colors = ["#5a7681", "#33A6B1", "#78BE20", "#CDD751", "#196573"];
    var LOC = locs.length;                 // rows = control areas
    var TIME = LOC + trades.length - 1;    // columns = takts, enough to flush the trains

    function cell(cls, txt) {
      var d = document.createElement("div");
      d.className = cls;
      d.textContent = txt;
      return d;
    }

    // legend = trades (fag)
    var legend = document.getElementById("taktLegend");
    if (legend) {
      legend.innerHTML = "";
      trades.forEach(function (name, i) {
        var s = document.createElement("span");
        s.className = "tk-key";
        s.innerHTML = '<i style="background:' + colors[i % colors.length] + '"></i>' + name;
        legend.appendChild(s);
      });
    }

    // header row (time / takt across the top)
    var head = document.createElement("div");
    head.className = "tk-row tk-head";
    head.appendChild(cell("tk-rowlabel", ""));
    for (var t = 0; t < TIME; t++) head.appendChild(cell("tk-area", "T" + (t + 1)));
    grid.appendChild(head);

    // one row per control area (location); each column is a takt in time
    var cells = [];
    locs.forEach(function (name, L) {
      var row = document.createElement("div");
      row.className = "tk-row";
      row.appendChild(cell("tk-rowlabel tk-loc", name));
      var rowCells = [];
      for (var t2 = 0; t2 < TIME; t2++) {
        var c = document.createElement("div");
        c.className = "tk-cell";
        row.appendChild(c);
        rowCells.push(c);
      }
      cells.push(rowCells);
      grid.appendChild(row);
    });

    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // At takt t, location L is occupied by trade (t - L) — a diagonal train of trades.
    function render(step) {
      for (var L = 0; L < LOC; L++) {
        for (var t = 0; t < TIME; t++) {
          var tradeIdx = t - L;
          var hasTrade = tradeIdx >= 0 && tradeIdx < trades.length;
          var visible = t < step;
          var c = cells[L][t];
          if (hasTrade && visible) {
            c.style.setProperty("--c", colors[tradeIdx]);
            c.classList.add("on");
          } else {
            c.classList.remove("on");
          }
          c.classList.toggle("front", hasTrade && t === step - 1 && !reduce);
        }
      }
    }

    if (reduce) { render(TIME + 1); return; }

    var step = 0;
    render(step);
    taktTimer = setInterval(function () {
      step++;
      if (step > TIME + 2) step = 0;
      render(step);
    }, 850);
  }

  /* ---------- a-blokka takt illustration (static diagonal wavefront) ---------- */
  function buildAblokkaTakt() {
    var grid = document.getElementById("abTakt");
    if (!grid || grid.dataset.built) return;
    grid.dataset.built = "1";
    var colors = ["#335564", "#33A6B1", "#78BE20", "#196573", "#002A3A"];
    var ROWS = 5, COLS = 6;
    for (var r = 0; r < ROWS; r++) {
      var row = document.createElement("div");
      row.className = "tkr";
      for (var c = 0; c < COLS; c++) {
        var cell = document.createElement("div");
        cell.className = "tkc";
        var d = c - r;
        if (d >= 0 && d <= 2) { cell.style.background = colors[r]; cell.style.borderColor = colors[r]; }
        row.appendChild(cell);
      }
      grid.appendChild(row);
    }
  }

  /* ---------- fullscreen overlay for the interactive embed ---------- */
  function initFullscreen() {
    var frame = document.querySelector(".embed-frame");
    var openBtn = document.querySelector("[data-fs-open]");
    var closeBtn = document.querySelector("[data-fs-close]");
    if (!frame || !openBtn) return;

    var iframe = frame.querySelector("iframe");
    var baseSrc = iframe ? (iframe.getAttribute("data-src") || "gjennomforingsmodellen.html") : "";
    var parent = frame.parentNode;
    var placeholder = document.createComment("embed-frame-home");
    parent.insertBefore(placeholder, frame);

    function open(moduleId) {
      var id = moduleId || "A";
      var lang = cur || DEFAULT;
      if (iframe) iframe.setAttribute("src", baseSrc + "?lang=" + lang + "#" + id);
      document.body.appendChild(frame);   // portal out of any transformed ancestor
      frame.classList.add("fs");
      document.body.style.overflow = "hidden";
    }
    function close() {
      frame.classList.remove("fs");
      document.body.style.overflow = "";
      placeholder.parentNode.insertBefore(frame, placeholder); // restore in place
    }

    openBtn.addEventListener("click", function () { open(); });
    if (closeBtn) closeBtn.addEventListener("click", close);

    // each pillar opens its own module, like the wheel
    document.querySelectorAll("[data-fs-module]").forEach(function (card) {
      function go() { open(card.getAttribute("data-fs-module")); }
      card.addEventListener("click", go);
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); }
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && frame.classList.contains("fs")) close();
    });
  }

  /* ---------- scroll reveal ---------- */
  function reveal() {
    var els = document.querySelectorAll(".rv");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (e) { e.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------- scrollspy ---------- */
  function spy() {
    var links = Array.prototype.slice.call(document.querySelectorAll("nav .links a[data-sec]"));
    if (!links.length) return;
    var map = {};
    links.forEach(function (l) {
      var s = document.getElementById(l.getAttribute("data-sec"));
      if (s) map[l.getAttribute("data-sec")] = { link: l, el: s };
    });
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        var id = e.target.id;
        if (!map[id]) return;
        if (e.isIntersecting) {
          links.forEach(function (l) { l.classList.remove("active"); });
          map[id].link.classList.add("active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(map).forEach(function (k) { io.observe(map[k].el); });
  }

  /* ---------- init ---------- */
  function init() {
    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.addEventListener("click", function () { applyLang(b.getAttribute("data-lang")); });
    });

    var saved = DEFAULT;
    try { saved = localStorage.getItem("iwo-lang") || DEFAULT; } catch (e) {}
    applyLang(saved);

    buildAblokkaTakt();
    reveal();
    spy();
    initFullscreen();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
