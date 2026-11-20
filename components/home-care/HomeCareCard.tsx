'use client'

import { ArrowRight, Check } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'
import type { HomeCareService } from '@/lib/homeCareData'
import { homeCareIcons } from '@/components/home-care/homeCareIcons'
import { ServiceTypeBadge } from '@/components/home-care/ServiceTypeBadge'

interface HomeCareCardProps {
  service: HomeCareService
  /** When provided, "Book now" pre-selects the service in the on-page form instead of navigating. */
  onBook?: (slug: string) => void
}

export function HomeCareCard({ service, onBook }: HomeCareCardProps) {
  const { language } = useLanguage()
  const t = translations[language].homeCare
  const Icon = homeCareIcons[service.icon]
  const href = `/home-care/${service.slug}`
  const title = language === 'ml' ? service.titleMl : service.title

  return (
    <article
      data-spotlight
      className="group relative flex h-full flex-col rounded-3xl border border-[#DCE7D8] bg-white p-6 shadow-xs transition duration-300 hover:-translate-y-1 hover:border-[#8DBB4D] hover:shadow-[0_18px_40px_rgba(7,92,66,0.08)] sm:p-7"
    >
      {/* Icon must stay the first child: the global [data-spotlight] hover tilts only the first child. */}
      <div className="mb-6 flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#EAF4E8] text-[#075C42] transition-colors duration-300 group-hover:bg-[#075C42] group-hover:text-white">
        <Icon size={23} aria-hidden="true" />
      </div>
      <ServiceTypeBadge
        type={service.serviceType}
        label={t.badges[service.serviceType]}
        className="absolute right-6 top-6 sm:right-7 sm:top-7"
      />

      <h3 className="text-xl font-bold text-[#123D32] transition-transform duration-500 ease-out group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0">
        <a
          href={href}
          className="bg-[linear-gradient(#8DBB4D,#8DBB4D)] bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-0.5 outline-none transition-[background-size,color] duration-500 ease-out after:absolute after:inset-0 group-hover:bg-[length:100%_2px] group-hover:text-[#075C42] focus-visible:bg-[length:100%_2px] motion-reduce:transition-none"
        >
          {title}
        </a>
      </h3>
      <p className="mt-3 leading-7 text-[#557366]">{service.summary}</p>

      <div className="mt-5">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#C88A16]">{t.keyBenefits}</p>
        <ul className="mt-2.5 space-y-2 text-sm text-[#123D32]">
          {service.benefits.slice(0, 3).map((benefit) => (
            <li key={benefit} className="flex items-start gap-2.5">
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#EAF4E8] text-[#075C42]">
                <Check size={12} strokeWidth={2.8} aria-hidden="true" />
              </span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {/* Actions sit above the stretched title link */}
      <div className="relative z-10 mt-auto flex flex-wrap items-center gap-3 pt-7">
        <a
          href={href}
          className="inline-flex items-center gap-2 text-sm font-bold text-[#075C42] transition hover:gap-3"
        >
          {t.viewDetails} <ArrowRight size={15} aria-hidden="true" />
        </a>
        {onBook ? (
          <button
            type="button"
            onClick={() => onBook(service.slug)}
            className="ml-auto cursor-pointer rounded-full bg-[#075C42] px-4 py-2 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(7,92,66,0.2)] transition hover:-translate-y-0.5 hover:bg-[#054631]"
          >
            {t.bookNow}
          </button>
        ) : (
          <a
            href={`${href}#enquire`}
            className="ml-auto rounded-full bg-[#075C42] px-4 py-2 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(7,92,66,0.2)] transition hover:-translate-y-0.5 hover:bg-[#054631]"
          >
            {t.bookNow}
          </a>
        )}
      </div>
    </article>
  )
}

export default HomeCareCard
