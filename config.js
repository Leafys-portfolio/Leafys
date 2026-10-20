// ╔══════════════════════════════════════════════════════════════════════════════╗
// ║  PORTFOLIO SETTINGS — this is the ONLY file you edit.                        ║
// ║                                                                              ║
// ║  HOW TO EDIT                                                                 ║
// ║  • Text goes inside quotes:        name: 'Leafy',                            ║
// ║  • On/off switches are true/false: show: true,                               ║
// ║  • Numbers have no quotes:         size: 96,                                 ║
// ║  • Colours are hex codes:          '#ff8800'  (pick at https://htmlcolorcodes.com)
// ║  • Lists are in [ square brackets ], items separated by commas.              ║
// ║  • Every line ends with a comma. Don't delete a setting — set it to '' or    ║
// ║    false instead. Lines starting with // are notes and are ignored.          ║
// ║  • After saving on GitHub, the site updates in ~1 minute (hard-refresh).     ║
// ╚══════════════════════════════════════════════════════════════════════════════╝
window.PORTFOLIO = {

  // ══════════════════════════════════════════════════════════════════════════
  //  1. YOU
  // ══════════════════════════════════════════════════════════════════════════
  profile: {
    link: 'https://discord.com/users/1314899151640858674', // your Discord profile link. Name, @tag and avatar are fetched from it automatically.
                                                           // To get it: Discord → your profile → ⋯ → "Copy User ID", then paste the number after /users/
    name: '',             // leave '' to use your Discord display name, or type any name to override
    tag: '',              // leave '' to use your @username, or type anything ('@maple', 'he/him', …)
    avatar: '',           // leave '' to use your Discord avatar, or paste an image link (https://… .png/.jpg/.gif)
    headline: 'Moderator · Advertising servers',  // small label above your name
    bio: 'I moderate advertising & promotion communities — keeping ad channels clean, partnerships fair and staff teams organised.',
    location: 'India',    // '' hides it
    timezone: 'Asia/Kolkata', // shows your local time. '' hides it. List: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
    tags: ['Moderation', 'Advertising servers', 'Partnerships', 'Staff teams'], // skill chips. [] hides them
    status: '',           // '' = live from Lanyard (join discord.gg/lanyard once). Or force: 'online' / 'idle' / 'dnd' / 'offline'
    activity: '',         // '' = live from Lanyard (game / Spotify / custom status). Or type your own line
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  2. NAVBAR (the floating pill at the top)
  // ══════════════════════════════════════════════════════════════════════════
  nav: {
    show: true,
    brand: 'name',        // what's shown on the left: 'name' · 'avatar' · 'both' · 'none'
    links: [              // the pill in the middle. href '#home' / '#servers' / '#socials' scroll to sections; any https:// link works too
      { label: 'Home', href: '#home' },
      { label: 'Servers', href: '#servers' },
      { label: 'Socials', href: '#socials' },
    ],
    button: { show: true, label: 'Discord ↗', url: '' }, // right-side button. url '' = your Discord profile
    hideOnScroll: false,   // slides away when scrolling down, returns when scrolling up
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  3. HERO (the first screen)
  // ══════════════════════════════════════════════════════════════════════════
  hero: {
    layout: 'split',      // 'split' = glass card left + tiles right (like the mockup) · 'center' = one centred card
    avatarSize: 96,       // pixels
    showStatusDot: true,  // green/yellow/red dot on the avatar
    showHeadline: true,
    showTag: true,
    showBio: true,
    showMeta: true,       // location · local time · activity line
    showTags: true,
    buttons: [            // style: 'solid' (white) or 'glass' (see-through). url '' = your Discord profile. '#servers' etc. scroll.
      { label: 'Discord profile', url: '', style: 'solid' },
      { label: 'Explore servers', url: '#servers', style: 'glass' },
    ],
    rightPanel: 'servers', // what the right side shows ('split' layout only): 'servers' = compact server tiles · 'stats' = big numbers · 'none'
    rightTiles: 7,         // how many server tiles to show on the right (the rest are in the Servers section)
    statsTile: {           // the extra tile at the end of the right panel
      show: true,
      text: '{servers} im staff in, {members}+ members reached', // placeholders: {members} {online} {servers} are filled live
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  4. SERVERS
  //  invite = the code after discord.gg/  (full links also work). Must be a PERMANENT invite
  //  (Invite → Edit link → Expire after: Never) or the card breaks when it expires.
  //  Name, icon, banner, online & member counts load live from Discord.
  //  Optional per server: name (override), icon (image link), color (hex, used if the server has no banner), hide: true
  // ══════════════════════════════════════════════════════════════════════════
  servers: {
    show: true,            // the full "Servers" section below the hero (cards with banners)
    eyebrow: 'Showcase',   // small label above the title
    title: 'Servers I help run',
    intro: 'Live numbers straight from Discord — tap a card to join.',
    columns: 3,            // cards per row on desktop (2 · 3 · 4)
    showOnline: true,
    showMembers: true,
    showSince: true,
    showRole: true,
    showJoin: true,        // the "Join ↗" chip on hover
    labels: { online: 'online', members: 'members', since: 'since', join: 'Join ↗', unavailable: 'Live stats unavailable' },
    list: [
      { invite: 'NZ5qfyQUNc',   role: 'Director Executive', since: '2023' }, // Free Promotions
      { invite: 'adverts',      role: 'Trial Moderator',  since: '2026' },   // Obsidian Advertising
      { invite: 'nDYAGjKdx2',   role: 'Moderator',        since: '' },       // Steal cash from others
      { invite: 'ShmeDYqrUs',   role: 'Moderator',        since: '2026' },   // (name loads from Discord)
      { invite: 'hhuN5Sxc4',    role: 'Moderator',        since: '' },       // (name loads from Discord)
      { invite: '7xx9zZVDMa',   role: 'Server Builder',   since: '' },       // Jane and Joe Club
      { invite: 'recruitments', role: 'Former Staff',     since: '2026' },   // GenreHub
      { invite: 'SWatQW56tC',   role: 'Former Staff',     since: '' },       // (name loads from Discord)
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  5. SOCIALS
  //  icon: discord · youtube · twitter · instagram · github · tiktok · twitch · website · email · reddit · steam · spotify · telegram · roblox
  //  handle: the small grey text under the label ('' = taken from the link)
  // ══════════════════════════════════════════════════════════════════════════
  socials: {
    show: true,
    eyebrow: 'More',
    title: 'Find me elsewhere',
    items: [
      { icon: 'discord', label: 'Discord', url: '', handle: '@._maple1' },  // url '' = your profile link
      { icon: 'email', label: 'Email', url: 'mailto:undeadisop@gmail.com', handle: '' },
      // { icon: 'github', label: 'GitHub', url: 'https://github.com/IshanToshniwal', handle: '' },
      // { icon: 'youtube', label: 'YouTube', url: 'https://youtube.com/@yourchannel', handle: '' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  6. EXTRA SECTIONS (optional) — add as many as you like, they appear after Socials
  //  type 'text'  → a glass card with a title and paragraphs
  //  type 'list'  → a glass card with bullet points
  //  type 'cards' → small glass tiles (title + text each)
  //  Remove the // at the start of the lines to enable an example.
  // ══════════════════════════════════════════════════════════════════════════
  sections: [
    // { type: 'text',  id: 'about', eyebrow: 'About', title: 'A bit more about me', body: ['First paragraph…', 'Second paragraph…'] },
    // { type: 'list',  id: 'skills', eyebrow: 'How I work', title: 'What I bring', items: ['Fair, consistent moderation', 'Clear staff onboarding'] },
    { type: 'cards', id: 'services', eyebrow: 'Services', title: 'What I can do', cards: [
      { title: 'Moderation', text: 'Clean ad channels, fair warnings, calm chats — consistent rules every day.' },
      { title: 'Advertising & partnerships', text: 'Partner outreach, ad-channel setup, bump & promo systems that stay spam-free.' },
      { title: 'Staff teams', text: 'Onboarding, roles, guides and ModMail so new staff know exactly what to do.' },
      { title: 'Bots & setup', text: 'Tickets, ModMail, auto-roles and custom utility bots for your server.' },
    ] },
  ],

  // ══════════════════════════════════════════════════════════════════════════
  //  7. FOOTER
  // ══════════════════════════════════════════════════════════════════════════
  footer: {
    show: true,
    text: 'Made by Leafy · DM me on Discord',
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  8. LOOK — colours, glass, fonts
  // ══════════════════════════════════════════════════════════════════════════
  theme: {
    background: '#06100c',  // page background
    text: '#ffffff',        // main text
    muted: '#9fb5a8',       // secondary text
    accent: '#34d399',      // solid buttons, active nav link, highlights
    accentText: '#000000',  // text on solid buttons
    online: '#23a55a', idle: '#f0b232', dnd: '#f23f43', offline: '#5b5b66', // status dot colours

    // The glowing colour blobs behind everything. x / y = position in % of the screen, size in px.
    // Add or remove blobs freely. opacity 0–1. Set blobs: [] for a plain background.
    blobs: [
      { color: '#16a34a', x: -5, y: -10, size: 620, opacity: .7 },   // leaf green, top-left
      { color: '#0d9488', x: 95, y: 15, size: 520, opacity: .7 },    // teal, right
      { color: '#84cc16', x: 45, y: 110, size: 520, opacity: .4 },   // lime, bottom
    ],
    blobBlur: 90,           // px — higher = softer

    glass: {
      opacity: .06,         // card fill: 0 = fully see-through, .2 = quite solid
      blur: 24,             // px of background blur behind cards
      border: .14,          // border brightness 0–1
      radius: 28,           // card corner roundness (px)
      tileRadius: 22,       // small tiles (servers on the right, socials)
      shadow: true,         // soft drop shadow under cards
    },
    buttonRadius: 999,      // 999 = pill, 12 = rounded, 0 = square
    chipRadius: 999,
    font: 'Sora',           // any Google Font: 'Sora', 'Poppins', 'Outfit', 'Space Grotesk', 'DM Sans', 'Manrope' …
    nameSize: 54,           // your name, px (desktop). Phones scale automatically
    nameWeight: 800,        // 400 normal · 600 semi-bold · 800 extra-bold
    maxWidth: 1240,         // page width on big screens (px)
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  9. EFFECTS & ANIMATIONS — every switch can be turned off
  //  (everything also switches off automatically for visitors who prefer reduced motion)
  // ══════════════════════════════════════════════════════════════════════════
  effects: {
    loader: true,           // the "Loading <name>" screen
    loaderText: 'Loading {name}', // {name} = your name
    blobsDrift: true,       // blobs slowly float around
    blobsFollowCursor: true,// blobs lean slightly toward the mouse
    entrance: true,         // hero fades/rises in piece by piece
    letterReveal: true,     // your name appears letter by letter
    scrollReveal: true,     // sections rise in as you scroll to them
    tilt: true,             // cards tilt in 3D toward the cursor with a light sheen (desktop)
    magneticButtons: true,  // buttons pull toward the cursor (desktop)
    customCursor: true,     // ring cursor that grows over links (desktop)
    avatarRing: true,       // spinning light ring around the avatar
    avatarFloat: true,      // avatar gently bobs
    statusPulse: true,      // pulsing ring on the online dot
    buttonShine: true,      // light sweep across the solid button
    countUp: true,          // numbers count up when they load
    starfield: true,       // the 3D starfield from the previous design (off = cleaner aurora look)
    orb: true,             // the big particle sphere from the previous design, drawn behind the hero
    orbColors: ['#d1fae5', '#0d9488'],   // mint → teal to match the blobs
    lowPowerMobile: true,   // lighter effects on phones/tablets
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  10. PAGE INFO (browser tab + link previews in Discord)
  // ══════════════════════════════════════════════════════════════════════════
  meta: {
    title: '',              // browser tab title. '' = "<name> — portfolio"
    description: 'Leafy — Discord moderator for advertising & promotion servers. Live server stats, roles and contact.',
    ogImage: '',            // image shown when the link is pasted in Discord/Twitter. '' = your avatar (set a direct image link for a guaranteed preview)
    favicon: '',            // '' = your avatar
    themeColor: '',         // mobile browser bar colour. '' = background colour
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  11. CUSTOM CSS (advanced) — anything here is added to the page as-is
  // ══════════════════════════════════════════════════════════════════════════
  customCss: '',            // e.g. '.srv .name{font-size:20px}'
};
