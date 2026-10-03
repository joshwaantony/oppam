import React from 'react'

export function TopRightLeaves({ className = '' }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute z-20 transition-transform duration-700 ease-out ${className}`}
      aria-hidden="true"
    >
      <svg
        width="145"
        height="145"
        viewBox="0 0 145 145"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_8px_16px_rgba(7,92,66,0.15)] animate-[float-subtle_6s_ease-in-out_infinite]"
      >
        <defs>
          <linearGradient id="leafGradTop1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9BC758" />
            <stop offset="60%" stopColor="#7EAF3E" />
            <stop offset="100%" stopColor="#4E8626" />
          </linearGradient>
          <linearGradient id="leafGradTop2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8DBB4D" />
            <stop offset="100%" stopColor="#5B9333" />
          </linearGradient>
        </defs>

        {/* Stem */}
        <path
          d="M 132 12 C 108 42, 85 75, 45 105"
          stroke="#558C2B"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Primary Leaf (Right/Up) */}
        <path
          d="M 130 14 C 145 42, 138 78, 104 98 C 88 82, 85 52, 94 28 C 104 16, 118 12, 130 14 Z"
          fill="url(#leafGradTop1)"
        />
        {/* Primary Leaf Vein */}
        <path
          d="M 125 20 C 114 44, 102 68, 96 85"
          stroke="#D7EAC3"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* Secondary Leaf (Left/Down) */}
        <path
          d="M 88 64 C 94 88, 76 118, 44 126 C 36 108, 42 82, 60 68 C 70 58, 80 60, 88 64 Z"
          fill="url(#leafGradTop2)"
        />
        {/* Secondary Leaf Vein */}
        <path
          d="M 82 68 C 68 85, 56 102, 48 116"
          stroke="#D7EAC3"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.75"
        />
      </svg>
    </div>
  )
}

export function BottomLeftLeaves({ className = '' }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute z-20 transition-transform duration-700 ease-out ${className}`}
      aria-hidden="true"
    >
      <svg
        width="110"
        height="110"
        viewBox="0 0 110 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_6px_14px_rgba(7,92,66,0.12)] animate-[float-subtle_7s_ease-in-out_2s_infinite]"
      >
        <defs>
          <linearGradient id="leafGradBottom" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#92BF52" />
            <stop offset="60%" stopColor="#75A837" />
            <stop offset="100%" stopColor="#4A8123" />
          </linearGradient>
        </defs>

        {/* Stem */}
        <path
          d="M 8 98 C 24 78, 48 54, 82 32"
          stroke="#528828"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* Main Curved Leaf */}
        <path
          d="M 12 94 C 28 66, 62 52, 92 64 C 82 84, 58 102, 32 104 C 20 104, 14 100, 12 94 Z"
          fill="url(#leafGradBottom)"
        />
        {/* Main Leaf Vein */}
        <path
          d="M 18 90 C 38 78, 62 72, 78 70"
          stroke="#D5E8C0"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* Small Companion Sprout */}
        <path
          d="M 44 64 C 54 44, 76 34, 94 38 C 90 52, 76 66, 58 70 C 50 70, 46 66, 44 64 Z"
          fill="#86B547"
          opacity="0.9"
        />
      </svg>
    </div>
  )
}

export function CurvedBotanicalLine({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none absolute ${className}`}
      aria-hidden="true"
    >
      {/* Thin curved organic line tracking the perimeter */}
      <path
        d="M 8 200 C 60 160, 140 140, 240 180 C 275 194, 305 210, 318 218"
        stroke="#8DBB4D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="4 2"
        opacity="0.6"
      />
    </svg>
  )
}

export function ForegroundBokehLeaves({ className = '' }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute bottom-0 right-0 z-30 select-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Soft photographic blurred foreground leaves for cinematic depth */}
      <div className="relative -bottom-10 -right-8 h-48 w-56 opacity-85 blur-[6px] sm:h-64 sm:w-72 sm:blur-[7px]">
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <path
            d="M 210 210 C 170 140, 100 90, 40 80 C 50 140, 90 190, 160 210 Z"
            fill="#5D9230"
          />
          <path
            d="M 190 220 C 130 180, 80 130, 20 120 C 50 170, 110 210, 170 230 Z"
            fill="#79AB3E"
          />
          <path
            d="M 220 160 C 160 110, 110 60, 70 30 C 90 80, 130 130, 180 170 Z"
            fill="#457822"
          />
        </svg>
      </div>
    </div>
  )
}
