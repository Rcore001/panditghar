import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Language, useTranslation, services, WHATSAPP_NUMBER } from '@/lib/data';
import { SITE_URL } from '@/lib/config';
import { DecorativeDivider, OmIcon } from '@/components/ui/decorative';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Star } from 'lucide-react';
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

export default function Home({ lang }: { lang: Language }) {
  const t = useTranslation(lang);
  const isHi = lang === 'hi';

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "PanditGhar.in",
    "image": `${SITE_URL}/images/pandit-portrait.png`,
    "description": t.hero.subtitle,
    "url": `${SITE_URL}/${lang}`,
    "telephone": `+91${WHATSAPP_NUMBER}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    }
  };

  return (
    <div className="pt-20">
      <SEO
        title={isHi ? "बेंगलुरु में प्रामाणिक उत्तर भारतीय पंडित | PanditGhar.in" : "Authentic North Indian Pandit in Bangalore | PanditGhar.in"}
        description={t.hero.subtitle}
        lang={lang}
        path={`/${lang}`}
        schema={schema}
      />

      {/* ─── Hero Section ─── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="w-full h-full"
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/hero-sacred.png`}
              alt="Sacred Pooja Background"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent" />
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

            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 text-gradient-gold ${isHi ? 'font-hindi' : ''}`}>
              {t.hero.h1}
            </h1>

            <motion.p
              className={`text-xl md:text-2xl text-white/90 mb-10 leading-relaxed ${isHi ? 'font-hindi' : ''}`}
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
              <Link href={`/${lang}/book`}>
                <Button className="w-full sm:w-auto bg-gradient-saffron hover:shadow-glow-saffron text-white rounded-full px-8 py-7 text-lg font-semibold border-none transition-all">
                  {t.hero.ctaPrimary}
                </Button>
              </Link>
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
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-accent border-2 border-secondary flex items-center justify-center text-xs font-bold text-secondary">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className={isHi ? 'font-hindi' : ''}>{t.hero.trusted}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Trust Badges ─── */}
      <ScrollReveal delay={0.05}>
        <div className="bg-accent text-secondary py-4 shadow-md relative z-20 -mt-8 mx-4 sm:mx-8 rounded-2xl md:mx-auto md:max-w-5xl border border-accent-foreground/10">
          <div className="flex flex-wrap justify-around items-center gap-4 px-6 font-medium text-sm sm:text-base">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> 15+ Years Exp.</div>
            <div className="hidden md:block w-px h-6 bg-secondary/20" />
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> North Indian Brahmin</div>
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
        <section className="py-10 px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: 5000, suffix: '+', label: isHi ? 'परिवार सेवित' : 'Families Served' },
              { num: 15, suffix: '+', label: isHi ? 'वर्षों का अनुभव' : 'Years Experience' },
              { num: 25, suffix: '+', label: isHi ? 'सेवाएं उपलब्ध' : 'Services Available' },
              { num: 20, suffix: '+', label: isHi ? 'क्षेत्र कवर' : 'Areas Covered' },
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
                <p className="text-3xl font-bold text-primary mb-1">
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
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-display font-bold text-secondary mb-4 ${isHi ? 'font-hindi' : ''}`}>
              {t.services.title}
            </h2>
            <p className={`text-lg text-muted-foreground ${isHi ? 'font-hindi' : ''}`}>
              {t.services.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service) => (
            <StaggerItem key={service.id}>
              <TiltCard className="h-full">
                <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-xl hover:border-accent/50 transition-all duration-300 group flex flex-col h-full">
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={`${import.meta.env.BASE_URL}${service.image.replace(/^\//, '')}`}
                      alt={service.hiTitle}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4 }}
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
                    <div className="pt-4 border-t border-border flex items-center justify-between mt-auto">
                      <div>
                        <p className={`text-xs text-muted-foreground ${isHi ? 'font-hindi' : ''}`}>{t.services.startingAt}</p>
                        <p className="font-bold text-lg text-primary">₹{service.price.toLocaleString('en-IN')}</p>
                      </div>
                      <Link href={`/${lang}/services/${service.slug}`}>
                        <Button variant="outline" className={`rounded-full border-primary text-primary hover:bg-primary hover:text-white text-sm ${isHi ? 'font-hindi' : ''}`}>
                          {t.services.viewDetails}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </TiltCard>
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

      {/* ─── Shastreey Intro ─── */}
      <section className="py-20 bg-gradient-maroon text-white relative overflow-hidden my-16">
        <div className="absolute top-[-20%] right-[-10%] opacity-10">
          <OmIcon className="w-[500px] h-[500px]" />
        </div>
        <FloatingOrb size={200} color="rgba(255,153,0,0.07)" x="5%" y="10%" duration={10} />
        <FloatingOrb size={140} color="rgba(255,204,0,0.06)" x="85%" y="60%" duration={8} delay={1.5} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <ScrollReveal className="flex-1" direction="left">
            <h2 className={`text-4xl md:text-5xl font-display font-bold mb-6 text-accent ${isHi ? 'font-hindi' : ''}`}>
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
              className="aspect-square max-w-md mx-auto rounded-full overflow-hidden border-4 border-accent/50 shadow-glow-gold relative"
              whileHover={{ scale: 1.03, boxShadow: '0 0 60px rgba(255,204,0,0.4)' }}
              transition={{ duration: 0.35 }}
            >
              <img
                src={`${import.meta.env.BASE_URL}images/pandit-portrait.png`}
                alt="Pandit Ji"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Booking Section ─── */}
      <ScrollReveal>
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto" id="book-now">
          <BookingForm lang={lang} />
        </section>
      </ScrollReveal>
    </div>
  );
}
