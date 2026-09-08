import Icon from '../components/Icon'
import Photo from '../components/Photo'
import Reveal from '../components/Reveal'
import { Button } from '../components/ui'
import { company } from '../data/site'

export default function CtaBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-990 py-20 text-white lg:py-24">
      <Photo
        id="photo-1494412574643-ff11b0a5c1c3"
        alt=""
        width={1600}
        sizes="100vw"
        className="absolute inset-0 -z-10 h-full w-full"
        imgClassName="opacity-20"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-990 via-navy-990/90 to-navy-990/50"
      />

      <div className="container-x grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <span className="eyebrow text-gold-400">
            <span className="h-px w-10 bg-current opacity-70" aria-hidden="true" />
            Get in touch
          </span>
          <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.9rem)] leading-[1.1] font-semibold tracking-[-0.02em] text-white">
            Tell us what you need. We reply with a price in 24 hours.
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/60">
            A written quote with the price, the terms and how long it holds.
          </p>
        </Reveal>

        <Reveal delay={120} className="lg:justify-self-end">
          <div className="bg-white/5 p-8 ring-1 ring-white/12 backdrop-blur-sm">
            <div className="space-y-5">
              <a href={`tel:${company.phoneHref}`} className="group flex items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-gold-500 text-navy-950">
                  <Icon name="phone" className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-[12px] tracking-wide text-white/45 uppercase">Call the desk</span>
                  <span className="block font-display text-[16px] font-semibold text-white transition group-hover:text-gold-400">
                    {company.phone}
                  </span>
                </span>
              </a>

              <a href={`mailto:${company.email}`} className="group flex items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center border border-white/20 text-gold-400">
                  <Icon name="mail" className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-[12px] tracking-wide text-white/45 uppercase">Email the desk</span>
                  <span className="block font-display text-[15px] font-semibold break-all text-white transition group-hover:text-gold-400">
                    {company.email}
                  </span>
                </span>
              </a>
            </div>

            <Button to="/contact" className="mt-8 w-full">
              Request a quotation
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
