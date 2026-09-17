function esc(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

function buildCvHtml(lang, data) {
  const { hero, skills, timeline, info, contact } = data;

  const coreColumnsHtml = skills.coreColumns.map((col) => `
    <div class="core-col">
      <div class="core-col-label">${esc(col.label)}</div>
      ${col.items.map((item) => `
        <div class="core-item">
          <span>${esc(item.name)}</span>
          ${item.since ? `<span class="since">${esc(item.since)}</span>` : ""}
        </div>
      `).join("")}
    </div>
  `).join("");

  const moreGroupsHtml = skills.groups.map((g) => `
    <div class="more-group">
      <div class="more-label">${esc(g.label)}</div>
      <div class="more-chips">${g.items.map((i) => `<span class="chip">${esc(i)}</span>`).join("")}</div>
    </div>
  `).join("");

  const timelineHtml = timeline.items.map((item) => `
    <div class="job">
      <span class="job-badge${item.current ? " current" : ""}">${esc(item.period)}</span>
      <div class="job-title">${esc(item.title)}</div>
      <div class="job-client">${esc(item.client)}</div>
      <div class="job-summary">${esc(item.summary)}</div>
      <ul class="job-bullets">
        ${item.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}
      </ul>
      <div class="job-tags">${item.tags.map((t) => `<span class="chip chip-tag">${esc(t)}</span>`).join("")}</div>
    </div>
  `).join("");

  const earlierHtml = timeline.earlierItems.map((item) => `
    <div class="earlier-job">
      <span class="earlier-period">${esc(item.period)}</span>
      <span class="earlier-title">${esc(item.title)}</span> — <span class="earlier-client">${esc(item.client)}</span>
      <div class="earlier-summary">${esc(item.summary)}</div>
    </div>
  `).join("");

  const certsHtml = info.certifications.map((c) => `
    <li><a href="${esc(c.url)}">${esc(c.name)}</a></li>
  `).join("");

  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<title>${esc(hero.name)} — CV</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@600;700;800&family=Source+Sans+3:wght@400;500;600;700&display=swap">
<style>
  @page { size: A4; }
  * { box-sizing: border-box; }
  body { margin: 0; font-family: 'Source Sans 3', Arial, sans-serif; color: #16233a; font-size: 10.3pt; line-height: 1.45; }
  h1, h2, h3, .job-title, .core-col-label { font-family: 'Manrope', Arial, sans-serif; }
  a { color: #0d9488; text-decoration: none; }

  .header { border-bottom: 2px solid #0d9488; padding-bottom: 10pt; margin-bottom: 14pt; }
  .header h1 { font-size: 24pt; font-weight: 800; margin: 0 0 2pt; color: #16233a; }
  .header .title { font-size: 12.5pt; font-weight: 700; color: #0d9488; margin: 0 0 9pt; }
  .header .intro { font-size: 9.5pt; color: #4a5568; margin: 0; max-width: 480pt; }

  h2.section { font-size: 12pt; font-weight: 800; color: #0d9488; text-transform: uppercase; letter-spacing: 0.03em; margin: 16pt 0 8pt; border-bottom: 0.75pt solid #d6d3d1; padding-bottom: 3pt; }
  h2.section:first-of-type { margin-top: 0; }

  .core-columns { display: flex; gap: 14pt; margin-bottom: 6pt; }
  .core-col { flex: 1; background: #f0f9f8; border-radius: 4pt; padding: 8pt 10pt; }
  .core-col-label { font-size: 9.5pt; font-weight: 700; color: #0f766e; margin-bottom: 5pt; }
  .core-item { display: flex; justify-content: space-between; font-size: 9pt; padding: 2.5pt 0; border-top: 0.5pt solid rgba(13,148,136,0.18); }
  .core-item:first-of-type { border-top: none; padding-top: 0; }
  .core-item .since { color: #0f766e; white-space: nowrap; padding-left: 6pt; }

  .more-group { margin-bottom: 8pt; }
  .more-label { font-size: 8.6pt; font-weight: 700; color: #16233a; margin-bottom: 3pt; }
  .more-chips { display: flex; flex-wrap: wrap; gap: 3pt; }
  .chip { display: inline-block; background: #f5f5f4; color: #3f4c5e; padding: 2pt 7pt; border-radius: 8pt; font-size: 7.6pt; font-weight: 600; }
  .chip-tag { background: #f0f9f8; color: #0f766e; }

  .job { margin-bottom: 12pt; page-break-inside: avoid; }
  .job-badge { display: inline-block; padding: 2pt 8pt; border-radius: 8pt; background: #f1f5f9; color: #475569; font-size: 8pt; font-weight: 700; margin-bottom: 4pt; }
  .job-badge.current { background: #e6f6f4; color: #0f766e; }
  .job-title { font-size: 10.5pt; font-weight: 700; color: #16233a; }
  .job-client { font-size: 9pt; font-weight: 600; color: #5b6b82; margin: 1pt 0 4pt; }
  .job-summary { font-size: 9.3pt; color: #4a5568; margin: 0 0 4pt; }
  .job-bullets { margin: 0 0 5pt; padding-left: 14pt; }
  .job-bullets li { font-size: 9.2pt; color: #4a5568; margin-bottom: 1.5pt; }
  .job-tags { display: flex; flex-wrap: wrap; gap: 3pt; }

  .earlier-heading { font-size: 10.5pt; font-weight: 700; color: #16233a; margin: 18pt 0 8pt; padding-top: 10pt; border-top: 0.75pt solid #d6d3d1; }
  .earlier-job { font-size: 8.8pt; color: #4a5568; margin-bottom: 6pt; }
  .earlier-period { font-weight: 700; color: #5b6b82; }
  .earlier-title { font-weight: 700; color: #16233a; }
  .earlier-summary { margin-top: 1pt; }

  .info-cols { display: flex; gap: 20pt; }
  .info-cols > div { flex: 1; }
  .info-cols h3 { font-size: 9.5pt; font-weight: 700; margin: 0 0 5pt; }
  .info-cols p { font-size: 9pt; margin: 0 0 2pt; color: #4a5568; }
  .info-cols ul { margin: 0; padding-left: 14pt; font-size: 9pt; color: #4a5568; }
  .info-cols li { margin-bottom: 2pt; }
</style>
</head>
<body>

  <div class="header">
    <h1>${esc(hero.name)}</h1>
    <p class="title">${esc(hero.title)}</p>
    <p class="intro">${esc(hero.intro)}</p>
  </div>

  <h2 class="section">${esc(skills.coreTitle)}</h2>
  <div class="core-columns">${coreColumnsHtml}</div>
  ${moreGroupsHtml}

  <h2 class="section">${esc(timeline.title)}</h2>
  ${timelineHtml}
  <h3 class="earlier-heading">${esc(timeline.earlierHeading)}</h3>
  ${earlierHtml}

  <h2 class="section">${esc(info.educationTitle)} &amp; ${esc(info.certTitle)}</h2>
  <div class="info-cols">
    <div>
      <h3>${esc(info.educationTitle)}</h3>
      <p><strong>${esc(info.educationName)}</strong></p>
      <p>${esc(info.educationDegree)}</p>
      <h3 style="margin-top:10pt">${esc(info.interestsTitle)}</h3>
      <p>${info.interests.map(esc).join(", ")}</p>
    </div>
    <div>
      <h3>${esc(info.certTitle)}</h3>
      <ul>${certsHtml}</ul>
    </div>
  </div>

</body>
</html>`;
}

function buildCvFooterHtml(contact) {
  const style = "font-family: Arial, sans-serif; font-size: 7.5pt; color: #5b6b82; width: 100%; " +
    "display: flex; justify-content: space-between; padding: 0 18mm; box-sizing: border-box;";
  return `
    <div style="${style}">
      <span>${esc(contact.addressLine)} &nbsp;·&nbsp; +49 151 20196267 &nbsp;·&nbsp; dominik@espitalier-solutions.de &nbsp;·&nbsp; ${esc(contact.site)}</span>
      <span><span class="pageNumber"></span>/<span class="totalPages"></span></span>
    </div>
  `;
}

module.exports = { buildCvHtml, buildCvFooterHtml };
