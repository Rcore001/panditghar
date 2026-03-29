import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Language, useTranslation, services, WHATSAPP_NUMBER } from '@/lib/data';
import { SITE_URL } from '@/lib/config';
import { DecorativeDivider, OmIcon } from '@/components/ui/decorative';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Star, MessageCircle } from 'lucide-react';
import { BookingForm } from '@/components/BookingForm';
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  TiltCard,
  FloatingSymbol,
  FloatingOrb,
  AnimatedCounter,
  GlowPulse,
} from '@/components/ui/animated';
import { ServiceCardImage } from '@/components/ServiceCardImage';

const sanghPackages = [
  {
    count: 11,
    icon: '🔥',
    enName: 'Laghu Anushthaan',
    hiName: 'लघु अनुष्ठान',
    enType: 'Ekadash Rudri, small group yagnas',
    hiType: 'एकादश रुद्री, लघु समूह यज्ञ',
  },
  {
    count: 21,
    icon: '⚡',
    enName: 'Madhyam Anushthaan',
    hiName: 'मध्यम अनुष्ठान',
    enType: 'Navchandi, group havans',
    hiType: 'नवचण्डी, समूह हवन',
  },
  {
    count: 51,
    icon: '🌟',
    enName: 'Brihat Yagna',
    hiName: 'बृहत् यज्ञ',
    enType: 'Satchandi, community yagnas',
    hiType: 'सतचण्डी, सामुदायिक यज्ञ',
  },
  {
    count: 108,
    icon: '🔱',
    enName: 'Maha Anushthaan',
    hiName: 'महा अनुष्ठान',
    enType: 'Sahastra Abhishek, Sahastra Chandi',
    hiType: 'सहस्र अभिषेक, सहस्र चण्डी',
  },
  {
    count: 1008,
    icon: '🕉️',
    enName: 'Mahayagna',
    hiName: 'महायज्ञ',
    enType: 'Laksha Chandi — supreme grand yagna',
    hiType: 'लक्षचण्डी — परम महायज्ञ',
  },
];

