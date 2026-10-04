import React from 'react'

/**
 * Top Right Hanging Leaves
 * Positioned in the upper-right corner / right edge of the hero section.
 */
export function TopRightLeaves({ className = '' }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute right-0 z-20 select-none overflow-visible ${className}`}
      aria-hidden="true"
    >
      <svg
        width="220"
        height="220"
        viewBox="0 0 220 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-28 h-28 xs:w-32 xs:h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 drop-shadow-[0_4px_12px_rgba(18,78,57,0.08)]"
      >
        <defs>
          <linearGradient id="leafGradTop1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8AC44B" />
            <stop offset="60%" stopColor="#6DA637" />
            <stop offset="100%" stopColor="#4A8024" />
          </linearGradient>
          <linearGradient id="leafGradTop2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7CB43E" />
            <stop offset="100%" stopColor="#558C28" />
          </linearGradient>
          <linearGradient id="leafGradTop3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#96CD53" />
            <stop offset="100%" stopColor="#67A032" />
          </linearGradient>
        </defs>

        {/* Stem entering from right edge */}
        <path
          d="M 215 0 C 185 45, 155 100, 110 150"
          stroke="#4D8025"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Top Leaf */}
        <path
          d="M 205 10 C 220 38, 212 80, 178 100 C 160 82, 158 52, 168 28 C 178 15, 192 10, 205 10 Z"
          fill="url(#leafGradTop1)"
        />
        <path
          d="M 198 16 C 188 42, 175 66, 170 82"
          stroke="#D8EBC3"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.85"
        />

        {/* Main Angled Leaf */}
        <path
          d="M 160 85 C 172 120, 145 165, 98 178 C 84 150, 92 112, 118 94 C 132 82, 148 82, 160 85 Z"
          fill="url(#leafGradTop2)"
        />
        <path
          d="M 152 92 C 130 118, 112 142, 102 162"
          stroke="#D8EBC3"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* Small Companion Leaf */}
        <path
          d="M 172 45 C 148 52, 132 35, 140 16 C 158 18, 174 30, 172 45 Z"
          fill="url(#leafGradTop3)"
          opacity="0.95"
        />
        <path
          d="M 167 40 C 158 32, 150 25, 145 20"
          stroke="#D8EBC3"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.75"
        />
      </svg>
    </div>
  )
}

/**
 * Botanical Contour Line
 * Elegant fine line swooping around the artwork.
 */
export function BotanicalContourLine({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 700 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none absolute inset-0 h-full w-full select-none ${className}`}
      aria-hidden="true"
    >
      {/* Upper subtle loop behind the top right of the frame */}
      <path
        d="M 420 50 C 520 25, 630 65, 665 150 C 685 205, 675 270, 635 320"
        stroke="#8BB76A"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.45"
      />

      {/* Graceful contour curve under the bottom of the frame */}
      <path
        d="M 140 420 C 240 480, 380 495, 520 445 C 585 420, 635 385, 670 335"
        stroke="#8BB76A"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  )
}

/**
 * Bottom Sprout Accent
 * Small subtle sprout leaves peeking from underneath the bottom curve.
 */
export function BottomSproutLeaves({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute select-none ${className}`} aria-hidden="true">
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
        <path
          d="M 24 40 C 20 28, 12 20, 4 22 C 8 30, 16 38, 24 40 Z"
          fill="#78AF3E"
        />
        <path
          d="M 24 40 C 30 28, 40 24, 46 28 C 42 36, 34 40, 24 40 Z"
          fill="#8CC24F"
        />
      </svg>
    </div>
  )
}

/**
 * Foreground Bokeh Leaves (Bottom Right)
 * Soft photographic blurred foreground leaves for cinematic depth of field.
 */
export function ForegroundBokehLeaves({ className = '' }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute bottom-0 right-0 z-30 select-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div className="relative -bottom-6 -right-6 h-48 w-48 opacity-80 blur-[8px] sm:h-72 sm:w-72 sm:blur-[10px] md:h-88 md:w-88 md:blur-[12px] lg:h-96 lg:w-96">
        <svg
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          {/* Main vertical leaf */}
          <path
            d="M 310 310 C 265 190, 235 120, 195 40 C 190 120, 215 210, 290 310 Z"
            fill="#578E29"
          />
          {/* Middle broad leaf */}
          <path
            d="M 310 320 C 220 250, 150 180, 80 140 C 120 220, 180 280, 290 320 Z"
            fill="#6FA533"
          />
          {/* Lower leaf */}
          <path
            d="M 280 320 C 190 290, 120 270, 50 250 C 100 300, 170 320, 280 320 Z"
            fill="#42771F"
          />
        </svg>
      </div>
    </div>
  )
}
