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

const areaTempleContext: Record<string, { temple: string; templeHi: string; fact: string; factHi: string }> = {
  "malleshwaram":      { temple: "Kadu Malleshwara Temple", templeHi: "काडु मल्लेश्वरा मंदिर", fact: "Malleshwaram is Bangalore's oldest Brahmin neighbourhood — home to the 400-year-old Kadu Malleshwara Shiva temple and dozens of smaller shrines. Conducting Vedic Samskaras here carries generations of unbroken tradition.", factHi: "मल्लेश्वरम बेंगलुरु का सबसे पुराना ब्राह्मण मोहल्ला है — 400 वर्ष पुराने काडु मल्लेश्वरा शिव मंदिर और दर्जनों छोटे मंदिरों का घर। यहाँ वैदिक संस्कार करना पीढ़ियों की अटूट परंपरा को आगे बढ़ाना है।" },
  "basavanagudi":      { temple: "Dodda Ganesha Temple & Bull Temple (Nandi)", templeHi: "दोड्डा गणेश मंदिर और नंदी मंदिर", fact: "Basavanagudi is famous for the Dodda Ganesha (massive 18-foot Ganesha idol) and the ancient Bull Temple, where Nandi has been worshipped since the Kempegowda era. Any Ganesh Puja or major Samskara performed here draws on centuries of sacred vibrations.", factHi: "बसवनगुडी अपने दोड्डा गणेश (18 फुट की विशाल गणेश मूर्ति) और प्राचीन नंदी मंदिर के लिए प्रसिद्ध है, जहाँ केम्पेगौड़ा काल से नंदी की पूजा होती है। यहाँ गणेश पूजा या कोई बड़ा संस्कार करना सदियों की पवित्र ऊर्जा का आह्वान करना है।" },
  "jayanagar":         { temple: "Sri Ramanjaneya Swamy Temple & Jayanagar Navaratri Mandal", templeHi: "श्री रामांजनेय स्वामी मंदिर", fact: "Jayanagar is one of Bangalore's most family-oriented Hindu neighbourhoods, with the Sri Ramanjaneya Temple on 9th Block remaining a centre of Vedic activity. Families here have maintained the tradition of home pujas for over 50 years.", factHi: "जयनगर बेंगलुरु के सबसे पारिवारिक हिंदू मोहल्लों में से एक है, जहाँ 9वें ब्लॉक का श्री रामांजनेय मंदिर वैदिक गतिविधि का केंद्र है। यहाँ के परिवारों ने 50 से अधिक वर्षों से घर में पूजा की परंपरा बनाए रखी है।" },
  "rajajinagar":       { temple: "Sri Srinivasa Perumal Temple", templeHi: "श्री श्रीनिवास पेरुमाल मंदिर", fact: "Rajajinagar has a long-standing North Indian community and hosts one of Bangalore's most active Puja Samitis. Satyanarayan and Navratri celebrations here are legendary in scale and bhakti.", factHi: "राजाजीनगर में उत्तर भारतीय समुदाय की लंबी उपस्थिति है और बेंगलुरु की सबसे सक्रिय पूजा समितियों में से एक है। यहाँ सत्यनारायण और नवरात्रि उत्सव अपने पैमाने और भक्ति के लिए प्रसिद्ध हैं।" },
  "koramangala":       { temple: "Sri Koramangala Shiva Temple", templeHi: "कोरमंगला शिव मंदिर", fact: "Koramangala sits near the ancient Koramangala Shiva temple that gives the area its name. Despite being a modern neighbourhood, it has a strong community of North Indian families who observe every Samskara with traditional depth.", factHi: "कोरमंगला उस प्राचीन शिव मंदिर के पास बसा है जिसने इस क्षेत्र को नाम दिया। आधुनिक पड़ोस होने के बावजूद यहाँ उत्तर भारतीय परिवारों का एक सशक्त समुदाय है जो हर संस्कार को पारंपरिक गहराई के साथ मनाता है।" },
  "indiranagar":       { temple: "Sri Rama Temple (Indiranagar 100 Feet Road)", templeHi: "श्री राम मंदिर (इंदिरानगर)", fact: "Indiranagar has been home to a vibrant North Indian community since the 1980s. The Sri Rama Temple on 100 Feet Road serves as the spiritual anchor, and home pujas in this area carry forward the Ramayana-inspired bhakti tradition.", factHi: "इंदिरानगर 1980 के दशक से जीवंत उत्तर भारतीय समुदाय का घर रहा है। 100 फीट रोड पर श्री राम मंदिर आध्यात्मिक आधार है, और यहाँ घर में होने वाली पूजाएं रामायण-प्रेरित भक्ति परंपरा को आगे बढ़ाती हैं।" },
  "whitefield":        { temple: "Sri Siddha Ganapathi Temple", templeHi: "श्री सिद्ध गणपति मंदिर", fact: "Whitefield has grown rapidly and now hosts a large North Indian diaspora. The Sri Siddha Ganapathi temple and numerous apartment community pujas make it one of Bangalore's most active areas for home-based Vedic rituals.", factHi: "व्हाइटफील्ड तेजी से बढ़ा है और अब बड़ी उत्तर भारतीय आबादी का घर है। श्री सिद्ध गणपति मंदिर और अनेक अपार्टमेंट सामुदायिक पूजाएं इसे घर-आधारित वैदिक अनुष्ठानों के लिए बेंगलुरु के सबसे सक्रिय क्षेत्रों में से एक बनाती हैं।" },
  "hsr-layout":        { temple: "Sri Venkateshwara Temple (HSR Sector 1)", templeHi: "श्री वेंकटेश्वर मंदिर", fact: "HSR Layout is a planned township with a strong Hindu community that celebrates every major Panchang date with collective pujas. Sri Venkateshwara temple in Sector 1 is the focal point of all major community celebrations.", factHi: "एचएसआर लेआउट एक नियोजित टाउनशिप है जहाँ मजबूत हिंदू समुदाय हर प्रमुख पंचांग तिथि को सामूहिक पूजाओं के साथ मनाता है। सेक्टर 1 में श्री वेंकटेश्वर मंदिर सभी प्रमुख सामुदायिक उत्सवों का केंद्र बिंदु है।" },
  "electronic-city":   { temple: "Sri Eswara Temple (Electronic City Phase 2)", templeHi: "श्री ईश्वर मंदिर (इलेक्ट्रॉनिक सिटी)", fact: "Electronic City houses thousands of North Indian tech families who maintain the full cycle of Samskaras — from Namkaran to Vivah — with great devotion. The Sri Eswara temple in Phase 2 anchors the community's spiritual life.", factHi: "इलेक्ट्रॉनिक सिटी में हजारों उत्तर भारतीय तकनीकी परिवार रहते हैं जो नामकरण से विवाह तक सभी संस्कार बड़ी श्रद्धा के साथ मनाते हैं। फेज 2 में श्री ईश्वर मंदिर समुदाय के आध्यात्मिक जीवन का आधार है।" },
  "jp-nagar":          { temple: "Srinivasa Swamy Temple (JP Nagar 3rd Phase)", templeHi: "श्रीनिवास स्वामी मंदिर", fact: "JP Nagar is a family-oriented neighbourhood with deep roots in South Indian temple culture. The Srinivasa Swamy temple in 3rd Phase is active all year with North Indian families who have made it their spiritual home.", factHi: "जेपी नगर एक पारिवारिक मोहल्ला है जिसकी दक्षिण भारतीय मंदिर संस्कृति में गहरी जड़ें हैं। 3रे फेज में श्रीनिवास स्वामी मंदिर साल भर उत्तर भारतीय परिवारों के साथ सक्रिय रहता है।" },
};

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
  const templeCtx = areaTempleContext[params.area];

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
          ? `${area.name} में ${service.hiTitle} — पंडित बुकिंग | PanditGhar.in`
          : `${service.enTitle} in ${area.name}, Bangalore — Pandit Booking | PanditGhar.in`}
        description={isHi
          ? `${area.name}, बेंगलुरु में ${service.hiTitle} के लिए प्रामाणिक उत्तर भारतीय पंडित। शास्त्रीय वैदिक विधि। पूरी पूजा सामग्री सहित।`
          : `Authentic North Indian Pandit for ${service.enTitle} in ${area.name}, Bangalore. Shastreey Vedic rituals. Complete samagri included.`}
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

        {/* ── Spiritual Context Block ── */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="mb-12 bg-gradient-to-br from-secondary/5 via-background to-accent/5 border border-accent/30 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-accent font-hindi text-lg">ॐ</span>
              <h2 className={`text-lg font-bold text-secondary ${isHi ? 'font-hindi' : ''}`}>
                {isHi
                  ? `${area.name} में ${service.hiTitle} — शास्त्रीय महत्त्व`
                  : `${service.enTitle} in ${area.name} — Scriptural Significance`}
              </h2>
            </div>
            <blockquote className="font-hindi text-base md:text-lg text-secondary font-semibold leading-relaxed whitespace-pre-line border-l-4 border-accent pl-4 mb-2">
              {service.id === 'vivah'
                ? 'शुभे मुहूर्ते विधिवत् कन्यादानं प्रशस्यते।\nसप्तपद्यां कृते विप्र सा भार्या नात्र संशयः॥'
                : service.id === 'rudrabhishek'
                ? 'अभिषेकं प्रकुर्वीत शिवलिङ्गस्य भक्तितः।\nश्रीरुद्रमन्त्रपाठेन सर्वपापैः प्रमुच्यते॥'
                : 'गृहं प्रविश्य पूजयेत् वास्तुदेवं विधानतः।\nसर्वसिद्धिप्रदं देवं सर्वदोषविनाशनम्॥'}
            </blockquote>
            <p className="text-xs font-semibold text-primary pl-4 mb-4">
              — {isHi ? service.shastreeyRef.split('(')[0].replace('प्रमाण: ', '').trim() : service.shastreeyRef.match(/\(([^)]+)\)/)?.[1] ?? service.shastreeyRef}
            </p>
            <p className={`text-sm text-muted-foreground leading-relaxed ${isHi ? 'font-hindi' : ''}`}>
              {templeCtx
                ? (isHi ? templeCtx.factHi : templeCtx.fact)
                : (isHi
                    ? `शास्त्रों के अनुसार ${service.hiTitle} एक अनिवार्य संस्कार है। बेंगलुरु के ${area.name} में बसे हमारे उत्तर भारतीय परिवार इस पूजा को विधिवत् कराकर अपने घर में देव कृपा और समृद्धि को आमंत्रित करते हैं। पंडित जी गृह्य सूत्रों एवं पुराणों के अनुसार पूर्ण विधि संपन्न कराते हैं।`
                    : `According to the Shastras, ${service.enTitle} is an essential rite. North Indian families settled in ${area.name}, Bangalore invite divine grace and prosperity into their homes by performing this puja correctly. Pandit Ji conducts the complete ceremony as per the Grihya Sutras and Puranas.`
                  )
              }
            </p>
            {templeCtx && (
              <p className={`text-xs text-primary/70 mt-3 font-semibold ${isHi ? 'font-hindi' : ''}`}>
                {isHi ? `📍 ${area.name} का प्रसिद्ध मंदिर: ${templeCtx.templeHi}` : `📍 Notable temple in ${area.name}: ${templeCtx.temple}`}
              </p>
            )}
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
