/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SINGLE SOURCE OF TRUTH FOR ALL SITE CONTENT
 *
 * The `company` and `registration` blocks below are taken from the DED trade
 * licence and are real. Anything marked ⚠️ is still a placeholder or an
 * editorial estimate — see README.md for the full list to confirm before the
 * site goes live.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const company = {
  name: 'TRANSCOM GENERAL TRADING L.L.C',
  shortName: 'TRANSCOM',
  tagline: 'Trade Without Borders',
  descriptor: 'General Trading • Import & Export • Dubai, U.A.E.',
  founded: 2023,
  intro:
    'A Dubai trading house connecting verified producers with buyers in more than 25 markets — energy, industrial and food, handled as one accountable chain.',

  // From the trade licence — the mobile is the only number on record.
  phone: '+971 56 804 4756',
  phoneHref: '+971568044756',
  whatsapp: '971568044756',
  email: 'transcomgeneraltrading@gmail.com',

  address: {
    // ⚠️ The licence lists no street address. Add the office once confirmed —
    // put it first in `lines` and update `short`.
    short: 'Dubai, U.A.E.',
    lines: ['P.O. Box 346-485', 'Dubai', 'United Arab Emirates'],
    poBox: 'P.O. Box 346-485',
    city: 'Dubai',
    country: 'United Arab Emirates',
    // Used for the Google Map embed on the contact page.
    mapQuery: 'Dubai, United Arab Emirates',
  },

  hours: 'Sunday – Thursday, 09:00 – 18:00 GST', // ⚠️ confirm
  licence: 'Trade Licence No. 1256293 · Dubai Department of Economic Development',

  social: [
    // ⚠️ Point these at the real profiles, or delete the ones that don't exist.
    { label: 'LinkedIn', href: '#', icon: 'linkedin' },
    { label: 'Instagram', href: '#', icon: 'instagram' },
    { label: 'Facebook', href: '#', icon: 'facebook' },
    { label: 'WhatsApp', href: 'https://wa.me/971568044756', icon: 'whatsapp' },
  ],
}

/* ── Trade licence facts (all verifiable from the DED licence) ─────────────── */

export const registration = {
  owner: 'Ikram Ul Haq Abdur Razaq',
  ownerRole: 'Owner & Manager · 100% shareholding',
  legalType: 'Limited Liability Company — Single Owner (LLC-SO)',
  authority: 'Dubai Department of Economic Development',
  activity: 'General Trading',
  licenceNo: '1256293',
  registerNo: '2120646',
  dcciNo: '495656',
  issued: '31 October 2023',
  expires: '30 October 2027',
}

/* `stats` is defined below the divisions array so the division count stays in step. */

/* ── Trading divisions ─────────────────────────────────────────────────────── */

export const groups = [
  {
    id: 'energy',
    name: 'Energy & Power',
    blurb: 'Fuel, solar and electrical supply for utilities, contractors and distributors.',
  },
  {
    id: 'industrial',
    name: 'Industrial & Mobility',
    blurb: 'Machinery, vehicle parts and consumer electronics moved at wholesale volume.',
  },
  {
    id: 'food',
    name: 'Food & Agriculture',
    blurb: 'Fresh, chilled and frozen foodstuff supplied to retail, catering and wholesale.',
  },
]

