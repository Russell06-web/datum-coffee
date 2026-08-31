/*
 * Vanilla JS port of the Figma Make source's src/App.tsx.
 * State (lang / mobileMenuOpen / langMenuOpen) drives a single render()
 * that rebuilds #app's innerHTML, mirroring the original React component's re-render model.
 * Interaction is wired once via event delegation on #app so re-renders don't need re-binding.
 */
(function () {
  "use strict";

  var LANGS = window.DATUM_I18N.LANGS;
  var T = window.DATUM_I18N.T;

  var PRICES = ["3.50", "4.00", "4.50", "5.00", "5.50", "4.00"];
  var ORIGIN_IMGS = [
    "assets/images/origin-ethiopia.jpg",
    "assets/images/origin-colombia.jpg",
    "assets/images/origin-guatemala.jpg"
  ];
  var ELEVATION = ["1,800–2,200m", "1,600–2,000m", "1,500–1,700m"];
  var TICKER = ["Ethiopia", "Colombia", "Guatemala", "Kenya", "Yemen", "Panama", "Bolivia"];
  var FONT_CLASS = { en: "", zh: "lang-zh", ja: "lang-ja", ko: "lang-ko" };

  var state = {
    lang: "en",
    mobileMenuOpen: false,
    langMenuOpen: false
  };

  var revealObserver = null;

  var app = document.getElementById("app");

  function bodyFont(fc) {
    return fc || "font-sans";
  }
  function monoFont(fc) {
    return fc || "font-mono";
  }
  function pad2(n) {
    return String(n + 1).padStart(2, "0");
  }

  function render() {
    var lang = state.lang;
    var tx = T[lang];
    var fc = FONT_CLASS[lang];

    document.documentElement.lang = lang;
    app.className = fc;

    var navLinks = tx.nav
      .map(function (l, i) {
        return '<li><a class="nav-link" href="#section-' + i + '">' + l + "</a></li>";
      })
      .join("");

    var langSwitchDesktop = LANGS.map(function (l) {
      var active = l.code === lang ? " is-active" : "";
      return '<button type="button" class="lang-btn' + active + '" data-action="set-lang" data-lang="' + l.code + '">' + l.native + "</button>";
    }).join("");

    var currentNative = LANGS.filter(function (l) { return l.code === lang; })[0].native;

    var langDropdownMenu = state.langMenuOpen
      ? '<div class="lang-dropdown-menu">' +
        LANGS.map(function (l) {
          var active = l.code === lang ? " is-active" : "";
          return '<button type="button" class="lang-dropdown-item' + active + '" data-action="set-lang" data-lang="' + l.code + '">' + l.native + "</button>";
        }).join("") +
        "</div>"
      : "";

    var mobileMenu = state.mobileMenuOpen
      ? '<div class="mobile-menu">' +
        tx.nav
          .map(function (l, i) {
            return '<a class="mobile-menu-link" href="#section-' + i + '" data-action="close-mobile-menu">' + l + "</a>";
          })
          .join("") +
        "</div>"
      : "";

    var heroTitleLines = tx.heroTitle
      .filter(Boolean)
      .map(function (line) {
        return "<span>" + line + "</span>";
      })
      .join("");

    var heroStats = tx.stats
      .map(function (pair) {
        return (
          '<div class="stat"><div class="stat-value">' +
          pair[0] +
          '</div><div class="stat-label">' +
          pair[1] +
          "</div></div>"
        );
      })
      .join("");

    var tickerItems = [];
    for (var t = 0; t < 4; t++) {
      tickerItems = tickerItems.concat(TICKER);
    }
    var ticker = tickerItems
      .map(function (c) {
        return "<span>" + c + "</span>";
      })
      .join("");

    var manifestoItems = tx.manifestoItems
      .map(function (line, i) {
        return (
          '<div class="manifesto-item"><span class="manifesto-index">' +
          pad2(i) +
          '</span><span class="manifesto-text ' +
          bodyFont(fc) +
          '">' +
          line +
          "</span></div>"
        );
      })
      .join("");

    var originStories = tx.origins
      .map(function (o, i) {
        var reversed = i % 2 === 1 ? " is-reversed" : "";
        return (
          '<div class="story-panel origin-story' +
          reversed +
          '" data-reveal>' +
          '<div class="story-media"><img src="' +
          ORIGIN_IMGS[i] +
          '" alt="' +
          o.region +
          ' coffee beans" loading="lazy" /><div class="story-index">' +
          pad2(i) +
          "</div></div>" +
          '<div class="story-content">' +
          '<p class="story-eyebrow ' +
          monoFont(fc) +
          '">' +
          o.sub +
          '</p><h3 class="story-title ' +
          monoFont(fc) +
          '">' +
          o.region +
          '</h3><p class="story-notes ' +
          bodyFont(fc) +
          '">' +
          o.notes +
          '</p><div class="story-meta">' +
          '<div class="story-meta-item"><div class="story-meta-label">' +
          tx.originsElevation +
          '</div><div class="story-meta-value">' +
          ELEVATION[i] +
          "</div></div>" +
          '<div class="story-meta-item"><div class="story-meta-label">' +
          tx.originsProcess +
          '</div><div class="story-meta-value ' +
          monoFont(fc) +
          '">' +
          o.process +
          "</div></div>" +
          "</div>" +
          '<a class="btn-pill" href="#section-1">' +
          tx.heroCtaSub +
          "</a>" +
          "</div>" +
          "</div>"
        );
      })
      .join("");

    var processTitleLines = tx.processTitle
      .map(function (line) {
        return "<span>" + line + "</span>";
      })
      .join("");

    var processSteps = tx.processSteps
      .map(function (step, i) {
        return (
          '<div class="process-step"><div class="process-step-head"><span class="process-step-index">' +
          pad2(i) +
          '</span><span class="process-step-title ' +
          monoFont(fc) +
          '">' +
          step[0] +
          '</span></div><p class="process-step-desc ' +
          bodyFont(fc) +
          '">' +
          step[1] +
          "</p></div>"
        );
      })
      .join("");

    var menuRows = tx.menu
      .map(function (item, i) {
        return (
          '<div class="menu-row"><span class="menu-row-index">' +
          pad2(i) +
          '</span><div class="menu-row-body"><span class="menu-row-name ' +
          monoFont(fc) +
          '">' +
          item.name +
          '</span><span class="menu-row-desc ' +
          bodyFont(fc) +
          '">' +
          item.desc +
          '</span></div><span class="menu-row-price">$' +
          PRICES[i] +
          "</span></div>"
        );
      })
      .join("");

    var journalTitleLines = tx.journalTitle
      .map(function (line) {
        return "<span>" + line + "</span>";
      })
      .join("");

    var footerNavLinks = tx.nav
      .map(function (l, i) {
        return '<a class="' + monoFont(fc) + '" href="#section-' + i + '">' + l + "</a>";
      })
      .join("");

    var footerContactLinks = ["hello@datum.co", "Instagram", "Substack"]
      .map(function (l) {
        return '<a href="#">' + l + "</a>";
      })
      .join("");

    app.innerHTML =
      '<nav class="navbar">' +
      '<div class="navbar-inner">' +
      '<span class="nav-logo">DATUM</span>' +
      '<ul class="nav-links">' +
      navLinks +
      "</ul>" +
      '<div class="nav-right">' +
      '<div class="lang-switch">' +
      langSwitchDesktop +
      "</div>" +
      '<div class="lang-dropdown">' +
      '<button type="button" class="lang-dropdown-btn" data-action="toggle-lang-menu">' +
      currentNative +
      ' <span class="lang-caret">▾</span></button>' +
      langDropdownMenu +
      "</div>" +
      '<a class="order-btn" href="#section-2">' +
      tx.orderBtn +
      "</a>" +
      '<button type="button" class="hamburger-btn" data-action="toggle-mobile-menu">' +
      (state.mobileMenuOpen ? "✕" : "≡") +
      "</button>" +
      "</div>" +
      "</div>" +
      mobileMenu +
      "</nav>" +
      '<section class="hero">' +
      '<div class="hero-grid">' +
      '<div class="hero-content">' +
      '<p class="hero-tagline">' +
      tx.tagline +
      "</p>" +
      '<h1 class="hero-title">' +
      heroTitleLines +
      "</h1>" +
      '<p class="hero-desc ' +
      bodyFont(fc) +
      '">' +
      tx.heroDesc +
      "</p>" +
      '<div class="hero-actions">' +
      '<a class="btn-primary" href="#section-0">' +
      tx.heroCta +
      "</a>" +
      '<a class="btn-link" href="#section-1">' +
      tx.heroCtaSub +
      "</a>" +
      "</div>" +
      "</div>" +
      '<div class="hero-media">' +
      '<img src="assets/images/hero.jpg" alt="Black coffee in a clear glass" />' +
      '<div class="hero-stats">' +
      heroStats +
      "</div>" +
      "</div>" +
      "</div>" +
      '<div class="ticker-wrap"><div class="ticker">' +
      ticker +
      "</div></div>" +
      "</section>" +
      '<section class="manifesto" data-reveal>' +
      '<div class="manifesto-left">' +
      '<p class="eyebrow">' +
      tx.secManifesto +
      "</p>" +
      '<h2 class="manifesto-title">' +
      tx.manifestoTitle +
      "</h2>" +
      "</div>" +
      '<div class="manifesto-right">' +
      manifestoItems +
      "</div>" +
      "</section>" +
      '<section id="section-0" class="origins-section">' +
      '<div class="origins-header" data-reveal>' +
      '<div><p class="eyebrow">' +
      tx.secOrigins +
      '</p><h2 class="section-title">' +
      tx.originsTitle +
      "</h2></div>" +
      '<p class="origins-desc ' +
      bodyFont(fc) +
      '">' +
      tx.originsDesc +
      "</p>" +
      "</div>" +
      originStories +
      "</section>" +
      '<section id="section-1" class="process-section">' +
      '<div class="story-panel process-story is-reversed" data-reveal>' +
      '<div class="story-media"><img src="assets/images/process.jpg" alt="Coffee roasting machine" loading="lazy" /></div>' +
      '<div class="story-content">' +
      '<p class="eyebrow">' +
      tx.secProcess +
      '</p><h2 class="story-title ' +
      monoFont(fc) +
      '">' +
      processTitleLines +
      "</h2>" +
      '<div class="process-steps">' +
      processSteps +
      "</div>" +
      '<a class="btn-pill" href="#section-2">' +
      tx.processCta +
      "</a>" +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section id="section-2" class="menu-section">' +
      '<div class="menu-header" data-reveal>' +
      '<p class="eyebrow">' +
      tx.secMenu +
      '</p><h2 class="section-title">' +
      tx.menuTitle +
      "</h2>" +
      "</div>" +
      '<div class="menu-list">' +
      menuRows +
      "</div>" +
      "</section>" +
      '<section id="section-3" class="journal-section">' +
      '<div class="story-panel journal-story" data-reveal>' +
      '<div class="story-media"><img src="assets/images/journal.jpg" alt="Barista pouring coffee" loading="lazy" /></div>' +
      '<div class="story-content">' +
      '<p class="eyebrow">' +
      tx.secJournal +
      '</p><h2 class="story-title ' +
      monoFont(fc) +
      '">' +
      journalTitleLines +
      "</h2>" +
      '<p class="story-notes ' +
      bodyFont(fc) +
      '">' +
      tx.journalDesc +
      "</p>" +
      '<a class="btn-pill" href="#section-3">' +
      tx.journalCta +
      "</a>" +
      "</div>" +
      "</div>" +
      "</section>" +
      '<footer class="footer">' +
      '<div class="footer-brand">' +
      '<p class="footer-brand-name">DATUM</p>' +
      '<p class="footer-sub ' +
      bodyFont(fc) +
      '">' +
      tx.footerSub +
      "</p>" +
      '<p class="footer-cities ' +
      bodyFont(fc) +
      '">' +
      tx.footerCities +
      "</p>" +
      "</div>" +
      '<div class="footer-col">' +
      '<p class="footer-col-title">' +
      tx.footerNav +
      "</p>" +
      footerNavLinks +
      "</div>" +
      '<div class="footer-col">' +
      '<p class="footer-col-title">' +
      tx.footerContact +
      "</p>" +
      footerContactLinks +
      "</div>" +
      "</footer>" +
      '<div class="bottom-bar">' +
      "<span>" +
      tx.copyright +
      "</span><span>All Rights Reserved</span>" +
      "</div>";

    initScrollReveal();
  }

  function initScrollReveal() {
    if (revealObserver) revealObserver.disconnect();
    var targets = app.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window) || !targets.length) {
      targets.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }
    revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    targets.forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  app.addEventListener("click", function (e) {
    var actionEl = e.target.closest("[data-action]");
    if (!actionEl) return;
    var action = actionEl.getAttribute("data-action");

    if (action === "set-lang") {
      state.lang = actionEl.getAttribute("data-lang");
      state.langMenuOpen = false;
      render();
    } else if (action === "toggle-mobile-menu") {
      state.mobileMenuOpen = !state.mobileMenuOpen;
      render();
    } else if (action === "close-mobile-menu") {
      state.mobileMenuOpen = false;
      render();
    } else if (action === "toggle-lang-menu") {
      state.langMenuOpen = !state.langMenuOpen;
      render();
    }
  });

  render();
})();
