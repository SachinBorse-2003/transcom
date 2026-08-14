import { Link } from 'react-router-dom'
import Icon from './Icon'

/* ── Buttons ───────────────────────────────────────────────────────────────── */

const base =
  'group inline-flex items-center justify-center gap-2.5 font-display text-[13px] font-semibold tracking-wide transition-all duration-300 disabled:opacity-60'

const variants = {
  primary: 'bg-gold-500 px-7 py-3.5 text-navy-950 hover:bg-gold-400 hover:shadow-[0_16px_32px_-12px_rgba(217,164,65,0.7)]',
  navy: 'bg-navy-950 px-7 py-3.5 text-white hover:bg-navy-800',
  outline:
    'border border-navy-950/20 px-7 py-3.5 text-navy-950 hover:border-navy-950 hover:bg-navy-950 hover:text-white',
  ghostLight:
    'border border-white/30 px-7 py-3.5 text-white backdrop-blur-sm hover:border-white hover:bg-white hover:text-navy-950',
  text: 'text-navy-950 hover:text-gold-600',
}

export function Button({ to, href, variant = 'primary', arrow = true, className = '', children, ...rest }) {
  const cls = `${base} ${variants[variant]} ${className}`
  const inner = (
    <>
      {children}
      {arrow && (
        <Icon
          name="arrowRight"
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          strokeWidth={2}
        />
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {inner}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {inner}
      </a>
    )
  }
  return (
    <button type="button" className={cls} {...rest}>
      {inner}
    </button>
  )
}

/* ── Section heading ───────────────────────────────────────────────────────── */

export function Eyebrow({ children, tone = 'gold', className = '' }) {
  const tones = {
    gold: 'text-gold-600',
    light: 'text-gold-400',
    navy: 'text-navy-500',
  }
  return (
    <span className={`eyebrow ${tones[tone]} ${className}`}>
      <span className="h-px w-8 bg-current opacity-60" aria-hidden="true" />
      {children}
    </span>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  tone = 'dark',
  className = '',
  children,
}) {
  const isLight = tone === 'light'
  return (
    <div
      className={`${align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}
    >
      {eyebrow && <Eyebrow tone={isLight ? 'light' : 'gold'}>{eyebrow}</Eyebrow>}
      {title && (
        <h2
          className={`mt-5 text-3xl leading-[1.12] font-semibold tracking-[-0.02em] sm:text-4xl lg:text-[2.75rem] ${
            isLight ? 'text-white' : ''
          }`}
        >
          {title}
        </h2>
      )}
      {lead && (
        <p className={`mt-5 text-[15px] leading-relaxed sm:text-base ${isLight ? 'text-navy-100/80' : 'text-navy-900/70'}`}>
          {lead}
        </p>
      )}
      {children}
    </div>
  )
}

/* ── Misc ──────────────────────────────────────────────────────────────────── */

export function Rule({ className = '' }) {
  return <span className={`block h-px w-full bg-navy-950/10 ${className}`} aria-hidden="true" />
}
