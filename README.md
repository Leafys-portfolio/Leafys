# Discord portfolio — Aurora glass (v6)

One page: your profile (pulled live from Discord), a showcase of your bot with its features and how people get it, socials and optional extra sections — glass cards over drifting colour blobs. Server cards are still built in (hidden with `servers.show`).

**Two files only:** `index.html` (never edit) and `config.js` (edit everything here — every setting has a note).

## GitHub Pages
Repo `<username>.github.io` → upload both files to the root → Settings → Pages → Deploy from branch `main` / root. Edits to `config.js` go live within a minute (hard-refresh).

## config.js sections
`profile` · `nav` · `hero` (rightPanel: `bot` / `servers` / `stats` / `none`) · `bots` (name, tagline, emoji/icon, healthUrl for a live online badge, summary, highlight chips, feature cards, the access box with requirements) · `servers` · `socials` · `sections` · `footer` · `theme` · `effects` · `meta` · `customCss`.

Rules: text in quotes, numbers without, switches `true`/`false`, every line ends with a comma. If the page says "Portfolio could not load", a line is malformed and the message says what.

## Live bot badge
`bots.list[].healthUrl` points at the bot's `/health` page; the bot answers with CORS so the badge shows "online · N servers". Blank to hide.
