import {
  Language, muhurats,
  satyanarayan2026, satyanarayan2027,
  vivahMuhurat2026, vivahMuhurat2027,
  grahaPraveshMuhurat2026,
  namkaranRules, mundanRules, vyaparRules, abujhMuhuratList,
} from '@/lib/data';
import { SEO } from '@/components/SEO';
import { DecorativeDivider } from '@/components/ui/decorative';
import {
  CalendarDays, Moon, Heart, Home, Baby, Scissors,
  Store, Car, Landmark, Star,
} from 'lucide-react';
import { SITE_URL } from '@/lib/config';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/animated';
import { Breadcrumb } from '@/components/Breadcrumb';

function SectionHeader({
  icon: Icon,
  title,
  subtitle,
  isHi,
}: {
  icon: React.ElementType;
  title: string;
  subtitle?: string;
  isHi: boolean;
}) {
  return (
    <ScrollReveal direction="up" className="mb-8">
      <div className="flex items-center gap-4 mb-2">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 text-accent shrink-0">
          <Icon className="w-6 h-6" />
        </span>
        <h2 className={`text-2xl md:text-3xl font-display font-bold text-secondary ${isHi ? 'font-hindi' : ''}`}>
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className={`mt-1 text-sm text-muted-foreground ${isHi ? 'font-hindi' : ''}`}>{subtitle}</p>
      )}
    </ScrollReveal>
  );
}

function DateChips({ dates }: { dates: number[] }) {
  if (dates.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-1.5 mt-1">
      {dates.map(d => (
        <span key={d} className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-xs font-bold">
          {d}
        </span>
      ))}
    </div>
  );
}

