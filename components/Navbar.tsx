'use client'

import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'

const navLinks = [
  { href: '/#about', id: 'about', label: 'About' },
  { href: '/#services', id: 'services', label: 'Services' },
  { href: '/#process', id: 'process', label: 'How it works' },
  { href: '/#families', id: 'families', label: 'Families abroad' },
  { href: '/#faq', id: 'faq', label: 'FAQ' },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15)

      // Section selection scrollspy logic
      const sectionIds = ['about', 'services', 'process', 'families', 'faq', 'request']
      const scrollPosition = window.scrollY + 140

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i])
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionIds[i])
            return
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('')
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setMobileMenuOpen(false)
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
      const el = document.getElementById(targetId)
      if (el) {
        e.preventDefault()
        el.scrollIntoView({ behavior: 'smooth' })
        setActiveSection(targetId)
      }
    }
  }

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'border-b border-[#DCE7D8] bg-[#F8F9F3]/95 shadow-[0_4px_24px_rgba(7,92,66,0.06)] backdrop-blur-md'
            : 'border-b border-[#E7EBD8]/70 bg-[#F8F9F3]/90 backdrop-blur-md'
        }`}
      >
        <div className="mx-auto flex h-16 sm:h-20 w-full max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-10">
          {/* Oppam Care Logo on left */}
          <a href="/#top" className="group flex items-center gap-2.5 sm:gap-3" aria-label="Oppam Care Home">
            <div className="flex size-10 sm:size-11 items-center justify-center rounded-xl bg-white/90 p-1 shadow-2xs ring-1 ring-[#075C42]/10 transition group-hover:scale-105">
              <img
                src="/oppam-care-logo.png"
                alt="Oppam Care elder care assistance logo Alappuzha"
                className="h-full w-full object-contain"
                width={44}
                height={44}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] sm:text-sm font-bold tracking-[0.14em] text-[#075C42]">OPPAM CARE</span>
              <span className="text-[9.5px] sm:text-[10px] font-semibold tracking-wide text-[#7C9882]">ALAPPUZHA</span>
            </div>
          </a>

          {/* Header Navbar Selection (Desktop & Tablet md+) */}
          <nav
            className="hidden items-center gap-1 sm:gap-2 md:flex"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 lg:px-4 lg:py-2 lg:text-[13px] ${
                    isActive
                      ? 'bg-[#EAF3E6] font-bold text-[#075C42] shadow-2xs ring-1 ring-[#075C42]/20'
                      : 'text-[#34594B] hover:bg-[#EAF3E6]/60 hover:text-[#075C42]'
                  }`}
                >
                  {link.label}
                </a>
              )
            })}
          </nav>

          {/* CTA on right */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="/#request"
              onClick={(e) => handleNavClick(e, 'request')}
              className="rounded-full bg-[#075C42] px-4 py-2 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(7,92,66,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#054631] hover:shadow-[0_10px_24px_rgba(7,92,66,0.3)] lg:px-5 lg:py-2.5"
            >
              Request assistance
            </a>
          </div>

          {/* Mobile menu toggle button (hamburger) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex size-10 shrink-0 items-center justify-center rounded-lg text-[#134E39] hover:bg-[#EAF3E6] md:hidden"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? (
              <X size={24} strokeWidth={2.4} />
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown menu with active section selection */}
        {mobileMenuOpen && (
          <div className="border-t border-[#E0E7DC] bg-[#F8F9F3] px-6 py-5 shadow-lg md:hidden">
            <nav className="flex flex-col gap-2 text-base font-semibold text-[#123D32]">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`rounded-xl px-4 py-2.5 transition-all ${
                      isActive
                        ? 'bg-[#EAF3E6] font-bold text-[#075C42]'
                        : 'text-[#123D32] hover:bg-[#EAF3E6]/50 hover:text-[#075C42]'
                    }`}
                  >
                    {link.label}
                  </a>
                )
              })}
              <a
                href="/#request"
                onClick={(e) => handleNavClick(e, 'request')}
                className="mt-2 rounded-full bg-[#075C42] py-3 text-center text-sm font-semibold text-white shadow-sm"
              >
                Request assistance
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Spacer so page content starts cleanly below the fixed navbar */}
      <div className="h-16 sm:h-20 w-full shrink-0" aria-hidden="true" />
    </>
  )
}

export default Navbar
