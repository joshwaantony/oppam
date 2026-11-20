/**
 * Home Care Services — data layer.
 *
 * Plain, serialisable data (no React / icon imports) so it can later be
 * replaced by an API response with the same shape. UI components map the
 * `icon` key to an actual icon component.
 *
 * Service boundary (see project document §5 and §13):
 *  - `caregiver` services are non-medical and delivered by trained,
 *    identity-verified caregivers.
 *  - `nursing-professional` services involve clinical tasks and are only
 *    offered through appropriately qualified, registered nursing professionals.
 *    Do not change a service to `caregiver` if it involves a medical procedure.
 */

export type HomeCareCategoryId = 'patient-care' | 'child-care' | 'elderly-care' | 'home-nursing'

export type HomeCareServiceType = 'caregiver' | 'nursing-professional'

export type HomeCareServiceOption =
  | 'hourly'
  | 'day-shift'
  | 'night-shift'
  | 'full-day'
  | 'live-in'
  | 'per-visit'
  | 'short-term'
  | 'long-term'

export type HomeCareIconKey =
  | 'bed'
  | 'elderly'
  | 'hospital'
  | 'hygiene'
  | 'pill'
  | 'activity'
  | 'mobility'
  | 'stethoscope'
  | 'baby'
  | 'milk'
  | 'smile'
  | 'sun'
  | 'puzzle'
  | 'heart-hand'
  | 'armchair'
  | 'handshake'
  | 'footprints'
  | 'user-check'
  | 'nurse'
  | 'bandage'
  | 'clipboard'
  | 'heart-pulse'
  | 'calendar'

export interface HomeCarePricing {
  /** Display label, e.g. "From ₹X per shift". Leave undefined until pricing is finalised. */
  label: string
  unit?: 'hour' | 'shift' | 'day' | 'visit' | 'month'
  startingFrom?: number
  currency?: 'INR'
}

export interface HomeCareAvailability {
  /** Booking formats offered for this service. */
  options: HomeCareServiceOption[]
  /** Optional short note shown with the options. */
  note?: string
}

export interface HomeCareService {
  id: string
  slug: string
  title: string
  titleMl: string
  category: HomeCareCategoryId
  /** One-line summary used on cards. */
  summary: string
  /** Longer description used on the detail page. */
  description: string
  image?: { src: string; alt: string }
  icon: HomeCareIconKey
  /** What is included. */
  features: string[]
  benefits: string[]
  /** Who needs this service. */
  suitableFor: string[]
  serviceType: HomeCareServiceType
  availability: HomeCareAvailability
  pricing?: HomeCarePricing
}

export interface HomeCareCategory {
  id: HomeCareCategoryId
  letter: 'A' | 'B' | 'C' | 'D'
  title: string
  titleMl: string
  description: string
  descriptionMl: string
  icon: HomeCareIconKey
}

export const homeCareCategories: HomeCareCategory[] = [
  {
    id: 'patient-care',
    letter: 'A',
    title: 'Patient Care Services',
    titleMl: 'രോഗീ പരിചരണം',
    description: 'Day-to-day support at home for people who are unwell, bedridden or recovering.',
    descriptionMl: 'അസുഖബാധിതർക്കും കിടപ്പുരോഗികൾക്കും സുഖം പ്രാപിക്കുന്നവർക്കും വീട്ടിൽ ദൈനംദിന പിന്തുണ.',
    icon: 'bed',
  },
  {
    id: 'child-care',
    letter: 'B',
    title: 'Child Care Services',
    titleMl: 'ശിശു പരിചരണം',
    description: 'Gentle, attentive care for newborns, infants and young children at home.',
    descriptionMl: 'നവജാത ശിശുക്കൾക്കും കുഞ്ഞുങ്ങൾക്കും കുട്ടികൾക്കും വീട്ടിൽ ശ്രദ്ധയോടെയുള്ള പരിചരണം.',
    icon: 'baby',
  },
  {
    id: 'elderly-care',
    letter: 'C',
    title: 'Elderly Care Services',
    titleMl: 'വയോജന പരിചരണം',
    description: 'Respectful daily support and companionship for senior citizens at home.',
    descriptionMl: 'മുതിർന്ന പൗരന്മാർക്ക് വീട്ടിൽ ആദരവോടെയുള്ള ദൈനംദിന സഹായവും കൂട്ടും.',
    icon: 'elderly',
  },
  {
    id: 'home-nursing',
    letter: 'D',
    title: 'Home Nursing Services',
    titleMl: 'ഹോം നഴ്സിംഗ്',
    description: 'Clinical support at home, provided only by qualified nursing professionals.',
    descriptionMl: 'യോഗ്യതയുള്ള നഴ്സിംഗ് പ്രൊഫഷണലുകൾ മാത്രം നൽകുന്ന വീട്ടിലെ ക്ലിനിക്കൽ പിന്തുണ.',
    icon: 'nurse',
  },
]

