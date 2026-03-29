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
  "marathahalli":      { temple: "Sri Muneshwara Temple", templeHi: "श्री मुनेश्वर मंदिर", fact: "Marathahalli is one of Bangalore's largest IT corridors and home to tens of thousands of North Indian families. The Sri Muneshwara temple has served as the spiritual anchor for this fast-growing community, with home pujas for Griha Pravesh and Satyanarayan being the most frequently booked services.", factHi: "मराठाहल्ली बेंगलुरु के सबसे बड़े आईटी गलियारों में से एक है और दसियों हजार उत्तर भारतीय परिवारों का घर है। श्री मुनेश्वर मंदिर इस तेजी से बढ़ते समुदाय के लिए आध्यात्मिक आधार रहा है।" },
  "sarjapur-road":     { temple: "Sri Venkataramana Swamy Temple", templeHi: "श्री वेंकटरामण स्वामी मंदिर", fact: "Sarjapur Road has one of Bangalore's fastest-growing North Indian communities, driven by tech parks and new apartment complexes. Sri Venkataramana Swamy temple in Carmelram serves as the spiritual hub for families who observe all major Samskaras.", factHi: "सर्जापुर रोड में बेंगलुरु के सबसे तेजी से बढ़ते उत्तर भारतीय समुदायों में से एक है। कार्मेलराम में श्री वेंकटरामण स्वामी मंदिर उन परिवारों के लिए आध्यात्मिक केंद्र है जो सभी प्रमुख संस्कार मनाते हैं।" },
  "btm-layout":        { temple: "Sri Ganesha Temple (BTM 2nd Stage)", templeHi: "श्री गणेश मंदिर (बीटीएम 2रा चरण)", fact: "BTM Layout is a well-established Bangalore neighbourhood with a large Kannadiga Hindu community alongside a growing North Indian population. The Ganesha temple in 2nd Stage is the focal point for all puja events and Navratri celebrations.", factHi: "बीटीएम लेआउट एक स्थापित बेंगलुरु मोहल्ला है जिसमें बड़े कन्नड़िगा हिंदू समुदाय के साथ बढ़ती उत्तर भारतीय आबादी है। दूसरे चरण का गणेश मंदिर सभी पूजा कार्यक्रमों और नवरात्रि उत्सव का केंद्र बिंदु है।" },
  "bannerghatta-road": { temple: "Sri Hanuman Temple (Bannerghatta Road)", templeHi: "श्री हनुमान मंदिर (बन्नेरघट्टा रोड)", fact: "Bannerghatta Road is situated close to the ancient Bannerghatta National Park, which has its own heritage Shiva shrine dating to the Hoysala period. The Sri Hanuman temple on the main road serves hundreds of North Indian families who observe Mangalavara Hanuman Puja weekly.", factHi: "बन्नेरघट्टा रोड प्राचीन बन्नेरघट्टा राष्ट्रीय उद्यान के पास है, जिसमें होयसाल काल का अपना विरासत शिव मंदिर है। मुख्य सड़क पर श्री हनुमान मंदिर सैकड़ों उत्तर भारतीय परिवारों की सेवा करता है।" },
  "kr-puram":          { temple: "Sri Narasimha Swamy Temple (Krishnarajapuram)", templeHi: "श्री नरसिंह स्वामी मंदिर (कृष्णराजपुरम)", fact: "KR Puram (Krishnarajapuram) is one of Bangalore's oldest areas, with the Sri Narasimha Swamy temple serving the North Indian community for decades. Its proximity to the railway junction has made it a hub for migrant families who maintain rigorous puja traditions.", factHi: "केआर पुरम (कृष्णराजपुरम) बेंगलुरु के सबसे पुराने क्षेत्रों में से एक है, जहाँ श्री नरसिंह स्वामी मंदिर दशकों से उत्तर भारतीय समुदाय की सेवा कर रहा है।" },
  "hennur":            { temple: "Sri Rama Temple (Hennur Main Road)", templeHi: "श्री राम मंदिर (हेन्नूर मुख्य सड़क)", fact: "Hennur has grown rapidly as a residential area with many North Indian families from Uttar Pradesh, Bihar, and Rajasthan. The Sri Rama temple on Hennur Main Road hosts regular Satyanarayan Kathas and Ram Navami celebrations drawing the entire community.", factHi: "हेन्नूर उत्तर प्रदेश, बिहार और राजस्थान के कई उत्तर भारतीय परिवारों के साथ एक आवासीय क्षेत्र के रूप में तेजी से बढ़ा है।" },
  "banashankari":      { temple: "Sri Banashankari Temple (Ancient Shakti Shrine)", templeHi: "श्री बनशंकरी मंदिर (प्राचीन शक्ति मंदिर)", fact: "Banashankari is named after the ancient Banashankari Amma temple — one of Bangalore's most revered Shakti shrines, dating back to at least the 17th century CE. This deeply spiritual neighbourhood is the most auspicious area in Bangalore for Durga Puja, Navratri, and all Shakti-related ceremonies.", factHi: "बनशंकरी का नाम प्राचीन बनशंकरी अम्मा मंदिर से पड़ा है — बेंगलुरु के सबसे पूजनीय शक्ति मंदिरों में से एक, जो कम से कम 17वीं शताब्दी ईस्वी से है। यह गहरा आध्यात्मिक मोहल्ला दुर्गा पूजा, नवरात्रि और सभी शक्ति संबंधित अनुष्ठानों के लिए बेंगलुरु का सबसे शुभ क्षेत्र है।" },
  "vijayanagar":       { temple: "Sri Yoganarasimha Swamy Temple", templeHi: "श्री योगनरसिंह स्वामी मंदिर", fact: "Vijayanagar is a well-established residential area named after the Vijayanagara Empire — one of the greatest Hindu kingdoms in history. The Sri Yoganarasimha Swamy temple has been a spiritual anchor for the area's large Kannadiga and growing North Indian community.", factHi: "विजयनगर एक स्थापित आवासीय क्षेत्र है जिसका नाम विजयनगर साम्राज्य — इतिहास के सबसे महान हिंदू राज्यों में से एक — के नाम पर रखा गया है। श्री योगनरसिंह स्वामी मंदिर क्षेत्र के बड़े कन्नड़िगा और बढ़ते उत्तर भारतीय समुदाय के लिए आध्यात्मिक आधार रहा है।" },
  "ulsoor":            { temple: "Sri Someshwara Temple (Ulsoor Lake)", templeHi: "श्री सोमेश्वर मंदिर (उल्सूर झील)", fact: "Ulsoor houses the ancient Sri Someshwara temple (dedicated to Shiva) on the banks of the beautiful Ulsoor Lake. This historic area has been a centre of Brahmin culture since the Mysore Maharaja period. The lake-side location makes Shraddha/Tarpan ceremonies particularly significant here.", factHi: "उल्सूर में सुंदर उल्सूर झील के किनारे प्राचीन श्री सोमेश्वर मंदिर (शिव को समर्पित) है। यह ऐतिहासिक क्षेत्र मैसूर महाराजा काल से ब्राह्मण संस्कृति का केंद्र रहा है।" },
  "bellandur":         { temple: "Sri Anjaneya Temple (Bellandur)", templeHi: "श्री अंजनेय मंदिर (बेल्लंदूर)", fact: "Bellandur is a rapidly growing tech neighbourhood with a significant North Indian population, many of whom observe Hanuman Puja and Satyanarayan Katha regularly in their homes. The Sri Anjaneya temple near Bellandur Lake is the spiritual centre for this community.", factHi: "बेल्लंदूर एक तेजी से बढ़ता हुआ तकनीकी मोहल्ला है जहाँ महत्वपूर्ण उत्तर भारतीय आबादी है जो नियमित रूप से हनुमान पूजा और सत्यनारायण कथा करती है।" },
  "kadugodi":          { temple: "Sri Venkataramana Temple (Kadugodi)", templeHi: "श्री वेंकटरामण मंदिर (काडुगोडी)", fact: "Kadugodi is adjacent to Whitefield and shares its large North Indian population. The Sri Venkataramana temple serves as the spiritual anchor for Kadugodi's growing community of families from Rajasthan, UP, and Bihar who maintain traditional puja practices.", factHi: "काडुगोडी व्हाइटफील्ड से सटा हुआ है और इसकी बड़ी उत्तर भारतीय आबादी है। श्री वेंकटरामण मंदिर राजस्थान, यूपी और बिहार के परिवारों के बढ़ते समुदाय के लिए आध्यात्मिक आधार है।" },
  "hoodi":             { temple: "Sri Hanuman Temple (Hoodi Village)", templeHi: "श्री हनुमान मंदिर (हूडी गाँव)", fact: "Hoodi, adjacent to KR Puram and Whitefield, has the ancient Hoodi village Hanuman temple that predates modern Bangalore. As new apartment complexes bring North Indian families to the area, this temple has become a gathering point for all community pujas.", factHi: "केआर पुरम और व्हाइटफील्ड से सटा हूडी में प्राचीन हूडी गाँव हनुमान मंदिर है जो आधुनिक बेंगलुरु से पुराना है। नए अपार्टमेंट परिसर उत्तर भारतीय परिवारों को यहाँ लाते हैं।" },
  "nagarbhavi":        { temple: "Sri Nanjundeshwara Temple", templeHi: "श्री नंजुन्देश्वर मंदिर", fact: "Nagarbhavi is a quiet, family-oriented area in West Bangalore with a mixed community of Kannada-speaking families and a growing North Indian presence. The Sri Nanjundeshwara temple has been a local institution for generations and hosts regular Rudrabhishek and Satyanarayan events.", factHi: "नागरभवि पश्चिम बेंगलुरु में एक शांत, पारिवारिक क्षेत्र है। श्री नंजुन्देश्वर मंदिर पीढ़ियों से एक स्थानीय संस्था रही है और नियमित रुद्राभिषेक और सत्यनारायण कार्यक्रम आयोजित करती है।" },
  "kengeri":           { temple: "Sri Anjaneya Temple (Kengeri)", templeHi: "श्री अंजनेय मंदिर (केंगेरी)", fact: "Kengeri is a growing suburb in Southwest Bangalore with the ancient Sri Anjaneya temple being the spiritual hub for the area. The Mysore Road connectivity has brought many North Indian families to Kengeri who maintain a strong tradition of home pujas.", factHi: "केंगेरी दक्षिण-पश्चिम बेंगलुरु में एक बढ़ता उपनगर है जहाँ प्राचीन श्री अंजनेय मंदिर क्षेत्र का आध्यात्मिक केंद्र है। मैसूर रोड की कनेक्टिविटी ने कई उत्तर भारतीय परिवारों को केंगेरी में लाया है।" },
  "bommanahalli":      { temple: "Sri Venkateshwara Temple (Bommanahalli)", templeHi: "श्री वेंकटेश्वर मंदिर (बोम्मनहल्ली)", fact: "Bommanahalli is an emerging residential area near Electronic City with a rapidly growing North Indian community. The Sri Venkateshwara temple serves as the community's spiritual gathering point for all major festivals and Samskaras.", factHi: "बोम्मनहल्ली इलेक्ट्रॉनिक सिटी के पास एक उभरता आवासीय क्षेत्र है जहाँ तेजी से बढ़ता उत्तर भारतीय समुदाय है। श्री वेंकटेश्वर मंदिर सभी प्रमुख त्योहारों और संस्कारों के लिए समुदाय का आध्यात्मिक सभास्थल है।" },
  "rr-nagar":          { temple: "Sri Lakshmi Narasimha Temple (RR Nagar)", templeHi: "श्री लक्ष्मी नरसिंह मंदिर (आरआर नगर)", fact: "Rajajinagar Extension (RR Nagar) has a well-established North Indian community that has maintained its puja traditions for over three decades. The Sri Lakshmi Narasimha temple is particularly active during Navratri and Diwali, drawing families from across West Bangalore.", factHi: "राजाजीनगर एक्सटेंशन (आरआर नगर) में एक सुस्थापित उत्तर भारतीय समुदाय है जिसने तीन दशकों से अपनी पूजा परंपराओं को बनाए रखा है।" },
  "domlur":            { temple: "Sri Ishwara Temple (Domlur)", templeHi: "श्री ईश्वर मंदिर (डोम्लूर)", fact: "Domlur is a heritage neighbourhood close to the Defence areas of Bangalore, with a mix of South Indian and North Indian families. The Sri Ishwara temple in Domlur Layout has a rich history and hosts regular Rudrabhishek and Mahashivaratri events.", factHi: "डोम्लूर बेंगलुरु के रक्षा क्षेत्रों के पास एक विरासत मोहल्ला है। डोम्लूर लेआउट में श्री ईश्वर मंदिर का एक समृद्ध इतिहास है और नियमित रुद्राभिषेक और महाशिवरात्रि कार्यक्रम आयोजित करता है।" },
  "cv-raman-nagar":    { temple: "Sri Rama Temple (CV Raman Nagar)", templeHi: "श्री राम मंदिर (सीवी रमण नगर)", fact: "CV Raman Nagar, named after the Nobel Laureate, is a residential area adjacent to HAL and home to defence families who maintain traditional North Indian puja practices. The Sri Rama temple here is the focal point for Ram Navami and Hanuman Jayanti celebrations.", factHi: "नोबेल पुरस्कार विजेता के नाम पर सीवी रमण नगर, एचएएल के पास एक आवासीय क्षेत्र है और उन रक्षा परिवारों का घर है जो पारंपरिक उत्तर भारतीय पूजा प्रथाओं को बनाए रखते हैं।" },
  "banaswadi":         { temple: "Sri Ganesha Temple (Banaswadi Main Road)", templeHi: "श्री गणेश मंदिर (बनासवाडी मुख्य सड़क)", fact: "Banaswadi is a vibrant North and East Bangalore neighbourhood with a significant Marwari and UP-origin community. Ganesh Chaturthi and Diwali celebrations here are among Bangalore's most elaborate, with home Lakshmi Puja being a community-wide tradition.", factHi: "बनासवाडी उत्तर और पूर्व बेंगलुरु का एक जीवंत मोहल्ला है जिसमें महत्वपूर्ण मारवाड़ी और यूपी मूल समुदाय है।" },
  "thanisandra":       { temple: "Sri Venkateshwara Temple (Thanisandra)", templeHi: "श्री वेंकटेश्वर मंदिर (थनीसंद्र)", fact: "Thanisandra is a fast-developing area in North Bangalore with a large influx of IT families from all parts of India. The Sri Venkateshwara temple serves the growing Hindu community and is particularly active during Satyanarayan Puja seasons.", factHi: "थनीसंद्र उत्तर बेंगलुरु का एक तेजी से विकसित होता क्षेत्र है जहाँ भारत के सभी हिस्सों से बड़ी संख्या में आईटी परिवार आए हैं।" },
  "devanahalli":       { temple: "Sri Venkataramana Swamy Temple (Devanahalli Fort)", templeHi: "श्री वेंकटरामण स्वामी मंदिर (देवनहल्ली किला)", fact: "Devanahalli is the birthplace of Hyder Ali and home to the historic Devanahalli Fort with its ancient Sri Venkataramana Swamy temple dating to the Vijayanagara period. This deeply historic area is now home to many families near the International Airport who observe traditional Samskaras.", factHi: "देवनहल्ली हैदर अली की जन्मस्थली है और ऐतिहासिक देवनहल्ली किले का घर है, जिसमें विजयनगर काल का प्राचीन श्री वेंकटरामण स्वामी मंदिर है।" },
  "doddaballapura-road": { temple: "Sri Lakshmi Narayana Temple", templeHi: "श्री लक्ष्मी नारायण मंदिर", fact: "The Doddaballapur Road corridor, running north from Yelahanka, has ancient temples at multiple villages along the route. Families who have settled in new townships here maintain strong North Indian puja traditions, particularly Satyanarayan Katha and Griha Pravesh.", factHi: "दोड्डाबल्लापुर रोड गलियारा, येलहंका से उत्तर में चलता है, जिसमें मार्ग के साथ कई गाँवों में प्राचीन मंदिर हैं। यहाँ नई टाउनशिप में बसे परिवार मजबूत उत्तर भारतीय पूजा परंपराओं को बनाए रखते हैं।" },
  "hoskote":           { temple: "Sri Someshwara Temple (Hoskote Heritage Shrine)", templeHi: "श्री सोमेश्वर मंदिर (होस्कोटे विरासत मंदिर)", fact: "Hoskote has the ancient Sri Someshwara temple — a Chalukya-era Shiva shrine over 1,000 years old. This historic town east of Bangalore has a rich Vedic heritage, and families in the industrial areas here regularly host home pujas with our Pandit Ji.", factHi: "होस्कोटे में प्राचीन श्री सोमेश्वर मंदिर है — एक चालुक्य-काल का शिव मंदिर जो 1,000 वर्ष से भी अधिक पुराना है। बेंगलुरु के पूर्व में यह ऐतिहासिक शहर समृद्ध वैदिक विरासत से संपन्न है।" },
  "bidadi":            { temple: "Sri Sathya Sai Baba Ashram & Hanuman Temple", templeHi: "श्री हनुमान मंदिर (बिडाडी)", fact: "Bidadi, on the Mysore Highway, is home to the Sri Sathya Sai Baba Ashram (Puttaparthi south campus) and a significant industrial workforce with many North Indian families who maintain weekly puja traditions.", factHi: "मैसूर हाईवे पर बिडाडी श्री सत्य साईं बाबा आश्रम का घर है और यहाँ कई उत्तर भारतीय परिवारों के साथ महत्वपूर्ण औद्योगिक कार्यबल है।" },
  "begur":             { temple: "Sri Begur Nageshwara Temple (Ancient Hoysala)", templeHi: "श्री बेगूर नागेश्वर मंदिर (प्राचीन होयसाल)", fact: "Begur hosts the Sri Begur Nageshwara temple — an ancient Hoysala-era Shiva shrine with beautiful stone carvings. This heritage site in South Bangalore is surrounded by new residential developments where North Indian families are actively seeking authentic pandit services.", factHi: "बेगूर में श्री बेगूर नागेश्वर मंदिर है — एक प्राचीन होयसाल-काल का शिव मंदिर जिसमें सुंदर पत्थर की नक्काशी है। दक्षिण बेंगलुरु में यह विरासत स्थल नए आवासीय विकासों से घिरा हुआ है।" },
  "attibele":          { temple: "Sri Hanuman Temple (Attibele Toll)", templeHi: "श्री हनुमान मंदिर (अट्टीबेले)", fact: "Attibele, on the Karnataka-Tamil Nadu border, is an industrial area with significant migrant population including many North Indian families working in manufacturing units. The Sri Hanuman temple near Attibele toll has become the community spiritual centre.", factHi: "अट्टीबेले, कर्नाटक-तमिलनाडु सीमा पर, एक औद्योगिक क्षेत्र है जहाँ विनिर्माण इकाइयों में काम करने वाले कई उत्तर भारतीय परिवारों सहित महत्वपूर्ण प्रवासी आबादी है।" },
  "dasarahalli":       { temple: "Sri Dharmaraya Swamy Temple (Dasarahalli)", templeHi: "श्री धर्मराय स्वामी मंदिर (दसरहल्ली)", fact: "Dasarahalli is in North Bangalore near Peenya industrial estate. The Sri Dharmaraya Swamy temple serves the mixed community here, which includes a significant North Indian population working in nearby factories who observe all major pujas faithfully.", factHi: "दसरहल्ली उत्तर बेंगलुरु में पीन्या औद्योगिक क्षेत्र के पास है। श्री धर्मराय स्वामी मंदिर यहाँ के मिश्रित समुदाय की सेवा करता है।" },
  "yeshwanthpur":      { temple: "Sri Gavi Gangadhareshwara Temple (nearby Gavipuram)", templeHi: "श्री गवि गंगाधरेश्वर मंदिर (गवीपुरम के पास)", fact: "Yeshwanthpur is close to the ancient Gavi Gangadhareshwara Cave temple — one of Bangalore's most unique Shiva shrines where sunlight enters the sanctum directly on Makara Sankranti. This ancient vibration makes all Shiva-related pujas in this area particularly powerful.", factHi: "येशवंतपुर प्राचीन गवि गंगाधरेश्वर गुफा मंदिर के पास है — बेंगलुरु के सबसे अनोखे शिव मंदिरों में से एक जहाँ मकर संक्रांति पर सूर्य का प्रकाश सीधे गर्भगृह में प्रवेश करता है।" },
  "jalahalli":         { temple: "Sri Venkateshwara Temple (Jalahalli)", templeHi: "श्री वेंकटेश्वर मंदिर (जलहल्ली)", fact: "Jalahalli is a neighbourhood adjacent to the air force station and home to many defence families who maintain North Indian puja traditions. The Sri Venkateshwara temple hosts regular pujas and is particularly active on Ekadashi and Purnima.", factHi: "जलहल्ली वायु सेना स्टेशन से सटा एक मोहल्ला है और उत्तर भारतीय पूजा परंपराओं को बनाए रखने वाले कई रक्षा परिवारों का घर है।" },
  "rt-nagar":          { temple: "Sri Ganesha Temple (RT Nagar Main Road)", templeHi: "श्री गणेश मंदिर (आरटी नगर मुख्य सड़क)", fact: "RT Nagar (Rajajinagar Township Extension) is a busy North Bangalore area with a large trading community. The Sri Ganesha temple on the main road serves as the community hub for business pujas, Vastu Shanti, and Griha Pravesh ceremonies.", factHi: "आरटी नगर (राजाजीनगर टाउनशिप एक्सटेंशन) उत्तर बेंगलुरु का एक व्यस्त क्षेत्र है जहाँ बड़ा व्यापारी समुदाय है। मुख्य सड़क पर श्री गणेश मंदिर व्यापार पूजाओं, वास्तु शांति और गृह प्रवेश समारोहों के लिए सामुदायिक केंद्र है।" },
  "mathikere":         { temple: "Sri Shiva Temple (Mathikere)", templeHi: "श्री शिव मंदिर (माथिकेरे)", fact: "Mathikere is a residential area in North Bangalore adjacent to Rajajinagar with a mix of South Indian and North Indian families. The Sri Shiva temple here serves as the area's spiritual anchor and hosts Rudrabhishek, Mahashivaratri, and regular Satyanarayan events.", factHi: "माथिकेरे राजाजीनगर से सटे उत्तर बेंगलुरु का एक आवासीय क्षेत्र है। यहाँ का श्री शिव मंदिर क्षेत्र का आध्यात्मिक आधार है और रुद्राभिषेक, महाशिवरात्रि और नियमित सत्यनारायण कार्यक्रम आयोजित करता है।" },
  "electronic-city-phase-2": { temple: "Sri Murugan Temple (Electronic City Phase 2)", templeHi: "श्री मुरुगन मंदिर (इलेक्ट्रॉनिक सिटी फेज 2)", fact: "Electronic City Phase 2 houses the largest concentration of IT companies in Bangalore and a proportionately large North Indian tech community. The Sri Murugan temple and community pujas in apartment complexes here make it one of the most active areas for home-based Vedic rituals in South Bangalore.", factHi: "इलेक्ट्रॉनिक सिटी फेज 2 में बेंगलुरु की आईटी कंपनियों की सबसे बड़ी सांद्रता और आनुपातिक रूप से बड़ा उत्तर भारतीय तकनीकी समुदाय है।" },
  "padmanabhanagar":   { temple: "Sri Padmanabha Swamy Temple", templeHi: "श्री पद्मनाभ स्वामी मंदिर", fact: "Padmanabhanagar is named after Sri Padmanabha Swamy — a manifestation of Vishnu whose famous Kerala temple holds legendary treasures. The local Sri Padmanabha Swamy temple here draws a devoted community of Vaishnava families who observe all Ekadashi and Satyanarayan traditions meticulously.", factHi: "पद्मनाभनगर का नाम श्री पद्मनाभ स्वामी — विष्णु के एक स्वरूप — के नाम पर है। यहाँ का स्थानीय श्री पद्मनाभ स्वामी मंदिर वैष्णव परिवारों के एक समर्पित समुदाय को आकर्षित करता है।" },
  "peenya":            { temple: "Sri Nanjundeshwara Temple (Peenya Industrial Area)", templeHi: "श्री नंजुन्देश्वर मंदिर (पीन्या)", fact: "Peenya is Bangalore's largest industrial estate, home to thousands of workers from across India including a very large North Indian population from UP, Bihar, and Rajasthan. The Sri Nanjundeshwara temple serves this diverse community and hosts major puja events for factory inaugurations and Vishwakarma Puja.", factHi: "पीन्या बेंगलुरु का सबसे बड़ा औद्योगिक क्षेत्र है जहाँ यूपी, बिहार और राजस्थान की बड़ी उत्तर भारतीय आबादी सहित भारत भर से हजारों कामगार हैं।" },
  "ejipura":           { temple: "Sri Venkataramana Temple (Ejipura)", templeHi: "श्री वेंकटरामण मंदिर (एजिपुरा)", fact: "Ejipura is adjacent to Koramangala and Domlur, home to a diverse community including many North Indian families in the tech sector. The Sri Venkataramana temple is the spiritual centre for the area and witnesses active puja bookings throughout the year.", factHi: "एजिपुरा कोरमंगला और डोम्लूर से सटा हुआ है, जो तकनीकी क्षेत्र में कई उत्तर भारतीय परिवारों सहित एक विविध समुदाय का घर है।" },
  "panathur":          { temple: "Sri Muniappan Temple (Panathur)", templeHi: "श्री मुनियप्पन मंदिर (पनाथुर)", fact: "Panathur is adjacent to Whitefield and Bellandur on Sarjapur Road, witnessing rapid residential growth. Many North Indian families in new apartment complexes here host Griha Pravesh and Satyanarayan pujas with PanditGhar.in as their first home ceremony in Bangalore.", factHi: "पनाथुर सर्जापुर रोड पर व्हाइटफील्ड और बेल्लंदूर से सटा हुआ है, और तेजी से आवासीय विकास देख रहा है। यहाँ नए अपार्टमेंट परिसरों में कई उत्तर भारतीय परिवार बेंगलुरु में अपने पहले घर समारोह के रूप में PanditGhar.in के साथ गृह प्रवेश और सत्यनारायण पूजा आयोजित करते हैं।" },
  "budigere-cross":    { temple: "Sri Vishweshwara Temple (Budigere)", templeHi: "श्री विश्वेश्वर मंदिर (बुडिगेरे)", fact: "Budigere Cross is on the Old Madras Road near Whitefield and is seeing rapid growth as an affordable residential zone. North Indian families settling here from across India bring their puja traditions and regularly book Satyanarayan and Griha Pravesh pujas for new apartments.", factHi: "बुडिगेरे क्रॉस व्हाइटफील्ड के पास पुराने मद्रास रोड पर है और एक किफायती आवासीय क्षेत्र के रूप में तेजी से बढ़ रहा है।" },
  "ramamurthy-nagar":  { temple: "Sri Anjaneya Temple (Ramamurthy Nagar)", templeHi: "श्री अंजनेय मंदिर (रामामूर्ति नगर)", fact: "Ramamurthy Nagar, named after Lord Rama (via the area deity), has a strong tradition of Ram Bhakti. The Sri Anjaneya temple is the spiritual anchor and the community hosts annual Akhand Ramayan and Hanuman Jayanti events that draw thousands of devotees.", factHi: "रामामूर्ति नगर, भगवान राम (क्षेत्र देवता के माध्यम से) के नाम पर, राम भक्ति की मजबूत परंपरा रखता है। श्री अंजनेय मंदिर आध्यात्मिक आधार है।" },
  "shivajinagar":      { temple: "St. Mary's Basilica (interfaith area) & Sri Rama Temple", templeHi: "श्री राम मंदिर (शिवाजी नगर)", fact: "Shivajinagar is central Bangalore's most vibrant mixed-culture neighbourhood. The Sri Rama temple here serves the North Indian business community that has maintained its presence in this commercial hub since the pre-independence era.", factHi: "शिवाजी नगर मध्य बेंगलुरु का सबसे जीवंत मिश्रित-संस्कृति मोहल्ला है। यहाँ का श्री राम मंदिर उत्तर भारतीय व्यापारिक समुदाय की सेवा करता है।" },
  "frazer-town":       { temple: "Sri Anjaneya Temple (Frazer Town)", templeHi: "श्री अंजनेय मंदिर (फ्रेज़र टाउन)", fact: "Frazer Town is a heritage neighbourhood in Central Bangalore with a significant North Indian population that has lived here for generations. The Sri Anjaneya temple on the main road hosts Hanuman Puja every Tuesday and Saturday drawing devotees from across East Bangalore.", factHi: "फ्रेज़र टाउन मध्य बेंगलुरु का एक विरासत मोहल्ला है जहाँ पीढ़ियों से रह रही महत्वपूर्ण उत्तर भारतीय आबादी है।" },
  "cox-town":          { temple: "Sri Hanuman Temple (Cox Town)", templeHi: "श्री हनुमान मंदिर (कॉक्स टाउन)", fact: "Cox Town is adjacent to Frazer Town and shares a similar heritage character with a large North Indian community that has been conducting home pujas for generations. The Sri Hanuman temple is the area's most active spiritual centre.", factHi: "कॉक्स टाउन फ्रेज़र टाउन से सटा हुआ है और इसी तरह का विरासत चरित्र है जहाँ बड़ा उत्तर भारतीय समुदाय पीढ़ियों से घर में पूजा करता आ रहा है।" },
  "mysore-road":       { temple: "Sri Venkataramana Temple (Mysore Road)", templeHi: "श्री वेंकटरामण मंदिर (मैसूर रोड)", fact: "Mysore Road corridor, running southwest from Bangalore, passes through multiple historic temple towns. The highway has brought many North Indian families to new apartments along the corridor who observe traditional Samskaras and home pujas with great devotion.", factHi: "मैसूर रोड गलियारा, बेंगलुरु से दक्षिण-पश्चिम में चलता है, कई ऐतिहासिक मंदिर शहरों से गुजरता है। हाईवे ने कई उत्तर भारतीय परिवारों को गलियारे के साथ नए अपार्टमेंट में लाया है।" },
  "yelahanka":         { temple: "Sri Lakshmi Venkateshwara Temple (Yelahanka New Town)", templeHi: "श्री लक्ष्मी वेंकटेश्वर मंदिर (येलहंका)", fact: "Yelahanka is one of North Bangalore's fastest-growing areas near the International Airport. The Sri Lakshmi Venkateshwara temple in Yelahanka New Town serves thousands of North Indian families who have settled here and observe the full cycle of Samskaras with meticulous devotion.", factHi: "येलहंका अंतरराष्ट्रीय हवाई अड्डे के पास उत्तर बेंगलुरु के सबसे तेजी से बढ़ते क्षेत्रों में से एक है। येलहंका नई टाउन में श्री लक्ष्मी वेंकटेश्वर मंदिर हजारों उत्तर भारतीय परिवारों की सेवा करता है।" },
  "hebbal":            { temple: "Sri Nanjundeshwara Temple (Hebbal)", templeHi: "श्री नंजुन्देश्वर मंदिर (हेब्बल)", fact: "Hebbal is a key North Bangalore node adjacent to the airport road, home to major tech parks and a significant North Indian population. The Sri Nanjundeshwara temple near Hebbal Lake is the spiritual anchor for the community's Rudrabhishek, Griha Pravesh and Navratri celebrations.", factHi: "हेब्बल हवाई अड्डे की सड़क से सटे उत्तर बेंगलुरु का एक प्रमुख केंद्र है, जो प्रमुख तकनीकी पार्कों और महत्वपूर्ण उत्तर भारतीय आबादी का घर है।" },
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
