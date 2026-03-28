export type Language = 'hi' | 'en';

export const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      shubhMuhurat: "Shubh Muhurat",
      gallery: "Gallery",
      blog: "Blog",
      contact: "Contact",
      bookNow: "Book Now"
    },
    hero: {
      h1: "Authentic North Indian Pandit in Bangalore",
      subtitle: "Griha Pravesh, Satyanarayan Katha, Vivah & all Vedic rituals performed with scriptural accuracy.",
      ctaPrimary: "Book a Pandit",
      ctaSecondary: "WhatsApp Us",
      trusted: "Trusted by 5000+ families in Namma Bengaluru"
    },
    services: {
      title: "Our Sacred Services",
      subtitle: "Authentic Vedic rituals guided by the Shastras",
      viewDetails: "View Details",
      startingAt: "Starting at"
    },
    footer: {
      serviceAreas: "Service Areas in Bangalore",
      quickLinks: "Quick Links",
      contact: "Contact Us",
      copyright: "© 2026 PanditGhar.in. All rights reserved. Conducting authentic Vedic Poojas across Bangalore."
    },
    booking: {
      title: "Book a Pooja",
      subtitle: "Fill out the form below and we will contact you immediately.",
      name: "Full Name",
      phone: "Phone Number",
      location: "Location (Area in Bangalore)",
      service: "Select Service",
      date: "Preferred Date",
      message: "Additional Message (Optional)",
      submit: "Submit Booking",
      submitting: "Processing...",
      success: "Booking request received! Redirecting to WhatsApp..."
    }
  },
  hi: {
    nav: {
      home: "होम",
      services: "सेवाएं",
      about: "हमारे बारे में",
      shubhMuhurat: "शुभ मुहूर्त",
      gallery: "गैलरी",
      blog: "ब्लॉग",
      contact: "संपर्क करें",
      bookNow: "पंडित बुक करें"
    },
    hero: {
      h1: "बेंगलुरु में प्रामाणिक उत्तर भारतीय हिंदी पंडित",
      subtitle: "गृह प्रवेश, सत्यनारायण कथा, विवाह, एवं समस्त वैदिक अनुष्ठान विधि-विधान से।",
      ctaPrimary: "पंडित बुक करें",
      ctaSecondary: "वाट्सएप करें",
      trusted: "बेंगलुरु के 5000+ परिवारों का विश्वसनीय"
    },
    services: {
      title: "हमारी पवित्र सेवाएं",
      subtitle: "शास्त्रों द्वारा निर्देशित प्रामाणिक वैदिक अनुष्ठान",
      viewDetails: "विवरण देखें",
      startingAt: "शुरुआती मूल्य"
    },
    footer: {
      serviceAreas: "बेंगलुरु में सेवा क्षेत्र",
      quickLinks: "त्वरित लिंक",
      contact: "संपर्क करें",
      copyright: "© 2026 PanditGhar.in. सर्वाधिकार सुरक्षित। पूरे बेंगलुरु में प्रामाणिक वैदिक पूजा का आयोजन।"
    },
    booking: {
      title: "पूजा बुक करें",
      subtitle: "नीचे दिया गया फॉर्म भरें, हम आपसे तुरंत संपर्क करेंगे।",
      name: "पूरा नाम",
      phone: "फोन नंबर",
      location: "स्थान (बेंगलुरु में क्षेत्र)",
      service: "सेवा चुनें",
      date: "पसंदीदा तिथि",
      message: "अतिरिक्त संदेश (वैकल्पिक)",
      submit: "बुकिंग सबमिट करें",
      submitting: "प्रक्रिया हो रही है...",
      success: "बुकिंग अनुरोध प्राप्त हुआ! व्हाट्सएप पर रीडायरेक्ट कर रहे हैं..."
    }
  }
};

export function useTranslation(lang: Language) {
  return translations[lang];
}
