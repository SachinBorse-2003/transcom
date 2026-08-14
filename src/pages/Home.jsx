import HomeHero from '../sections/HomeHero'
import StatsBar from '../sections/StatsBar'
import AboutIntro from '../sections/AboutIntro'
import Marquee from '../sections/Marquee'
import DivisionsShowcase from '../sections/DivisionsShowcase'
import WhyUs from '../sections/WhyUs'
import ServicesGrid from '../sections/ServicesGrid'
import ProcessSteps from '../sections/ProcessSteps'
import GlobalReach from '../sections/GlobalReach'
import Testimonials from '../sections/Testimonials'
import CtaBanner from '../sections/CtaBanner'
import usePageMeta from '../lib/usePageMeta'

export default function Home() {
  usePageMeta({
    title: 'TRANSCOM General Trading L.L.C — Global Trading & Supply Partner, Dubai UAE',
    description:
      'Dubai-based general trading house supplying petroleum products, solar and electrical equipment, heavy machinery, auto parts, mobile accessories and fresh & frozen foodstuff to more than 25 markets.',
  })

  return (
    <>
      <HomeHero />
      <StatsBar />
      <AboutIntro />
      <Marquee />
      <DivisionsShowcase />
      <WhyUs />
      <ServicesGrid limit={8} withCta />
      <ProcessSteps />
      <GlobalReach />
      <Testimonials />
      <CtaBanner />
    </>
  )
}
