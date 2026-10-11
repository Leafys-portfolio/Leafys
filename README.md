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
| `theme` | accent colour, second colour, background, card colour, text colours, corner radius, Google Font name, banner image URL, dotted pattern on/off |
| `profile` | name, tag, bio, avatar URL, Discord ID (optional live status via Lanyard), timezone (shows your local time), location, skill chips, "Discord profile" button link |
| `socials` | any number of links — icons: discord, youtube, twitter, instagram, github, tiktok, twitch, website, email, reddit, steam, spotify |
| `servers` | one entry per server: `invite` (code after discord.gg/ — must be a **permanent** invite), `role`, `since`, `note`; name, icon and counts load live. Add `name` / `icon` to override. |
| `footer` | the line at the bottom |

Commit the change — Pages redeploys on its own.

## Live status (optional)
Put your Discord user ID in `profile.discordId` and join **discord.gg/lanyard** once. The page then shows your real
status dot (online / idle / dnd), what you're playing or listening to, and uses your current avatar automatically.

## Notes
- Counts come from Discord's public invite endpoint; if a card says *Live stats unavailable*, the invite expired or was
  revoked — make a permanent one (Invite → Edit invite link → Expire after: Never).
- Everything is static: there is nothing to host and nothing that can go down except Discord itself.
