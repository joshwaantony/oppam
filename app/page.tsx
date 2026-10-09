'use client'

import { useState } from 'react'
import {
  ArrowRight,
  Check,
  Clock3,
  FileHeart,
  HeartHandshake,
  Hospital,
  House,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Stethoscope,
  TestTube2,
} from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'
import { InstagramIcon } from '@/components/icons/InstagramIcon'
import { FacebookIcon } from '@/components/icons/FacebookIcon'
import { FaqSection } from '@/components/FaqSection'

const phoneNumber = '+91 83010 16493'
const whatsappUrl =
  'https://wa.me/918301016493?text=Hello%2C%20I%20would%20like%20to%20request%20elder%20care%20assistance%20in%20Alappuzha.'

const services = [
  { icon: Hospital, title: 'Hospital visit assistance', text: 'Accompaniment and practical support during hospital visits.' },
  { icon: Stethoscope, title: 'Doctor appointments', text: 'Help with scheduled consultations and coordinating the visit.' },
  { icon: TestTube2, title: 'Medical test assistance', text: 'Support at diagnostic centres and required tests.' },
  { icon: FileHeart, title: 'Admission support', text: 'Personal assistance throughout the admission process.' },
  { icon: HeartHandshake, title: 'In-hospital companionship', text: 'A trusted presence during the agreed service period.' },
  { icon: House, title: 'Return home assistance', text: 'Support for a calm, safe return home after discharge.' },
]

