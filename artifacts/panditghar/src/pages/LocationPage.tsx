import { useRoute } from 'wouter';
import { Language, Location, locations, services, useTranslation } from '@/lib/data';
import { SEO } from '@/components/SEO';
import { BookingForm } from '@/components/BookingForm';
import NotFound from './not-found';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { SITE_URL } from '@/lib/config';

export default function LocationPage({ lang }: { lang: Language }) {
  const [match, params] = useRoute("/:lang/bangalore/:area/:service");
  const isHi = lang === 'hi';

  if (!match || !params.area || !params.service) return <NotFound />;

  const area = locations.find(l => l.id === params.area) as Location | undefined;
  const service = services.find(s => params.service?.includes(s.id.split('-')[0])) || services[0];

  if (!area) return <NotFound />;

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
      "areaServed": [
        { "@type": "City", "name": "Bangalore" },
        { "@type": "Place", "name": area.name }
      ]
    },
    "description": desc,
    "offers": {
      "@type": "Offer",
      "price": service.price,
      "priceCurrency": "INR"
    }
  };

  return (
    <div className="pt-24 pb-16 bg-background">
      <SEO
        title={`${title} | PanditGhar.in`}
        description={desc}
        lang={lang}
        path={`/${lang}/bangalore/${params.area}/${params.service}`}
        schema={schema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-maroon rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 p-8 opacity-20">
            <MapPin className="w-48 h-48" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="font-semibold">{area.name}, Bangalore</span>
            </div>
            <h1 className={`text-4xl md:text-5xl font-display font-bold mb-6 text-accent ${isHi ? 'font-hindi' : ''}`}>
              {title}
            </h1>
            <p className={`text-xl text-white/90 leading-relaxed ${isHi ? 'font-hindi' : ''}`}>
              {intro}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className={`space-y-6 ${isHi ? 'font-hindi' : ''}`}>
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

            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-bold text-secondary mb-4">
                {isHi ? 'हमारी सेवा में क्या शामिल है' : 'What is Included'}
              </h3>
              <ul className="space-y-3">
                {[
                  isHi ? 'प्रामाणिक उत्तर भारतीय पंडित' : 'Authentic North Indian Pandit',
                  isHi ? 'सभी आवश्यक पूजा सामग्री' : 'All required Pooja Samagri',
                  isHi ? 'पूर्ण विधि-विधान से पूजा' : 'Complete Vedic rituals as per Shastra',
                  isHi ? `${area.name} में यात्रा खर्च सम्मिलित` : `Travel to ${area.name} included`,
                  isHi ? 'पूजा के बाद आशीर्वाद व प्रसाद' : 'Blessings and Prasad after the puja',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6">
              <p className="text-sm italic text-muted-foreground">
                📜 {service.shastreeyRef}
              </p>
              <p className="mt-3 font-bold text-xl text-primary">
                {isHi ? 'शुरूआती मूल्य' : 'Starting from'}: ₹{service.price.toLocaleString('en-IN')}
              </p>
            </div>
          </div>

          <div>
            <BookingForm lang={lang} preselectedService={isHi ? service.hiTitle : service.enTitle} />
          </div>
        </div>
      </div>
    </div>
  );
}
