'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { Clock3, Mail, MapPin, Moon, Phone, Sun, Sunrise, Sunset } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'
import { getHomeCareServices } from '@/lib/homeCareData'
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  openWhatsApp,
  whatsappLink,
} from '@/lib/contact'
import { ServiceSelect } from '@/components/ServiceSelect'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'
import { homeCareIcons } from '@/components/home-care/homeCareIcons'

const timeIcons = [Sunrise, Sun, Sunset, Moon, Clock3]

const inputClass =
  'mt-2 w-full rounded-xl border border-[#DCE7D8] bg-[#FBFDF9] px-4 py-3.5 font-normal outline-none transition focus:border-[#075C42] focus:ring-2 focus:ring-[#8DBB4D]/30'

interface HomeCareEnquiryFormProps {
  /** Slug of the selected service (controlled). */
  serviceSlug: string
  onServiceChange: (slug: string) => void
}

/**
 * Home care enquiry / booking form. Mirrors the site's existing request flow:
 * there is no backend, so the enquiry is composed into a WhatsApp message.
 * To connect an API later, replace the `openWhatsApp` call in `handleSubmit`.
 */
export function HomeCareEnquiryForm({ serviceSlug, onServiceChange }: HomeCareEnquiryFormProps) {
  const { language } = useLanguage()
  const t = translations[language].homeCare
  const f = t.form
  const request = translations[language].request

  const services = getHomeCareServices()
  const serviceLabels = useMemo(
    () => services.map((s) => (language === 'ml' ? s.titleMl : s.title)),
    [services, language]
  )
  const serviceIcons = useMemo(() => services.map((s) => homeCareIcons[s.icon]), [services])
  const selectedIndex = Math.max(
    0,
    services.findIndex((s) => s.slug === serviceSlug)
  )

  const [timeIndex, setTimeIndex] = useState(f.timeOptions.length - 1)
  const [minDate, setMinDate] = useState<string>()
  const [formData, setFormData] = useState({
    name: '',
    recipient: '',
    phone: '',
    date: '',
    location: '',
    details: '',
  })

  // Computed on the client only so server and client markup match.
  useEffect(() => {
    const now = new Date()
    const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
    setMinDate(local.toISOString().slice(0, 10))
  }, [])

  const update = (field: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const service = services[selectedIndex]

    const lines = [
      f.greeting,
      '',
      `• *${f.nameLabel}:* ${formData.name.trim()}`,
      `• *${f.phoneLabel}:* ${formData.phone.trim()}`,
      formData.recipient.trim() ? `• *${f.recipientLabel}:* ${formData.recipient.trim()}` : null,
      // Always include the English title so the team can identify the service.
      `• *${f.serviceLabel}:* ${service.title}${language === 'ml' ? ` (${service.titleMl})` : ''}`,
      formData.date ? `• *${f.dateLabel}:* ${formData.date}` : null,
      `• *${f.timeLabel}:* ${f.timeOptions[timeIndex]}`,
      `• *${f.locationLabel}:* ${formData.location.trim()}`,
      formData.details.trim() ? `• *${f.detailsLabel}:* ${formData.details.trim()}` : null,
    ].filter(Boolean)

    openWhatsApp(lines.join('\n'))
  }

  return (
    <section id="enquire" className="scroll-mt-24 bg-[#EAF3E6] px-6 py-20 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-[1140px] gap-12 lg:grid-cols-[0.8fr_1fr]">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#C88A16]" data-reveal>
            {f.tag}
          </p>
          <h2
            className="text-3xl font-bold leading-tight tracking-[-0.03em] text-[#075C42] sm:text-4xl lg:text-5xl"
            data-reveal="heading"
            style={{ '--rd': '90ms' } as React.CSSProperties}
          >
            {f.headline}
          </h2>
          <p
            className="mt-5 text-base leading-8 text-[#4E6B5D] sm:text-lg"
            data-reveal
            style={{ '--rd': '200ms' } as React.CSSProperties}
          >
            {f.description}
          </p>
          <div className="mt-8 flex flex-col gap-4 text-sm font-semibold text-[#123D32]" data-reveal-stagger="left">
            <a href={`tel:${CONTACT_PHONE_TEL}`} className="flex items-center gap-3 transition hover:text-[#075C42]">
              <Phone size={18} className="text-[#075C42]" /> {CONTACT_PHONE_DISPLAY}
            </a>
            <a
              href={whatsappLink(f.greeting)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition hover:text-[#075C42]"
            >
              <WhatsAppIcon size={18} className="text-[#25D366]" /> WhatsApp: {CONTACT_PHONE_DISPLAY}
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 transition hover:text-[#075C42]">
              <Mail size={18} className="text-[#075C42]" /> {CONTACT_EMAIL}
            </a>
          </div>
          <p className="mt-8 rounded-2xl border border-[#C88A16]/30 bg-[#FFFDF7] px-5 py-4 text-sm font-semibold leading-6 text-[#8B6112]" data-reveal="fade">
            {t.emergencyNote}
          </p>
        </div>

        <form
          className="rounded-3xl bg-white p-6 shadow-[0_18px_45px_rgba(7,92,66,0.08)] sm:p-9"
          data-reveal="right"
          style={{ '--rd': '150ms' } as React.CSSProperties}
          onSubmit={handleSubmit}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-bold text-[#123D32]">
              {f.nameLabel}
              <input
                required
                autoComplete="name"
                value={formData.name}
                onChange={update('name')}
                className={inputClass}
                placeholder={f.namePlaceholder}
              />
            </label>
            <label className="text-sm font-bold text-[#123D32]">
              {f.phoneLabel}
              <input
                required
                type="tel"
                autoComplete="tel"
                value={formData.phone}
                onChange={update('phone')}
                className={inputClass}
                placeholder={f.phonePlaceholder}
              />
            </label>
            <label className="text-sm font-bold text-[#123D32] sm:col-span-2">
              {f.recipientLabel}
              <input
                value={formData.recipient}
                onChange={update('recipient')}
                className={inputClass}
                placeholder={f.recipientPlaceholder}
              />
            </label>
            <div className="sm:col-span-2">
              <ServiceSelect
                label={f.serviceLabel}
                value={serviceLabels[selectedIndex]}
                options={serviceLabels}
                icons={serviceIcons}
                onChange={(label) => {
                  const index = serviceLabels.indexOf(label)
                  if (index >= 0) onServiceChange(services[index].slug)
                }}
              />
            </div>
            <label className="text-sm font-bold text-[#123D32]">
              {f.dateLabel}
              <input
                type="date"
                min={minDate}
                value={formData.date}
                onChange={update('date')}
                className={inputClass}
              />
            </label>
            <ServiceSelect
              label={f.timeLabel}
              value={f.timeOptions[timeIndex]}
              options={f.timeOptions}
              icons={timeIcons}
              onChange={(label) => setTimeIndex(Math.max(0, f.timeOptions.indexOf(label)))}
            />
            <label className="text-sm font-bold text-[#123D32] sm:col-span-2">
              {f.locationLabel}
              <span className="relative block">
                <MapPin
                  size={17}
                  className="pointer-events-none absolute left-4 top-1/2 mt-1 -translate-y-1/2 text-[#075C42]"
                  aria-hidden="true"
                />
                <input
                  required
                  autoComplete="address-level2"
                  value={formData.location}
                  onChange={update('location')}
                  className={`${inputClass} pl-11`}
                  placeholder={f.locationPlaceholder}
                />
              </span>
            </label>
          </div>
          <label className="mt-5 block text-sm font-bold text-[#123D32]">
            {f.detailsLabel}
            <textarea
              value={formData.details}
              onChange={update('details')}
              className="mt-2 min-h-28 w-full resize-y rounded-xl border border-[#DCE7D8] bg-[#FBFDF9] px-4 py-3.5 font-normal outline-none focus:border-[#075C42]"
              placeholder={f.detailsPlaceholder}
            />
          </label>
          <button
            type="submit"
            data-shine
            className="mt-6 flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-[#075C42] px-6 py-4 font-semibold text-white shadow-md transition duration-200 hover:bg-[#054631]"
          >
            <WhatsAppIcon size={19} className="text-[#25D366]" />
            {f.submitBtn}
          </button>
          <p className="mt-4 text-center text-xs text-[#557366]">{request.privacyNote}</p>
        </form>
      </div>
    </section>
  )
}

export default HomeCareEnquiryForm
