import { Link } from 'react-router-dom'
import Icon from './Icon'
import Photo from './Photo'

export default function DivisionCard({ division }) {
  return (
    <Link
      to={`/divisions/${division.slug}`}
      className="group relative isolate flex min-h-[300px] flex-col justify-end overflow-hidden bg-navy-950 p-7"
    >
      <Photo
        id={division.image}
        alt={division.name}
        width={900}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="absolute inset-0 -z-10 h-full w-full"
        imgClassName="opacity-60 transition-transform duration-[1100ms] group-hover:scale-105"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,var(--color-navy-990)_16%,rgba(5,26,46,0.78)_52%,rgba(8,36,63,0.3)_100%)]"
      />

      <h3 className="font-display text-[20px] leading-tight font-semibold text-white">{division.name}</h3>

      <div className="mt-3 flex items-end justify-between gap-4">
        <p className="text-[13.5px] leading-snug text-white/55">{division.tagline}</p>
        <Icon
          name="arrowRight"
          className="h-5 w-5 shrink-0 text-gold-400 transition-transform duration-300 group-hover:translate-x-1"
          strokeWidth={2}
        />
      </div>
    </Link>
  )
}
