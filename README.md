# AC Repair Oak Ridge North TX

Production-ready Astro website for a local air conditioning repair business.

**Domain:** acrepairoakridgenorthtx.us  
**Deploy target:** Cloudflare Pages

## Quick Start

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output is written to `dist/`.

## Cloudflare Pages Deployment

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | 18+ (20 or 22 recommended) |

Connect your Git repository to Cloudflare Pages, or upload the `dist` folder after a local build.

## Configuration Notes

1. **Web3Forms** — Replace `YOUR_WEB3FORMS_ACCESS_KEY` in `src/pages/contact.astro` with your key from [web3forms.com](https://web3forms.com).
2. **Phone number** — A placeholder `(281) 555-0192` is used throughout. Search-and-replace with the real number.
3. **OG image** — Add an `og-default.jpg` (1200×630) to `public/` for social sharing, or update the default in `BaseLayout.astro`.

## Project Structure

```
src/
  content/blog/   # Markdown blog posts
  data/           # Services & service-area data
  layouts/        # BaseLayout.astro
  pages/          # Routes (file-based)
  styles/         # global.css
public/
  robots.txt
  llms.txt
  sitemap.xml
  favicon.*
```

## SEO Features

- Unique title & meta description on every page
- Canonical URLs, Open Graph, Twitter cards
- Static sitemap.xml
- robots.txt allowing major search & AI crawlers
- llms.txt for AI systems
- Semantic HTML, skip link, accessible form
- Sticky mobile click-to-call button
- Services dropdown navigation

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run preview` — preview production build
