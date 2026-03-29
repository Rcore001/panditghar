import { useState } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Language, services, serviceCategories, useTranslation } from '@/lib/data';
import { SEO } from '@/components/SEO';
import { DecorativeDivider } from '@/components/ui/decorative';
import { Button } from '@/components/ui/button';
import { SITE_URL } from '@/lib/config';
import { ScrollReveal, StaggerContainer, StaggerItem, TiltCard } from '@/components/ui/animated';
import { ServiceCardImage } from '@/components/ServiceCardImage';
import { ServiceIcon } from '@/components/ServiceIcon';
import { Sparkles, Home, Baby, BookOpen, PartyPopper, Star, Telescope } from 'lucide-react';

const CATEGORY_ICON_COMPONENTS: Record<string, React.ReactNode> = {
  all:      <Sparkles className="w-4 h-4" />,
  small:    <Home className="w-4 h-4" />,
  sanskar:  <Baby className="w-4 h-4" />,
  large:    <BookOpen className="w-4 h-4" />,
  festival: <PartyPopper className="w-4 h-4" />,
  dosha:    <Star className="w-4 h-4" />,
  jyotish:  <Telescope className="w-4 h-4" />,
};

export default function Services({ lang }: { lang: Language }) {
  const t = useTranslation(lang);
  const isHi = lang === 'hi';
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? services
    : services.filter(s => s.category === activeCategory);

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": isHi ? "सभी पूजा सेवाएं बेंगलुरु" : "All Pandit Pooja Services in Bangalore",
    "description": t.services.subtitle,
    "url": `${SITE_URL}/${lang}/services`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "PanditGhar.in",
      "areaServed": "Bangalore"
    },
    "hasPart": services.map(s => ({
      "@type": "Service",
      "name": isHi ? s.hiTitle : s.enTitle,
      "url": `${SITE_URL}/${lang}/services/${s.slug}`,
      "offers": {
        "@type": "Offer",
        "price": s.price,
        "priceCurrency": "INR"
      }
    }))
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-background">
      <SEO
        title={isHi ? "सभी पूजा सेवाएं बेंगलुरु | PanditGhar.in" : "All Pandit Services Bangalore | PanditGhar.in"}
        description={t.services.subtitle}
        lang={lang}
        path={`/${lang}/services`}
        schema={schema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h1 className={`text-5xl font-display font-bold text-secondary mb-4 ${isHi ? 'font-hindi' : ''}`}>
              {t.services.title}
            </h1>
            <p className={`text-xl text-muted-foreground max-w-2xl mx-auto ${isHi ? 'font-hindi' : ''}`}>
              {t.services.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {serviceCategories.map((cat, i) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? 'bg-primary text-white border-primary shadow-md'
                    : 'bg-card border-border text-muted-foreground hover:border-primary hover:text-primary'
                } ${isHi ? 'font-hindi' : ''}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
              >
                <span className="leading-none flex-shrink-0">{CATEGORY_ICON_COMPONENTS[cat.id]}</span>
                <span>{isHi ? cat.hiLabel : cat.enLabel}</span>
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <StaggerContainer
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              staggerDelay={0.05}
            >
              {filtered.map((service) => (
                <StaggerItem key={service.id}>
                  <div className="h-full group/card transition-transform duration-300 ease-out hover:-translate-y-1">
                  <TiltCard className="h-full" intensity={6}>
                    <div
                      className="bg-card rounded-2xl overflow-hidden border border-border flex flex-col h-full group group-hover/card:border-accent/50 group-hover/card:shadow-[0_12px_40px_rgba(255,153,0,0.18)] transition-all duration-300"
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
                        {/* Category badge */}
                        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center text-white border border-white/20">
                          <ServiceIcon name={service.icon} className="w-4 h-4" />
                        </div>
                        <div className="absolute bottom-0 left-0 p-4 w-full">
                          <h3 className="text-lg font-display font-bold text-accent font-hindi leading-tight drop-shadow-md">
                            {service.hiTitle}
                          </h3>
                          {!isHi && (
                            <p className="text-white/80 text-xs mt-0.5">{service.enTitle}</p>
                          )}
                        </div>
                      </div>

                      <div className="p-5 flex-1 flex flex-col">
                        <p className={`text-muted-foreground mb-3 line-clamp-2 text-sm ${isHi ? 'font-hindi' : ''}`}>
                          {isHi ? service.hiDesc : service.enDesc}
                        </p>
                        <div className="bg-muted p-2.5 rounded-lg mb-4 text-xs italic border-l-2 border-accent text-muted-foreground line-clamp-2">
                          {service.shastreeyRef}
                        </div>
                        <div className="mt-auto pt-3 border-t border-border flex items-center justify-end">
                          <Link href={`/${lang}/services/${service.slug}`}>
                            <Button variant="outline" size="sm" className={`rounded-full border-primary text-primary hover:bg-primary hover:text-white ${isHi ? 'font-hindi' : ''}`}>
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
          </motion.div>
        </AnimatePresence>
      </div>

      <DecorativeDivider />
    </div>
  );
}
