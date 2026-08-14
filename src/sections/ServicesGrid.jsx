import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import { Button, SectionHeading } from '../components/ui'
import { services } from '../data/site'

export default function ServicesGrid({ limit, withCta = false }) {
  const items = limit ? services.slice(0, limit) : services

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="What we handle"
            title="The whole middle of the chain"
            lead="Buying is the easy part. What clients actually outsource to us is everything between the purchase order and the loading bay."
          />
        </Reveal>

        <div className="mt-14 grid gap-px bg-navy-950/8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s, i) => (
            <Reveal
              key={s.title}
              delay={(i % 4) * 80}
              className="group relative bg-white p-8 transition-colors duration-500 hover:bg-sand-50"
            >
              <span className="absolute top-0 left-0 h-0.5 w-0 bg-gold-500 transition-all duration-500 group-hover:w-full" />
              <span className="grid h-12 w-12 place-items-center bg-navy-950 text-gold-400 transition-transform duration-500 group-hover:scale-105">
                <Icon name={s.icon} className="h-5.5 w-5.5" />
              </span>
              <h3 className="mt-6 font-display text-[16px] leading-snug font-semibold">{s.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-navy-900/65">{s.text}</p>
            </Reveal>
          ))}
        </div>

        {withCta && (
          <Reveal delay={100} className="mt-12 text-center">
            <Button to="/services">See how each service works</Button>
          </Reveal>
        )}
      </div>
    </section>
  )
}
