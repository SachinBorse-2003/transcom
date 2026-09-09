import { useState } from 'react'
import Icon from '../components/Icon'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { SectionHeading } from '../components/ui'
import { company, divisions } from '../data/site'
import usePageMeta from '../lib/usePageMeta'

const initial = {
  name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  division: '',
  quantity: '',
  message: '',
}

function Field({ label, name, value, onChange, error, type = 'text', required, placeholder, children }) {
  const id = `field-${name}`
  return (
    <div className={children ? 'sm:col-span-2' : ''}>
      <label htmlFor={id} className="block font-display text-[12px] font-semibold tracking-wide text-navy-950 uppercase">
        {label} {required && <span className="text-gold-600">*</span>}
      </label>
      {children ? (
        children(id)
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`mt-2.5 w-full border bg-white px-4 py-3.5 text-[14.5px] transition outline-none placeholder:text-navy-900/30 focus:border-gold-500 ${
            error ? 'border-red-400' : 'border-navy-950/15'
          }`}
        />
      )}
      {error && <p className="mt-1.5 text-[12.5px] text-red-500">{error}</p>}
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  usePageMeta({
    title: 'Contact TRANSCOM General Trading L.L.C — Dubai, U.A.E.',
    description:
      'Send your product, quantity and destination and receive a firm offer within 24 working hours. Offices in Bur Dubai, United Arab Emirates.',
  })

  const update = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    setErrors((err) => ({ ...err, [name]: undefined }))
  }

  const submit = (e) => {
    e.preventDefault()
    const next = {}
    if (!form.name.trim()) next.name = 'Please tell us your name.'
    if (!form.email.trim()) next.email = 'We need an email to send the offer to.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email)) next.email = 'That email address looks incomplete.'
    if (!form.message.trim()) next.message = 'Describe the product and quantity you need.'

    setErrors(next)
    if (Object.keys(next).length) return

    /**
     * No backend is wired up. The form composes a pre-filled email so the
     * enquiry still reaches the desk. To collect submissions server-side,
     * point this at Formspree, Web3Forms, or your own endpoint:
     *   await fetch('https://api.web3forms.com/submit', { method: 'POST', body: ... })
     */
    const body = [
      `Name: ${form.name}`,
      `Company: ${form.company || '—'}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || '—'}`,
      `Destination country: ${form.country || '—'}`,
      `Division: ${form.division || '—'}`,
      `Quantity / volume: ${form.quantity || '—'}`,
      '',
      'Enquiry:',
      form.message,
    ].join('\n')

    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      `Trade enquiry — ${form.company || form.name}`,
    )}&body=${encodeURIComponent(body)}`

    setSent(true)
    setForm(initial)
  }

  const details = [
    {
      icon: 'pin',
      title: 'Address',
      lines: company.address.lines,
    },
    {
      icon: 'phone',
      title: 'Phone & WhatsApp',
      lines: [company.phone],
      links: [`tel:${company.phoneHref}`],
    },
    {
      icon: 'mail',
      title: 'Email',
      lines: [company.email],
      links: [`mailto:${company.email}`],
    },
    { icon: 'clock', title: 'Working hours', lines: [company.hours] },
  ]

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you need"
        lead="Product, quantity and destination is enough to start. We reply in 24 hours."
        image="photo-1512453979798-5ea266f8880c"
        crumbs={[{ label: 'Contact' }]}
      />

      {/* Contact cards */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-x">
          <div className="grid gap-px bg-navy-950/8 sm:grid-cols-2 lg:grid-cols-4">
            {details.map((d, i) => (
              <Reveal key={d.title} delay={i * 80} className="bg-white p-8">
              <span className="grid h-12 w-12 place-items-center bg-navy-950 text-gold-400">
                <Icon name={d.icon} className="h-5 w-5" />
              </span>
              <h2 className="mt-6 font-display text-[15px] font-semibold">{d.title}</h2>
              <div className="mt-3 space-y-1">
                {d.lines.map((line, j) =>
                  d.links?.[j] ? (
                    <a
                      key={line}
                      href={d.links[j]}
                      className="block text-[14px] text-navy-900/65 transition hover:text-gold-600"
                    >
                      {line}
                    </a>
                  ) : (
                    <p key={line} className="text-[14px] leading-relaxed text-navy-900/65">
                      {line}
                    </p>
                  ),
                )}
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + map */}
      <section className="bg-sand-50 py-20 lg:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Get a price"
              title="Send us your enquiry"
              lead="The more detail you give, the better the price."
            />

            {sent && (
              <div className="mt-8 flex items-start gap-4 border-l-2 border-gold-500 bg-white p-5">
                <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" strokeWidth={2.5} />
                <p className="text-[14.5px] leading-relaxed text-navy-900/75">
                  Your email client should have opened with the enquiry ready to send. If nothing happened,
                  write to{' '}
                  <a href={`mailto:${company.email}`} className="font-semibold text-gold-600 underline">
                    {company.email}
                  </a>{' '}
                  directly.
                </p>
              </div>
            )}

            <form onSubmit={submit} noValidate className="mt-9 grid gap-6 sm:grid-cols-2">
              <Field label="Full name" name="name" value={form.name} onChange={update} error={errors.name} required placeholder="Your name" />
              <Field label="Company" name="company" value={form.company} onChange={update} placeholder="Company name" />
              <Field label="Email" name="email" type="email" value={form.email} onChange={update} error={errors.email} required placeholder="you@company.com" />
              <Field label="Phone / WhatsApp" name="phone" value={form.phone} onChange={update} placeholder="+971 …" />
              <Field label="Destination country" name="country" value={form.country} onChange={update} placeholder="e.g. Kenya" />

              <Field label="Division" name="division">
                {(id) => (
                  <select
                    id={id}
                    name="division"
                    value={form.division}
                    onChange={update}
                    className="mt-2.5 w-full border border-navy-950/15 bg-white px-4 py-3.5 text-[14.5px] transition outline-none focus:border-gold-500"
                  >
                    <option value="">Select a division…</option>
                    {divisions.map((d) => (
                      <option key={d.slug} value={d.name}>
                        {d.name}
                      </option>
                    ))}
                    <option value="Other / mixed">Other or mixed cargo</option>
                  </select>
                )}
              </Field>

              <Field label="Quantity or volume" name="quantity" value={form.quantity} onChange={update} placeholder="e.g. 2 x 40ft reefer / month" />

              <Field label="Your enquiry" name="message" error={errors.message} required>
                {(id) => (
                  <textarea
                    id={id}
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={update}
                    placeholder="What you need, how much, and when you need it."
                    className={`mt-2.5 w-full resize-y border bg-white px-4 py-3.5 text-[14.5px] transition outline-none placeholder:text-navy-900/30 focus:border-gold-500 ${
                      errors.message ? 'border-red-400' : 'border-navy-950/15'
                    }`}
                  />
                )}
              </Field>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2.5 bg-navy-950 px-8 py-4 font-display text-[13px] font-semibold text-white transition-all duration-300 hover:bg-gold-500 hover:text-navy-950 sm:w-auto"
                >
                  Send enquiry
                  <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
                </button>
                <p className="mt-4 text-[12.5px] text-navy-900/50">
                  We reply within 24 hours. We only use your details to answer your enquiry.
                </p>
              </div>
            </form>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-[380px] w-full bg-navy-900 lg:h-[460px]">
              <iframe
                title="TRANSCOM General Trading office location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(company.address.mapQuery)}&output=embed`}
                className="h-full w-full border-0 grayscale-[35%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-6 bg-navy-950 p-8 text-white">
              <h3 className="font-display text-[17px] font-semibold">Prefer to talk it through?</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-white/60">
                We answer the phone from 09:00 to 18:00, Sunday to Thursday. For anything urgent, WhatsApp is
                fastest.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`tel:${company.phoneHref}`}
                  className="inline-flex items-center gap-2 border border-white/25 px-5 py-3 font-display text-[12.5px] font-semibold transition hover:border-gold-500 hover:bg-gold-500 hover:text-navy-950"
                >
                  <Icon name="phone" className="h-4 w-4" />
                  Call
                </a>
                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-white/25 px-5 py-3 font-display text-[12.5px] font-semibold transition hover:border-gold-500 hover:bg-gold-500 hover:text-navy-950"
                >
                  <Icon name="whatsapp" className="h-4 w-4" />
                  WhatsApp
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="inline-flex items-center gap-2 border border-white/25 px-5 py-3 font-display text-[12.5px] font-semibold transition hover:border-gold-500 hover:bg-gold-500 hover:text-navy-950"
                >
                  <Icon name="mail" className="h-4 w-4" />
                  Email
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
