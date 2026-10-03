'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import { WhatsAppIcon } from './icons/WhatsAppIcon'
import { HandDrawnHeart, HandDrawnUnderline } from './hero/HandDrawnDetails'
import { BenefitPills } from './hero/BenefitPills'
import { OrganicHeroArtwork } from './hero/OrganicHeroArtwork'

const whatsappUrl =
  'https://wa.me/919074025279?text=Hello%2C%20I%20would%20like%20to%20request%20elder%20care%20assistance%20in%20Alappuzha.'

interface HeroSectionProps {
  /**
   * Headline variant:
   * 'home'   -> "Care / that feels / like home." (Exact reference design)
   * 'beyond' -> "Care / beyond / distance."
   */
  headlineVariant?: 'home' | 'beyond'
}

export function HeroSection({ headlineVariant = 'home' }: HeroSectionProps) {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100vh-80px)] w-full items-center overflow-hidden bg-[#F8F6EE] px-6 py-10 sm:py-14 lg:px-12 lg:py-16"
    >
      {/* Soft ambient botanical aura in upper-right */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-[520px] w-[520px] rounded-full bg-[#E3EFE0]/60 blur-[90px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-10 h-[360px] w-[360px] rounded-full bg-[#EBF4E8]/50 blur-[80px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1280px]">
        <div className="grid items-center gap-12 lg:grid-cols-[45%_55%] lg:gap-6 xl:grid-cols-[44%_56%]">
          
          {/* ========================================================
              LEFT COLUMN (44% width): Content & Typography
             ======================================================== */}
          <div className="relative z-10 flex flex-col items-start pt-2 lg:pt-0">
            
            {/* TOP LABEL: Gold line + ELDER CARE ASSISTANCE · ALAPPUZHA */}
            <div className="flex items-center gap-3">
              <span className="h-[1.5px] w-10 sm:w-12 bg-[#C88A16]" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C88A16] sm:text-[13px]">
                ELDER CARE ASSISTANCE · ALAPPUZHA
              </span>
            </div>

            {/* MAIN HEADLINE: Bold 3-line headline with hand-drawn details */}
            <h1 className="mt-7 text-[3.25rem] font-extrabold leading-[1.0] tracking-[-0.035em] sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.35rem]">
              {headlineVariant === 'home' ? (
                <>
                  <span className="block text-[#075C42]">Care</span>
                  <span className="block text-[#075C42]">that feels</span>
                  <span className="relative inline-block text-[#7EA83D]">
                    like home.
                    {/* Hand-drawn curved underline brush stroke */}
                    <span className="absolute -bottom-3.5 left-0 w-full">
                      <HandDrawnUnderline />
                    </span>
                    {/* Hand-drawn outlined heart detail */}
                    <span className="absolute -right-9 -top-1 sm:-right-11 sm:-top-2">
                      <HandDrawnHeart className="h-7 w-7 sm:h-9 sm:w-9" />
                    </span>
                  </span>
                </>
              ) : (
                <>
                  <span className="block text-[#075C42]">Care</span>
                  <span className="block text-[#7EA83D]">beyond</span>
                  <span className="relative inline-block text-[#075C42]">
                    distance.
                    {/* Hand-drawn curved underline brush stroke */}
                    <span className="absolute -bottom-3.5 left-0 w-full">
                      <HandDrawnUnderline />
                    </span>
                    {/* Hand-drawn outlined heart detail */}
                    <span className="absolute -right-9 -top-1 sm:-right-11 sm:-top-2">
                      <HandDrawnHeart className="h-7 w-7 sm:h-9 sm:w-9" />
                    </span>
                  </span>
                </>
              )}
            </h1>

            {/* CTA BUTTONS: Request assistance + WhatsApp us */}
            <div className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center">
              {/* Primary: Request assistance */}
              <a
                href="#request"
                className="group inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-[#075C42] px-8 text-[15px] font-semibold tracking-wide text-white shadow-[0_12px_28px_rgba(7,92,66,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#054631] hover:shadow-[0_16px_34px_rgba(7,92,66,0.36)]"
              >
                <span>Request assistance</span>
                <ArrowRight
                  size={18}
                  strokeWidth={2.4}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>

              {/* Secondary: WhatsApp us */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-14 items-center justify-center gap-2.5 rounded-full border-[1.5px] border-[#7EA83D] bg-white px-7 text-[15px] font-semibold tracking-wide text-[#075C42] shadow-2xs transition-all duration-300 hover:-translate-y-0.5 hover:border-[#075C42] hover:bg-[#F6FAF4] hover:shadow-xs"
              >
                <WhatsAppIcon
                  size={21}
                  className="text-[#25D366] transition-transform duration-200 group-hover:scale-110"
                />
                <span>WhatsApp us</span>
              </a>
            </div>

            {/* BOTTOM BENEFITS: Three minimal circular icons */}
            <div className="mt-11 sm:mt-12">
              <BenefitPills showLabels={false} />
            </div>

          </div>

          {/* ========================================================
              RIGHT COLUMN (55% width): Coded Organic Artwork & Photo
             ======================================================== */}
          <OrganicHeroArtwork />

        </div>
      </div>
    </section>
  )
}


export default HeroSection
