import { Link } from 'react-router-dom'
import DivisionCard from '../components/DivisionCard'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import { divisions, services } from '../data/site'

export default function DivisionsShowcase() {
  return (
    <section className="bg-sand-50 pt-4 pb-20 lg:pb-24">
      <div className="container-x">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {divisions.map((division, i) => (
            <Reveal key={division.slug} delay={(i % 3) * 90}>
              <DivisionCard division={division} />
            </Reveal>
          ))}
        </div>

        {/* Capabilities as a single line rather than a section of its own */}
        <Reveal delay={120}>
          <div className="mt-14 flex flex-col gap-5 border-t border-navy-950/10 pt-8 lg:flex-row lg:items-baseline lg:justify-between">
            <p className="max-w-3xl text-[14.5px] leading-relaxed text-navy-900/55">
              {services.map((s) => s.title).join(' · ')}
            </p>
            <Link
              to="/services"
              className="group inline-flex shrink-0 items-center gap-2 font-display text-[13px] font-semibold text-navy-950"
            >
              How we work
              <Icon
                name="arrowRight"
                className="h-4 w-4 text-gold-600 transition-transform group-hover:translate-x-1"
                strokeWidth={2}
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