export const divisions = [
  {
    slug: 'petroleum-products',
    group: 'energy',
    name: 'Petroleum Products & Lubricants',
    short: 'Petroleum & Lubricants',
    tagline: 'Refined fuels and lubricants from vetted regional refineries.',
    image: 'photo-1516937941344-00b4e0337589',
    blurb:
      'Refined products and finished lubricants on FOB, CIF and CFR terms, straight from Gulf refineries and licensed terminals — every parcel inspected before loading.',
    products: [
      'Gasoil / Diesel EN590 10ppm & 50ppm',
      'Jet A-1 aviation fuel',
      'Fuel oil — 180 CST & 380 CST',
      'Base oils — SN150, SN500, SN650',
      'Automotive & industrial lubricants',
      'Bitumen 60/70 & 80/100 (drums and bulk)',
      'Petroleum jelly and greases',
      'Urea and petrochemical feedstock',
    ],
    highlights: [
      { title: 'Terminal access', text: 'Storage and blending through licensed Fujairah and Hamriyah facilities.' },
      { title: 'Independent inspection', text: 'SGS, Intertek or client-nominated surveyor at load port and discharge.' },
      { title: 'Flexible incoterms', text: 'FOB, CIF, CFR and DAP quotations against confirmed demand.' },
    ],
  },
  {
    slug: 'solar-energy',
    group: 'energy',
    name: 'Solar & Renewable Energy',
    short: 'Solar & Renewables',
    tagline: 'Balance-of-system supply for rooftop, ground-mount and off-grid projects.',
    image: 'photo-1509391366360-2e959784a276',
    blurb:
      'Complete solar packages for EPC contractors — modules, inverters, mounting and cable consolidated into one container and one invoice.',
    products: [
      'Monocrystalline & bifacial PV modules (400W – 700W)',
      'String and hybrid inverters',
      'Lithium and tubular gel battery banks',
      'Charge controllers (MPPT / PWM)',
      'Aluminium mounting structures & ballast systems',
      'Solar DC cable, MC4 connectors, combiner boxes',
      'Solar street lighting and water pumps',
      'Monitoring and metering hardware',
    ],
    highlights: [
      { title: 'Tier-one only', text: 'Modules sourced from Bloomberg tier-one manufacturers with 25-year warranties.' },
      { title: 'Project consolidation', text: 'Multi-vendor BOM assembled and shipped as a single consignment.' },
      { title: 'Off-grid expertise', text: 'Kits engineered for African and remote GCC deployments.' },
    ],
  },
  {
    slug: 'electrical-components',
    group: 'energy',
    name: 'Electrical & Electronic Components',
    short: 'Electrical Components',
    tagline: 'Switchgear, cable and control gear for contractors and distributors.',
    image: 'photo-1518770660439-4636190af475',
    blurb:
      'Low- and medium-voltage material to IEC and BS standards, backed by manufacturer certificates of conformity.',
    products: [
      'LV & MV switchgear, panels and distribution boards',
      'MCBs, MCCBs, RCCBs and contactors',
      'Copper and aluminium power cable',
      'Transformers and voltage stabilisers',
      'Industrial and commercial LED lighting',
      'Wiring accessories, conduits and trunking',
      'Cable trays, ladders and containment',
      'PLCs, sensors and automation hardware',
    ],
    highlights: [
      { title: 'Standards compliance', text: 'IEC, BS and DEWA/ADDC-approved products where required.' },
      { title: 'Distributor programmes', text: 'Call-off stock arrangements with agreed lead times.' },
      { title: 'Certificates on file', text: 'CoC, test reports and mill certificates supplied with every release.' },
    ],
  },
  {
    slug: 'heavy-equipment',
    group: 'industrial',
    name: 'Heavy Equipment & Machinery',
    short: 'Heavy Equipment',
    tagline: 'New and certified pre-owned plant for construction and quarrying.',
    image: 'photo-1621922688758-359fc864071e',
    blurb:
      'Earth-moving and material-handling plant, shipped with hour-meter verification and a written condition report before payment is released.',
    products: [
      'Excavators, wheel loaders and bulldozers',
      'Backhoe loaders and skid steers',
      'Mobile and crawler cranes',
      'Forklifts and telehandlers',
      'Diesel generator sets 20 kVA – 2000 kVA',
      'Air compressors and welding plant',
      'Concrete mixers, batching plant and pumps',
      'Genuine spare parts and attachments',
    ],
    highlights: [
      { title: 'Pre-shipment inspection', text: 'Third-party condition report with photographs before despatch.' },
      { title: 'RoRo & flat-rack', text: 'Break-bulk, RoRo and out-of-gauge shipping arranged end to end.' },
      { title: 'Parts continuity', text: 'Ongoing spare-part supply for every machine we place.' },
    ],
  },
  {
    slug: 'auto-spare-parts',
    group: 'industrial',
    name: 'Auto Spare Parts & Tyres',
    short: 'Auto Spare Parts',
    tagline: 'Genuine, OEM and aftermarket parts for Japanese, Korean, European and American fleets.',
    image: 'photo-1487754180451-c456f719a1fc',
    blurb:
      'Picked against VIN or part number, photographed before packing and consolidated to keep freight cost per line down.',
    products: [
      'Engine, transmission and drivetrain components',
      'Brake pads, discs, and suspension parts',
      'Filters, belts, hoses and service kits',
      'Batteries, alternators and starters',
      'Body panels, lamps and glass',
      'Passenger, 4x4 and TBR tyres',
      'Lubricants, coolants and workshop consumables',
      'Heavy-truck and trailer parts',
    ],
    highlights: [
      { title: 'VIN-matched picking', text: 'Parts verified against chassis number to eliminate wrong fitment.' },
      { title: 'Photo verification', text: 'Every carton photographed and shared before the container seals.' },
      { title: 'Mixed consolidation', text: 'Multi-supplier orders combined into one export shipment.' },
    ],
  },
  {
    slug: 'mobile-accessories',
    group: 'industrial',
    name: 'Mobile Phones & Accessories',
    short: 'Mobile & Accessories',
    tagline: 'Wholesale handsets and accessories with region-correct specifications.',
    image: 'photo-1591117207239-788bf8de6c3b',
    blurb:
      'Genuine handsets, tablets and accessories, matched to the plug type, band support and warranty regime of the destination market.',
    products: [
      'Smartphones and tablets — global and regional variants',
      'Smart watches and wearables',
      'Power banks, chargers and cables',
      'Wireless earbuds and audio accessories',
      'Screen protectors and protective cases',
      'Retail display and POS hardware',
      'Computer peripherals and storage',
      'Home and small-appliance electronics',
    ],
    highlights: [
      { title: 'Spec-matched stock', text: 'Correct band, plug and language variant for the destination country.' },
      { title: 'Genuine sourcing', text: 'Authorised channel stock with traceable IMEI ranges.' },
      { title: 'Retail-ready', text: 'Barcoding, kitting and display packing available on request.' },
    ],
  },
  {
    slug: 'meat-poultry',
    group: 'food',
    name: 'Meat, Poultry & Eggs',
    short: 'Meat & Poultry',
    tagline: 'HALAL-certified protein from approved abattoirs and processors.',
    image: 'photo-1607623814075-e51df1bdc82f',
    blurb:
      'Sourced from establishments approved by U.A.E. authorities under recognised HALAL supervision, traceable to the lot.',
    products: [
      'Frozen whole chicken and portions',
      'Chilled and frozen beef cuts',
      'Lamb and mutton carcass and cuts',
      'Processed meat — sausages, burgers, cold cuts',
      'Table eggs and egg powder',
      'Offal and by-products',
      'Value-added and marinated lines',
      'Foodservice bulk packs',
    ],
    highlights: [
      { title: 'HALAL certified', text: 'Slaughter certificates from recognised Islamic authorities on every lot.' },
      { title: 'Approved plants', text: 'Establishment numbers registered with U.A.E. and destination authorities.' },
      { title: 'Full traceability', text: 'Lot-level tracking from processor to final delivery.' },
    ],
  },
  {
    slug: 'seafood-frozen',
    group: 'food',
    name: 'Seafood & Frozen Foods',
    short: 'Seafood & Frozen',
    tagline: 'Wild-caught and farmed seafood held at a stable −18 °C.',
    image: 'photo-1615141982883-c7ad0e69fd62',
    blurb:
      'Whole fish, fillets, shrimp and cephalopods from Oman, India, Vietnam and Ecuador — glaze, count size and packing declared on every offer.',
    products: [
      'Vannamei and black tiger shrimp',
      'Whole and filleted white fish',
      'Salmon, tuna and pelagic species',
      'Squid, cuttlefish and octopus',
      'Crab, lobster and shellfish',
      'Breaded and value-added seafood',
      'Frozen vegetables, fries and bakery',
      'Ice cream and frozen desserts',
    ],
    highlights: [
      { title: 'Declared glaze', text: 'Net weight and glaze percentage stated up front — no surprises on arrival.' },
      { title: '−18 °C stability', text: 'Temperature-controlled from processor through to final mile.' },
      { title: 'HACCP plants', text: 'Sourced only from HACCP and EU/US-listed processors.' },
    ],
  },
  {
    slug: 'edible-oils-grains',
    group: 'food',
    name: 'Edible Oils, Rice & Grains',
    short: 'Oils, Rice & Grains',
    tagline: 'Bulk and packed staples for wholesalers, mills and institutional buyers.',
    image: 'photo-1626808642875-0aa545482dfb',
    blurb:
      'Container and bulk staples — oils, rice, sugar, pulses and flour — with private-label packing in your own brand.',
    products: [
      'Sunflower, soybean, corn and palm olein',
      'Extra virgin and refined olive oil',
      'Basmati, non-basmati and parboiled rice',
      'Refined white sugar ICUMSA 45',
      'Wheat flour, semolina and maize meal',
      'Pulses — lentils, chickpeas, beans',
      'Milk powder and dairy staples',
      'Tea, coffee, spices and condiments',
    ],
    highlights: [
      { title: 'Private label', text: 'Your brand, artwork and pack size produced at approved facilities.' },
      { title: 'Bulk or packed', text: 'Flexi-tank, jumbo bag, drum or retail carton as the market needs.' },
      { title: 'Lab-tested lots', text: 'Independent analysis certificates issued before shipment.' },
    ],
  },
]

