import { Language, muhurats, useTranslation } from '@/lib/data';
import { SEO } from '@/components/SEO';
import { DecorativeDivider } from '@/components/ui/decorative';
import { CalendarDays } from 'lucide-react';
import { SITE_URL } from '@/lib/config';

export default function ShubhMuhurat({ lang }: { lang: Language }) {
  const isHi = lang === 'hi';
  const title = isHi ? "शुभ मुहूर्त 2026" : "Shubh Muhurat 2026";
  const desc = isHi ? "2026 में गृह प्रवेश, विवाह और अन्य पूजा के लिए शुभ तिथियां" : "Auspicious dates for Griha Pravesh, Vivah, and other Poojas in 2026";

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": desc,
    "url": `${SITE_URL}/${lang}/shubh-muhurat-2026`,
    "about": {
      "@type": "Thing",
      "name": isHi ? "शुभ मुहूर्त 2026 — वैदिक ज्योतिष" : "Shubh Muhurat 2026 — Vedic Astrology Calendar"
    },
    "provider": {
      "@type": "LocalBusiness",
      "name": "PanditGhar.in"
    }
  };

  return (
    <div className="pt-24 pb-16 bg-background min-h-screen">
      <SEO 
        title={`${title} | PanditGhar.in`}
        description={desc}
        lang={lang}
        path={`/${lang}/shubh-muhurat-2026`}
        schema={schema}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex justify-center items-center w-20 h-20 rounded-full bg-accent/20 mb-6 text-accent">
             <CalendarDays className="w-10 h-10" />
          </div>
          <h1 className={`text-4xl md:text-5xl font-display font-bold text-secondary mb-4 ${isHi ? 'font-hindi' : ''}`}>
            {title}
          </h1>
          <p className={`text-lg text-muted-foreground ${isHi ? 'font-hindi' : ''}`}>
            {desc}
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-secondary text-secondary-foreground">
                  <th className="py-4 px-6 font-display text-lg">{isHi ? 'तिथि (Date)' : 'Date'}</th>
                  <th className="py-4 px-6 font-display text-lg">{isHi ? 'दिन (Day)' : 'Day'}</th>
                  <th className="py-4 px-6 font-display text-lg">{isHi ? 'अवसर (Occasion)' : 'Occasion'}</th>
                  <th className="py-4 px-6 font-display text-lg">{isHi ? 'मुहूर्त (Time)' : 'Muhurat Time'}</th>
                  <th className="py-4 px-6 font-display text-lg">{isHi ? 'प्रकार (Type)' : 'Type'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {muhurats.map((m, i) => (
                  <tr key={i} className="hover:bg-muted/50 transition-colors">
                    <td className="py-4 px-6 font-semibold">{m.date}</td>
                    <td className="py-4 px-6 text-muted-foreground">{m.day}</td>
                    <td className="py-4 px-6">{m.occasion}</td>
                    <td className="py-4 px-6 text-primary font-medium">{m.time}</td>
                    <td className="py-4 px-6">
                      <span className="bg-accent/20 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                        {m.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={`mt-8 text-center text-muted-foreground text-sm ${isHi ? 'font-hindi' : ''}`}>
          * {isHi ? 'मुहूर्त पंचांग पर आधारित हैं। व्यक्तिगत कुण्डली के अनुसार मुहूर्त बदल सकता है।' : 'Muhurats are based on general Panchang. Specific timings may vary based on personal Kundali.'}
        </div>
      </div>
      <DecorativeDivider />
    </div>
  );
}
