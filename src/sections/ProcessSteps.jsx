import Reveal from '../components/Reveal'
import { SectionHeading } from '../components/ui'
import { process } from '../data/site'

const terms = [
  { label: 'Incoterms', value: 'EXW · FOB · CFR · CIF · DAP · DDP' },
  { label: 'Payment', value: 'T/T · LC at sight · Usance LC · CAD' },
  { label: 'Load ports', value: 'Jebel Ali · Port Rashid · Sharjah · DXB' },
  { label: 'Offer validity', value: 'Stated on every quotation' },
]

export default function ProcessSteps() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="How it works"
            title="From enquiry to delivered container"
            lead="No stage moves until the previous one is documented."
          />
        </Reveal>

        <div className="relative mt-16">
          <span
            aria-hidden="true"
            className="absolute top-7 right-8 left-8 hidden h-px bg-navy-950/10 lg:block"
          />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 110} className="relative">
                <div className="flex items-center gap-4 lg:block">
                  <span className="relative grid h-14 w-14 shrink-0 place-items-center bg-navy-950 font-display text-[15px] font-semibold text-gold-400">
                    {p.step}
                  </span>
                  <h3 className="font-display text-[17px] font-semibold lg:mt-6">{p.title}</h3>
                </div>
                <p className="mt-3.5 text-[14.5px] leading-relaxed text-navy-900/65">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Commercial terms, folded in rather than given a section of their own */}
        <Reveal delay={120}>
          <dl className="mt-16 grid gap-x-8 gap-y-6 border-t border-navy-950/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {terms.map((t) => (
              <div key={t.label}>
                <dt className="font-display text-[10.5px] font-semibold tracking-[0.18em] text-gold-600 uppercase">
                  {t.label}
                </dt>
                <dd className="mt-2.5 text-[14px] text-navy-900/70">{t.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
