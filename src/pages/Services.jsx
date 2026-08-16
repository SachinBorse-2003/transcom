import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { Button, SectionHeading } from '../components/ui'
import CtaBanner from '../sections/CtaBanner'
import ProcessSteps from '../sections/ProcessSteps'
import ServicesGrid from '../sections/ServicesGrid'
import usePageMeta from '../lib/usePageMeta'

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
