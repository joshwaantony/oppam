import React from 'react'

export function HandDrawnHeart({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block shrink-0 ${className}`}
      aria-hidden="true"
    >
      {/* Hand-drawn organic heart outline matching the reference image */}
      <path
        d="M 17.5 10.5 C 15 5.5 9.5 4 5.5 7.2 C 1 10.8 0.5 17 4.2 21.8 C 8 26.5 15 30.8 17.8 32.5 C 20.5 30.2 27 25.8 30.5 21.2 C 34 16.5 33.2 10.2 28.8 7.2 C 24.5 4.2 19.5 6 17.5 10.5 Z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="rotate(10 17.5 18)"
      />
    </svg>
  )
}

export function HandDrawnUnderline({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`block w-full overflow-visible ${className}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Gentle curved hand-drawn brush underline matching the reference */}
      <path
        d="M 2 8 C 60 13, 160 14, 278 7"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  )
}
