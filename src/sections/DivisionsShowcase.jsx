import DivisionCard from '../components/DivisionCard'
import Reveal from '../components/Reveal'
import { SectionHeading } from '../components/ui'
import { divisionCountWord, divisions } from '../data/site'

export default function DivisionsShowcase() {
  return (
    <section className="bg-sand-50 py-20 lg:py-24">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="What we trade"
            title={`${divisionCountWord} divisions. One standard of proof.`}
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {divisions.map((division, i) => (
            <Reveal key={division.slug} delay={(i % 3) * 90}>
              <DivisionCard division={division} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
