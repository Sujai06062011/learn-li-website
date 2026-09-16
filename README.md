# LearnLi marketing

Marketing site, brand kit, and company/product brochure for **LearnLi** — the AI-assisted learning platform for CBSE students in Grades 6–12.

The product itself lives at [learnli.in](https://learnli.in). This repository is the public story around it: logo and app icon, a static website, and a printable PDF.

## Brand direction

The product UI is friendly, pastel, and card-based. Marketing uses a quieter register:

- Cream paper (`#F6F1E8`) and teal ink (`#1B3F47` / `#123A4A`)
- Yellow tap targets (`#F5D76E`) on dark teal
- Fine-line illustration plus the product’s pastel cards
- The existing mortarboard, rewritten as a seal and a home-screen icon, with an AI spark as the tassel

## What is in this repo

1. **Logo and app icon** — `/brand` and `/public/brand`
   - Circular seal (`learnli-seal-logo.png`)
   - App icon (`learnli-app-icon.png`)
   - SVG mark, seal, and icon in the site (`src/components/brand/Logo.tsx`)
2. **Website** — Home, Product, Company, Brand, Brochure
3. **PDF** — `public/learnli-company-product.pdf` (also designed on `/brochure`)

## Run locally

```bash
npm install
npm run pdf      # writes public/learnli-company-product.pdf
npm run pdf:home # writes public/learnli-homepage.pdf (full homepage, screen colors)
npm run dev      # http://127.0.0.1:4317
```

`next.config.ts` sets `allowedDevOrigins: ['127.0.0.1']` so Cursor Preview and browsers that open the app as `127.0.0.1` (not `localhost`) can load `/_next` assets. Without that, Next.js 16 closes those requests and the preview shows `ERR_EMPTY_RESPONSE`.

```bash
npm run build
npm start
```

## Pages

| Path | Contents |
| --- | --- |
| `/` | Story, product screenshots, Ask Li live demo, dashboards |
| `/product` | Same product story plus modes, tests, voice, image upload |
| `/company` | Mission and who the product is for |
| `/brand` | Logo, app icon, colour, type |
| `/brochure` | Printable four-page brochure and PDF download |

## Regenerating the PDF

```bash
npm run pdf       # printable brochure → public/learnli-company-product.pdf
npm run pdf:home  # full homepage snapshot → public/learnli-homepage.pdf
```

The header **Download PDF** button serves the homepage snapshot. The Brochure page still downloads the A4 company/product PDF. Generators use Chrome (`puppeteer-core`). If a dev server is already running on port 4317 they reuse it.
