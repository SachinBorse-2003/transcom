import { useState } from 'react'
import DivisionCard from '../components/DivisionCard'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { SectionHeading } from '../components/ui'
import CtaBanner from '../sections/CtaBanner'
import { divisionCountWord, divisions, groups } from '../data/site'
import usePageMeta from '../lib/usePageMeta'

export default function Divisions() {
  const [filter, setFilter] = useState('all')

  usePageMeta({
    title: 'Trading Divisions — TRANSCOM General Trading L.L.C',
    description:
      'Nine trading divisions covering petroleum products, solar energy, electrical components, heavy equipment, auto spare parts, mobile accessories, meat and poultry, seafood and food staples.',
  })

  const visible = filter === 'all' ? divisions : divisions.filter((d) => d.group === filter)

  const tabs = [{ id: 'all', name: 'All divisions' }, ...groups]

  return (
    <>
      <PageHero
        eyebrow="Our divisions"
        title={`${divisionCountWord} trading divisions, one accountable desk`}
        lead="Each with its own specialists and approved supplier list — and the same documentation standard."
        image="photo-1587293852726-70cdb56c2866"
        crumbs={[{ label: 'Divisions' }]}
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Browse the range"
              title="What TRANSCOM trades"
              lead="Filter by sector, or open a division for the full product list."
            />
          </Reveal>

          <Reveal delay={100} className="mt-10 flex flex-wrap gap-2.5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                className={`px-6 py-3 font-display text-[13px] font-semibold transition-all duration-300 ${
                  filter === tab.id
                    ? 'bg-navy-950 text-white'
                    : 'bg-sand-100 text-navy-900/70 hover:bg-sand-200 hover:text-navy-950'
                }`}
              >
                {tab.name}
                <span className="ml-2 text-[11px] opacity-55">
                  {tab.id === 'all' ? divisions.length : divisions.filter((d) => d.group === tab.id).length}
                </span>
              </button>
            ))}
          </Reveal>

          {groups.some((g) => g.id === filter) && (
            <p className="mt-6 max-w-2xl text-[14.5px] text-navy-900/60">
              {groups.find((g) => g.id === filter)?.blurb}
            </p>
          )}

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((division, i) => (
              <Reveal key={division.slug} delay={(i % 3) * 100}>
                <DivisionCard division={division} index={divisions.indexOf(division)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
