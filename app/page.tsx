import type { Metadata } from 'next'
import HomePage from '@/components/HomePage'

// The home page UI is a client component, so its route-specific metadata lives here.
// Each route sets its own canonical; the root layout intentionally does not.
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://oppamcare.com/',
  },
}

export default function Page() {
  return <HomePage />
}
