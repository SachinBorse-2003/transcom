import Icon from '../components/Icon'
import Photo from '../components/Photo'
import Reveal from '../components/Reveal'
import { SectionHeading } from '../components/ui'
import { markets } from '../data/site'

export default function GlobalReach() {
  return (
    <section className="relative overflow-hidden bg-sand-50 py-20 lg:py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <SectionHeading
            eyebrow="Global reach"
            title="Dubai in the middle, the trading world around it"
            lead="Two-thirds of the world's population sits within an eight-hour flight of our office. That geography is the whole reason this business works from here."
          />

          <div className="mt-10 divide-y divide-navy-950/10 border-y border-navy-950/10">
            {markets.map((m) => (
              <div key={m.region} className="group flex gap-5 py-5">
                <Icon name="pin" className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold-600" />
                <div>
                  <h3 className="font-display text-[15px] font-semibold">{m.region}</h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-navy-900/60">{m.places}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="relative order-1 lg:order-2">
          <Photo
            id="photo-1614107151491-6876eecbff89"
            alt="Close-up of a globe showing trade routes"
            width={1100}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-[5/6] w-full sm:aspect-[4/3] lg:aspect-[5/6]"
            imgClassName="opacity-95"
          />

          <div className="absolute -bottom-6 -left-4 w-[74%] bg-white p-6 shadow-lift sm:left-6 sm:w-[62%]">
            <div className="flex items-center gap-4">
              <span className="grid h-11 w-11 place-items-center bg-navy-950 text-gold-400">
                <Icon name="ship" className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-[15px] font-semibold">Jebel Ali & DXB on our doorstep</p>
                <p className="mt-1 text-[13px] text-navy-900/60">
                  Free-zone re-export keeps duty off your landed cost.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -top-5 right-4 hidden bg-gold-500 px-6 py-5 text-navy-950 shadow-lift sm:block">
            <p className="font-display text-[26px] leading-none font-semibold">8 hrs</p>
            <p className="mt-1.5 text-[12px] font-medium">flight to two-thirds of the world</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
