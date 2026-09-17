// Structural consistency check for site/js/content.js — catches copy/paste
// mistakes between the DE and EN content trees (missing fields, mismatched
// counts) before they ship. Not a style checker — just structure.
const SITE_CONTENT = require("../site/js/content.js");

let errors = 0;
function fail(msg) { console.error("FAIL:", msg); errors++; }

const de = SITE_CONTENT.de;
const en = SITE_CONTENT.en;

// Same number of timeline items, earlier items, core columns, skill groups
if (de.timeline.items.length !== en.timeline.items.length) {
  fail(`timeline.items count differs: de=${de.timeline.items.length} en=${en.timeline.items.length}`);
}
if (de.timeline.earlierItems.length !== en.timeline.earlierItems.length) {
  fail(`timeline.earlierItems count differs: de=${de.timeline.earlierItems.length} en=${en.timeline.earlierItems.length}`);
}
if (de.skills.coreColumns.length !== en.skills.coreColumns.length) {
  fail(`skills.coreColumns count differs`);
}
if (de.skills.groups.length !== en.skills.groups.length) {
  fail(`skills.groups count differs`);
}
if (de.info.certifications.length !== en.info.certifications.length) {
  fail(`info.certifications count differs`);
}
if (de.info.interests.length !== en.info.interests.length) {
  fail(`info.interests count differs`);
}

// Every timeline item (both langs) has all required fields, non-empty
const REQUIRED_JOB_FIELDS = ["period", "title", "client", "summary", "bullets", "tags"];
["de", "en"].forEach((lang) => {
  SITE_CONTENT[lang].timeline.items.forEach((item, i) => {
    REQUIRED_JOB_FIELDS.forEach((field) => {
      const value = item[field];
      const empty = value == null || value === "" || (Array.isArray(value) && value.length === 0);
      if (empty) fail(`${lang}.timeline.items[${i}] ("${item.title || "?"}") missing/empty "${field}"`);
    });
  });
});

// Core columns: matching labels + item counts, in the same order, and every
// core item has a non-empty name (since is optional, e.g. SQL has none)
de.skills.coreColumns.forEach((col, i) => {
  const enCol = en.skills.coreColumns[i];
  if (!enCol) return;
  if (col.items.length !== enCol.items.length) {
    fail(`skills.coreColumns[${i}] ("${col.label}") item count differs: de=${col.items.length} en=${enCol.items.length}`);
  }
  col.items.forEach((item) => {
    if (!item.name) fail(`skills.coreColumns[${i}] has an item with no name`);
  });
});

if (errors === 0) {
  console.log("OK: content.js is structurally consistent (" + de.timeline.items.length + " timeline items, " +
    de.timeline.earlierItems.length + " earlier items).");
} else {
  console.error(`\n${errors} problem(s) found.`);
  process.exit(1);
}
