import { useEffect, useRef, useState } from 'react'
import Truck from '../components/Truck'
import { Button } from '../components/ui'
import { company, divisions, groups, stats } from '../data/site'

/** Where the cab's bumper sits inside the SVG viewBox (332 of 400). */
const NOSE_RATIO = 0.83
const DRIVE_START = 0.08
const DRIVE_SPAN = 0.86

const clamp = (v, min = 0, max = 1) => Math.min(Math.max(v, min), max)
const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2)

/** Inverse of easeInOut — lets a drag on the truck map back onto a scroll position. */
const easeInOutInverse = (y) =>
  y < 0.5 ? Math.sqrt(y / 2) : 1 - Math.sqrt(2 * (1 - y)) / 2

/**
 * Scroll-driven hero. A container truck drives left to right across a sticky
 * viewport and tows the next panel in behind it, so the page changes in step
 * with the delivery. The truck can also be dragged directly — on desktop with a
 * mouse, on a phone with a finger — which scrubs the page scroll.
 *
 * Per-frame work is written straight to DOM style properties inside a single
 * rAF; React never re-renders while scrolling.
 */
export default function HeroDrive() {
  const stageRef = useRef(null)
  const stickyRef = useRef(null)
  const truckRef = useRef(null)
  const panelRef = useRef(null)
  const edgeRef = useRef(null)
  const heroRef = useRef(null)
  const hintRef = useRef(null)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(query.matches)
    const onChange = (e) => setReduced(e.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (reduced) return undefined

    const stage = stageRef.current
    const sticky = stickyRef.current
    const truck = truckRef.current
    const panel = panelRef.current
    const edge = edgeRef.current
    const hero = heroRef.current
    const hint = hintRef.current
    if (!stage || !sticky || !truck || !panel || !edge || !hero || !hint) return undefined

    const wheels = Array.from(truck.querySelectorAll('.truck-wheel'))
    const skylines = Array.from(stage.querySelectorAll('.skyline-layer'))
    const roads = Array.from(stage.querySelectorAll('.road-dashes'))

    let frame = null
    let lastDrive = 0
    let lastTime = performance.now()
    let speed = 0
    let dragging = false

    const geometry = () => {
      const rect = stage.getBoundingClientRect()
      return {
        rect,
        travel: rect.height - window.innerHeight,
        width: stage.clientWidth,
        truckWidth: truck.offsetWidth || 260,
      }
    }

    const currentDrive = () => {
      const { rect, travel } = geometry()
      const progress = travel > 0 ? clamp(-rect.top / travel) : 0
      return easeInOut(clamp((progress - DRIVE_START) / DRIVE_SPAN))
    }

    const update = () => {
      frame = null
      const { rect, travel, width, truckWidth } = geometry()
      const progress = travel > 0 ? clamp(-rect.top / travel) : 0
      const drive = easeInOut(clamp((progress - DRIVE_START) / DRIVE_SPAN))

      // Smoothed speed, used for exhaust, motion lines, bounce and headlights
      const now = performance.now()
      const dt = Math.max(now - lastTime, 16)
      const instant = clamp((Math.abs(drive - lastDrive) / dt) * 900)
      speed += (instant - speed) * 0.18
      lastDrive = drive
      lastTime = now

      const x = drive * (width + truckWidth) - truckWidth
      const nose = x + truckWidth * NOSE_RATIO
      const bob = Math.sin(drive * 58) * 1.8 * speed
      const tilt = -speed * 1.1

      truck.style.transform = `translate3d(${x}px, ${bob}px, 0) rotate(${tilt}deg)`
      panel.style.clipPath = `inset(0 ${Math.max(0, width - nose)}px 0 0)`
      edge.style.transform = `translate3d(${nose + 2}px, 0, 0)`
      edge.style.opacity = drive > 0.002 && drive < 0.998 ? '1' : '0'

      hero.style.transform = `translate3d(${-drive * 46}px, 0, 0)`
      hero.style.opacity = String(1 - drive * 0.4)
      hint.style.opacity = String(Math.max(0, 1 - drive * 3))

      sticky.style.setProperty('--speed', speed.toFixed(3))

      const spin = drive * 1600
      for (const wheel of wheels) wheel.style.transform = `rotate(${spin}deg)`

      // Parallax: the skyline drifts against the truck, the road races past
      for (const layer of skylines) {
        const depth = Number(layer.dataset.depth || 0.2)
        layer.style.transform = `translate3d(${-drive * 260 * depth}px, 0, 0)`
      }
      for (const road of roads) road.style.backgroundPositionX = `${-drive * 1800}px`
    }

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update)
    }

    /* ── Drag the truck to scrub the page ───────────────────────────────── */
    let startX = 0
    let startDrive = 0

    const onPointerDown = (e) => {
      dragging = true
      startX = e.clientX
      startDrive = currentDrive()
      truck.setPointerCapture?.(e.pointerId)
      truck.dataset.dragging = 'true'
    }

    const onPointerMove = (e) => {
      if (!dragging) return
      const { travel, width, truckWidth } = geometry()
      const target = clamp(startDrive + (e.clientX - startX) / (width + truckWidth))
      const progress = DRIVE_START + easeInOutInverse(target) * DRIVE_SPAN
      const stageTop = stage.getBoundingClientRect().top + window.scrollY
      window.scrollTo(0, stageTop + progress * travel)
      e.preventDefault()
    }

    const onPointerUp = (e) => {
      dragging = false
      truck.releasePointerCapture?.(e.pointerId)
      delete truck.dataset.dragging
    }

    truck.addEventListener('pointerdown', onPointerDown)
    truck.addEventListener('pointermove', onPointerMove)
    truck.addEventListener('pointerup', onPointerUp)
    truck.addEventListener('pointercancel', onPointerUp)

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (frame !== null) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      truck.removeEventListener('pointerdown', onPointerDown)
      truck.removeEventListener('pointermove', onPointerMove)
      truck.removeEventListener('pointerup', onPointerUp)
      truck.removeEventListener('pointercancel', onPointerUp)
    }
  }, [reduced])

  const heroContent = (
    <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16">
      <div>
        <span className="inline-flex items-center gap-3 font-display text-[11px] font-semibold tracking-[0.22em] text-gold-400 uppercase">
          <span className="h-1.5 w-1.5 rotate-45 bg-gold-500" aria-hidden="true" />
          Dubai, U.A.E. · Since 2023
        </span>

        <h1 className="mt-7 text-[clamp(2.6rem,6.6vw,4.8rem)] leading-[0.94] font-semibold tracking-[-0.038em] text-white">
          Trade without
          <br />
          <span className="bg-gradient-to-br from-gold-200 via-gold-400 to-gold-600 bg-clip-text text-transparent">
            borders
          </span>
        </h1>

        <p className="mt-7 max-w-md font-display text-[20px] leading-snug font-semibold text-white">
          {company.promise}
        </p>

        <ul className="mt-5 flex max-w-xl flex-wrap items-center gap-x-4 gap-y-2">
          {company.productLine.split(' · ').map((item) => (
            <li key={item} className="flex items-center gap-3 text-[13.5px] text-white/55">
              <span className="h-1 w-1 rounded-full bg-gold-500/70" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-9 flex flex-wrap items-center gap-3.5">
          <Button to="/divisions">What we trade</Button>
          <Button to="/contact" variant="ghostLight" arrow={false}>
            Get a price
          </Button>
        </div>
      </div>

      {/* What we carry, in a panel so the right half has structure */}
      <div className="hidden lg:block">
        <div className="bg-navy-990/55 p-8 ring-1 ring-white/12 backdrop-blur-md">
          <ul className="space-y-px">
            {groups.map((group) => (
              <li key={group.id} className="group/row flex items-start gap-5 py-4 first:pt-0">
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center bg-gold-500/12 font-display text-[14px] font-semibold text-gold-400 ring-1 ring-gold-500/25">
                  {divisions.filter((d) => d.group === group.id).length}
                </span>
                <span>
                  <span className="block font-display text-[15.5px] font-semibold text-white">{group.name}</span>
                  <span className="mt-1.5 block text-[13px] leading-snug text-white/45">{group.blurb}</span>
                </span>
              </li>
            ))}
          </ul>

          <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
            {stats.slice(0, 3).map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="font-display text-[26px] leading-none font-semibold text-gold-400">
                    {stat.value}
                    {stat.suffix}
                  </span>
                  <span className="mt-2 block text-[12px] leading-snug text-white/45">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )

  const nextContent = (
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
      <div>
        <span className="eyebrow text-gold-600">
          <span className="h-px w-10 bg-current opacity-70" aria-hidden="true" />
          What we trade
        </span>
        <h2 className="mt-6 text-[clamp(2.1rem,5vw,3.4rem)] leading-[1.02] font-semibold tracking-[-0.03em]">
          Nine product
          <br />
          groups, one supplier.
        </h2>
        <p className="mt-5 max-w-sm text-[15.5px] leading-relaxed text-navy-900/60">
          Food, machinery, electronics and furniture — bought, checked and shipped by one team.
        </p>
      </div>

      <ul className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3 lg:gap-y-3">
        {divisions.map((division, i) => (
          <li key={division.slug} className="flex items-baseline gap-2.5 border-b border-navy-950/10 py-2.5">
            <span className="font-display text-[11px] font-semibold text-gold-600">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="text-[13.5px] leading-snug text-navy-900/75">{division.short}</span>
          </li>
        ))}
      </ul>
    </div>
  )

  if (reduced) {
    return (
      <>
        <section className="bg-navy-990 pt-[132px] pb-16">
          <div className="container-x">{heroContent}</div>
        </section>
        <section className="bg-sand-50 pt-16 pb-4">
          <div className="container-x">{nextContent}</div>
        </section>
      </>
    )
  }

  return (
    <section ref={stageRef} className="relative h-[190vh] lg:h-[215vh]">
      <div ref={stickyRef} className="drive-stage sticky top-0 h-[100svh] overflow-hidden">
        {/* Panel A — the hero */}
        <div className="absolute inset-0 bg-navy-990">
          {/* Cool light from the top left, warm dusk from the bottom right */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_70%_at_8%_0%,rgba(53,109,155,0.34),transparent_62%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(95%_60%_at_82%_104%,rgba(217,164,65,0.16),transparent_64%)]"
          />
          {/* Fine grid, faded out toward the top */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.055)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:linear-gradient(to_top,black,transparent_78%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-[11%] h-[26%] bg-[linear-gradient(to_top,rgba(217,164,65,0.16),transparent_72%)]"
          />
          <div
            className="skyline-layer pointer-events-none absolute right-0 bottom-[11%] left-0 h-[68%] sm:h-[72%]"
            data-depth="0.35"
          >
            <img
              src="/images/dubai-2048.jpg"
              srcSet="/images/dubai-1280.jpg 1280w, /images/dubai-2048.jpg 2048w, /images/dubai-3840.jpg 3840w"
              sizes="124vw"
              alt=""
              aria-hidden="true"
              fetchPriority="high"
              className="h-full w-[124%] max-w-none object-cover object-[center_78%] opacity-95 [mask-image:linear-gradient(to_top,black_42%,transparent_100%)]"
            />
          </div>
          {/* Scrims: enough to hold the type, not enough to hide the city */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 lg:hidden bg-[linear-gradient(to_top,rgba(5,26,46,0.5)_0%,rgba(5,26,46,0.58)_38%,rgba(5,26,46,0.8)_100%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden lg:block lg:bg-[linear-gradient(to_top,rgba(5,26,46,0.42)_0%,rgba(5,26,46,0.14)_34%,rgba(5,26,46,0.62)_100%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden lg:block lg:bg-[linear-gradient(100deg,rgba(5,26,46,0.84)_0%,rgba(5,26,46,0.5)_36%,rgba(5,26,46,0.06)_66%,transparent_100%)]"
          />
          <div className="container-x relative flex h-full flex-col justify-center pt-28 pb-36">
            <div ref={heroRef}>{heroContent}</div>
          </div>
          <div className="absolute inset-x-0 bottom-[11%]" aria-hidden="true">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-gold-500/45 to-transparent" />
            <div className="road-dashes h-[3px] w-full bg-[repeating-linear-gradient(to_right,rgba(255,255,255,0.28)_0_38px,transparent_38px_86px)]" />
          </div>
        </div>

        {/* Panel B — towed in behind the truck */}
        <div
          ref={panelRef}
          className="absolute inset-0 bg-[linear-gradient(160deg,#ffffff_0%,var(--color-sand-50)_45%,var(--color-sand-100)_100%)]"
          style={{ clipPath: 'inset(0 100% 0 0)' }}
        >
          <div
            className="skyline-layer pointer-events-none absolute right-0 bottom-[11%] left-0 h-[40%]"
            data-depth="0.35"
          >
            <img
              src="/images/dubai-1280.jpg"
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="h-full w-[124%] max-w-none object-cover object-[center_78%] opacity-[0.13] grayscale [mask-image:linear-gradient(to_top,black_45%,transparent_100%)]"
            />
          </div>
          <div className="container-x relative flex h-full flex-col justify-center pt-28 pb-36">{nextContent}</div>
          <div className="absolute inset-x-0 bottom-[11%]" aria-hidden="true">
            <div className="h-px w-full bg-navy-950/15" />
            <div className="road-dashes h-[3px] w-full bg-[repeating-linear-gradient(to_right,rgba(8,36,63,0.22)_0_38px,transparent_38px_86px)]" />
          </div>
        </div>

        {/* Gold seam at the truck's bumper */}
        <div
          ref={edgeRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-gold-500 to-transparent opacity-0"
        />

        {/* The truck — scroll moves it, or drag it directly */}
        <div
          ref={truckRef}
          data-truck
          className="drive-truck absolute bottom-[11%] left-0 w-[240px] translate-y-[8%] cursor-grab touch-pan-y select-none active:cursor-grabbing sm:w-[300px] lg:w-[420px]"
          style={{ transform: 'translate3d(-420px, 0, 0)' }}
        >
          {/* Exhaust and dust, strongest when moving fastest */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="drive-puff absolute bottom-[6%] left-[8%] h-2 w-2 rounded-full bg-white/40"
                style={{ animationDelay: `${i * 0.28}s` }}
              />
            ))}
            <span className="drive-lines absolute top-[42%] -left-[26%] h-px w-[24%] bg-gradient-to-l from-white/50 to-transparent" />
            <span className="drive-lines absolute top-[56%] -left-[18%] h-px w-[16%] bg-gradient-to-l from-white/35 to-transparent" />
            <span className="drive-lines absolute top-[68%] -left-[30%] h-px w-[28%] bg-gradient-to-l from-white/25 to-transparent" />
          </div>

          <Truck className="w-full" />
        </div>

        <p
          ref={hintRef}
          className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center"
        >
          <span className="inline-flex items-center gap-2.5 bg-white/[0.06] px-4 py-2 text-[10.5px] tracking-[0.22em] text-white/50 uppercase ring-1 ring-white/10 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-500" aria-hidden="true" />
            Scroll — or drag the truck
          </span>
        </p>
      </div>
    </section>
  )
}
