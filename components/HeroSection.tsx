'use client'

import React from 'react'
import { HandDrawnHeart, HandDrawnUnderline } from './hero/HandDrawnDetails'
import { BenefitPills } from './hero/BenefitPills'
import { OrganicHeroArtwork } from './hero/OrganicHeroArtwork'
import { TopRightLeaves, ForegroundBokehLeaves } from './hero/DecorativeLeaves'

interface HeroSectionProps {
  /**
   * Headline variant:
   * 'home'   -> "Care / that feels / like home. ♡" (Exact reference design)
   * 'beyond' -> "Care / beyond / distance. ♡"
   */
  headlineVariant?: 'home' | 'beyond'
}

export function HeroSection({ headlineVariant = 'home' }: HeroSectionProps) {
  return (
    <section
      id="top"
      className="relative flex w-full flex-col justify-center overflow-hidden bg-[#F8F9F3] px-4.5 py-6 sm:px-8 sm:py-10 lg:min-h-[calc(100vh-80px)] lg:px-12 lg:py-16 xl:px-16 xl:py-20"
    >
      {/* Soft ambient botanical aura behind the artwork */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-[480px] w-[480px] rounded-full bg-[#E5F2E3]/70 blur-[90px] lg:h-[640px] lg:w-[640px] lg:blur-[110px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-4 h-[240px] w-[240px] rounded-full bg-[#EEF6EC]/60 blur-[70px] lg:left-10 lg:h-[360px] lg:w-[360px] lg:blur-[90px]"
        aria-hidden="true"
      />

      {/* Top-Right Leaves: Enters from the right edge in mobile and top-right in desktop */}
      <TopRightLeaves className="top-24 sm:top-16 lg:top-0" />

      {/* Foreground Blurred Bokeh Leaves at bottom right */}
      <ForegroundBokehLeaves />

      <div className="relative mx-auto w-full max-w-[1320px]">
        <div className="grid w-full min-w-0 items-center gap-6 sm:gap-8 lg:grid-cols-[45%_55%] lg:gap-8 xl:grid-cols-[44%_56%]">
          
          {/* ========================================================
              LEFT COLUMN: Typography (and Desktop Badges)
             ======================================================== */}
          <div className="relative z-10 flex min-w-0 flex-col items-start pt-1 sm:pt-2 lg:pt-0">
            
            {/* 1. TOP LABEL: Gold line + ELDER CARE ASSISTANCE · ALAPPUZHA */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="h-[1.5px] w-8 sm:w-11 bg-[#C58A3E]" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C58A3E] sm:text-xs lg:text-[13px]">
                ELDER CARE ASSISTANCE · ALAPPUZHA
              </span>
            </div>

            {/* 2. MAIN HEADLINE: Bold 3-line headline with hand-drawn details */}
            <h1 className="mt-3.5 text-[2.5rem] font-extrabold leading-[1.02] tracking-[-0.035em] xs:text-[2.85rem] sm:mt-6 sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5.25rem]">
              {headlineVariant === 'home' ? (
                <>
                  <span className="block text-[#134E39]">Care</span>
                  <span className="block text-[#134E39]">that feels</span>
                  <span className="relative mt-0.5 sm:mt-1 inline-flex items-baseline text-[#6FA63A]">
                    <span className="relative inline-block">
                      like home.
                      {/* Hand-drawn curved underline brush stroke */}
                      <span className="absolute -bottom-2 left-0 w-full sm:-bottom-3">
                        <HandDrawnUnderline />
                      </span>
                    </span>
                    {/* Hand-drawn heart outline right beside the period */}
                    <HandDrawnHeart className="ml-1.5 h-6 w-6 xs:h-7 xs:w-7 sm:ml-2.5 sm:h-7 sm:w-7 lg:h-8 lg:w-8 translate-y-1" />
                  </span>
                </>
              ) : (
                <>
                  <span className="block text-[#134E39]">Care</span>
                  <span className="block text-[#6FA63A]">beyond</span>
                  <span className="relative mt-0.5 sm:mt-1 inline-flex items-baseline text-[#134E39]">
                    <span className="relative inline-block">
                      distance.
                      <span className="absolute -bottom-2 left-0 w-full sm:-bottom-3">
                        <HandDrawnUnderline />
                      </span>
                    </span>
                    <HandDrawnHeart className="ml-1.5 h-6 w-6 xs:h-7 xs:w-7 sm:ml-2.5 sm:h-7 sm:w-7 lg:h-8 lg:w-8 translate-y-1" />
                  </span>
                </>
              )}
            </h1>

            {/* 3. SUBTITLE: Compassionate support for your loved ones... */}
            <p className="mt-3.5 max-w-sm text-[13.5px] leading-relaxed text-[#4A5A50] xs:text-sm sm:mt-6 sm:max-w-md sm:text-base lg:text-[1.125rem]">
              Compassionate support for your loved ones,<br className="hidden sm:inline" />
              right here in Alappuzha.
            </p>

            {/* 4. THREE BENEFIT BADGES: DESKTOP ONLY (Below subtitle) */}
            <div className="hidden lg:block mt-10 xl:mt-12">
              <BenefitPills />
            </div>

          </div>

          {/* ========================================================
              RIGHT COLUMN: Coded Organic Pebble Frame Artwork & Mobile Badges
             ======================================================== */}
          <div className="w-full min-w-0 flex flex-col items-center">
            {/* The Photo Artwork (Centered) */}
            <div className="w-full mt-2 sm:mt-4 lg:mt-0">
              <OrganicHeroArtwork />
            </div>

            {/* 5. THREE BENEFIT BADGES: MOBILE ONLY (Below Photo Artwork) */}
            <div className="mt-6 sm:mt-8 flex justify-center w-full max-w-[340px] xs:max-w-[360px] mx-auto lg:hidden">
              <BenefitPills />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection
