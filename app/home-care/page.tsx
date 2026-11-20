import type { Metadata } from 'next'
import { HomeCareListing } from '@/components/home-care/HomeCareListing'

export const metadata: Metadata = {
  title: 'Home Care Services in Alappuzha',
  description:
    'Home care services in Alappuzha, Kerala: patient care, child care, elderly care and home nursing. Trained caregivers for daily support and qualified nursing professionals for clinical needs.',
  alternates: { canonical: 'https://oppamcare.com/home-care' },
  openGraph: {
    title: 'Home Care Services in Alappuzha | Oppam Care',
    description:
      'Patient care, child care, elderly care and home nursing at home in Alappuzha, Kerala.',
    url: 'https://oppamcare.com/home-care',
    siteName: 'Oppam Care',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: 'https://oppamcare.com/oppam-care-family.png', width: 1200, height: 630 }],
  },
}

export default function HomeCarePage() {
  return <HomeCareListing />
}
