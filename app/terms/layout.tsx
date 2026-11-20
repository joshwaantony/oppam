import type { Metadata } from 'next'

// The Terms page UI is a client component, so its metadata is defined in this route layout.
export const metadata: Metadata = {
  title: { absolute: 'Terms and Conditions | Oppam Care' },
  description:
    "Read Oppam Care's terms and conditions to understand our home care assistance services, service policies, and responsibilities.",
  alternates: {
    canonical: 'https://oppamcare.com/terms',
  },
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children
}
