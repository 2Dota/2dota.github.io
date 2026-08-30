<div align="center">

<!-- BANNER SVG -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 280" width="900" height="280">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#070a0f"/>
      <stop offset="100%" style="stop-color:#0d1117"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#fb7185"/>
      <stop offset="50%" style="stop-color:#f59e0b"/>
      <stop offset="100%" style="stop-color:#fb7185"/>
    </linearGradient>
    <linearGradient id="glow" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#fb7185;stop-opacity:0.15"/>
      <stop offset="100%" style="stop-color:#fb7185;stop-opacity:0"/>
    </linearGradient>
    <filter id="blur">
      <feGaussianBlur stdDeviation="18"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="900" height="280" fill="url(#bg)" rx="12"/>

  <!-- Glow ellipse top center -->
  <ellipse cx="450" cy="60" rx="320" ry="80" fill="url(#glow)" filter="url(#blur)"/>

  <!-- Grid lines horizontal -->
  <line x1="0" y1="70" x2="900" y2="70" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
  <line x1="0" y1="140" x2="900" y2="140" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
  <line x1="0" y1="210" x2="900" y2="210" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>

  <!-- Grid lines vertical -->
  <line x1="180" y1="0" x2="180" y2="280" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
  <line x1="360" y1="0" x2="360" y2="280" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
  <line x1="540" y1="0" x2="540" y2="280" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
  <line x1="720" y1="0" x2="720" y2="280" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>

  <!-- Top accent line -->
  <rect x="0" y="0" width="900" height="2" rx="0" fill="url(#accent)" opacity="0.8"/>

  <!-- Sword icon badge -->
  <rect x="395" y="52" width="110" height="36" rx="18" fill="rgba(251,113,133,0.12)" stroke="rgba(251,113,133,0.3)" stroke-width="1"/>
  <text x="450" y="75" font-family="system-ui,-apple-system,sans-serif" font-size="12" font-weight="600" fill="#fb7185" text-anchor="middle" letter-spacing="1">DOTA 2 WIKI</text>

  <!-- Main headline -->
  <text x="450" y="128" font-family="system-ui,-apple-system,sans-serif" font-size="42" font-weight="800" fill="white" text-anchor="middle" letter-spacing="-1">The Knowledge Base</text>

  <!-- Gradient text effect for headline (overlay) -->
  <text x="450" y="128" font-family="system-ui,-apple-system,sans-serif" font-size="42" font-weight="800" text-anchor="middle" letter-spacing="-1">
    <tspan fill="url(#accent)">The Knowledge Base</tspan>
  </text>

  <!-- Subtitle -->
  <text x="450" y="165" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="rgba(156,163,175,1)" text-anchor="middle">
    In-game shop guide + neutral items reference, built for serious players
  </text>

  <!-- Stat chips -->
  <!-- Chip 1 -->
  <rect x="183" y="198" width="120" height="32" rx="16" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
  <text x="243" y="219" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="rgba(251,113,133,1)" text-anchor="middle" font-weight="600">94 Shop Items</text>

  <!-- Chip 2 -->
  <rect x="321" y="198" width="120" height="32" rx="16" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
  <text x="381" y="219" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="rgba(251,191,36,1)" text-anchor="middle" font-weight="600">43 Neutral Items</text>

  <!-- Chip 3 -->
  <rect x="459" y="198" width="120" height="32" rx="16" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
  <text x="519" y="219" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="rgba(96,165,250,1)" text-anchor="middle" font-weight="600">9 Categories</text>

  <!-- Chip 4 -->
  <rect x="597" y="198" width="120" height="32" rx="16" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
  <text x="657" y="219" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="rgba(52,211,153,1)" text-anchor="middle" font-weight="600">5 Neutral Tiers</text>

  <!-- Bottom note -->
  <text x="450" y="258" font-family="system-ui,-apple-system,sans-serif" font-size="11" fill="rgba(75,85,99,1)" text-anchor="middle">2dota.github.io</text>
