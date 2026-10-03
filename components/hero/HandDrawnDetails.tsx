import React from 'react'

export function HandDrawnHeart({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      {/* Hand-drawn organic heart outline matching the reference image */}
      <path
        d="M21.8 12.2 C19.2 6.5 12.8 4.2 7.6 7.8 C2.1 11.6 1.4 19.1 5.8 24.8 C10.2 30.5 18.5 35.8 22.1 38.2 C25.4 35.5 33.6 30.1 37.9 24.3 C42.1 18.6 41.2 11.2 35.7 7.5 C30.4 4.0 24.2 6.2 21.8 12.2 Z"
        stroke="#8DBB4D"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function HandDrawnUnderline({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`block w-full overflow-visible ${className}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Gentle curved hand-drawn brush underline matching the reference */}
      <path
        d="M 4 10 C 65 14, 150 15, 276 6"
        stroke="#8DBB4D"
        strokeWidth="3.6"
        strokeLinecap="round"
      />
    </svg>
  )
}
