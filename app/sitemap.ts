import type { MetadataRoute } from 'next'
import { getHomeCareServices } from '@/lib/homeCareData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://oppamcare.com'
  const currentDate = new Date().toISOString()

  return [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/home-care`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...getHomeCareServices().map((service) => ({
      url: `${baseUrl}/home-care/${service.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}
