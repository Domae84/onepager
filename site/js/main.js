(function () {
  "use strict";

  var STORAGE_KEY = "site-lang";
  var content = window.SITE_CONTENT;

  function get(obj, path) {
    return path.split(".").reduce(function (acc, key) { return acc && acc[key]; }, obj);
  }

  function renderText(lang) {
    var data = content[lang];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = get(data, el.getAttribute("data-i18n"));
      if (typeof value === "string") el.textContent = value;
    });
  }

  function renderCoreSkills(lang) {
    var data = content[lang];
    var wrap = document.getElementById("core-columns");
    wrap.innerHTML = "";
    data.skills.coreColumns.forEach(function (col) {
      var colEl = document.createElement("div");
      colEl.className = "core-column";

      var label = document.createElement("p");
      label.className = "core-column-label";
      label.textContent = col.label;
      colEl.appendChild(label);

      col.items.forEach(function (item) {
        var row = document.createElement("div");
        row.className = "core-item";

        var name = document.createElement("span");
        name.className = "core-item-name";
        name.textContent = item.name;

        row.appendChild(name);
        if (item.since) {
          var since = document.createElement("span");
          since.className = "core-item-since";
          since.textContent = item.since;
          row.appendChild(since);
        }
        colEl.appendChild(row);
      });

      wrap.appendChild(colEl);
    });
  }

  function renderSkills(lang) {
    var data = content[lang];
    var wrap = document.getElementById("skills-groups");
    wrap.innerHTML = "";
    data.skills.groups.forEach(function (group) {
      var row = document.createElement("div");
      row.className = "skill-group";

      var label = document.createElement("span");
      label.className = "skill-group-label";
      label.textContent = group.label;

      var chips = document.createElement("div");
      chips.className = "chip-row";
      group.items.forEach(function (item) {
        var chip = document.createElement("span");
        chip.className = "chip";
        chip.textContent = item;
        chips.appendChild(chip);
      });

      row.appendChild(label);
      row.appendChild(chips);
      wrap.appendChild(row);
    });
  }

  function timelineCard(item) {
    var el = document.createElement("div");
    el.className = "timeline-item";

    var dot = document.createElement("div");
    dot.className = "timeline-dot" + (item.current ? " current" : "");
    el.appendChild(dot);

    var card = document.createElement("div");
    card.className = "timeline-card";

    var badge = document.createElement("span");
    badge.className = "timeline-badge" + (item.current ? " current" : "");
    badge.textContent = item.period;
    card.appendChild(badge);

    var h3 = document.createElement("h3");
    h3.textContent = item.title;
    card.appendChild(h3);

    var client = document.createElement("p");
    client.className = "timeline-client";
    client.textContent = item.client;
    card.appendChild(client);

    var summary = document.createElement("p");
    summary.className = "timeline-summary";
    summary.textContent = item.summary;
    card.appendChild(summary);

    var bullets = document.createElement("ul");
    bullets.className = "timeline-bullets";
    item.bullets.forEach(function (b) {
      var li = document.createElement("li");
      li.textContent = b;
      bullets.appendChild(li);
    });
    card.appendChild(bullets);

    var tags = document.createElement("div");
    tags.className = "timeline-tags";
    item.tags.forEach(function (t) {
      var tag = document.createElement("span");
      tag.className = "timeline-tag";
      tag.textContent = t;
      tags.appendChild(tag);
    });
    card.appendChild(tags);

    el.appendChild(card);
    return el;
  }

  function renderTimeline(lang) {
    var data = content[lang];
    var wrap = document.getElementById("timeline-items");
    wrap.innerHTML = "";
    data.timeline.items.forEach(function (item) { wrap.appendChild(timelineCard(item)); });

    var earlierWrap = document.getElementById("earlier-items");
    earlierWrap.innerHTML = "";
    data.timeline.earlierItems.forEach(function (item) {
      var li = document.createElement("li");

      var period = document.createElement("div");
      period.className = "earlier-period";
      period.textContent = item.period;

      var title = document.createElement("div");
      title.className = "earlier-title";
      title.textContent = item.title;

      var client = document.createElement("p");
      client.className = "earlier-client";
      client.textContent = item.client;

      var summary = document.createElement("p");
      summary.className = "earlier-summary";
      summary.textContent = item.summary;

      li.appendChild(period);
      li.appendChild(title);
      li.appendChild(client);
      li.appendChild(summary);
      earlierWrap.appendChild(li);
    });

    var toggle = document.getElementById("earlier-toggle");
    var label = document.getElementById("earlier-toggle-label");
    var isOpen = toggle.getAttribute("aria-expanded") === "true";
    label.textContent = isOpen ? data.timeline.earlierLabelHide : data.timeline.earlierLabel;
  }

  var ICONS = {
    external: '<svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 5H5.5A1.5 1.5 0 0 0 4 6.5v8A1.5 1.5 0 0 0 5.5 16h8a1.5 1.5 0 0 0 1.5-1.5V12M12 4h4v4M16 4l-7 7"/></svg>',
    triathlon: '<svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="6" cy="15" r="2.2"/><circle cx="16" cy="15" r="2.2"/><path d="M6 15 9 8l3 4 2-3 2 6M9 8h3"/></svg>',
    mountain: '<svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M3 16 8 6l3 5 2-2.5L17 16z"/></svg>',
    globe: '<svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10c3-5 11-5 14 0M5 10a5 5 0 0 0 10 0M8 15h4"/></svg>',
    code: '<svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m7 6-4 4 4 4M13 6l4 4-4 4"/></svg>'
  };
  var INTEREST_ICON_ORDER = ["triathlon", "mountain", "globe", "code"];

  function renderInfo(lang) {
    var data = content[lang];

    var certWrap = document.getElementById("cert-list");
    certWrap.innerHTML = "";
    data.info.certifications.forEach(function (cert) {
      var a = document.createElement("a");
      a.href = cert.url;
      a.target = "_blank";
      a.rel = "noopener";
      a.innerHTML = ICONS.external + " ";
      a.appendChild(document.createTextNode(cert.name));
      certWrap.appendChild(a);
    });

    var interestWrap = document.getElementById("interest-list");
    interestWrap.innerHTML = "";
    data.info.interests.forEach(function (interest, i) {
      var div = document.createElement("div");
      div.className = "interest-item";
      var iconKey = INTEREST_ICON_ORDER[i] || "code";
      div.innerHTML = ICONS[iconKey] + " ";
      div.appendChild(document.createTextNode(interest));
      interestWrap.appendChild(div);
    });
  }

  function updateCvLinks(lang) {
    var suffix = lang === "en" ? "EN" : "DE";
    document.getElementById("cv-pdf-link").href = "documents/CV-Dominik-Espitalier-" + suffix + ".pdf";
    document.getElementById("cv-docx-link").href = "documents/CV-Dominik-Espitalier-" + suffix + ".docx";
  }

  function updateLangButtons(lang) {
    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === lang);
    });
  }

  function setLang(lang) {
    if (lang !== "de" && lang !== "en") lang = "de";
    document.documentElement.setAttribute("lang", lang);
    renderText(lang);
    renderCoreSkills(lang);
    renderSkills(lang);
    renderTimeline(lang);
    renderInfo(lang);
    updateCvLinks(lang);
    updateLangButtons(lang);
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function initialLang() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (saved === "de" || saved === "en") return saved;
    return (navigator.language || "").toLowerCase().indexOf("de") === 0 ? "de" : "en";
  }

  document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
    btn.addEventListener("click", function () { setLang(btn.getAttribute("data-lang-btn")); });
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

  setLang(initialLang());
})();
