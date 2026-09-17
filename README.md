# onepager

Dominik Espitalier's professional homepage — SAP Fiori consultant CV/portfolio.

Static HTML/CSS/JS, bilingual (DE/EN). Source of content: `site/js/content.js`.

- `site/index.template.html` — the editable page source (empty content placeholders)
- `site/index.html` (German, `/`) and `site/en/index.html` (English, `/en/`) — generated from the template, one per language, each with its content fully baked in and linked via `hreflang` tags, so search engines and AI crawlers that don't execute JavaScript still see the real content in the right language, and Google can index both language versions separately. The client-side script still fully re-renders instantly on every language-toggle click (no page reload) — the toggle links are a progressive-enhancement fallback for non-JS visitors and crawlers.

Edit `content.js` or `index.template.html`, then run `npm run build` (or `npm start`, which builds first) to regenerate both `site/index.html` and `site/en/index.html`.

## Develop

```
npm run build
npm start
```

Serves `site/` locally (uses `npx serve`).

## CV documents

```
npm run generate-cv
```

Regenerates `site/documents/CV-Dominik-Espitalier-{DE,EN}.{pdf,docx}` from the same `content.js` data, using a locally installed Chrome/Edge (via `puppeteer-core`) for the PDF and the `docx` library for Word. Close the files in Word first if they're open.

## Deploy

```
npm run deploy
```

Builds the site, then uploads `site/` to the webspace via SFTP (`transfer.js`), using `.env` (`usr`, `pw`) for credentials — never commit `.env`.
