import { Suspense, lazy } from 'react'
import { Button } from '../components/ui'
import { stats, tradeRoutes } from '../data/site'

// three.js is ~140 KB gzipped — loaded after first paint, with the CSS sphere
// standing in until it arrives.
const Globe = lazy(() => import('../components/Globe'))

function GlobeFallback() {
  return (
    <div className="absolute inset-[10%] animate-pulse rounded-full bg-[radial-gradient(circle_at_34%_28%,var(--color-navy-700),var(--color-navy-950)_70%)]" />
  )
}

export default function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-990 pt-[128px] pb-14 lg:pt-[150px] lg:pb-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-0 h-[900px] w-[900px] -translate-y-1/2 translate-x-1/4 rounded-full bg-[radial-gradient(circle,rgba(53,109,155,0.28),transparent_62%)]"
      />

      <div className="relative container-x grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        <div>
          <span className="eyebrow text-gold-400">
            <span className="h-px w-10 bg-current opacity-70" aria-hidden="true" />
            Dubai, U.A.E. · Since 2023
          </span>

          <h1 className="mt-7 text-[clamp(2.6rem,6.4vw,4.6rem)] leading-[0.98] font-semibold tracking-[-0.035em] text-white">
            Trade without
            <br />
            <span className="text-gold-400">borders</span>
          </h1>

          <p className="mt-6 max-w-sm text-[16px] leading-relaxed text-white/65">
            Energy, industrial and food — sourced, inspected and shipped from one Dubai desk.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3.5">
            <Button to="/divisions">What we trade</Button>
            <Button to="/contact" variant="ghostLight" arrow={false}>
              Request a quote
            </Button>
          </div>

          <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/12 pt-7">
            {stats.slice(0, 3).map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="font-display text-[26px] leading-none font-semibold text-white">
                    {s.value}
                    {s.suffix}
                  </span>
                  <span className="mt-2 block text-[12.5px] text-white/45">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Interactive trade-route globe */}
        <div className="w-full">
          <div className="relative mx-auto aspect-square w-full max-w-[400px] sm:max-w-[520px] lg:max-w-[620px]">
            <Suspense fallback={<GlobeFallback />}>
              <Globe className="h-full w-full" />
            </Suspense>
          </div>

          <p className="mt-1 text-center text-[11.5px] tracking-[0.14em] text-white/35 uppercase">
            Drag to spin · {tradeRoutes.length} route lanes from Dubai
          </p>
        </div>
      </div>
    </section>
  )
}
