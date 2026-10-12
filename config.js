// ============================================================================
//  PORTFOLIO SETTINGS — the only file you edit. Save → commit → done.
// ============================================================================
window.PORTFOLIO = {

  // ---- You ------------------------------------------------------------------
  // Paste your Discord profile link. Name, tag, avatar and banner are fetched from it automatically.
  profileLink: 'https://discord.com/users/1314899151640858674',
  bio: 'Moderator & community builder.',
  location: 'India',               // '' to hide
  timezone: 'Asia/Kolkata',        // shows your local time — '' to hide
  tags: ['Moderation', 'Staff management', 'Partnerships', 'Active'],
  // Optional overrides — only fill these if you want something different from your Discord profile:
  name: '', tag: '', avatar: '', banner: 'https://i.pinimg.com/originals/70/55/c9/7055c99bad359a99e95a9a0bf4849a77.gif',

  // ---- Look -----------------------------------------------------------------
  theme: {
    preset: 'violet',          // violet · ocean · ember · forest · mono · auto (auto = colours from your Discord banner)
    accent: '',                // or set your own colours (hex) — these override the preset
    accent2: '',
    background: 'https://i.pinimg.com/originals/70/55/c9/7055c99bad359a99e95a9a0bf4849a77.gif',
    surface: '',
    radius: 24,                // corner roundness (0 = square)
    font: 'Outfit',            // any Google Font: 'Sora', 'Poppins', 'Space Grotesk', 'DM Sans'…
    glow: true,                // soft glow behind the profile card
    pattern: true,             // dotted background pattern
  },

  // ---- Social links ----------------------------------------------------------
  // icons: discord · youtube · twitter · instagram · github · tiktok · twitch · website · email · reddit · steam · spotify · telegram · roblox
  socials: [
    { icon: 'discord', label: 'Discord', url: '' },      // '' = uses your profile link above
    { icon: 'github', label: 'GitHub', url: 'https://github.com/IshanToshniwal' },
    { icon: 'youtube', label: 'YouTube', url: 'https://youtube.com/@yourchannel' },
    { icon: 'email', label: 'Email', url: 'mailto:undeadisop@gmail.com' },
  ],

  // ---- Servers ---------------------------------------------------------------
  // invite: the code after discord.gg/ — must be a PERMANENT invite. Name, icon, banner, online and member
  // counts load live from Discord. role: anything ('Owner', 'Admin', 'Head Mod', 'Partner Manager'…).
  servers: [
    { invite: 'recruitments', role: 'Senior Moderator', since: '2026' },   // GenreHub
    { invite: 'adverts',      role: 'Trial Moderator',  since: '2026' },   // Obsidian Advertising
    { invite: 'nDYAGjKdx2',   role: 'Moderator',        since: '' },       // Steal cash from others
    { invite: 'NZ5qfyQUNc',   role: 'Trial Moderator',  since: '2023' },   // Free Promotions
    { invite: '7xx9zZVDMa',   role: 'Server Builder',   since: '' },       // Jane and Joe Club
  ],
  serversTitle: 'Servers where Im staff at.',
  serversIntro: 'Live numbers straight from Discord - tap a card to join.',

  footer: '© 2026 · Leafy',
};
