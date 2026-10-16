# Discord portfolio

A one-page site that shows who you are and the servers you help run — with **live online / member counts from
Discord** — plus your socials and projects. No server, no build: it runs on GitHub Pages.

## Put it online (GitHub Pages)
1. GitHub → **New repository** → name it e.g. `portfolio` → Public → Create.
2. Add the two files: **Add file → Create new file** → `index.html` (paste), then `config.js` (paste), then `README.md` if you like.
3. **Settings → Pages** → Source: *Deploy from a branch* → `main` / `/ (root)` → Save.
4. ~1 minute later: `https://<your-username>.github.io/portfolio/`.

## Customise — edit `config.js` only
| Section | What you can change |
|---|---|
| `theme` | `preset` (violet · ocean · ember · forest · mono · auto = colours from your Discord banner), or your own accent / accent2 / background / surface hex colours, corner radius, any Google Font, glow and dotted pattern on/off |
| `profileLink` | paste your Discord profile link — **name, tag, avatar and banner are fetched automatically**. `name` / `tag` / `avatar` / `banner` are optional overrides |
| `bio`, `location`, `timezone`, `tags` | text under your name, your local clock, skill chips |
| `socials` | any number of links — icons: discord, youtube, twitter, instagram, github, tiktok, twitch, website, email, reddit, steam, spotify |
| `headline` / `ctaText` | pill above your name / main button text |
| `serversEyebrow` / `socialsEyebrow` / `socialsTitle` | section labels |
| `theme.particles` | cursor-reactive particle background (`false` to turn off) |
| `servers` | one entry per server: `invite` (code after discord.gg/ — must be a **permanent** invite), `role`, `since`; name, icon and counts load live. Add `name` / `icon` to override. |
| `footer` | the line at the bottom |

Commit the change — Pages redeploys on its own.

## Live status (optional)
Join **discord.gg/lanyard** once (nothing else to set up). The page then shows your real status dot
(online / idle / dnd), what you're playing or listening to, and always your freshest avatar.

## Changed something and the site didn't update?
The page loads `config.js` with a fresh timestamp every visit, so edits show up as soon as GitHub finishes deploying
(repo → **Actions** → green tick, ~1 minute). If you edited `index.html` itself, hard-refresh or open a private tab once.

## Notes
- Counts come from Discord's public invite endpoint; if a card says *Live stats unavailable*, the invite expired or was
  revoked — make a permanent one (Invite → Edit invite link → Expire after: Never).
- Everything is static: there is nothing to host and nothing that can go down except Discord itself.

## Animations
Everything is built in (no libraries): 3D starfield that tilts with the cursor, letter-by-letter name reveal, 3D tilt + light sheen on cards, magnetic buttons, custom cursor, auto-hiding nav, scroll reveals. They all switch off automatically for visitors with "reduce motion" enabled. `theme.particles: false` turns off the starfield.
