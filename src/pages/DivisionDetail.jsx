import { Link, Navigate, useParams } from 'react-router-dom'
import Icon from '../components/Icon'
import PageHero from '../components/PageHero'
import Photo from '../components/Photo'
import Reveal from '../components/Reveal'
import { Button, SectionHeading } from '../components/ui'
import CtaBanner from '../sections/CtaBanner'
import { company, divisionBySlug, divisions, groups } from '../data/site'
import usePageMeta from '../lib/usePageMeta'

export default function DivisionDetail() {
  const { slug } = useParams()
  const division = divisionBySlug(slug)

  usePageMeta({
    title: division
      ? `${division.name} — TRANSCOM General Trading L.L.C`
      : 'Division not found — TRANSCOM',
    description: division?.blurb,
  })

  if (!division) return <Navigate to="/divisions" replace />

  const group = groups.find((g) => g.id === division.group)
  const others = divisions.filter((d) => d.slug !== division.slug && d.group === division.group).slice(0, 3)
  const fallbackOthers = divisions.filter((d) => d.slug !== division.slug).slice(0, 3)
  const related = others.length ? others : fallbackOthers

  return (
    <>
      <PageHero
        eyebrow={group?.name}
        title={division.name}
        lead={division.tagline}
        image={division.image}
        crumbs={[{ label: 'Divisions', to: '/divisions' }, { label: division.short }]}
      />

      {/* Overview */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <Reveal>
            <SectionHeading eyebrow="Overview" title={`About ${division.short.toLowerCase()}`} />
            <p className="mt-7 text-[15.5px] leading-relaxed text-navy-900/70">{division.blurb}</p>

            <div className="mt-10 grid gap-px bg-navy-950/8 sm:grid-cols-3">
              {division.highlights.map((h) => (
                <div key={h.title} className="bg-white py-6 sm:px-6 sm:first:pl-0">
                  <h3 className="font-display text-[14.5px] font-semibold">{h.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-navy-900/60">{h.text}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-12 font-display text-[19px] font-semibold">What we supply</h3>
            <p className="mt-2 text-[14.5px] text-navy-900/60">
              A working list — if you need something not shown, just ask.
            </p>

            <ul className="mt-7 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
              {division.products.map((p) => (
                <li key={p} className="flex items-start gap-3 border-b border-navy-950/8 pb-3.5">
                  <Icon name="check" className="mt-1 h-3.5 w-3.5 shrink-0 text-gold-600" strokeWidth={2.4} />
                  <span className="text-[14.5px] leading-snug text-navy-900/80">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Sticky enquiry rail */}
          <Reveal delay={120}>
            <div className="lg:sticky lg:top-32">
              <Photo
                id={division.image}
                alt={division.name}
                width={900}
                sizes="(min-width: 1024px) 36vw, 100vw"
                className="aspect-[4/3] w-full"
              />

              <div className="bg-navy-950 p-8 text-white">
                <h3 className="font-display text-[19px] leading-snug font-semibold">
                  Enquire about {division.short.toLowerCase()}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-white/60">
                  Tell us the product, quantity and destination. Price back in 24 hours.
                </p>

                <div className="mt-7 space-y-4 border-t border-white/12 pt-7">
                  <a
                    href={`tel:${company.phoneHref}`}
                    className="group flex items-center gap-3.5 text-[14.5px] text-white/75 transition hover:text-white"
                  >
                    <Icon name="phone" className="h-4 w-4 text-gold-500" />
                    {company.phone}
                  </a>
                  <a
                    href={`mailto:${company.email}?subject=Enquiry — ${encodeURIComponent(division.name)}`}
                    className="group flex items-center gap-3.5 text-[14.5px] text-white/75 transition hover:text-white"
                  >
                    <Icon name="mail" className="h-4 w-4 text-gold-500" />
                    {company.email}
                  </a>
                  <a
                    href={`https://wa.me/${company.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3.5 text-[14.5px] text-white/75 transition hover:text-white"
                  >
                    <Icon name="whatsapp" className="h-4 w-4 text-gold-500" />
                    WhatsApp the trading desk
                  </a>
                </div>

                <Button to="/contact" className="mt-8 w-full">
                  Request a quotation
                </Button>
              </div>

              <div className="border border-t-0 border-navy-950/10 p-7">
                <p className="font-display text-[11px] font-semibold tracking-[0.2em] text-gold-600 uppercase">
                  Also in {group?.name}
                </p>
                <ul className="mt-4 space-y-3">
                  {related.map((d) => (
                    <li key={d.slug}>
                      <Link
                        to={`/divisions/${d.slug}`}
                        className="group flex items-center justify-between gap-4 text-[14.5px] text-navy-900/75 transition hover:text-navy-950"
                      >
                        {d.short}
                        <Icon
                          name="arrowRight"
                          className="h-4 w-4 shrink-0 text-navy-900/30 transition-all group-hover:translate-x-1 group-hover:text-gold-600"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
