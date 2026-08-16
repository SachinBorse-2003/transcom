import Icon from '../components/Icon'
import Photo from '../components/Photo'
import Reveal from '../components/Reveal'
import { Button, SectionHeading } from '../components/ui'

const pillars = [
  { icon: 'target', title: 'We hold the specification', text: 'What is written on the offer is what lands on your dock.' },
  { icon: 'compass', title: 'We stay in the middle', text: 'One contract, one invoice, one person answerable for the shipment.' },
  { icon: 'handshake', title: 'We price for the next order', text: 'Margin discipline is why our first buyers are still on the books.' },
]

export default function AboutIntro() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Images */}
        <Reveal className="relative">
          <div className="relative aspect-[4/5] w-[82%]">
            <Photo
              id="photo-1553413077-190dd305871c"
              alt="Warehouse aisle stacked with palletised cargo"
              width={900}
              sizes="(min-width: 1024px) 40vw, 82vw"
              className="h-full w-full"
            />
          </div>

          <div className="absolute right-0 bottom-10 w-[52%] border-8 border-white shadow-lift">
            <Photo
              id="photo-1512453979798-5ea266f8880c"
              alt="Dubai skyline at dusk"
              width={640}
              sizes="(min-width: 1024px) 25vw, 45vw"
              className="aspect-[4/3] w-full"
            />
          </div>

          <div className="absolute top-8 -left-4 hidden bg-navy-950 px-7 py-6 text-white shadow-lift sm:block lg:-left-8">
            <p className="font-display text-4xl leading-none font-semibold text-gold-400">2023</p>
            <p className="mt-2 text-[12.5px] leading-snug text-white/60">
              Trading from Dubai
              <br />
              since day one
            </p>
          </div>
        </Reveal>

        {/* Copy */}
        <Reveal delay={120}>
          <SectionHeading
            eyebrow="Who we are"
            title="A trading house built on the boring things: specification, documentation, delivery."
            lead="Licensed in Dubai in 2023 to fix what its founders had watched break for years: too many intermediaries, too little accountability."
          />

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-navy-900/70">
            Nine divisions, one discipline: an audited producer, a written specification, an independent
            inspection, and paperwork that clears customs first time.
          </p>

          <div className="mt-10 space-y-6">
            {pillars.map((p) => (
              <div key={p.title} className="flex gap-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center bg-sand-100 text-gold-600">
                  <Icon name={p.icon} className="h-5.5 w-5.5" />
                </span>
                <div>
                  <h3 className="font-display text-[15.5px] font-semibold">{p.title}</h3>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-navy-900/65">{p.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-11 flex flex-wrap items-center gap-4">
            <Button to="/about">More about TRANSCOM</Button>
            <Button to="/services" variant="outline" arrow={false}>
              What we handle
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
