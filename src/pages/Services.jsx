import PageHero from '../components/PageHero'
import CtaBanner from '../sections/CtaBanner'
import ProcessSteps from '../sections/ProcessSteps'
import CapabilityList from '../sections/CapabilityList'
import usePageMeta from '../lib/usePageMeta'

export default function Services() {
  usePageMeta({
    title: 'Services — Sourcing, Logistics & Trade Support | TRANSCOM General Trading',
    description:
      'Sourcing and procurement, import and export documentation, freight, warehousing and cold chain, inspection, trade finance and private-label packing from Dubai.',
  })

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything between the purchase order and the loading bay"
        lead="The middle of the chain — and the accountability that comes with it."
        image="photo-1553413077-190dd305871c"
        crumbs={[{ label: 'Services' }]}
      />

      <CapabilityList />

      <ProcessSteps />

      <CtaBanner />
    </>
  )
}
