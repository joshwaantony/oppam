import React from 'react'
import { faqData } from '@/lib/faqData'

export function StructuredData() {
  const baseUrl = 'https://oppamcare.com'

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'Oppam Care',
    url: baseUrl,
    logo: `${baseUrl}/oppam-care-logo.png`,
    image: `${baseUrl}/oppam-care-family.png`,
    description:
      'Non-medical personal elder care assistance and companionship services in Alappuzha, Kerala.',
    telephone: '+918301016493',
    email: 'oppamcare@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Pathirapally P O',
      addressLocality: 'Alappuzha',
      postalCode: '688521',
      addressRegion: 'Kerala',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://www.instagram.com/oppamcare',
      'https://www.facebook.com/share/1CCMqoyrcb/',
    ],
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/#localbusiness`,
    name: 'Oppam Care',
    url: baseUrl,
    image: `${baseUrl}/oppam-care-family.png`,
    telephone: '+918301016493',
    email: 'oppamcare@gmail.com',
    priceRange: '₹₹',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Alappuzha',
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'Kerala',
      },
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Pathirapally P O',
      addressLocality: 'Alappuzha',
      postalCode: '688521',
      addressRegion: 'Kerala',
      addressCountry: 'IN',
    },
    description:
      'Oppam Care provides non-medical personal elder care assistance, hospital accompaniment, doctor visit coordination, and companionship for senior citizens in Alappuzha, Kerala.',
  }

  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: 'Oppam Care',
    description:
      'Elder Care Assistance & Companionship in Alappuzha, Kerala',
    publisher: {
      '@id': `${baseUrl}/#organization`,
    },
  }

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${baseUrl}/#webpage`,
    url: `${baseUrl}/`,
    name: 'Oppam Care | Elder Care Assistance in Alappuzha, Kerala',
    description:
      'Trusted elder care assistance and companionship in Alappuzha, Kerala. Hospital visits, doctor appointments, medical tests, admission support, in-hospital companionship and return-home assistance.',
    isPartOf: {
      '@id': `${baseUrl}/#website`,
    },
    about: {
      '@id': `${baseUrl}/#localbusiness`,
    },
  }

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Service',
        name: 'Hospital Visit Assistance',
        description:
          'Accompaniment and practical non-medical support during hospital visits for elderly parents in Alappuzha.',
        provider: { '@id': `${baseUrl}/#localbusiness` },
        areaServed: 'Alappuzha',
      },
      {
        '@type': 'Service',
        name: 'Doctor Appointment Assistance',
        description:
          'Help with scheduled consultations and coordinating doctor visits for senior citizens in Alappuzha.',
        provider: { '@id': `${baseUrl}/#localbusiness` },
        areaServed: 'Alappuzha',
      },
      {
        '@type': 'Service',
        name: 'Medical Test Assistance',
        description:
          'Support at diagnostic centres and required medical test appointments for elderly individuals.',
        provider: { '@id': `${baseUrl}/#localbusiness` },
        areaServed: 'Alappuzha',
      },
      {
        '@type': 'Service',
        name: 'Admission Support',
        description:
          'Personal non-medical assistance throughout the hospital admission administrative process.',
        provider: { '@id': `${baseUrl}/#localbusiness` },
        areaServed: 'Alappuzha',
      },
      {
        '@type': 'Service',
        name: 'In-Hospital Companionship',
        description:
          'A trusted non-medical presence and companion during agreed hospital stay periods.',
        provider: { '@id': `${baseUrl}/#localbusiness` },
        areaServed: 'Alappuzha',
      },
      {
        '@type': 'Service',
        name: 'Return Home Assistance',
        description:
          'Accompaniment and support for a calm, safe return home after hospital discharge.',
        provider: { '@id': `${baseUrl}/#localbusiness` },
        areaServed: 'Alappuzha',
      },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => {
      let answerText = ''
      if (faq.paragraphs) {
        answerText += faq.paragraphs.join(' ')
      }
      if (faq.bullets) {
        answerText += ' ' + faq.bullets.join(', ')
      }
      if (faq.outro) {
        answerText += ' ' + faq.outro
      }

      return {
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: answerText.trim(),
        },
      }
    }),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}

export default StructuredData
