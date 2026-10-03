import React from 'react'
import { Heart, Home, Users } from 'lucide-react'

interface BenefitPillsProps {
  showLabels?: boolean
  className?: string
}

export function BenefitPills({ showLabels = false, className = '' }: BenefitPillsProps) {
  return (
    <div className={`flex items-center gap-4 sm:gap-5 ${className}`}>
      {/* 1. Home Icon Circle */}
      <div
        className="flex size-11 items-center justify-center rounded-full bg-[#DCEBD5] text-[#075C42] shadow-2xs transition-all duration-200 hover:scale-105 hover:bg-[#CFE2C7] sm:size-12"
        title="Local assistance"
        aria-label="Local assistance"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="#075C42">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      </div>

      {/* 2. Heart Icon Circle */}
      <div
        className="flex size-11 items-center justify-center rounded-full bg-[#DCEBD5] text-[#075C42] shadow-2xs transition-all duration-200 hover:scale-105 hover:bg-[#CFE2C7] sm:size-12"
        title="Personal care"
        aria-label="Personal care"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="#075C42">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>

      {/* 3. Family / People Icon Circle */}
      <div
        className="flex size-11 items-center justify-center rounded-full bg-[#DCEBD5] text-[#075C42] shadow-2xs transition-all duration-200 hover:scale-105 hover:bg-[#CFE2C7] sm:size-12"
        title="Family support"
        aria-label="Family support"
      >
        <svg viewBox="0 0 24 24" width="21" height="21" fill="#075C42">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      </div>
    </div>
  )
}

