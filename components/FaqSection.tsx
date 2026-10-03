'use client'

import React, { useState } from 'react'
import { ChevronDown, CheckCircle2 } from 'lucide-react'

export interface FAQItem {
  id: number
  question: string
  paragraphs?: string[]
  bullets?: string[]
  outro?: string
}

export const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'What is this service?',
    paragraphs: [
      'We provide personal assistance and companionship for elderly people in Alappuzha. We help when family members are unable to be physically present with their parents or loved ones.',
    ],
  },
  {
    id: 2,
    question: 'Who can use this service?',
    paragraphs: [
      'Our service is mainly for elderly parents and senior citizens whose family members may be living in another city, abroad, or are unable to accompany them personally.',
    ],
  },
  {
    id: 3,
    question: 'What kind of assistance do you provide?',
    paragraphs: ['We can assist with:'],
    bullets: [
      'Hospital visits',
      'Doctor appointments',
      'Medical tests',
      'Hospital admission support',
      'In-hospital companionship',
      'Medicine collection',
      'Discharge assistance',
      'Return-home assistance',
    ],
    outro: 'The exact service depends on the requirement and availability.',
  },
  {
    id: 4,
    question: 'Can you take my parent to the hospital?',
    paragraphs: [
      'Yes. Subject to availability, our team can accompany your parent to the hospital and assist with the agreed non-medical requirements.',
    ],
  },
  {
    id: 5,
    question: 'What if my parent gets admitted to the hospital?',
    paragraphs: [
      'If you select an in-hospital assistance service, our assigned person can stay with your parent during the agreed service period and assist with their non-medical needs.',
    ],
  },
  {
    id: 6,
    question: 'Will you stay until my parent is discharged?',
    paragraphs: [
      'Yes, when the selected service includes hospital stay assistance, we can stay through the agreed process until discharge and help your parent return home safely.',
    ],
  },
  {
    id: 7,
    question: 'Can children living abroad use this service?',
    paragraphs: [
      'Absolutely. Family members living abroad can contact us and arrange assistance for their parents or loved ones in Alappuzha.',
    ],
  },
  {
    id: 8,
    question: 'Will I receive updates while you are with my parent?',
    paragraphs: [
      'Yes. We can provide agreed updates to the family member during the service, subject to privacy and consent.',
    ],
  },
  {
    id: 9,
    question: 'Can I book the service for my neighbour or relative?',
    paragraphs: [
      'Yes. You can request assistance for a parent, relative, neighbour, or another elderly person with their consent.',
    ],
  },
  {
    id: 10,
    question: 'How can I book the service?',
    paragraphs: ['You can contact us through:'],
    bullets: ['Phone', 'WhatsApp', 'Website assistance request form'],
    outro:
      'Share the required details, and our team will discuss availability and the service requirement with you.',
  },
  {
    id: 11,
    question: 'How much does the service cost?',
    paragraphs: [
      'The price depends on the type and duration of assistance, location, travel requirements, hospital stay, and other service requirements.',
      'We will communicate the applicable charges before confirming the booking.',
    ],
  },
  {
    id: 12,
    question: 'Do you provide emergency medical services?',
    paragraphs: [
      'No. We are a personal assistance and companionship service, not an emergency medical service.',
      'For a medical emergency, please contact the hospital or appropriate emergency medical services immediately.',
    ],
  },
  {
    id: 13,
    question: 'Do you provide medical treatment?',
    paragraphs: [
      'No. We do not diagnose, prescribe, or provide medical treatment. Our role is to provide personal assistance, companionship, and coordination according to the agreed service.',
    ],
  },
  {
    id: 14,
    question: 'Can you stay overnight at the hospital?',
    paragraphs: [
      'Overnight assistance may be available depending on the location, hospital rules, staff availability, and service requirement. Please contact us in advance to confirm.',
    ],
  },
  {
    id: 15,
    question: 'Can you help my parent return home after discharge?',
    paragraphs: [
      'Yes. If return-home assistance is booked, we can accompany your parent after discharge and help them reach their home safely.',
    ],
  },
  {
    id: 16,
    question: 'Can I request assistance on the same day?',
    paragraphs: [
      'Same-day assistance may be possible depending on staff availability and location. We recommend contacting us as early as possible.',
    ],
  },
  {
    id: 17,
    question: 'Do you cover all areas of Alappuzha?',
    paragraphs: [
      'Our initial service area will be within selected locations in and around Alappuzha. Please contact us with the exact location to confirm availability.',
    ],
  },
  {
    id: 18,
    question: 'How do you protect my parent\'s information?',
    paragraphs: [
      'We treat personal information with care and use it only for providing and managing the requested service, subject to our Privacy Policy.',
    ],
  },
  {
    id: 19,
    question: 'Can I cancel a booking?',
    paragraphs: [
      'Cancellation terms depend on the service and booking conditions. The applicable cancellation policy will be communicated before confirmation.',
    ],
  },
  {
    id: 20,
    question: 'What if I have a special requirement?',
    paragraphs: [
      'Every family situation can be different. Contact us and explain your requirement. We will check whether we can provide the requested assistance.',
    ],
  },
]

export function FaqSection() {
  const [openIds, setOpenIds] = useState<number[]>([1])

  const toggleItem = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((openId) => openId !== id) : [...prev, id]
    )
  }

  const allExpanded = faqData.length > 0 && faqData.every((item) => openIds.includes(item.id))

  const toggleAll = () => {
    if (allExpanded) {
      setOpenIds([])
    } else {
      setOpenIds(faqData.map((item) => item.id))
    }
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
            Questions & Answers ({faqData.length})
          </span>
          <button
            type="button"
            onClick={toggleAll}
            className="cursor-pointer font-semibold text-[#075C42] transition hover:text-[#054631] hover:underline"
          >
            {allExpanded ? 'Collapse all' : 'Expand all'}
          </button>
        </div>

        {/* Scrollable Container with custom scrollbar */}
        <div
          style={{ scrollbarWidth: 'thin', scrollbarColor: '#A3CE83 #F4F7F2' }}
          className="max-h-[480px] space-y-2.5 overflow-y-auto pr-2 sm:pr-3 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[#F4F7F2] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#A3CE83] hover:[&::-webkit-scrollbar-thumb]:bg-[#075C42]"
        >
          {faqData.map((item) => {
            const isOpen = openIds.includes(item.id)
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
