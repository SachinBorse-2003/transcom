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
    'TRANSCOM General Trading L.L.C is a Dubai-based trading house that sources, supplies and ships across the energy, industrial and food sectors. From a single office in the U.A.E. we connect verified producers with buyers in more than 25 markets — handling procurement, documentation, quality control and delivery as one accountable chain.',

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

export const stats = [
  { value: 10, suffix: '', label: 'Trading divisions', sub: 'Energy, industrial and foodstuff' },
  { value: 25, suffix: '+', label: 'Markets served', sub: 'GCC, Africa, Asia & Europe' },
  { value: 600, suffix: '+', label: 'Product lines', sub: 'Quoted from stock or to order' },
  { value: 98, suffix: '%', label: 'On-time shipments', sub: 'Measured across 2025 despatches' },
]

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
      'We supply refined petroleum products and finished lubricants on FOB, CIF and CFR terms, working directly with refineries and licensed storage terminals in the Gulf. Every parcel is independently inspected before loading and moves with a full documentary trail.',
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
      'From tier-one modules to mounting rails and cable, we consolidate complete solar packages for EPC contractors across the Middle East and East Africa — shipped as one container, one invoice, one point of contact.',
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
      'A deep catalogue of low- and medium-voltage electrical material, held to IEC and BS standards and backed by manufacturer certificates of conformity. We serve both project releases and stock-and-serve distributor programmes.',
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
      'We locate, inspect and ship earth-moving and material-handling equipment worldwide — with hour-meter verification, service history and a written condition report before any payment is released.',
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
      'Dubai is the world\'s re-export hub for automotive parts, and we work the market daily. Orders are picked against VIN or part number, photographed before packing and consolidated to keep freight cost per line as low as possible.',
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
      'We supply distributors and retail chains with genuine handsets, tablets and accessories, matched to the plug type, band support and warranty regime of the destination market.',
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
    slug: 'fruits-vegetables',
    group: 'food',
    name: 'Fresh Fruits & Vegetables',
    short: 'Fruits & Vegetables',
    tagline: 'Daily-sourced produce moving through an unbroken cold chain.',
    image: 'photo-1610348725531-843dff563e2c',
    blurb:
      'We buy from growers and packhouses in India, Egypt, Kenya, Turkey, the Netherlands and South America, and clear through Dubai on the same cold chain that ends at your loading bay. Grading and shelf-life are agreed in writing before the first pallet moves.',
    products: [
      'Citrus — orange, lemon, mandarin, grapefruit',
      'Apples, pears, grapes and stone fruit',
      'Bananas, mangoes, pineapple and papaya',
      'Onions, potatoes, garlic and ginger',
      'Tomatoes, cucumbers, peppers and aubergine',
      'Leafy greens and fresh herbs',
      'Dates, dried fruit and nuts',
      'Frozen fruit and vegetable packs',
    ],
    highlights: [
      { title: 'Unbroken cold chain', text: 'Reefer temperature logged from packhouse to delivery point.' },
      { title: 'Agreed grading', text: 'Size, brix and class fixed in the specification sheet before purchase.' },
      { title: 'Air & sea options', text: 'Airfreight for short-life lines, reefer sea freight for volume.' },
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
      'All meat and poultry is sourced from establishments approved by U.A.E. authorities and slaughtered under recognised HALAL supervision. Certificates travel with the cargo, and every consignment is traceable to its lot.',
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
      'Whole fish, fillets, shrimp and cephalopods sourced from Oman, India, Vietnam, Ecuador and the North Atlantic — with glaze percentage, count size and packing declared honestly on every offer.',
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
      'Container and bulk supply of edible oils, rice, sugar, pulses and flour — including private-label packing in your own brand and artwork, produced at approved packers in the U.A.E. and origin markets.',
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

/* ── Services ──────────────────────────────────────────────────────────────── */

export const services = [
  {
    icon: 'search',
    title: 'Sourcing & Procurement',
    text: 'We find the producer, audit them, negotiate the price and hold the specification — so you deal with one counterparty instead of twenty.',
  },
  {
    icon: 'ship',
    title: 'Import, Export & Re-Export',
    text: 'Full documentary handling: commercial invoice, packing list, certificate of origin, legalisation and letter-of-credit presentation.',
  },
  {
    icon: 'truck',
    title: 'Freight & Logistics',
    text: 'Sea, air, road and multimodal movements through Jebel Ali, Port Rashid and DXB, with rates fixed before you commit.',
  },
  {
    icon: 'warehouse',
    title: 'Warehousing & Cold Chain',
    text: 'Ambient, chilled and frozen storage in Dubai, with consolidation, re-packing and call-off delivery against your schedule.',
  },
  {
    icon: 'shield',
    title: 'Quality Assurance & Inspection',
    text: 'Pre-shipment inspection by SGS, Intertek or your own nominated surveyor, with photographic evidence at every stage.',
  },
  {
    icon: 'file',
    title: 'Trade Finance & Documentation',
    text: 'LC at sight, usance, CAD and bank-guarantee structures arranged through established U.A.E. banking relationships.',
  },
  {
    icon: 'box',
    title: 'Private Label & Packing',
    text: 'Own-brand production, artwork development, barcoding and retail-ready packing at approved facilities.',
  },
  {
    icon: 'chart',
    title: 'Market Intelligence',
    text: 'Weekly price indications and availability reports on the commodities you buy, so your timing is your advantage.',
  },
]

/* ── Differentiators ───────────────────────────────────────────────────────── */

export const advantages = [
  {
    icon: 'anchor',
    title: 'Positioned in Dubai',
    text: 'Two-thirds of the world lives within eight flying hours of us. Jebel Ali and DXB are on our doorstep, and free-zone re-export keeps duty off your landed cost.',
  },
  {
    icon: 'shield',
    title: 'Verified counterparties',
    text: 'Every supplier is audited before their first order and reviewed after every shipment. We have declined more suppliers than we have appointed.',
  },
  {
    icon: 'clock',
    title: 'Answers within the day',
    text: 'Enquiries are quoted within 24 working hours. If a line is unavailable we tell you immediately rather than letting the clock run.',
  },
  {
    icon: 'layers',
    title: 'One counterparty, ten divisions',
    text: 'Fuel, machinery and foodstuff on the same contract, the same documentation standard and the same account manager.',
  },
  {
    icon: 'globe',
    title: 'Documentation that clears',
    text: 'Certificates of origin, HALAL, health and legalisation prepared for the destination country, not generically.',
  },
  {
    icon: 'handshake',
    title: 'Priced to be repeated',
    text: 'We quote for the second order as much as the first. Margin discipline is why the buyers who tried us in our first year are still on the books.',
  },
]

/* ── Process ───────────────────────────────────────────────────────────────── */

export const process = [
  {
    step: '01',
    title: 'Enquiry & specification',
    text: 'You send the product, quantity, destination and target price. We convert it into a written specification so both sides are buying the same thing.',
  },
  {
    step: '02',
    title: 'Sourcing & firm offer',
    text: 'We approach approved producers, verify current availability and issue a firm offer with incoterms, validity and payment terms stated.',
  },
  {
    step: '03',
    title: 'Inspection & shipment',
    text: 'Goods are inspected before loading, documents are prepared for the destination, and the container is sealed and booked.',
  },
  {
    step: '04',
    title: 'Delivery & after-sales',
    text: 'You get tracking, arrival documents and a named contact for any claim — with the next contract already being priced.',
  },
]

/* ── Markets ───────────────────────────────────────────────────────────────── */

export const markets = [
  { region: 'GCC & Middle East', places: 'U.A.E. · Saudi Arabia · Oman · Qatar · Kuwait · Bahrain · Iraq · Jordan' },
  { region: 'East & West Africa', places: 'Kenya · Tanzania · Uganda · Somalia · Djibouti · Ghana · Nigeria · Senegal' },
  { region: 'North Africa', places: 'Egypt · Libya · Sudan · Morocco · Algeria' },
  { region: 'South & Central Asia', places: 'India · Pakistan · Bangladesh · Sri Lanka · Afghanistan · Uzbekistan' },
  { region: 'Southeast Asia & Far East', places: 'China · Vietnam · Thailand · Malaysia · Indonesia · Singapore' },
  { region: 'Europe & CIS', places: 'Netherlands · Turkey · Ukraine · Russia · Georgia · Poland' },
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

/* ── Testimonials ──────────────────────────────────────────────────────────── */

/**
 * ⚠️ ILLUSTRATIVE ONLY — these are written examples, not real client feedback.
 * Publishing invented testimonials on a live company site is a genuine legal and
 * reputational risk. Replace them with quotes you have permission to use, or
 * delete the <Testimonials /> section from src/pages/Home.jsx.
 */
export const testimonials = [
  {
    quote:
      'We had been buying reefer produce through three different agents. TRANSCOM took the whole programme, held the specification and cut our rejection rate to almost nothing. Two years on we have not put it back out to tender.',
    name: 'Procurement Director',
    role: 'Retail group, Nairobi',
  },
  {
    quote:
      'Their pre-shipment photographs have saved us twice — once on a wrong pack size and once on a damaged pallet, both caught in Dubai instead of at our gate. That is what we actually pay a trader for.',
    name: 'Supply Chain Manager',
    role: 'Foodservice distributor, Muscat',
  },
  {
    quote:
      'Solar BOM from six vendors, one container, one invoice, on the date they promised. For an EPC running a fixed programme that is worth more than a two per cent price difference.',
    name: 'Project Manager',
    role: 'EPC contractor, Dar es Salaam',
  },
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
