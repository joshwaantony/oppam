'use client'

import React from 'react'
import { Navbar } from '@/components/Navbar'
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'
import { InstagramIcon } from '@/components/icons/InstagramIcon'
import { FacebookIcon } from '@/components/icons/FacebookIcon'
import { ShieldCheck, AlertCircle, FileText, Phone, ArrowLeft, CheckCircle2 } from 'lucide-react'

export default function TermsPage() {
  const lastUpdated = 'October 7, 2026'

  return (
    <main className="min-h-screen w-full bg-[#F8F9F3] text-[#123D32]">
      {/* Header / Navbar */}
      <Navbar />

      {/* Hero Banner */}
      <section className="relative overflow-hidden border-b border-[#DCE7D8] bg-[#EAF3E6] py-12 lg:py-16">
        <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#DCEBD5] blur-3xl opacity-70" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#075C42] transition hover:text-[#054631]"
          >
            <ArrowLeft size={16} /> Back to Home
          </a>
          <div className="mt-6 flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <span className="h-[1.5px] w-8 bg-[#C58A3E]" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#C58A3E]">
                Legal & Governance
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-[-0.03em] text-[#075C42] sm:text-4xl lg:text-5xl">
              Terms & Conditions
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-[#4A5A50] sm:text-lg">
              Please read these Terms & Conditions carefully before requesting our elder care assistance services in Alappuzha.
            </p>
            <p className="text-xs font-medium text-[#6B7C70]">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Summary Highlight Box */}
      <section className="mx-auto max-w-[1280px] px-4 py-8 sm:px-6 lg:px-10">
        <div className="rounded-3xl border border-[#C58A3E]/30 bg-[#FFFDF7] p-6 sm:p-8 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#C58A3E]/15 text-[#C58A3E]">
              <AlertCircle size={22} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#8B6112]">Important Disclaimer: Non-Medical Service</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#6E5016]">
                Oppam Care provides <strong>non-medical personal assistance, hospital accompaniment, and logistical companionship</strong> for elderly individuals in Alappuzha. Oppam Care is <strong>not a medical healthcare provider, ambulance service, or emergency hospital clinic</strong>. We do not provide clinical diagnosis, medical prescriptions, or emergency medical care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Terms Content Grid */}
      <section className="mx-auto max-w-[1280px] px-4 pb-20 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          
          {/* Main Legal Clauses */}
          <div className="flex flex-col gap-10 rounded-3xl border border-[#DCE7D8] bg-white p-7 sm:p-10 shadow-xs">
            
            {/* Section 1 */}
            <article id="overview">
              <h3 className="flex items-center gap-3 text-xl font-bold text-[#075C42] sm:text-2xl">
                <span className="flex size-8 items-center justify-center rounded-xl bg-[#EAF4E8] text-sm font-bold text-[#075C42]">1</span>
                Overview & Acceptance of Terms
              </h3>
              <p className="mt-4 leading-7 text-[#4A5A50]">
                By contacting Oppam Care (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) via phone, WhatsApp, or website form to request personal assistance services in Alappuzha, Kerala, you (&quot;Client&quot;, &quot;Family Member&quot;, &quot;User&quot;) agree to be bound by these Terms and Conditions.
              </p>
              <p className="mt-3 leading-7 text-[#4A5A50]">
                These terms govern all personal assistance, hospital accompaniment, doctor visit support, diagnostic test assistance, and return-home companionship arranged through Oppam Care.
              </p>
            </article>

            <hr className="border-[#E7EBD8]" />

            {/* Section 2 */}
            <article id="scope">
              <h3 className="flex items-center gap-3 text-xl font-bold text-[#075C42] sm:text-2xl">
                <span className="flex size-8 items-center justify-center rounded-xl bg-[#EAF4E8] text-sm font-bold text-[#075C42]">2</span>
                Scope of Personal Assistance Services
              </h3>
              <p className="mt-4 leading-7 text-[#4A5A50]">
                Oppam Care provides practical non-medical support designed to assist elderly individuals during healthcare visits and daily appointments in Alappuzha:
              </p>
              <ul className="mt-4 grid gap-3 text-sm font-semibold text-[#123D32]">
                {[
                  'Hospital visit accompaniment & outpatient guidance',
                  'Doctor consultation coordination and token queue management',
                  'Assistance at diagnostic laboratories & medical test centres',
                  'Hospital admission administrative support & waiting companionship',
                  'Safe accompaniment for return home after medical discharge',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 text-[#075C42] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 rounded-2xl bg-[#F8F6EE] p-5 ring-1 ring-[#DCE7D8]">
                <p className="text-xs leading-6 text-[#557366]">
                  <strong>Scope Limit:</strong> Oppam Care assistants provide emotional support, mobility guidance, language assistance, and coordination. They do not perform invasive nursing duties, administer intravenous medications, or make medical treatment decisions on behalf of doctors.
                </p>
              </div>
            </article>

            <hr className="border-[#E7EBD8]" />

            {/* Section 3 */}
            <article id="bookings">
              <h3 className="flex items-center gap-3 text-xl font-bold text-[#075C42] sm:text-2xl">
                <span className="flex size-8 items-center justify-center rounded-xl bg-[#EAF4E8] text-sm font-bold text-[#075C42]">3</span>
                Bookings, Fees & Cancellation
              </h3>
              <div className="mt-4 flex flex-col gap-4 text-[#4A5A50]">
                <p className="leading-7">
                  <strong>3.1 Service Confirmation:</strong> Assistance requests submitted online or via WhatsApp are subject to staff availability and geographic feasibility within Alappuzha district. A booking is considered confirmed only after direct confirmation from Oppam Care.
                </p>
                <p className="leading-7">
                  <strong>3.2 Service Fees:</strong> Applicable service charges will be explicitly communicated prior to booking confirmation. Service fees cover assistant time and logistical coordination only.
                </p>
                <p className="leading-7">
                  <strong>3.3 Excluded Costs:</strong> Clients remain directly responsible for all third-party expenses including hospital bills, doctor consultation fees, diagnostic test costs, medicines, and taxi/auto transportation fares.
                </p>
                <p className="leading-7">
                  <strong>3.4 Cancellation Policy:</strong> Cancellations made with reasonable advance notice prior to the scheduled assistant departure will incur no penalty. Detailed cancellation terms will be communicated upon booking confirmation.
                </p>
              </div>
            </article>

            <hr className="border-[#E7EBD8]" />

            {/* Section 4 */}
            <article id="emergency">
              <h3 className="flex items-center gap-3 text-xl font-bold text-[#075C42] sm:text-2xl">
                <span className="flex size-8 items-center justify-center rounded-xl bg-[#EAF4E8] text-sm font-bold text-[#075C42]">4</span>
                Emergency Protocol & Medical Decisions
              </h3>
              <p className="mt-4 leading-7 text-[#4A5A50]">
                Oppam Care personnel are trained in basic safety and respectful care, but are not medical emergency response personnel.
              </p>
              <div className="mt-4 flex flex-col gap-3 rounded-2xl bg-[#FFFDF7] p-5 border border-[#C58A3E]/30 text-sm leading-6 text-[#6E5016]">
                <p>
                  <strong>In Medical Emergencies:</strong> If a care recipient experiences a sudden acute medical deterioration during a service period, Oppam Care personnel will immediately contact official local emergency medical services (108 Ambulance / hospital emergency room) and inform the designated family contact.
                </p>
                <p>
                  <strong>Medical Consent:</strong> Medical consent for treatments, surgeries, or procedures remains exclusively with the care recipient or their legally designated family member/guardian.
                </p>
              </div>
            </article>

            <hr className="border-[#E7EBD8]" />

            {/* Section 5 */}
            <article id="client-responsibilities">
              <h3 className="flex items-center gap-3 text-xl font-bold text-[#075C42] sm:text-2xl">
                <span className="flex size-8 items-center justify-center rounded-xl bg-[#EAF4E8] text-sm font-bold text-[#075C42]">5</span>
                Client Responsibilities & Disclosures
              </h3>
              <p className="mt-4 leading-7 text-[#4A5A50]">
                To ensure a safe and smooth service experience, clients and family members agree to:
              </p>
              <ul className="mt-3 grid gap-2.5 text-sm text-[#4A5A50]">
                <li className="flex items-start gap-2">
                  <span className="text-[#075C42] font-bold">•</span>
                  Provide accurate information regarding the care recipient&apos;s mobility requirements, health condition, and communication needs.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#075C42] font-bold">•</span>
                  Provide active emergency contact telephone numbers for family members (local or abroad).
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#075C42] font-bold">•</span>
                  Ensure respectful conduct towards Oppam Care personnel at all times.
                </li>
              </ul>
            </article>

            <hr className="border-[#E7EBD8]" />

            {/* Section 6 */}
            <article id="privacy">
              <h3 className="flex items-center gap-3 text-xl font-bold text-[#075C42] sm:text-2xl">
                <span className="flex size-8 items-center justify-center rounded-xl bg-[#EAF4E8] text-sm font-bold text-[#075C42]">6</span>
                Privacy & Data Protection
              </h3>
              <p className="mt-4 leading-7 text-[#4A5A50]">
                Oppam Care respects your family&apos;s privacy. All personal details, phone numbers, addresses, and appointment updates shared with us are treated with strict confidentiality and used exclusively for coordinating care assistance in Alappuzha. We never sell or share client data with third-party advertisers.
              </p>
            </article>

            <hr className="border-[#E7EBD8]" />

            {/* Section 7 */}
            <article id="contact">
              <h3 className="flex items-center gap-3 text-xl font-bold text-[#075C42] sm:text-2xl">
                <span className="flex size-8 items-center justify-center rounded-xl bg-[#EAF4E8] text-sm font-bold text-[#075C42]">7</span>
                Contact & Inquiries
              </h3>
              <p className="mt-4 leading-7 text-[#4A5A50]">
                If you have questions regarding these Terms & Conditions or wish to discuss an assistance plan for your loved ones in Alappuzha, please reach out to us:
              </p>
              <div className="mt-5 flex flex-col gap-3 rounded-2xl bg-[#EAF3E6] p-6 font-semibold text-[#123D32]">
                <p className="flex items-center gap-3">
                  <ShieldCheck className="text-[#075C42]" size={20} />
                  Oppam Care · Alappuzha, Kerala
                </p>
                <a href="tel:+918301016493" className="flex items-center gap-3 text-[#075C42] hover:underline">
                  <Phone size={18} /> +91 83010 16493
                </a>
              </div>
            </article>

          </div>

          {/* Right Sticky Navigation Sidebar */}
          <aside className="h-fit sticky top-28 hidden lg:flex flex-col gap-6">
            <div className="rounded-3xl border border-[#DCE7D8] bg-white p-6 shadow-xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C58A3E]">Quick Navigation</h4>
              <nav className="mt-4 flex flex-col gap-2.5 text-sm font-semibold text-[#34594B]">
                <a href="#overview" className="transition hover:text-[#075C42]">1. Overview</a>
                <a href="#scope" className="transition hover:text-[#075C42]">2. Scope of Services</a>
                <a href="#bookings" className="transition hover:text-[#075C42]">3. Bookings & Fees</a>
                <a href="#emergency" className="transition hover:text-[#075C42]">4. Emergency Protocol</a>
                <a href="#client-responsibilities" className="transition hover:text-[#075C42]">5. Client Responsibilities</a>
                <a href="#privacy" className="transition hover:text-[#075C42]">6. Privacy & Data</a>
                <a href="#contact" className="transition hover:text-[#075C42]">7. Contact Us</a>
              </nav>
            </div>

            <div className="rounded-3xl bg-[#075C42] p-6 text-white shadow-md">
              <FileText size={28} className="text-[#DBC57A]" />
              <h4 className="mt-3 text-lg font-bold">Need Assistance?</h4>
              <p className="mt-2 text-xs leading-5 text-white/80">
                Have questions about our service scope or booking for your parents in Alappuzha?
              </p>
              <a
                href="/#request"
                className="mt-5 inline-block w-full rounded-full bg-white py-2.5 text-center text-xs font-bold text-[#075C42] transition hover:bg-[#EAF3E6]"
              >
                Request Assistance
              </a>
            </div>
          </aside>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0C3528] px-6 py-14 text-white/75 lg:px-10">
        <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-10 sm:flex-row">
          <div className="max-w-sm">
            <div className="mb-5 flex size-14 items-center justify-center rounded-xl bg-white p-1">
              <img src="/oppam-care-logo.png" alt="Oppam Care logo" className="h-full w-full object-contain" />
            </div>
            <p className="leading-7 text-white/80">
              Personal assistance and companionship for elderly parents and loved ones in Alappuzha.
            </p>
            {/* Social Media Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://wa.me/918301016493?text=Hello%2C%20I%20would%20like%20to%20request%20elder%20care%20assistance%20in%20Alappuzha."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on WhatsApp"
                className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white/90 transition hover:bg-[#25D366] hover:text-white hover:scale-105"
              >
                <WhatsAppIcon size={20} />
              </a>
              <a
                href="https://www.instagram.com/oppam.2026?stkn=MXczYmhucTc3ZWp6OQ=="
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
            <a href="/#services" className="hover:text-white">Services</a>
            <a href="/#process" className="hover:text-white">How it works</a>
            <a href="/#families" className="hover:text-white">Families abroad</a>
            <a href="/#faq" className="hover:text-white">FAQ</a>
            <a href="/terms" className="text-white font-bold underline">Terms & Conditions</a>
            <a href="/#request" className="hover:text-white">Contact us</a>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-[1280px] flex-col gap-2 border-t border-white/15 pt-6 text-xs sm:flex-row sm:justify-between text-white/60">
          <span>© 2026 Oppam Care. All rights reserved.</span>
          <div className="flex gap-4 items-center">
            <a href="/terms" className="underline hover:text-white">Terms & Conditions</a>
            <span>·</span>
            <span>Alappuzha, Kerala · Non-medical personal elder care assistance</span>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </main>
  )
}
