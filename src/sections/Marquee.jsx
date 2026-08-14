import { divisions } from '../data/site'

export default function Marquee() {
  const items = [...divisions.map((d) => d.short), 'Import & Export', 'Cold Chain', 'Consolidation']
  const loop = [...items, ...items]

  return (
    <div className="overflow-hidden border-y border-navy-950/8 bg-sand-100 py-4">
      <div className="flex w-max animate-marquee items-center gap-10 hover:[animation-play-state:paused]">
        {loop.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10">
            <span className="font-display text-[12.5px] font-semibold tracking-[0.18em] whitespace-nowrap text-navy-900/45 uppercase">
              {item}
            </span>
            <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-gold-500/60" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  )
}
