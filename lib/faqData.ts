export interface FAQItem {
  id: number
  question: string
  questionMl?: string
  paragraphs?: string[]
  paragraphsMl?: string[]
  bullets?: string[]
  bulletsMl?: string[]
  outro?: string
  outroMl?: string
}

export const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'What is this service?',
    questionMl: 'എന്താണ് ഈ സേവനം?',
    paragraphs: [
      'We provide personal assistance and companionship for elderly people in Alappuzha. We help when family members are unable to be physically present with their parents or loved ones.',
    ],
    paragraphsMl: [
      'ആലപ്പുഴയിലെ മുതിർന്ന പൗരന്മാർക്കും മാതാപിതാക്കൾക്കും വ്യക്തിഗത സഹായവും കൂട്ടാളി സേവനവുമാണ് ഞങ്ങൾ നൽകുന്നത്. കുടുംബാംഗങ്ങൾക്ക് നേരിട്ട് ഒപ്പമുണ്ടാകാൻ സാധിക്കാത്ത ഘട്ടങ്ങളിൽ ഞങ്ങൾ വിശ്വസ്ത തുണയാകുന്നു.',
    ],
  },
  {
    id: 2,
    question: 'Who can use this service?',
    questionMl: 'ആർക്കൊക്കെ ഈ സേവനം ഉപയോഗിക്കാം?',
    paragraphs: [
      'Our service is mainly for elderly parents and senior citizens whose family members may be living in another city, abroad, or are unable to accompany them personally.',
    ],
    paragraphsMl: [
      'മക്കൾ മറ്റ് നഗരങ്ങളിലോ വിദേശത്തോ ജോലി ചെയ്യുന്ന, അല്ലെങ്കിൽ സ്വന്തമായി ആശുപത്രി കാര്യങ്ങൾക്ക് പോകാൻ പ്രയാസപ്പെടുന്ന പ്രായമായ മാതാപിതാക്കൾക്കും മുതിർന്ന പൗരന്മാർക്കും വേണ്ടിയാണ് ഈ സേവനം.',
    ],
  },
  {
    id: 3,
    question: 'What kind of assistance do you provide?',
    questionMl: 'ഏതൊക്കെ തരത്തിലുള്ള സഹായങ്ങളാണ് നിങ്ങൾ നൽകുന്നത്?',
    paragraphs: ['We can assist with:'],
    paragraphsMl: ['ഞങ്ങൾ ഇനിപ്പറയുന്ന കാര്യങ്ങളിൽ സഹായിക്കുന്നു:'],
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
    bulletsMl: [
      'ആശുപത്രി സന്ദർശനം (Hospital visits)',
      'ഡോക്ടർ അപ്പോയിന്റ്മെന്റുകൾ',
      'മെഡിക്കൽ / ലാബ് പരിശോധനകൾ',
      'അഡ്മിഷൻ നടപടികൾ',
      'ആശുപത്രിയിൽ കൂട്ടിരിക്കൽ (Companionship)',
      'മരുന്ന് വാങ്ങി നൽകൽ',
      'ഡിസ്ചാർജ് നടപടികളിൽ സഹായം',
      'സുരക്ഷിതമായി വീട്ടിലെത്തിക്കൽ',
    ],
    outro: 'The exact service depends on the requirement and availability.',
    outroMl: 'ലഭ്യതയും കൃത്യമായ ആവശ്യങ്ങളും അനുസരിച്ചാണ് സേവനങ്ങൾ തീരുമാനിക്കുന്നത്.',
  },
  {
    id: 4,
    question: 'Can you take my parent to the hospital?',
    questionMl: 'എന്റെ മാതാപിതാക്കളെ ആശുപത്രിയിലേക്ക് കൂട്ടിക്കൊണ്ടുപോകാൻ നിങ്ങൾക്ക് കഴിയുമോ?',
    paragraphs: [
      'Yes. Subject to availability, our team can accompany your parent to the hospital and assist with the agreed non-medical requirements.',
    ],
    paragraphsMl: [
      'അതെ. ലഭ്യതയനുസരിച്ച്, ഞങ്ങളുടെ ടീം നിങ്ങളുടെ മാതാപിതാക്കളോടൊപ്പം ആശുപത്രിയിലേക്ക് പോവുകയും അംഗീകരിച്ച ചികിത്സേതര ആവശ്യങ്ങളിൽ സഹായിക്കുകയും ചെയ്യുന്നു.',
    ],
  },
  {
    id: 5,
    question: 'What if my parent gets admitted to the hospital?',
    questionMl: 'മാതാപിതാക്കളെ ആശുപത്രിയിൽ അഡ്മിറ്റ് ചെയ്യേണ്ടി വന്നാൽ എന്ത് ചെയ്യും?',
    paragraphs: [
      'If you select an in-hospital assistance service, our assigned person can stay with your parent during the agreed service period and assist with their non-medical needs.',
    ],
    paragraphsMl: [
      'നിങ്ങൾ ഇൻ-ഹോസ്പിറ്റൽ സഹായം തിരഞ്ഞെടുക്കുകയാണെങ്കിൽ, തീരുമാനിച്ച സേവന സമയത്ത് ഞങ്ങളുടെ പ്രതിനിധി മാതാപിതാക്കൾക്കൊപ്പം ഉണ്ടാവുകയും ചികിത്സേതര ആവശ്യങ്ങളിൽ സഹായിക്കുകയും ചെയ്യും.',
    ],
  },
  {
    id: 6,
    question: 'Will you stay until my parent is discharged?',
    questionMl: 'ഡിസ്ചാർജ് ആകുന്നത് വരെ കൂടെ നിൽക്കുമോ?',
    paragraphs: [
      'Yes, when the selected service includes hospital stay assistance, we can stay through the agreed process until discharge and help your parent return home safely.',
    ],
    paragraphsMl: [
      'അതെ, തിരഞ്ഞെടുത്ത സേവനത്തിൽ ആശുപത്രി വാസ സഹായം ഉൾപ്പെട്ടിട്ടുണ്ടെങ്കിൽ, ഡിസ്ചാർജ് നടപടികൾ പൂർത്തിയാകുന്നതുവരെ കൂടെ നിൽക്കുകയും സുരക്ഷിതമായി വീട്ടിലെത്താൻ സഹായിക്കുകയും ചെയ്യുന്നു.',
    ],
  },
  {
    id: 7,
    question: 'Can children living abroad use this service?',
    questionMl: 'വിദേശത്ത് താമസിക്കുന്ന മക്കൾക്ക് ഈ സേവനം ഉപയോഗിക്കാൻ കഴിയുമോ?',
    paragraphs: [
      'Absolutely. Family members living abroad can contact us and arrange assistance for their parents or loved ones in Alappuzha.',
    ],
    paragraphsMl: [
      'തീർച്ചയായും. വിദേശത്തുള്ള കുടുംബാംഗങ്ങൾക്ക് ഞങ്ങളുമായി ബന്ധപ്പെട്ട് ആലപ്പുഴയിലുള്ള അവരുടെ മാതാപിതാക്കൾക്കോ പ്രിയപ്പെട്ടവർക്കോ വേണ്ടി ഈ സേവനം ക്രമീകരിക്കാവുന്നതാണ്.',
    ],
  },
  {
    id: 8,
    question: 'Will I receive updates while you are with my parent?',
    questionMl: 'നിങ്ങൾ മാതാപിതാക്കൾക്കൊപ്പമായിരിക്കുമ്പോൾ എനിക്ക് വിവരങ്ങൾ അറിയാൻ സാധിക്കുമോ?',
    paragraphs: [
      'Yes. We can provide agreed updates to the family member during the service, subject to privacy and consent.',
    ],
    paragraphsMl: [
      'അതെ. സേവന സമയത്ത് കുടുംബാംഗങ്ങളുമായി സ്വകാര്യതയ്ക്കും സമ്മതത്തിനും വിധേയമായി കൃത്യമായ വിവരങ്ങൾ യഥാസമയം പങ്കുവെക്കും.',
    ],
  },
  {
    id: 9,
    question: 'Can I book the service for my neighbour or relative?',
    questionMl: 'അയൽവാസിക്കോ ബന്ധുവിനോ വേണ്ടി എനിക്ക് ബുക്ക് ചെയ്യാൻ സാധിക്കുമോ?',
    paragraphs: [
      'Yes. You can request assistance for a parent, relative, neighbour, or another elderly person with their consent.',
    ],
    paragraphsMl: [
      'അതെ. അവരുടെ സമ്മതത്തോടെ മാതാപിതാക്കൾക്കോ, ബന്ധുക്കൾക്കോ, അയൽവാസിക്കോ വേണ്ടി നിങ്ങൾക്ക് ഈ സഹായം അഭ്യർത്ഥിക്കാം.',
    ],
  },
  {
    id: 10,
    question: 'How can I book the service?',
    questionMl: 'ഈ സേവനം എങ്ങനെ ബുക്ക് ചെയ്യാം?',
    paragraphs: ['You can contact us through:'],
    paragraphsMl: ['നിങ്ങൾക്ക് ഞങ്ങളെ ബന്ധപ്പെടാം:'],
    bullets: ['Phone', 'WhatsApp', 'Website assistance request form'],
    bulletsMl: ['ഫോൺ കോൾ', 'വാട്സ്ആപ്പ്', 'വെബ്‌സൈറ്റിലെ സഹായ ഫോം'],
    outro:
      'Share the required details, and our team will discuss availability and the service requirement with you.',
    outroMl:
      'ആവശ്യമായ വിവരങ്ങൾ പങ്കുവെച്ചാൽ ലഭ്യത പരിശോധിച്ച് ഞങ്ങളുടെ ടീം സേവന വിശദാംശങ്ങൾ സ്ഥിരീകരിക്കും.',
  },
  {
    id: 11,
    question: 'How much does the service cost?',
    questionMl: 'സേവനത്തിന് എത്ര രൂപ ചെലവാകും?',
    paragraphs: [
      'The price depends on the type and duration of assistance, location, travel requirements, hospital stay, and other service requirements.',
      'We will communicate the applicable charges before confirming the booking.',
    ],
    paragraphsMl: [
      'സഹായത്തിന്റെ സ്വഭാവം, സമയം, സ്ഥലം, യാത്ര, ആശുപത്രി വാസം എന്നിവയെ ആശ്രയിച്ചാണ് നിരക്ക് നിശ്ചയിക്കുന്നത്.',
      'ബുക്കിംഗ് സ്ഥിരീകരിക്കുന്നതിന് മുൻപായി കൃത്യമായ നിരക്കുകൾ സുതാര്യമായി അറിയിക്കുന്നതാണ്.',
    ],
  },
  {
    id: 12,
    question: 'Do you provide emergency medical services?',
    questionMl: 'നിങ്ങൾ അടിയന്തര മെഡിക്കൽ സേവനങ്ങൾ (Emergency Services) നൽകുന്നുണ്ടോ?',
    paragraphs: [
      'No. We are a personal assistance and companionship service, not an emergency medical service.',
      'For a medical emergency, please contact the hospital or appropriate emergency medical services immediately.',
    ],
    paragraphsMl: [
      'ഇല്ല. ഇതൊരു വ്യക്തിഗത സഹായവും കൂട്ടാളി സേവനവുമാണ്, അടിയന്തര മെഡിക്കൽ സേവനമല്ല.',
      'മെഡിക്കൽ എമർജൻസി ഉണ്ടായാൽ ദയവായി ഉടൻ തന്നെ ആശുപത്രിയുമായോ ആംബുലൻസുമായോ അടിയന്തര സേവനങ്ങളുമായോ ബന്ധപ്പെടുക.',
    ],
  },
  {
    id: 13,
    question: 'Do you provide medical treatment?',
    questionMl: 'നിങ്ങൾ മെഡിക്കൽ ചികിത്സ നൽകുന്നുണ്ടോ?',
    paragraphs: [
      'No. We do not diagnose, prescribe, or provide medical treatment. Our role is to provide personal assistance, companionship, and coordination according to the agreed service.',
    ],
    paragraphsMl: [
      'ഇല്ല. ഞങ്ങൾ രോഗനിർണ്ണയം നടത്തുകയോ ചികിത്സിക്കുകയോ മരുന്ന് നിർദ്ദേശിക്കുകയോ ചെയ്യുന്നില്ല. ഞങ്ങളുടെ ചുമതല വ്യക്തിഗത സഹായവും കൂട്ടാളി സാന്നിധ്യവും ഏകോപനവും ഉറപ്പുവരുത്തുക മാത്രമാണ്.',
    ],
  },
  {
    id: 14,
    question: 'Can you stay overnight at the hospital?',
    questionMl: 'ആശുപത്രിയിൽ രാത്രി മുഴുവൻ കൂട്ടിരിക്കാൻ സാധിക്കുമോ?',
    paragraphs: [
      'Overnight assistance may be available depending on the location, hospital rules, staff availability, and service requirement. Please contact us in advance to confirm.',
    ],
    paragraphsMl: [
      'സ്ഥലം, ആശുപത്രി ചട്ടങ്ങൾ, ജീവനക്കാരുടെ ലഭ്യത എന്നിവ അനുസരിച്ച് രാത്രികാല സഹായം ലഭ്യമായേക്കാം. ഇത് മുൻകൂട്ടി ബന്ധപ്പെട്ട് ഉറപ്പുവരുത്തേണ്ടതാണ്.',
    ],
  },
  {
    id: 15,
    question: 'Can you help my parent return home after discharge?',
    questionMl: 'ഡിസ്ചാർജിന് ശേഷം മാതാപിതാക്കളെ സുരക്ഷിതമായി വീട്ടിലെത്തിക്കാൻ സഹായിക്കുമോ?',
    paragraphs: [
      'Yes. If return-home assistance is booked, we can accompany your parent after discharge and help them reach their home safely.',
    ],
    paragraphsMl: [
      'അതെ. റിട്ടേൺ-ഹോം അസിസ്റ്റൻസ് ബുക്ക് ചെയ്തിട്ടുണ്ടെങ്കിൽ, ഡിസ്ചാർജിന് ശേഷം മാതാപിതാക്കൾ സുരക്ഷിതമായി വീട്ടിലെത്തുന്നത് വരെ ഞങ്ങൾ ഒപ്പമുണ്ടാകും.',
    ],
  },
  {
    id: 16,
    question: 'Can I request assistance on the same day?',
    questionMl: 'അതേ ദിവസം തന്നെ (Same-day) സഹായം അഭ്യർത്ഥിക്കാൻ സാധിക്കുമോ?',
    paragraphs: [
      'Same-day assistance may be possible depending on staff availability and location. We recommend contacting us as early as possible.',
    ],
    paragraphsMl: [
      'സ്റ്റാഫിന്റെ ലഭ്യതയും സ്ഥലവും അനുസരിച്ച് സാധിച്ചേക്കാം. എന്നാൽ മുൻകൂട്ടി അറിയിക്കുന്നതാണ് എപ്പോഴും അഭികാമ്യം.',
    ],
  },
  {
    id: 17,
    question: 'Do you cover all areas of Alappuzha?',
    questionMl: 'ആലപ്പുഴയിലെ എല്ലാ പ്രദേശങ്ങളിലും സേവനം ലഭ്യമാണോ?',
    paragraphs: [
      'Our initial service area will be within selected locations in and around Alappuzha. Please contact us with the exact location to confirm availability.',
    ],
    paragraphsMl: [
      'ഞങ്ങളുടെ സേവനം ആലപ്പുഴ ടൗണിലും പരിസര പ്രദേശങ്ങളിലുമാണ് പ്രധാനമായും നൽകുന്നത്. കൃത്യമായ സ്ഥലം അറിയിച്ചാൽ ലഭ്യത സ്ഥിരീകരിക്കാം.',
    ],
  },
  {
    id: 18,
    question: "How do you protect my parent's information?",
    questionMl: 'മാതാപിതാക്കളുടെ വ്യക്തിഗത വിവരങ്ങൾ എങ്ങനെ സംരക്ഷിക്കുന്നു?',
    paragraphs: [
      'We treat personal information with care and use it only for providing and managing the requested service, subject to our Privacy Policy.',
    ],
    paragraphsMl: [
      'ഞങ്ങൾ വ്യക്തിഗത വിവരങ്ങൾ അതീവ ശ്രദ്ധയോടെ കൈകാര്യം ചെയ്യുകയും സേവന ആവശ്യങ്ങൾക്ക് മാത്രമായി ഉപയോഗിക്കുകയും ചെയ്യുന്നു.',
    ],
  },
  {
    id: 19,
    question: 'Can I cancel a booking?',
    questionMl: 'ബുക്കിംഗ് റദ്ദാക്കാൻ (Cancel) സാധിക്കുമോ?',
    paragraphs: [
      'Cancellation terms depend on the service and booking conditions. The applicable cancellation policy will be communicated before confirmation.',
    ],
    paragraphsMl: [
      'സേവന വ്യവസ്ഥകൾക്കനുസൃതമായി റദ്ദാക്കാവുന്നതാണ്. റദ്ദാക്കൽ നയങ്ങൾ ബുക്കിംഗ് സ്ഥിരീകരിക്കുന്ന സമയത്ത് വ്യക്തമാക്കുന്നതാണ്.',
    ],
  },
  {
    id: 20,
    question: 'What if I have a special requirement?',
    questionMl: 'എനിക്ക് പ്രത്യേകമായ എന്തെങ്കിലും ആവശ്യമോ നിർദ്ദേശമോ ഉണ്ടെങ്കിലോ?',
    paragraphs: [
      'Every family situation can be different. Contact us and explain your requirement. We will check whether we can provide the requested assistance.',
    ],
    paragraphsMl: [
      'ഓരോ കുടുംബത്തിന്റെയും ആവശ്യങ്ങൾ വ്യത്യസ്തമായിരിക്കും. നിങ്ങളുടെ ആവശ്യം ഞങ്ങളോട് വിശദീകരിക്കാം; അത് നൽകാൻ സാധിക്കുമോ എന്ന് ഞങ്ങൾ പരിശോധിച്ച് അറിയിക്കും.',
    ],
  },
  {
    id: 21,
    question: 'What are your operating and booking hours?',
    questionMl: 'നിങ്ങളുടെ പ്രവർത്തന സമയങ്ങൾ ഏതെല്ലാമാണ്?',
    paragraphs: [
      'Our telephone and WhatsApp booking support is active every day from 8:00 AM to 8:00 PM IST.',
      'Field care assistance (such as hospital visits, doctor appointments, and tests) is carried out as per your pre-scheduled booking. Early morning assistance and overnight in-hospital stay companions are available upon prior arrangement.',
    ],
    paragraphsMl: [
      'ഞങ്ങളുടെ ഫോൺ, വാട്സ്ആപ്പ് ബുക്കിംഗ് സപ്പോർട്ട് എല്ലാ ദിവസവും രാവിലെ 8:00 മണി മുതൽ രാത്രി 8:00 മണി വരെ സജീവമായി പ്രവർത്തിക്കുന്നു.',
      'നേരിട്ടുള്ള പരിചരണ സഹായം (ആശുപത്രി സന്ദർശനം, ഡോക്ടർ കൺസൾട്ടേഷൻ, ടെസ്റ്റുകൾ) മുൻകൂട്ടി തീരുമാനിച്ച സമയക്രമമനുസരിച്ചാണ് നൽകുന്നത്. അതിരാവിലെയുള്ള സന്ദർശനങ്ങൾക്കും രാത്രികാല ആശുപത്രി കൂട്ടിരിക്കലിനും മുൻകൂട്ടി ബുക്ക് ചെയ്യാവുന്നതാണ്.',
    ],
  },
]

