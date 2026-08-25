# Dota 2 Item Wiki

A complete, searchable reference for every cosmetic item in the Dota 2 store. Built with React 19, TypeScript, Vite, Tailwind CSS v4 and Framer Motion.

## Features

- Every Arcana, Persona, Immortal, Courier, HUD, Terrain, Announcer and Music Pack
- Full descriptions, lore, and customization breakdowns
- Official artwork from Valve CDN (same source as dota2.com)
- Real-time search and multi-filter by category, rarity, hero, availability
- Animated UI with Apple-inspired design language
- Fully responsive

## Stack

- React 19 + TypeScript 6
- Vite 8
- Tailwind CSS v4 (Vite plugin)
- Framer Motion 13
- React Router 7
- Lucide React icons

## Local Development

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

### 1. Edit the base URL

Open `.github/workflows/deploy.yml` and change:

```yaml
GITHUB_PAGES_BASE: /dota2-wiki/
```

Replace `dota2-wiki` with your actual GitHub repository name.

### 2. Enable GitHub Pages in your repo

- Settings > Pages > Source: GitHub Actions

### 3. Push to main

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO/`

## License

Fan project. Not affiliated with Valve Corporation. Dota 2 is a trademark of Valve Corporation.
