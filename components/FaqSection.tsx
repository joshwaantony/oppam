'use client'

import React, { useState, useEffect, useId } from 'react'
import {
  ChevronDown,
  CheckCircle2,
  Search,
  X,
  Maximize2,
  HelpCircle,
  MessageCircle,
  Sparkles,
  ArrowRight,
  Filter,
} from 'lucide-react'
import { faqData, type FAQItem } from '@/lib/faqData'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export { faqData, type FAQItem }

export function FaqSection() {
  const { language } = useLanguage()
  const t = translations[language].faq

  // Main inline preview state
  const [inlineOpenId, setInlineOpenId] = useState<number | null>(1)

  // Exclusive Window (Modal) state
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [modalOpenIds, setModalOpenIds] = useState<number[]>([1])

  const searchInputId = useId()

  // Lock body scroll when modal is open & handle Escape key
  useEffect(() => {
    if (!isModalOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false)
      }
    }

    document.body.style.overflow = 'hidden'
    document.body.setAttribute('data-modal-open', 'true')
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      document.body.removeAttribute('data-modal-open')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isModalOpen])

  // Toggle inline accordion item
  const toggleInlineItem = (id: number) => {
    setInlineOpenId((prev) => (prev === id ? null : id))
  }

  // Toggle modal accordion item (supports multiple or single)
  const toggleModalItem = (id: number) => {
    setModalOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const expandAllModalItems = () => {
    setModalOpenIds(faqData.map((item) => item.id))
  }

  const collapseAllModalItems = () => {
    setModalOpenIds([])
  }

  // Preview questions (showing first 5 featured questions inline)
  const previewData = faqData.slice(0, 5)

  // Filtered FAQ items for exclusive window
  const filteredFaqs = faqData.filter((item) => {
    const qText = `${item.question} ${item.questionMl || ''}`.toLowerCase()
    const pText = `${item.paragraphs?.join(' ') || ''} ${item.paragraphsMl?.join(' ') || ''}`.toLowerCase()
    const bText = `${item.bullets?.join(' ') || ''} ${item.bulletsMl?.join(' ') || ''}`.toLowerCase()
    
    const query = searchQuery.toLowerCase().trim()
    const matchesSearch = !query || qText.includes(query) || pText.includes(query) || bText.includes(query)

    if (!matchesSearch) return false

    if (selectedCategory === 'hospital') {
      return [3, 4, 5, 6, 12, 14, 15].includes(item.id)
    }
    if (selectedCategory === 'pricing') {
      return [10, 11, 19].includes(item.id)
    }
    if (selectedCategory === 'scope') {
      return [1, 2, 7, 8, 9, 13, 16, 17, 18, 20, 21].includes(item.id)
    }


    return true
  })

  // Helper to extract localized content
  const getItemQuestion = (item: FAQItem) =>
    language === 'ml' && item.questionMl ? item.questionMl : item.question

  const getItemParagraphs = (item: FAQItem) =>
    language === 'ml' && item.paragraphsMl ? item.paragraphsMl : item.paragraphs

  const getItemBullets = (item: FAQItem) =>
    language === 'ml' && item.bulletsMl ? item.bulletsMl : item.bullets

  const getItemOutro = (item: FAQItem) =>
    language === 'ml' && item.outroMl ? item.outroMl : item.outro

  return (
    <section id="faq" className="mx-auto max-w-[960px] px-6 py-14 lg:py-20">
      {/* Minimal Header */}
      <div className="text-center">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C88A16]">
          {t.tag}
        </p>
        <h2 className="text-2xl font-bold tracking-[-0.03em] text-[#075C42] sm:text-3xl lg:text-4xl">
          {t.headline}
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-[#4E6B5D] sm:text-base">
          {t.description}
        </p>
      </div>

      {/* Clean Preview FAQ Card */}
      <div className="mt-8 overflow-hidden rounded-3xl border border-[#DCE7D8] bg-white p-5 shadow-[0_10px_35px_rgba(7,92,66,0.05)] sm:p-7">
        {/* Card Header Bar */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-[#F0F5EE] pb-4">
          <div className="flex items-center gap-2.5">
            <span className="flex size-7 items-center justify-center rounded-lg bg-[#EAF4E8] text-[#075C42]">
              <HelpCircle size={17} />
            </span>
            <div>
              <h3 className="text-sm font-bold text-[#123D32] sm:text-base">
                {t.cardTitle}
              </h3>
              <p className="text-xs text-[#557366]">
                {t.cardSubtitle}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="group inline-flex items-center gap-2 rounded-full border border-[#8DBB4D]/40 bg-[#F4F9F2] px-4 py-2 text-xs font-bold text-[#075C42] shadow-2xs transition hover:border-[#075C42] hover:bg-[#075C42] hover:text-white cursor-pointer"
          >
            <Maximize2 size={13} className="transition-transform group-hover:scale-110" />
            <span>{t.viewAllBtn}</span>
          </button>
        </div>

        {/* Top 5 Inline Accordion List */}
        <div className="space-y-3">
          {previewData.map((item) => {
            const isOpen = inlineOpenId === item.id
            const question = getItemQuestion(item)
            const paragraphs = getItemParagraphs(item)
            const bullets = getItemBullets(item)
            const outro = getItemOutro(item)

            return (
              <div
                key={item.id}
                className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                  isOpen
                    ? 'border-[#8DBB4D] bg-[#FDFEFD] shadow-2xs ring-1 ring-[#8DBB4D]/30'
                    : 'border-[#EAF0E8] bg-white hover:border-[#8DBB4D]/60 hover:bg-[#FAFDF9]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleInlineItem(item.id)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-3 p-4 text-left transition"
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`flex size-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-colors ${
                        isOpen
                          ? 'bg-[#075C42] text-white shadow-xs'
                          : 'bg-[#EAF4E8] text-[#075C42] group-hover:bg-[#075C42] group-hover:text-white'
                      }`}
                    >
                      {item.id.toString().padStart(2, '0')}
                    </span>
                    <h4
                      className={`text-sm font-semibold transition-colors sm:text-base ${
                        isOpen ? 'text-[#075C42]' : 'text-[#123D32] group-hover:text-[#075C42]'
                      }`}
                    >
                      {question}
                    </h4>
                  </div>
                  <div
                    className={`flex size-7 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 bg-[#C88A16]/15 text-[#C88A16]'
                        : 'bg-[#EAF4E8] text-[#075C42] group-hover:bg-[#075C42] group-hover:text-white'
                    }`}
                  >
                    <ChevronDown size={15} strokeWidth={2.4} />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-[#F0F5EE] bg-white/80 px-4 pb-4 pt-3.5 sm:pl-14 sm:pr-6">
                    {paragraphs && (
                      <div className="space-y-2">
                        {paragraphs.map((p, pIdx) => (
                          <p key={pIdx} className="text-xs leading-relaxed text-[#4E6B5D] sm:text-sm">
                            {p}
                          </p>
                        ))}
                      </div>
                    )}

                    {bullets && bullets.length > 0 && (
                      <ul className="my-3 grid gap-2 sm:grid-cols-2">
                        {bullets.map((b, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-center gap-2 rounded-xl bg-[#F8FBF6] px-3.5 py-2 text-xs font-semibold text-[#123D32] ring-1 ring-[#DCE7D8]/60"
                          >
                            <CheckCircle2 size={14} className="shrink-0 text-[#7EA83D]" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {outro && (
                      <p className="mt-2 text-xs italic leading-relaxed text-[#557366]">
                        {outro}
                      </p>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Card Footer Banner to launch Exclusive Window */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-[#DCE7D8] bg-gradient-to-r from-[#F4F9F2] via-white to-[#F4F9F2] p-4 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#075C42] text-[#DBC57A] shadow-xs">
              <Sparkles size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-[#123D32] sm:text-sm">
                {t.footerBannerTitle}
              </p>
              <p className="text-[12px] text-[#557366]">
                {t.footerBannerSubtitle}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="group flex items-center gap-2 rounded-full bg-[#075C42] px-6 py-3 text-xs font-bold text-white shadow-md transition duration-200 hover:bg-[#054631] hover:shadow-lg cursor-pointer shrink-0"
          >
            <span>{t.footerBannerBtn}</span>
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* EXCLUSIVE MODAL WINDOW */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="faq-modal-title"
          className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-5 lg:p-7"
        >
          {/* Backdrop overlay */}
          <div
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 bg-[#06241C]/75 backdrop-blur-md transition-opacity duration-300"
          />

          {/* Modal Container */}
          <div className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-[2rem] border border-[#DCE7D8] bg-white shadow-2xl transition-all duration-300">
            {/* Modal Top Header */}
            <div className="flex items-start justify-between border-b border-[#EAF0E8] bg-gradient-to-r from-[#F4F9F2] via-white to-[#F8FBF7] p-5 sm:p-7">
              <div className="pr-4">
                <div className="flex items-center gap-2.5">
                  <span className="flex size-7 items-center justify-center rounded-lg bg-[#075C42] text-white">
                    <HelpCircle size={16} />
                  </span>
                  <span className="rounded-full bg-[#EAF4E8] px-3 py-1 text-[11px] font-bold text-[#075C42] ring-1 ring-[#075C42]/20">
                    {t.modalBadge}
                  </span>
                </div>
                <h2
                  id="faq-modal-title"
                  className="mt-3 text-xl font-bold tracking-[-0.02em] text-[#075C42] sm:text-2xl lg:text-3xl"
                >
                  {t.modalTitle}
                </h2>
                <p className="mt-1 text-xs text-[#557366] sm:text-sm">
                  {t.modalSubtitle}
                </p>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-[#4E6B5D] shadow-sm ring-1 ring-[#DCE7D8] transition hover:bg-[#EAF4E8] hover:text-[#075C42] cursor-pointer"
                aria-label="Close window"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Controls: Search & Category Filter */}
            <div className="space-y-3 border-b border-[#EAF0E8] bg-[#FAFDF9] px-5 py-4 sm:px-7">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                {/* Search Bar */}
                <div className="relative flex-1">
                  <label htmlFor={searchInputId} className="sr-only">
                    {t.searchPlaceholder}
                  </label>
                  <Search
                    size={18}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7EA83D]"
                  />
                  <input
                    id={searchInputId}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t.searchPlaceholder}
                    className="w-full rounded-full border border-[#DCE7D8] bg-white py-2.5 pl-10 pr-9 text-xs text-[#123D32] placeholder-[#7EA83D]/60 outline-none transition focus:border-[#075C42] focus:ring-2 focus:ring-[#8DBB4D]/30 sm:text-sm"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#557366] hover:text-[#075C42] cursor-pointer"
                    >
                      <X size={15} />
                    </button>
                  )}
                </div>

                {/* Expand / Collapse Controls */}
                <div className="flex items-center justify-end gap-2 text-xs font-semibold text-[#075C42]">
                  <button
                    type="button"
                    onClick={expandAllModalItems}
                    className="rounded-lg border border-[#DCE7D8] bg-white px-3 py-2 transition hover:bg-[#EAF4E8] cursor-pointer"
                  >
                    {t.expandAll}
                  </button>
                  <button
                    type="button"
                    onClick={collapseAllModalItems}
                    className="rounded-lg border border-[#DCE7D8] bg-white px-3 py-2 transition hover:bg-[#EAF4E8] cursor-pointer"
                  >
                    {t.collapseAll}
                  </button>
                </div>
              </div>

              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs no-scrollbar">
                <span className="flex items-center gap-1 font-semibold text-[#557366] pr-1 shrink-0">
                  <Filter size={13} /> {t.filterLabel}
                </span>
                {t.categories.map((cat) => {
                  const isActive = selectedCategory === cat.id
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`whitespace-nowrap rounded-full px-3.5 py-1.5 font-semibold transition cursor-pointer ${
                        isActive
                          ? 'bg-[#075C42] text-white shadow-2xs'
                          : 'bg-white text-[#4E6B5D] border border-[#DCE7D8] hover:border-[#8DBB4D] hover:text-[#075C42]'
                      }`}
                    >
                      {cat.label}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Modal Body: Scrollable FAQ Accordion List */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-3">
              {filteredFaqs.length === 0 ? (
                <div className="my-10 text-center py-10 rounded-2xl border border-dashed border-[#DCE7D8] bg-[#FAFDF9]">
                  <HelpCircle size={40} className="mx-auto text-[#7EA83D]/60 mb-3" />
                  <h4 className="text-base font-bold text-[#123D32]">{t.noResultsTitle}</h4>
                  <p className="mt-1 text-xs text-[#557366]">
                    {t.noResultsSubtitle}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('')
                      setSelectedCategory('all')
                    }}
                    className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#075C42] px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-[#054631] cursor-pointer"
                  >
                    {t.resetFilters}
                  </button>
                </div>
              ) : (
                filteredFaqs.map((item) => {
                  const isOpen = modalOpenIds.includes(item.id)
                  const question = getItemQuestion(item)
                  const paragraphs = getItemParagraphs(item)
                  const bullets = getItemBullets(item)
                  const outro = getItemOutro(item)

                  return (
                    <div
                      key={item.id}
                      className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                        isOpen
                          ? 'border-[#8DBB4D] bg-[#FDFEFD] shadow-2xs ring-1 ring-[#8DBB4D]/30'
                          : 'border-[#EAF0E8] bg-white hover:border-[#8DBB4D]/70'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleModalItem(item.id)}
                        aria-expanded={isOpen}
                        className="group flex w-full items-center justify-between gap-3 p-4 text-left transition sm:p-4.5 cursor-pointer"
                      >
                        <div className="flex items-center gap-3.5">
                          <span
                            className={`flex size-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-colors ${
                              isOpen
                                ? 'bg-[#075C42] text-white shadow-xs'
                                : 'bg-[#EAF4E8] text-[#075C42] group-hover:bg-[#075C42] group-hover:text-white'
                            }`}
                          >
                            {item.id.toString().padStart(2, '0')}
                          </span>
                          <h3
                            className={`text-sm font-semibold transition-colors sm:text-base ${
                              isOpen ? 'text-[#075C42]' : 'text-[#123D32] group-hover:text-[#075C42]'
                            }`}
                          >
                            {question}
                          </h3>
                        </div>
                        <div
                          className={`flex size-7 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ${
                            isOpen
                              ? 'rotate-180 bg-[#C88A16]/15 text-[#C88A16]'
                              : 'bg-[#EAF4E8] text-[#075C42] group-hover:bg-[#075C42] group-hover:text-white'
                          }`}
                        >
                          <ChevronDown size={16} strokeWidth={2.4} />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="border-t border-[#F0F5EE] bg-white/90 px-4 pb-4 pt-3.5 sm:pl-14 sm:pr-6">
                          {paragraphs && (
                            <div className="space-y-2">
                              {paragraphs.map((p, pIdx) => (
                                <p key={pIdx} className="text-xs leading-relaxed text-[#4E6B5D] sm:text-sm">
                                  {p}
                                </p>
                              ))}
                            </div>
                          )}

                          {bullets && bullets.length > 0 && (
                            <ul className="my-3 grid gap-2 sm:grid-cols-2">
                              {bullets.map((b, bIdx) => (
                                <li
                                  key={bIdx}
                                  className="flex items-center gap-2 rounded-xl bg-[#F8FBF6] px-3.5 py-2 text-xs font-semibold text-[#123D32] ring-1 ring-[#DCE7D8]/60"
                                >
                                  <CheckCircle2 size={14} className="shrink-0 text-[#7EA83D]" />
                                  <span>{b}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {outro && (
                            <p className="mt-2 text-xs italic leading-relaxed text-[#557366]">
                              {outro}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  )
                })
              )}
            </div>

            {/* Modal Bottom Sticky Footer CTA */}
            <div className="flex flex-col items-center justify-between gap-3 border-t border-[#EAF0E8] bg-gradient-to-r from-[#F4F9F2] via-white to-[#F4F9F2] p-4 sm:flex-row sm:px-7">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#123D32]">
                <MessageCircle size={17} className="text-[#075C42]" />
                <span>{t.modalFooterText}</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://wa.me/918301016493?text=Hello%2C%20I%20have%20a%20question%20about%20Oppam%20Care%20assistance."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-[#1EBE5D] cursor-pointer"
                >
                  <WhatsAppIcon size={16} />
                  <span>{t.askWhatsApp}</span>
                </a>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-full border border-[#DCE7D8] bg-white px-4 py-2 text-xs font-bold text-[#4E6B5D] transition hover:bg-[#EAF4E8] hover:text-[#075C42] cursor-pointer"
                >
                  {t.closeWindow}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