export const divisionBySlug = (slug) => divisions.find((d) => d.slug === slug)

/** Copy across the site says "Nine divisions" — derive it so it can never drift. */
const NUMBER_WORDS = [
  'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight',
  'Nine', 'Ten', 'Eleven', 'Twelve',
]
export const divisionCount = divisions.length
export const divisionCountWord = NUMBER_WORDS[divisionCount] ?? String(divisionCount)

export const stats = [
  { value: divisionCount, suffix: '', label: 'Trading divisions', sub: 'Energy, industrial and foodstuff' },
  { value: 25, suffix: '+', label: 'Markets served', sub: 'GCC, Africa, Asia & Europe' },
  { value: 600, suffix: '+', label: 'Product lines', sub: 'Quoted from stock or to order' },
  { value: 98, suffix: '%', label: 'On-time shipments', sub: 'Measured across 2025 despatches' },
]

/* ── Services ──────────────────────────────────────────────────────────────── */

export const services = [
  { icon: 'search', title: 'Sourcing & Procurement', text: 'Audited producers, negotiated price, one counterparty.' },
  { icon: 'ship', title: 'Import & Export', text: 'Invoice, origin, legalisation and LC presentation.' },
  { icon: 'truck', title: 'Freight & Logistics', text: 'Sea, air and road through Jebel Ali and DXB.' },
  { icon: 'warehouse', title: 'Warehousing & Cold Chain', text: 'Ambient, chilled and frozen storage in Dubai.' },
  { icon: 'shield', title: 'Quality & Inspection', text: 'SGS, Intertek or your own surveyor before loading.' },
  { icon: 'file', title: 'Trade Finance', text: 'LC at sight, usance, CAD and bank guarantees.' },
  { icon: 'box', title: 'Private Label & Packing', text: 'Own-brand production and retail-ready packs.' },
  { icon: 'chart', title: 'Market Intelligence', text: 'Weekly price and availability on what you buy.' },
]

