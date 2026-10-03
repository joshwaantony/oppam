'use client'

import React from 'react'
import { FloatingTrustCard } from './FloatingTrustCard'
import {
  TopRightLeaves,
  BottomLeftLeaves,
  CurvedBotanicalLine,
  ForegroundBokehLeaves,
} from './DecorativeLeaves'

export function OrganicHeroArtwork() {
  return (
    <div className="relative mx-auto flex w-full max-w-[580px] items-center justify-center lg:ml-auto lg:max-w-none">
      <div className="relative w-full max-w-[560px] xl:max-w-[590px]">
        
        {/* ========================================================
            1. Organic Framed Photo via Scalable SVG Vector Paths
           ======================================================== */}
        <div className="relative w-full transition-transform duration-700 ease-out hover:scale-[1.015]">
          <svg
            viewBox="0 0 600 500"
            className="w-full h-auto drop-shadow-[0_20px_45px_rgba(7,92,66,0.15)]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Outer Pale Sage Gradient Halo matching reference #DCEBD5 */}
              <linearGradient id="sageHaloGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E2EFE0" />
                <stop offset="45%" stopColor="#DCEBD5" />
                <stop offset="100%" stopColor="#CDE4C2" />
              </linearGradient>

              {/* Precise Organic Curved Clip Path for the Photograph */}
              <clipPath id="heroOrganicPhotoClip">
                <path d="M 280,38 C 395,30 488,78 528,168 C 564,248 544,352 468,414 C 398,468 258,464 158,422 C 62,382 48,286 64,215 C 80,135 168,44 280,38 Z" />
              </clipPath>

              {/* Soft Drop Shadow for the Outer Frame */}
              <filter id="haloShadowFilter" x="-15%" y="-15%" width="130%" height="130%">
                <feDropShadow dx="0" dy="16" stdDeviation="16" floodColor="#075C42" floodOpacity="0.12" />
              </filter>
            </defs>

            {/* Outer Pale Sage-Green Organic Border/Frame */}
            <path
              d="M 280,18 C 405,10 508,62 550,158 C 588,242 566,364 484,432 C 410,488 254,484 144,440 C 44,396 28,292 46,212 C 64,124 158,26 280,18 Z"
              fill="url(#sageHaloGradient)"
              filter="url(#haloShadowFilter)"
            />

            {/* Raw Photograph clipped inside the organic curve */}
            <g clipPath="url(#heroOrganicPhotoClip)">
              <image
                href="/oppam-care-hero.png"
                x="30"
                y="-30"
                width="560"
                height="560"
                preserveAspectRatio="xMidYMid slice"
              />
            </g>
          </svg>
        </div>

        {/* ========================================================
            2. Floating White Trust Card (Upper Right)
           ======================================================== */}
        <div className="absolute top-10 right-2 sm:top-14 sm:right-4 lg:top-16 lg:-right-3 xl:top-20 xl:-right-5 z-20">
          <FloatingTrustCard />
        </div>

        {/* ========================================================
            3. Top Right Botanical Leaves
           ======================================================== */}
        <div className="absolute -right-2 -top-6 sm:-right-4 sm:-top-8 lg:-right-6 lg:-top-10 z-20">
          <TopRightLeaves />
        </div>

        {/* ========================================================
            4. Bottom Left Botanical Leaves
           ======================================================== */}
        <div className="absolute -bottom-3 -left-4 sm:-bottom-5 sm:-left-6 lg:-bottom-6 lg:-left-8 z-20">
          <BottomLeftLeaves />
        </div>

        {/* ========================================================
            5. Thin Curved Botanical Contour Line
           ======================================================== */}
        <div className="pointer-events-none absolute -bottom-8 -left-10 h-28 w-56 z-10">
          <CurvedBotanicalLine className="h-full w-full" />
        </div>

        {/* ========================================================
            6. Cinematic Blurred Foreground Leaves (Bottom Right)
           ======================================================== */}
        <div className="pointer-events-none absolute -bottom-6 -right-6 z-30">
          <ForegroundBokehLeaves />
        </div>

      </div>
    </div>
  )
}

export default OrganicHeroArtwork
