import { Button } from '../components/ui'
import { stats } from '../data/site'
import { photo, photoSrcSet } from '../lib/image'

const HERO_IMAGE = 'photo-1494412574643-ff11b0a5c1c3'

export default function HomeHero() {
  return (
    <section className="relative isolate flex min-h-[clamp(600px,100svh,900px)] flex-col justify-end overflow-hidden bg-navy-950">
      <img
        src={photo(HERO_IMAGE, { w: 1920, q: 74 })}
        srcSet={photoSrcSet(HERO_IMAGE)}
        sizes="100vw"
        alt=""
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full animate-kenburns object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,var(--color-navy-990)_10%,rgba(8,36,63,0.82)_48%,rgba(8,36,63,0.3)_100%)]"
      />

      <div className="container-x relative pt-40 pb-12 lg:pb-16">
        <span className="eyebrow text-gold-400">
          <span className="h-px w-10 bg-current opacity-70" aria-hidden="true" />
          Dubai, U.A.E. · Trading since 2023
        </span>

        <h1 className="mt-7 max-w-3xl text-[clamp(2.6rem,7vw,5rem)] leading-[0.98] font-semibold tracking-[-0.035em] text-white">
          Trade without
          <br />
          <span className="text-gold-400">borders</span>
        </h1>

        <p className="mt-7 max-w-md text-[16px] leading-relaxed text-white/70">
          Energy, industrial and food commodities — sourced, inspected and shipped from one Dubai desk.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3.5">
          <Button to="/divisions">What we trade</Button>
          <Button to="/contact" variant="ghostLight" arrow={false}>
            Request a quote
          </Button>
        </div>
      </div>

      {/* Figures, in place of a separate stats band */}
      <div className="relative border-t border-white/12">
        <div className="container-x grid grid-cols-3 divide-x divide-white/10">
          {stats.slice(0, 3).map((s) => (
            <div key={s.label} className="px-1 py-6 first:pl-0 sm:px-8 sm:first:pl-0">
              <p className="font-display text-[26px] leading-none font-semibold text-white sm:text-[32px]">
                {s.value}
                {s.suffix}
              </p>
              <p className="mt-2 text-[12.5px] text-white/45">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