/* ── Process ───────────────────────────────────────────────────────────────── */

export const process = [
  { step: '01', title: 'Enquiry', text: 'Product, quantity, destination — written up as one agreed specification.' },
  { step: '02', title: 'Firm offer', text: 'Approved producers approached; incoterms, validity and terms stated.' },
  { step: '03', title: 'Inspection', text: 'Checked and photographed before the container is sealed.' },
  { step: '04', title: 'Delivery', text: 'Tracking, arrival documents and a named contact for any claim.' },
]

/* ── Markets ───────────────────────────────────────────────────────────────── */

/** Origin and destinations for the 3D globe in the Global Reach section. */
export const tradeHub = { name: 'Dubai', lat: 25.2, lon: 55.27 }

export const tradeRoutes = [
  { name: 'Riyadh', lat: 24.71, lon: 46.68 },
  { name: 'Cairo', lat: 30.04, lon: 31.24 },
  { name: 'Istanbul', lat: 41.01, lon: 28.98 },
  { name: 'Rotterdam', lat: 51.92, lon: 4.48 },
  { name: 'Lagos', lat: 6.45, lon: 3.39 },
  { name: 'Mombasa', lat: -4.04, lon: 39.67 },
  { name: 'Dar es Salaam', lat: -6.79, lon: 39.2 },
  { name: 'Karachi', lat: 24.86, lon: 67.01 },
  { name: 'Mumbai', lat: 19.08, lon: 72.88 },
  { name: 'Colombo', lat: 6.93, lon: 79.86 },
  { name: 'Singapore', lat: 1.35, lon: 103.82 },
  { name: 'Shanghai', lat: 31.23, lon: 121.47 },
]

/* ── Credentials ───────────────────────────────────────────────────────────── */

/**
 * Only facts that appear on the trade licence. Certifications TRANSCOM does not
 * actually hold (ISO 9001, HACCP, Dubai Municipality food approval) were
 * removed — add them back only once the certificates exist.
 */
export const credentials = [
  { label: 'DED Licensed', sub: 'Licence No. 1256293' },
  { label: 'LLC-SO', sub: 'Single-owner limited company' },
  { label: 'General Trading', sub: 'Licensed activity — active' },
  { label: 'Dubai Chamber', sub: 'DCCI No. 495656' },
  { label: 'Established 2023', sub: 'Licensed 31 October 2023' },
  { label: 'Valid to 2027', sub: 'Licence expiry 30 October 2027' },
]

/* ── Navigation ────────────────────────────────────────────────────────────── */

export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Divisions',
    to: '/divisions',
    children: divisions.map((d) => ({ label: d.short, to: `/divisions/${d.slug}`, group: d.group })),
  },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
]
