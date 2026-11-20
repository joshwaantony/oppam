'use client'

import React, { useState } from 'react'
import { ArrowLeft, ArrowRight, CalendarCheck, Check, Info, ShieldCheck, Tag, UserRound } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'
import {
  getHomeCareCategory,
  getHomeCareServicesByCategory,
  type HomeCareService,
} from '@/lib/homeCareData'
import { whatsappLink } from '@/lib/contact'
import { Navbar } from '@/components/Navbar'
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp'
import { SiteFooter } from '@/components/SiteFooter'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'
import { HomeCareCard } from '@/components/home-care/HomeCareCard'
import { HomeCareEnquiryForm } from '@/components/home-care/HomeCareEnquiryForm'
import { ServiceTypeBadge } from '@/components/home-care/ServiceTypeBadge'
import { homeCareIcons } from '@/components/home-care/homeCareIcons'

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3.5" data-reveal-stagger="left">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-base leading-7 text-[#123D32]">
          <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#EAF4E8] text-[#075C42]">
            <Check size={14} strokeWidth={2.6} aria-hidden="true" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}

function ContentBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-[#DCE7D8] bg-white p-6 shadow-xs sm:p-8">
      <h2 className="mb-6 text-xl font-bold tracking-[-0.02em] text-[#075C42] sm:text-2xl" data-reveal="heading">
        {title}
      </h2>
      {children}
    </div>
  )
}

