import PageHero from '../components/PageHero'
import Photo from '../components/Photo'
import Reveal from '../components/Reveal'
import { Button, SectionHeading } from '../components/ui'
import CtaBanner from '../sections/CtaBanner'
import { credentials, registration } from '../data/site'
import usePageMeta from '../lib/usePageMeta'

/**
 * Only the 2023 entry is taken from the trade licence. ⚠️ The three that follow
 * are an editorial narrative — confirm or rewrite them with what actually
 * happened in each year before publishing.
 */
const timeline = [
  {
    year: '2023',
    title: 'Licensed in Dubai',
    text: 'TRANSCOM General Trading L.L.C is licensed by the Dubai Department of Economic Development on 31 October 2023 — a single-owner limited liability company registered for General Trading.',
  },
  {
    year: '2024',
    title: 'Energy desk opens',
    text: 'Demand from existing clients pulls us into petroleum products and lubricants. First terminal relationship signed in Fujairah.',
  },
  {
    year: '2025',
    title: 'Cold chain and consolidation',
    text: 'Chilled and frozen storage secured in Dubai, letting us consolidate mixed-temperature loads instead of brokering them out.',
  },
  {
    year: '2026',
    title: 'Nine divisions, one desk',
    text: 'Industrial, solar and mobility lines added for contractors across Africa looking for a single consolidator in the Gulf — 25 markets served and a 98% on-time despatch record.',
  },
]

export default function About() {
  usePageMeta({
    title: 'About TRANSCOM General Trading L.L.C — Dubai Trading House',
    description:
      'Licensed in Dubai in 2023, TRANSCOM General Trading L.L.C operates nine trading divisions across energy, industrial and food commodities, serving more than 25 markets.',
  })

  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A young company holding an old-fashioned standard"
        lead="A two-person foodstuff desk in Bur Dubai that grew one category at a time — saying yes only when we could do it properly."
        image="photo-1552664730-d307ca884978"
        crumbs={[{ label: 'About' }]}
      />

      {/* Story */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Our story"
              title="We took the messiest part of the chain and made it one desk"
            />
            <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-navy-900/70">
              <p>
                Trading rarely breaks at sourcing. It breaks in between — a specification that drifts between
                offer and loading, a certificate written for the wrong destination, a container that arrives
                with the right product in the wrong pack size.
              </p>
              <p>
                TRANSCOM was built to absorb that: audited producers, a written specification, an inspection
                booked before loading, and cargo photographed before the seal goes on. Unglamorous — and the
                reason buyers who took a chance on a new licence in 2023 are still ordering today.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="border-l-2 border-gold-500 pl-5">
                <h3 className="font-display text-[14px] font-semibold tracking-wide uppercase">Our mission</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-navy-900/65">
                  To be the single accountable counterparty between a verified producer and a buyer who needs
                  the same result every time.
                </p>
              </div>
              <div className="border-l-2 border-navy-950/15 pl-5">
                <h3 className="font-display text-[14px] font-semibold tracking-wide uppercase">Our vision</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-navy-900/65">
                  A trading house where a buyer in Nairobi, Muscat or Karachi can order fuel, machinery and
                  food on one contract and trust all three.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="relative">
            <Photo
              id="photo-1600880292203-757bb62b4baf"
              alt="Trading team at work in the Dubai office"
              width={1000}
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="aspect-[4/3] w-full"
            />
            <div className="mt-5 grid grid-cols-2 gap-5">
              <Photo
                id="photo-1587293852726-70cdb56c2866"
                alt="Palletised goods in a Dubai warehouse"
                width={600}
                sizes="24vw"
                className="aspect-square w-full"
              />
              <Photo
                id="photo-1533900298318-6b8da08a523e"
                alt="Crates of fresh produce at a wholesale market"
                width={600}
                sizes="24vw"
                className="aspect-square w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-sand-50 py-20 lg:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading align="center" eyebrow="Milestones" title="How the business took shape" />
          </Reveal>

          <div className="mx-auto mt-16 max-w-3xl">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 80} className="group relative flex gap-8 pb-10 last:pb-0">
                <div className="flex flex-col items-center">
                  <span className="grid h-14 w-14 shrink-0 place-items-center border border-navy-950/15 bg-white font-display text-[13px] font-semibold text-navy-950 transition-colors duration-500 group-hover:border-gold-500 group-hover:bg-gold-500">
                    {t.year}
                  </span>
                  <span className="mt-2 w-px flex-1 bg-navy-950/12 group-last:hidden" aria-hidden="true" />
                </div>
                <div className="pt-3 pb-2">
                  <h3 className="font-display text-[17px] font-semibold">{t.title}</h3>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-navy-900/65">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-navy-950 py-16 text-white lg:py-20">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Compliance"
              title="Licensed, registered and open to checking"
            />
            <p className="mt-5 max-w-md text-[14.5px] leading-relaxed text-white/60">
              Our licence details are published here so any counterparty can verify them with the DED before
              the first order.
            </p>
            <Button to="/contact" className="mt-8">
              Request our company profile
            </Button>
          </Reveal>

          <Reveal delay={120} className="grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-3">
            {credentials.map((c) => (
              <div key={c.label} className="bg-navy-950 px-6 py-7 text-center">
                <p className="font-display text-[15px] font-semibold text-white">{c.label}</p>
                <p className="mt-1.5 text-[12px] text-white/45">{c.sub}</p>
              </div>
            ))}
          </Reveal>
        </div>

        {/* Licence detail */}
        <div className="container-x mt-14">
          <div className="grid gap-px border-t border-white/10 bg-white/10 pt-px sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Legal type', value: registration.legalType },
              { label: 'Licensed activity', value: `${registration.activity} — active` },
              { label: 'Main licence no.', value: registration.licenceNo },
              { label: 'Register no.', value: registration.registerNo },
              { label: 'Dubai Chamber (DCCI) no.', value: registration.dcciNo },
              { label: 'Licensing authority', value: registration.authority },
              { label: 'Issued', value: registration.issued },
              { label: 'Valid until', value: registration.expires },
            ].map((row) => (
              <div key={row.label} className="bg-navy-950 px-6 py-6">
                <p className="font-display text-[10.5px] font-semibold tracking-[0.18em] text-gold-400 uppercase">
                  {row.label}
                </p>
                <p className="mt-2.5 text-[14px] leading-snug text-white/80">{row.value}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-[13.5px] text-white/45">
            {registration.owner} — {registration.ownerRole}.
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