export default function ShubhMuhurat({ lang }: { lang: Language }) {
  const isHi = lang === 'hi';
  const title = isHi
    ? 'सम्पूर्ण हिंदू पंचांग एवं शुभ मुहूर्त 2026–2027'
    : 'Sampoorn Hindu Panchang & Shubh Muhurat 2026–2027';
  const desc = isHi
    ? '2026–2027 के सभी प्रमुख संस्कारों और शुभ कार्यों के मुहूर्त — विवाह, गृह प्रवेश, सत्यनारायण, मुंडन और अधिक'
    : 'Auspicious dates for all major Hindu Sanskars in 2026–2027 — Vivah, Griha Pravesh, Satyanarayan, Mundan, and more';

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Dataset',
      name: isHi ? 'हिंदू शुभ मुहूर्त पंचांग 2026–2027 — बेंगलुरु' : 'Hindu Shubh Muhurat Panchang 2026–2027 — Bangalore',
      description: desc,
      url: `${SITE_URL}/${lang}/shubh-muhurat-2026`,
      inLanguage: lang === 'hi' ? 'hi-IN' : 'en-IN',
      temporalCoverage: '2026/2027',
      spatialCoverage: { '@type': 'Place', name: 'Bangalore, Karnataka, India' },
      publisher: { '@type': 'Organization', name: 'PanditGhar.in', url: SITE_URL },
      keywords: isHi
        ? 'विवाह मुहूर्त 2026, गृह प्रवेश मुहूर्त 2026, सत्यनारायण मुहूर्त, हिंदू पंचांग, शुभ मुहूर्त बेंगलुरु'
        : 'Vivah Muhurat 2026, Griha Pravesh Muhurat 2026, Satyanarayan Muhurat, Hindu Panchang, Shubh Muhurat Bangalore',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: isHi ? 'विवाह मुहूर्त 2026 — बेंगलुरु' : 'Vivah Muhurat 2026 — Bangalore',
      description: isHi ? 'उत्तर भारतीय विवाह के लिए 2026 के शुभ मुहूर्त' : 'Auspicious dates for North Indian Vivah (wedding) in 2026',
      startDate: '2026-01-01',
      endDate: '2026-12-31',
      location: { '@type': 'Place', name: 'Bangalore, Karnataka', address: { '@type': 'PostalAddress', addressLocality: 'Bangalore', addressRegion: 'Karnataka', addressCountry: 'IN' } },
      organizer: { '@type': 'Organization', name: 'PanditGhar.in', url: SITE_URL, telephone: '+919329566101' },
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: isHi ? 'गृह प्रवेश मुहूर्त 2026 — बेंगलुरु' : 'Griha Pravesh Muhurat 2026 — Bangalore',
      description: isHi ? 'नए घर में प्रवेश के लिए 2026 के शुभ मुहूर्त' : 'Auspicious dates for Griha Pravesh (housewarming) in 2026',
      startDate: '2026-01-01',
      endDate: '2026-12-31',
      location: { '@type': 'Place', name: 'Bangalore, Karnataka', address: { '@type': 'PostalAddress', addressLocality: 'Bangalore', addressRegion: 'Karnataka', addressCountry: 'IN' } },
      organizer: { '@type': 'Organization', name: 'PanditGhar.in', url: SITE_URL, telephone: '+919329566101' },
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    },
  ];

  const vyaparIconMap: Record<string, React.ElementType> = { Car, Home, Store };

  const tocItems = isHi ? [
    { id: 'muhurat-calendar', label: 'मुहूर्त कैलेंडर' },
    { id: 'satyanarayan', label: 'सत्यनारायण' },
    { id: 'vivah', label: 'विवाह' },
    { id: 'griha-pravesh', label: 'गृह प्रवेश' },
    { id: 'namkaran', label: 'नामकरण' },
    { id: 'mundan', label: 'मुंडन' },
    { id: 'vyapar', label: 'व्यापार' },
    { id: 'abujh', label: 'अबूझ मुहूर्त' },
  ] : [
    { id: 'muhurat-calendar', label: 'Calendar 2026' },
    { id: 'satyanarayan', label: 'Satyanarayan' },
    { id: 'vivah', label: 'Vivah' },
    { id: 'griha-pravesh', label: 'Griha Pravesh' },
    { id: 'namkaran', label: 'Namkaran' },
    { id: 'mundan', label: 'Mundan' },
    { id: 'vyapar', label: 'Business' },
    { id: 'abujh', label: 'Abujh Muhurat' },
  ];

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <SEO
        title={isHi
          ? `विवाह व गृह प्रवेश मुहूर्त 2026 बेंगलुरु | शुभ मुहूर्त पंचांग — PanditGhar.in`
          : `Vivah & Griha Pravesh Muhurat 2026 Bangalore | Shubh Muhurat Panchang — PanditGhar.in`}
        description={isHi
          ? `बेंगलुरु के लिए 2026–2027 में विवाह, गृह प्रवेश, सत्यनारायण, मुंडन, नामकरण के शुभ मुहूर्त। वैदिक ज्योतिष आधारित पंचांग।`
          : `Auspicious Vivah, Griha Pravesh, Satyanarayan, Mundan & Namkaran Muhurat dates for 2026–2027 in Bangalore. Vedic Panchang.`}
        lang={lang}
        path={`/${lang}/shubh-muhurat-2026`}
        schema={schema}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Breadcrumb ── */}
        <Breadcrumb
          items={[{ label: isHi ? 'शुभ मुहूर्त 2026' : 'Shubh Muhurat 2026' }]}
          lang={lang}
          className="mb-6 mt-2"
        />

        {/* ── Hero ── */}
        <ScrollReveal direction="up">
          <div className="text-center mb-10">
            <div className="inline-flex justify-center items-center w-20 h-20 rounded-full bg-accent/20 mb-6 text-accent">
              <CalendarDays className="w-10 h-10" />
            </div>
            <h1 className={`text-3xl md:text-5xl font-display font-bold text-secondary mb-4 leading-tight ${isHi ? 'font-hindi' : ''}`}>
              {title}
            </h1>
            <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isHi ? 'font-hindi' : ''}`}>
              {desc}
            </p>
          </div>
        </ScrollReveal>

        {/* ── Sticky in-page TOC ── */}
        <div className="sticky top-20 z-30 bg-background/95 backdrop-blur border-b border-border mb-10 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 py-3">
          <div className="overflow-x-auto scrollbar-hide">
            <div className={`flex gap-2 min-w-max ${isHi ? 'font-hindi' : ''}`}>
              {tocItems.map(item => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── General Muhurat List ── */}
        <section id="muhurat-calendar" className="mb-16 scroll-mt-40">
          <SectionHeader
            icon={CalendarDays}
            title={isHi ? 'शुभ मुहूर्त कैलेंडर 2026' : 'Shubh Muhurat Calendar 2026'}
            subtitle={isHi ? 'प्रमुख पर्व एवं विशेष तिथियों के मुहूर्त समय' : 'Muhurat timings for major festivals and special dates'}
            isHi={isHi}
          />

          {/* Column headers */}
          <ScrollReveal direction="up" delay={0.08}>
            <div className="hidden md:flex items-center gap-4 px-6 py-3 mb-2 bg-secondary text-secondary-foreground rounded-xl font-display font-semibold text-sm">
              <span className="font-semibold min-w-[110px]">{isHi ? 'तिथि' : 'Date'}</span>
              <span className="text-secondary-foreground/70 min-w-[80px]">{isHi ? 'दिन' : 'Day'}</span>
              <span className="flex-1">{isHi ? 'अवसर' : 'Occasion'}</span>
              <span className="min-w-[130px]">{isHi ? 'मुहूर्त' : 'Time'}</span>
              <span className="min-w-[110px]">{isHi ? 'प्रकार' : 'Type'}</span>
            </div>
          </ScrollReveal>

          <StaggerContainer className="space-y-2" staggerDelay={0.045}>
            {muhurats.map((m, i) => (
              <StaggerItem key={i} className="bg-card rounded-xl border border-border hover:shadow-md hover:border-primary/30 transition-all">
                <div className="flex flex-col sm:flex-wrap md:flex-row items-start sm:items-center gap-1.5 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4">
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <span className="font-semibold sm:min-w-[110px] text-secondary text-sm sm:text-base">{m.date}</span>
                    <span className="text-muted-foreground sm:min-w-[80px] text-sm">{m.day}</span>
                  </div>
                  <span className="flex-1 text-foreground text-sm sm:text-base">{m.occasion}</span>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-primary font-medium text-xs sm:text-sm">{m.time}</span>
                    <span className="bg-accent/20 text-secondary px-3 py-1 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap">{m.type}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.1}>
            <p className={`mt-4 text-center text-muted-foreground text-sm ${isHi ? 'font-hindi' : ''}`}>
              * {isHi
                ? 'मुहूर्त पंचांग पर आधारित हैं। व्यक्तिगत कुण्डली के अनुसार मुहूर्त बदल सकता है।'
                : 'Muhurats are based on general Panchang. Specific timings may vary based on personal Kundali.'}
            </p>
          </ScrollReveal>
        </section>

        <DecorativeDivider />

        {/* ── Section 1 — Satyanarayan Purnima ── */}
        <section id="satyanarayan" className="mb-16 mt-16 scroll-mt-40">
          <SectionHeader
            icon={Moon}
            title={isHi ? '१. श्री सत्यनारायण व्रत — पूर्णिमा तिथियां' : '1. Shri Satyanarayan Vrat — Purnima Dates'}
            subtitle={isHi
              ? 'सत्यनारायण पूजा के लिए पूर्णिमा तिथि एवं प्रदोष काल (सायं) सर्वोत्तम है'
              : 'Purnima tithi and Pradosh Kaal (evening) are most auspicious for Satyanarayan Pooja'}
            isHi={isHi}
          />

          {/* 2026 */}
          <ScrollReveal direction="up" delay={0.05} className="mb-4">
            <h3 className={`text-lg font-display font-bold text-secondary mb-3 ${isHi ? 'font-hindi' : ''}`}>
              {isHi ? '▸ वर्ष 2026' : '▸ Year 2026'}
            </h3>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8" staggerDelay={0.04}>
            {satyanarayan2026.map((p, i) => (
              <StaggerItem key={i} className="bg-card border border-border rounded-xl px-5 py-3 hover:border-primary/30 hover:shadow-sm transition-all">
                <div className="flex items-center gap-3">
                  <span className="text-primary font-bold text-base min-w-[50px]">{p.date}</span>
                  <span className="text-muted-foreground text-sm min-w-[70px]">{isHi ? p.day_hi : p.day_en}</span>
                  <span className={`text-foreground text-sm flex-1 ${isHi ? 'font-hindi' : ''}`}>{isHi ? p.maas_hi : p.maas_en}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* 2027 */}
          <ScrollReveal direction="up" delay={0.05} className="mb-4">
            <h3 className={`text-lg font-display font-bold text-secondary mb-3 ${isHi ? 'font-hindi' : ''}`}>
              {isHi ? '▸ वर्ष 2027' : '▸ Year 2027'}
            </h3>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-2" staggerDelay={0.04}>
            {satyanarayan2027.map((p, i) => (
              <StaggerItem key={i} className="bg-card border border-border rounded-xl px-5 py-3 hover:border-primary/30 hover:shadow-sm transition-all">
                <div className="flex items-center gap-3">
                  <span className="text-primary font-bold text-base min-w-[50px]">{p.date}</span>
                  <span className="text-muted-foreground text-sm min-w-[70px]">{isHi ? p.day_hi : p.day_en}</span>
                  <span className={`text-foreground text-sm flex-1 ${isHi ? 'font-hindi' : ''}`}>{isHi ? p.maas_hi : p.maas_en}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        <DecorativeDivider />

        {/* ── Section 2 — Vivah Muhurat ── */}
        <section id="vivah" className="mb-16 mt-16 scroll-mt-40">
          <SectionHeader
            icon={Heart}
            title={isHi ? '२. शुभ विवाह मुहूर्त' : '2. Shubh Vivah Muhurat (Marriage Dates)'}
            subtitle={isHi
              ? 'हिंदू विवाह के लिए शुक्र एवं गुरु तारे का उदय होना आवश्यक है। चातुर्मास (जुलाई मध्य से नवंबर मध्य) में विवाह वर्जित।'
              : 'Shukra and Guru tare must be ascendant for Hindu marriage. Marriages are prohibited during Chaturmas (mid-July to mid-November).'}
            isHi={isHi}
          />

          {/* 2026 */}
          <ScrollReveal direction="up" delay={0.05} className="mb-4">
            <h3 className={`text-lg font-display font-bold text-secondary mb-3 ${isHi ? 'font-hindi' : ''}`}>
              {isHi ? '▸ वर्ष 2026' : '▸ Year 2026'}
            </h3>
          </ScrollReveal>
          <StaggerContainer className="space-y-2 mb-8" staggerDelay={0.05}>
            {vivahMuhurat2026.map((row, i) => (
              <StaggerItem key={i} className={`rounded-xl border px-5 py-4 transition-all ${
                row.dates.length === 0
                  ? 'bg-destructive/5 border-destructive/20 text-muted-foreground'
                  : 'bg-card border-border hover:border-primary/30 hover:shadow-sm'
              }`}>
                <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                  <span className={`font-display font-bold text-secondary min-w-[130px] text-sm ${isHi ? 'font-hindi' : ''}`}>
                    {isHi ? row.month_hi : row.month_en}
                  </span>
                  <div className="flex-1">
                    {row.dates.length > 0
                      ? <DateChips dates={row.dates} />
                      : <span className={`text-sm text-muted-foreground italic ${isHi ? 'font-hindi' : ''}`}>
                          {isHi ? 'विवाह वर्जित' : 'Marriages prohibited'}
                        </span>
                    }
                    {row.note_en && (
                      <p className={`text-xs text-muted-foreground mt-1.5 ${isHi ? 'font-hindi' : ''}`}>
                        ⚠ {isHi ? row.note_hi : row.note_en}
                      </p>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* 2027 */}
          <ScrollReveal direction="up" delay={0.05} className="mb-4">
            <h3 className={`text-lg font-display font-bold text-secondary mb-3 ${isHi ? 'font-hindi' : ''}`}>
              {isHi ? '▸ वर्ष 2027 (प्रमुख तिथियां)' : '▸ Year 2027 (Key Dates)'}
            </h3>
          </ScrollReveal>
          <StaggerContainer className="space-y-2" staggerDelay={0.05}>
            {vivahMuhurat2027.map((row, i) => (
              <StaggerItem key={i} className="bg-card border border-border rounded-xl px-5 py-4 hover:border-primary/30 hover:shadow-sm transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                  <span className={`font-display font-bold text-secondary min-w-[130px] text-sm ${isHi ? 'font-hindi' : ''}`}>
                    {isHi ? row.month_hi : row.month_en}
                  </span>
                  <DateChips dates={row.dates} />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        <DecorativeDivider />

        {/* ── Section 3 — Griha Pravesh ── */}
        <section id="griha-pravesh" className="mb-16 mt-16 scroll-mt-40">
          <SectionHeader
            icon={Home}
            title={isHi ? '३. नूतन गृह प्रवेश मुहूर्त 2026' : '3. Nutan Griha Pravesh Muhurat 2026'}
            subtitle={isHi
              ? 'नए घर में प्रवेश रोहिणी, मृगशिरा, अनुराधा आदि शुभ नक्षत्रों में करें'
              : 'Enter a new home during auspicious nakshatras: Rohini, Mrigashira, Anuradha, etc.'}
            isHi={isHi}
          />

          <StaggerContainer className="space-y-2 mb-5" staggerDelay={0.05}>
            {grahaPraveshMuhurat2026.map((row, i) => (
              <StaggerItem key={i} className="bg-card border border-border rounded-xl px-5 py-4 hover:border-primary/30 hover:shadow-sm transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                  <span className={`font-display font-bold text-secondary min-w-[130px] text-sm ${isHi ? 'font-hindi' : ''}`}>
                    {isHi ? row.month_hi : row.month_en}
                  </span>
                  <DateChips dates={row.dates} />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal direction="up" delay={0.05}>
            <div className={`bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl px-5 py-4 text-sm text-amber-800 dark:text-amber-300 ${isHi ? 'font-hindi' : ''}`}>
              ⚠ {isHi
                ? 'खरमास, होलाष्टक, पितृ पक्ष और चातुर्मास में गृह प्रवेश नहीं किया जाता है।'
                : 'Griha Pravesh is not performed during Kharmas, Holashtak, Pitru Paksha, or Chaturmas.'}
            </div>
          </ScrollReveal>
        </section>

        <DecorativeDivider />

        {/* ── Section 4 — Namkaran / Annaprashan ── */}
        <section id="namkaran" className="mb-16 mt-16 scroll-mt-40">
          <SectionHeader
            icon={Baby}
            title={isHi ? '४. नामकरण एवं अन्नप्राशन संस्कार' : '4. Namkaran & Annaprashan Sanskar'}
            isHi={isHi}
          />

          <StaggerContainer className="space-y-4" staggerDelay={0.07}>
            {[
              {
                label_en: 'Auspicious Days (Vaar)',
                label_hi: 'शुभ वार',
                value_en: namkaranRules.shubhVaar.en,
                value_hi: namkaranRules.shubhVaar.hi,
                color: 'border-green-300 dark:border-green-700 bg-green-50 dark:bg-green-950/20',
                labelColor: 'text-green-700 dark:text-green-400',
              },
              {
                label_en: 'Auspicious Nakshatras',
                label_hi: 'शुभ नक्षत्र',
                value_en: namkaranRules.shubhNakshatra.en,
                value_hi: namkaranRules.shubhNakshatra.hi,
                color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20',
                labelColor: 'text-blue-700 dark:text-blue-400',
              },
              {
                label_en: 'Prohibited Periods',
                label_hi: 'वर्जित समय',
                value_en: namkaranRules.varjit.en,
                value_hi: namkaranRules.varjit.hi,
                color: 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/20',
                labelColor: 'text-red-700 dark:text-red-400',
              },
            ].map((item, i) => (
              <StaggerItem key={i} className={`rounded-xl border px-5 py-4 ${item.color}`}>
                <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${item.labelColor}`}>
                  {isHi ? item.label_hi : item.label_en}
                </p>
                <p className={`text-sm text-foreground leading-relaxed ${isHi ? 'font-hindi' : ''}`}>
                  {isHi ? item.value_hi : item.value_en}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        <DecorativeDivider />

        {/* ── Section 5 — Mundan Sanskar ── */}
        <section id="mundan" className="mb-16 mt-16 scroll-mt-40">
          <SectionHeader
            icon={Scissors}
            title={isHi ? '५. मुंडन संस्कार (चूड़ाकर्म)' : '5. Mundan Sanskar (Chudakarana)'}
            isHi={isHi}
          />

          <StaggerContainer className="space-y-4" staggerDelay={0.07}>
            {[
              {
                label_en: 'Rule',
                label_hi: 'नियम',
                value_en: mundanRules.niyam.en,
                value_hi: mundanRules.niyam.hi,
                color: 'border-border bg-card',
                labelColor: 'text-muted-foreground',
              },
              {
                label_en: 'Best Months',
                label_hi: 'सर्वोत्तम महीने',
                value_en: mundanRules.shubhMaah.en,
                value_hi: mundanRules.shubhMaah.hi,
                color: 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20',
                labelColor: 'text-green-700 dark:text-green-400',
              },
              {
                label_en: 'Abujh Muhurat (No Panchang needed)',
                label_hi: 'अबूझ मुहूर्त (बिना पंचांग)',
                value_en: mundanRules.abujhMuhurat.en,
                value_hi: mundanRules.abujhMuhurat.hi,
                color: 'border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20',
                labelColor: 'text-amber-700 dark:text-amber-400',
              },
            ].map((item, i) => (
              <StaggerItem key={i} className={`rounded-xl border px-5 py-4 ${item.color}`}>
                <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${item.labelColor}`}>
                  {isHi ? item.label_hi : item.label_en}
                </p>
                <p className={`text-sm text-foreground leading-relaxed ${isHi ? 'font-hindi' : ''}`}>
                  {isHi ? item.value_hi : item.value_en}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        <DecorativeDivider />

        {/* ── Section 6 — Vyapar / Vahan / Sampatti ── */}
        <section id="vyapar" className="mb-16 mt-16 scroll-mt-40">
          <SectionHeader
            icon={Landmark}
            title={isHi ? '६. नया व्यापार, वाहन एवं संपत्ति मुहूर्त' : '6. New Business, Vehicle & Property Muhurat'}
            isHi={isHi}
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4" staggerDelay={0.08}>
            {vyaparRules.map((rule, i) => {
              const Icon = vyaparIconMap[rule.iconName] ?? Store;
              return (
                <StaggerItem key={i} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0">
                      <Icon className="w-5 h-5" />
                    </span>
                    <h3 className={`font-display font-bold text-secondary text-sm leading-tight ${isHi ? 'font-hindi' : ''}`}>
                      {isHi ? rule.type_hi : rule.type_en}
                    </h3>
                  </div>
                  <p className={`text-sm text-muted-foreground leading-relaxed ${isHi ? 'font-hindi' : ''}`}>
                    {isHi ? rule.rule_hi : rule.rule_en}
                  </p>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </section>

        <DecorativeDivider />

        {/* ── Section 7 — Abujh Muhurat ── */}
        <section id="abujh" className="mb-8 mt-16 scroll-mt-40">
          <SectionHeader
            icon={Star}
            title={isHi ? '७. अबूझ मुहूर्त 2026–2027' : '7. Abujh Muhurat 2026–2027'}
            subtitle={isHi
              ? 'इन दिनों में बिना पंचांग देखे कोई भी शुभ कार्य किया जा सकता है'
              : 'On these days, any auspicious event can be performed without consulting the Panchang'}
            isHi={isHi}
          />

          <StaggerContainer className="space-y-3" staggerDelay={0.07}>
            {abujhMuhuratList.map((item, i) => (
              <StaggerItem key={i} className="bg-card border border-border rounded-2xl px-6 py-5 hover:border-primary/30 hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/20 text-accent font-bold text-sm shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className={`font-display font-bold text-secondary mb-1 ${isHi ? 'font-hindi' : ''}`}>
                      {isHi ? item.name_hi : item.name_en}
                    </h3>
                    <p className={`text-sm text-muted-foreground ${isHi ? 'font-hindi' : ''}`}>
                      {isHi ? item.use_hi : item.use_en}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* ── Footer note ── */}
        <ScrollReveal delay={0.1}>
          <div className={`mt-10 text-center text-muted-foreground text-sm ${isHi ? 'font-hindi' : ''}`}>
            * {isHi
              ? 'सभी मुहूर्त सामान्य पंचांग पर आधारित हैं। व्यक्तिगत कुण्डली के अनुसार मुहूर्त बदल सकता है। विशेष मुहूर्त के लिए हमारे विद्वान पंडित जी से परामर्श करें।'
              : 'All muhurats are based on general Panchang. Timings may vary based on individual Kundali. Consult our learned Pandit Ji for personalised muhurat.'}
          </div>
        </ScrollReveal>

      </div>
      <DecorativeDivider />
    </div>
  );
}
