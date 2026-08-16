import Reveal from '../components/Reveal'
import { Button, SectionHeading } from '../components/ui'
import { services } from '../data/site'

/**
 * One compact section in place of the old services grid, differentiators grid
 * and process timeline — a plain list reads faster than three card walls.
 */
export default function CapabilityList() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            eyebrow="What we handle"
            title="Everything between the order and the loading bay"
          />
          <Button to="/services" variant="outline" className="mt-8">
            How we work
          </Button>
        </Reveal>

        <Reveal delay={110}>
          <ul className="border-t border-navy-950/10">
            {services.map((s) => (
              <li
                key={s.title}
                className="grid grid-cols-1 gap-1 border-b border-navy-950/10 py-4 sm:grid-cols-[minmax(0,220px)_1fr] sm:gap-8 sm:py-5"
              >
                <span className="font-display text-[15px] font-semibold">{s.title}</span>
                <span className="text-[14px] leading-snug text-navy-900/60">{s.text}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
