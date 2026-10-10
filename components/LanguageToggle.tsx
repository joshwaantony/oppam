'use client'

import React from 'react'
import { Languages, Globe } from 'lucide-react'
import { useLanguage, Language } from '@/context/LanguageContext'

interface LanguageToggleProps {
  variant?: 'compact' | 'full' | 'subtle'
  className?: string
}

export function LanguageToggle({ variant = 'compact', className = '' }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage()

  if (variant === 'full') {
    return (
      <div className={`inline-flex items-center rounded-full bg-[#EAF4E8] p-1 border border-[#DCE7D8] ${className}`}>
        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
            language === 'en'
              ? 'bg-[#075C42] text-white shadow-xs'
              : 'text-[#4E6B5D] hover:text-[#075C42]'
          }`}
        >
          English
        </button>
        <button
          type="button"
          onClick={() => setLanguage('ml')}
          className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
            language === 'ml'
              ? 'bg-[#075C42] text-white shadow-xs'
              : 'text-[#4E6B5D] hover:text-[#075C42]'
          }`}
        >
          മലയാളം
        </button>
      </div>
    )
  }

  if (variant === 'subtle') {
    return (
      <div className={`flex items-center gap-1 text-xs font-semibold ${className}`}>
        <Globe size={14} className="text-[#075C42]" />
        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`transition cursor-pointer ${language === 'en' ? 'font-bold text-[#075C42] underline' : 'text-white/70 hover:text-white'}`}
        >
          English
        </button>
        <span className="text-white/40">|</span>
        <button
          type="button"
          onClick={() => setLanguage('ml')}
          className={`transition cursor-pointer ${language === 'ml' ? 'font-bold text-[#075C42] underline' : 'text-white/70 hover:text-white'}`}
        >
          മലയാളം
        </button>
      </div>
    )
  }

  // Compact Pill Badge for Navbar
  return (
    <div
      className={`relative inline-flex items-center rounded-full border border-[#DCE7D8] bg-[#F4F9F2] p-0.5 shadow-2xs ${className}`}
      role="group"
      aria-label="Language selector"
    >
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold transition-all duration-200 cursor-pointer ${
          language === 'en'
            ? 'bg-[#075C42] text-white shadow-xs'
            : 'text-[#557366] hover:text-[#075C42]'
        }`}
        aria-pressed={language === 'en'}
      >
        <span className="tracking-wider">ENG</span>
      </button>

      <button
        type="button"
        onClick={() => setLanguage('ml')}
        className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold transition-all duration-200 cursor-pointer ${
          language === 'ml'
            ? 'bg-[#075C42] text-white shadow-xs'
            : 'text-[#557366] hover:text-[#075C42]'
        }`}
        aria-pressed={language === 'ml'}
      >
        <span>മലയാളം</span>
      </button>
    </div>
  )
}

export default LanguageToggle
