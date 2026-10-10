'use client'

import React, { useState, useEffect } from 'react'
import {
  X,
  Menu,
  ArrowRight,
  Phone,
  Clock3,
  HelpCircle,
  HeartHandshake,
  Hospital,
  Compass,
  Users,
  ChevronRight,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'
import { LanguageToggle } from '@/components/LanguageToggle'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'

const phoneNumber = '+91 83010 16493'
const whatsappUrl =
  'https://wa.me/918301016493?text=Hello%2C%20I%20would%20like%20to%20request%20elder%20care%20assistance%20in%20Alappuzha.'

export function Navbar() {
  const { language } = useLanguage()
  const t = translations[language].nav
  const hours = translations[language].hours

  const navLinks = [
    { href: '/#about', id: 'about', label: t.about, icon: Compass },
    { href: '/#services', id: 'services', label: t.services, icon: Hospital },
    { href: '/#process', id: 'process', label: t.process, icon: HeartHandshake },
    { href: '/#families', id: 'families', label: t.families, icon: Users },
    { href: '/#faq', id: 'faq', label: t.faq, icon: HelpCircle },
  ]

  const [drawerOpen, setDrawerOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  // Scrollspy logic
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15)

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

  // Lock body scroll and listen for Escape key when drawer is open
  useEffect(() => {
    if (!drawerOpen) {
      document.body.style.overflow = ''
      document.body.removeAttribute('data-drawer-open')
      return
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDrawerOpen(false)
      }
    }

    document.body.style.overflow = 'hidden'
    document.body.setAttribute('data-drawer-open', 'true')
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      document.body.removeAttribute('data-drawer-open')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [drawerOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setDrawerOpen(false)
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
        className={`fixed left-0 right-0 top-0 z-40 w-full transition-all duration-300 ${
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

          {/* Desktop Navigation (>= lg screens: 1024px+) */}
          <nav
            className="hidden items-center gap-1.5 lg:flex xl:gap-2"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 xl:px-4 xl:py-2 xl:text-[13px] ${
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

          {/* Desktop CTA & Language Switcher (>= lg screens: 1024px+) */}
          <div className="hidden items-center gap-3 lg:flex">
            <LanguageToggle variant="compact" />

            <a
              href="/#request"
              onClick={(e) => handleNavClick(e, 'request')}
              className="rounded-full bg-[#075C42] px-4 py-2 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(7,92,66,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#054631] hover:shadow-[0_10px_24px_rgba(7,92,66,0.3)] xl:px-5 xl:py-2.5"
            >
              {t.requestBtn}
            </a>
          </div>

          {/* Controls Below LG (< 1024px): Language Switcher + App Drawer Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageToggle variant="compact" />

            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#DCE7D8] bg-white text-[#075C42] shadow-2xs transition hover:bg-[#EAF4E8] cursor-pointer"
              aria-label="Open navigation drawer"
              aria-expanded={drawerOpen}
            >
              <Menu size={22} strokeWidth={2.4} />
            </button>
          </div>
        </div>
      </header>

      {/* Spacer so page content starts cleanly below the fixed navbar */}
      <div className="h-16 sm:h-20 w-full shrink-0" aria-hidden="true" />

      {/* ========================================================
          APP DRAWER (< lg screens)
         ======================================================== */}
      {/* Backdrop overlay */}
      <div
        onClick={() => setDrawerOpen(false)}
        className={`fixed inset-0 z-[60] bg-[#06241C]/65 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* Slide-out Drawer Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Drawer"
        className={`fixed inset-y-0 right-0 z-[70] flex w-[86vw] max-w-[360px] flex-col justify-between border-l border-[#DCE7D8] bg-[#F8F9F3] p-5 pb-[calc(1.25rem+env(safe-area-inset-bottom,0px))] shadow-2xl transition-transform duration-300 ease-out sm:p-6 lg:hidden ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-[#EAF0E8] pb-4">
          <div className="flex items-center gap-2.5">
            <div className="flex size-9 items-center justify-center rounded-xl bg-white p-1 shadow-2xs ring-1 ring-[#075C42]/10">
              <img
                src="/oppam-care-logo.png"
                alt="Oppam Care logo"
                className="h-full w-full object-contain"
                width={36}
                height={36}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold tracking-[0.14em] text-[#075C42]">OPPAM CARE</span>
              <span className="text-[9px] font-semibold tracking-wide text-[#7C9882]">ALAPPUZHA</span>
            </div>
          </div>

          {/* Close Button */}
          <button
            type="button"
            onClick={() => setDrawerOpen(false)}
            className="flex size-9 items-center justify-center rounded-full bg-white text-[#4E6B5D] shadow-2xs ring-1 ring-[#DCE7D8] transition hover:bg-[#EAF4E8] hover:text-[#075C42] cursor-pointer"
            aria-label="Close drawer"
          >
            <X size={19} />
          </button>
        </div>

        {/* Drawer Navigation Links */}
        <div className="flex-1 overflow-y-auto py-5 space-y-1.5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            const Icon = link.icon
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`group flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-[#075C42] text-white shadow-xs'
                    : 'text-[#123D32] hover:bg-[#EAF4E8] hover:text-[#075C42]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex size-8 items-center justify-center rounded-xl transition-colors ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-white text-[#075C42] group-hover:bg-[#075C42] group-hover:text-white shadow-2xs'
                    }`}
                  >
                    <Icon size={16} />
                  </span>
                  <span>{link.label}</span>
                </div>
                <ChevronRight
                  size={16}
                  className={`transition-transform group-hover:translate-x-0.5 ${
                    isActive ? 'text-white' : 'text-[#7C9882]'
                  }`}
                />
              </a>
            )
          })}

          {/* Language Switcher Card in Drawer */}
          <div className="mt-5 rounded-2xl border border-[#DCE7D8] bg-white p-3.5 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#557366]">Language / ഭാഷ</span>
              <LanguageToggle variant="full" />
            </div>
          </div>

          {/* Quick Hours Pill */}
          <div className="mt-2.5 rounded-2xl border border-[#DCE7D8] bg-[#FAFDF9] p-3 text-xs">
            <div className="flex items-center gap-2">
              <Clock3 size={15} className="text-[#075C42]" />
              <span className="font-bold text-[#075C42]">{hours.badge}</span>
              <span className="ml-auto inline-flex items-center gap-1 text-[11px] font-bold text-[#1E7D42]">
                <span className="size-1.5 rounded-full bg-[#25D366] animate-pulse" />
                {hours.status}
              </span>
            </div>
            <p className="mt-1 text-[11px] text-[#557366]">{hours.bookingTime} ({hours.bookingDays})</p>
          </div>

          {/* Direct Support Contacts */}
          <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366]/10 py-2.5 font-bold text-[#1EBE5D] transition hover:bg-[#25D366]/20"
            >
              <WhatsAppIcon size={16} />
              <span>WhatsApp</span>
            </a>
            <a
              href="tel:+918301016493"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#EAF4E8] py-2.5 font-bold text-[#075C42] transition hover:bg-[#DCEBD5]"
            >
              <Phone size={15} />
              <span>Call</span>
            </a>
          </div>
        </div>

        {/* Drawer Bottom Action CTA */}
        <div className="shrink-0 border-t border-[#EAF0E8] pt-4">
          <a
            href="/#request"
            onClick={(e) => handleNavClick(e, 'request')}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#075C42] py-3.5 text-center text-sm font-bold text-white shadow-md transition hover:bg-[#054631] active:translate-y-0"
          >
            <span>{t.requestBtn}</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </aside>
    </>
  )
}

export default Navbar
