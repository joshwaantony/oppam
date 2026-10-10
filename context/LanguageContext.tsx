'use client'

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react'

export type Language = 'en' | 'ml'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
  isMalayalam: boolean
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  toggleLanguage: () => {},
  isMalayalam: false,
})

const STORAGE_KEY = 'oppam_care_language'

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  // Retrieve saved language from localStorage on initial client mount
  useEffect(() => {
    setMounted(true)
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null
      if (saved === 'en' || saved === 'ml') {
        setLanguageState(saved)
      }
    } catch {
      // Ignore localStorage errors (e.g. incognito)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // Ignore
    }
    // Update html lang attribute
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang === 'ml' ? 'ml' : 'en'
    }
  }

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ml' : 'en')
  }

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      isMalayalam: language === 'ml',
    }),
    [language]
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
