# onepager

Dominik Espitalier's professional homepage — SAP Fiori consultant CV/portfolio.

Plain static HTML/CSS/JS (no build step), bilingual (DE/EN), source of content in `site/js/content.js`.

## Develop

```
npm start
```

Serves `site/` locally (uses `npx serve`).

## Deploy

```
npm run deploy
```

Uploads `site/` to the webspace via SFTP (`transfer.js`), using `.env` (`usr`, `pw`) for credentials — never commit `.env`.