export default function Page() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    parentName: '',
    service: 'Hospital visit',
    details: '',
  })

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const lines = [
      'Hello Oppam Care, I would like to request elder care assistance in Alappuzha:',
      '',
      `• *Name:* ${formData.name.trim()}`,
      `• *Phone / WhatsApp:* ${formData.phone.trim()}`,
      formData.parentName.trim() ? `• *Parent's Name:* ${formData.parentName.trim()}` : null,
      `• *Assistance Needed:* ${formData.service}`,
      formData.details.trim() ? `• *Details:* ${formData.details.trim()}` : null,
    ].filter(Boolean)

    const message = lines.join('\n')
    const targetUrl = `https://wa.me/918301016493?text=${encodeURIComponent(message)}`

    // Open WhatsApp directly
    const opened = window.open(targetUrl, '_blank')
    if (!opened || opened.closed || typeof opened.closed === 'undefined') {
      window.location.href = targetUrl
    }
  }

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#F8F6EE] text-[#123D32]">
      {/* Minimal Header / Navbar */}
      <Navbar />

      {/* Primary Reference-Matched Hero Section */}
      <HeroSection headlineVariant="home" />

      {/* About Section */}
      <section id="about" className="border-y border-[#DCE6DC] bg-[#EAF3E6] px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1080px] items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <h2 className="text-3xl font-bold leading-tight tracking-[-0.03em] text-[#075C42] sm:text-4xl lg:text-5xl">
            Distance should never mean your parents face difficult moments alone.
          </h2>
          <p className="text-base leading-8 text-[#4E6B5D] sm:text-lg">
            Whether you are in Dubai, Bengaluru, London or across town, we help you stay present in the moments that need a little more care.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="mx-auto max-w-[1280px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#C88A16]">Practical support</p>
            <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#075C42] sm:text-4xl lg:text-5xl">
              Help when your family needs it most.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-[#4E6B5D]">
            A calm, capable companion for the practical parts of care — from first visit to safe return home.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group rounded-3xl border border-[#DCE7D8] bg-white p-7 shadow-xs transition duration-300 hover:-translate-y-1 hover:border-[#8DBB4D] hover:shadow-[0_18px_40px_rgba(7,92,66,0.08)]"
            >
              <div className="mb-8 flex size-12 items-center justify-center rounded-2xl bg-[#EAF4E8] text-[#075C42] transition group-hover:bg-[#075C42] group-hover:text-white">
                <Icon size={23} />
              </div>
              <h3 className="text-xl font-bold text-[#123D32]">{title}</h3>
              <p className="mt-3 leading-7 text-[#557366]">{text}</p>
              <a href="#request" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#075C42] transition group-hover:gap-3">
                Learn more <ArrowRight size={15} />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="bg-[#075C42] px-6 py-20 text-white lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#DBC57A]">How it works</p>
            <h2 className="text-3xl font-bold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Simple support. Clear communication.
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              ['01', 'Contact us', 'Call, WhatsApp or submit an assistance request.'],
              ['02', 'Tell us what you need', 'Share the person, location, hospital, date and time.'],
              ['03', 'We confirm', 'We confirm scope, availability, fee and instructions.'],
              ['04', 'We support them', 'A trusted assistant accompanies your loved one and keeps you informed.'],
            ].map(([num, title, text]) => (
              <div key={num} className="border-t border-white/20 pt-5">
                <span className="text-sm font-bold text-[#DBC57A]">{num}</span>
                <h3 className="mt-6 text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-white/75">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Families Abroad Section */}
      <section id="families" className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1fr] lg:px-10 lg:py-28">
        <div className="relative overflow-hidden rounded-[2.2rem] border border-[#C88A16]/30 bg-[#DCEBD5] p-3 shadow-[0_20px_50px_rgba(7,92,66,0.12)]">
          <img
            src="/oppam-care-family.png"
            alt="Elderly Malayali parent supported on a traditional Kerala veranda by Oppam Care companion"
            className="aspect-[0.9] w-full rounded-[1.8rem] object-cover"
            width={540}
            height={600}
            loading="lazy"
          />
        </div>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#C88A16]">For families abroad</p>
          <h2 className="text-3xl font-bold leading-tight tracking-[-0.03em] text-[#075C42] sm:text-4xl lg:text-5xl">
            Be close to them, even when you&apos;re miles away.
          </h2>
          <p className="mt-6 text-base leading-8 text-[#4E6B5D] sm:text-lg">
            Your parents may be in Alappuzha while you are building your life somewhere else. When they need practical help, you can have a trusted local person there with them.
          </p>
          <ul className="mt-8 grid gap-3.5 text-base font-semibold text-[#123D32] sm:grid-cols-2">
            {[
              'Local presence in Alappuzha',
              'Assistance during visits',
              'Appropriate family updates',
              'Clear service scope',
              'Transparent communication',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#EAF4E8] text-[#075C42]">
                  <Check size={14} strokeWidth={2.6} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href="#request"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#075C42] px-7 py-4 font-semibold text-white shadow-[0_12px_26px_rgba(7,92,66,0.25)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#054631]"
          >
            Request assistance <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="border-y border-[#DCE7D8] bg-white px-6 py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1100px]">
          <div className="text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#C88A16]">Trust & safety</p>
            <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#075C42] sm:text-4xl">Care built on trust.</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[
              'Verified service personnel',
              'Clear service scope',
              'Secure customer information',
              'Consent & emergency procedures',
              'Transparent pricing',
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-[#F8F6EE] p-5 text-left ring-1 ring-[#DCE7D8]/60">
                <ShieldCheck className="text-[#075C42]" size={26} />
                <p className="mt-4 text-sm font-bold leading-6 text-[#123D32]">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-[#C88A16]/30 bg-[#FFFDF7] px-6 py-4 text-center text-sm font-semibold text-[#8B6112]">
            This is a personal assistance and companionship service, not a medical treatment service.
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />

      {/* Request Form Section */}
      <section id="request" className="bg-[#EAF3E6] px-6 py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1140px] gap-12 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#C88A16]">Start a conversation</p>
            <h2 className="text-3xl font-bold leading-tight tracking-[-0.03em] text-[#075C42] sm:text-4xl lg:text-5xl">
              Tell us how we can help.
            </h2>
            <p className="mt-5 text-base leading-8 text-[#4E6B5D] sm:text-lg">
              Share a few details and our team will get back to you. Your information is used only to coordinate your request.
            </p>
            <div className="mt-8 flex flex-col gap-4 text-sm font-semibold text-[#123D32]">
              <a href="tel:+918301016493" className="flex items-center gap-3 transition hover:text-[#075C42]">
                <Phone size={18} className="text-[#075C42]" /> {phoneNumber}
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition hover:text-[#075C42]">
                <WhatsAppIcon size={18} className="text-[#25D366]" /> WhatsApp: {phoneNumber}
              </a>
              <a href="mailto:oppamcare@gmail.com" className="flex items-center gap-3 transition hover:text-[#075C42]">
                <Mail size={18} className="text-[#075C42]" /> oppamcare@gmail.com
              </a>
              <span className="flex items-center gap-3 font-semibold text-[#123D32]">
                <MapPin size={18} className="text-[#075C42] shrink-0" /> Pathirapally P.O, Alappuzha - 688521, Kerala
              </span>
              <span className="flex items-center gap-3 text-xs font-medium text-[#557366]">
                <Clock3 size={18} className="text-[#075C42]" /> Service availability confirmed before every booking
              </span>
            </div>
          </div>

          <form
            className="rounded-3xl bg-white p-7 shadow-[0_18px_45px_rgba(7,92,66,0.08)] sm:p-9"
            onSubmit={handleFormSubmit}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-bold text-[#123D32]">
                Your name
                <input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-[#DCE7D8] bg-[#FBFDF9] px-4 py-3.5 font-normal outline-none transition focus:border-[#075C42] focus:ring-2 focus:ring-[#8DBB4D]/30"
                  placeholder="Full name"
                />
              </label>
              <label className="text-sm font-bold text-[#123D32]">
                Phone / WhatsApp
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-[#DCE7D8] bg-[#FBFDF9] px-4 py-3.5 font-normal outline-none transition focus:border-[#075C42] focus:ring-2 focus:ring-[#8DBB4D]/30"
                  placeholder="+91"
                />
              </label>
              <label className="text-sm font-bold text-[#123D32]">
                Parent&apos;s name
                <input
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-[#DCE7D8] bg-[#FBFDF9] px-4 py-3.5 font-normal outline-none transition focus:border-[#075C42] focus:ring-2 focus:ring-[#8DBB4D]/30"
                  placeholder="Their name (optional)"
                />
              </label>
              <label className="text-sm font-bold text-[#123D32]">
                Assistance needed
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-[#DCE7D8] bg-[#FBFDF9] px-4 py-3.5 font-normal outline-none focus:border-[#075C42]"
                >
                  <option>Hospital visit</option>
                  <option>Doctor appointment</option>
                  <option>Medical test</option>
                  <option>Admission support</option>
                  <option>Return home</option>
                  <option>Other</option>
                </select>
              </label>
            </div>
            <label className="mt-5 block text-sm font-bold text-[#123D32]">
              A little more detail
              <textarea
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="mt-2 min-h-28 w-full resize-y rounded-xl border border-[#DCE7D8] bg-[#FBFDF9] px-4 py-3.5 font-normal outline-none focus:border-[#075C42]"
                placeholder="Location, preferred date, hospital or anything else we should know (optional)"
              />
            </label>
            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2.5 rounded-full bg-[#075C42] px-6 py-4 font-semibold text-white shadow-md transition duration-200 hover:bg-[#054631] cursor-pointer"
            >
              <WhatsAppIcon size={19} className="text-[#25D366]" />
              Send request via WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0C3528] px-6 py-14 text-white/75 lg:px-10">
        <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-10 sm:flex-row">
          <div className="max-w-sm">
            <div className="mb-5 flex size-14 items-center justify-center rounded-xl bg-white p-1">
              <img
                src="/oppam-care-logo.png"
                alt="Oppam Care elder care assistance logo Alappuzha"
                className="h-full w-full object-contain"
                width={56}
                height={56}
              />
            </div>
            <p className="leading-7 text-white/80">
              Personal assistance and companionship for elderly parents and loved ones in Alappuzha.
            </p>
            {/* Social Media Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="mailto:oppamcare@gmail.com"
                aria-label="Send email to Oppam Care"
                className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white/90 transition hover:bg-[#C58A3E] hover:text-white hover:scale-105"
              >
                <Mail size={19} />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on WhatsApp"
                className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white/90 transition hover:bg-[#25D366] hover:text-white hover:scale-105"
              >
                <WhatsAppIcon size={20} />
              </a>
              <a
                href="https://www.instagram.com/oppamcare?dlrf=MW45YnIza2k3MWRtdA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white/90 transition hover:bg-[#E4405F] hover:text-white hover:scale-105"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href="https://www.facebook.com/share/1CCMqoyrcb/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white/90 transition hover:bg-[#1877F2] hover:text-white hover:scale-105"
              >
                <FacebookIcon size={20} />
              </a>
            </div>
          </div>
          <div className="grid gap-3 text-sm font-medium sm:grid-cols-2">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#process" className="hover:text-white">How it works</a>
            <a href="#families" className="hover:text-white">Families abroad</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="/terms" className="hover:text-white">Terms & Conditions</a>
            <a href="#request" className="hover:text-white">Contact us</a>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-[1280px] flex-col gap-3 border-t border-white/15 pt-6 text-xs sm:flex-row sm:justify-between text-white/60">
          <span>© 2026 Oppam Care. All rights reserved.</span>
          <div className="flex flex-wrap gap-x-4 gap-y-1 items-center">
            <a href="/terms" className="underline hover:text-white">Terms & Conditions</a>
            <span>·</span>
            <a href="mailto:oppamcare@gmail.com" className="hover:text-white underline">oppamcare@gmail.com</a>
            <span>·</span>
            <span>Pathirapally P O, Alappuzha - 688521, Kerala</span>
          </div>
        </div>
      </footer>

      {/* Viewport Fixed Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </main>
  )
}


