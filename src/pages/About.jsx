import Icon from '../components/Icon'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { Button, SectionHeading } from '../components/ui'
import CtaBanner from '../sections/CtaBanner'
import { company, credentials, divisionCount, groups, registration } from '../data/site'
import usePageMeta from '../lib/usePageMeta'

/**
 * How we work — what a buyer actually gets, rather than an invented company
 * history. Every claim here is something TRANSCOM controls and can stand behind.
 */
const method = [
  {
    icon: 'search',
    title: 'We check the supplier first',
    text: 'Before a first order we look at who we are buying from, not just the price they quote.',
  },
  {
    icon: 'file',
    title: 'We write the order down',
    text: 'Grade, size, packing and delivery date are agreed on paper, so nothing drifts between the quote and the loading.',
  },
  {
    icon: 'shield',
    title: 'We look at the goods',
    text: 'Inspected and photographed before the container is sealed, so problems are caught here and not at your gate.',
  },
  {
    icon: 'ship',
    title: 'We prepare the right papers',
    text: 'Certificates written for the country you are importing into, so the shipment clears the first time.',
  },
]

export default function About() {
  usePageMeta({
    title: 'About TRANSCOM General Trading L.L.C — Dubai',
    description:
      'A general trading company in Dubai, licensed in 2023. We supply food, machinery, electronics and furniture to buyers in more than 25 countries.',
  })

  return (
    <>
      <PageHero
        eyebrow="About us"
        title="About TRANSCOM"
        lead="A general trading company in Dubai, licensed in 2023. We buy from checked suppliers and ship to buyers in more than 25 countries."
        image="photo-1552664730-d307ca884978"
        crumbs={[{ label: 'About' }]}
      />

      {/* What we do */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading eyebrow="What we do" title="One supplier instead of five" />
            <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-navy-900/70">
              <p>
                Most buyers use a different supplier for every product group — one for food, another for
                machinery, another for electronics. Each one has its own paperwork, its own shipping and its
                own reasons when something is late.
              </p>
              <p>
                We put all of it on one contract. We find the supplier, agree the price, check the goods
                before they ship, prepare the papers your country asks for, and deliver. You have one company
                to call, and one company to hold responsible.
              </p>
              <p>
                Today that covers {divisionCount} product groups: {groups.map((g) => g.name.toLowerCase()).join(', ')}.
              </p>
            </div>

            <Button to="/divisions" className="mt-9">
              See what we supply
            </Button>
          </Reveal>

          {/* How we work */}
          <Reveal delay={120}>
            <p className="font-display text-[11px] font-semibold tracking-[0.2em] text-gold-600 uppercase">
              How we work
            </p>
            <ul className="mt-7 divide-y divide-navy-950/10 border-y border-navy-950/10">
              {method.map((item) => (
                <li key={item.title} className="flex gap-5 py-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center bg-sand-100 text-gold-600">
                    <Icon name={item.icon} className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <h3 className="font-display text-[15.5px] font-semibold">{item.title}</h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-navy-900/60">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Licence */}
      <section className="bg-navy-950 py-16 text-white lg:py-20">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <SectionHeading tone="light" eyebrow="Our licence" title="Licensed and easy to check" />
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

          <div className="mt-8 flex flex-wrap items-baseline justify-between gap-4">
            <p className="text-[13.5px] text-white/45">
              {registration.owner} — {registration.ownerRole}.
            </p>
            <p className="font-display text-[12px] tracking-[0.18em] text-gold-500/80 uppercase">
              {company.motto}
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
