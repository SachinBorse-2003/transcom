import { Link } from 'react-router-dom'
import Icon from './Icon'
import Logo from './Logo'
import { company } from '../data/site'

const pages = [
  { label: 'About', to: '/about' },
  { label: 'Divisions', to: '/divisions' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-990 text-white">
      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1.5fr_1fr_1.3fr]">
        <div>
          <Logo tone="light" />
          <p className="mt-6 max-w-xs text-[14.5px] leading-relaxed text-white/55">
            {company.intro}
          </p>
          <p className="mt-4 font-display text-[12px] tracking-[0.18em] text-gold-500/80 uppercase">
            {company.motto}
          </p>
          <div className="mt-7 flex items-center gap-3">
            {company.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center border border-white/15 text-white/70 transition hover:border-gold-500 hover:bg-gold-500 hover:text-navy-950"
              >
                <Icon name={s.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer">
          <ul className="space-y-3">
            {pages.map((p) => (
              <li key={p.to}>
                <Link to={p.to} className="text-[15px] text-white/60 transition hover:text-white">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="space-y-4 text-[14.5px] text-white/60">
          <li className="flex gap-3.5">
            <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
            <span>{company.address.lines.join(', ')}</span>
          </li>
          <li>
            <a href={`tel:${company.phoneHref}`} className="flex gap-3.5 transition hover:text-white">
              <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
              {company.phone}
            </a>
          </li>
          <li>
            <a href={`mailto:${company.email}`} className="flex gap-3.5 transition hover:text-white">
              <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
              <span className="min-w-0 break-all">{company.email}</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-[12.5px] text-white/40 sm:flex-row">
          <p>
            © {year} {company.name}
          </p>
          <p className="text-center sm:text-right">{company.licence}</p>
        </div>
      </div>
    </footer>
  )
}
