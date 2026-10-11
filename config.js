// ============================================================================
//  PORTFOLIO SETTINGS — the only file you edit. Save → commit → done.
// ============================================================================
window.PORTFOLIO = {

  // ---- You ------------------------------------------------------------------
  // Paste your Discord profile link. Name, tag, avatar and banner are fetched from it automatically.
  profileLink: 'https://discord.com/users/1234567890123456789',
  bio: 'Moderator & community builder. I keep servers calm, organised and growing.',
  location: 'India',               // '' to hide
  timezone: 'Asia/Kolkata',        // shows your local time — '' to hide
  tags: ['Moderation', 'Staff management', 'Partnerships', 'Bot development'],
  // Optional overrides — only fill these if you want something different from your Discord profile:
  name: '', tag: '', avatar: '', banner: '',

  // ---- Look -----------------------------------------------------------------
  theme: {
    preset: 'violet',          // violet · ocean · ember · forest · mono · auto (auto = colours from your Discord banner)
    accent: '',                // or set your own colours (hex) — these override the preset
    accent2: '',
    background: '',
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
    { icon: 'email', label: 'Email', url: 'mailto:you@example.com' },
  ],

  // ---- Servers ---------------------------------------------------------------
  // invite: the code after discord.gg/ — must be a PERMANENT invite. Name, icon, banner, online and member
  // counts load live from Discord. role: anything ('Owner', 'Admin', 'Head Mod', 'Partner Manager'…).
  servers: [
    { invite: 'discord', role: 'Moderator', since: '2024', note: 'Advertising community — I run the staff team.' },
    { invite: 'minecraft', role: 'Admin', since: '2025', note: 'Partnerships and community events.' },
    { invite: 'python', role: 'Moderator', since: '2023' },
  ],
  serversTitle: 'Servers I help run',
  serversIntro: 'Live numbers straight from Discord — tap a card to join.',

  footer: '© 2026 · Not affiliated with Discord.',
};
