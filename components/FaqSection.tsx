'use client'

import React, { useState } from 'react'
import { ChevronDown, CheckCircle2 } from 'lucide-react'
import { faqData, type FAQItem } from '@/lib/faqData'

export { faqData, type FAQItem }

export function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(1)

  const toggleItem = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section id="faq" className="mx-auto max-w-[880px] px-6 py-14 lg:py-20">
      {/* Minimal Header */}
      <div className="text-center">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C88A16]">
          Frequently Asked Questions
        </p>
        <h2 className="text-2xl font-bold tracking-[-0.03em] text-[#075C42] sm:text-3xl lg:text-4xl">
          Feel clear before you reach out.
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-[#4E6B5D] sm:text-base">
          Everything you need to know about our personal assistance and companionship services in Alappuzha.
        </p>
      </div>

      {/* Compact Scrollable FAQ Section Card */}
      <div className="mt-8 overflow-hidden rounded-3xl border border-[#DCE7D8] bg-white p-4 shadow-[0_10px_30px_rgba(7,92,66,0.04)] sm:p-6">
        {/* Minimal Bar */}
        <div className="mb-4 flex items-center justify-between border-b border-[#F0F5EE] pb-3 text-xs text-[#557366]">
          <span className="font-semibold text-[#123D32]">
            Questions &amp; Answers ({faqData.length})
          </span>
          {openId !== null && (
            <button
              type="button"
              onClick={() => setOpenId(null)}
              className="cursor-pointer font-semibold text-[#075C42] transition hover:text-[#054631] hover:underline"
            >
              Collapse
            </button>
          )}
        </div>

        {/* Scrollable Container with custom scrollbar */}
        <div
          style={{ scrollbarWidth: 'thin', scrollbarColor: '#A3CE83 #F4F7F2' }}
          className="max-h-[480px] space-y-2.5 overflow-y-auto pr-2 sm:pr-3 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[#F4F7F2] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#A3CE83] hover:[&::-webkit-scrollbar-thumb]:bg-[#075C42]"
        >
          {faqData.map((item) => {
            const isOpen = openId === item.id
            return (
              <div
                key={item.id}
                className={`overflow-hidden rounded-xl border transition-all duration-200 ${
                  isOpen
                    ? 'border-[#8DBB4D] bg-[#FDFEFD] shadow-2xs ring-1 ring-[#8DBB4D]/30'
                    : 'border-[#EAF0E8] bg-white hover:border-[#8DBB4D]/60'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-3 p-3.5 text-left transition sm:p-4"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex size-6 shrink-0 items-center justify-center rounded-md text-[11px] font-bold transition-colors ${
                        isOpen
                          ? 'bg-[#075C42] text-white'
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
                      {item.question}
                    </h3>
                  </div>
                  <div
                    className={`flex size-6 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 bg-[#C88A16]/10 text-[#C88A16]'
                        : 'bg-[#EAF4E8] text-[#075C42] group-hover:bg-[#075C42] group-hover:text-white'
                    }`}
                  >
                    <ChevronDown size={14} strokeWidth={2.4} />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-[#F0F5EE] bg-white/70 px-4 pb-4 pt-3 sm:pl-12 sm:pr-4">
                    {/* Paragraphs */}
                    {item.paragraphs && (
                      <div className="space-y-2">
                        {item.paragraphs.map((p, pIdx) => (
                          <p key={pIdx} className="text-xs leading-relaxed text-[#4E6B5D] sm:text-sm">
                            {p}
                          </p>
                        ))}
                      </div>
                    )}

                    {/* Bullets if present */}
                    {item.bullets && item.bullets.length > 0 && (
                      <ul className="my-2.5 grid gap-2 sm:grid-cols-2">
                        {item.bullets.map((b, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-center gap-2 rounded-lg bg-[#F8FBF6] px-3 py-1.5 text-xs font-semibold text-[#123D32] ring-1 ring-[#DCE7D8]/60"
                          >
                            <CheckCircle2 size={13} className="shrink-0 text-[#7EA83D]" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Outro note if present */}
                    {item.outro && (
                      <p className="mt-2 text-xs italic leading-relaxed text-[#557366]">
                        {item.outro}
                      </p>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Subtle scroll footer indicator */}
        <div className="mt-3 flex items-center justify-center gap-1.5 border-t border-[#F0F5EE] pt-2.5 text-[11px] font-medium text-[#557366]/70">
          <span>Scroll inside to view all {faqData.length} questions</span>
          <span>↓</span>
        </div>
      </div>
    </section>
  )
}
