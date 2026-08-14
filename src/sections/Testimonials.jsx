import { useEffect, useState } from 'react'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import { SectionHeading } from '../components/ui'
import { testimonials } from '../data/site'

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setTimeout(() => setIndex((i) => (i + 1) % testimonials.length), 8000)
    return () => clearTimeout(id)
  }, [index])

  const active = testimonials[index]

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <Reveal>
          <SectionHeading align="center" eyebrow="Client feedback" title="What buyers say after the second order" />
        </Reveal>

        <Reveal delay={110} className="mx-auto mt-14 max-w-3xl text-center">
          <div className="flex justify-center gap-1 text-gold-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon key={i} name="star" className="h-4 w-4 fill-current" strokeWidth={1} />
            ))}
          </div>

          <blockquote
            key={index}
            className="mt-8 font-display text-[19px] leading-[1.55] font-medium text-navy-950 transition-opacity duration-500 sm:text-[23px]"
          >
            “{active.quote}”
          </blockquote>

          <figcaption className="mt-8">
            <p className="font-display text-[14.5px] font-semibold">{active.name}</p>
            <p className="mt-1 text-[13.5px] text-navy-900/55">{active.role}</p>
          </figcaption>

          <div className="mt-9 flex items-center justify-center gap-2.5">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial ${i + 1}`}
                aria-current={i === index}
                className={`h-2 transition-all duration-400 ${
                  i === index ? 'w-8 bg-gold-500' : 'w-2 bg-navy-950/15 hover:bg-navy-950/30'
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
