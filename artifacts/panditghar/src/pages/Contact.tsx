import { motion } from 'framer-motion';
import { Language, useTranslation, WHATSAPP_NUMBER } from '@/lib/data';
import { SITE_URL } from '@/lib/config';
import { SEO } from '@/components/SEO';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal, StaggerContainer, StaggerItem, TiltCard } from '@/components/ui/animated';

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

  const contactItems = [
    {
      href: `tel:+91${WHATSAPP_NUMBER}`,
      icon: <Phone className="w-6 h-6 text-primary" />,
      iconBg: 'bg-primary/10 group-hover:bg-primary/20',
      label: isHi ? 'फोन करें' : 'Call Us',
      value: '+91 98801 23456',
      valueClass: 'text-xl font-bold text-secondary',
      borderHover: 'hover:border-primary/50',
    },
    {
      href: `https://wa.me/${WHATSAPP_NUMBER}`,
      target: '_blank',
      icon: <MessageCircle className="w-6 h-6 text-green-600" />,
      iconBg: 'bg-green-100 group-hover:bg-green-200',
      label: isHi ? 'वाट्सएप करें' : 'WhatsApp',
      value: '+91 98801 23456',
      valueClass: 'text-xl font-bold text-green-600',
      borderHover: 'hover:border-green-500/50',
    },
    {
      href: 'mailto:pandit@panditghar.in',
      icon: <Mail className="w-6 h-6 text-primary" />,
      iconBg: 'bg-primary/10 group-hover:bg-primary/20',
      label: isHi ? 'ईमेल करें' : 'Email Us',
      value: 'pandit@panditghar.in',
      valueClass: 'text-xl font-bold text-secondary',
      borderHover: 'hover:border-primary/50',
    },
  ];

  const infoItems = [
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      iconBg: 'bg-primary/10',
      label: isHi ? 'सेवा क्षेत्र' : 'Service Area',
      value: isHi ? 'संपूर्ण बेंगलुरु' : 'All of Bangalore',
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      iconBg: 'bg-primary/10',
      label: isHi ? 'उपलब्धता' : 'Availability',
      value: isHi ? 'प्रतिदिन सुबह 6 बजे से रात 9 बजे तक' : 'Daily 6 AM – 9 PM',
    },
  ];

  const quickServices = ['Griha Pravesh Pooja', 'Satyanarayan Katha', 'Vivah Sanskar', 'Rudrabhishek Pooja', 'Namkaran Sanskar', 'Mundan Sanskar'];

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
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`text-4xl md:text-5xl font-display font-bold mb-4 text-accent ${isHi ? 'font-hindi' : ''}`}
        >
          {isHi ? 'संपर्क करें' : 'Contact Us'}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`text-xl text-white/80 max-w-2xl mx-auto ${isHi ? 'font-hindi' : ''}`}
        >
          {isHi ? 'पूजा बुकिंग के लिए हमसे आज ही संपर्क करें' : 'Contact us today to book your pooja'}
        </motion.p>
      </section>

      <section className="py-16 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div>
            <ScrollReveal>
              <h2 className={`text-3xl font-display font-bold text-secondary mb-8 ${isHi ? 'font-hindi' : ''}`}>
                {isHi ? 'हमसे जुड़ें' : 'Get in Touch'}
              </h2>
            </ScrollReveal>

            <StaggerContainer className="space-y-6" staggerDelay={0.09}>
              {contactItems.map((item, i) => (
                <StaggerItem key={i}>
                  <TiltCard intensity={5}>
                    <a
                      href={item.href}
                      target={item.target}
                      rel={item.target ? 'noreferrer' : undefined}
                      className={`flex items-center gap-4 p-6 bg-card rounded-2xl border border-border ${item.borderHover} hover:shadow-md transition-all group`}
                    >
                      <div className={`w-12 h-12 ${item.iconBg} rounded-full flex items-center justify-center transition-colors`}>
                        {item.icon}
                      </div>
                      <div>
                        <p className={`text-sm text-muted-foreground ${isHi ? 'font-hindi' : ''}`}>{item.label}</p>
                        <p className={item.valueClass}>{item.value}</p>
                      </div>
                    </a>
                  </TiltCard>
                </StaggerItem>
              ))}

              {infoItems.map((item, i) => (
                <StaggerItem key={`info-${i}`}>
                  <div className="flex items-center gap-4 p-6 bg-card rounded-2xl border border-border">
                    <div className={`w-12 h-12 ${item.iconBg} rounded-full flex items-center justify-center`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className={`text-sm text-muted-foreground ${isHi ? 'font-hindi' : ''}`}>{item.label}</p>
                      <p className={`font-bold text-secondary ${isHi ? 'font-hindi' : ''}`}>{item.value}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* WhatsApp Quick Booking */}
          <ScrollReveal direction="right" delay={0.1}>
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
                <div className="space-y-3">
                  {quickServices.map((service, i) => (
                    <motion.a
                      key={service}
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello Pandit Ji, I want to book ${service} in Bangalore. Please let me know the availability.`}
                      target="_blank"
                      rel="noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="flex items-center justify-between p-4 rounded-xl border border-border hover:border-green-500/50 hover:bg-green-50 transition-all group"
                    >
                      <span className="font-medium text-foreground group-hover:text-green-700">{service}</span>
                      <span className="text-green-600 text-sm font-medium">Book via WhatsApp →</span>
                    </motion.a>
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
          </ScrollReveal>
        </div>
      </section>

      {/* Area Coverage */}
      <section className="py-12 px-4 bg-secondary/5 border-y border-border">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className={`text-2xl font-display font-bold text-secondary mb-6 ${isHi ? 'font-hindi' : ''}`}>
              {isHi ? 'बेंगलुरु के सभी क्षेत्रों में सेवा' : 'Serving All Areas of Bangalore'}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              {["Whitefield", "HSR Layout", "Marathahalli", "Electronic City", "JP Nagar", "Koramangala", "Indiranagar", "Jayanagar", "Bannerghatta", "Hebbal", "Yelahanka", "Sarjapur"].map((area, i) => (
                <motion.span
                  key={area}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium border border-primary/20 text-sm"
                >
                  {area}
                </motion.span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
