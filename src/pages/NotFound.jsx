import { Button } from '../components/ui'
import Photo from '../components/Photo'
import usePageMeta from '../lib/usePageMeta'

export default function NotFound() {
  usePageMeta({ title: 'Page not found — TRANSCOM General Trading L.L.C' })

  return (
    <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-navy-950 pt-32 pb-20 text-white">
      <Photo
        id="photo-1494412574643-ff11b0a5c1c3"
        alt=""
        width={1600}
        sizes="100vw"
        className="absolute inset-0 -z-10 h-full w-full"
        imgClassName="opacity-20"
      />
      <div className="container-x">
        <p className="font-display text-[clamp(4rem,12vw,9rem)] leading-none font-semibold text-gold-500/90">404</p>
        <h1 className="mt-6 text-[clamp(1.8rem,4vw,2.8rem)] font-semibold text-white">
          This container went to the wrong port
        </h1>
        <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/60">
          The page you were looking for is not here. Try the divisions index, or send the enquiry straight to
          the trading desk.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Button to="/">Back to home</Button>
          <Button to="/divisions" variant="ghostLight" arrow={false}>
            Browse divisions
          </Button>
        </div>
      </div>
    </section>
  )
}