</svg>

<br/>

[![Live Site](https://img.shields.io/badge/Live%20Site-2dota.github.io-fb7185?style=for-the-badge&logo=github&logoColor=white)](https://2dota.github.io)
[![Deploy](https://img.shields.io/github/actions/workflow/status/2dota/2dota.github.io/deploy.yml?style=for-the-badge&label=Deploy&logo=githubactions&logoColor=white)](https://github.com/2dota/2dota.github.io/actions)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)

</div>

---

## What is this?

**2dota.github.io** is a dark-themed, production-ready reference site for Dota 2 players who want to deeply understand the item economy. It covers every purchasable shop item and every neutral item that drops from the jungle, with real stats, build paths, hidden mechanics, and pro-level tips for each one.

All artwork is served directly from Valve's official CDN, the same source used by the Dota 2 store and website itself.

---

## Pages

<table>
<tr>
<td width="50%">

### Home

The landing page. Two section cards guide visitors to the two main content areas. A hero section with animated stats, CTAs to both guides, and a "Coming Soon" grid for future pages.

</td>
<td width="50%">

```
/
```

**Components:** animated hero, stat pills, section cards, coming-soon grid

</td>
</tr>
<tr>
<td>

### In-Game Shop Guide

Complete reference for all 94 purchasable items in the Dota 2 shop (the F4 menu). Items organized into 9 categories with searchable filtering, item costs, stats, active/passive abilities, build paths, and an alt-tooltip hidden mechanics panel for each item.

</td>
<td>

```
/shop
/shop/:id
```

**Components:** category tabs, search bar, item grid, item detail page, build path sidebar, hidden mechanics panel

</td>
</tr>
<tr>
<td>

### Neutral Items Guide

All 43 neutral items across 5 tiers that drop in the Dota 2 jungle. Organized by tier with drop time windows, full stats, tips, and a click-to-open detail modal. Includes an updated system guide for the Madstone crafting system introduced in patch 7.38.

</td>
<td>

```
/neutral
```

**Components:** tier tabs, item grid with tier badges, detail modal, how-it-works guide, general strategy section

</td>
</tr>
</table>

---

## Architecture

```
src/
├── App.tsx                        # Router setup (BrowserRouter + 4 routes)
│
├── components/
│   └── layout/
│       ├── Layout.tsx             # Page shell: Header + main + Footer
│       ├── Header.tsx             # Fixed nav with scroll-aware blur
│       ├── Footer.tsx             # Links + legal disclaimer
│       └── ScrollToTop.tsx        # Resets scroll on every route change
│
├── data/
│   ├── shopItems.ts               # 94 shop items with stats, tips, build paths
│   ├── shopMeta.ts                # Category colors + Lucide icons (shared)
│   └── neutralItems.ts            # 43 neutral items across 5 tiers + system notes
│
└── pages/
    ├── HomePage.tsx               # Landing page
    ├── ShopGuidePage.tsx          # /shop - grid with category tabs
    ├── ShopItemDetailPage.tsx     # /shop/:id - full item detail
    └── NeutralItemsPage.tsx       # /neutral - tier grid + modal
```

---

## Data Model

### Shop Item

```typescript
interface ShopItem {
  id: string;
  name: string;
  slug: string;           // Valve CDN image slug
  category: ShopCategory; // 9 categories
  cost: number;
  imageUrl: string;       // cdn.cloudflare.steamstatic.com/...
  description: string;
  stats: string[];
  active?: string;
  passive?: string;
  guide: string;          // Hidden mechanics panel content
  tips: string[];
  buildsFrom?: string[];
  buildsInto?: string[];
  tier: 'Basic' | 'Upgrade';
}
```

### Neutral Item

```typescript
interface NeutralItem {
  id: string;
  name: string;
  slug: string;           // Valve CDN image slug
  tier: 1 | 2 | 3 | 4 | 5;
  imageUrl: string;
  description: string;
  stats: string[];
  active?: string;
  passive?: string;
  tips: string[];
  dropTime: string;
}
```

---

## Item Coverage

### Shop - 9 Categories, 94 Items

```
Consumables   ████████████░░░░░░░░  12 items   Tangos, Salves, Smokes, Wards...
Attributes    ████████░░░░░░░░░░░░   8 items   Branches, Circlets, Bracers...
Equipment     ████████████████░░░░  16 items   Boots, Blink, Force Staff...
Support       ████████████░░░░░░░░  12 items   Mekansm, Pipe, Glimmer...
Magical       ████████░░░░░░░░░░░░   8 items   Scythe, Dagon, Orchid...
Armor         ██████████████░░░░░░  10 items   Heart, Assault, Shiva's...
Weapons       ████████████████████  16 items   Daedalus, BFury, MKB...
Artifacts     ████████████░░░░░░░░  12 items   BKB, Aghs, Rapier, Skadi...
```

### Neutral Items - 5 Tiers, 43 Items

```
Tier 1   0:00 - 7:00    ██████████   8 items   Chipped Vest, Kobold Cup...
Tier 2   7:00 - 17:00   ████████░░   7 items   Essence Ring, Mana Draught...
Tier 3   17:00 - 27:00  ██████████  10 items   Titan Sliver, Enchanted Quiver...
Tier 4   27:00 - 37:00  ██████████  10 items   Spell Prism, Havoc Hammer...
Tier 5   37:00+         ████████░░   8 items   Apex, Force Boots, Mirror Shield...
```

---

## Tech Stack

<table>
<tr>
<th>Layer</th>
<th>Technology</th>
<th>Version</th>
<th>Purpose</th>
</tr>
<tr>
<td>UI Framework</td>
<td>

![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=flat-square)

</td>
<td>19.2</td>
<td>Component model, hooks, strict mode</td>
</tr>
<tr>
<td>Language</td>
<td>

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=flat-square)

</td>
<td>6.0</td>
<td>Full type safety on all data models and components</td>
</tr>
<tr>
<td>Styling</td>
<td>

![Tailwind CSS](https://img.shields.io/badge/Tailwind-06B6D4?logo=tailwindcss&logoColor=white&style=flat-square)

</td>
<td>v4</td>
<td>Utility-first CSS via Vite plugin, zero config</td>
</tr>
<tr>
<td>Build Tool</td>
<td>

![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=flat-square)

</td>
<td>8.2</td>
<td>Sub-second HMR, optimized production bundles</td>
</tr>
<tr>
<td>Routing</td>
<td>

![React Router](https://img.shields.io/badge/React%20Router-CA4245?logo=reactrouter&logoColor=white&style=flat-square)

</td>
<td>7.18</td>
<td>Client-side routing with BrowserRouter</td>
</tr>
<tr>
<td>Animation</td>
<td>

![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?logo=framer&logoColor=white&style=flat-square)

</td>
<td>13.1</td>
<td>Page transitions, modal animations, stagger effects</td>
</tr>
<tr>
<td>Icons</td>
<td>

![Lucide](https://img.shields.io/badge/Lucide%20React-f67272?style=flat-square)

</td>
<td>1.34</td>
<td>All UI icons, zero emoji/font-icon usage</td>
</tr>
<tr>
<td>Linter</td>
<td>

![oxlint](https://img.shields.io/badge/oxlint-orange?style=flat-square)

</td>
<td>1.79</td>
<td>Rust-based linter, faster than ESLint</td>
</tr>
<tr>
<td>Hosting</td>
<td>

![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-181717?logo=github&logoColor=white&style=flat-square)

</td>
<td></td>
<td>Static hosting via GitHub Actions CI/CD</td>
</tr>
<tr>
<td>Images</td>
<td>

![Valve CDN](https://img.shields.io/badge/Valve%20CDN-171a21?logo=steam&logoColor=white&style=flat-square)

</td>
<td></td>
<td>Official item artwork from cdn.cloudflare.steamstatic.com</td>
</tr>
</table>

---

## Deploy Pipeline

```
git push origin main
       │
       ▼
┌─────────────────────────────────────────────────────────┐
│  GitHub Actions  (ubuntu-latest)                        │
│                                                         │
│  1. actions/checkout@v4                                 │
│  2. actions/setup-node@v4  (Node 22, npm cache)         │
│  3. npm ci                                              │
│  4. GITHUB_PAGES_BASE=/  npm run build                  │
│     └── tsc -b (type check)                             │
│     └── vite build (bundle + optimize)                  │
│  5. actions/configure-pages@v5                          │
│  6. actions/upload-pages-artifact@v3  (dist/)           │
│                                                         │
└──────────────────────┬──────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────┐
│  Deploy Job  (needs: build)                             │
│                                                         │
│  actions/deploy-pages@v4                                │
│  └── Live at https://2dota.github.io                    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

Every push to `main` triggers the workflow automatically. The build takes approximately 3 seconds, and the full deploy pipeline typically completes in under 90 seconds.

---

## Getting Started

**Prerequisites:** Node.js 22+, npm

```bash
# Clone the repository
git clone https://github.com/2dota/2dota.github.io.git
cd 2dota.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:5173` in your browser. The dev server has hot module replacement - changes to any `.tsx` or `.ts` file reflect instantly.

```bash
# Type check + production build
npm run build

# Preview production build locally
npm run preview

# Lint
npm run lint
```

---

## Image Source

All item images are loaded from Valve's official Cloudflare CDN:

```
https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/{slug}.png
```

This is the same CDN used by `dota2.com` and the Dota 2 store. Images are always current with the latest game patch and require no local storage or build-time downloading.

---

## Adding Items

All item data lives in two TypeScript files. To add or update an item, edit the relevant file and follow the existing interface shape.

**Shop item** in `src/data/shopItems.ts`:

```typescript
{
  id: 'my_item',
  name: 'My Item',
  slug: 'my_item',          // must match Valve CDN filename
  category: 'Weapons',
  cost: 3000,
  imageUrl: img('my_item'),
  description: 'What this item does.',
  stats: ['+30 Damage'],
  active: 'Ability Name: Description.',
  guide: `Full guide text with tips.`,
  tips: ['Tip one.', 'Tip two.'],
  buildsFrom: ['Component Name'],
  buildsInto: ['Upgrade Name'],
  tier: 'Upgrade',
}
```

**Neutral item** in `src/data/neutralItems.ts`:

```typescript
{
  id: 'my_neutral',
  name: 'My Neutral',
  slug: 'my_neutral',       // must match Valve CDN filename
  tier: 3,
  imageUrl: img('my_neutral'),
  description: 'What this item does.',
  stats: ['+15 All Stats'],
  passive: 'Passive Name: Description.',
  tips: ['Tip one.', 'Tip two.'],
  dropTime: '17:00 - 27:00',
}
```

The TypeScript compiler will catch any missing required fields or type mismatches before the build completes.

---

## Roadmap

| Page | Status |
|------|--------|
| Home | Live |
| In-Game Shop Guide | Live |
| Neutral Items Guide | Live |
| Heroes Reference | Planned |
| Patch Notes History | Planned |
| Meta Tier Lists | Planned |
| Strategy Guides | Planned |

---

## License

Fan-made project. Not affiliated with or endorsed by Valve Corporation.

Dota 2 is a trademark of Valve Corporation. All item names, artwork, and descriptions are the property of Valve Corporation. Item images are served from Valve's official public CDN.

Source code is open for personal use and contribution.

---

<div align="center">

Built with React 19, TypeScript, Tailwind CSS v4, and Vite 8.

[![Live Site](https://img.shields.io/badge/Visit-2dota.github.io-fb7185?style=for-the-badge&logo=github&logoColor=white)](https://2dota.github.io)

</div>
