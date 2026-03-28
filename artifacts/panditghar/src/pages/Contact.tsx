import { motion } from 'framer-motion';
import { Language, useTranslation, WHATSAPP_NUMBER } from '@/lib/data';
import { SITE_URL } from '@/lib/config';
import { SEO } from '@/components/SEO';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact({ lang }: { lang: Language }) {
  const t = useTranslation(lang);
  const isHi = lang === 'hi';

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "PanditGhar.in Contact",
    "url": `${SITE_URL}/${lang}/contact`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+919880123456",
      "contactType": "customer service",
      "availableLanguage": ["Hindi", "English"]
    }
  };

  return (
    <div className="pt-24 pb-16">
      <SEO
        title={isHi ? "संपर्क करें | PanditGhar.in - बेंगलुरु पंडित" : "Contact Us | PanditGhar.in - Pandit in Bangalore"}
        description={isHi ? "PanditGhar.in से संपर्क करें — बेंगलुरु में पूजा बुक करें। फोन, वाट्सएप या ईमेल से संपर्क करें।" : "Contact PanditGhar.in — Book a pooja in Bangalore. Reach us via Phone, WhatsApp or Email."}
        lang={lang}
        path={`/${lang}/contact`}
        schema={schema}
      />

      <section className="bg-gradient-maroon text-white py-20 px-4 text-center">
        <h1 className={`text-4xl md:text-5xl font-display font-bold mb-4 text-accent ${isHi ? 'font-hindi' : ''}`}>
          {isHi ? 'संपर्क करें' : 'Contact Us'}
        </h1>
        <p className={`text-xl text-white/80 max-w-2xl mx-auto ${isHi ? 'font-hindi' : ''}`}>
          {isHi ? 'पूजा बुकिंग के लिए हमसे आज ही संपर्क करें' : 'Contact us today to book your pooja'}
        </p>
      </section>

      <section className="py-16 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className={`text-3xl font-display font-bold text-secondary mb-8 ${isHi ? 'font-hindi' : ''}`}>
              {isHi ? 'हमसे जुड़ें' : 'Get in Touch'}
            </h2>
            <div className="space-y-6">
              <motion.a
                href={`tel:+91${WHATSAPP_NUMBER}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4 p-6 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className={`text-sm text-muted-foreground ${isHi ? 'font-hindi' : ''}`}>{isHi ? 'फोन करें' : 'Call Us'}</p>
                  <p className="text-xl font-bold text-secondary">+91 98801 23456</p>
                </div>
              </motion.a>

              <motion.a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-4 p-6 bg-card rounded-2xl border border-border hover:border-green-500/50 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className={`text-sm text-muted-foreground ${isHi ? 'font-hindi' : ''}`}>{isHi ? 'वाट्सएप करें' : 'WhatsApp'}</p>
                  <p className="text-xl font-bold text-green-600">+91 98801 23456</p>
                </div>
              </motion.a>

              <motion.a
                href="mailto:pandit@panditghar.in"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4 p-6 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className={`text-sm text-muted-foreground ${isHi ? 'font-hindi' : ''}`}>{isHi ? 'ईमेल करें' : 'Email Us'}</p>
                  <p className="text-xl font-bold text-secondary">pandit@panditghar.in</p>
                </div>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4 p-6 bg-card rounded-2xl border border-border"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className={`text-sm text-muted-foreground ${isHi ? 'font-hindi' : ''}`}>{isHi ? 'सेवा क्षेत्र' : 'Service Area'}</p>
                  <p className="font-bold text-secondary">{isHi ? 'संपूर्ण बेंगलुरु' : 'All of Bangalore'}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-4 p-6 bg-card rounded-2xl border border-border"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className={`text-sm text-muted-foreground ${isHi ? 'font-hindi' : ''}`}>{isHi ? 'उपलब्धता' : 'Availability'}</p>
                  <p className="font-bold text-secondary">{isHi ? 'प्रतिदिन सुबह 6 बजे से रात 9 बजे तक' : 'Daily 6 AM – 9 PM'}</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* WhatsApp Quick Booking */}
          <div>
            <h2 className={`text-3xl font-display font-bold text-secondary mb-8 ${isHi ? 'font-hindi' : ''}`}>
              {isHi ? 'त्वरित बुकिंग' : 'Quick Booking'}
            </h2>
            <div className="bg-card rounded-2xl border border-border p-8">
              <p className={`text-muted-foreground mb-6 ${isHi ? 'font-hindi' : ''}`}>
                {isHi
                  ? 'नीचे दिए गए बटन पर क्लिक करके सीधे वाट्सएप पर संपर्क करें या हमें कॉल करें।'
                  : 'Click the button below to contact us directly on WhatsApp or call us.'}
              </p>
              <div className="space-y-4">
                {['Griha Pravesh Pooja', 'Satyanarayan Katha', 'Vivah Sanskar', 'Rudrabhishek Pooja', 'Namkaran Sanskar', 'Mundan Sanskar'].map(service => (
                  <a
                    key={service}
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello Pandit Ji, I want to book ${service} in Bangalore. Please let me know the availability.`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl border border-border hover:border-green-500/50 hover:bg-green-50 transition-all group"
                  >
                    <span className="font-medium text-foreground group-hover:text-green-700">{service}</span>
                    <span className="text-green-600 text-sm font-medium">Book via WhatsApp →</span>
                  </a>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-border">
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full py-6 text-lg font-semibold gap-2">
                    <MessageCircle className="w-5 h-5" />
                    {isHi ? 'वाट्सएप पर संपर्क करें' : 'Contact on WhatsApp'}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Area Coverage */}
      <section className="py-12 px-4 bg-secondary/5 border-y border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-2xl font-display font-bold text-secondary mb-6 ${isHi ? 'font-hindi' : ''}`}>
            {isHi ? 'बेंगलुरु के सभी क्षेत्रों में सेवा' : 'Serving All Areas of Bangalore'}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Whitefield", "HSR Layout", "Marathahalli", "Electronic City", "JP Nagar", "Koramangala", "Indiranagar", "Jayanagar", "Bannerghatta", "Hebbal", "Yelahanka", "Sarjapur"].map(area => (
              <span key={area} className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium border border-primary/20 text-sm">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
