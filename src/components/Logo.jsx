import { Link } from 'react-router-dom'

/**
 * Lockup: the T-arrow mark plus the wordmark from the brand artwork
 * ("TRANS" in the base colour, "COM" in gold).
 *
 * The mark is one path — a solid block with the "T" knocked out, its crossbar
 * running on into an arrowhead that points right. The counter is a true
 * cut-out, so it picks up whatever sits behind it: gold block on dark surfaces,
 * navy on light ones.
 */
const MARK = 'M0 0h48v48H0z M8 13h22V9l11 10.5L30 26v-3h-5v16h-8V23H8z'

export default function Logo({ tone = 'dark', className = '' }) {
  const light = tone === 'light'

  return (
    <Link
      to="/"
      className={`group flex items-center gap-3 ${className}`}
      aria-label="TRANSCOM General Trading L.L.C — home"
    >
      <svg
        viewBox="0 0 48 48"
        className="h-11 w-11 shrink-0 transition-transform duration-500 group-hover:scale-[1.04]"
        aria-hidden="true"
      >
        <path
          d={MARK}
          fillRule="evenodd"
          clipRule="evenodd"
          fill={light ? 'var(--color-gold-500)' : 'var(--color-navy-950)'}
        />
      </svg>

      <span className="leading-none">
        <span className="block font-display text-[20px] font-extrabold tracking-[0.13em]">
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
