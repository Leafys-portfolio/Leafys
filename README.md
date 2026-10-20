# Discord portfolio — Aurora glass (v5)

A one-page portfolio for Discord moderators: your profile (pulled live from Discord), the servers you
help run with **live online / member counts**, socials, and optional extra sections — all behind
frosted-glass cards over drifting colour blobs.

**Two files only:** `index.html` (never edit) and `config.js` (edit everything here).

## Put it on GitHub Pages (free)

1. Create a repo named `<your-username>.github.io` (public).
2. Upload `index.html` and `config.js` to the root (Add file → Upload files, or ✏️ edit → paste).
3. Settings → Pages → Source: *Deploy from a branch* → `main` / root → Save.
4. Open `https://<your-username>.github.io` — it goes live within a minute or two.

To change anything later: open `config.js` on GitHub → ✏️ → edit → Commit. Hard-refresh the site.

## Editing `config.js`

Every setting has a comment next to it explaining what it does. The sections:

| Section | What it controls |
|---|---|
| `profile` | Discord profile link (name/avatar fetched automatically), headline, bio, location, timezone, tags, forced status/activity |
| `nav` | the floating navbar: brand style, links, the button, hide-on-scroll |
| `hero` | first screen: split or centred layout, avatar size, which lines show, buttons, what the right panel shows (server tiles / big stats / nothing), the stats tile text |
| `servers` | the server list (`invite`, `role`, `since`, optional `name` / `icon` / `color` / `hide`), the full section's title/intro/columns, which stats show, every label |
| `socials` | social links with icons and handles |
| `sections` | extra sections: text, bullet list or small cards — add as many as you want |
| `footer` | footer text |
| `theme` | every colour, the blobs (colour, position, size, opacity, blur), glass opacity/blur/border/radius/shadow, button & chip roundness, font, name size/weight, page width |
| `effects` | every animation as an on/off switch (loader, blob drift, cursor follow, entrance, letter reveal, scroll reveal, tilt, magnetic buttons, custom cursor, avatar ring/float, status pulse, button shine, count-up, starfield, particle sphere, low-power mode) |
| `meta` | tab title, description, link-preview image, favicon, mobile bar colour |
| `customCss` | any CSS of your own |

### Rules of the file
- Text in quotes, numbers without, switches are `true` / `false`.
- Every line ends with a comma. Don't delete settings — blank them (`''`) or switch them off (`false`).
- If the page shows **"Portfolio could not load"**, a line in `config.js` is malformed; the message says what's wrong.

### Invites
Use the code after `discord.gg/` (full links work too). Invites must be set to **never expire**
(Invite → Edit link → Expire after: Never) or the card shows "invite not found" once it dies.

### Live status / activity
Join <https://discord.gg/lanyard> once with your account and the status dot, game / Spotify line and
your freshest avatar update live. Without it the name and avatar still load (via a public lookup);
set `profile.status` to force a status.

### Link preview in Discord
Discord reads the page before JavaScript runs, so for a guaranteed image in the embed set
`meta.ogImage` to a direct image link (e.g. your avatar URL) rather than leaving it blank.

## Performance
Blobs are CSS-only. Heavy effects (tilt, custom cursor, magnetic buttons) are desktop-only; the
optional starfield and particle sphere pause when off-screen and run lighter on phones. Everything
respects the visitor's "reduce motion" setting.
