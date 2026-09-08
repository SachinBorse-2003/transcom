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
    'A Dubai trading company. We buy food, machinery and fuel from checked suppliers and ship it to buyers in over 25 countries.',

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
    id: 'food',
    name: 'Food & Agriculture',
    blurb: 'Fresh, chilled and frozen food for shops, caterers and wholesalers.',
  },
  {
    id: 'industrial',
    name: 'Industrial & Mobility',
    blurb: 'Machines, vehicle parts and electronics, sold by the container.',
  },
  {
    id: 'energy',
    name: 'Energy & Power',
    blurb: 'Fuel, solar and electrical supply for utilities and contractors.',
  },
]

export const divisions = [
  {
    slug: 'meat-poultry',
    group: 'food',
    name: 'Meat, Poultry & Eggs',
    short: 'Meat & Poultry',
    tagline: 'HALAL meat, chicken and eggs from approved suppliers.',
    image: 'photo-1607623814075-e51df1bdc82f',
    blurb:
      'All meat comes from plants approved by U.A.E. authorities, slaughtered under HALAL supervision. Every batch can be traced back to its source.',
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
    tagline: 'Fish, shrimp and frozen seafood kept at −18 °C.',
    image: 'photo-1615141982883-c7ad0e69fd62',
    blurb:
      'Whole fish, fillets, shrimp and squid from Oman, India, Vietnam and Ecuador. We tell you the ice glaze, size and packing before you buy.',
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
    tagline: 'Cooking oil, rice, sugar and flour in bulk or packed.',
    image: 'photo-1626808642875-0aa545482dfb',
    blurb:
      'Cooking oil, rice, sugar, pulses and flour by the container. We can also pack it under your own brand.',
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
  {
    slug: 'heavy-equipment',
    group: 'industrial',
    name: 'Heavy Equipment & Machinery',
    short: 'Heavy Equipment',
    tagline: 'New and used machines for construction and quarries.',
    image: 'photo-1621922688758-359fc864071e',
    blurb:
      'Diggers, loaders and lifting gear. We check the hours and send you a written condition report with photos before you pay.',
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
    tagline: 'Parts for Japanese, Korean, European and American vehicles.',
    image: 'photo-1487754180451-c456f719a1fc',
    blurb:
      'We pick parts against your chassis or part number, photograph them before packing, and combine orders to keep shipping costs down.',
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
    tagline: 'Phones and accessories, in the right spec for your market.',
    image: 'photo-1573148195900-7845dcb9b127',
    blurb:
      'Genuine phones, tablets and accessories, matched to the plug type, network bands and warranty rules of your market.',
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
    slug: 'electrical-components',
    group: 'energy',
    name: 'Electrical & Electronic Components',
    short: 'Electrical Components',
    tagline: 'Switchgear, cable and fittings for electrical work.',
    image: 'photo-1518770660439-4636190af475',
    blurb:
      'Low and medium voltage equipment built to IEC and BS standards, with the maker\'s certificates included.',
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
    slug: 'solar-energy',
    group: 'energy',
    name: 'Solar & Renewable Energy',
    short: 'Solar & Renewables',
    tagline: 'Panels, inverters and mounting for solar projects.',
    image: 'photo-1509391366360-2e959784a276',
    blurb:
      'Full solar packages for contractors — panels, inverters, mounting and cable in one container, on one invoice.',
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
    slug: 'petroleum-products',
    group: 'energy',
    name: 'Petroleum Products & Lubricants',
    short: 'Petroleum & Lubricants',
    tagline: 'Diesel, fuel oil and lubricants from Gulf refineries.',
    image: 'photo-1516937941344-00b4e0337589',
    blurb:
      'Fuel and lubricants straight from Gulf refineries and licensed storage. Every load is inspected before it ships.',
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
  { icon: 'search', title: 'Finding suppliers', text: 'We check the supplier and agree the price for you.' },
  { icon: 'ship', title: 'Import & export papers', text: 'Invoices, origin certificates and bank documents.' },
  { icon: 'truck', title: 'Shipping', text: 'By sea, air or road through Jebel Ali and Dubai airport.' },
  { icon: 'warehouse', title: 'Storage', text: 'Dry, chilled and frozen storage in Dubai.' },
  { icon: 'shield', title: 'Checking goods', text: 'Inspected and photographed before loading.' },
  { icon: 'file', title: 'Payment terms', text: 'Letters of credit, CAD and bank guarantees.' },
  { icon: 'box', title: 'Your own brand', text: 'We can pack goods under your label.' },
  { icon: 'chart', title: 'Price updates', text: 'Weekly prices on the goods you buy.' },
]

/* ── Process ───────────────────────────────────────────────────────────────── */

export const process = [
  { step: '01', title: 'You ask', text: 'Tell us the product, the quantity and where it goes.' },
  { step: '02', title: 'We quote', text: 'A written price with terms, valid for a set number of days.' },
  { step: '03', title: 'We check', text: 'Goods inspected and photographed before the container is sealed.' },
  { step: '04', title: 'We deliver', text: 'Tracking, arrival papers and one person to call if anything is wrong.' },
]

/* ── Markets ───────────────────────────────────────────────────────────────── */

/**
 * Points plotted on the 3D globe in the hero.
 *
 * `tradeRoutes` get a drawn arc from Dubai plus a travelling pulse; `tradePorts`
 * are plotted as markers only, so the network reads as dense without turning
 * into a ball of string. Add to either list and the globe picks it up.
 */
export const tradeHub = { name: 'Dubai', lat: 25.2, lon: 55.27 }

export const tradeRoutes = [
  { name: 'Jeddah', lat: 21.49, lon: 39.19 },
  { name: 'Riyadh', lat: 24.71, lon: 46.68 },
  { name: 'Doha', lat: 25.29, lon: 51.53 },
  { name: 'Muscat', lat: 23.59, lon: 58.41 },
  { name: 'Djibouti', lat: 11.59, lon: 43.15 },
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
  { name: 'Chennai', lat: 13.08, lon: 80.27 },
  { name: 'Hong Kong', lat: 22.32, lon: 114.17 },
  { name: 'Durban', lat: -29.86, lon: 31.02 },
  { name: 'Hamburg', lat: 53.55, lon: 9.99 },
]

export const tradePorts = [
  // Gulf & Middle East
  { name: 'Kuwait City', lat: 29.38, lon: 47.99 },
  { name: 'Manama', lat: 26.23, lon: 50.59 },
  { name: 'Basra', lat: 30.51, lon: 47.78 },
  { name: 'Amman', lat: 31.95, lon: 35.93 },
  { name: 'Beirut', lat: 33.89, lon: 35.5 },
  { name: 'Aqaba', lat: 29.53, lon: 35.0 },
  { name: 'Salalah', lat: 17.02, lon: 54.09 },
  { name: 'Sohar', lat: 24.34, lon: 56.71 },
  { name: 'Bandar Abbas', lat: 27.19, lon: 56.28 },
  { name: 'Aden', lat: 12.79, lon: 45.02 },
  // Africa
  { name: 'Alexandria', lat: 31.2, lon: 29.92 },
  { name: 'Tripoli', lat: 32.89, lon: 13.19 },
  { name: 'Tunis', lat: 36.8, lon: 10.18 },
  { name: 'Algiers', lat: 36.75, lon: 3.06 },
  { name: 'Casablanca', lat: 33.57, lon: -7.59 },
  { name: 'Dakar', lat: 14.72, lon: -17.47 },
  { name: 'Abidjan', lat: 5.36, lon: -4.01 },
  { name: 'Accra', lat: 5.6, lon: -0.19 },
  { name: 'Douala', lat: 4.05, lon: 9.7 },
  { name: 'Luanda', lat: -8.84, lon: 13.23 },
  { name: 'Port Sudan', lat: 19.62, lon: 37.22 },
  { name: 'Khartoum', lat: 15.5, lon: 32.56 },
  { name: 'Addis Ababa', lat: 9.03, lon: 38.74 },
  { name: 'Berbera', lat: 10.44, lon: 45.01 },
  { name: 'Mogadishu', lat: 2.05, lon: 45.32 },
  { name: 'Nairobi', lat: -1.29, lon: 36.82 },
  { name: 'Kampala', lat: 0.35, lon: 32.58 },
  { name: 'Beira', lat: -19.84, lon: 34.84 },
  { name: 'Maputo', lat: -25.97, lon: 32.57 },
  { name: 'Cape Town', lat: -33.92, lon: 18.42 },
  // Europe & CIS
  { name: 'Antwerp', lat: 51.22, lon: 4.4 },
  { name: 'Valencia', lat: 39.47, lon: -0.38 },
  { name: 'Genoa', lat: 44.41, lon: 8.93 },
  { name: 'Piraeus', lat: 37.94, lon: 23.65 },
  { name: 'Constanta', lat: 44.17, lon: 28.64 },
  { name: 'Odesa', lat: 46.48, lon: 30.72 },
  { name: 'Novorossiysk', lat: 44.72, lon: 37.77 },
  { name: 'Poti', lat: 42.15, lon: 41.67 },
  { name: 'Baku', lat: 40.41, lon: 49.87 },
  // South, Central & East Asia
  { name: 'Kandla', lat: 23.03, lon: 70.22 },
  { name: 'Kolkata', lat: 22.57, lon: 88.36 },
  { name: 'Lahore', lat: 31.55, lon: 74.34 },
  { name: 'Kabul', lat: 34.53, lon: 69.17 },
  { name: 'Male', lat: 4.17, lon: 73.51 },
  { name: 'Chittagong', lat: 22.36, lon: 91.78 },
  { name: 'Tashkent', lat: 41.3, lon: 69.24 },
  { name: 'Almaty', lat: 43.24, lon: 76.89 },
  { name: 'Yangon', lat: 16.87, lon: 96.2 },
  { name: 'Bangkok', lat: 13.76, lon: 100.5 },
  { name: 'Ho Chi Minh City', lat: 10.82, lon: 106.63 },
  { name: 'Port Klang', lat: 3.0, lon: 101.39 },
  { name: 'Jakarta', lat: -6.21, lon: 106.85 },
  { name: 'Manila', lat: 14.6, lon: 120.98 },
  { name: 'Qingdao', lat: 36.07, lon: 120.38 },
  { name: 'Busan', lat: 35.18, lon: 129.08 },
  // Sourcing origins in the Americas
  { name: 'Guayaquil', lat: -2.17, lon: -79.92 },
  { name: 'Santos', lat: -23.96, lon: -46.33 },
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
