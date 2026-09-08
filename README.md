# TRANSCOM GENERAL TRADING L.L.C — Website

Marketing site for a Dubai-based general trading house, built with **Vite + React + Tailwind CSS v4**,
**React Router**. Design language takes its cues from UAE trading-house sites such as
alibulehya.com and fonoenergy.ae: a deep marine-navy and desert-gold palette, full-bleed photography,
a sector-led division grid and quote-request calls to action throughout.

The hero is scroll-driven: a container truck drives left to right across a sticky viewport and drags
the next panel across behind it, so the page changes in step with the delivery.

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
  components/           Header, Footer, Layout, Photo, Reveal, Truck, Icon, ui primitives
  sections/             Page sections (scroll hero, divisions, capabilities, process, CTA)
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

The site is deliberately short — the home page is three sections:

1. **Hero** — a sticky scroll stage: the truck drives across and tows the light "Nine product
   groups" panel in behind it. Drag the truck to scrub it by hand.
2. **Divisions** — all nine in one grid (food first), with the service list folded in as a single line.
3. **Quote CTA.**

No carousel, stats band, marquee, testimonial slider, why-us grid or process timeline. The process
and commercial terms live on `/services`; the story, milestones and licence details on `/about`.
Section counts: home 3, divisions 3, contact 3, about 4, services 4.

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
- All motion (the scroll-driven hero, scroll reveals) is disabled under
  `prefers-reduced-motion: reduce`.
- Hero images ship a `srcset` so phones don't download the 1920px asset; below-fold photography is
  lazy-loaded.

## The scroll hero

`src/sections/HeroDrive.jsx` is a sticky stage roughly two viewports tall. Scroll progress through it
drives four things, all written straight to DOM style properties inside a single `requestAnimationFrame`
so React never re-renders while scrolling:

- the truck's `translateX`, from off-screen left to off-screen right;
- a `clip-path` on the second panel, pinned to the truck's front bumper (`NOSE_RATIO`), so the new page
  appears to be towed in;
- a slight drift and dim on the hero panel as it is covered;
- wheel rotation, and the fade-out of the scroll hint.

`src/components/Truck.jsx` is a plain SVG — no image asset. Its three wheel groups carry the
`truck-wheel` class, which is what the stage spins.

Under `prefers-reduced-motion: reduce` the stage is not rendered at all: the two panels become ordinary
stacked sections with no movement.

## The 3D globe (parked)

`src/components/Globe.jsx` and `src/data/landPoints.js` are the interactive trade-route globe that used
to sit in the hero — real continents as a dot matrix, twenty arcs from Dubai and fifty-seven further
ports. Nothing imports them now, so they are excluded from the build entirely (`three` stays in
`package.json` only for them). Kept in case you want the globe back on another page; delete both files
plus `three` and `scripts/sample-land.mjs` to prune it.


## Tone of voice

Copy is deliberately plain — short sentences, everyday words, no trade jargon where a common word
works ("Finding suppliers", not "Sourcing & Procurement"; "We quote", not "Firm offer issued").
Keep new copy in the same register: say what happens, in the order it happens, in words a buyer
reading English as a second language will follow first time.

## Ordering the product groups

`divisions` in `src/data/site.js` renders in array order everywhere — home grid, `/divisions`, the nav
dropdown and the hero panel list. Food sits first; move an entry in that array to change the order
across the whole site. `groups` controls the sector filter order in the same way.

TRANSCOM does not trade fuel or petroleum products — that division was removed at the client's
instruction, and no copy anywhere should reintroduce it. Note the brand artwork still contains an oil
droplet in the product ribbon; if that matters, the artwork needs regenerating.

## The logo

Two assets, deliberately:

- **`public/brand/transcom-brand.png`** (and a 170 KB `.jpg` for the web) is the full brand artwork —
  globe, product ribbon, container ship, wordmark. It is a *key visual*, not a UI logo: below roughly
  200px wide the globe, ribbon and three product photos collapse into a smudge. It is used for social
  sharing (`og:image`) and appears at full size on the About page, and it is the file to send to
  printers, freight forwarders and exhibition stands.
- **`src/components/Logo.jsx`** is the header and footer lockup, taken from the same artwork: the
  wordmark with "TRANS" in the base colour and "COM" in gold, "GENERAL TRADING L.L.C" beneath. This is
  the part that survives a 44px header, a favicon and a black-and-white fax. `tone="light"` puts
  TRANS in white for dark surfaces; `tone="dark"` uses navy, and swaps gold-500 for gold-700 because
  the lighter gold fails contrast on white.

`public/favicon.svg` carries a gold "T" on navy — the same chevron detail, simplified for 16px.

The artwork's own strapline, "A stronger tomorrow, together", is `company.motto` and appears in the
footer. The strapline "From global markets to your business." is `company.promise`, and the product
list under it is `company.productLine` — both appear in the hero and the footer.

The three sector names are Food, Machinery & Goods and Solar & Electrical.
