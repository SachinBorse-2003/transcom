import { Suspense, lazy } from 'react'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import { Button, SectionHeading } from '../components/ui'
import { markets, tradeRoutes } from '../data/site'

// three.js is ~150 KB gzipped — keep it out of the initial bundle.
const Globe = lazy(() => import('../components/Globe'))

function GlobeFallback() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="h-[62%] w-[62%] animate-pulse rounded-full bg-[radial-gradient(circle_at_35%_30%,var(--color-navy-700),var(--color-navy-950))]" />
    </div>
  )
}

export default function GlobalReach() {
  return (
    <section className="relative overflow-hidden bg-navy-990 py-20 text-white lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(53,109,155,0.22),transparent_62%)]"
      />

      <div className="relative container-x grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <SectionHeading
            tone="light"
            eyebrow="Global reach"
            title="Dubai in the middle, the trade routes around it"
            lead="Two-thirds of the world sits within eight flying hours of our desk. Drag the globe to follow the routes."
          />

          <div className="mt-9 grid grid-cols-2 gap-x-6 gap-y-4">
            {markets.map((m) => (
              <div key={m.region} className="flex items-baseline gap-2.5 border-b border-white/10 pb-3">
                <span className="font-display text-[15px] font-semibold text-gold-400">{m.count}</span>
                <span className="text-[13px] leading-snug text-white/60">{m.region}</span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="flex items-center gap-2.5 text-[13px] text-white/55">
              <Icon name="ship" className="h-4 w-4 text-gold-500" />
              Jebel Ali &amp; DXB on the doorstep
            </span>
            <Button to="/contact" variant="ghostLight" arrow={false} className="px-6 py-3">
              Ship with us
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto w-full max-w-[560px]">
            <div className="relative aspect-square w-full">
              <Suspense fallback={<GlobeFallback />}>
                <Globe className="h-full w-full" />
              </Suspense>
            </div>

            <div className="mt-2 flex items-center justify-center gap-2.5 text-[11.5px] tracking-[0.14em] text-white/40 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
              {tradeRoutes.length} route lanes from Dubai
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
