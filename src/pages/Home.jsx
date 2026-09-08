import HeroDrive from '../sections/HeroDrive'
import DivisionsShowcase from '../sections/DivisionsShowcase'
import CtaBanner from '../sections/CtaBanner'
import usePageMeta from '../lib/usePageMeta'

export default function Home() {
  usePageMeta({
    title: 'TRANSCOM General Trading L.L.C — Global Trading & Supply Partner, Dubai UAE',
    description:
      'From global markets to your business. Dubai trading company supplying food, seafood, electronics, solar, machinery, furniture and commodities to more than 25 countries.',
  })

  return (
    <>
      <HeroDrive />
      <DivisionsShowcase />
      <CtaBanner />
    </>
  )
}
