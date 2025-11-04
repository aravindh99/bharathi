/**
 * Language Management Utility
 * Handles bilingual content (English/Tamil) switching
 */

// Language context storage
let currentLanguage = localStorage.getItem('language') || 'en';

// Language change listeners
const listeners = new Set();

/**
 * Get current language
 */
export const getLanguage = () => currentLanguage;

/**
 * Set language and notify listeners
 */
export const setLanguage = (lang) => {
  if (lang === 'en' || lang === 'ta') {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    listeners.forEach(listener => listener(lang));
  }
};

/**
 * Subscribe to language changes
 */
export const subscribeToLanguage = (callback) => {
  listeners.add(callback);
  return () => listeners.delete(callback);
};

/**
 * Get bilingual content
 * @param {Object} content - Object with 'en' and 'ta' keys
 * @returns {string} Content in current language
 */
export const getContent = (content) => {
  if (!content || typeof content !== 'object') return '';
  return content[currentLanguage] || content.en || content.ta || '';
};

/**
 * Bilingual content helper
 */
export const bilingual = (en, ta) => ({
  en,
  ta,
});

// Navigation content
export const navContent = {
  home: bilingual('Home', 'முகப்பு'),
  services: bilingual('Services', 'சேவைகள்'),
  gallery: bilingual('Gallery', 'கேல்லரி'),
  contact: bilingual('Contact', 'தொடர்பு'),
};

// Common UI text
export const uiContent = {
  call: bilingual('Call Now', 'இப்போது அழைக்கவும்'),
  whatsapp: bilingual('WhatsApp', 'வாட்ஸ்அப்'),
  learnMore: bilingual('Learn More', 'மேலும் அறிய'),
  viewAll: bilingual('View All', 'அனைத்தையும் பார்க்க'),
  close: bilingual('Close', 'மூட'),
  next: bilingual('Next', 'அடுத்தது'),
  previous: bilingual('Previous', 'முந்தைய'),
  loading: bilingual('Loading...', 'ஏற்றுகிறது...'),
  error: bilingual('Error', 'பிழை'),
  success: bilingual('Success', 'வெற்றி'),
};

