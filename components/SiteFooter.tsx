'use client'

import React from 'react'
import { Mail } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'
import { CONTACT_EMAIL, whatsappLink } from '@/lib/contact'
import { LanguageToggle } from '@/components/LanguageToggle'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'
import { InstagramIcon } from '@/components/icons/InstagramIcon'
import { FacebookIcon } from '@/components/icons/FacebookIcon'

const defaultWhatsappMessage = 'Hello, I would like to request elder care assistance in Alappuzha.'

/** Site footer for secondary pages. Mirrors the home page footer, with links pointing back to it. */
export function SiteFooter() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer className="bg-[#0C3528] px-6 py-14 text-white/75 lg:px-10">
      <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-10 sm:flex-row" data-reveal-stagger>
        <div className="max-w-sm">
          <div className="mb-5 flex size-14 items-center justify-center rounded-xl bg-white p-1">
            <img
              src="/oppam-care-logo.png"
              alt="Oppam Care logo"
              className="h-full w-full object-contain"
              width={56}
              height={56}
            />
          </div>
          <p className="leading-7 text-white/80">{t.footer.tagline}</p>

          <div className="mt-4 flex items-center gap-2">
            <LanguageToggle variant="full" />
          </div>

          <div className="mt-6 flex items-center gap-3" data-reveal-stagger="scale" style={{ '--stagger-base': '250ms' } as React.CSSProperties}>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              aria-label="Send email to Oppam Care"
              className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white/90 transition hover:scale-105 hover:bg-[#C58A3E] hover:text-white"
            >
              <Mail size={19} />
            </a>
            <a
              href={whatsappLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on WhatsApp"
              className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white/90 transition hover:scale-105 hover:bg-[#25D366] hover:text-white"
            >
              <WhatsAppIcon size={20} />
            </a>
            <a
              href="https://www.instagram.com/oppamcare?dlrf=MW45YnIza2k3MWRtdA=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white/90 transition hover:scale-105 hover:bg-[#E4405F] hover:text-white"
            >
              <InstagramIcon size={20} />
            </a>
            <a
              href="https://www.facebook.com/share/1CCMqoyrcb/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
              className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white/90 transition hover:scale-105 hover:bg-[#1877F2] hover:text-white"
            >
              <FacebookIcon size={20} />
            </a>
          </div>
        </div>
        <div className="grid h-fit gap-3 text-sm font-medium sm:grid-cols-2">
          <a href="/#services" className="hover:text-white">{t.nav.services}</a>
          <a href="/home-care" className="hover:text-white">{t.nav.homeCare}</a>
          <a href="/#process" className="hover:text-white">{t.nav.process}</a>
          <a href="/#families" className="hover:text-white">{t.nav.families}</a>
          <a href="/#faq" className="hover:text-white">{t.nav.faq}</a>
          <a href="/terms" className="hover:text-white">{t.footer.terms}</a>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-[1280px] flex-col gap-3 border-t border-white/15 pt-6 text-xs text-white/60 sm:flex-row sm:justify-between" data-reveal="fade">
        <span>{t.footer.rights}</span>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <span className="font-medium text-[#DBC57A]">{t.hours.footerHours}</span>
          <span>·</span>
          <a href="/terms" className="underline hover:text-white">{t.footer.terms}</a>
          <span>·</span>
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-white">{CONTACT_EMAIL}</a>
          <span>·</span>
          <span>{t.footer.address}</span>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
