// Shared rendering logic: builds HTML strings from SITE_CONTENT data.
// Used both in the browser (main.js, for the language toggle) and in
// Node (scripts/build-site.js, to bake the default language into the
// static HTML at build time so crawlers that don't execute JS still see
// the real content).

var RENDER_ICONS = {
  external: '<svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 5H5.5A1.5 1.5 0 0 0 4 6.5v8A1.5 1.5 0 0 0 5.5 16h8a1.5 1.5 0 0 0 1.5-1.5V12M12 4h4v4M16 4l-7 7"/></svg>',
  triathlon: '<svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="6" cy="15" r="2.2"/><circle cx="16" cy="15" r="2.2"/><path d="M6 15 9 8l3 4 2-3 2 6M9 8h3"/></svg>',
  mountain: '<svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M3 16 8 6l3 5 2-2.5L17 16z"/></svg>',
  globe: '<svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10c3-5 11-5 14 0M5 10a5 5 0 0 0 10 0M8 15h4"/></svg>',
  code: '<svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m7 6-4 4 4 4M13 6l4 4-4 4"/></svg>'
};
var RENDER_INTEREST_ICON_ORDER = ["triathlon", "mountain", "globe", "code"];

function renderEsc(str) {
  return String(str).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

function renderGet(obj, path) {
  return path.split(".").reduce(function (acc, key) { return acc && acc[key]; }, obj);
}

function renderCoreColumnsHtml(data) {
  return data.skills.coreColumns.map(function (col) {
    var items = col.items.map(function (item) {
      var since = item.since ? '<span class="core-item-since">' + renderEsc(item.since) + "</span>" : "";
      return '<div class="core-item"><span class="core-item-name">' + renderEsc(item.name) + "</span>" + since + "</div>";
    }).join("");
    return '<div class="core-column"><p class="core-column-label">' + renderEsc(col.label) + "</p>" + items + "</div>";
  }).join("");
}

function renderSkillGroupsHtml(data) {
  return data.skills.groups.map(function (group) {
    var chips = group.items.map(function (item) {
      return '<span class="chip">' + renderEsc(item) + "</span>";
    }).join("");
    return '<div class="skill-group"><span class="skill-group-label">' + renderEsc(group.label) +
      '</span><div class="chip-row">' + chips + "</div></div>";
  }).join("");
}

function renderTimelineCardHtml(item) {
  var dotClass = "timeline-dot" + (item.current ? " current" : "");
  var badgeClass = "timeline-badge" + (item.current ? " current" : "");
  var bullets = item.bullets.map(function (b) { return "<li>" + renderEsc(b) + "</li>"; }).join("");
  var tags = item.tags.map(function (t) { return '<span class="timeline-tag">' + renderEsc(t) + "</span>"; }).join("");
  return '<div class="timeline-item"><div class="' + dotClass + '"></div><div class="timeline-card">' +
    '<span class="' + badgeClass + '">' + renderEsc(item.period) + "</span>" +
    "<h3>" + renderEsc(item.title) + "</h3>" +
    '<p class="timeline-client">' + renderEsc(item.client) + "</p>" +
    '<p class="timeline-summary">' + renderEsc(item.summary) + "</p>" +
    '<ul class="timeline-bullets">' + bullets + "</ul>" +
    '<div class="timeline-tags">' + tags + "</div>" +
    "</div></div>";
}

function renderTimelineItemsHtml(data) {
  return data.timeline.items.map(renderTimelineCardHtml).join("");
}

function renderEarlierItemsHtml(data) {
  return data.timeline.earlierItems.map(function (item) {
    return "<li>" +
      '<div class="earlier-period">' + renderEsc(item.period) + "</div>" +
      '<div class="earlier-title">' + renderEsc(item.title) + "</div>" +
      '<p class="earlier-client">' + renderEsc(item.client) + "</p>" +
      '<p class="earlier-summary">' + renderEsc(item.summary) + "</p>" +
      "</li>";
  }).join("");
}

function renderCertListHtml(data) {
  return data.info.certifications.map(function (cert) {
    return '<a href="' + renderEsc(cert.url) + '" target="_blank" rel="noopener">' +
      RENDER_ICONS.external + " " + renderEsc(cert.name) + "</a>";
  }).join("");
}

function renderInterestListHtml(data) {
  return data.info.interests.map(function (interest, i) {
    var iconKey = RENDER_INTEREST_ICON_ORDER[i] || "code";
    return '<div class="interest-item">' + RENDER_ICONS[iconKey] + " " + renderEsc(interest) + "</div>";
  }).join("");
}

var RENDER = {
  esc: renderEsc,
  get: renderGet,
  coreColumnsHtml: renderCoreColumnsHtml,
  skillGroupsHtml: renderSkillGroupsHtml,
  timelineItemsHtml: renderTimelineItemsHtml,
  earlierItemsHtml: renderEarlierItemsHtml,
  certListHtml: renderCertListHtml,
  interestListHtml: renderInterestListHtml
};

if (typeof window !== "undefined") { window.RENDER = RENDER; }
if (typeof module !== "undefined" && module.exports) { module.exports = RENDER; }
