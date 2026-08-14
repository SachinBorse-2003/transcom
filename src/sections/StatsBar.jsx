import CountUp from '../components/CountUp'
import Reveal from '../components/Reveal'
import { stats } from '../data/site'

export default function StatsBar() {
  return (
    <section className="border-b border-navy-950/8 bg-white">
      <div className="container-x grid gap-y-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 90}
            className="relative px-0 sm:px-8 lg:px-9 lg:first:pl-0 lg:last:pr-0"
          >
            {i > 0 && (
              <span
                aria-hidden="true"
                className="absolute top-1 bottom-1 -left-px hidden w-px bg-navy-950/10 lg:block"
              />
            )}
            <p className="font-display text-[2.6rem] leading-none font-semibold tracking-[-0.03em] text-navy-950 lg:text-[3rem]">
              <CountUp value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-3 font-display text-[14px] font-semibold text-navy-950">{s.label}</p>
            <p className="mt-1.5 text-[13.5px] leading-relaxed text-navy-900/55">{s.sub}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
