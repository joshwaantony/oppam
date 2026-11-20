'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'
import { getHomeCareServicesByCategory, homeCareCategories } from '@/lib/homeCareData'
import { homeCareIcons } from '@/components/home-care/homeCareIcons'

/** Home page entry point into the Home Care Services module. */
export function HomeCareTeaser() {
  const { language } = useLanguage()
  const t = translations[language].homeCare
  const isMl = language === 'ml'

  return (
    <section id="home-care-preview" className="px-6 pb-20 lg:px-10 lg:pb-28">
      <div className="mx-auto max-w-[1280px] rounded-[2.2rem] border border-[#DCE7D8] bg-[#EAF3E6] p-6 sm:p-10 lg:p-12">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#C88A16]" data-reveal>
              {t.teaser.tag}
            </p>
            <h2
              className="text-3xl font-bold tracking-[-0.03em] text-[#075C42] sm:text-4xl"
              data-reveal="heading"
              style={{ '--rd': '90ms' } as React.CSSProperties}
            >
              {t.teaser.headline}
            </h2>
            <p className="mt-4 text-base leading-7 text-[#4E6B5D]" data-reveal style={{ '--rd': '180ms' } as React.CSSProperties}>
              {t.teaser.text}
            </p>
          </div>
          <a
            href="/home-care"
            data-shine
            data-magnetic
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-[#075C42] px-6 py-3.5 font-semibold text-white shadow-[0_12px_26px_rgba(7,92,66,0.25)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#054631] lg:self-auto"
          >
            {t.teaser.cta} <ArrowRight size={18} />
          </a>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" data-reveal-stagger="scale">
          {homeCareCategories.map((cat) => {
            const Icon = homeCareIcons[cat.icon]
            const count = getHomeCareServicesByCategory(cat.id).length
            return (
              <a
                key={cat.id}
                href={`/home-care#${cat.id}`}
                className="group flex h-full flex-col rounded-3xl border border-[#DCE7D8] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#8DBB4D] hover:shadow-[0_18px_40px_rgba(7,92,66,0.08)]"
              >
                <span className="flex size-11 items-center justify-center rounded-2xl bg-[#EAF4E8] text-[#075C42] transition group-hover:bg-[#075C42] group-hover:text-white">
                  <Icon size={21} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-[#123D32]">{isMl ? cat.titleMl : cat.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-[#557366]">{isMl ? cat.descriptionMl : cat.description}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 self-start pt-4 text-sm font-bold text-[#075C42] transition group-hover:gap-2.5">
                  {count} {t.servicesSuffix} <ArrowRight size={14} />
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HomeCareTeaser
