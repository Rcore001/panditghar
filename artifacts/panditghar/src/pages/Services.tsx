import { useState } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Language, services, serviceCategories, useTranslation } from '@/lib/data';
import { SEO } from '@/components/SEO';
import { DecorativeDivider } from '@/components/ui/decorative';
import { Button } from '@/components/ui/button';
import { SITE_URL } from '@/lib/config';

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
        <div className="text-center mb-12">
          <h1 className={`text-5xl font-display font-bold text-secondary mb-4 ${isHi ? 'font-hindi' : ''}`}>
            {t.services.title}
          </h1>
          <p className={`text-xl text-muted-foreground max-w-2xl mx-auto ${isHi ? 'font-hindi' : ''}`}>
            {t.services.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {serviceCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all border ${
                activeCategory === cat.id
                  ? 'bg-primary text-white border-primary shadow-md'
                  : 'bg-card border-border text-muted-foreground hover:border-primary hover:text-primary'
              } ${isHi ? 'font-hindi' : ''}`}
            >
              {isHi ? cat.hiLabel : cat.enLabel}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.04 }}
                className="bg-card rounded-2xl overflow-hidden border border-border shadow-lg flex flex-col group hover:shadow-xl hover:border-accent/50 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}${service.image.replace(/^\//, '')}`}
                    alt={service.hiTitle}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent" />
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
                  <div className="mt-auto pt-3 border-t border-border flex items-center justify-between">
                    <p className="font-bold text-xl text-primary">₹{service.price.toLocaleString('en-IN')}</p>
                    <Link href={`/${lang}/services/${service.slug}`}>
                      <Button variant="outline" size="sm" className={`rounded-full border-primary text-primary hover:bg-primary hover:text-white ${isHi ? 'font-hindi' : ''}`}>
                        {t.services.viewDetails}
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      <DecorativeDivider />
    </div>
  );
}
