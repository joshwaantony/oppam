'use client'

import React, { useEffect, useState } from 'react'

export function InitialLoader() {
  const [step, setStep] = useState(0)
  const [mounted, setMounted] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Step 0: Small green leaf appears in center (0ms)
    // Step 1: Leaf slowly grows & multiple leaves sprout/branch out (500ms)
    const t1 = setTimeout(() => setStep(1), 500)
    // Step 2: Leaves morph/assemble into Oppam Care Logo (1300ms)
    const t2 = setTimeout(() => setStep(2), 1300)
    // Step 3: Logo settles & Tagline fades in (2200ms)
    const t3 = setTimeout(() => setStep(3), 2200)
    // Step 4: Smooth Fade Out to homepage (3500ms)
    const t4 = setTimeout(() => setFadeOut(true), 3500)
    // Step 5: Complete Unmount (4200ms)
    const t5 = setTimeout(() => setMounted(false), 4200)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
      clearTimeout(t5)
    }
  }, [])

  if (!mounted) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-between overflow-hidden bg-[#F8F6EE] transition-all duration-700 ease-in-out ${
        fadeOut ? 'opacity-0 pointer-events-none scale-[1.02]' : 'opacity-100 scale-100'
      }`}
      aria-label="Loading Oppam Care"
      role="status"
    >
      {/* Background: Subtle Kerala Greenery & Soft Glowing Aura */}
      <div className="pointer-events-none absolute h-[600px] w-[600px] rounded-full bg-[#E5F2E3]/80 blur-[130px] animate-pulse" />

      {/* Subtle Kerala Background Greenery (Top Corners) */}
      <div className="pointer-events-none absolute left-[-30px] top-[-30px] z-10 w-48 sm:w-72 opacity-60 animate-[float-subtle_6s_ease-in-out_infinite]">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M-20 -20 C 40 20, 90 70, 110 130 C 80 110, 40 80, -20 70 Z" fill="#134E39" fillOpacity="0.25" />
          <path d="M30 -20 C 70 40, 130 90, 160 140 C 130 110, 80 70, 20 40 Z" fill="#6FA63A" fillOpacity="0.3" />
        </svg>
      </div>
      <div className="pointer-events-none absolute right-[-30px] top-[-30px] z-10 w-48 sm:w-72 opacity-60 animate-[float-subtle_7s_ease-in-out_infinite_1s]">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M220 -20 C 160 20, 110 70, 90 130 C 120 110, 160 80, 220 70 Z" fill="#134E39" fillOpacity="0.25" />
          <path d="M170 -20 C 130 40, 70 90, 40 140 C 70 110, 120 70, 180 40 Z" fill="#6FA63A" fillOpacity="0.3" />
        </svg>
      </div>

      {/* Spacer Top */}
      <div className="h-8 sm:h-14 shrink-0" />

      {/* Center Stage: Leaf Growth -> Multi-Leaves Sprout -> Oppam Care Emblem */}
      <div className="relative z-20 my-auto flex flex-col items-center justify-center px-4 text-center">
        
        {/* Stage 1 & 2: Growing & Sprouting Leaves Cluster Animation */}
        <div
          className={`relative flex size-32 sm:size-40 items-center justify-center transition-all duration-700 ease-out ${
            step < 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-110 absolute pointer-events-none'
          }`}
        >
          {/* Glowing Aura Ring behind sprouting leaves */}
          <div className="absolute inset-0 rounded-full bg-[#8DBB4D]/25 blur-xl animate-pulse" />

          {/* Central Initial Leaf (Appears in Step 0, Grows in Step 1) */}
          <div
            className={`transition-all duration-700 ease-out transform ${
              step === 0
                ? 'scale-75 opacity-90 rotate-0'
                : 'scale-110 opacity-100 rotate-12'
            }`}
          >
            <svg
              viewBox="0 0 64 64"
              className="size-16 sm:size-20 text-[#075C42] drop-shadow-[0_4px_12px_rgba(7,92,66,0.2)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32 8 C18 18 10 32 14 48 C28 54 44 48 52 32 C48 18 38 10 32 8 Z"
                fill="#075C42"
              />
              <path
                d="M32 8 C30 22 26 36 14 48"
                stroke="#6FA63A"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Sprouting Secondary Leaves (Emerge & Branch out in Step 1) */}
          <div
            className={`absolute transition-all duration-700 ease-out transform ${
              step >= 1
                ? 'opacity-100 scale-100 translate-x-6 -translate-y-6 rotate-45'
                : 'opacity-0 scale-50 translate-x-0 translate-y-0 rotate-0'
            }`}
          >
            <svg viewBox="0 0 64 64" className="size-10 sm:size-12 text-[#6FA63A]" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 8 C18 18 10 32 14 48 C28 54 44 48 52 32 C48 18 38 10 32 8 Z" fill="#6FA63A" />
            </svg>
          </div>

          <div
            className={`absolute transition-all duration-700 ease-out transform ${
              step >= 1
                ? 'opacity-100 scale-100 -translate-x-6 -translate-y-4 -rotate-45'
                : 'opacity-0 scale-50 translate-x-0 translate-y-0 rotate-0'
            }`}
          >
            <svg viewBox="0 0 64 64" className="size-10 sm:size-12 text-[#C58A3E]" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 8 C18 18 10 32 14 48 C28 54 44 48 52 32 C48 18 38 10 32 8 Z" fill="#C58A3E" />
            </svg>
          </div>

          <div
            className={`absolute transition-all duration-700 ease-out transform ${
              step >= 1
                ? 'opacity-100 scale-100 translate-y-7 rotate-180'
                : 'opacity-0 scale-50 translate-y-0 rotate-0'
            }`}
          >
            <svg viewBox="0 0 64 64" className="size-9 sm:size-11 text-[#134E39]" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 8 C18 18 10 32 14 48 C28 54 44 48 52 32 C48 18 38 10 32 8 Z" fill="#134E39" />
            </svg>
          </div>
        </div>

        {/* Stage 3: Oppam Care Official Logo Emblem Reveal */}
        <div
          className={`transition-all duration-1000 ease-out transform ${
            step >= 2
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
          }`}
        >
          <img
            src="/oppam-care-logo.png"
            alt="Oppam Care Elder Care Assistance Alappuzha"
            className="h-auto w-60 xs:w-72 sm:w-84 md:w-96 max-h-[260px] object-contain drop-shadow-[0_10px_30px_rgba(7,92,66,0.1)]"
          />
        </div>

      </div>

      {/* Bottom Section: Tagline & "Caring for you..." Three-Dot Indicator */}
      <div className="relative z-20 pb-8 sm:pb-14 flex flex-col items-center text-center px-4">
        <div
          className={`flex flex-col items-center transition-all duration-800 ease-out ${
            step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {/* Main Tagline */}
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#C58A3E]">
            Care Today <span className="text-[#075C42] mx-1">•</span> Comfort Always
          </span>
          <span className="mt-1 text-[11px] font-semibold tracking-wider text-[#557366]">
            Elder Care Assistance | Alappuzha
          </span>

          {/* Subtext with animated three dots */}
          <div className="mt-3 flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#4E6B5D]">
            <span>Caring for you</span>
            <span className="inline-flex gap-1 items-baseline ml-0.5">
              <span className="inline-block size-1.5 rounded-full bg-[#075C42] animate-[bounce_1.4s_infinite_0ms]" />
              <span className="inline-block size-1.5 rounded-full bg-[#075C42] animate-[bounce_1.4s_infinite_200ms]" />
              <span className="inline-block size-1.5 rounded-full bg-[#075C42] animate-[bounce_1.4s_infinite_400ms]" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InitialLoader
