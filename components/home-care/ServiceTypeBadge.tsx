'use client'

import { BadgeCheck, HeartHandshake } from 'lucide-react'
import type { HomeCareServiceType } from '@/lib/homeCareData'

interface ServiceTypeBadgeProps {
  type: HomeCareServiceType
  label: string
  className?: string
}

/** Distinguishes trained-caregiver (non-medical) services from qualified-nurse services. */
export function ServiceTypeBadge({ type, label, className = '' }: ServiceTypeBadgeProps) {
  const isNurse = type === 'nursing-professional'
  const Icon = isNurse ? BadgeCheck : HeartHandshake
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold leading-none ${
        isNurse
          ? 'bg-[#FFF6E3] text-[#8B6112] ring-1 ring-[#C88A16]/30'
          : 'bg-[#EAF4E8] text-[#075C42] ring-1 ring-[#075C42]/15'
      } ${className}`}
    >
      <Icon size={13} strokeWidth={2.4} aria-hidden="true" />
      {label}
    </span>
  )
}

export default ServiceTypeBadge
