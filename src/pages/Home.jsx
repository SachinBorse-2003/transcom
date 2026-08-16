import HomeHero from '../sections/HomeHero'
import DivisionsShowcase from '../sections/DivisionsShowcase'
import CtaBanner from '../sections/CtaBanner'
import usePageMeta from '../lib/usePageMeta'

export default function Home() {
  usePageMeta({
    title: 'TRANSCOM General Trading L.L.C — Global Trading & Supply Partner, Dubai UAE',
    description:
      'Dubai-based general trading house supplying petroleum products, solar and electrical equipment, heavy machinery, auto parts, mobile accessories, meat, seafood and food staples to more than 25 markets.',
  })

  return (
    <>
      <HomeHero />
      <DivisionsShowcase />
      <CtaBanner />
    </>
  )
}
