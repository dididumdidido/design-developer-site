# Design Developer — design-developer.com

Next.js 16 · React 19 · Tailwind CSS v4 · shadcn/ui · Fraunces + Manrope (self-hosted)

## Edit the site
All copy and settings live in `lib/content.ts`. Blocks that need real content stay hidden until you fill them in:

| Setting | What it does |
|---|---|
| `site.calendarEmbedUrl` | Calendly link (set). Every "Book a Strategy Call" button jumps straight to it |
| `offer.goLiveDays` | e.g. `14` adds "Live in 14 days" to the hero and How it works |
| `offer.priceAnchor` | Price guide in the FAQ and comparison table |
| `offer.resultsTimeline` | "90 days" in How it works and the FAQ |
| `testimonials` | Named client quotes (name, business, city, photo) |
| `caseStudies` | Real client results (no invented numbers) |
| `awardsPhotos` | Two Comma Club award photos, shown in About |
| `roles[].sample` | Swap "Example" samples for real anonymized output as you get it |

Images go in `public/images/`.

## Run locally
```bash
npm install
npm run dev
```

## Included
- `app/robots.ts`, `app/sitemap.ts`, `app/icon.png`, `app/opengraph-image.png` (share image), `app/not-found.tsx` (branded 404), `app/privacy/page.tsx`
