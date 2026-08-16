import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { Button } from '../components/ui'
import { photo, photoSrcSet } from '../lib/image'

const slides = [
  {
    image: 'photo-1494412574643-ff11b0a5c1c3',
    eyebrow: 'Dubai, U.A.E. · Trading since 2023',
    title: ['Trade without', 'borders'],
    lead: 'Sourcing, inspection and shipping across energy, industry and food — one Dubai desk, twenty-five markets.',
    cta: { label: 'Explore our divisions', to: '/divisions' },
  },
  {
    image: 'photo-1516937941344-00b4e0337589',
    eyebrow: 'Energy & Power',
    title: ['Fuel, solar', 'and power supply'],
    lead: 'Refined fuels, tier-one solar and certified electrical material.',
    cta: { label: 'Energy divisions', to: '/divisions/petroleum-products' },
  },
  {
    image: 'photo-1607623814075-e51df1bdc82f',
    eyebrow: 'Food & Agriculture',
    title: ['Food that arrives', 'as specified'],
    lead: 'Chilled and frozen foodstuff — graded, certified, traceable to the lot.',
    cta: { label: 'Foodstuff divisions', to: '/divisions/meat-poultry' },
  },
  {
    image: 'photo-1587293852726-70cdb56c2866',
    eyebrow: 'Logistics & Fulfilment',
    title: ['One counterparty,', 'end to end'],
    lead: 'Sourcing, documentation, freight and warehousing on one contract.',
    cta: { label: 'How we work', to: '/services' },
  },
]

const quickLinks = [
  { icon: 'ship', label: 'Import & export', text: 'Sea, air and multimodal', to: '/services' },
  { icon: 'shield', label: 'Verified supply', text: 'Audited producers only', to: '/about' },
  { icon: 'clock', label: '24-hour quotes', text: 'Answered within a day', to: '/contact' },
]

export default function HomeHero() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timer = useRef(null)

  const go = useCallback((next) => {
    setIndex(((next % slides.length) + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (paused) return undefined
    timer.current = setTimeout(() => go(index + 1), 6500)
    return () => clearTimeout(timer.current)
  }, [index, paused, go])

  return (
    <section
      className="relative isolate flex min-h-[clamp(620px,100svh,940px)] flex-col justify-end overflow-hidden bg-navy-950"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="TRANSCOM highlights"
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.image}
          className={`absolute inset-0 -z-10 transition-opacity duration-[1400ms] ease-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={i !== index}
        >
          <img
            src={photo(slide.image, { w: 1920, q: 74 })}
            srcSet={photoSrcSet(slide.image)}
            sizes="100vw"
            alt=""
            loading={i === 0 ? 'eager' : 'lazy'}
            fetchPriority={i === 0 ? 'high' : 'low'}
            className={`h-full w-full object-cover ${i === index ? 'animate-kenburns' : ''}`}
          />
        </div>
      ))}

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(105deg,var(--color-navy-990)_8%,rgba(8,36,63,0.86)_42%,rgba(8,36,63,0.35)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-72 bg-gradient-to-t from-navy-990 to-transparent"
      />

      {/* Content */}
      <div className="container-x relative pt-40 pb-14 lg:pb-20">
        <div className="max-w-3xl">
          {slides.map((slide, i) => (
            <div
              key={slide.image}
              className={`transition-all duration-700 ${
                i === index ? 'block opacity-100' : 'pointer-events-none absolute inset-x-0 opacity-0'
              }`}
              aria-hidden={i !== index}
            >
              <span className="eyebrow text-gold-400">
                <span className="h-px w-10 bg-current opacity-70" aria-hidden="true" />
                {slide.eyebrow}
              </span>

              <h1 className="mt-6 text-[clamp(2.5rem,6.4vw,4.6rem)] leading-[1.02] font-semibold tracking-[-0.03em] text-white">
                {slide.title[0]}
                <br />
                <span className="text-gold-400">{slide.title[1]}</span>
              </h1>

              <p className="mt-7 max-w-xl text-[15.5px] leading-relaxed text-white/70 sm:text-[17px]">
                {slide.lead}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3.5">
                <Button to={slide.cta.to}>{slide.cta.label}</Button>
                <Button to="/contact" variant="ghostLight" arrow={false}>
                  Request a quote
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="mt-12 flex items-center justify-between gap-6 border-t border-white/12 pt-6">
          <div className="flex items-center gap-3">
            {slides.map((slide, i) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className="group py-2"
              >
                <span
                  className={`block h-0.5 transition-all duration-500 ${
                    i === index ? 'w-14 bg-gold-500' : 'w-7 bg-white/25 group-hover:bg-white/60'
                  }`}
                />
              </button>
            ))}
            <span className="ml-2 font-display text-[12px] tracking-[0.2em] text-white/40">
              {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous slide"
              className="grid h-11 w-11 place-items-center border border-white/20 text-white transition hover:border-gold-500 hover:bg-gold-500 hover:text-navy-950"
            >
              <Icon name="arrowRight" className="h-4 w-4 rotate-180" strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next slide"
              className="grid h-11 w-11 place-items-center border border-white/20 text-white transition hover:border-gold-500 hover:bg-gold-500 hover:text-navy-950"
            >
              <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      {/* Quick links strip */}
      <div className="relative border-t border-white/10 bg-navy-990/70 backdrop-blur-md">
        <div className="container-x grid divide-white/10 sm:grid-cols-3 sm:divide-x">
          {quickLinks.map((q) => (
            <Link
              key={q.label}
              to={q.to}
              className="group flex items-center gap-4 px-1 py-5 transition sm:px-7 sm:first:pl-0 sm:last:pr-0"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center border border-gold-500/40 text-gold-400 transition group-hover:bg-gold-500 group-hover:text-navy-950">
                <Icon name={q.icon} className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-display text-[14px] font-semibold text-white">{q.label}</span>
                <span className="block text-[12.5px] text-white/45">{q.text}</span>
              </span>
              <Icon
                name="arrowRight"
                className="ml-auto h-4 w-4 text-white/25 transition-all group-hover:translate-x-1 group-hover:text-gold-400"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
