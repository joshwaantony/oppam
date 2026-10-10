'use client'

import React, { useState, useEffect } from 'react'
import { WhatsAppIcon } from './icons/WhatsAppIcon'

const whatsappUrl =
  'https://wa.me/918301016493?text=Hello%2C%20I%20would%20like%20to%20request%20elder%20care%20assistance%20in%20Alappuzha.'

export function FloatingWhatsApp() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  useEffect(() => {
    const updateVisibility = () => {
      const drawerOpen = document.body.getAttribute('data-drawer-open') === 'true'
      setIsDrawerOpen(drawerOpen)
    }

    updateVisibility()

    const observer = new MutationObserver(updateVisibility)
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['data-drawer-open'],
    })

    return () => observer.disconnect()
  }, [])

  return (
    <a
      id="floating-whatsapp"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      tabIndex={isDrawerOpen ? -1 : 0}
      className={`fixed bottom-6 right-6 z-30 flex items-center gap-2.5 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-[#063E23] shadow-[0_10px_25px_rgba(37,211,102,0.38)] backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:bg-[#20BE5B] hover:shadow-[0_16px_35px_rgba(37,211,102,0.5)] ${
        isDrawerOpen
          ? 'translate-y-8 opacity-0 scale-90 pointer-events-none'
          : 'translate-y-0 opacity-100 scale-100 pointer-events-auto'
      }`}
    >
      <WhatsAppIcon size={22} className="text-[#063E23]" />
      <span className="tracking-wide">Chat on WhatsApp</span>
    </a>
  )
}



