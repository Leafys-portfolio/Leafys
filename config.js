// ============================================================================
//  YOUR PORTFOLIO SETTINGS — this is the only file you need to edit.
//  Save, commit, done. Everything else is automatic.
// ============================================================================
window.PORTFOLIO = {

  // ---- Look -----------------------------------------------------------------
  theme: {
    accent: '#8b7bff',        // main colour: buttons, highlights, banner glow
    accent2: '#ffb86b',       // second colour: role badges, small details
    background: '#0e0b1e',    // page background
    surface: '#17132d',       // cards
    text: '#efeafd',
    muted: '#9d96bd',
    radius: 22,               // corner roundness in px (0 = square)
    font: 'Outfit',           // any Google Font name, e.g. 'Sora', 'Poppins', 'Space Grotesk'
    banner: '',               // optional banner image URL for the profile card (leave '' for a gradient)
    pattern: true,            // soft dotted pattern behind the page
  },

  // ---- You ------------------------------------------------------------------
  profile: {
    name: 'Leafy',
    tag: '@._maple1',                              // shown under the name
    bio: 'Moderator & bot builder. I keep communities calm, organised and running — and I write the bots that help.',
    avatar: 'https://cdn.discordapp.com/avatars/1314899151640858674/a0d099f8141dd94469d88c224c87cbc0.png?size=1024',   // your avatar image URL (right-click your Discord avatar → Copy image address)
    discordId: '',             // optional: your Discord user ID. If you join discord.gg/lanyard, live status + avatar are shown automatically
    timezone: 'Asia/Kolkata',  // shows your local time (IANA name) — '' to hide
    location: 'India',         // '' to hide
    tags: ['Moderation', 'Staff management', 'Bot development', 'Community growth'],   // small chips under the bio
    profileLink: 'https://discord.com/users/1314899151640858674',   // the big "Discord profile" button
  },

  // ---- Social links ----------------------------------------------------------
  // icon: discord · youtube · twitter · instagram · github · tiktok · twitch · website · email · reddit · steam · spotify
  socials: [
    { icon: 'discord', label: 'Discord', url: 'https://discord.com/users/YOUR_USER_ID' },
    { icon: 'github', label: 'GitHub', url: 'https://github.com/IshanToshniwal' },
    { icon: 'youtube', label: 'YouTube', url: 'https://youtube.com/@yourchannel' },
    { icon: 'email', label: 'Email', url: 'mailto:you@example.com' },
  ],

  // ---- Servers ---------------------------------------------------------------
  // invite: the code after discord.gg/ (the invite must be permanent).
  // Name, icon, online and member counts are fetched live from Discord — you can override name/icon if you want.
  // role: anything — 'Owner', 'Admin', 'Moderator', 'Head Mod', 'Partner Manager'…
  servers: [
    { invite: 'recruitments', role: 'Senior Moderator', since: '2026', note: 'Advertising community — I run the staff team and moderation.' },
    { invite: 'NZ5qfyQUNc', role: 'Trial Moderator', since: '2026', note: 'Partnerships and community events.' },
    { invite: 'python', role: 'Moderator', since: '2023' },
  ],
  serversTitle: 'Servers I help run',
  serversIntro: 'Live numbers straight from Discord. Click a card to join.',

  footer: '© 2026 Ishan · Not affiliated with Discord.',
};
