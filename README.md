# TRANSCOM GENERAL TRADING L.L.C — Website

Marketing site for a Dubai-based general trading house, built with **Vite + React + Tailwind CSS v4**,
**React Router** and **three.js**. Design language takes its cues from UAE trading-house sites such as
alibulehya.com and fonoenergy.ae: a deep marine-navy and desert-gold palette, full-bleed photography,
a sector-led division grid and quote-request calls to action throughout.

The Global Reach section renders an interactive 3D globe — real continents as a dot matrix, with
animated trade lanes running from Dubai to twelve destination ports.

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # serve the built site locally
npm run lint     # oxlint
```

Node 20+ recommended (built and tested on Node 22).

---

## What is real, and what still needs confirming

Everything a visitor reads lives in **`src/data/site.js`**.

### Taken from the DED trade licence — real

| Detail | Value |
| --- | --- |
| Legal name | TRANSCOM GENERAL TRADING L.L.C |
| Legal type | Limited Liability Company — Single Owner (LLC-SO) |
| Licensing authority | Dubai Department of Economic Development |
| Licensed activity | General Trading (active) |
| Main licence no. | 1256293 |
| Register no. | 2120646 |
| Dubai Chamber (DCCI) no. | 495656 |
| Issued / expires | 31 October 2023 / 30 October 2027 |
| Owner & manager | Ikram Ul Haq Abdur Razaq — 100% shareholding |
| Mobile / WhatsApp | +971 56 804 4756 |
| Email | transcomgeneraltrading@gmail.com |
| P.O. Box | 346-485, Dubai, U.A.E. |

These drive the footer bottom bar, the About compliance section and every contact point on the site.

### ⚠️ Still placeholder or editorial — confirm before publishing

| Item | Status | Where |
| --- | --- | --- |
| `address.lines` | No street address on the licence — only the P.O. Box is shown. Add the office and update `address.short` and `address.mapQuery`. | Header, footer, contact, map |
| `hours` | Sun–Thu 09:00–18:00 assumed | Top bar, contact |
| `social` | All `#` — point at real profiles or delete the entries | Header, footer |
| `stats` | 9 divisions is real; 25+ markets, 600+ lines and 98% on-time are estimates | Home, About |
| About timeline | Only the 2023 entry comes from the licence; 2024–2026 are an editorial narrative | About |
| Division copy | Product ranges and supplier claims (HALAL certificates, HACCP plants, tier-one modules, terminal access) are written to be typical of the trade — check each against what TRANSCOM actually offers | Division pages |
| Domain | `https://www.transcomgt.ae` is assumed in `index.html`, `public/robots.txt` and `public/sitemap.xml` | SEO files |

**Testimonials removed.** An earlier draft carried three invented client quotes. Publishing fabricated
testimonials on a live company site is a real legal and reputational risk, so the section and its data
are gone. Add a testimonials section back when you have quotes you have permission to use.

**Certifications deliberately omitted.** An earlier draft displayed ISO 9001:2015, HACCP, HALAL and
Dubai Municipality approval. Those were invented, and publishing unheld certifications on a live
trading site invites both lost deals and legal trouble — the strip now shows only licence facts that
can be verified with the DED. Add certifications back once the certificates exist.

Nothing hard-codes contact details; every component reads from `src/data/site.js`.

---

## Structure

```
src/
  data/site.js          All copy: company, divisions, services, markets, stats, nav
  lib/image.js          Unsplash URL + srcset helper (swap for local images here)
  lib/usePageMeta.js    Per-route <title> and meta description
  components/           Header, Footer, Layout, Photo, Reveal, Globe, Icon, ui primitives
  sections/             Page sections (hero, divisions, capabilities, globe, process, CTA)
  pages/                Home, About, Divisions, DivisionDetail, Services, Contact, NotFound
```

### Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/about` | About / story / milestones / compliance |
| `/divisions` | All nine divisions, filterable by sector |
| `/divisions/:slug` | Division detail — product range, checks, enquiry rail |
| `/services` | Sourcing, logistics, inspection, finance, terms |
| `/contact` | Contact cards, enquiry form, map |
| `*` | 404 |

### Adding or editing a division

Append an object to the `divisions` array in `src/data/site.js`. The navigation dropdown, footer
list, home grid, `/divisions` filter and the `/divisions/:slug` page are all generated from it — no
component changes needed.

```js
{
  slug: 'packaging-materials',
  group: 'industrial',              // 'energy' | 'industrial' | 'food'
  name: 'Packaging Materials',
  short: 'Packaging',               // used in nav and cards
  tagline: 'One-line summary shown on the card.',
  image: 'photo-xxxxxxxxxxxxx',     // Unsplash id, or '/images/your-photo.jpg'
  blurb: 'One or two sentences for the division page.',
  products: ['…', '…'],
  highlights: [{ title: '…', text: '…' }],
}
```

Remember to re-run the sitemap generator (or add the URL by hand) after adding a division.

---

## Page structure

The site is deliberately short. The home page is five sections:

1. **Hero** — one statement, two calls to action, three figures along the bottom.
2. **Divisions** — all nine in a single grid.
3. **Capabilities** — one list, one line per service.
4. **Global reach** — the 3D trade-route globe.
5. **Quote CTA.**

There is no carousel, stats band, marquee, testimonial slider or process timeline on the home page —
those were removed to keep it scannable. The process timeline and commercial terms live on
`/services`, and the story, milestones and licence details live on `/about`.

## Photography

Images are served from Unsplash via `src/lib/image.js` so the repo stays dependency-light. To use
TRANSCOM's own photography, drop files into `public/images/` and set the `image` field to a path —
`photo()` passes through anything starting with `/` or `http`. `Photo` renders a navy gradient
underlay, so a slow or failed image still looks deliberate rather than broken.

## The contact form

`src/pages/Contact.jsx` validates client-side and then composes a pre-filled `mailto:` so enquiries
reach the desk without a backend. To capture submissions server-side, replace the `window.location`
line in `submit()` with a POST to Formspree, Web3Forms, or your own endpoint — the comment in the
file marks the spot.

## Deploying

The build output in `dist/` is static and works on any host. Because routing is client-side, the
host must serve `index.html` for unknown paths:

- **Netlify** — `public/_redirects` is already in place.
- **Vercel** — `vercel.json` is already in place.
- **Apache / cPanel** — add an `.htaccess` with a rewrite to `index.html`.
- **Nginx** — `try_files $uri $uri/ /index.html;`

## Accessibility & performance notes

- Skip-to-content link, keyboard-visible focus rings, labelled icon buttons, breadcrumb landmarks.
- All motion (hero Ken Burns, scroll reveals, counters) is disabled under
  `prefers-reduced-motion: reduce`.
- Hero images ship a `srcset` so phones don't download the 1920px asset; below-fold photography is
  lazy-loaded.

## The 3D globe

`src/components/Globe.jsx` draws the trade-route globe with three.js.

- **Continents are real.** `src/data/landPoints.js` holds ~2,250 land coordinates, produced by
  sampling a world GeoJSON on an equal-area lat/lon grid. Regenerate with
  `node scripts/sample-land.mjs` (adjust `LAT_STEP` for a denser or sparser dot matrix).
- **Routes come from data.** `tradeHub` and `tradeRoutes` in `src/data/site.js` drive the arcs,
  markers and travelling pulses — add a port there and it appears on the globe.
- **It stays out of the initial download.** three.js is ~140 KB gzipped and is lazy-loaded via
  `React.lazy`, so it is only fetched when a visitor reaches that section. The main bundle is
  ~100 KB gzipped.
- **It degrades.** Without WebGL the component falls back to a CSS sphere; under
  `prefers-reduced-motion` the rotation and pulses stop. Drag to spin on both mouse and touch.
