import { Link } from 'react-router-dom'
import Icon from './Icon'
import Photo from './Photo'
import { Eyebrow } from './ui'

export default function PageHero({ eyebrow, title, lead, image, crumbs = [] }) {
  return (
    <section className="relative isolate flex min-h-[clamp(420px,52vh,560px)] items-end overflow-hidden bg-navy-950 pt-[124px] pb-14 lg:pt-[150px] lg:pb-20">
      <Photo
        id={image}
        alt=""
        width={1920}
        loading="eager"
        sizes="100vw"
        className="absolute inset-0 -z-10 h-full w-full"
        imgClassName="scale-105 opacity-45"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-990 via-navy-990/85 to-navy-950/40"
      />

      <div className="container-x">
        <nav aria-label="Breadcrumb" className="mb-7 flex flex-wrap items-center gap-2 text-[12.5px] text-white/45">
          <Link to="/" className="transition hover:text-gold-400">
            Home
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-2">
              <Icon name="chevronDown" className="h-3 w-3 -rotate-90" />
              {c.to ? (
                <Link to={c.to} className="transition hover:text-gold-400">
                  {c.label}
                </Link>
              ) : (
                <span className="text-white/80">{c.label}</span>
              )}
            </span>
          ))}
        </nav>

        {eyebrow && <Eyebrow tone="light">{eyebrow}</Eyebrow>}
        <h1 className="mt-5 max-w-4xl text-[clamp(2.1rem,5vw,3.5rem)] leading-[1.06] font-semibold tracking-[-0.025em] text-white">
          {title}
        </h1>
        {lead && <p className="mt-6 max-w-2xl text-[15.5px] leading-relaxed text-white/65 sm:text-[17px]">{lead}</p>}
      </div>
    </section>
  )
}
