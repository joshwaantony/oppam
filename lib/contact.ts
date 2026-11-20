export const CONTACT_PHONE_DISPLAY = '+91 83010 16493'
export const CONTACT_PHONE_TEL = '+918301016493'
export const CONTACT_WHATSAPP_NUMBER = '918301016493'
export const CONTACT_EMAIL = 'oppamcare@gmail.com'

export function whatsappLink(message: string) {
  return `https://wa.me/${CONTACT_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

/** Opens WhatsApp in a new tab, falling back to same-tab navigation if popups are blocked. */
export function openWhatsApp(message: string) {
  const targetUrl = whatsappLink(message)
  const opened = window.open(targetUrl, '_blank')
  if (!opened || opened.closed || typeof opened.closed === 'undefined') {
    window.location.href = targetUrl
  }
}
