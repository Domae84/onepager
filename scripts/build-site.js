// Bakes the content directly into static HTML at build time, once per
// language (site/index.html for DE at the root, site/en/index.html for
// EN), so crawlers that don't execute JavaScript still see the real page
// content in the right language — and so search engines can index the two
// language versions as separate, hreflang-linked pages. The client-side
// script (js/main.js) still fully re-renders on load and on every
// language-toggle click; this only fixes the *initial*, no-JS state.
const fs = require("fs");
const path = require("path");

const SITE_CONTENT = require("../site/js/content.js");
const RENDER = require("../site/js/render.js");

const TEMPLATE_PATH = path.join(__dirname, "..", "site", "index.template.html");
const SITE_DIR = path.join(__dirname, "..", "site");
const BASE_URL = "https://www.espitalier-solutions.de";

const LANGS = {
  de: { outPath: path.join(SITE_DIR, "index.html"), url: BASE_URL + "/", cvSuffix: "DE" },
  en: { outPath: path.join(SITE_DIR, "en", "index.html"), url: BASE_URL + "/en/", cvSuffix: "EN" }
};

const CONTAINERS = {
  "core-columns": (data) => RENDER.coreColumnsHtml(data),
  "skills-groups": (data) => RENDER.skillGroupsHtml(data),
  "timeline-items": (data) => RENDER.timelineItemsHtml(data),
  "earlier-items": (data) => RENDER.earlierItemsHtml(data),
  "cert-list": (data) => RENDER.certListHtml(data),
  "interest-list": (data) => RENDER.interestListHtml(data)
};

function buildSeoHead(lang, data) {
  const alternates = Object.keys(LANGS).map((l) =>
    `<link rel="alternate" hreflang="${l}" href="${LANGS[l].url}">`
  ).join("\n");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: data.hero.name,
    jobTitle: data.hero.title,
    url: LANGS[lang].url,
    image: BASE_URL + "/images/profile_new.jpg",
    email: "mailto:dominik@espitalier-solutions.de",
    telephone: "+49 151 20196267",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hardtwaldallee 4",
      postalCode: "61381",
      addressLocality: "Friedrichsdorf",
      addressCountry: "DE"
    },
    worksFor: { "@type": "Organization", name: "espitalier solutions" },
    knowsAbout: ["SAP Fiori", "SAPUI5", "OData", "SAP CAP", "SAP RAP", "SAP S/4HANA", "SAP BTP"]
  };

  return `<title>${RENDER.esc(data.meta.title)}</title>
<meta name="description" content="${RENDER.esc(data.meta.description)}">

<link rel="canonical" href="${LANGS[lang].url}">
${alternates}
<link rel="alternate" hreflang="x-default" href="${LANGS.de.url}">

<meta property="og:type" content="profile">
<meta property="og:title" content="${RENDER.esc(data.meta.title.split(" | ")[0])}">
<meta property="og:description" content="${RENDER.esc(data.meta.ogDescription)}">
<meta property="og:url" content="${LANGS[lang].url}">
<meta property="og:image" content="${BASE_URL}/images/profile_new.jpg">
<meta property="og:locale" content="${lang === "de" ? "de_DE" : "en_US"}">
<meta name="twitter:card" content="summary">

<script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
</script>`;
}

function buildPage(lang) {
  const data = SITE_CONTENT[lang];
  let html = fs.readFileSync(TEMPLATE_PATH, "utf8");

  html = html.replace("<!--SEO_HEAD-->", buildSeoHead(lang, data));
  html = html.replace('<html lang="de">', `<html lang="${lang}">`);

  html = html.replace(
    /(<(\w+)([^>]*?)\bdata-i18n="([\w.]+)"([^>]*?)>)(\s*)(<\/\2>)/g,
    (match, openTag, tag, before, path_, after, gap, closeTag) => {
      const value = RENDER.get(data, path_);
      return typeof value === "string" ? openTag + RENDER.esc(value) + closeTag : match;
    }
  );

  html = html.replace(
    /(<(\w+)([^>]*?)\bid="([\w-]+)"([^>]*?)>)(\s*)(<\/\2>)/g,
    (match, openTag, tag, before, id, after, gap, closeTag) => {
      const renderer = CONTAINERS[id];
      return renderer ? openTag + renderer(data) + closeTag : match;
    }
  );

  const suffix = LANGS[lang].cvSuffix;
  html = html
    .replace('id="cv-pdf-link" href="/documents/CV-Dominik-Espitalier-DE.pdf"',
      `id="cv-pdf-link" href="/documents/CV-Dominik-Espitalier-${suffix}.pdf"`)
    .replace('id="cv-docx-link" href="/documents/CV-Dominik-Espitalier-DE.docx"',
      `id="cv-docx-link" href="/documents/CV-Dominik-Espitalier-${suffix}.docx"`)
    .replace(`data-lang-btn="${lang}" href="${lang === "de" ? "/" : "/en/"}"`,
      `data-lang-btn="${lang}" href="${lang === "de" ? "/" : "/en/"}" class="active"`);

  fs.mkdirSync(path.dirname(LANGS[lang].outPath), { recursive: true });
  fs.writeFileSync(LANGS[lang].outPath, html);
  console.log("Wrote", LANGS[lang].outPath);
}

Object.keys(LANGS).forEach(buildPage);
