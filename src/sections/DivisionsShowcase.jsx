import DivisionCard from '../components/DivisionCard'
import Reveal from '../components/Reveal'
import { Button, SectionHeading } from '../components/ui'
import { divisionCountWord, divisions } from '../data/site'

export default function DivisionsShowcase() {
  const featured = divisions.slice(0, 6)
  const remaining = divisions.slice(6)
  // "Meat & Poultry, Seafood & Frozen and Oils, Rice & Grains"
  const remainingLabel = remaining
    .map((d) => d.short)
    .reduce((acc, name, i, all) => (i === 0 ? name : i === all.length - 1 ? `${acc} and ${name}` : `${acc}, ${name}`), '')

  return (
    <section className="relative overflow-hidden bg-sand-50 py-20 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Trading divisions"
              title={`${divisionCountWord} divisions. One standard of proof.`}
              lead="Energy, industrial and food — each with its own approved supplier list."
            />
          </Reveal>
          <Reveal delay={120} className="shrink-0">
            <Button to="/divisions" variant="outline">
              All divisions
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((division, i) => (
            <Reveal key={division.slug} delay={(i % 3) * 110}>
              <DivisionCard division={division} index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={100} className="mt-5">
          <div className="flex flex-col items-center justify-between gap-5 bg-navy-950 px-8 py-8 text-white sm:flex-row">
            <div>
              <p className="font-display text-[19px] font-semibold">{`${remaining.length} more divisions — ${remainingLabel}.`}</p>
              <p className="mt-1.5 text-[14px] text-white/55">
                If it ships in a container and clears through Dubai, we can quote it.
              </p>
            </div>
            <Button to="/divisions" className="shrink-0">
              See the full range
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
