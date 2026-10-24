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
    name: '',             // leave '' to use your Discord display name, or type any name to override
    tag: '',              // leave '' to use your @username, or type anything
    avatar: '',           // leave '' to use your Discord avatar, or paste an image link
    headline: 'Moderator · Bot developer',  // small label above your name
    bio: 'I moderate advertising & promotion communities and build StaffHub — a staff-management bot I set up for servers myself.',
    location: 'India',    // '' hides it
    timezone: 'Asia/Kolkata', // shows your local time. '' hides it
    tags: ['Moderation', 'Advertising servers', 'Partnerships', 'Bot development'], // skill chips. [] hides them
    status: '',           // '' = live from Lanyard (join discord.gg/lanyard once). Or force: 'online' / 'idle' / 'dnd' / 'offline'
    activity: '',         // '' = live from Lanyard. Or type your own line
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  2. NAVBAR
  // ══════════════════════════════════════════════════════════════════════════
  nav: {
    show: true,
    brand: 'name',        // 'name' · 'avatar' · 'both' · 'none'
    links: [              // '#home' / '#bot' / '#servers' / '#socials' scroll to sections; any https:// link works too
      { label: 'Home', href: '#home' },
      { label: 'StaffHub', href: '#bot' },
      { label: 'Socials', href: '#socials' },
    ],
    button: { show: true, label: 'Discord ↗', url: '' }, // url '' = your Discord profile
    hideOnScroll: false,
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  3. HERO (the first screen)
  // ══════════════════════════════════════════════════════════════════════════
  hero: {
    layout: 'split',      // 'split' = glass card left + panel right · 'center' = one centred card
    avatarSize: 96,
    showStatusDot: true,
    showHeadline: true,
    showTag: true,
    showBio: true,
    showMeta: true,
    showTags: true,
    buttons: [            // style: 'solid' or 'glass'. url '' = your Discord profile. '#bot' / '#servers' / '#socials' scroll.
      { label: 'Discord profile', url: '', style: 'solid' },
      { label: 'See StaffHub', url: '#bot', style: 'glass' },
    ],
    rightPanel: 'bot',    // what the right side shows: 'bot' = the bot card · 'servers' = server tiles · 'stats' = big numbers · 'none'
    rightTiles: 7,        // ('servers' panel only) how many server tiles to show
    statsTile: { show: true, text: '{servers} im staff in, {members}+ members reached' }, // ('servers' / 'stats' panel only)
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  4. BOT SHOWCASE — your bot(s), what they do, and how people get them
  //  Each bot: name, tagline, emoji or icon (image link), summary, highlights (chips), features (cards),
  //  healthUrl (the bot's /health address → live "online · N servers" badge), and the access box.
  // ══════════════════════════════════════════════════════════════════════════
  bots: {
    show: true,
    eyebrow: 'My bot',
    title: 'StaffHub — staff utility for Discord',
    intro: 'Applications, verification, roster, strikes, breaks and a full admin dashboard — everything a staff team needs, in one bot.',
    heroButton: 'See features',           // the button on the hero bot card
    list: [
      {
        name: 'StaffHub',
        tagline: 'Staff management bot · private, set up by me',
        emoji: '🧑‍💼',                      // used if icon is empty
        icon: '',                           // image link for the bot's avatar (optional)
        healthUrl: 'https://staff-utility.apps.bot-hosting.cloud/health', // '' to hide the live badge
        summary: 'StaffHub runs the whole staff pipeline for a server: people apply, managers review, accepted staff get verified with the right roles and nickname, and everything after that — promotions, strikes, breaks, activity — is tracked automatically and managed from a web dashboard. Works with a separate staff server or inside a single server.',
        highlights: ['Admin dashboard', 'Components V2', 'Live roster', 'Image cards', 'Per-server identity', 'Single or dual server'],
        features: [
          { icon: '📝', title: 'Applications', text: 'Custom questions by DM or in-server. Managers Accept, Deny or open a private Interview channel with one click.' },
          { icon: '🪪', title: 'Verification', text: 'Accepted applicants post proof; a manager picks their position from a dropdown and roles + nickname are set in both servers.' },
          { icon: '🗂️', title: 'Roster & ranks', text: 'Departments and positions with one role each. A live roster message with generated image cards updates itself.' },
          { icon: '⬆️', title: 'Promotions & demotions', text: 'Change a position and the old roles swap out, nickname tag updates, announcement posts — automatically.' },
          { icon: '⚠️', title: 'Strikes', text: 'Strike limit with alert / demote / remove actions, optional expiry, full history on every record.' },
          { icon: '🌴', title: 'Breaks (LOA)', text: 'Staff request time off, managers approve, LOA role is applied and removed on the return date.' },
          { icon: '📈', title: 'Activity & reports', text: 'Messages, mod actions, interviews and reviews scored into a leaderboard; weekly report with inactive staff.' },
          { icon: '📊', title: 'Live overview', text: 'One self-updating message in the staff server: what needs a manager, who is on break, who went quiet.' },
          { icon: '📖', title: 'Auto guides', text: 'Channel and role guides in the main server that rebuild themselves and sync channel topics.' },
          { icon: '🧩', title: 'Embed builder', text: 'Visual editor for Components V2 messages with buttons, select menus, role-giving and private multi-page replies.' },
          { icon: '💬', title: 'DM onboarding', text: 'New staff get a welcome image card, a timezone picker and the staff guide as pages with Next / Back.' },
          { icon: '🪪', title: 'Identity & presence', text: 'Per-server nickname, avatar, banner and Nitro-style name effects; bot status that follows a daily schedule.' },
        ],
        access: {
          badge: 'Owner-authenticated — only I can add it',
          title: 'Want StaffHub in your server?',
          text: 'The bot is locked to my account, so it cannot be invited with a link. DM me on Discord, tell me about your server, and I will add it and set it up with you — departments, channels, roles and messages.',
          button: { label: 'DM me to get it', url: '' },   // url '' = your Discord profile
          requirementsTitle: 'What I need from you',
          requirements: [
            'Give me a Director of Development role (or an Administrator role) in your server — permanently, so I can maintain and update the bot.',
            'The bot needs Administrator (or Manage Roles, Manage Nicknames, Manage Channels) and its role above your staff roles.',
            'A quick call or chat to set up departments, positions and channels — about 15 minutes.',
            'Keep me in the server for as long as you use the bot; removing my role removes support.',
          ],
        },
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  5. SERVERS — hidden now (show: false). Set show: true and rightPanel: 'servers' to bring them back.
  // ══════════════════════════════════════════════════════════════════════════
  servers: {
    show: false,
    eyebrow: 'Showcase',
    title: 'Servers I help run',
    intro: 'Live numbers straight from Discord — tap a card to join.',
    columns: 3,
    showOnline: true, showMembers: true, showSince: true, showRole: true, showJoin: true,
    labels: { online: 'online', members: 'members', since: 'since', join: 'Join ↗', unavailable: 'Live stats unavailable' },
    list: [
      { invite: 'NZ5qfyQUNc',   role: 'Director Executive', since: '2023' }, // Free Promotions
      { invite: 'adverts',      role: 'Trial Moderator',  since: '2026' },   // Obsidian Advertising
      { invite: 'nDYAGjKdx2',   role: 'Moderator',        since: '' },       // Steal cash from others
      { invite: 'ShmeDYqrUs',   role: 'Moderator',        since: '2026' },
      { invite: 'hhuN5Sxc4',    role: 'Moderator',        since: '' },
      { invite: '7xx9zZVDMa',   role: 'Server Builder',   since: '' },       // Jane and Joe Club
      { invite: 'recruitments', role: 'Former Staff',     since: '2026' },   // GenreHub
      { invite: 'SWatQW56tC',   role: 'Former Staff',     since: '' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  6. SOCIALS
  //  icon: discord · youtube · twitter · instagram · github · tiktok · twitch · website · email · reddit · steam · spotify · telegram · roblox
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
  //  7. EXTRA SECTIONS (optional) — appear after Socials. type: 'text' · 'list' · 'cards'
  // ══════════════════════════════════════════════════════════════════════════
  sections: [
    { type: 'cards', id: 'services', eyebrow: 'Services', title: 'What I can do', cards: [
      { title: 'Moderation', text: 'Clean ad channels, fair warnings, calm chats — consistent rules every day.' },
      { title: 'Advertising & partnerships', text: 'Partner outreach, ad-channel setup, bump & promo systems that stay spam-free.' },
      { title: 'Staff teams', text: 'Onboarding, roles, guides and ModMail so new staff know exactly what to do.' },
      { title: 'Bots & setup', text: 'StaffHub, tickets, ModMail, auto-roles and custom utility bots for your server.' },
    ] },
  ],

  // ══════════════════════════════════════════════════════════════════════════
  //  8. FOOTER
  // ══════════════════════════════════════════════════════════════════════════
  footer: { show: true, text: 'Made by Leafy · DM me on Discord' },

  // ══════════════════════════════════════════════════════════════════════════
  //  9. LOOK — colours, glass, fonts
  // ══════════════════════════════════════════════════════════════════════════
  theme: {
    background: '#06100c',
    text: '#ffffff',
    muted: '#9fb5a8',
    accent: '#34d399',      // solid buttons, active nav link, highlights
    accentText: '#000000',
    online: '#23a55a', idle: '#f0b232', dnd: '#f23f43', offline: '#5b5b66',
    blobs: [                // glowing colour blobs. x / y in % of the screen, size in px, opacity 0–1. blobs: [] = plain background
      { color: '#16a34a', x: -5, y: -10, size: 620, opacity: .7 },
      { color: '#0d9488', x: 95, y: 15, size: 520, opacity: .7 },
      { color: '#84cc16', x: 45, y: 110, size: 520, opacity: .4 },
    ],
    blobBlur: 90,
    glass: { opacity: .06, blur: 24, border: .14, radius: 28, tileRadius: 22, shadow: true },
    buttonRadius: 999,
    chipRadius: 999,
    font: 'Sora',           // any Google Font
    nameSize: 54,
    nameWeight: 800,
    maxWidth: 1240,
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  10. EFFECTS & ANIMATIONS — every switch can be turned off
  // ══════════════════════════════════════════════════════════════════════════
  effects: {
    loader: true, loaderText: 'Loading {name}',
    blobsDrift: true, blobsFollowCursor: true,
    entrance: true, letterReveal: true, scrollReveal: true,
    tilt: true, magneticButtons: true, customCursor: true,
    avatarRing: true, avatarFloat: true, statusPulse: true, buttonShine: true, countUp: true,
    starfield: true,                      // 3D starfield behind everything
    orb: true,                            // big particle sphere behind the hero
    orbColors: ['#d1fae5', '#0d9488'],    // mint → teal
    lowPowerMobile: true,
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  11. PAGE INFO (browser tab + link previews in Discord)
  // ══════════════════════════════════════════════════════════════════════════
  meta: {
    title: '',              // browser tab title. '' = "<name> — portfolio"
    description: 'Leafy — Discord moderator and developer of StaffHub, a staff-management bot set up privately for servers.',
    // LINK PREVIEWS (the card Discord shows when the link is pasted) are read from index.html WITHOUT JavaScript,
    // so they are hard-coded there: og:title, og:description, og:image (og.png in the repo) and oembed.json.
    // To change them, edit those lines near the top of index.html and/or replace og.png (1200×630).
    // The three below only update the live page's tags (for tools that run JS); leave '' to keep the static ones.
    ogTitle: '', ogDescription: '', ogImage: '',
    favicon: '',            // '' = your avatar
    themeColor: '',         // mobile browser bar colour. '' = background colour
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  12. CUSTOM CSS (advanced)
  // ══════════════════════════════════════════════════════════════════════════
  customCss: '',
};
