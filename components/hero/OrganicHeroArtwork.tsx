'use client'

import React from 'react'
import {
  BotanicalContourLine,
  BottomSproutLeaves,
} from './DecorativeLeaves'

export function OrganicHeroArtwork() {
  return (
    <div className="relative mx-auto flex w-full max-w-[315px] xs:max-w-[345px] sm:max-w-[440px] lg:max-w-none items-center justify-center">
      <div className="relative w-full max-w-[315px] xs:max-w-[345px] sm:max-w-[440px] lg:max-w-[580px] xl:max-w-[640px]">
        
        {/* Fine Botanical Contour Lines */}
        <BotanicalContourLine />

        {/* Multi-Layered Organic Framed Photo */}
        <div className="relative w-full transition-transform duration-700 ease-out hover:scale-[1.01]">
          <svg
            viewBox="0 0 660 480"
            className="h-auto w-full drop-shadow-[0_16px_36px_rgba(18,78,57,0.12)] sm:drop-shadow-[0_20px_45px_rgba(18,78,57,0.12)]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Outer organic petal aura gradient */}
              <linearGradient id="outerPetalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#EBF5EA" stopOpacity="0.9" />
                <stop offset="60%" stopColor="#DFEFE0" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#D4EAD7" stopOpacity="0.7" />
              </linearGradient>

              {/* Main Frame Border Gradient */}
              <linearGradient id="frameBorderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E4F1E3" />
                <stop offset="50%" stopColor="#CFE7D1" />
                <stop offset="100%" stopColor="#C4E0C7" />
              </linearGradient>

              {/* Precise Organic Curved Clip Path for Photograph */}
              <clipPath id="heroOrganicPhotoClip">
                <path d="M 280,38 C 420,24 530,70 585,155 C 630,225 620,335 545,405 C 475,470 310,475 195,435 C 90,398 65,295 82,210 C 98,125 175,48 280,38 Z" />
              </clipPath>
            </defs>

            {/* Layer 1: Left Organic Crescent Petal / Echo Aura (matching reference image) */}
            <path
              d="M 240,28 C 120,40 14,125 14,238 C 14,350 110,432 230,458 C 148,408 98,322 106,230 C 114,144 162,65 240,28 Z"
              fill="url(#outerPetalGradient)"
            />

            {/* Layer 2: Main Organic Frame Solid Border Rim */}
            <path
              d="M 280,38 C 420,24 530,70 585,155 C 630,225 620,335 545,405 C 475,470 310,475 195,435 C 90,398 65,295 82,210 C 98,125 175,48 280,38 Z"
              fill="none"
              stroke="url(#frameBorderGradient)"
              strokeWidth="20"
              strokeLinejoin="round"
            />

            {/* Layer 3: Clipped Photograph shifted upwards inside the frame */}
            <g clipPath="url(#heroOrganicPhotoClip)">
              <image
                href="/oppam-care-hero.png"
                x="15"
                y="-345"
                width="660"
                height="1182.5"
                preserveAspectRatio="none"
              />
            </g>

            {/* Layer 4: Delicate Inner Highlight Rim */}
            <path
              d="M 280,38 C 420,24 530,70 585,155 C 630,225 620,335 545,405 C 475,470 310,475 195,435 C 90,398 65,295 82,210 C 98,125 175,48 280,38 Z"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeOpacity="0.45"
            />
          </svg>
        </div>

        {/* Bottom Sprout Accent peeking below pebble frame */}
        <BottomSproutLeaves className="bottom-4 left-16 sm:bottom-7 sm:left-36" />

      </div>
    </div>
  )
}

export default OrganicHeroArtwork
