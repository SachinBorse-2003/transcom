import Icon from '../components/Icon'
import PageHero from '../components/PageHero'
import Photo from '../components/Photo'
import Reveal from '../components/Reveal'
import { Button, SectionHeading } from '../components/ui'
import CtaBanner from '../sections/CtaBanner'
import ProcessSteps from '../sections/ProcessSteps'
import ServicesGrid from '../sections/ServicesGrid'
import usePageMeta from '../lib/usePageMeta'

const capabilities = [
  {
    image: 'photo-1553413077-190dd305871c',
    eyebrow: 'Warehousing & consolidation',
    title: 'Mixed loads, one container, one seal',
    text: 'We hold your goods while the rest of the order lands. Four part-loads from four suppliers become one container with one packing list — usually at a lower cost per line.',
    points: [
      'Ambient, +2 °C to +8 °C chilled and −18 °C frozen space',
      'Cross-docking and re-packing to your carton spec',
      'Call-off delivery against a rolling schedule',
      'Photographic record of every pallet before sealing',
    ],
  },
  {
    image: 'photo-1607472586893-edb57bdc0e39',
    eyebrow: 'Inspection & quality',
    title: 'Problems caught in Dubai, not at your gate',
    text: 'Every consignment is checked against the written specification before it leaves — and where the risk justifies it, payment is released only on a clean surveyor report.',
    points: [
      'Pre-shipment inspection with photographic evidence',
      'Independent laboratory analysis for food and fuel lots',
      'Temperature logging across the cold chain',
      'Lot-level traceability from producer to delivery',
    ],
    reverse: true,
  },
  {
    image: 'photo-1516937941344-00b4e0337589',
    eyebrow: 'Documentation & finance',
    title: 'Paperwork that clears the first time',
    text: 'A certificate written for the wrong authority is worth nothing at a border. We prepare documents against the importing country\'s real requirements.',
    points: [
      'Certificate of origin, legalisation and consular attestation',
      'HALAL, health and phytosanitary certification',
      'LC at sight and usance, CAD, and bank guarantees',
      'Insurance placement on ICC (A) terms',
    ],
  },
]

export default function Services() {
  usePageMeta({
    title: 'Services — Sourcing, Logistics & Trade Support | TRANSCOM General Trading',
    description:
      'Sourcing and procurement, import and export documentation, freight, warehousing and cold chain, inspection, trade finance and private-label packing from Dubai.',
  })

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything between the purchase order and the loading bay"
        lead="The middle of the chain — and the accountability that comes with it."
        image="photo-1553413077-190dd305871c"
        crumbs={[{ label: 'Services' }]}
      />

      <ServicesGrid />

      {/* Deep-dive capabilities */}
      <section className="bg-sand-50 py-20 lg:py-28">
        <div className="container-x space-y-20 lg:space-y-28">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                cap.reverse ? '[&>*:first-child]:lg:order-2' : ''
              }`}
            >
              <Reveal>
                <Photo
                  id={cap.image}
                  alt={cap.title}
                  width={1000}
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="aspect-[4/3] w-full"
                />
              </Reveal>

              <Reveal delay={110}>
                <SectionHeading eyebrow={cap.eyebrow} title={cap.title} />
                <p className="mt-6 text-[15px] leading-relaxed text-navy-900/70">{cap.text}</p>
                <ul className="mt-8 space-y-3.5">
                  {cap.points.map((p) => (
                    <li key={p} className="flex items-start gap-3.5">
                      <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center bg-gold-500/15 text-gold-600">
                        <Icon name="check" className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span className="text-[14.5px] leading-snug text-navy-900/75">{p}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <ProcessSteps />

      {/* Terms strip */}
      <section className="bg-navy-950 py-16 text-white lg:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Commercial terms"
              title="Quoted plainly, so you can compare like with like"
            />
            <Button to="/contact" className="mt-8">
              Discuss your terms
            </Button>
          </Reveal>

          <Reveal delay={110} className="grid gap-px bg-white/10 sm:grid-cols-2">
            {[
              { label: 'Incoterms', value: 'EXW · FOB · CFR · CIF · DAP · DDP' },
              { label: 'Payment', value: 'T/T · LC at sight · Usance LC · CAD' },
              { label: 'Ports of loading', value: 'Jebel Ali · Port Rashid · Sharjah · DXB' },
              { label: 'Offer validity', value: 'Stated on every quotation, no moving targets' },
            ].map((t) => (
              <div key={t.label} className="bg-navy-950 p-7">
                <p className="font-display text-[11px] font-semibold tracking-[0.2em] text-gold-400 uppercase">
                  {t.label}
                </p>
                <p className="mt-3 text-[15px] text-white/75">{t.value}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
