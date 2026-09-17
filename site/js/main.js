(function () {
  "use strict";

  var STORAGE_KEY = "site-lang";
  var content = window.SITE_CONTENT;
  var R = window.RENDER;

  function renderText(lang) {
    var data = content[lang];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = R.get(data, el.getAttribute("data-i18n"));
      if (typeof value === "string") el.textContent = value;
    });
  }

  function setLang(lang) {
    if (lang !== "de" && lang !== "en") lang = "de";
    var data = content[lang];
    document.documentElement.setAttribute("lang", lang);

    renderText(lang);
    document.getElementById("core-columns").innerHTML = R.coreColumnsHtml(data);
    document.getElementById("skills-groups").innerHTML = R.skillGroupsHtml(data);
    document.getElementById("timeline-items").innerHTML = R.timelineItemsHtml(data);
    document.getElementById("earlier-items").innerHTML = R.earlierItemsHtml(data);
    document.getElementById("cert-list").innerHTML = R.certListHtml(data);
    document.getElementById("interest-list").innerHTML = R.interestListHtml(data);

    var toggle = document.getElementById("earlier-toggle");
    var isOpen = toggle.getAttribute("aria-expanded") === "true";
    document.getElementById("earlier-toggle-label").textContent = isOpen
      ? data.timeline.earlierLabelHide
      : data.timeline.earlierLabel;

    var suffix = lang === "en" ? "EN" : "DE";
    document.getElementById("cv-pdf-link").href = "documents/CV-Dominik-Espitalier-" + suffix + ".pdf";
    document.getElementById("cv-docx-link").href = "documents/CV-Dominik-Espitalier-" + suffix + ".docx";

    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === lang);
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function initialLang() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (saved === "de" || saved === "en") return saved;
    return (navigator.language || "").toLowerCase().indexOf("de") === 0 ? "de" : "en";
  }

  document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      setLang(btn.getAttribute("data-lang-btn"));
    });
  });

  var earlierToggle = document.getElementById("earlier-toggle");
  earlierToggle.addEventListener("click", function () {
    var isOpen = earlierToggle.getAttribute("aria-expanded") === "true";
    var next = !isOpen;
    earlierToggle.setAttribute("aria-expanded", String(next));
    earlierToggle.classList.toggle("open", next);
    document.getElementById("earlier-items").hidden = !next;
    var lang = document.documentElement.getAttribute("lang") || "de";
    document.getElementById("earlier-toggle-label").textContent = next
      ? content[lang].timeline.earlierLabelHide
      : content[lang].timeline.earlierLabel;
  });

  var navToggle = document.getElementById("nav-toggle");
  var navLinks = document.getElementById("nav-links");
  navToggle.addEventListener("click", function () {
    var isOpen = navLinks.classList.contains("open");
    navLinks.classList.toggle("open", !isOpen);
    navToggle.setAttribute("aria-expanded", String(!isOpen));
  });
  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  setLang(initialLang());
})();
