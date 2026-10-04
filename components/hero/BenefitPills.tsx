import React from 'react'

export function BenefitPills({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-start justify-center gap-2 xs:gap-3 sm:gap-5 lg:gap-6 ${className}`}>
      
      {/* 1. Safe & Comfortable Care */}
      <div className="flex flex-1 max-w-[108px] sm:max-w-[125px] flex-col items-center text-center">
        <div className="flex size-10 items-center justify-center rounded-full bg-[#DFEFE1] text-[#124E39] shadow-xs sm:size-11">
          <svg viewBox="0 0 24 24" className="size-4.5 sm:size-5" fill="currentColor">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </div>
        <p className="mt-2.5 text-[10.5px] xs:text-[11.5px] sm:text-xs font-semibold leading-[1.3] text-[#193F31] text-center">
          Safe &amp;<br />
          Comfortable Care
        </p>
      </div>

      {/* Divider 1 */}
      <div className="h-8 w-px self-center bg-[#D6E6D5] shrink-0" aria-hidden="true" />

      {/* 2. Compassionate Support */}
      <div className="flex flex-1 max-w-[108px] sm:max-w-[125px] flex-col items-center text-center">
        <div className="flex size-10 items-center justify-center rounded-full bg-[#DFEFE1] text-[#124E39] shadow-xs sm:size-11">
          <svg viewBox="0 0 24 24" className="size-4 sm:size-4.5" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
        <p className="mt-2.5 text-[10.5px] xs:text-[11.5px] sm:text-xs font-semibold leading-[1.3] text-[#193F31] text-center">
          Compassionate<br />
          Support
        </p>
      </div>

      {/* Divider 2 */}
      <div className="h-8 w-px self-center bg-[#D6E6D5] shrink-0" aria-hidden="true" />

      {/* 3. A Trusted Local Presence */}
      <div className="flex flex-1 max-w-[108px] sm:max-w-[125px] flex-col items-center text-center">
        <div className="flex size-10 items-center justify-center rounded-full bg-[#DFEFE1] text-[#124E39] shadow-xs sm:size-11">
          <svg viewBox="0 0 24 24" className="size-4.5 sm:size-5" fill="currentColor">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
          </svg>
        </div>
        <p className="mt-2.5 text-[10.5px] xs:text-[11.5px] sm:text-xs font-semibold leading-[1.3] text-[#193F31] text-center">
          A Trusted<br />
          Local Presence
        </p>
      </div>

    </div>
  )
}

export default BenefitPills