export default function Home({ lang }: { lang: Language }) {
  const t = useTranslation(lang);
  const isHi = lang === 'hi';

  const homePaaEn = [
    { q: "How much does a Griha Pravesh Puja cost in Bangalore?", a: "Griha Pravesh Puja starts at ₹5,100 with PanditGhar.in in Bangalore, including pandit dakshina and complete Vedic rituals as per Skanda Purana. Travel and samagri are charged separately." },
    { q: "Which pandit service is best for Satyanarayan Katha in Bangalore?", a: "PanditGhar.in specialises in authentic North Indian Satyanarayan Katha as per Skanda Purana Reva Khanda. Pandits travel to all Bangalore areas starting from ₹3,100." },
    { q: "How do I book a pandit for Vivah in Bangalore?", a: "WhatsApp +91 93295 66101 or fill the booking form at panditghar.in. For Vivah, book at least 2-3 months in advance. All North Indian wedding rituals including Saptapadi and Kanyadaan are performed as per Grihya Sutras." },
    { q: "Do North Indian pandits come to HSR Layout, Koramangala, Whitefield?", a: "Yes, PanditGhar.in covers all Bangalore areas — Whitefield, HSR Layout, Koramangala, Indiranagar, Marathahalli, Electronic City, JP Nagar, and 30+ more neighbourhoods." },
    { q: "What is the difference between Griha Pravesh and Vastu Shanti Puja?", a: "Griha Pravesh is the ceremony of entering a new home for the first time. Vastu Shanti Puja can be performed anytime to correct Vastu defects in an existing home or office without structural changes." },
  ];

  const homePaaHi = [
    { q: "बेंगलुरु में गृह प्रवेश पूजा की कीमत कितनी है?", a: "PanditGhar.in के साथ बेंगलुरु में गृह प्रवेश पूजा ₹5,100 से शुरू होती है जिसमें पंडित दक्षिणा और स्कन्द पुराण के अनुसार पूर्ण वैदिक विधि शामिल है।" },
    { q: "बेंगलुरु में सत्यनारायण कथा के लिए कौन सी पंडित सेवा सबसे अच्छी है?", a: "PanditGhar.in स्कन्द पुराण के रेवा खण्ड के अनुसार प्रामाणिक सत्यनारायण कथा में विशेषज्ञता रखता है। पंडित जी बेंगलुरु के सभी क्षेत्रों में आते हैं, ₹3,100 से शुरू।" },
    { q: "बेंगलुरु में विवाह के लिए पंडित कैसे बुक करें?", a: "+91 93295 66101 पर व्हाट्सएप करें या panditghar.in पर बुकिंग फॉर्म भरें। विवाह के लिए कम से कम 2-3 महीने पहले बुकिंग करें।" },
    { q: "क्या उत्तर भारतीय पंडित HSR लेआउट, कोरमंगला, व्हाइटफील्ड आते हैं?", a: "हाँ, PanditGhar.in बेंगलुरु के सभी क्षेत्रों को कवर करता है — व्हाइटफील्ड, HSR लेआउट, कोरमंगला, इंदिरानगर, मराठहल्ली, इलेक्ट्रॉनिक सिटी, JP नगर और 30+ और।" },
    { q: "गृह प्रवेश और वास्तु शांति पूजा में क्या अंतर है?", a: "गृह प्रवेश नए घर में पहली बार प्रवेश का समारोह है। वास्तु शांति पूजा किसी भी समय मौजूदा घर या कार्यालय के वास्तु दोषों को बिना संरचनात्मक बदलाव के ठीक करने के लिए की जा सकती है।" },
  ];

  const paaItems = isHi ? homePaaHi : homePaaEn;

  const paaSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": paaItems.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a }
    }))
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "PanditGhar.in",
    "image": `${SITE_URL}/images/pandit-portrait.png`,
    "description": t.hero.subtitle,
    "url": `${SITE_URL}/${lang}`,
    "telephone": `+91${WHATSAPP_NUMBER}`,
    "@id": `${SITE_URL}/#localbusiness`,
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, UPI, Bank Transfer",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9716,
      "longitude": 77.5946
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "06:00",
        "closes": "22:00"
      }
    ],
    "areaServed": [
      "Whitefield","HSR Layout","Koramangala","Indiranagar","Marathahalli",
      "Electronic City","JP Nagar","Yelahanka","Hebbal","Sarjapur Road",
      "BTM Layout","Bannerghatta Road","Rajajinagar","Malleshwaram",
      "KR Puram","Hennur","Banashankari","Vijayanagar","Ulsoor","Jayanagar"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "5000",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <div className="pt-20">
      <SEO
        title={isHi
          ? "बेंगलुरु में उत्तर भारतीय पंडित — पूजा बुकिंग, मूल्य व सामग्री | PanditGhar.in"
          : "North Indian Pandit in Bangalore — Puja Booking, Price & Samagri | PanditGhar.in"}
        description={isHi
          ? "बेंगलुरु में प्रामाणिक उत्तर भारतीय पंडित बुक करें। गृह प्रवेश, विवाह, सत्यनारायण कथा, नामकरण, मुंडन व अधिक। पूरी बेंगलुरु में सेवा। ₹2,100 से शुरू।"
          : "Book authentic North Indian Pandit in Bangalore for Griha Pravesh, Vivah, Satyanarayan Katha, Namkaran, Mundan & more. All Bangalore covered. Starting ₹2,100."}
        lang={lang}
        path={`/${lang}`}
        schema={[schema, paaSchema]}
      />

      {/* ─── Hero Section ─── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background — CSS radial gradient, no external image needed */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full"
            style={{
              background:
                'radial-gradient(ellipse 80% 90% at 70% 50%, #7a1c1c 0%, #5a1010 40%, #3d0a0a 100%)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/75 to-transparent" />
        </div>

        {/* Floating decorative symbols */}
        <FloatingSymbol symbol="ॐ" size={64} x="62%" y="8%" duration={9} delay={0} opacity={0.07} />
        <FloatingSymbol symbol="ॐ" size={36} x="80%" y="55%" duration={11} delay={2} opacity={0.05} />
        <FloatingSymbol symbol="ॐ" size={48} x="55%" y="70%" duration={7} delay={1} opacity={0.06} />
        <FloatingOrb size={120} color="rgba(255,153,0,0.10)" x="60%" y="10%" duration={8} delay={0.5} />
        <FloatingOrb size={80} color="rgba(255,204,0,0.08)" x="75%" y="50%" duration={10} delay={2} />

        {/* GlowPulse behind CTA */}
        <GlowPulse className="w-64 h-64 bg-accent/10 left-[-60px] top-[40%]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-12 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 8 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ perspective: 800 }}
            className="max-w-2xl text-white"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <OmIcon className="w-4 h-4 text-accent" />
              <span className={`text-sm font-medium tracking-wide ${isHi ? 'font-hindi' : ''}`}>
                {isHi ? 'शास्त्रों द्वारा प्रमाणित' : 'Shastreey Certified'}
              </span>
            </motion.div>

            <h1 className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-4 sm:mb-6 text-gradient-gold ${isHi ? 'font-hindi' : ''}`}>
              {t.hero.h1}
            </h1>

            <motion.p
              className={`text-base sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-10 leading-relaxed ${isHi ? 'font-hindi' : ''}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link href={`/${lang}/book`}>
                  <Button className="w-full sm:w-auto bg-gradient-saffron hover:shadow-glow-saffron text-white rounded-full px-8 py-7 text-lg font-semibold border-none transition-all">
                    {t.hero.ctaPrimary}
                  </Button>
                </Link>
              </motion.div>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
                <Button variant="outline" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30 rounded-full px-8 py-7 text-lg font-semibold backdrop-blur-sm transition-all">
                  {t.hero.ctaSecondary}
                </Button>
              </a>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 text-sm text-white/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <div className="flex -space-x-2">
                {['🙏', '⭐', '🕉️', '🪔'].map((emoji, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-white/30 flex items-center justify-center text-base shadow-md"
                    style={{ background: 'linear-gradient(135deg,#c75b1a,#e8a020)' }}
                  >
                    {emoji}
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-accent text-accent" />)}
                </div>
                <p className={isHi ? 'font-hindi' : ''}>{t.hero.trusted}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Trust Badges ─── */}
      <ScrollReveal delay={0.05}>
        <div className="bg-accent text-secondary py-4 shadow-md relative z-20 -mt-8 mx-4 sm:mx-8 rounded-2xl md:mx-auto md:max-w-5xl border border-accent-foreground/10">
          <div className="flex flex-wrap justify-around items-center gap-4 px-6 font-medium text-sm sm:text-base">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> 20+ Years Exp.</div>
            <div className="hidden md:block w-px h-6 bg-secondary/20" />
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> 500+ Expert Pandits</div>
            <div className="hidden md:block w-px h-6 bg-secondary/20" />
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> Samagri Included</div>
            <div className="hidden lg:block w-px h-6 bg-secondary/20" />
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> All Bangalore Covered</div>
          </div>
        </div>
      </ScrollReveal>

      <DecorativeDivider />

      {/* ─── Stats Row ─── */}
      <ScrollReveal>
        <section className="py-10 px-4 relative overflow-hidden">
          <FloatingOrb size={120} color="rgba(255,153,0,0.07)" x="0%" y="0%" duration={9} delay={0} />
          <FloatingSymbol symbol="ॐ" size={36} x="90%" y="5%" duration={11} delay={1.5} opacity={0.06} />
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: 5000, suffix: '+', label: isHi ? 'परिवार सेवित' : 'Families Served' },
              { num: 20, suffix: '+', label: isHi ? 'वर्षों का अनुभव' : 'Years Experience' },
              { num: 500, suffix: '+', label: isHi ? 'विशेषज्ञ पंडित' : 'Expert Pandits' },
              { num: 30, suffix: '+', label: isHi ? 'क्षेत्र कवर' : 'Areas Covered' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="bg-card rounded-2xl p-5 border border-border shadow-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(255,153,0,0.12)' }}
              >
                <p className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                  <AnimatedCounter target={stat.num} suffix={stat.suffix} duration={1.4} />
                </p>
                <p className={`text-sm text-muted-foreground ${isHi ? 'font-hindi' : ''}`}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ─── Services Grid ─── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <ScrollReveal direction="up">
            <h2 className={`text-4xl md:text-5xl font-display font-bold text-secondary mb-4 ${isHi ? 'font-hindi' : ''}`}>
              {t.services.title}
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.08}>
            <p className={`text-lg text-muted-foreground ${isHi ? 'font-hindi' : ''}`}>
              {t.services.subtitle}
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service) => (
            <StaggerItem key={service.id}>
              <div className="h-full group/card transition-transform duration-300 ease-out hover:-translate-y-1">
              <TiltCard className="h-full">
                <div
                  className="bg-card rounded-2xl overflow-hidden border border-border group-hover/card:border-accent/50 group-hover/card:shadow-[0_12px_40px_rgba(255,153,0,0.18)] transition-all duration-300 group flex flex-col h-full"
                  style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.06),0 6px 16px rgba(0,0,0,0.08),0 16px 32px rgba(0,0,0,0.04)' }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <ServiceCardImage
                      src={`${import.meta.env.BASE_URL}${service.image.replace(/^\//, '')}`}
                      alt={service.hiTitle}
                      icon={service.icon}
                      hiTitle={service.hiTitle}
                      category={service.category}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4 w-full">
                      <h3 className="text-xl font-display font-bold text-accent font-hindi leading-tight drop-shadow-md">
                        {service.hiTitle}
                      </h3>
                      {!isHi && (
                        <p className="text-white/80 text-sm mt-0.5">{service.enTitle}</p>
                      )}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className={`text-muted-foreground mb-4 line-clamp-2 text-sm ${isHi ? 'font-hindi' : ''}`}>
                      {isHi ? service.hiDesc : service.enDesc}
                    </p>
                    <div className="pt-4 border-t border-border flex items-center justify-end mt-auto">
                      <Link href={`/${lang}/services/${service.slug}`}>
                        <Button variant="outline" className={`rounded-full border-primary text-primary hover:bg-primary hover:text-white text-sm ${isHi ? 'font-hindi' : ''}`}>
                          {t.services.viewDetails}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </TiltCard>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.1}>
          <div className="mt-12 text-center">
            <Link href={`/${lang}/services`}>
              <Button className="bg-secondary text-white hover:bg-secondary/90 rounded-full px-8 py-6 text-lg font-semibold">
                {isHi ? 'सभी सेवाएं देखें' : 'View All Services'}
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── Sangh Anushthaan / Agency Section ─── */}
      <section className="relative overflow-hidden">
        {/* Hero banner with image + overlay text */}
        <div className="relative h-[280px] md:h-[380px] overflow-hidden">
          <img
            src={`${import.meta.env.BASE_URL}images/sangh-anushthaan-hero.jpg`}
            alt={isHi ? 'संघ पूजा महायज्ञ' : 'Sangh Puja Mahayagna'}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(61,10,10,0.75) 0%, rgba(61,10,10,0.55) 50%, rgba(61,10,10,0.95) 100%)' }} />
          <FloatingSymbol symbol="ॐ" size={72} x="5%" y="10%" duration={10} delay={0} opacity={0.07} />
          <FloatingSymbol symbol="ॐ" size={44} x="88%" y="60%" duration={12} delay={2} opacity={0.05} />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/40 backdrop-blur-sm mb-4">
                <OmIcon className="w-4 h-4 text-accent" />
                <span className={`text-accent text-sm font-medium ${isHi ? 'font-hindi' : ''}`}>
                  {isHi ? 'पंडितगृह संस्था — बड़े अनुष्ठान विशेषज्ञ' : 'PanditGhar Agency — Large-Scale Ritual Specialists'}
                </span>
              </div>
              <h2 className={`text-2xl sm:text-3xl md:text-5xl font-display font-bold text-accent mb-4 drop-shadow-lg ${isHi ? 'font-hindi' : ''}`}>
                {isHi ? 'संघ पूजा एवं बड़े अनुष्ठान' : 'Sangh Puja & Bade Anushthaan'}
              </h2>
              <p className={`text-base md:text-lg text-white/85 max-w-2xl leading-relaxed ${isHi ? 'font-hindi' : ''}`}>
                {isHi
                  ? 'मंदिर, सोसायटी, कॉर्पोरेट एवं पारिवारिक अनुष्ठानों हेतु — 11 से 1008 पंडितों की व्यवस्था'
                  : 'For temples, societies, corporate events & family ceremonies — 11 to 1008 pandits arranged'}
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Package Cards + CTA */}
        <div className="bg-gradient-maroon py-12 px-4 sm:px-6 lg:px-8">
          <FloatingOrb size={180} color="rgba(255,153,0,0.06)" x="0%" y="0%" duration={10} />
          <FloatingOrb size={120} color="rgba(255,204,0,0.05)" x="80%" y="50%" duration={8} delay={2} />

          <StaggerContainer className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-10">
            {sanghPackages.map((pkg) => (
              <StaggerItem key={pkg.count}>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(isHi ? `नमस्ते, मुझे ${pkg.hiName} (${pkg.count} पंडित) के लिए जानकारी चाहिए।` : `Namaste, I am interested in the ${pkg.enName} package (${pkg.count} pandits). Please share details.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="block h-full"
                >
                  <div className="bg-white/10 backdrop-blur-sm border border-accent/30 rounded-2xl p-5 text-center hover:bg-white/20 hover:border-accent/70 transition-all duration-300 group cursor-pointer h-full flex flex-col justify-between min-h-[180px]">
                    <div>
                      <div className="text-3xl mb-2">{pkg.icon}</div>
                      <div className="text-4xl font-bold text-accent font-display mb-0.5 leading-none">{pkg.count}</div>
                      <div className={`text-white/50 text-xs mb-2 uppercase tracking-wide ${isHi ? 'font-hindi' : ''}`}>
                        {isHi ? 'पंडित' : 'Pandits'}
                      </div>
                      <div className={`text-white font-semibold text-sm mb-1 ${isHi ? 'font-hindi' : ''}`}>
                        {isHi ? pkg.hiName : pkg.enName}
                      </div>
                      <div className={`text-white/65 text-xs leading-snug ${isHi ? 'font-hindi' : ''}`}>
                        {isHi ? pkg.hiType : pkg.enType}
                      </div>
                    </div>
                    <div className={`mt-4 text-accent/70 text-xs font-medium group-hover:text-accent transition-colors ${isHi ? 'font-hindi' : ''}`}>
                      {isHi ? 'कोटेशन लें →' : 'Get Quote →'}
                    </div>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* WhatsApp CTA */}
          <ScrollReveal delay={0.15}>
            <div className="text-center">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(isHi ? 'नमस्ते, मुझे संघ पूजा / बड़े अनुष्ठान के लिए कोटेशन चाहिए।' : 'Namaste, I would like a quote for a Sangh Puja or large-scale Anushthaan.')}`}
                target="_blank"
                rel="noreferrer"
              >
                <GlowPulse className="w-80 h-20 bg-green-400/20 left-1/2 -translate-x-1/2 bottom-0 rounded-full" />
                <Button className="relative bg-[#25D366] hover:bg-[#1da855] text-white rounded-full px-10 py-7 text-lg font-semibold border-none shadow-xl hover:shadow-2xl transition-all gap-3">
                  <MessageCircle className="w-6 h-6" />
                  <span className={isHi ? 'font-hindi' : ''}>
                    {isHi ? 'व्हाट्सएप पर कस्टम कोटेशन पाएं' : 'Get a Custom Quote on WhatsApp'}
                  </span>
                </Button>
              </a>
              <p className={`mt-4 text-white/55 text-sm max-w-xl mx-auto leading-relaxed ${isHi ? 'font-hindi' : ''}`}>
                {isHi
                  ? 'सभी पैकेज में शामिल: स्थान सजावट, पूजा सामग्री, पूर्ण समन्वय एवं अनुभवी पंडित दल'
                  : 'All packages include: venue setup, complete samagri, full coordination & experienced pandit team'}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Shastreey Intro ─── */}
      <section className="py-20 bg-gradient-maroon text-white relative overflow-hidden my-16">
        <div className="absolute top-[-20%] right-[-10%] opacity-10">
          <OmIcon className="w-[500px] h-[500px]" />
        </div>
        <FloatingOrb size={200} color="rgba(255,153,0,0.07)" x="5%" y="10%" duration={10} />
        <FloatingOrb size={140} color="rgba(255,204,0,0.06)" x="85%" y="60%" duration={8} delay={1.5} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <ScrollReveal className="flex-1" direction="left">
            <h2 className={`text-2xl sm:text-4xl md:text-5xl font-display font-bold mb-6 text-accent ${isHi ? 'font-hindi' : ''}`}>
              {isHi ? 'प्रमाणिक वैदिक परंपरा' : 'Authentic Vedic Tradition'}
            </h2>
            <p className={`text-lg mb-6 text-white/90 leading-relaxed ${isHi ? 'font-hindi' : ''}`}>
              {isHi
                ? 'हमारे सभी अनुष्ठान पूर्ण रूप से वेदों, पुराणों और गृह्य सूत्रों पर आधारित हैं। हम यह सुनिश्चित करते हैं कि हर पूजा सही मुहूर्त में और उचित मंत्रोच्चार के साथ संपन्न हो।'
                : 'All our rituals are strictly based on the Vedas, Puranas, and Grihya Sutras. We ensure every pooja is performed in the correct muhurat with precise mantra chanting.'}
            </p>
            <div className="bg-black/20 border border-accent/30 p-6 rounded-xl backdrop-blur-sm">
              <p className={`font-medium italic ${isHi ? 'font-hindi' : ''}`}>
                "मन्त्रहीनं क्रियाहीनं यत्कृतं पूजनं हरेः।<br />
                सर्वं तन्निष्फलं याति तस्मात् यत्नेन पूजयेत्॥"
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="flex-1 w-full relative" direction="right" delay={0.1}>
            <motion.div
              className="aspect-square max-w-md mx-auto rounded-full border-4 border-accent/50 shadow-glow-gold relative flex items-center justify-center overflow-hidden"
              style={{ background: 'radial-gradient(circle at 40% 35%, #7a1c1c, #3d0a0a 80%)' }}
              whileHover={{ scale: 1.03, boxShadow: '0 0 60px rgba(255,204,0,0.4)' }}
              transition={{ duration: 0.35 }}
            >
              <span className="text-[120px] leading-none select-none font-hindi" style={{ color: 'rgba(255,204,0,0.25)' }}>ॐ</span>
              <span className="absolute bottom-10 text-accent/60 text-sm tracking-widest font-medium">PanditGhar.in</span>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── People Also Ask (GEO) ─── */}
      <ScrollReveal>
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <h2 className={`text-2xl md:text-3xl font-display font-bold text-secondary mb-8 text-center ${isHi ? 'font-hindi' : ''}`}>
            {isHi ? 'अक्सर पूछे जाने वाले प्रश्न' : 'People Also Ask'}
          </h2>
          <div className="space-y-4">
            {paaItems.map((item, i) => (
              <details
                key={i}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all"
              >
                <summary className={`flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none font-semibold text-secondary ${isHi ? 'font-hindi' : ''}`}>
                  <span>{item.q}</span>
                  <span className="text-primary text-lg shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className={`px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4 ${isHi ? 'font-hindi' : ''}`}>
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ─── Booking Section ─── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative overflow-hidden" id="book-now">
        <FloatingOrb size={200} color="rgba(255,153,0,0.06)" x="-5%" y="10%" duration={12} delay={0} />
        <FloatingOrb size={140} color="rgba(255,204,0,0.05)" x="90%" y="50%" duration={9} delay={2} />
        <FloatingSymbol symbol="🪔" size={28} x="5%" y="80%" duration={10} delay={1} opacity={0.08} />
        <ScrollReveal>
          <BookingForm lang={lang} />
        </ScrollReveal>
      </section>
    </div>
  );
}
