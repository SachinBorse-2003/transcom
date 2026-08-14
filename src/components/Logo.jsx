import { Link } from 'react-router-dom'

export default function Logo({ tone = 'dark', className = '' }) {
  const light = tone === 'light'
  return (
    <Link to="/" className={`group flex items-center gap-3 ${className}`} aria-label="TRANSCOM General Trading — home">
      <span className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden bg-navy-950 transition-transform duration-500 group-hover:scale-[1.04]">
        <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gold-500/15" />
        <svg viewBox="0 0 44 44" className="relative h-11 w-11" aria-hidden="true">
          <path d="M11 14h22v4.4h-8.8V32h-4.4V18.4H11z" fill="var(--color-gold-500)" />
          <rect x="11" y="35" width="9" height="2.6" fill="var(--color-gold-500)" opacity="0.5" />
          <rect x="24" y="35" width="9" height="2.6" fill="var(--color-gold-500)" opacity="0.5" />
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
