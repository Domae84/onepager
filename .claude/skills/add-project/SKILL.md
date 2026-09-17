---
name: add-project
description: Use when Dominik asks to add, update, or remove a project/role on his homepage (onepager) or wants the CV files refreshed. Covers the full workflow — content, translation, style rules, and rebuild steps — for this repo specifically.
---

# Adding or updating a project

Dominik does not edit this repo himself — he describes the change in conversation and expects it applied end-to-end, in both languages, following the conventions below without having to restate them.

## Where things live

- `site/js/content.js` — the single source of truth. A plain JS object (`window.SITE_CONTENT` / Node `module.exports`) with a `de` and `en` tree, each shaped identically. **Every change goes here — nothing else.**
- `site/index.template.html` — page structure only (empty placeholders). Only touch this for structural/design changes, not content.
- `site/index.html` (`/`) and `site/en/index.html` (`/en/`) — generated output, do not hand-edit.
- `site/documents/CV-Dominik-Espitalier-{DE,EN}.{pdf,docx}` — generated output, do not hand-edit.

## Workflow for a new/updated timeline entry

1. **Gather the facts in German first** (that's how Dominik thinks about his own work): period, client, role, what was built, key bullets, tech stack. Ask follow-up questions for anything vague — he will give rambling, stream-of-consciousness descriptions; extract the concrete facts and reflect a drafted version back for confirmation before writing code. Don't guess at facts he hasn't given (dates, tool names, client names) — ask.
2. **Draft the DE entry**, show it, get an explicit okay before editing files. He iterates in small rounds (wording, tag list, ordering) — expect several follow-up tweaks, not one-shot approval.
3. **Determine chronological position**: entries in `timeline.items` are sorted by **start year descending** (not end year, not "current" status). A still-running engagement does not automatically go first — only its start date decides position. Cross-check against neighboring entries when inserting.
4. **Translate to English** — don't just mirror the German 1:1; write natural English, but keep every fact (dates, names, tech) identical.
5. **Add to both `de` and `en` trees**, same array index, same structure.
6. Run `npm run check-content` — catches missing fields or DE/EN array-length mismatches.
7. Run `npm run build` — regenerates `site/index.html` and `site/en/index.html`. This also stamps `css/style.css` and `js/main.js` with a content-hash query string (`?v=<hash>`), so browsers pick up the new file instead of serving a stale cached copy after deploy.
8. Run `npm run generate-cv` — regenerates the PDF/Word CVs (DE+EN) from the same data. Do this by default for every content change, without being asked. If it fails with EBUSY, tell Dominik to close the CV files in Word first, then re-run.
9. Offer to git commit — only if he asks; don't commit unprompted.

## Style rules learned the hard way (follow these without being asked again)

- **Client names**: real company/consulting-firm names are fine to publish (Dominik confirmed this is not covered by his NDAs — only the *end client* he worked for *through* that firm is confidential). Never invent or guess a name he hasn't given you.
- **SAP product names always get the "SAP" prefix**: "SAP CAP" not "CAP", "SAP RAP" not "RAP", "SAP Fiori Elements"/"SAP Fiori Freestyle" not bare "Fiori Elements"/"Fiori Freestyle", "SAP Fiori Launchpad" not "Fiori Launchpad", "SAP Cloud Connector" not "Cloud Connector". Apply this in bullets, tags, and titles alike.
- **Bullets, not prose**: each timeline card is a 1-sentence context/summary line, then 3–5 bullet points of concrete Kernaufgaben (not a semicolon-separated run-on paragraph). Tags (3–6 short chips) go at the end.
- **Tone**: professional and factual, not "angeberisch" (showoffy). When a leadership/architect angle is real, state it plainly in one clause — don't lead with it or oversell it. Technical substance comes first.
- **Role in the client line, not the title**: the `title` field stays the generic `"Freiberuflicher SAP-Berater"` / `"Freelance SAP Consultant"` for freelance engagements (keeps card headers visually consistent); a more specific role/focus (e.g. "SAP Full-Stack Entwickler (On-Premise)", "Solution Architect & SAP Full-Stack Entwickler (Cloud & On-Premise)") goes appended to the `client` string after an em dash. Exception: staff/permanent roles (e.g. the SWM entry) keep their real job title in the `title` field itself — don't touch those.
- **Kernkompetenzen (`skills.coreColumns`) vs. Weitere Kenntnisse (`skills.groups`)**: core columns are Frontend / Service / Backend, each item with a `since` year derived from when it first appears in the timeline — ask Dominik if a date is unclear, don't guess. Don't duplicate an item that's already in a core column inside "Weitere Kenntnisse" (and vice versa). Everything else (platforms, architecture/leadership tags, tools/IDEs, spoken languages) lives in `skills.groups`.
- **AI tools on the skills list**: Dominik decided against listing GitHub Copilot/Claude Code explicitly — he's wary of it reading as "only uses AI to work." Don't re-add this unless he brings it up again.
- **No invented facts**: don't add claims like "code reviews" or "production support" to a project unless Dominik has confirmed he actually did that work on that specific engagement.

## After structural/design changes

If you change `index.template.html`, `render.js`, or `css/style.css`: remember both `site/index.html` and `site/en/index.html` are generated from the same template — a fix only needs to happen once, then `npm run build` regenerates both. Don't hand-patch the generated files.
