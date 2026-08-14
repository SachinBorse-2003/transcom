import { Link } from 'react-router-dom'
import Icon from './Icon'
import Logo from './Logo'
import { company, credentials, divisions, services } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-navy-990 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-32 h-[420px] w-[420px] rounded-full bg-navy-700/30 blur-[120px]"
      />

      {/* Credentials strip */}
      <div className="relative border-b border-white/10">
        <div className="container-x grid grid-cols-2 gap-px py-10 sm:grid-cols-3 lg:grid-cols-6">
          {credentials.map((c) => (
            <div key={c.label} className="px-2 text-center lg:text-left">
              <p className="font-display text-[15px] font-semibold text-white">{c.label}</p>
              <p className="mt-1 text-[12px] text-white/45">{c.sub}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative container-x grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:py-20">
        <div>
          <Logo tone="light" />
          <p className="mt-6 max-w-sm text-[14.5px] leading-relaxed text-white/60">
            A Dubai general trading house moving energy, industrial and food commodities between verified
            producers and buyers in more than twenty-five markets.
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

        <div>
          <h3 className="font-display text-[11px] font-semibold tracking-[0.2em] text-gold-400 uppercase">
            Divisions
          </h3>
          <ul className="mt-6 space-y-3">
            {divisions.slice(0, 6).map((d) => (
              <li key={d.slug}>
                <Link
                  to={`/divisions/${d.slug}`}
                  className="text-[14px] text-white/60 transition hover:text-white"
                >
                  {d.short}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/divisions"
                className="inline-flex items-center gap-1.5 text-[14px] font-medium text-gold-400 transition hover:text-gold-300"
              >
                View all ten
                <Icon name="arrowRight" className="h-3.5 w-3.5" />
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-[11px] font-semibold tracking-[0.2em] text-gold-400 uppercase">
            Company
          </h3>
          <ul className="mt-6 space-y-3">
            {[
              { label: 'About us', to: '/about' },
              { label: 'Services', to: '/services' },
              { label: 'Divisions', to: '/divisions' },
              { label: 'Contact', to: '/contact' },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-[14px] text-white/60 transition hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="mt-9 font-display text-[11px] font-semibold tracking-[0.2em] text-gold-400 uppercase">
            Capabilities
          </h3>
          <ul className="mt-6 space-y-3">
            {services.slice(0, 3).map((s) => (
              <li key={s.title} className="text-[14px] text-white/60">
                {s.title}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-[11px] font-semibold tracking-[0.2em] text-gold-400 uppercase">
            Get in touch
          </h3>
          <ul className="mt-6 space-y-5 text-[14px] text-white/60">
            <li className="flex gap-3.5">
              <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
              <span>
                {company.address.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </li>
            <li>
              <a href={`tel:${company.phoneHref}`} className="flex gap-3.5 transition hover:text-white">
                <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                <span>{company.phone}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="flex gap-3.5 transition hover:text-white">
                <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                <span className="min-w-0 break-all">{company.email}</span>
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex gap-3.5 transition hover:text-white"
              >
                <Icon name="whatsapp" className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                <span>WhatsApp the trading desk</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-[12.5px] text-white/40 sm:flex-row">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <p className="text-center sm:text-right">{company.licence}</p>
        </div>
      </div>
    </footer>
  )
}
