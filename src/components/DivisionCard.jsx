import { Link } from 'react-router-dom'
import Icon from './Icon'
import Photo from './Photo'
import { groups } from '../data/site'

export default function DivisionCard({ division, index = 0, size = 'default' }) {
  const group = groups.find((g) => g.id === division.group)
  const tall = size === 'tall'

  return (
    <Link
      to={`/divisions/${division.slug}`}
      className="group relative isolate flex flex-col justify-end overflow-hidden bg-navy-950"
    >
      <Photo
        id={division.image}
        alt={division.name}
        width={900}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="absolute inset-0 -z-10 h-full w-full"
        imgClassName="opacity-60 transition-all duration-[1100ms] group-hover:scale-110 group-hover:opacity-45"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,var(--color-navy-990)_18%,rgba(5,26,46,0.82)_48%,rgba(8,36,63,0.35)_100%)] transition-opacity duration-500 group-hover:opacity-95"
      />

      <div className={`relative p-7 ${tall ? 'min-h-[460px] pt-24' : 'min-h-[340px] pt-20'} flex flex-col justify-end`}>
        <span className="font-display text-[10.5px] font-semibold tracking-[0.2em] text-gold-400 uppercase">
          {String(index + 1).padStart(2, '0')} — {group?.name}
        </span>

        <h3 className="mt-3 font-display text-[21px] leading-tight font-semibold text-white">
          {division.name}
        </h3>

        <p className="mt-3 text-[13.5px] leading-relaxed text-white/55">{division.tagline}</p>

        {/* Revealed on hover / always on touch */}
        <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <ul className="mt-4 space-y-1.5 border-t border-white/15 pt-4">
              {division.products.slice(0, 3).map((p) => (
                <li key={p} className="flex items-start gap-2 text-[12.5px] text-white/60">
                  <Icon name="check" className="mt-0.5 h-3 w-3 shrink-0 text-gold-500" strokeWidth={2.4} />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <span className="mt-5 inline-flex items-center gap-2 font-display text-[12px] font-semibold tracking-[0.14em] text-white uppercase">
          View division
          <Icon
            name="arrowRight"
            className="h-4 w-4 text-gold-400 transition-transform duration-300 group-hover:translate-x-1.5"
            strokeWidth={2}
          />
        </span>
      </div>
    </Link>
  )
}
