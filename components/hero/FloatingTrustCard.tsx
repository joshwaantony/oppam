import React from 'react'

export function FloatingTrustCard({ className = '' }: { className?: string }) {
  return (
    <div
      className={`animate-[float-subtle_5s_ease-in-out_infinite] z-20 flex flex-col items-start rounded-2xl bg-white p-4 shadow-[0_16px_38px_rgba(7,92,66,0.14)] ring-1 ring-[#075C42]/5 transition-all duration-300 hover:shadow-[0_20px_45px_rgba(7,92,66,0.2)] sm:p-5 ${className}`}
    >
      {/* Caring heart icon badge */}
      <div className="flex size-10 items-center justify-center rounded-full bg-[#EAF4E8] text-[#075C42] shadow-2xs sm:size-11">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Hands holding a heart / caring emblem */}
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            stroke="#075C42"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 11.5 C9.5 13.5, 11 14.5, 12 14.5 C13 14.5, 14.5 13.5, 15.5 11.5"
            stroke="#075C42"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Typography */}
      <div className="mt-3 text-left">
        <p className="text-xs font-bold leading-snug tracking-tight text-[#075C42] sm:text-sm">
          A trusted <br />
          local presence
        </p>
      </div>

      {/* Minimal horizontal indicator line */}
      <div className="mt-2.5 h-[3px] w-6 rounded-full bg-[#C8DEC0]" />
    </div>
  )
}
