import { Link } from 'react-router-dom'

/**
 * Header lockup, taken from the TRANSCOM brand artwork: "TRANS" in the base
 * colour, "COM" in gold.
 *
 * The full artwork (globe, ribbon, ship) is a key visual, not a UI logo — it
 * turns to mush below about 200px, so it lives in /public/brand and is used for
 * social sharing and print. This wordmark is the part that survives a 44px
 * header, a favicon and a fax.
 */
export default function Logo({ tone = 'dark', className = '' }) {
  const light = tone === 'light'

  return (
    <Link
      to="/"
      className={`group flex items-center ${className}`}
      aria-label="TRANSCOM General Trading L.L.C — home"
    >
      <span className="leading-none">
        <span className="block font-display text-[21px] font-extrabold tracking-[0.13em]">
          <span className={light ? 'text-white' : 'text-navy-950'}>TRANS</span>
          {/* gold-500 is too pale for text on white, so the light surface gets a deeper gold */}
          <span className={light ? 'text-gold-500' : 'text-gold-700'}>COM</span>
        </span>
        <span
          className={`mt-1.5 block font-display text-[8px] font-semibold tracking-[0.28em] ${
            light ? 'text-white/55' : 'text-navy-900/50'
          }`}
        >
          GENERAL TRADING L.L.C
        </span>
      </span>
    </Link>
  )
}
