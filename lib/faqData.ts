export interface FAQItem {
  id: number
  question: string
  paragraphs?: string[]
  bullets?: string[]
  outro?: string
}

export const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'What is this service?',
    paragraphs: [
      'We provide personal assistance and companionship for elderly people in Alappuzha. We help when family members are unable to be physically present with their parents or loved ones.',
    ],
  },
  {
    id: 2,
    question: 'Who can use this service?',
    paragraphs: [
      'Our service is mainly for elderly parents and senior citizens whose family members may be living in another city, abroad, or are unable to accompany them personally.',
    ],
  },
  {
    id: 3,
    question: 'What kind of assistance do you provide?',
    paragraphs: ['We can assist with:'],
    bullets: [
      'Hospital visits',
      'Doctor appointments',
      'Medical tests',
      'Hospital admission support',
      'In-hospital companionship',
      'Medicine collection',
      'Discharge assistance',
      'Return-home assistance',
    ],
    outro: 'The exact service depends on the requirement and availability.',
  },
  {
    id: 4,
    question: 'Can you take my parent to the hospital?',
    paragraphs: [
      'Yes. Subject to availability, our team can accompany your parent to the hospital and assist with the agreed non-medical requirements.',
    ],
  },
  {
    id: 5,
    question: 'What if my parent gets admitted to the hospital?',
    paragraphs: [
      'If you select an in-hospital assistance service, our assigned person can stay with your parent during the agreed service period and assist with their non-medical needs.',
    ],
  },
  {
    id: 6,
    question: 'Will you stay until my parent is discharged?',
    paragraphs: [
      'Yes, when the selected service includes hospital stay assistance, we can stay through the agreed process until discharge and help your parent return home safely.',
    ],
  },
  {
    id: 7,
    question: 'Can children living abroad use this service?',
    paragraphs: [
      'Absolutely. Family members living abroad can contact us and arrange assistance for their parents or loved ones in Alappuzha.',
    ],
  },
  {
    id: 8,
    question: 'Will I receive updates while you are with my parent?',
    paragraphs: [
      'Yes. We can provide agreed updates to the family member during the service, subject to privacy and consent.',
    ],
  },
  {
    id: 9,
    question: 'Can I book the service for my neighbour or relative?',
    paragraphs: [
      'Yes. You can request assistance for a parent, relative, neighbour, or another elderly person with their consent.',
    ],
  },
  {
    id: 10,
    question: 'How can I book the service?',
    paragraphs: ['You can contact us through:'],
    bullets: ['Phone', 'WhatsApp', 'Website assistance request form'],
    outro:
      'Share the required details, and our team will discuss availability and the service requirement with you.',
  },
  {
    id: 11,
    question: 'How much does the service cost?',
    paragraphs: [
      'The price depends on the type and duration of assistance, location, travel requirements, hospital stay, and other service requirements.',
      'We will communicate the applicable charges before confirming the booking.',
    ],
  },
  {
    id: 12,
    question: 'Do you provide emergency medical services?',
    paragraphs: [
      'No. We are a personal assistance and companionship service, not an emergency medical service.',
      'For a medical emergency, please contact the hospital or appropriate emergency medical services immediately.',
    ],
  },
  {
    id: 13,
    question: 'Do you provide medical treatment?',
    paragraphs: [
      'No. We do not diagnose, prescribe, or provide medical treatment. Our role is to provide personal assistance, companionship, and coordination according to the agreed service.',
    ],
  },
  {
    id: 14,
    question: 'Can you stay overnight at the hospital?',
    paragraphs: [
      'Overnight assistance may be available depending on the location, hospital rules, staff availability, and service requirement. Please contact us in advance to confirm.',
    ],
  },
  {
    id: 15,
    question: 'Can you help my parent return home after discharge?',
    paragraphs: [
      'Yes. If return-home assistance is booked, we can accompany your parent after discharge and help them reach their home safely.',
    ],
  },
  {
    id: 16,
    question: 'Can I request assistance on the same day?',
    paragraphs: [
      'Same-day assistance may be possible depending on staff availability and location. We recommend contacting us as early as possible.',
    ],
  },
  {
    id: 17,
    question: 'Do you cover all areas of Alappuzha?',
    paragraphs: [
      'Our initial service area will be within selected locations in and around Alappuzha. Please contact us with the exact location to confirm availability.',
    ],
  },
  {
    id: 18,
    question: 'How do you protect my parent\'s information?',
    paragraphs: [
      'We treat personal information with care and use it only for providing and managing the requested service, subject to our Privacy Policy.',
    ],
  },
  {
    id: 19,
    question: 'Can I cancel a booking?',
    paragraphs: [
      'Cancellation terms depend on the service and booking conditions. The applicable cancellation policy will be communicated before confirmation.',
    ],
  },
  {
    id: 20,
    question: 'What if I have a special requirement?',
    paragraphs: [
      'Every family situation can be different. Contact us and explain your requirement. We will check whether we can provide the requested assistance.',
    ],
  },
]
