import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo'
import Icon from './Icon'
import { company, divisions, groups, navigation } from '../data/site'
import { photo } from '../lib/image'

function TopBar() {
  return (
    <div className="hidden bg-navy-990 text-white/70 lg:block">
      <div className="container-x flex h-10 items-center justify-between text-[12.5px]">
        <div className="flex items-center gap-7">
          <a href={`tel:${company.phoneHref}`} className="flex items-center gap-2 transition hover:text-gold-400">
            <Icon name="phone" className="h-3.5 w-3.5" />
            {company.phone}
          </a>
          <a href={`mailto:${company.email}`} className="flex items-center gap-2 transition hover:text-gold-400">
            <Icon name="mail" className="h-3.5 w-3.5" />
            {company.email}
          </a>
          <span className="hidden items-center gap-2 xl:flex">
            <Icon name="pin" className="h-3.5 w-3.5" />
            {company.address.short}
          </span>
        </div>
        <div className="flex items-center gap-5">
          <span className="text-white/45">{company.hours}</span>
          <span className="h-3 w-px bg-white/15" aria-hidden="true" />
          <div className="flex items-center gap-3.5">
            {company.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-gold-400"
              >
                <Icon name={s.icon} className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function DivisionsMenu({ onNavigate }) {
  return (
    <div className="grid w-[720px] grid-cols-[1fr_240px] overflow-hidden bg-white shadow-lift">
      <div className="grid grid-cols-3 gap-x-6 gap-y-7 p-7">
        {groups.map((group) => (
          <div key={group.id}>
            <p className="font-display text-[10px] font-semibold tracking-[0.2em] text-gold-600 uppercase">
              {group.name}
            </p>
            <ul className="mt-3.5 space-y-2.5">
              {divisions
                .filter((d) => d.group === group.id)
                .map((d) => (
                  <li key={d.slug}>
                    <Link
                      to={`/divisions/${d.slug}`}
                      onClick={onNavigate}
                      className="block text-[13.5px] leading-snug text-navy-900/75 transition hover:text-gold-600"
                    >
                      {d.short}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
      <Link
        to="/divisions"
        onClick={onNavigate}
        className="group relative flex flex-col justify-end overflow-hidden bg-navy-950 p-6 text-white"
      >
        <img
          src={photo('photo-1494412574643-ff11b0a5c1c3', { w: 480 })}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-35 transition-transform duration-[1200ms] group-hover:scale-110"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-navy-990 via-navy-950/70 to-transparent" />
        <span className="relative">
          <span className="font-display text-lg font-semibold">All ten divisions</span>
          <span className="mt-1.5 block text-[13px] text-white/60">
            One counterparty across energy, industry and food.
          </span>
          <span className="mt-4 inline-flex items-center gap-2 font-display text-[12px] font-semibold tracking-widest text-gold-400 uppercase">
            Browse
            <Icon name="arrowRight" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </span>
        </span>
      </Link>
    </div>
  )
}

export default function Header() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const isHome = pathname === '/'
  const floating = isHome && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setExpanded(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const linkTone = floating ? 'text-white/85 hover:text-white' : 'text-navy-900/80 hover:text-navy-950'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        floating ? 'bg-transparent' : 'bg-white shadow-[0_1px_0_rgba(8,36,63,0.08)]'
      }`}
    >
      <div className={floating ? 'border-b border-white/10' : ''}>
        <TopBar />
      </div>

      <div className="container-x flex h-[74px] items-center justify-between lg:h-[86px]">
        <Logo tone={floating ? 'light' : 'dark'} />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navigation.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-1.5 px-4 py-3 font-display text-[13.5px] font-medium transition ${linkTone} ${
                      isActive ? (floating ? 'text-white' : 'text-navy-950') : ''
                    }`
                  }
                >
                  {item.label}
                  <Icon name="chevronDown" className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </NavLink>
                <div className="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                  <DivisionsMenu />
                </div>
              </div>
            ) : (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `relative px-4 py-3 font-display text-[13.5px] font-medium transition ${linkTone} ${
                    isActive
                      ? `${floating ? 'text-white' : 'text-navy-950'} after:absolute after:inset-x-4 after:bottom-1.5 after:h-0.5 after:bg-gold-500`
                      : ''
                  }`
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className={`hidden items-center gap-2 px-6 py-3 font-display text-[13px] font-semibold transition-all duration-300 xl:inline-flex ${
              floating
                ? 'bg-white/10 text-white ring-1 ring-white/25 backdrop-blur-sm hover:bg-gold-500 hover:text-navy-950 hover:ring-gold-500'
                : 'bg-navy-950 text-white hover:bg-gold-500 hover:text-navy-950'
            }`}
          >
            Request a quote
            <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2} />
          </Link>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className={`grid h-11 w-11 place-items-center transition lg:hidden ${
              floating ? 'text-white ring-1 ring-white/30' : 'text-navy-950 ring-1 ring-navy-950/15'
            }`}
          >
            <Icon name="menu" className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-navy-990/70 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          className={`absolute inset-y-0 right-0 flex w-[min(88vw,400px)] flex-col bg-white transition-transform duration-500 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex h-[74px] shrink-0 items-center justify-between border-b border-navy-950/10 px-5">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid h-10 w-10 place-items-center text-navy-950 ring-1 ring-navy-950/15"
            >
              <Icon name="close" className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-5 py-6" aria-label="Mobile">
            <ul className="space-y-1">
              {navigation.map((item) => (
                <li key={item.label} className="border-b border-navy-950/8">
                  {item.children ? (
                    <>
                      <div className="flex items-center justify-between">
                        <Link to={item.to} className="block py-4 font-display text-[17px] font-semibold">
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setExpanded((v) => !v)}
                          aria-label="Toggle divisions"
                          aria-expanded={expanded}
                          className="grid h-9 w-9 place-items-center text-navy-900/60"
                        >
                          <Icon name={expanded ? 'minus' : 'plus'} className="h-4 w-4" />
                        </button>
                      </div>
                      <div className={`grid transition-all duration-400 ${expanded ? 'grid-rows-[1fr] pb-4' : 'grid-rows-[0fr]'}`}>
                        <ul className="overflow-hidden">
                          {item.children.map((child) => (
                            <li key={child.to}>
                              <Link
                                to={child.to}
                                className="block border-l border-navy-950/10 py-2.5 pl-4 text-[14.5px] text-navy-900/70"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link to={item.to} className="block py-4 font-display text-[17px] font-semibold">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="mt-8 flex items-center justify-center gap-2 bg-gold-500 py-4 font-display text-[13px] font-semibold text-navy-950"
            >
              Request a quote
              <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2} />
            </Link>

            <div className="mt-8 space-y-3 text-[14px] text-navy-900/70">
              <a href={`tel:${company.phoneHref}`} className="flex items-center gap-3">
                <Icon name="phone" className="h-4 w-4 text-gold-600" />
                {company.phone}
              </a>
              <a href={`mailto:${company.email}`} className="flex items-center gap-3">
                <Icon name="mail" className="h-4 w-4 text-gold-600" />
                {company.email}
              </a>
              <p className="flex items-start gap-3">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                <span>{company.address.lines.join(', ')}</span>
              </p>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
