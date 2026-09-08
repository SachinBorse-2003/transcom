import { Link } from 'react-router-dom'

/**
 * Mark: a "T" whose crossbar runs on into an arrow, with two motion lines —
 * a trading house that moves things forward.
 */
export default function Logo({ tone = 'dark', className = '' }) {
  const light = tone === 'light'

  return (
    <Link to="/" className={`group flex items-center gap-3 ${className}`} aria-label="TRANSCOM General Trading — home">
      <span className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden bg-navy-950 transition-transform duration-500 group-hover:scale-[1.04]">
        <svg viewBox="0 0 48 48" className="h-11 w-11" aria-hidden="true">
          {/* T — crossbar and stem */}
          <rect x="9" y="12" width="22" height="7" fill="var(--color-gold-500)" />
          <rect x="16.5" y="19" width="7" height="19" fill="var(--color-gold-500)" />
          {/* arrowhead: the T moving forward */}
          <path d="M31 8l10 7.5L31 23z" fill="var(--color-gold-500)" opacity="0.9" />
        </svg>
      </span>

      <span className="leading-none">
        <span
          className={`block font-display text-[19px] font-extrabold tracking-[0.14em] ${
            light ? 'text-white' : 'text-navy-950'
          }`}
        >
          TRANSCOM
        </span>
        <span
          className={`mt-1 block font-display text-[8.5px] font-semibold tracking-[0.3em] ${
            light ? 'text-white/60' : 'text-navy-900/50'
          }`}
        >
          GENERAL TRADING L.L.C
        </span>
      </span>
    </Link>
  )
}
