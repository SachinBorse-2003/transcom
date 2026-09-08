import PageHero from '../components/PageHero'
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
    text: 'Licensed by the Dubai Department of Economic Development on 31 October 2023 as a single-owner company for General Trading.',
  },
  {
    year: '2024',
    title: 'Machinery added',
    text: 'Existing customers ask us for machinery and vehicle parts, so we add them. First warehouse taken in Dubai.',
  },
  {
    year: '2025',
    title: 'Cold chain and consolidation',
    text: 'We take chilled and frozen storage in Dubai, so mixed loads can be packed by us instead of a third party.',
  },
  {
    year: '2026',
    title: 'Nine product groups',
    text: 'Furniture, solar and electrical goods added for buyers who want one supplier in the Gulf. 25 countries served.',
  },
]

export default function About() {
  usePageMeta({
    title: 'About TRANSCOM General Trading L.L.C — Dubai Trading House',
    description:
      'Licensed in Dubai in 2023. TRANSCOM General Trading L.L.C supplies food, machinery, electronics and furniture to buyers in more than 25 countries.',
  })

  return (
    <>
      <PageHero
        eyebrow="About us"
        title="About TRANSCOM"
        lead="We started in Dubai in 2023 selling food. We added a new product group only when we could do it properly."
        image="photo-1552664730-d307ca884978"
        crumbs={[{ label: 'About' }]}
      />

      {/* Story */}
      <section className="bg-white py-20 lg:py-24">
        {/* Brand artwork — the one place it is big enough to actually read */}
        <Reveal className="container-x mb-16 lg:mb-20">
          <img
            src="/brand/transcom-brand.jpg"
            alt="TRANSCOM General Trading — food, machinery and goods moving worldwide"
            width="1200"
            height="800"
            loading="lazy"
            decoding="async"
            className="mx-auto w-full max-w-3xl"
          />
        </Reveal>

        <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Our story"
              title="One company instead of five"
            />
            <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-navy-900/70">
              <p>
                Buying from abroad usually goes wrong in the middle, not at the start. The goods change
                slightly between the quote and the loading. A certificate is written for the wrong country.
                The right product arrives in the wrong pack size.
              </p>
              <p>
                We take that part off your hands. We check the supplier, write down exactly what you are
                buying, inspect and photograph the goods before they ship, and prepare the papers your
                country actually asks for. Buyers who tried us in 2023 are still ordering today.
              </p>
            </div>

          </Reveal>

          {/* Milestones sit beside the story rather than in a section of their own */}
          <Reveal delay={120}>
            <p className="font-display text-[11px] font-semibold tracking-[0.2em] text-gold-600 uppercase">
              Milestones
            </p>
            <div className="mt-7">
              {timeline.map((t) => (
                <div key={t.year} className="group flex gap-6 pb-8 last:pb-0">
                  <div className="flex flex-col items-center">
                    <span className="grid h-12 w-12 shrink-0 place-items-center border border-navy-950/15 font-display text-[12.5px] font-semibold">
                      {t.year}
                    </span>
                    <span className="mt-2 w-px flex-1 bg-navy-950/12 group-last:hidden" aria-hidden="true" />
                  </div>
                  <div className="pt-2.5">
                    <h3 className="font-display text-[15.5px] font-semibold">{t.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-navy-900/60">{t.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-navy-950 py-16 text-white lg:py-20">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Compliance"
              title="Licensed and easy to check"
            />
            <p className="mt-5 max-w-md text-[14.5px] leading-relaxed text-white/60">
              Our licence details are printed here so you can check them with Dubai DED before you order.
            </p>
            <Button to="/contact" className="mt-8">
              Ask for our company profile
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