const veranda = {
  src: '/oppam-care-family.png',
  alt: 'Oppam Care companion sitting with an elderly woman on a traditional Kerala veranda',
}

export const homeCareServices: HomeCareService[] = [
  /* ------------------------------------------------------------------
     A. Patient Care Services
     ------------------------------------------------------------------ */
  {
    id: 'hc-pc-01',
    slug: 'bedridden-patient-care',
    title: 'Bedridden Patient Care',
    titleMl: 'കിടപ്പുരോഗി പരിചരണം',
    category: 'patient-care',
    summary: 'Attentive daily care for loved ones who are confined to bed.',
    description:
      'A trained caregiver supports a bedridden family member with the everyday tasks that keep them clean, comfortable and safe — following the routine and instructions agreed with your family and their doctor.',
    icon: 'bed',
    features: [
      'Regular repositioning to support comfort',
      'Bed bath, oral care and changing of clothes and linen',
      'Help with feeding as per the agreed diet',
      'Toileting and diaper / pad changes',
      'Keeping the room clean, ventilated and tidy',
      'Updates to family on how the day went',
    ],
    benefits: [
      'Consistent, dignified everyday care',
      'Reduced physical strain on family members',
      'A familiar person who learns the routine',
    ],
    suitableFor: [
      'People confined to bed after illness, stroke or injury',
      'Families who need help with daily personal care',
      'Families living away who want someone reliable at home',
    ],
    serviceType: 'caregiver',
    availability: { options: ['day-shift', 'night-shift', 'full-day', 'live-in', 'long-term'] },
  },
  {
    id: 'hc-pc-02',
    slug: 'elderly-patient-care',
    title: 'Elderly Patient Care',
    titleMl: 'പ്രായമായ രോഗികളുടെ പരിചരണം',
    category: 'patient-care',
    summary: 'Daily support for elderly family members living with illness.',
    description:
      'Practical, patient-centred support at home for elderly people who are unwell or living with a long-term condition, so they can stay comfortable in familiar surroundings.',
    image: veranda,
    icon: 'elderly',
    features: [
      'Help with daily routine, meals and rest',
      'Personal hygiene and dressing assistance',
      'Medication reminders as per the prescription',
      'Accompaniment within the home and short walks',
      'Observation and reporting of any change to family',
    ],
    benefits: [
      'Your loved one stays at home, with support',
      'Routine and comfort are maintained',
      'Family is kept informed',
    ],
    suitableFor: [
      'Elderly people with chronic illness or reduced strength',
      'Seniors who need more help than family can provide daily',
    ],
    serviceType: 'caregiver',
    availability: { options: ['hourly', 'day-shift', 'night-shift', 'full-day', 'long-term'] },
  },
  {
    id: 'hc-pc-03',
    slug: 'post-hospitalization-care',
    title: 'Post-Hospitalization Care',
    titleMl: 'ആശുപത്രി വിട്ടതിനു ശേഷമുള്ള പരിചരണം',
    category: 'patient-care',
    summary: 'Support at home in the days and weeks after discharge.',
    description:
      'A caregiver helps your loved one settle back at home after a hospital stay and follow the discharge routine. Any clinical tasks in the discharge plan, such as wound dressing or injections, are handled through our Home Nursing services.',
    icon: 'hospital',
    features: [
      'Settling in at home after discharge',
      'Following the non-medical parts of the discharge routine',
      'Medication reminders as per the discharge summary',
      'Help with meals, hygiene and movement around the home',
      'Reminders and coordination for follow-up appointments',
    ],
    benefits: [
      'A smoother, calmer transition home',
      'Discharge instructions are followed consistently',
      'Early sharing of concerns with family',
    ],
    suitableFor: [
      'Patients recently discharged after illness or surgery',
      'Families who cannot be present during recovery',
    ],
    serviceType: 'caregiver',
    availability: { options: ['day-shift', 'full-day', 'live-in', 'short-term'] },
  },
  {
    id: 'hc-pc-04',
    slug: 'personal-hygiene-assistance',
    title: 'Personal Hygiene Assistance',
    titleMl: 'വ്യക്തിശുചിത്വ സഹായം',
    category: 'patient-care',
    summary: 'Respectful help with bathing, grooming and dressing.',
    description:
      'Gentle, discreet help with personal hygiene for people who find it difficult to manage on their own — always with privacy and dignity in mind.',
    icon: 'hygiene',
    features: [
      'Bathing or bed bath assistance',
      'Oral care, hair care and grooming',
      'Help with dressing and changing',
      'Toileting and continence care',
    ],
    benefits: ['Comfort and dignity', 'Safer bathing with support', 'Fresh, clean daily routine'],
    suitableFor: [
      'People with limited mobility or weakness',
      'Patients recovering from illness',
    ],
    serviceType: 'caregiver',
    availability: { options: ['per-visit', 'hourly', 'day-shift', 'long-term'] },
  },
  {
    id: 'hc-pc-05',
    slug: 'medication-reminders',
    title: 'Medication Reminders',
    titleMl: 'മരുന്ന് ഓർമ്മപ്പെടുത്തൽ',
    category: 'patient-care',
    summary: 'Timely reminders so prescribed medicines are not missed.',
    description:
      'A caregiver reminds your loved one to take their medicines at the right time, exactly as written on the prescription. Caregivers do not change doses, administer injections or give medical advice.',
    icon: 'pill',
    features: [
      'Reminders at prescribed times',
      'Keeping a simple daily medicine log for family',
      'Noticing when stock is running low and informing family',
    ],
    benefits: ['Fewer missed doses', 'Peace of mind for family', 'A clear record to share with the doctor'],
    suitableFor: [
      'People on multiple daily medicines',
      'Seniors who sometimes forget doses',
    ],
    serviceType: 'caregiver',
    availability: {
      options: ['hourly', 'day-shift', 'long-term'],
      note: 'Usually combined with another care service.',
    },
  },
  {
    id: 'hc-pc-06',
    slug: 'daily-health-monitoring',
    title: 'Daily Health Monitoring',
    titleMl: 'ദൈനംദിന ആരോഗ്യ നിരീക്ഷണം',
    category: 'patient-care',
    summary: 'Everyday observation of wellbeing, shared with family.',
    description:
      'A caregiver keeps an eye on general wellbeing — appetite, sleep, mood and comfort — and, where the family provides a home device, notes readings such as blood pressure or sugar for the family and doctor. Caregivers report observations; they do not interpret results or diagnose.',
    icon: 'activity',
    features: [
      'Daily notes on appetite, sleep, mood and activity',
      'Recording readings from family-provided home devices',
      'Prompt reporting of any change to family',
      'Guidance to contact a doctor or emergency services when needed',
    ],
    benefits: ['Early awareness of changes', 'Clear records to share with the doctor', 'Reassurance for family far away'],
    suitableFor: [
      'People living with long-term conditions',
      'Families who want regular updates',
    ],
    serviceType: 'caregiver',
    availability: { options: ['per-visit', 'day-shift', 'long-term'] },
  },
  {
    id: 'hc-pc-07',
    slug: 'mobility-assistance',
    title: 'Mobility Assistance',
    titleMl: 'ചലന സഹായം',
    category: 'patient-care',
    summary: 'Safe help moving around the home.',
    description:
      'Support with getting in and out of bed, moving between rooms and using walkers or wheelchairs safely, to reduce the risk of falls.',
    icon: 'mobility',
    features: [
      'Help with transfers — bed, chair, toilet',
      'Support with walkers and wheelchairs',
      'Accompanied movement within the home',
      'Following exercises advised by a physiotherapist, if any',
    ],
    benefits: ['Lower risk of falls', 'More independence', 'Confidence when moving'],
    suitableFor: [
      'People recovering from surgery or a fall',
      'Seniors with weakness or balance difficulties',
    ],
    serviceType: 'caregiver',
    availability: { options: ['hourly', 'day-shift', 'long-term'] },
  },
  {
    id: 'hc-pc-08',
    slug: 'general-nursing-assistance',
    title: 'General Nursing Assistance',
    titleMl: 'പൊതു നഴ്സിംഗ് സഹായം',
    category: 'patient-care',
    summary: 'Routine nursing tasks at home by a qualified nurse.',
    description:
      'Routine clinical tasks at home, carried out only by a qualified nursing professional and in line with the treating doctor’s written instructions.',
    icon: 'stethoscope',
    features: [
      'Routine nursing tasks as prescribed by the doctor',
      'Checking and recording vital signs',
      'Supporting the patient’s care plan at home',
      'Clear handover notes for family and doctor',
    ],
    benefits: ['Clinical tasks handled by a qualified professional', 'Care that follows the doctor’s plan', 'Fewer trips to the hospital'],
    suitableFor: [
      'Patients whose doctor has advised nursing care at home',
      'Families who need clinical support alongside daily care',
    ],
    serviceType: 'nursing-professional',
    availability: { options: ['per-visit', 'day-shift', 'short-term', 'long-term'] },
  },

  /* ------------------------------------------------------------------
     B. Child Care Services
     ------------------------------------------------------------------ */
  {
    id: 'hc-cc-01',
    slug: 'newborn-baby-care',
    title: 'Newborn Baby Care',
    titleMl: 'നവജാത ശിശു പരിചരണം',
    category: 'child-care',
    summary: 'Gentle, attentive care for your newborn in the early weeks.',
    description:
      'A trained caregiver helps with the day-to-day care of your newborn so parents can rest and recover. Any medical concern is always referred to your paediatrician.',
    icon: 'baby',
    features: [
      'Bathing, changing and dressing the baby',
      'Help with feeding routines and burping',
      'Keeping baby’s clothes, bottles and space clean',
      'Settling the baby to sleep',
    ],
    benefits: ['Rest and recovery time for parents', 'A calm, consistent routine', 'An extra pair of trusted hands'],
    suitableFor: ['Families with a newborn', 'First-time parents wanting hands-on support'],
    serviceType: 'caregiver',
    availability: { options: ['day-shift', 'night-shift', 'full-day', 'live-in', 'short-term'] },
  },
  {
    id: 'hc-cc-02',
    slug: 'infant-care',
    title: 'Infant Care',
    titleMl: 'ശിശു പരിചരണം',
    category: 'child-care',
    summary: 'Caring support for babies through their first year and beyond.',
    description:
      'Daily support for infants — feeding, play, naps and hygiene — following the routine you set for your child.',
    icon: 'milk',
    features: [
      'Feeding and meal preparation as per parents’ guidance',
      'Bathing, changing and hygiene',
      'Age-appropriate play and engagement',
      'Following nap and sleep routines',
    ],
    benefits: ['Your routine is respected', 'Attentive, gentle care', 'Peace of mind while you work'],
    suitableFor: ['Working parents', 'Families who need regular daytime help'],
    serviceType: 'caregiver',
    availability: { options: ['hourly', 'day-shift', 'full-day', 'long-term'] },
  },
  {
    id: 'hc-cc-03',
    slug: 'baby-sitting',
    title: 'Baby Sitting',
    titleMl: 'ബേബി സിറ്റിംഗ്',
    category: 'child-care',
    summary: 'Reliable short-term supervision when you need to step out.',
    description:
      'A trusted caregiver looks after your child at home for a few hours, keeping them safe, fed and engaged while you are away.',
    icon: 'smile',
    features: [
      'Supervision and safe play',
      'Snacks and meals as instructed',
      'Following bedtime routines',
      'Updates to parents during the visit',
    ],
    benefits: ['Flexible, short bookings', 'A safe, familiar setting for your child', 'Time for your own errands'],
    suitableFor: ['Parents with appointments or events', 'Occasional or evening help'],
    serviceType: 'caregiver',
    availability: { options: ['hourly', 'per-visit'] },
  },
  {
    id: 'hc-cc-04',
    slug: 'daily-child-care',
    title: 'Daily Child Care',
    titleMl: 'ദൈനംദിന ശിശു പരിചരണം',
    category: 'child-care',
    summary: 'Regular, scheduled care for your child on working days.',
    description:
      'A consistent caregiver who looks after your child on a regular schedule — meals, play, rest and school-day routines.',
    icon: 'sun',
    features: [
      'Daily routine and meal support',
      'Play, reading and learning activities',
      'Help getting ready for school and after-school care',
      'Daily summary for parents',
    ],
    benefits: ['Consistency for your child', 'A caregiver who knows your family', 'Dependable support on working days'],
    suitableFor: ['Working parents', 'Families without nearby relatives to help'],
    serviceType: 'caregiver',
    availability: { options: ['day-shift', 'full-day', 'long-term'] },
  },
  {
    id: 'hc-cc-05',
    slug: 'special-needs-child-care',
    title: 'Special Needs Child Care',
    titleMl: 'പ്രത്യേക പരിഗണന ആവശ്യമുള്ള കുട്ടികളുടെ പരിചരണം',
    category: 'child-care',
    summary: 'Patient, understanding daily care for children with special needs.',
    description:
      'Daily care and companionship for children with special needs, following the routines and guidance given by parents and the child’s therapists. This is a care service, not a therapy service.',
    icon: 'puzzle',
    features: [
      'Daily care tailored to the child’s routine',
      'Supporting activities recommended by the child’s therapists',
      'Help with feeding, hygiene and mobility',
      'Calm, patient engagement and supervision',
    ],
    benefits: ['Routine and familiarity for the child', 'Respite for parents', 'Care that follows professional guidance'],
    suitableFor: ['Families of children with developmental or physical needs'],
    serviceType: 'caregiver',
    availability: {
      options: ['hourly', 'day-shift', 'long-term'],
      note: 'We discuss your child’s needs first to match a suitable caregiver.',
    },
  },
  {
    id: 'hc-cc-06',
    slug: 'mother-and-baby-support',
    title: 'Mother and Baby Support',
    titleMl: 'അമ്മയ്ക്കും കുഞ്ഞിനും പിന്തുണ',
    category: 'child-care',
    summary: 'Practical help for new mothers and their babies after delivery.',
    description:
      'Practical, non-medical support for a new mother and her baby in the weeks after delivery, so she can rest and recover. Medical questions are always referred to her doctor.',
    icon: 'heart-hand',
    features: [
      'Help with baby care — bathing, changing, settling',
      'Support for the mother with meals, rest and hygiene',
      'Help with household tasks related to mother and baby',
      'A calm presence during the first weeks',
    ],
    benefits: ['More rest for the mother', 'Confidence in caring for the baby', 'Support when family is far away'],
    suitableFor: ['New mothers after delivery', 'Families without postnatal support nearby'],
    serviceType: 'caregiver',
    availability: { options: ['day-shift', 'full-day', 'live-in', 'short-term'] },
  },

  /* ------------------------------------------------------------------
     C. Elderly Care Services
     ------------------------------------------------------------------ */
  {
    id: 'hc-ec-01',
    slug: 'senior-citizen-care',
    title: 'Senior Citizen Care',
    titleMl: 'മുതിർന്ന പൗരന്മാരുടെ പരിചരണം',
    category: 'elderly-care',
    summary: 'Caring daily support for senior citizens at home.',
    description:
      'Respectful, everyday support for elderly parents and loved ones, so they can continue living safely and comfortably at home — especially when children live in another city or abroad.',
    image: veranda,
    icon: 'elderly',
    features: [
      'Help with daily routine and household tasks',
      'Meal support and hydration reminders',
      'Medication reminders',
      'Companionship and conversation',
      'Regular updates to family',
    ],
    benefits: ['Independence at home', 'Reassurance for family abroad', 'A familiar, trusted face'],
    suitableFor: ['Seniors living alone or with an elderly spouse', 'NRI families with parents in Alappuzha'],
    serviceType: 'caregiver',
    availability: { options: ['hourly', 'day-shift', 'full-day', 'live-in', 'long-term'] },
  },
  {
    id: 'hc-ec-02',
    slug: 'daily-living-assistance',
    title: 'Daily Living Assistance',
    titleMl: 'ദൈനംദിന ജീവിത സഹായം',
    category: 'elderly-care',
    summary: 'Help with everyday tasks that have become harder to manage.',
    description:
      'Support with the practical tasks of daily life — meals, light housekeeping, errands and keeping the home safe — so seniors can keep their independence.',
    icon: 'armchair',
    features: [
      'Simple meal preparation',
      'Light housekeeping and laundry',
      'Grocery and pharmacy errands',
      'Keeping the home tidy and free of trip hazards',
    ],
    benefits: ['Everyday tasks taken care of', 'A safer home environment', 'More energy for what they enjoy'],
    suitableFor: ['Seniors who manage most things but need a helping hand'],
    serviceType: 'caregiver',
    availability: { options: ['hourly', 'per-visit', 'day-shift', 'long-term'] },
  },
  {
    id: 'hc-ec-03',
    slug: 'companionship-and-emotional-support',
    title: 'Companionship and Emotional Support',
    titleMl: 'കൂട്ടും മാനസിക പിന്തുണയും',
    category: 'elderly-care',
    summary: 'Warm company and conversation for seniors who feel lonely.',
    description:
      'Regular, friendly company — conversation, reading, short walks and shared activities — to bring warmth and connection to everyday life. This is companionship, not counselling or therapy.',
    icon: 'handshake',
    features: [
      'Conversation and shared activities',
      'Reading newspapers or books aloud',
      'Short walks and outings when suitable',
      'Help staying in touch with family by phone or video',
    ],
    benefits: ['Less loneliness', 'Something to look forward to', 'Closer connection with family'],
    suitableFor: ['Seniors living alone', 'Parents whose children live far away'],
    serviceType: 'caregiver',
    availability: { options: ['hourly', 'per-visit', 'long-term'] },
  },
  {
    id: 'hc-ec-04',
    slug: 'mobility-and-walking-assistance',
    title: 'Mobility and Walking Assistance',
    titleMl: 'നടക്കാനും ചലിക്കാനുമുള്ള സഹായം',
    category: 'elderly-care',
    summary: 'Steady support for walking and moving around safely.',
    description:
      'A caregiver walks alongside your loved one at home and outdoors, helping them stay active while reducing the risk of falls.',
    icon: 'footprints',
    features: [
      'Assisted walking at home and outdoors',
      'Support with walking aids and wheelchairs',
      'Help with stairs and transfers',
      'Following exercises advised by a physiotherapist, if any',
    ],
    benefits: ['Stays active safely', 'Lower risk of falls', 'More confidence moving around'],
    suitableFor: ['Seniors with balance or strength difficulties', 'People recovering from a fall'],
    serviceType: 'caregiver',
    availability: { options: ['hourly', 'per-visit', 'long-term'] },
  },
  {
    id: 'hc-ec-05',
    slug: 'personal-care-assistance',
    title: 'Personal Care Assistance',
    titleMl: 'വ്യക്തിഗത പരിചരണ സഹായം',
    category: 'elderly-care',
    summary: 'Dignified help with bathing, dressing and grooming.',
    description:
      'Personal care for seniors delivered with patience and respect for privacy — bathing, dressing, grooming and toileting.',
    icon: 'user-check',
    features: [
      'Bathing and grooming',
      'Dressing and changing',
      'Toileting and continence care',
      'Skin and nail care (non-medical)',
    ],
    benefits: ['Comfort and dignity every day', 'Safer bathing', 'Less strain on family'],
    suitableFor: ['Seniors who need help with personal care'],
    serviceType: 'caregiver',
    availability: { options: ['per-visit', 'hourly', 'day-shift', 'long-term'] },
  },

  /* ------------------------------------------------------------------
     D. Home Nursing Services
     ------------------------------------------------------------------ */
  {
    id: 'hc-hn-01',
    slug: 'professional-nursing-assistance',
    title: 'Professional Nursing Assistance',
    titleMl: 'പ്രൊഫഷണൽ നഴ്സിംഗ് സഹായം',
    category: 'home-nursing',
    summary: 'Nursing care at home by a qualified nursing professional.',
    description:
      'Nursing care at home delivered only by a qualified, registered nursing professional, following the treating doctor’s written instructions.',
    icon: 'nurse',
    features: [
      'Nursing procedures as prescribed by the doctor',
      'Monitoring and recording of vital signs',
      'Supporting the patient’s care plan at home',
      'Clear notes for the family and doctor',
    ],
    benefits: ['Qualified clinical care at home', 'Care that follows the doctor’s plan', 'Fewer hospital trips'],
    suitableFor: ['Patients whose doctor has advised nursing care at home'],
    serviceType: 'nursing-professional',
    availability: { options: ['per-visit', 'day-shift', 'night-shift', 'short-term', 'long-term'] },
  },
  {
    id: 'hc-hn-02',
    slug: 'wound-dressing-assistance',
    title: 'Wound Dressing Assistance',
    titleMl: 'മുറിവ് ഡ്രസ്സിംഗ്',
    category: 'home-nursing',
    summary: 'Wound dressing at home by a qualified nurse.',
    description:
      'Wound dressing at home carried out only by a qualified nursing professional, as per the doctor’s instructions. Any sign of infection or concern is reported to the family and doctor.',
    icon: 'bandage',
    features: [
      'Wound dressing as prescribed by the doctor',
      'Observation of the wound for changes',
      'Hygienic handling and disposal of dressing material',
      'Notes for family and doctor',
    ],
    benefits: ['No travel for routine dressings', 'Hygienic, professional care', 'Early sharing of concerns'],
    suitableFor: ['Patients with surgical or other wounds needing regular dressing'],
    serviceType: 'nursing-professional',
    availability: { options: ['per-visit', 'short-term'] },
  },
  {
    id: 'hc-hn-03',
    slug: 'post-surgery-care',
    title: 'Post-Surgery Care',
    titleMl: 'ശസ്ത്രക്രിയയ്ക്കു ശേഷമുള്ള പരിചരണം',
    category: 'home-nursing',
    summary: 'Recovery care at home after surgery, led by a qualified nurse.',
    description:
      'Clinical recovery support at home after surgery, provided by a qualified nursing professional according to the surgeon’s discharge instructions. Can be combined with a caregiver for daily needs.',
    icon: 'clipboard',
    features: [
      'Post-operative care as per the discharge plan',
      'Vital signs monitoring and recording',
      'Wound care when prescribed',
      'Coordination of follow-up visits',
    ],
    benefits: ['Recover at home with professional support', 'Discharge plan followed closely', 'Reassurance for family'],
    suitableFor: ['Patients recently discharged after surgery'],
    serviceType: 'nursing-professional',
    availability: { options: ['per-visit', 'day-shift', 'full-day', 'short-term'] },
  },
  {
    id: 'hc-hn-04',
    slug: 'basic-health-monitoring',
    title: 'Basic Health Monitoring',
    titleMl: 'അടിസ്ഥാന ആരോഗ്യ പരിശോധന',
    category: 'home-nursing',
    summary: 'Regular vital signs checks at home by a qualified nurse.',
    description:
      'A qualified nursing professional checks and records vital signs such as blood pressure, pulse, temperature, oxygen level and blood sugar at home, and shares the records with family and doctor.',
    icon: 'heart-pulse',
    features: [
      'Blood pressure, pulse, temperature and oxygen checks',
      'Blood sugar checks when advised',
      'A record of readings for the doctor',
      'Prompt referral to a doctor when readings are of concern',
    ],
    benefits: ['Regular checks without travel', 'Accurate records for the doctor', 'Early awareness of changes'],
    suitableFor: ['People with long-term conditions such as diabetes or hypertension'],
    serviceType: 'nursing-professional',
    availability: { options: ['per-visit', 'long-term'] },
  },
  {
    id: 'hc-hn-05',
    slug: 'doctor-visit-coordination',
    title: 'Doctor Visit Coordination',
    titleMl: 'ഡോക്ടർ സന്ദർശന ഏകോപനം',
    category: 'home-nursing',
    summary: 'Organising doctor appointments and follow-ups for your loved one.',
    description:
      'We help arrange and keep track of doctor appointments and follow-ups — and can accompany your loved one to the visit. This is a coordination service; medical decisions remain with the doctor.',
    icon: 'calendar',
    features: [
      'Booking and reminding about appointments',
      'Accompanying to the clinic or hospital when requested',
      'Carrying reports and prescriptions to the visit',
      'Sharing the doctor’s instructions with family',
    ],
    benefits: ['No missed follow-ups', 'Organised medical records', 'Family stays informed'],
    suitableFor: ['Seniors with regular check-ups', 'Families who live away'],
    serviceType: 'caregiver',
    availability: { options: ['per-visit', 'long-term'] },
  },
]

/* ------------------------------------------------------------------
   Data access helpers — swap these for API calls later if needed.
   ------------------------------------------------------------------ */

export function getHomeCareServices(): HomeCareService[] {
  return homeCareServices
}

export function getHomeCareServiceBySlug(slug: string): HomeCareService | undefined {
  return homeCareServices.find((s) => s.slug === slug)
}

export function getHomeCareServicesByCategory(category: HomeCareCategoryId): HomeCareService[] {
  return homeCareServices.filter((s) => s.category === category)
}

export function getHomeCareCategory(id: HomeCareCategoryId): HomeCareCategory | undefined {
  return homeCareCategories.find((c) => c.id === id)
}
