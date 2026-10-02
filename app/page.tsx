'use client'

import { useState } from 'react'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  FileHeart,
  HeartHandshake,
  Hospital,
  House,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Stethoscope,
  TestTube2,
  X,
} from 'lucide-react'

const phoneNumber = '+91 90740 25279'
const whatsappUrl = 'https://wa.me/919074025279?text=Hello%2C%20I%20would%20like%20to%20request%20elder%20care%20assistance%20in%20Alappuzha.'

const services = [
  { icon: Hospital, title: 'Hospital visit assistance', text: 'Accompaniment and practical support during hospital visits.' },
  { icon: Stethoscope, title: 'Doctor appointments', text: 'Help with scheduled consultations and coordinating the visit.' },
  { icon: TestTube2, title: 'Medical test assistance', text: 'Support at diagnostic centres and required tests.' },
  { icon: FileHeart, title: 'Admission support', text: 'Personal assistance throughout the admission process.' },
  { icon: HeartHandshake, title: 'In-hospital companionship', text: 'A trusted presence during the agreed service period.' },
  { icon: House, title: 'Return home assistance', text: 'Support for a calm, safe return home after discharge.' },
]

const faqs = [
  ['What kind of assistance do you provide?', 'We provide non-medical personal assistance and companionship for hospital visits, appointments, tests, admissions, discharge and return home.'],
  ['Is this a medical service?', 'No. This is a personal assistance service. We do not diagnose, prescribe, administer treatment or replace doctors and nurses.'],
  ['Can I request help from abroad?', 'Yes. Families can contact us from another city or country and coordinate practical support for their loved ones in Alappuzha.'],
  ['How will I receive updates?', 'We agree the right update points with you before the service begins and keep communication clear throughout.'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#f8f6ef] text-[#17372a]">
      <header className="sticky top-0 z-50 border-b border-[#dce6dc]/80 bg-[#f8f6ef]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-5 lg:px-8">
          <a href="#top" aria-label="Oppam Care home" className="flex items-center gap-3">
            <img src="/oppam-care-logo.png" alt="Oppam Care logo" className="size-14 rounded-xl object-contain" />
            <span className="hidden text-[13px] font-semibold tracking-[0.18em] text-[#0b5d3b] sm:block">OPPAM CARE</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-[#50665a] lg:flex" aria-label="Main navigation">
            <a href="#about" className="transition hover:text-[#0b5d3b]">About</a>
            <a href="#services" className="transition hover:text-[#0b5d3b]">Services</a>
            <a href="#process" className="transition hover:text-[#0b5d3b]">How it works</a>
            <a href="#families" className="transition hover:text-[#0b5d3b]">For families abroad</a>
            <a href="#faq" className="transition hover:text-[#0b5d3b]">FAQ</a>
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <a href={whatsappUrl} className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-[#0b5d3b] hover:bg-[#eef3ea]"><MessageCircle size={17} /> WhatsApp</a>
            <a href="#request" className="rounded-full bg-[#0b5d3b] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(11,93,59,.18)] transition hover:-translate-y-0.5 hover:bg-[#084c30]">Request assistance</a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-full p-2 text-[#0b5d3b] lg:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <div className="border-t border-[#dce6dc] bg-[#f8f6ef] px-5 py-6 lg:hidden"><nav className="flex flex-col gap-5 text-lg font-medium" aria-label="Mobile navigation"><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#process" onClick={() => setMenuOpen(false)}>How it works</a><a href="#families" onClick={() => setMenuOpen(false)}>For families abroad</a><a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a><a href="#request" onClick={() => setMenuOpen(false)} className="mt-2 rounded-full bg-[#0b5d3b] px-5 py-3 text-center text-base font-semibold text-white">Request assistance</a></nav></div>}
      </header>

      <section id="top" className="relative mx-auto grid max-w-[1240px] items-center gap-10 px-4 pb-16 pt-10 sm:px-5 sm:pb-20 sm:pt-14 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:pb-28 lg:pt-20">
        <div className="relative z-10">
          <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#a27b25]"><span className="h-px w-10 bg-[#c99a32]" /> Elder care assistance · Alappuzha</div>
          <h1 className="max-w-[680px] text-[2.65rem] font-semibold leading-[1.05] tracking-[-0.055em] text-[#0b5d3b] sm:text-6xl lg:text-[76px]">You may be far away.<br /><span className="relative inline-block text-[#17372a]">We&apos;ll be there for them<span className="absolute -bottom-2 left-0 h-1 w-3/4 rounded-full bg-[#a6c84a]" />.</span></h1>
          <p className="mt-7 max-w-[570px] text-lg leading-8 text-[#65756d]">Trusted personal assistance and companionship for elderly parents and loved ones in Alappuzha — when you can&apos;t be there in person.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#request" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0b5d3b] px-6 py-4 font-semibold text-white shadow-[0_12px_28px_rgba(11,93,59,.18)] transition hover:-translate-y-0.5 hover:bg-[#084c30]">Request assistance <ArrowRight size={18} /></a><a href={whatsappUrl} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#b9cbbb] px-6 py-4 font-semibold text-[#0b5d3b] transition hover:bg-white"><MessageCircle size={18} /> WhatsApp us</a></div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-[#53665c]"><span className="flex items-center gap-2"><Check size={16} className="text-[#2f7d45]" /> Local assistance</span><span className="flex items-center gap-2"><Check size={16} className="text-[#2f7d45]" /> Personal companionship</span><span className="flex items-center gap-2"><Check size={16} className="text-[#2f7d45]" /> Family updates</span></div>
        </div>
        <div className="relative mx-auto w-full max-w-[520px] lg:ml-auto">
          <div className="absolute -right-10 -top-10 size-48 rounded-full bg-[#dfeccc] blur-2xl" /><div className="absolute -bottom-8 -left-8 size-44 rounded-full bg-[#a6c84a]/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[42%_42%_20%_20%/26%_26%_18%_18%] bg-[#d9e7d4] p-3 shadow-[0_25px_70px_rgba(32,74,49,.14)]"><img src="/oppam-care-hero.png" alt="An older Indian woman smiling with a trusted companion" className="aspect-[0.88] w-full rounded-[38%_38%_17%_17%] object-cover" /></div>
          <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/90 p-3 pr-5 shadow-lg backdrop-blur"><span className="flex size-10 items-center justify-center rounded-full bg-[#eef3ea] text-[#0b5d3b]"><HeartHandshake size={21} /></span><span><strong className="block text-sm text-[#17372a]">A trusted local presence</strong><small className="text-xs text-[#65756d]">When you cannot be there</small></span></div>
        </div>
      </section>

      <section id="about" className="border-y border-[#dce6dc] bg-[#eef3ea] px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-[1040px] items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]"><h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#0b5d3b] sm:text-5xl">Distance should never mean your parents face difficult moments alone.</h2><p className="text-lg leading-8 text-[#65756d]">Whether you are in Dubai, Bengaluru, London or across town, we help you stay present in the moments that need a little more care.</p></div></section>

      <section id="services" className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8 lg:py-28"><div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#a27b25]">Practical support</p><h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#0b5d3b] sm:text-5xl">Help when your family needs it most.</h2></div><p className="max-w-sm text-base leading-7 text-[#65756d]">A calm, capable companion for the practical parts of care — from first visit to safe return home.</p></div><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{services.map(({ icon: Icon, title, text }) => <article key={title} className="group rounded-3xl border border-[#dce6dc] bg-white p-6 transition hover:-translate-y-1 hover:border-[#a6c84a] hover:shadow-[0_18px_40px_rgba(32,74,49,.08)]"><div className="mb-10 flex size-12 items-center justify-center rounded-2xl bg-[#eef3ea] text-[#0b5d3b] transition group-hover:bg-[#0b5d3b] group-hover:text-white"><Icon size={23} /></div><h3 className="text-xl font-semibold text-[#17372a]">{title}</h3><p className="mt-3 leading-7 text-[#65756d]">{text}</p><a href="#request" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0b5d3b]">Learn more <ArrowRight size={15} /></a></article>)}</div></section>

      <section id="process" className="bg-[#0b5d3b] px-5 py-20 text-white lg:px-8 lg:py-28"><div className="mx-auto max-w-[1240px]"><div className="max-w-xl"><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#d9c078]">How it works</p><h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Simple support. Clear communication.</h2></div><div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">{[['01','Contact us','Call, WhatsApp or submit an assistance request.'],['02','Tell us what you need','Share the person, location, hospital, date and time.'],['03','We confirm','We confirm scope, availability, fee and instructions.'],['04','We support them','A trusted assistant accompanies your loved one and keeps you informed.']].map(([num,title,text]) => <div key={num} className="border-t border-white/25 pt-5"><span className="text-sm font-bold text-[#d9c078]">{num}</span><h3 className="mt-8 text-xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-white/70">{text}</p></div>)}</div></div></section>

      <section id="families" className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 py-20 lg:grid-cols-[0.9fr_1fr] lg:px-8 lg:py-28"><div className="relative overflow-hidden rounded-[32px] border border-[#d9c078]/60 bg-[#dfeccc] p-2 shadow-[0_22px_55px_rgba(32,74,49,.12)]"><div className="pointer-events-none absolute inset-0 z-10 opacity-20 [background-image:radial-gradient(#a27b25_1px,transparent_1px)] [background-size:14px_14px]" /><img src="/oppam-care-family.png" alt="Elderly Malayali woman being supported on a traditional Kerala veranda" className="relative z-0 aspect-[0.9] w-full rounded-[26px] object-cover" /></div><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#a27b25]">For families abroad</p><h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#0b5d3b] sm:text-5xl">Be close to them, even when you&apos;re miles away.</h2><p className="mt-6 text-lg leading-8 text-[#65756d]">Your parents may be in Alappuzha while you are building your life somewhere else. When they need practical help, you can have a trusted local person there with them.</p><ul className="mt-7 grid gap-3 text-base font-medium text-[#3f5b4d] sm:grid-cols-2">{['Local presence in Alappuzha','Assistance during visits','Appropriate family updates','Clear service scope','Transparent communication'].map(item => <li key={item} className="flex items-center gap-3"><span className="flex size-6 items-center justify-center rounded-full bg-[#eef3ea] text-[#2f7d45]"><Check size={14} /></span>{item}</li>)}</ul><a href="#request" className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#0b5d3b] px-6 py-4 font-semibold text-white">Request assistance <ArrowRight size={18} /></a></div></section>

      <section className="border-y border-[#dce6dc] bg-white px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-[1080px]"><div className="text-center"><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#a27b25]">Trust & safety</p><h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#0b5d3b]">Care built on trust.</h2></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{['Verified service personnel','Clear service scope','Secure customer information','Consent & emergency procedures','Transparent pricing'].map(item => <div key={item} className="rounded-2xl bg-[#f8f6ef] p-5"><ShieldCheck className="text-[#2f7d45]" size={24} /><p className="mt-5 text-sm font-semibold leading-6">{item}</p></div>)}</div><div className="mt-8 rounded-2xl border border-[#d9c078] bg-[#fffaf0] px-5 py-4 text-center text-sm font-medium text-[#6b582d]">This is a personal assistance and companionship service, not a medical treatment service.</div></div></section>

      <section id="faq" className="mx-auto max-w-[900px] px-5 py-20 lg:py-28"><div className="text-center"><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#a27b25]">Questions, answered</p><h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#0b5d3b]">Feel clear before you reach out.</h2></div><div className="mt-10 divide-y divide-[#dce6dc] border-y border-[#dce6dc]">{faqs.map(([q,a], index) => <div key={q}><button className="flex w-full items-center justify-between gap-5 py-6 text-left text-lg font-semibold" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}>{q}<ChevronDown className={`shrink-0 transition ${openFaq === index ? 'rotate-180 text-[#a27b25]' : 'text-[#0b5d3b]'}`} /></button>{openFaq === index && <p className="-mt-2 max-w-2xl pb-6 pr-8 leading-7 text-[#65756d]">{a}</p>}</div>)}</div></section>

      <section id="request" className="bg-[#eef3ea] px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto grid max-w-[1100px] gap-10 lg:grid-cols-[0.75fr_1fr]"><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#a27b25]">Start a conversation</p><h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#0b5d3b] sm:text-5xl">Tell us how we can help.</h2><p className="mt-5 text-lg leading-8 text-[#65756d]">Share a few details and our team will get back to you. Your information is used only to coordinate your request.</p><div className="mt-8 flex flex-col gap-4 text-sm font-medium text-[#3f5b4d]"><a href="tel:+919074025279" className="flex items-center gap-3 transition hover:text-[#0b5d3b]"><Phone size={18} className="text-[#0b5d3b]" /> {phoneNumber}</a><a href={whatsappUrl} className="flex items-center gap-3 transition hover:text-[#0b5d3b]"><MessageCircle size={18} className="text-[#0b5d3b]" /> WhatsApp: {phoneNumber}</a><span className="flex items-center gap-3"><Clock3 size={18} className="text-[#0b5d3b]" /> Service availability confirmed before every booking</span></div></div><form className="rounded-3xl bg-white p-6 shadow-[0_18px_45px_rgba(32,74,49,.08)] sm:p-8" onSubmit={(event) => event.preventDefault()}><div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-semibold">Your name<input required className="mt-2 w-full rounded-xl border border-[#dce6dc] bg-[#fbfcf9] px-4 py-3.5 font-normal outline-none transition focus:border-[#2f7d45] focus:ring-2 focus:ring-[#a6c84a]/30" placeholder="Full name" /></label><label className="text-sm font-semibold">Phone / WhatsApp<input required type="tel" className="mt-2 w-full rounded-xl border border-[#dce6dc] bg-[#fbfcf9] px-4 py-3.5 font-normal outline-none transition focus:border-[#2f7d45] focus:ring-2 focus:ring-[#a6c84a]/30" placeholder="+91" /></label><label className="text-sm font-semibold">Parent&apos;s name<input className="mt-2 w-full rounded-xl border border-[#dce6dc] bg-[#fbfcf9] px-4 py-3.5 font-normal outline-none transition focus:border-[#2f7d45] focus:ring-2 focus:ring-[#a6c84a]/30" placeholder="Their name" /></label><label className="text-sm font-semibold">Assistance needed<select className="mt-2 w-full rounded-xl border border-[#dce6dc] bg-[#fbfcf9] px-4 py-3.5 font-normal outline-none focus:border-[#2f7d45]"><option>Hospital visit</option><option>Doctor appointment</option><option>Medical test</option><option>Admission support</option><option>Return home</option><option>Other</option></select></label></div><label className="mt-5 block text-sm font-semibold">A little more detail<textarea className="mt-2 min-h-28 w-full resize-y rounded-xl border border-[#dce6dc] bg-[#fbfcf9] px-4 py-3.5 font-normal outline-none focus:border-[#2f7d45]" placeholder="Location, preferred date, hospital or anything else we should know" /></label><button className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#0b5d3b] px-6 py-4 font-semibold text-white transition hover:bg-[#084c30]">Request assistance <ArrowRight size={18} /></button></form></div></section>

      <footer className="bg-[#17372a] px-5 py-12 text-white/70 lg:px-8"><div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-10 sm:flex-row"><div className="max-w-sm"><img src="/oppam-care-logo.png" alt="Oppam Care logo" className="mb-5 h-20 w-32 rounded-xl object-contain object-left" /><p className="leading-7">Personal assistance and companionship for elderly parents and loved ones in Alappuzha.</p></div><div className="grid gap-3 text-sm sm:grid-cols-2"><a href="#services" className="hover:text-white">Services</a><a href="#process" className="hover:text-white">How it works</a><a href="#families" className="hover:text-white">Families abroad</a><a href="#request" className="hover:text-white">Contact us</a></div></div><div className="mx-auto mt-10 flex max-w-[1240px] flex-col gap-2 border-t border-white/15 pt-6 text-xs sm:flex-row sm:justify-between"><span>© 2026 Oppam Care. All rights reserved.</span><span>Alappuzha, Kerala · Non-medical personal assistance</span></div></footer>
      <a href={whatsappUrl} aria-label="Chat on WhatsApp" className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25d366] px-4 py-3 font-semibold text-[#073b21] shadow-xl transition hover:-translate-y-1"><MessageCircle size={21} /> <span className="hidden sm:inline">Chat on WhatsApp</span></a>
    </main>
  )
}

