# TODO

## Homepage content (next session)
- [ ] Review all project-timeline wording (DE + EN) end to end for accuracy and tone
- [ ] Rosenheim project (2025 – Heute): make Software Architect + Lead Developer role explicit
- [ ] Regenerate CV PDF + Word (DE + EN) so they match the current homepage content 1:1 (currently still the outdated 2023 files in `site/documents/`)
- [ ] Re-check "Frühere Stationen" entries once the main timeline wording is finalized

## Later: CAP project for ongoing maintenance
- [ ] Set up local CAP project (schema.cds with `Projects` entity, service, generated Fiori Elements admin UI)
- [ ] Two SQLite profiles: disposable `dev.sqlite` vs. persistent `prod.sqlite` (separate npm scripts, prod never touched by `cds deploy`)
- [ ] Backup script: timestamped copy of `prod.sqlite` before any schema change
- [ ] Export script: `prod.sqlite` → `site/data/projects.json` + regenerated CV PDF/Word from the same data
- [ ] Wire the homepage to read `data/projects.json` for the timeline instead of the hardcoded array in `content.js`, once the export exists

## Deployment
- [ ] Once content is finalized: `npm run deploy` (SFTP via `transfer.js`) to publish `site/` live
