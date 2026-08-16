import Icon from '../components/Icon'
import Photo from '../components/Photo'
import Reveal from '../components/Reveal'
import { Button, SectionHeading } from '../components/ui'
import { advantages } from '../data/site'

export default function WhyUs() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 py-20 text-white lg:py-28">
      <Photo
        id="photo-1578575437130-527eed3abbec"
        alt=""
        width={1600}
        sizes="100vw"
        className="absolute inset-0 -z-10 h-full w-full"
        imgClassName="opacity-[0.13]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(90%_70%_at_15%_10%,rgba(53,109,155,0.35),transparent_60%)]"
      />

      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Why TRANSCOM"
              title="Anyone can quote. Fewer can deliver the same thing twice."
              lead="Trading is a reliability game. Six reasons clients stop running tenders."
            />
            <div className="mt-10 flex flex-wrap gap-4">
              <Button to="/contact">Start an enquiry</Button>
              <Button to="/about" variant="ghostLight" arrow={false}>
                Our story
              </Button>
            </div>
          </Reveal>

          <div className="grid gap-px bg-white/10 sm:grid-cols-2">
            {advantages.map((a, i) => (
              <Reveal
                key={a.title}
                delay={(i % 2) * 90}
                className="group bg-navy-950 p-7 transition-colors duration-500 hover:bg-navy-900"
              >
                <span className="grid h-12 w-12 place-items-center border border-gold-500/35 text-gold-400 transition-all duration-500 group-hover:bg-gold-500 group-hover:text-navy-950">
                  <Icon name={a.icon} className="h-5.5 w-5.5" />
                </span>
                <h3 className="mt-5 font-display text-[16px] font-semibold text-white">{a.title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-white/55">{a.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
