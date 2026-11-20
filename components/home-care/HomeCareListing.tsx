'use client'

import React, { useState } from 'react'
import { ArrowLeft, ArrowRight, Info } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'
import {
  getHomeCareServices,
  getHomeCareServicesByCategory,
  homeCareCategories,
  type HomeCareCategoryId,
} from '@/lib/homeCareData'
import { Navbar } from '@/components/Navbar'
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp'
import { SiteFooter } from '@/components/SiteFooter'
import { HomeCareCard } from '@/components/home-care/HomeCareCard'
import { HomeCareEnquiryForm } from '@/components/home-care/HomeCareEnquiryForm'
import { homeCareIcons } from '@/components/home-care/homeCareIcons'

type Filter = 'all' | HomeCareCategoryId

export function HomeCareListing() {
  const { language } = useLanguage()
  const t = translations[language].homeCare
  const isMl = language === 'ml'

  const [filter, setFilter] = useState<Filter>('all')
  const [selectedSlug, setSelectedSlug] = useState(getHomeCareServices()[0].slug)

  const visibleCategories =
    filter === 'all' ? homeCareCategories : homeCareCategories.filter((c) => c.id === filter)

  const handleBook = (slug: string) => {
    setSelectedSlug(slug)
    document.getElementById('enquire')?.scrollIntoView({ behavior: 'smooth' })
  }

  const filters: Array<{ id: Filter; label: string; count: number }> = [
    { id: 'all', label: t.allCategories, count: getHomeCareServices().length },
    ...homeCareCategories.map((c) => ({
      id: c.id,
      label: isMl ? c.titleMl : c.title,
      count: getHomeCareServicesByCategory(c.id).length,
    })),
  ]

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#F8F6EE] text-[#123D32]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#DCE7D8] bg-[#EAF3E6] px-6 py-12 lg:px-10 lg:py-20">
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#DCEBD5] opacity-70 blur-3xl"
          aria-hidden="true"
          data-ambient="aura"
        />
        <div className="relative mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <a
              href="/"
              data-reveal="left"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#075C42] transition hover:text-[#054631]"
            >
              <ArrowLeft size={16} /> {t.backHome}
            </a>
            <div className="mt-6" data-reveal-stagger style={{ '--stagger-base': '120ms' } as React.CSSProperties}>
              <div className="flex items-center gap-2.5">
                <span className="h-[1.5px] w-8 bg-[#C58A3E]" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#C58A3E]">{t.tag}</span>
              </div>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.03em] text-[#075C42] sm:text-4xl lg:text-5xl">
                {t.headline}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-[#4A5A50] sm:text-lg">{t.subhead}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#enquire"
                  data-shine
                  data-magnetic
                  className="inline-flex items-center gap-2 rounded-full bg-[#075C42] px-6 py-3.5 font-semibold text-white shadow-[0_12px_26px_rgba(7,92,66,0.25)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#054631]"
                >
                  {t.heroCta} <ArrowRight size={18} />
                </a>
                <a
                  href="#categories"
                  className="inline-flex items-center gap-2 rounded-full border border-[#075C42]/25 bg-white px-6 py-3.5 font-semibold text-[#075C42] transition hover:border-[#075C42]/50 hover:bg-[#F8F6EE]"
                >
                  {t.browseBtn}
                </a>
              </div>
            </div>
          </div>
          <div
            className="relative overflow-hidden rounded-[2.2rem] border border-[#C88A16]/30 bg-[#DCEBD5] p-3 shadow-[0_20px_50px_rgba(7,92,66,0.12)]"
            data-reveal="image"
          >
            <img
              src="/oppam-care-family.png"
              alt="Oppam Care companion supporting an elderly woman at home on a Kerala veranda"
              className="aspect-[16/10] w-full rounded-[1.8rem] object-cover"
              width={1376}
              height={768}
            />
          </div>
        </div>
      </section>

      {/* Category overview */}
      <section id="categories" className="scroll-mt-24 mx-auto max-w-[1280px] px-6 pt-16 lg:px-10 lg:pt-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" data-reveal-stagger="scale">
          {homeCareCategories.map((cat) => {
            const Icon = homeCareIcons[cat.icon]
            const active = filter === cat.id
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(active ? 'all' : cat.id)}
                aria-pressed={active}
                className={`group flex cursor-pointer flex-col justify-start rounded-3xl border p-5 text-left transition duration-300 hover:-translate-y-0.5 ${
                  active
                    ? 'border-[#075C42] bg-[#075C42] text-white shadow-[0_18px_40px_rgba(7,92,66,0.18)]'
                    : 'border-[#DCE7D8] bg-white hover:border-[#8DBB4D]'
                }`}
              >
                <div className="flex w-full items-center justify-between">
                  <span
                    className={`flex size-11 items-center justify-center rounded-2xl ${
                      active ? 'bg-white/15 text-white' : 'bg-[#EAF4E8] text-[#075C42]'
                    }`}
                  >
                    <Icon size={21} aria-hidden="true" />
                  </span>
                  <span className={`text-xs font-bold ${active ? 'text-[#DBC57A]' : 'text-[#C88A16]'}`}>{cat.letter}</span>
                </div>
                <h2 className={`mt-4 text-lg font-bold ${active ? 'text-white' : 'text-[#123D32]'}`}>
                  {isMl ? cat.titleMl : cat.title}
                </h2>
                <p className={`mt-1.5 text-sm leading-6 ${active ? 'text-white/80' : 'text-[#557366]'}`}>
                  {isMl ? cat.descriptionMl : cat.description}
                </p>
              </button>
            )
          })}
        </div>

        {/* Caregiver vs nurse boundary */}
        <div className="mt-8 flex items-start gap-4 rounded-2xl border border-[#C88A16]/30 bg-[#FFFDF7] px-5 py-4" data-reveal="fade">
          <Info size={20} className="mt-0.5 shrink-0 text-[#C88A16]" aria-hidden="true" />
          <div>
            <p className="text-sm font-bold text-[#8B6112]">{t.boundaryTitle}</p>
            <p className="mt-1 text-sm leading-6 text-[#6E5016]">{t.boundaryText}</p>
          </div>
        </div>
      </section>

      {/* Filter + listing */}
      <section className="mx-auto max-w-[1280px] px-6 py-14 lg:px-10 lg:py-20">
        <div
          className="-mx-6 mb-10 flex gap-2 overflow-x-auto px-6 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0"
          role="group"
          aria-label="Filter home care services by category"
        >
          {filters.map((item) => {
            const active = filter === item.id
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                aria-pressed={active}
                className={`shrink-0 cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? 'bg-[#075C42] text-white shadow-xs'
                    : 'bg-white text-[#34594B] ring-1 ring-[#DCE7D8] hover:bg-[#EAF3E6] hover:text-[#075C42]'
                }`}
              >
                {item.label}
                <span className={`ml-2 text-xs ${active ? 'text-white/70' : 'text-[#7C9882]'}`}>{item.count}</span>
              </button>
            )
          })}
        </div>

        <div className="space-y-16">
          {visibleCategories.map((cat) => {
            const services = getHomeCareServicesByCategory(cat.id)
            return (
              <div key={cat.id} id={cat.id} className="scroll-mt-24">
                <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                  <div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C88A16]">
                      {cat.letter} · {services.length} {t.servicesSuffix}
                    </p>
                    <h2 className="text-2xl font-bold tracking-[-0.03em] text-[#075C42] sm:text-3xl" data-reveal="heading">
                      {isMl ? cat.titleMl : cat.title}
                    </h2>
                  </div>
                  <p className="max-w-md text-sm leading-6 text-[#4E6B5D] sm:text-base sm:leading-7">
                    {isMl ? cat.descriptionMl : cat.description}
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-reveal-stagger="scale">
                  {services.map((service) => (
                    <HomeCareCard key={service.id} service={service} onBook={handleBook} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <HomeCareEnquiryForm serviceSlug={selectedSlug} onServiceChange={setSelectedSlug} />

      <SiteFooter />
      <FloatingWhatsApp />
    </main>
  )
}

export default HomeCareListing
