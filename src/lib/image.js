/**
 * Photography is served from Unsplash so the project stays dependency-light.
 * To use your own photography, drop files in /public/images and swap the
 * `image` field in src/data/site.js for a path like "/images/petroleum.jpg" —
 * `photo()` passes through anything that already looks like a URL or path.
 */
const BASE = 'https://images.unsplash.com/'

export function photo(id, { w = 1200, q = 72, ar } = {}) {
  if (!id) return ''
  if (id.startsWith('http') || id.startsWith('/')) return id
  const params = new URLSearchParams({
    w: String(w),
    q: String(q),
    auto: 'format',
    fit: 'crop',
  })
  if (ar) params.set('ar', ar)
  return `${BASE}${id}?${params.toString()}`
}

/** Matching srcset so large hero images don't ship full width to phones. */
export function photoSrcSet(id, widths = [640, 960, 1400, 1920], q = 72) {
  if (!id || id.startsWith('http') || id.startsWith('/')) return undefined
  return widths.map((w) => `${photo(id, { w, q })} ${w}w`).join(', ')
}
