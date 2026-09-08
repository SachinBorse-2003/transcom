import PageHero from '../components/PageHero'
import CtaBanner from '../sections/CtaBanner'
import ProcessSteps from '../sections/ProcessSteps'
import CapabilityList from '../sections/CapabilityList'
import usePageMeta from '../lib/usePageMeta'

export default function Services() {
  usePageMeta({
    title: 'Services — Sourcing, Logistics & Trade Support | TRANSCOM General Trading',
    description:
      'Finding suppliers, import and export papers, shipping, storage, inspection, payment terms and own-brand packing — from Dubai.',
  })

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="What we do for you"
        lead="We handle the buying, checking, papers and shipping."
        image="photo-1553413077-190dd305871c"
        crumbs={[{ label: 'Services' }]}
      />

      <CapabilityList />

      <ProcessSteps />

      <CtaBanner />
    </>
  )
}
