import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getHomeCareCategory, getHomeCareServiceBySlug, getHomeCareServices } from '@/lib/homeCareData'
import { HomeCareServiceDetail } from '@/components/home-care/HomeCareServiceDetail'

type Params = { slug: string }

export const dynamicParams = false

export function generateStaticParams(): Params[] {
  return getHomeCareServices().map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const service = getHomeCareServiceBySlug(slug)
  if (!service) return {}

  const url = `https://oppamcare.com/home-care/${service.slug}`
  const description = `${service.summary} ${service.description}`.slice(0, 300)
  return {
    title: `${service.title} at Home in Alappuzha`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${service.title} | Oppam Care Home Care`,
      description: service.summary,
      url,
      siteName: 'Oppam Care',
      locale: 'en_IN',
      type: 'website',
    },
  }
}

export default async function HomeCareServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const service = getHomeCareServiceBySlug(slug)
  if (!service) notFound()

  const category = getHomeCareCategory(service.category)
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    serviceType: category?.title,
    url: `https://oppamcare.com/home-care/${service.slug}`,
    areaServed: { '@type': 'City', name: 'Alappuzha' },
    provider: { '@type': 'LocalBusiness', name: 'Oppam Care', url: 'https://oppamcare.com' },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <HomeCareServiceDetail service={service} />
    </>
  )
}
