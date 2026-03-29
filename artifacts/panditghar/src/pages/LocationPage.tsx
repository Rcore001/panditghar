import { useRoute } from 'wouter';
import { Language, Location, locations, services, useTranslation } from '@/lib/data';
import { SEO } from '@/components/SEO';
import { BookingForm } from '@/components/BookingForm';
import NotFound from './not-found';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { SITE_URL } from '@/lib/config';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem, TiltCard } from '@/components/ui/animated';
import { Breadcrumb } from '@/components/Breadcrumb';

const areaGeoCoords: Record<string, { lat: number; lng: number }> = {
  "whitefield":        { lat: 12.9698, lng: 77.7500 },
  "hsr-layout":        { lat: 12.9116, lng: 77.6389 },
  "marathahalli":      { lat: 12.9591, lng: 77.7011 },
  "electronic-city":   { lat: 12.8399, lng: 77.6770 },
  "jp-nagar":          { lat: 12.9079, lng: 77.5921 },
  "koramangala":       { lat: 12.9350, lng: 77.6245 },
  "indiranagar":       { lat: 12.9784, lng: 77.6408 },
  "jayanagar":         { lat: 12.9299, lng: 77.5826 },
  "bannerghatta-road": { lat: 12.8878, lng: 77.5985 },
  "btm-layout":        { lat: 12.9166, lng: 77.6101 },
  "rajajinagar":       { lat: 13.0054, lng: 77.5535 },
  "malleshwaram":      { lat: 13.0035, lng: 77.5690 },
  "yelahanka":         { lat: 13.0991, lng: 77.5958 },
  "hebbal":            { lat: 13.0358, lng: 77.5970 },
  "sarjapur-road":     { lat: 12.9100, lng: 77.6871 },
  "kr-puram":          { lat: 13.0072, lng: 77.6951 },
  "hennur":            { lat: 13.0497, lng: 77.6411 },
  "banashankari":      { lat: 12.9256, lng: 77.5466 },
  "vijayanagar":       { lat: 12.9719, lng: 77.5327 },
  "ulsoor":            { lat: 12.9784, lng: 77.6240 },
};

