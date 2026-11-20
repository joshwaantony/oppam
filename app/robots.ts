import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // /_next/ is intentionally NOT disallowed: it serves the CSS/JS search engines need to render pages.
      disallow: ['/api/'],
    },
    sitemap: 'https://oppamcare.com/sitemap.xml',
  }
}
