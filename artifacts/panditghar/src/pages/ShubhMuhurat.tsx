import { motion } from 'framer-motion';
import { Language, muhurats, useTranslation } from '@/lib/data';
import { SEO } from '@/components/SEO';
import { DecorativeDivider } from '@/components/ui/decorative';
import { CalendarDays } from 'lucide-react';
import { SITE_URL } from '@/lib/config';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/animated';

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

  const columns = [
    { label: isHi ? 'तिथि' : 'Date', key: 'date' as const, className: 'font-semibold min-w-[110px]' },
    { label: isHi ? 'दिन' : 'Day', key: 'day' as const, className: 'text-muted-foreground min-w-[80px]' },
    { label: isHi ? 'अवसर' : 'Occasion', key: 'occasion' as const, className: 'flex-1' },
    { label: isHi ? 'मुहूर्त' : 'Time', key: 'time' as const, className: 'text-primary font-medium min-w-[130px]' },
  ];

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
        <ScrollReveal direction="up">
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex justify-center items-center w-20 h-20 rounded-full bg-accent/20 mb-6 text-accent"
            >
              <CalendarDays className="w-10 h-10" />
            </motion.div>
            <h1 className={`text-4xl md:text-5xl font-display font-bold text-secondary mb-4 ${isHi ? 'font-hindi' : ''}`}>
              {title}
            </h1>
            <p className={`text-lg text-muted-foreground ${isHi ? 'font-hindi' : ''}`}>
              {desc}
            </p>
          </div>
        </ScrollReveal>

        {/* Column headers */}
        <ScrollReveal direction="up" delay={0.08}>
          <div className="hidden md:flex items-center gap-4 px-6 py-3 mb-2 bg-secondary text-secondary-foreground rounded-xl font-display font-semibold text-sm">
            {columns.map(col => (
              <span key={col.key} className={col.className}>{col.label}</span>
            ))}
            <span className="min-w-[110px]">{isHi ? 'प्रकार' : 'Type'}</span>
          </div>
        </ScrollReveal>

        {/* Staggered muhurat rows */}
        <StaggerContainer className="space-y-2" staggerDelay={0.055}>
          {muhurats.map((m, i) => (
            <StaggerItem key={i} className="bg-card rounded-xl border border-border hover:shadow-md hover:border-primary/30 transition-all">
              <div className="flex flex-wrap md:flex-nowrap items-center gap-3 px-6 py-4">
                <span className="font-semibold min-w-[110px] text-secondary">{m.date}</span>
                <span className="text-muted-foreground min-w-[80px] text-sm">{m.day}</span>
                <span className="flex-1 text-foreground">{m.occasion}</span>
                <span className="text-primary font-medium min-w-[130px] text-sm">{m.time}</span>
                <span className="bg-accent/20 text-secondary px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">{m.type}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.1}>
          <div className={`mt-8 text-center text-muted-foreground text-sm ${isHi ? 'font-hindi' : ''}`}>
            * {isHi ? 'मुहूर्त पंचांग पर आधारित हैं। व्यक्तिगत कुण्डली के अनुसार मुहूर्त बदल सकता है।' : 'Muhurats are based on general Panchang. Specific timings may vary based on personal Kundali.'}
          </div>
        </ScrollReveal>
      </div>
      <DecorativeDivider />
    </div>
  );
}