export default function LocationPage({ lang }: { lang: Language }) {
  const [match, params] = useRoute("/:lang/bangalore/:area/:service");
  const isHi = lang === 'hi';

  if (!match || !params.area || !params.service) return <NotFound />;

  const area = locations.find(l => l.id === params.area) as Location | undefined;
  const service = services.find(s => params.service?.includes(s.id.split('-')[0])) || services[0];

  if (!area) return <NotFound />;

  const areaCoords = areaGeoCoords[params.area] ?? { lat: 12.9716, lng: 77.5946 };

  const title = isHi
    ? `${area.name} में ${service.hiTitle} के लिए पंडित`
    : `Pandit for ${service.enTitle} in ${area.name}, Bangalore`;

  const desc = isHi
    ? `बेंगलुरु के ${area.name} में सर्वोत्तम उत्तर भारतीय पंडित। प्रामाणिक ${service.hiTitle} बुक करें।`
    : `Best North Indian Pandit in ${area.name}, Bangalore. Book authentic ${service.enTitle} with Shastreey rituals.`;

  const intro = isHi ? area.hiIntro : area.enIntro;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": isHi ? service.hiTitle : service.enTitle,
    "provider": {
      "@type": "LocalBusiness",
      "name": "PanditGhar.in",
      "url": SITE_URL,
      "telephone": "+919329566101",
      "areaServed": [
        { "@type": "City", "name": "Bangalore" },
        { "@type": "Place", "name": `${area.name}, Bangalore` }
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": area.name,
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": areaCoords.lat,
        "longitude": areaCoords.lng
      }
    },
    "description": desc,
    "offers": {
      "@type": "Offer",
      "price": service.price,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    },
    "image": `https://panditghar.in${service.image}`
  };

  const includedItems = [
    isHi ? 'प्रामाणिक उत्तर भारतीय पंडित' : 'Authentic North Indian Pandit',
    isHi ? 'सभी आवश्यक पूजा सामग्री' : 'All required Pooja Samagri',
    isHi ? 'पूर्ण विधि-विधान से पूजा' : 'Complete Vedic rituals as per Shastra',
    isHi ? `${area.name} में यात्रा खर्च सम्मिलित` : `Travel to ${area.name} included`,
    isHi ? 'पूजा के बाद आशीर्वाद व प्रसाद' : 'Blessings and Prasad after the puja',
  ];

  return (
    <div className="pt-24 pb-16 bg-background">
      <SEO
        title={isHi
          ? `${area.name} में ${service.hiTitle} — पंडित बुकिंग, मूल्य | PanditGhar.in`
          : `${service.enTitle} in ${area.name}, Bangalore — Pandit Booking & Price | PanditGhar.in`}
        description={isHi
          ? `${area.name}, बेंगलुरु में ${service.hiTitle} के लिए प्रामाणिक उत्तर भारतीय पंडित। ₹${service.price.toLocaleString('en-IN')} से शुरू। पूरी पूजा सामग्री सहित।`
          : `Authentic North Indian Pandit for ${service.enTitle} in ${area.name}, Bangalore. Starting ₹${service.price.toLocaleString('en-IN')}. Complete samagri included.`}
        lang={lang}
        path={`/${lang}/bangalore/${params.area}/${params.service}`}
        schema={schema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Breadcrumb
            items={[
              { label: isHi ? 'सेवाएं' : 'Services', href: `/${lang}/services` },
              { label: isHi ? `${area.name}` : `${area.name}, Bangalore` },
            ]}
            lang={lang}
          />
        </div>
        <ScrollReveal direction="up">
          <div className="bg-gradient-maroon rounded-3xl p-4 sm:p-8 md:p-12 text-white shadow-2xl relative overflow-hidden mb-12">
            <div className="hidden sm:block absolute top-0 right-0 p-8 opacity-20">
              <MapPin className="w-32 sm:w-48 h-32 sm:h-48" />
            </div>
            <div className="relative z-10 max-w-3xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 border border-white/20 mb-4 sm:mb-6"
              >
                <MapPin className="w-4 h-4 text-accent" />
                <span className="font-semibold text-sm sm:text-base">{area.name}, Bangalore</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`text-2xl sm:text-4xl md:text-5xl font-display font-bold mb-4 sm:mb-6 text-accent ${isHi ? 'font-hindi' : ''}`}
              >
                {title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`text-sm sm:text-base md:text-xl text-white/90 leading-relaxed ${isHi ? 'font-hindi' : ''}`}
              >
                {intro}
              </motion.p>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className={`space-y-6 ${isHi ? 'font-hindi' : ''}`}>
            <ScrollReveal direction="left">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-display font-bold text-secondary mb-4">
                  {isHi ? 'हमारी सेवा के बारे में' : 'About Our Service'}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isHi ? service.hiContent : service.enContent}
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  {isHi
                    ? `हम ${area.name} और आसपास के सभी क्षेत्रों में अपनी सेवाएं प्रदान करते हैं। पंडित जी पूरी पूजा सामग्री के साथ आपके घर आते हैं।`
                    : `We provide our services in ${area.name} and all surrounding areas. Pandit Ji arrives at your home with complete Pooja Samagri.`}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.08}>
              <TiltCard intensity={5}>
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-secondary mb-4">
                    {isHi ? 'हमारी सेवा में क्या शामिल है' : 'What is Included'}
                  </h3>
                  <StaggerContainer className="space-y-3" staggerDelay={0.07}>
                    {includedItems.map((item, i) => (
                      <StaggerItem key={i}>
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                          <span className="text-sm">{item}</span>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </TiltCard>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.12}>
              <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6">
                <p className="text-sm italic text-muted-foreground">
                  📜 {service.shastreeyRef}
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" delay={0.1}>
            <div>
              <BookingForm lang={lang} preselectedService={isHi ? service.hiTitle : service.enTitle} />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
