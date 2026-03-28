import { motion } from 'framer-motion';
import { Language, useTranslation } from '@/lib/data';
import { SITE_URL } from '@/lib/config';
import { SEO } from '@/components/SEO';
import { CheckCircle2, MapPin, Phone } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ScrollReveal, StaggerContainer, StaggerItem, TiltCard } from '@/components/ui/animated';

export default function About({ lang }: { lang: Language }) {
  const t = useTranslation(lang);
  const isHi = lang === 'hi';

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Pandit Ji",
    "jobTitle": isHi ? "उत्तर भारतीय पंडित" : "North Indian Brahmin Pandit",
    "description": isHi ? "15+ वर्षों के अनुभव के साथ वैदिक अनुष्ठान विशेषज्ञ" : "Expert in Vedic rituals with 15+ years of experience",
    "url": `${SITE_URL}/${lang}/about`,
    "telephone": "+919880123456",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    }
  };

  const credentials = isHi ? [
    "काशी विद्यापीठ, वाराणसी से वेद शास्त्री",
    "संस्कृत एवं ज्योतिष विशारद",
    "सभी 16 संस्कारों में प्रशिक्षित",
    "वास्तु शास्त्र एवं मुहूर्त विशेषज्ञ",
    "गृह्य सूत्रों के अनुसार अनुष्ठान"
  ] : [
    "Veda Shastri from Kashi Vidyapitha, Varanasi",
    "Expert in Sanskrit & Jyotish (Astrology)",
    "Trained in all 16 Samskaras",
    "Vastu Shastra & Muhurat Specialist",
    "Rituals as per original Grihya Sutras"
  ];

  const services_areas = ["Whitefield", "HSR Layout", "Marathahalli", "Electronic City", "JP Nagar", "Koramangala", "Indiranagar", "Jayanagar", "Bannerghatta", "Hebbal"];

  const philosophyCards = [
    {
      title: isHi ? 'वेद प्रमाण' : 'Vedic Authority',
      desc: isHi ? 'हर अनुष्ठान वेद और पुराणों के प्रमाण पर आधारित है।' : 'Every ritual is based on the authority of Vedas and Puranas.',
      icon: '📜'
    },
    {
      title: isHi ? 'शुद्ध मंत्रोच्चार' : 'Pure Mantra Chanting',
      desc: isHi ? 'मंत्रों का उच्चारण यजुर्वेद के अनुसार शुद्धता से किया जाता है।' : 'Mantras are chanted with purity as per the Yajurveda.',
      icon: '🕉️'
    },
    {
      title: isHi ? 'सही मुहूर्त' : 'Correct Muhurat',
      desc: isHi ? 'पंचांग और ज्योतिष के आधार पर शुभ मुहूर्त का चयन।' : 'Auspicious timing chosen based on Panchang and Jyotish.',
      icon: '⏰'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <SEO
        title={isHi ? "हमारे बारे में | PanditGhar.in - बेंगलुरु के विश्वसनीय पंडित" : "About Us | PanditGhar.in - Trusted Pandit in Bangalore"}
        description={isHi ? "15+ वर्षों के अनुभव के साथ बेंगलुरु में प्रामाणिक उत्तर भारतीय वैदिक अनुष्ठान करने वाले विद्वान पंडित जी के बारे में जानें।" : "Learn about our experienced North Indian Brahmin Pandit who has been conducting authentic Vedic rituals across Bangalore for 15+ years."}
        lang={lang}
        path={`/${lang}/about`}
        schema={schema}
      />

      {/* Hero */}
      <section className="bg-gradient-maroon text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`text-4xl md:text-5xl font-display font-bold mb-6 text-accent ${isHi ? 'font-hindi' : ''}`}
          >
            {isHi ? 'हमारे बारे में' : 'About PanditGhar.in'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`text-xl text-white/90 max-w-2xl mx-auto ${isHi ? 'font-hindi' : ''}`}
          >
            {isHi
              ? 'बेंगलुरु के प्रत्येक कोने में प्रामाणिक वैदिक सेवाएं प्रदान करने के लिए समर्पित'
              : 'Dedicated to providing authentic Vedic services in every corner of Bangalore'}
          </motion.p>
        </div>
      </section>

      {/* Main Content — Meet Pandit Ji */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <TiltCard className="aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden border-4 border-primary/30 shadow-xl">
              <img
                src={`${import.meta.env.BASE_URL}images/pandit-portrait.png`}
                alt="Pandit Ji"
                className="w-full h-full object-cover"
              />
            </TiltCard>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div>
              <h2 className={`text-3xl font-display font-bold text-secondary mb-6 ${isHi ? 'font-hindi' : ''}`}>
                {isHi ? 'पंडित जी का परिचय' : 'Meet Pandit Ji'}
              </h2>
              <p className={`text-muted-foreground leading-relaxed mb-6 ${isHi ? 'font-hindi' : ''}`}>
                {isHi
                  ? 'हमारे पंडित जी उत्तर भारत के एक विद्वान ब्राह्मण परिवार से हैं और 15 से अधिक वर्षों से बेंगलुरु में वैदिक अनुष्ठान कर रहे हैं। वे वेद, पुराण, और गृह्य सूत्रों के गहन अध्येता हैं।'
                  : 'Our Pandit Ji comes from a learned Brahmin family of North India and has been conducting Vedic rituals in Bangalore for over 15 years. He is a deep scholar of the Vedas, Puranas, and Grihya Sutras.'}
              </p>
              <p className={`text-muted-foreground leading-relaxed mb-8 ${isHi ? 'font-hindi' : ''}`}>
                {isHi
                  ? 'प्रमाण: जैसा कि मनुस्मृति (2.6) में कहा गया है — "वेदोऽखिलो धर्ममूलं" — सम्पूर्ण धर्म का मूल वेद है। हम इसी आधार पर सभी संस्कार करते हैं।'
                  : 'As stated in Manusmriti (2.6): "Vedokhilo dharma-mulam" — The Veda is the root of all dharma. We perform all Samskaras on this very foundation.'}
              </p>

              <StaggerContainer className="space-y-3 mb-8" staggerDelay={0.08}>
                {credentials.map((cred, i) => (
                  <StaggerItem key={i}>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className={`text-foreground ${isHi ? 'font-hindi' : ''}`}>{cred}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <Link href={`/${lang}/book`}>
                <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 py-6 text-lg font-semibold">
                  {isHi ? 'पूजा बुक करें' : 'Book a Pooja'}
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Shastreey Philosophy */}
      <section className="py-16 px-4 bg-background/50 border-y border-border">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className={`text-3xl font-display font-bold text-secondary mb-8 ${isHi ? 'font-hindi' : ''}`}>
              {isHi ? 'हमारी शास्त्रीय दृष्टि' : 'Our Shastreey Philosophy'}
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.1}>
            {philosophyCards.map((item, i) => (
              <StaggerItem key={i}>
                <TiltCard className="bg-card p-8 rounded-2xl border border-border shadow-sm text-center h-full">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className={`text-xl font-bold text-secondary mb-3 ${isHi ? 'font-hindi' : ''}`}>{item.title}</h3>
                  <p className={`text-muted-foreground ${isHi ? 'font-hindi' : ''}`}>{item.desc}</p>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className={`text-3xl font-display font-bold text-secondary mb-8 ${isHi ? 'font-hindi' : ''}`}>
            {isHi ? 'सेवा क्षेत्र — बेंगलुरु' : 'Service Areas — Bangalore'}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3">
            {services_areas.map((area, i) => (
              <motion.span
                key={area}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium border border-primary/20"
              >
                <MapPin className="w-4 h-4" /> {area}
              </motion.span>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919880123456">
              <Button variant="outline" className="rounded-full border-secondary text-secondary px-8 py-6 gap-2">
                <Phone className="w-4 h-4" /> +91 98801 23456
              </Button>
            </a>
            <a href="https://wa.me/919880123456" target="_blank" rel="noreferrer">
              <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6 text-lg">
                {isHi ? 'वाट्सएप करें' : 'WhatsApp Us'}
              </Button>
            </a>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
