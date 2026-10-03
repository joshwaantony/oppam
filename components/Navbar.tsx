'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'border-b border-[#DCE7D8] bg-[#F8F6EE]/95 shadow-[0_4px_24px_rgba(7,92,66,0.08)] backdrop-blur-md'
            : 'border-b border-[#E7EBD8]/60 bg-[#F8F6EE]/90 backdrop-blur-md'
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6 lg:px-10">
          {/* Oppam Care Logo on left */}
          <a href="#top" className="group flex items-center gap-3" aria-label="Oppam Care Home">
            <div className="flex size-11 items-center justify-center rounded-xl bg-white/90 p-1 shadow-2xs ring-1 ring-[#075C42]/10 transition group-hover:scale-105">
              <img
                src="/oppam-care-logo.png"
                alt="Oppam Care logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-[0.14em] text-[#075C42]">OPPAM CARE</span>
              <span className="text-[10px] font-semibold tracking-wide text-[#7C9882]">ALAPPUZHA</span>
            </div>
          </a>

          {/* Minimal Navigation */}
          <nav
            className="hidden items-center gap-8 text-[13px] font-semibold tracking-wide text-[#34594B] md:flex"
            aria-label="Main Navigation"
          >
            <a href="#about" className="transition hover:text-[#075C42]">About</a>
            <a href="#services" className="transition hover:text-[#075C42]">Services</a>
            <a href="#process" className="transition hover:text-[#075C42]">How it works</a>
            <a href="#families" className="transition hover:text-[#075C42]">Families abroad</a>
            <a href="#faq" className="transition hover:text-[#075C42]">FAQ</a>
          </nav>

          {/* One CTA on right */}
          <div className="hidden items-center gap-3 sm:flex">
            <a
              href="#request"
              className="rounded-full bg-[#075C42] px-5 py-2.5 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(7,92,66,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#054631] hover:shadow-[0_10px_24px_rgba(7,92,66,0.3)]"
            >
              Request assistance
            </a>
          </div>

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-full p-2 text-[#075C42] hover:bg-[#EAF3E6] md:hidden"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="border-t border-[#E0E7DC] bg-[#F8F6EE] px-6 py-5 shadow-lg md:hidden">
            <nav className="flex flex-col gap-4 text-base font-semibold text-[#123D32]">
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#075C42]">About</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#075C42]">Services</a>
              <a href="#process" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#075C42]">How it works</a>
              <a href="#families" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#075C42]">Families abroad</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#075C42]">FAQ</a>
              <a
                href="#request"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 rounded-full bg-[#075C42] py-3 text-center text-sm font-semibold text-white shadow-sm"
              >
                Request assistance
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Spacer so page content starts cleanly below the fixed 80px navbar */}
      <div className="h-20 w-full shrink-0" aria-hidden="true" />
    </>
  )
}
