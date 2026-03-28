import { Link } from 'wouter';
import { OmIcon } from '@/components/ui/decorative';
import { Language, useTranslation, services, locations, WHATSAPP_NUMBER } from '@/lib/data';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Footer({ lang }: { lang: Language }) {
  const t = useTranslation(lang).footer;
  const nav = useTranslation(lang).nav;

  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link href={`/${lang}`} className="flex items-center gap-2">
              <OmIcon className="w-8 h-8 text-accent" />
              <span className="text-2xl font-display font-bold text-white">PanditGhar<span className="text-accent">.in</span></span>
            </Link>
            <p className={`text-secondary-foreground/80 leading-relaxed ${lang === 'hi' ? 'font-hindi' : ''}`}>
              {lang === 'hi' 
                ? 'बेंगलुरु में प्रामाणिक उत्तर भारतीय पंडित सेवाएं। सभी वैदिक अनुष्ठान शास्त्रों के अनुसार किए जाते हैं।'
                : 'Authentic North Indian Pandit services in Bangalore. All Vedic rituals performed strictly as per Shastras.'}
            </p>
            <div className="flex flex-col gap-2 pt-4">
              <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 text-accent" />
                <span>+91 98801 23456</span>
              </a>
              <a href="mailto:pandit@panditghar.in" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 text-accent" />
                <span>pandit@panditghar.in</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-display font-semibold text-white mb-4 border-b border-accent/20 pb-2 inline-block">{t.quickLinks}</h3>
            <ul className={`space-y-3 ${lang === 'hi' ? 'font-hindi' : ''}`}>
              <li><Link href={`/${lang}/about`} className="hover:text-accent transition-colors">{nav.about}</Link></li>
              <li><Link href={`/${lang}/services`} className="hover:text-accent transition-colors">{nav.services}</Link></li>
              <li><Link href={`/${lang}/shubh-muhurat-2026`} className="hover:text-accent transition-colors">{nav.shubhMuhurat}</Link></li>
              <li><Link href={`/${lang}/blog`} className="hover:text-accent transition-colors">{nav.blog}</Link></li>
              <li><Link href={`/${lang}/book`} className="hover:text-accent transition-colors text-accent">{nav.bookNow}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-display font-semibold text-white mb-4 border-b border-accent/20 pb-2 inline-block">{nav.services}</h3>
            <ul className={`space-y-3 ${lang === 'hi' ? 'font-hindi' : ''}`}>
              {services.slice(0, 5).map(service => (
                <li key={service.id}>
                  <Link href={`/${lang}/services/${service.slug}`} className="hover:text-accent transition-colors">
                    {lang === 'hi' ? service.hiTitle : service.enTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-xl font-display font-semibold text-white mb-4 border-b border-accent/20 pb-2 inline-block">{t.serviceAreas}</h3>
            <div className="flex flex-wrap gap-2">
              {locations.map(loc => (
                <Link 
                  key={loc.id} 
                  href={`/${lang}/bangalore/${loc.id}/pandit-for-pooja`}
                  className="text-sm bg-black/20 hover:bg-accent hover:text-secondary px-3 py-1.5 rounded-full transition-colors flex items-center gap-1"
                >
                  <MapPin className="w-3 h-3" />
                  {loc.name}
                </Link>
              ))}
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-accent/20 text-center text-secondary-foreground/60 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p className={lang === 'hi' ? 'font-hindi' : ''}>{t.copyright}</p>
          <div className="flex gap-4">
            <span className="text-accent">ॐ</span>
            <span className="text-accent">शान्तिः</span>
            <span className="text-accent">शान्तिः</span>
            <span className="text-accent">शान्तिः</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
