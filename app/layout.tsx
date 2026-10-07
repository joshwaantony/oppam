import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { InitialLoader } from '@/components/InitialLoader'
import { StructuredData } from '@/components/StructuredData'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://oppamcare.com'),
  title: {
    default: 'Oppam Care | Elder Care Assistance in Alappuzha, Kerala',
    template: '%s | Oppam Care Alappuzha',
  },
  description:
    'Trusted elder care assistance and companionship in Alappuzha, Kerala. Hospital visits, doctor appointments, medical tests, admission support, in-hospital companionship and return-home assistance for elderly parents and loved ones.',
  keywords: [
    'elder care in Alappuzha',
    'elderly care in Alappuzha',
    'elder care assistance Alappuzha',
    'elderly assistance Alappuzha',
    'senior care Alappuzha',
    'elderly companionship Alappuzha',
    'elder care services Alappuzha',
    'senior citizen assistance Alappuzha',
    'hospital assistance for elderly',
    'elderly hospital assistance',
    'doctor appointment assistance for elderly',
    'medical test assistance for elderly',
    'hospital companion Alappuzha',
    'elderly hospital companion',
    'admission assistance for elderly',
    'elderly return home assistance',
    'elderly care companion',
    'personal assistance for elderly',
    'elder care for parents in Kerala',
    'elder care for parents in Alappuzha',
    'elderly care for parents living abroad',
    'NRI parent care Kerala',
    'NRI elder care Alappuzha',
    'elderly assistance for parents in Kerala',
    'care for elderly parents in India',
  ],
  authors: [{ name: 'Oppam Care', url: 'https://oppamcare.com' }],
  creator: 'Oppam Care',
  publisher: 'Oppam Care',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://oppamcare.com/',
  },
  openGraph: {
    title: 'Oppam Care | Elder Care Assistance in Alappuzha, Kerala',
    description:
      'Trusted elder care assistance and companionship in Alappuzha, Kerala. Hospital visits, doctor appointments, medical tests, admission support, in-hospital companionship and return-home assistance.',
    url: 'https://oppamcare.com/',
    siteName: 'Oppam Care',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://oppamcare.com/oppam-care-family.png',
        width: 1200,
        height: 630,
        alt: 'Oppam Care elder care assistance and companionship in Alappuzha, Kerala',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oppam Care | Elder Care Assistance in Alappuzha, Kerala',
    description:
      'Trusted elder care assistance and companionship in Alappuzha, Kerala — when you cannot be there in person.',
    images: ['https://oppamcare.com/oppam-care-family.png'],
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/icon.png',
        type: 'image/png',
        sizes: '192x192',
      },
      {
        url: '/icon-light-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8F6EE' },
    { media: '(prefers-color-scheme: dark)', color: '#075C42' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <head>
        <StructuredData />
      </head>
      <body className={`${plusJakartaSans.className} antialiased bg-[#F8F6EE] text-[#123D32] selection:bg-[#8DBB4D]/30 selection:text-[#075C42]`}>
        <InitialLoader />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