export function HomeCareServiceDetail({ service }: { service: HomeCareService }) {
  const { language } = useLanguage()
  const t = translations[language].homeCare
  const isMl = language === 'ml'

  const [selectedSlug, setSelectedSlug] = useState(service.slug)

  const category = getHomeCareCategory(service.category)
  const related = getHomeCareServicesByCategory(service.category)
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3)
  const Icon = homeCareIcons[service.icon]
  const provider = t.providers[service.serviceType]
  const title = isMl ? service.titleMl : service.title
  const isNurse = service.serviceType === 'nursing-professional'
  const whatsappMessage = `Hello Oppam Care, I would like to enquire about ${service.title} (Home Care) in Alappuzha.`

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#F8F6EE] text-[#123D32]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#DCE7D8] bg-[#EAF3E6] px-6 py-12 lg:px-10 lg:py-16">
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#DCEBD5] opacity-70 blur-3xl"
          aria-hidden="true"
          data-ambient="aura"
        />
        <div className="relative mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <nav aria-label="Breadcrumb" data-reveal="left">
              <a
                href="/home-care"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#075C42] transition hover:text-[#054631]"
              >
                <ArrowLeft size={16} /> {t.backToList}
              </a>
            </nav>
            <div className="mt-6" data-reveal-stagger style={{ '--stagger-base': '120ms' } as React.CSSProperties}>
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="h-[1.5px] w-8 bg-[#C58A3E]" aria-hidden="true" />
                <a
                  href={`/home-care#${service.category}`}
                  className="text-xs font-bold uppercase tracking-[0.18em] text-[#C58A3E] hover:underline"
                >
                  {category && (isMl ? category.titleMl : category.title)}
                </a>
              </div>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.03em] text-[#075C42] sm:text-4xl lg:text-5xl">
                {title}
              </h1>
              <div className="mt-4">
                <ServiceTypeBadge type={service.serviceType} label={t.badges[service.serviceType]} />
              </div>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#4A5A50] sm:text-lg">{service.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#enquire"
                  data-shine
                  data-magnetic
                  className="inline-flex items-center gap-2 rounded-full bg-[#075C42] px-6 py-3.5 font-semibold text-white shadow-[0_12px_26px_rgba(7,92,66,0.25)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#054631]"
                >
                  {t.bookNow} <ArrowRight size={18} />
                </a>
                <a
                  href={whatsappLink(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#075C42]/25 bg-white px-6 py-3.5 font-semibold text-[#075C42] transition hover:border-[#075C42]/50 hover:bg-[#F8F6EE]"
                >
                  <WhatsAppIcon size={18} className="text-[#25D366]" /> {t.enquireNow}
                </a>
              </div>
            </div>
          </div>

          {service.image ? (
            <div
              className="relative overflow-hidden rounded-[2.2rem] border border-[#C88A16]/30 bg-[#DCEBD5] p-3 shadow-[0_20px_50px_rgba(7,92,66,0.12)]"
              data-reveal="image"
            >
              <img
                src={service.image.src}
                alt={service.image.alt}
                className="aspect-[16/10] w-full rounded-[1.8rem] object-cover"
                width={1376}
                height={768}
              />
            </div>
          ) : (
            <div
              className="relative hidden overflow-hidden rounded-[2.2rem] border border-[#C88A16]/30 bg-white p-8 shadow-[0_20px_50px_rgba(7,92,66,0.12)] sm:block lg:p-10"
              data-reveal="image"
            >
              <div className="flex items-center gap-5">
                <span className="flex size-20 shrink-0 items-center justify-center rounded-[1.6rem] bg-[#075C42] text-white shadow-[0_12px_26px_rgba(7,92,66,0.25)]">
                  <Icon size={38} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C88A16]">
                    {category && (isMl ? category.titleMl : category.title)}
                  </p>
                  <p className="mt-1 text-lg font-bold text-[#123D32]">{title}</p>
                </div>
              </div>
              <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.16em] text-[#557366]">{t.keyBenefits}</p>
              <ul className="mt-3 space-y-2.5">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm font-semibold text-[#123D32]">
                    <Check size={16} strokeWidth={2.6} className="mt-0.5 shrink-0 text-[#075C42]" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Details */}
      <section className="mx-auto grid max-w-[1280px] gap-6 px-6 py-14 lg:grid-cols-[1.35fr_0.9fr] lg:gap-8 lg:px-10 lg:py-20">
        <div className="grid h-fit gap-6">
          <ContentBlock title={t.includedTitle}>
            <CheckList items={service.features} />
          </ContentBlock>
          <ContentBlock title={t.whoNeedsTitle}>
            <CheckList items={service.suitableFor} />
          </ContentBlock>
          <ContentBlock title={t.benefitsTitle}>
            <CheckList items={service.benefits} />
          </ContentBlock>
        </div>

        <aside className="grid h-fit gap-6 lg:sticky lg:top-28">
          {/* Caregiver information */}
          <div
            className={`rounded-3xl border p-6 sm:p-7 ${
              isNurse ? 'border-[#C88A16]/30 bg-[#FFFDF7]' : 'border-[#DCE7D8] bg-white'
            }`}
            data-reveal="scale"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C88A16]">{t.caregiverInfoTitle}</p>
            <div className="mt-4 flex items-center gap-3">
              <span
                className={`flex size-11 items-center justify-center rounded-2xl ${
                  isNurse ? 'bg-[#C88A16]/15 text-[#8B6112]' : 'bg-[#EAF4E8] text-[#075C42]'
                }`}
              >
                {isNurse ? <ShieldCheck size={21} /> : <UserRound size={21} />}
              </span>
              <h2 className="text-lg font-bold text-[#123D32]">{provider.title}</h2>
            </div>
            <ul className="mt-5 space-y-3">
              {provider.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm leading-6 text-[#34594B]">
                  <Check size={16} strokeWidth={2.6} className="mt-1 shrink-0 text-[#075C42]" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Service options + pricing */}
          <div className="rounded-3xl border border-[#DCE7D8] bg-white p-6 sm:p-7" data-reveal="scale">
            <div className="flex items-center gap-2.5">
              <CalendarCheck size={18} className="text-[#075C42]" aria-hidden="true" />
              <h2 className="text-base font-bold text-[#123D32]">{t.optionsTitle}</h2>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {service.availability.options.map((opt) => (
                <li
                  key={opt}
                  className="rounded-full bg-[#EAF3E6] px-3 py-1.5 text-xs font-semibold text-[#075C42] ring-1 ring-[#075C42]/10"
                >
                  {t.serviceOptions[opt]}
                </li>
              ))}
            </ul>
            {service.availability.note && (
              <p className="mt-3 text-sm leading-6 text-[#557366]">{service.availability.note}</p>
            )}

            <div className="mt-6 border-t border-[#F0F5EE] pt-5">
              <div className="flex items-center gap-2.5">
                <Tag size={17} className="text-[#075C42]" aria-hidden="true" />
                <h2 className="text-base font-bold text-[#123D32]">{t.pricingTitle}</h2>
              </div>
              <p className="mt-2 text-sm leading-6 text-[#557366]">
                {service.pricing ? service.pricing.label : t.pricingOnEnquiry}
              </p>
            </div>

            <a
              href="#enquire"
              data-shine
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#075C42] py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-[#054631]"
            >
              {t.bookNow} <ArrowRight size={16} />
            </a>
          </div>

          <p className="flex items-start gap-3 rounded-2xl border border-[#C88A16]/30 bg-[#FFFDF7] px-5 py-4 text-sm font-semibold leading-6 text-[#8B6112]">
            <Info size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
            {t.emergencyNote}
          </p>
        </aside>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="mx-auto max-w-[1280px] px-6 pb-20 lg:px-10">
          <h2 className="mb-8 text-2xl font-bold tracking-[-0.03em] text-[#075C42] sm:text-3xl" data-reveal="heading">
            {t.relatedTitle}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-reveal-stagger="scale">
            {related.map((s) => (
              <HomeCareCard key={s.id} service={s} />
            ))}
          </div>
        </section>
      )}

      <HomeCareEnquiryForm serviceSlug={selectedSlug} onServiceChange={setSelectedSlug} />

      <SiteFooter />
      <FloatingWhatsApp />
    </main>
  )
}

export default HomeCareServiceDetail
