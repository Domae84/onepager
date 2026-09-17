const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer-core");
const { findBrowser } = require("./find-browser");
const { buildCvHtml, buildCvFooterHtml } = require("./cv-html");
const { buildCvDocx, Packer } = require("./cv-docx");

const SITE_CONTENT = require("../site/js/content.js");
const OUT_DIR = path.join(__dirname, "..", "site", "documents");
const LANG_SUFFIX = { de: "DE", en: "EN" };

async function generatePdf(browser, lang, data) {
  const html = buildCvHtml(lang, data);
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "networkidle0" });
  const outPath = path.join(OUT_DIR, `CV-Dominik-Espitalier-${LANG_SUFFIX[lang]}.pdf`);
  await page.pdf({
    path: outPath,
    format: "A4",
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: "<span></span>",
    footerTemplate: buildCvFooterHtml(data.contact),
    margin: { top: "16mm", bottom: "14mm", left: "18mm", right: "18mm" }
  });
  await page.close();
  console.log("Wrote", outPath);
}

async function generateDocx(lang, data) {
  const doc = buildCvDocx(lang, data);
  const buffer = await Packer.toBuffer(doc);
  const outPath = path.join(OUT_DIR, `CV-Dominik-Espitalier-${LANG_SUFFIX[lang]}.docx`);
  fs.writeFileSync(outPath, buffer);
  console.log("Wrote", outPath);
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const browser = await puppeteer.launch({ executablePath: findBrowser(), headless: true });
  try {
    for (const lang of Object.keys(LANG_SUFFIX)) {
      await generatePdf(browser, lang, SITE_CONTENT[lang]);
      await generateDocx(lang, SITE_CONTENT[lang]);
    }
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
