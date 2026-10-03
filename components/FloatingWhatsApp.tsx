'use client'

import React from 'react'
import { WhatsAppIcon } from './icons/WhatsAppIcon'

const whatsappUrl =
  'https://wa.me/919074025279?text=Hello%2C%20I%20would%20like%20to%20request%20elder%20care%20assistance%20in%20Alappuzha.'

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-[#063E23] shadow-[0_10px_25px_rgba(37,211,102,0.38)] backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:bg-[#20BE5B] hover:shadow-[0_16px_35px_rgba(37,211,102,0.5)]"
    >
      <WhatsAppIcon size={22} className="text-[#063E23]" />
      <span className="tracking-wide">Chat on WhatsApp</span>
    </a>
  )
}

