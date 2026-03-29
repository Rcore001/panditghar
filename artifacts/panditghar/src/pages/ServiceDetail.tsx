import { Link } from 'wouter';
import { Language, services, useTranslation } from '@/lib/data';
import { SEO } from '@/components/SEO';
import { DecorativeDivider } from '@/components/ui/decorative';
import { Button } from '@/components/ui/button';
import { BookingForm } from '@/components/BookingForm';
import { CheckCircle2, BookOpen, PhoneCall, AlertCircle, ShoppingBag, Car } from 'lucide-react';
import NotFound from './not-found';
import { motion } from 'framer-motion';
import { WHATSAPP_NUMBER } from '@/lib/data';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/animated';
import { ServiceCardImage } from '@/components/ServiceCardImage';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

interface FAQ {
  q_hi: string;
  a_hi: string;
  q_en: string;
  a_en: string;
}

const serviceFaqs: Record<string, FAQ[]> = {
  "griha-pravesh": [
    {
      q_en: "What is the auspicious time (muhurat) for Griha Pravesh?",
      a_en: "Muhurat for Griha Pravesh is determined by a combination of Tithi, Nakshatra, and planetary positions from the Panchang. Ideal Nakshatras include Rohini, Hasta, Uttara Phalguni, Uttara Ashada, and Uttara Bhadra. Pandit Ji will guide you to the most auspicious time.",
      q_hi: "गृह प्रवेश के लिए शुभ मुहूर्त क्या होता है?",
      a_hi: "गृह प्रवेश का मुहूर्त पंचांग से तिथि, नक्षत्र और ग्रह स्थिति के संयोजन से निर्धारित होता है। रोहिणी, हस्त, उत्तरा फाल्गुनी, उत्तरा आषाढ़ा और उत्तरा भाद्र सर्वोत्तम नक्षत्र हैं। पंडित जी सबसे शुभ समय बताएंगे।"
    },
    {
      q_en: "How long does the Griha Pravesh ceremony take?",
      a_en: "A complete Griha Pravesh puja takes 3 to 4 hours including Ganesh Puja, Vastu Shanti Homa, Navagraha Puja, Kalash Sthapana, and the actual entry ritual. For extended homa or larger families, it may take up to 5 hours.",
      q_hi: "गृह प्रवेश समारोह में कितना समय लगता है?",
      a_hi: "संपूर्ण गृह प्रवेश पूजा में 3 से 4 घंटे लगते हैं जिसमें गणेश पूजा, वास्तु शांति हवन, नवग्रह पूजा, कलश स्थापना और प्रवेश अनुष्ठान शामिल हैं। बड़े हवन या बड़े परिवारों के लिए 5 घंटे तक लग सकते हैं।"
    },
    {
      q_en: "What samagri (items) are needed for Griha Pravesh Puja?",
      a_en: "Pandit Ji brings all the necessary samagri including: Havan Kund, Ghee, Sesame, Barley, Mango wood, Kalash with water, Mango leaves, Coconut, Red cloth, Turmeric, Kumkum, Gangajal, and Navgrah samagri. You only need to provide a clean space.",
      q_hi: "गृह प्रवेश पूजा के लिए कौन सी सामग्री (सामान) चाहिए?",
      a_hi: "पंडित जी सभी आवश्यक सामग्री लाते हैं: हवन कुंड, घी, तिल, जौ, आम की लकड़ी, कलश, आम के पत्ते, नारियल, लाल कपड़ा, हल्दी, कुमकुम, गंगाजल और नवग्रह सामग्री। आपको केवल साफ जगह तैयार करनी है।"
    },
    {
      q_en: "Can Griha Pravesh be done in a rented house or flat?",
      a_en: "Yes, Griha Pravesh can absolutely be performed in a rented house or flat. A simplified version without the complete Vastu Homa is recommended for rented properties, focused on purification and blessings for the home.",
      q_hi: "क्या किराए के घर या फ्लैट में गृह प्रवेश हो सकता है?",
      a_hi: "हाँ, किराए के घर या फ्लैट में गृह प्रवेश बिल्कुल किया जा सकता है। किराए की संपत्ति के लिए पूर्ण वास्तु हवन के बिना सरलीकृत विधि की सिफारिश की जाती है जो शुद्धि और आशीर्वाद पर केंद्रित होती है।"
    },
    {
      q_en: "Is Griha Pravesh done in the evening allowed?",
      a_en: "Traditionally, Griha Pravesh is performed only in the morning or before sunset. Evening or night entries are not considered auspicious as per the Shastras. Pandit Ji will ensure the ceremony is timed correctly as per Panchang.",
      q_hi: "क्या शाम को गृह प्रवेश किया जा सकता है?",
      a_hi: "परंपरागत रूप से, गृह प्रवेश केवल सुबह या सूर्यास्त से पहले किया जाता है। शास्त्रों के अनुसार शाम या रात का प्रवेश शुभ नहीं माना जाता। पंडित जी पंचांग के अनुसार सही समय सुनिश्चित करेंगे।"
    },
    {
      q_en: "Do you serve all areas in Bangalore for Griha Pravesh?",
      a_en: "Yes, PanditGhar.in provides Griha Pravesh Puja services across all major Bangalore areas including Whitefield, HSR Layout, Koramangala, Indiranagar, Marathahalli, Electronic City, JP Nagar, Yelahanka, and more.",
      q_hi: "क्या बेंगलुरु के सभी क्षेत्रों में गृह प्रवेश सेवा उपलब्ध है?",
      a_hi: "हाँ, PanditGhar.in, व्हाइटफील्ड, HSR लेआउट, कोरमंगला, इंदिरानगर, मराठहल्ली, इलेक्ट्रॉनिक सिटी, JP नगर, येलहंका और अन्य सभी प्रमुख बेंगलुरु क्षेत्रों में गृह प्रवेश सेवा प्रदान करता है।"
    },
    {
      q_en: "What is the starting price for Griha Pravesh Puja in Bangalore?",
      a_en: "Griha Pravesh Puja starts at ₹5,100 which includes pandit dakshina, complete samagri, travel within Bangalore, and the full ritual. Final price depends on the extent of the homa and number of pandits required.",
      q_hi: "बेंगलुरु में गृह प्रवेश पूजा की शुरूआती कीमत क्या है?",
      a_hi: "गृह प्रवेश पूजा ₹5,100 से शुरू होती है जिसमें पंडित दक्षिणा, पूरी सामग्री, बेंगलुरु के भीतर यात्रा और पूर्ण विधि शामिल है। अंतिम कीमत हवन के विस्तार और आवश्यक पंडितों की संख्या पर निर्भर करती है।"
    }
  ],
  "satyanarayan": [
    {
      q_en: "When is the best time to perform Satyanarayan Katha?",
      a_en: "Satyanarayan Katha is traditionally performed on Poornima (Full Moon), after major auspicious events (new home, marriage, new job), or on any Thursday. The Skanda Purana's Reva Khanda mentions Poornima as the most ideal day.",
      q_hi: "सत्यनारायण कथा कब करनी चाहिए?",
      a_hi: "सत्यनारायण कथा परंपरागत रूप से पूर्णिमा, किसी शुभ अवसर (नया घर, विवाह, नई नौकरी) के बाद या किसी भी गुरुवार को की जाती है। स्कन्द पुराण के रेवा खण्ड में पूर्णिमा को सबसे आदर्श दिन बताया गया है।"
    },
    {
      q_en: "How long does Satyanarayan Katha take to complete?",
      a_en: "A complete Satyanarayan Katha takes approximately 2.5 to 3 hours including the Puja, five-chapter Katha reading, and Prasad distribution. The Panchamrit Puja and Aarti are performed before and after the Katha.",
      q_hi: "सत्यनारायण कथा पूरी होने में कितना समय लगता है?",
      a_hi: "संपूर्ण सत्यनारायण कथा में पूजा, पाँच अध्याय कथा वाचन और प्रसाद वितरण सहित लगभग 2.5 से 3 घंटे लगते हैं। पंचामृत पूजा और आरती कथा से पहले और बाद में की जाती है।"
    },
    {
      q_en: "What is the prasad (offering) for Satyanarayan Puja?",
      a_en: "The traditional prasad for Satyanarayan Puja is Sheera (semolina sweet made with ghee, sugar, and milk), Panchamrit (milk, curd, honey, ghee, sugar), and fruits. The Sheera is offered to Lord Vishnu and then distributed.",
      q_hi: "सत्यनारायण पूजा में प्रसाद क्या होता है?",
      a_hi: "सत्यनारायण पूजा का पारंपरिक प्रसाद शीरा (घी, चीनी और दूध से बनी सूजी की मिठाई), पंचामृत (दूध, दही, शहद, घी, चीनी) और फल हैं। शीरा भगवान विष्णु को अर्पित करके बाद में वितरित किया जाता है।"
    },
    {
      q_en: "Can Satyanarayan Katha be done at home?",
      a_en: "Yes, Satyanarayan Katha is primarily a home puja and is most commonly performed at home. A small, clean space with the deity idol or photo is all that is needed. Pandit Ji arranges everything else.",
      q_hi: "क्या सत्यनारायण कथा घर पर हो सकती है?",
      a_hi: "हाँ, सत्यनारायण कथा मूलतः घर पर की जाने वाली पूजा है। एक छोटी, स्वच्छ जगह और देवता की मूर्ति या फोटो की जरूरत है। पंडित जी बाकी सब कुछ व्यवस्थित करते हैं।"
    },
    {
      q_en: "What items do I need to arrange for Satyanarayan Katha?",
      a_en: "Pandit Ji brings all the samagri. You only need to keep: a clean, decorated space for the puja, a chair or sitting arrangement for the pandit, and optionally invite family members and friends to hear the Katha.",
      q_hi: "सत्यनारायण कथा के लिए मुझे क्या तैयार करना होगा?",
      a_hi: "पंडित जी सभी सामग्री लाते हैं। आपको केवल रखना है: पूजा के लिए एक स्वच्छ, सजाई हुई जगह, पंडित जी के लिए कुर्सी या बैठने की व्यवस्था, और परिवार व मित्रों को कथा सुनने के लिए बुला सकते हैं।"
    },
    {
      q_en: "Can Satyanarayan Katha be performed by a bachelor or single person?",
      a_en: "Yes, Satyanarayan Katha can be performed by anyone — married or unmarried, male or female. It is a puja for all householders and is not restricted by marital status.",
      q_hi: "क्या कुंवारे या अकेले व्यक्ति सत्यनारायण कथा कर सकते हैं?",
      a_hi: "हाँ, सत्यनारायण कथा कोई भी कर सकता है — विवाहित या अविवाहित, पुरुष या महिला। यह सभी गृहस्थों के लिए पूजा है और वैवाहिक स्थिति से प्रतिबंधित नहीं है।"
    }
  ],
  "vivah": [
    {
      q_en: "What rituals are included in a full North Indian Vivah ceremony?",
      a_en: "A complete North Indian Vivah includes: Ganesh Puja, Navagraha Puja, Kanyadaan, Panigrahan, Varmala, Gotra Uchchar, Mangal Ashtakam, Saptapadi (7 vows), Sindoor Daan, Mangalsutra Dharana, and Griha Pravesh of the bride. All as per Paraskara Grihya Sutra.",
      q_hi: "उत्तर भारतीय विवाह में कौन-कौन से अनुष्ठान होते हैं?",
      a_hi: "संपूर्ण उत्तर भारतीय विवाह में शामिल हैं: गणेश पूजा, नवग्रह पूजा, कन्यादान, पाणिग्रहण, वरमाला, गोत्र उच्चार, मंगल अष्टकम, सप्तपदी (7 फेरे), सिंदूर दान, मंगलसूत्र धारण और वधू का गृह प्रवेश। सभी पारस्कर गृह्यसूत्र के अनुसार।"
    },
    {
      q_en: "How far in advance should I book a pandit for Vivah?",
      a_en: "We strongly recommend booking at least 2 to 3 months in advance, especially for peak wedding season (November to March and Akshaya Tritiya). Pandit Ji's calendar fills up quickly during auspicious periods.",
      q_hi: "विवाह के लिए कितने पहले पंडित बुक करना चाहिए?",
      a_hi: "विशेष रूप से विवाह सीजन (नवंबर से मार्च और अक्षय तृतीया) के लिए कम से कम 2 से 3 महीने पहले बुकिंग करने की दृढ़ सिफारिश है। शुभ अवधि के दौरान पंडित जी की बुकिंग जल्दी भर जाती है।"
    },
    {
      q_en: "How long does a complete Vivah ceremony take?",
      a_en: "A complete North Indian Vivah ceremony takes 3 to 5 hours depending on the number of sub-rituals. A Jaimala + Pheras ceremony alone takes 2.5 hours. Full traditional Vivah with all Sanskrit rituals can take 4-6 hours.",
      q_hi: "संपूर्ण विवाह समारोह में कितना समय लगता है?",
      a_hi: "संपूर्ण उत्तर भारतीय विवाह में उप-अनुष्ठानों की संख्या के आधार पर 3 से 5 घंटे लगते हैं। केवल जयमाला + फेरों में 2.5 घंटे लगते हैं। सभी संस्कृत अनुष्ठानों के साथ पूर्ण पारंपरिक विवाह में 4-6 घंटे लग सकते हैं।"
    },
    {
      q_en: "Do you conduct inter-caste or inter-state weddings?",
      a_en: "We specialize in authentic North Indian (UP, Bihar, Madhya Pradesh, Rajasthan) style Vivah rituals. Inter-caste weddings can be performed with slight adaptations. Please contact us to discuss your specific requirements.",
      q_hi: "क्या आप अंतरजातीय या अंतरराज्यीय विवाह करते हैं?",
      a_hi: "हम प्रामाणिक उत्तर भारतीय (UP, बिहार, मध्य प्रदेश, राजस्थान) शैली के विवाह अनुष्ठानों में विशेषज्ञ हैं। अंतरजातीय विवाह थोड़े बदलाव के साथ किए जा सकते हैं। अपनी विशिष्ट जरूरतों पर चर्चा के लिए संपर्क करें।"
    },
    {
      q_en: "What is the Saptapadi and why is it the most important ritual?",
      a_en: "Saptapadi (Seven Steps) is the core ritual of Hindu marriage as prescribed in the Paraskara Grihya Sutra. The couple takes seven steps together around the sacred fire, each step representing a vow — for food, strength, prosperity, happiness, progeny, health, and companionship. After the seventh step, the marriage is legally complete.",
      q_hi: "सप्तपदी क्या है और यह सबसे महत्वपूर्ण अनुष्ठान क्यों है?",
      a_hi: "सप्तपदी (सात फेरे) पारस्कर गृह्यसूत्र में निर्धारित हिंदू विवाह का मूल अनुष्ठान है। दंपति पवित्र अग्नि के चारों ओर सात कदम मिलकर उठाते हैं, हर कदम एक वचन का प्रतिनिधित्व करता है — अन्न, शक्ति, समृद्धि, सुख, संतान, स्वास्थ्य और साहचर्य के लिए। सातवें कदम के बाद विवाह वैधानिक रूप से पूर्ण होता है।"
    },
    {
      q_en: "Can a destination wedding in Bangalore be arranged?",
      a_en: "Yes, PanditGhar.in is experienced in conducting Vivah ceremonies at resorts, banquet halls, open venues, and homes across Bangalore. Our pandit travels to any venue within the city.",
      q_hi: "क्या बेंगलुरु में डेस्टिनेशन वेडिंग की व्यवस्था हो सकती है?",
      a_hi: "हाँ, PanditGhar.in को बेंगलुरु में रिसॉर्ट, बैंक्वेट हॉल, खुली जगहों और घरों में विवाह संपन्न कराने का अनुभव है। हमारे पंडित जी शहर के किसी भी स्थान पर आते हैं।"
    }
  ],
  "rudrabhishek": [
    {
      q_en: "What is Rudrabhishek and what are its benefits?",
      a_en: "Rudrabhishek is the ritual bathing (Abhishek) of Lord Shiva's Lingam with Panchamrit (milk, curd, honey, ghee, sugar) and sacred water while chanting Shri Rudram from the Yajurveda. It removes planetary doshas, brings health, peace, and spiritual progress.",
      q_hi: "रुद्राभिषेक क्या है और इसके क्या लाभ हैं?",
      a_hi: "रुद्राभिषेक भगवान शिव के शिवलिंग का यजुर्वेद की श्री रुद्रम का पाठ करते हुए पंचामृत (दूध, दही, शहद, घी, चीनी) और पवित्र जल से अभिषेक करना है। यह ग्रह दोष दूर करता है, स्वास्थ्य, शांति और आध्यात्मिक प्रगति लाता है।"
    },
    {
      q_en: "On which day is Rudrabhishek most auspicious?",
      a_en: "Monday (Somavar) is the most sacred day for Rudrabhishek as Lord Shiva is worshipped on Mondays. Pradosh (13th lunar day), Maha Shivaratri, and the month of Shravan are especially powerful. Any day is good with proper intention.",
      q_hi: "रुद्राभिषेक के लिए सबसे शुभ दिन कौन सा है?",
      a_hi: "सोमवार रुद्राभिषेक के लिए सबसे पवित्र दिन है क्योंकि भगवान शिव की पूजा सोमवार को होती है। प्रदोष (13वीं चंद्र तिथि), महा शिवरात्रि और सावन का महीना विशेष रूप से शक्तिशाली होता है। उचित भावना के साथ कोई भी दिन शुभ है।"
    },
    {
      q_en: "How long does Rudrabhishek take to complete?",
      a_en: "A standard Rudrabhishek takes 1.5 to 2.5 hours. The Laghu Rudrabhishek (basic) takes about 1.5 hours, while the Maha Rudrabhishek with full 11 recitations of Shri Rudram (Ekadash Rudri) takes 3 to 4 hours.",
      q_hi: "रुद्राभिषेक पूरा होने में कितना समय लगता है?",
      a_hi: "एक सामान्य रुद्राभिषेक में 1.5 से 2.5 घंटे लगते हैं। लघु रुद्राभिषेक (बेसिक) में लगभग 1.5 घंटे लगते हैं, जबकि श्री रुद्रम के पूर्ण 11 पाठ (एकादश रुद्री) के साथ महा रुद्राभिषेक में 3 से 4 घंटे लगते हैं।"
    },
    {
      q_en: "Can Rudrabhishek be done at home without a Shivaling?",
      a_en: "Rudrabhishek is traditionally performed on a Shivalinga. However, a Saligram (natural stone representation of Lord Vishnu/Shiva) or a copper Shivalinga can be used at home. Pandit Ji can guide you on the most appropriate option.",
      q_hi: "क्या घर पर शिवलिंग के बिना रुद्राभिषेक हो सकता है?",
      a_hi: "रुद्राभिषेक परंपरागत रूप से शिवलिंग पर किया जाता है। हालाँकि, घर पर शालिग्राम (प्राकृतिक पत्थर) या ताँबे के शिवलिंग का उपयोग किया जा सकता है। पंडित जी सबसे उपयुक्त विकल्प के बारे में मार्गदर्शन करेंगे।"
    },
    {
      q_en: "What problems does Rudrabhishek solve?",
      a_en: "Rudrabhishek is prescribed for: health issues, career obstacles, Shani (Saturn) and Mangal doshas in the horoscope, mental stress, family disputes, slow progress in life, and to seek Lord Shiva's blessing for overall wellbeing.",
      q_hi: "रुद्राभिषेक किन समस्याओं का समाधान करता है?",
      a_hi: "रुद्राभिषेक इनके लिए निर्धारित है: स्वास्थ्य समस्याएं, करियर बाधाएं, कुंडली में शनि और मंगल दोष, मानसिक तनाव, पारिवारिक विवाद, जीवन में धीमी प्रगति और समग्र भलाई के लिए भगवान शिव का आशीर्वाद लेना।"
    },
    {
      q_en: "What is the difference between Rudrabhishek and Maha Rudrabhishek?",
      a_en: "Rudrabhishek (Laghu) involves one complete recitation of Shri Rudram + Chamakam with Abhishek. Maha Rudrabhishek (Ekadash Rudri) involves 11 recitations, and is considered 11 times more powerful. Maha Rudrabhishek is recommended for severe doshas or major life events.",
      q_hi: "रुद्राभिषेक और महा रुद्राभिषेक में क्या अंतर है?",
      a_hi: "रुद्राभिषेक (लघु) में अभिषेक के साथ श्री रुद्रम + चमकम का एक पूर्ण पाठ शामिल है। महा रुद्राभिषेक (एकादश रुद्री) में 11 पाठ शामिल हैं और 11 गुना अधिक शक्तिशाली माना जाता है। महा रुद्राभिषेक गंभीर दोषों या प्रमुख जीवन घटनाओं के लिए अनुशंसित है।"
    }
  ],
  "namkaran": [
    {
      q_en: "When should Namkaran Sanskar be performed?",
      a_en: "According to the Ashvalayana Grihya Sutra, Namkaran is performed on the 11th or 12th day after birth, though some traditions observe it on the 101st day or on the first birthday. The Nakshatra-based name (Rashi Naam) is determined from the birth chart.",
      q_hi: "नामकरण संस्कार कब किया जाना चाहिए?",
      a_hi: "आश्वलायन गृह्यसूत्र के अनुसार, नामकरण जन्म के 11वें या 12वें दिन किया जाता है, हालाँकि कुछ परंपराएं 101वें दिन या पहले जन्मदिन पर इसे करती हैं। जन्म कुंडली से नक्षत्र-आधारित नाम (राशि नाम) निर्धारित किया जाता है।"
    },
    {
      q_en: "How is the auspicious name determined?",
      a_en: "The Rashi (zodiac) and Nakshatra (birth star) of the child are determined from the exact birth date, time, and place. Based on these, the appropriate starting syllable (Akshar) of the name is identified from the Panchang. Pandit Ji prepares the birth horoscope (Janam Kundali) as well.",
      q_hi: "शुभ नाम कैसे तय किया जाता है?",
      a_hi: "बच्चे की राशि और नक्षत्र जन्म की तारीख, समय और स्थान से निर्धारित होते हैं। इसके आधार पर पंचांग से नाम का उचित प्रारंभिक अक्षर (अक्षर) पहचाना जाता है। पंडित जी जन्म कुंडली भी तैयार करते हैं।"
    },
    {
      q_en: "How long does Namkaran Puja take?",
      a_en: "Namkaran Puja typically takes 1.5 to 2 hours and includes Ganesh Puja, birth Nakshatra worship, Jatakarma rituals, and formal naming of the child. The child's name is whispered in the ear as per the Vedic tradition.",
      q_hi: "नामकरण पूजा में कितना समय लगता है?",
      a_hi: "नामकरण पूजा में सामान्यतः 1.5 से 2 घंटे लगते हैं जिसमें गणेश पूजा, जन्म नक्षत्र पूजा, जातकर्म अनुष्ठान और बच्चे का औपचारिक नामकरण शामिल है। वैदिक परंपरा के अनुसार बच्चे के कान में नाम फुसफुसाया जाता है।"
    },
    {
      q_en: "What items are needed for Namkaran Sanskar?",
      a_en: "Pandit Ji brings all puja samagri. You need to prepare: a clean decorated space, the baby's birth details (date, time, place), traditional sweets for distribution, and new clothes for the baby. Family and friends are welcome to attend.",
      q_hi: "नामकरण संस्कार के लिए कौन-सी वस्तुएं चाहिए?",
      a_hi: "पंडित जी सभी पूजा सामग्री लाते हैं। आपको तैयार करना है: एक स्वच्छ सजाई हुई जगह, बच्चे का जन्म विवरण (तिथि, समय, स्थान), वितरण के लिए पारंपरिक मिठाइयाँ, और बच्चे के लिए नए कपड़े। परिवार और मित्र आमंत्रित किए जा सकते हैं।"
    },
    {
      q_en: "Is Namkaran done for girl children too?",
      a_en: "Absolutely. Namkaran Sanskar is performed for both boys and girls alike. In fact, the Grihya Sutras emphasize equal importance of the naming ceremony for all children regardless of gender.",
      q_hi: "क्या नामकरण बालिकाओं के लिए भी होता है?",
      a_hi: "बिल्कुल। नामकरण संस्कार लड़के और लड़कियों दोनों के लिए समान रूप से किया जाता है। वास्तव में, गृह्य सूत्र लिंग के बावजूद सभी बच्चों के लिए नामकरण समारोह के समान महत्व पर जोर देते हैं।"
    },
    {
      q_en: "Can Namkaran be performed at a hospital or nursing home?",
      a_en: "Namkaran Puja is ideally performed at home in a peaceful environment. However, a simplified version can be performed at a hospital in a private room if the mother and baby cannot travel. Please call us to discuss your specific situation.",
      q_hi: "क्या नामकरण अस्पताल या नर्सिंग होम में किया जा सकता है?",
      a_hi: "नामकरण पूजा आदर्श रूप से घर पर शांतिपूर्ण वातावरण में की जाती है। हालाँकि, यदि माँ और बच्चा यात्रा नहीं कर सकते तो अस्पताल के निजी कमरे में सरलीकृत विधि की जा सकती है। अपनी विशेष स्थिति पर चर्चा के लिए हमें कॉल करें।"
    }
  ],
  "mundan": [
    {
      q_en: "At what age should Mundan Sanskar be performed?",
      a_en: "As per the Manusmriti and Grihya Sutras, Mundan (Chudakarana) should be performed in the first year of life, or if that is missed, in the third year. Some families also do it in the fifth or seventh year. Odd years are preferred.",
      q_hi: "मुंडन संस्कार किस उम्र में कराना चाहिए?",
      a_hi: "मनुस्मृति और गृह्य सूत्रों के अनुसार, मुंडन (चूड़ाकरण) जीवन के पहले वर्ष में या चूक जाने पर तीसरे वर्ष में किया जाना चाहिए। कुछ परिवार पाँचवें या सातवें वर्ष में भी करते हैं। विषम वर्ष पसंद किए जाते हैं।"
    },
    {
      q_en: "What is the significance of Mundan Sanskar?",
      a_en: "Mundan removes the birth hair which carries karmic impressions from previous lives. According to the Shastras, this purifies the child's mind, stimulates nerve endings in the scalp for better brain development, and symbolizes the beginning of a fresh, pure life.",
      q_hi: "मुंडन संस्कार का क्या महत्व है?",
      a_hi: "मुंडन जन्म के बाल हटाता है जो पिछले जन्मों के कर्मिक संस्कारों को वहन करते हैं। शास्त्रों के अनुसार, यह बच्चे के मन को शुद्ध करता है, बेहतर मस्तिष्क विकास के लिए सिर के तंत्रिका सिरों को उत्तेजित करता है और एक ताजा, शुद्ध जीवन की शुरुआत का प्रतीक है।"
    },
    {
      q_en: "Where should Mundan be done — temple or home?",
      a_en: "Mundan can be performed either at a temple with divine blessings or at home. Many families prefer temple venues (especially Tirupati or Kashi) for added sanctity. PanditGhar.in performs Mundan both at home and in temples across Bangalore.",
      q_hi: "मुंडन कहाँ किया जाना चाहिए — मंदिर में या घर पर?",
      a_hi: "मुंडन मंदिर में या घर पर दोनों जगह किया जा सकता है। कई परिवार अतिरिक्त पवित्रता के लिए मंदिर (विशेषकर तिरुपति या काशी) को पसंद करते हैं। PanditGhar.in बेंगलुरु में घर और मंदिर दोनों जगह मुंडन करता है।"
    },
    {
      q_en: "How long does Mundan Puja take?",
      a_en: "The Mundan puja takes about 1 to 1.5 hours. This includes Ganesh Puja, Kalash Sthapana, Mundan Vidhi with barber (you arrange the barber), and closing Aarti. After the hair cutting, a head bath is given to the child.",
      q_hi: "मुंडन पूजा में कितना समय लगता है?",
      a_hi: "मुंडन पूजा में लगभग 1 से 1.5 घंटे लगते हैं। इसमें गणेश पूजा, कलश स्थापना, नाई के साथ मुंडन विधि (नाई आप व्यवस्थित करें) और समापन आरती शामिल है। बाल काटने के बाद बच्चे को स्नान कराया जाता है।"
    },
    {
      q_en: "Should the child's first hair be donated or kept?",
      a_en: "The hair cut during Mundan is considered sacred and should not be thrown away carelessly. The traditional practice is to either immerse the cut hair in a holy river (like Ganga/Kaveri) or donate it at a temple. Many families preserve a small lock as a memento.",
      q_hi: "क्या मुंडन के बाल दान करने चाहिए या रखने चाहिए?",
      a_hi: "मुंडन के दौरान काटे गए बाल पवित्र माने जाते हैं और लापरवाही से नहीं फेंके जाने चाहिए। पारंपरिक प्रथा कटे बालों को किसी पवित्र नदी (गंगा/कावेरी) में विसर्जित करना या मंदिर में दान करना है। कई परिवार स्मृति के रूप में एक छोटी लट सुरक्षित रखते हैं।"
    },
    {
      q_en: "Can Mundan be done on a girl child?",
      a_en: "Mundan Sanskar is primarily mentioned for male children in the Shastras. For female children, it is optional and depends on family tradition. Many families choose to perform a lighter version for girls. Please consult Pandit Ji for your family's tradition.",
      q_hi: "क्या मुंडन लड़की बच्चों के लिए भी किया जाता है?",
      a_hi: "मुंडन संस्कार का उल्लेख शास्त्रों में मुख्य रूप से पुरुष बच्चों के लिए है। लड़कियों के लिए यह वैकल्पिक है और पारिवारिक परंपरा पर निर्भर करता है। कई परिवार लड़कियों के लिए हल्का संस्करण करते हैं। अपनी पारिवारिक परंपरा के लिए पंडित जी से परामर्श करें।"
    }
  ],
  "ganesh-puja": [
    {
      q_en: "Why is Ganesh Puja performed before every auspicious event?",
      a_en: "Lord Ganesha is the Adi Devata (first deity) to be worshipped before any Vedic ritual. The Ganesha Purana and Mudgala Purana state that Ganesha must be propitiated first to ensure all obstacles are removed and the event proceeds successfully.",
      q_hi: "हर शुभ कार्य से पहले गणेश पूजा क्यों की जाती है?",
      a_hi: "भगवान गणेश किसी भी वैदिक अनुष्ठान से पहले पूजे जाने वाले आदि देवता हैं। गणेश पुराण और मुद्गल पुराण में कहा गया है कि सभी बाधाएं दूर होने और आयोजन सफलतापूर्वक आगे बढ़ने के लिए गणेश को पहले प्रसन्न करना आवश्यक है।"
    },
    {
      q_en: "On which days is Ganesh Puja most auspicious?",
      a_en: "Wednesday (Budhvar) is Lord Ganesha's day, making it ideal for Ganesh Puja. Chaturthi (4th lunar day) of every month is also sacred to Ganesha. Ganesh Chaturthi in Bhadrapada month is the most auspicious time for Ganesh worship.",
      q_hi: "गणेश पूजा के लिए कौन से दिन सबसे शुभ हैं?",
      a_hi: "बुधवार भगवान गणेश का दिन है, जो इसे गणेश पूजा के लिए आदर्श बनाता है। हर माह की चतुर्थी (चंद्र तिथि 4) भी गणेश को पवित्र है। भाद्रपद मास की गणेश चतुर्थी गणेश पूजा के लिए सबसे शुभ समय है।"
    },
    {
      q_en: "How long does Ganesh Puja take?",
      a_en: "A complete Ganesh Puja takes about 1 to 1.5 hours including the Shodashopachara (16-step) puja, Modak offering, Aarti, and Panchamrit Abhishek. When combined with another ceremony, it serves as the introductory ritual.",
      q_hi: "गणेश पूजा में कितना समय लगता है?",
      a_hi: "संपूर्ण गणेश पूजा में षोडशोपचार (16-चरण) पूजा, मोदक अर्पण, आरती और पंचामृत अभिषेक सहित लगभग 1 से 1.5 घंटे लगते हैं। किसी अन्य समारोह के साथ मिलाने पर, यह प्रारंभिक अनुष्ठान के रूप में कार्य करता है।"
    },
    {
      q_en: "What is offered to Lord Ganesha during the puja?",
      a_en: "Lord Ganesha is especially fond of Modak (sweet dumplings), Durva grass (Cynodon dactylon), red flowers (Hibiscus), coconut, and Panchamrit. 21 Modaks are offered as per tradition. Red vermillion (Sindoor) and red cloth are also associated with Ganesha worship.",
      q_hi: "पूजा के दौरान भगवान गणेश को क्या अर्पित किया जाता है?",
      a_hi: "भगवान गणेश को विशेष रूप से मोदक, दूर्वा घास, लाल फूल (हिबिस्कस), नारियल और पंचामृत प्रिय हैं। परंपरा के अनुसार 21 मोदक अर्पित किए जाते हैं। लाल सिंदूर और लाल वस्त्र भी गणेश पूजा से जुड़े हैं।"
    },
    {
      q_en: "For what occasions is Ganesh Puja specifically recommended?",
      a_en: "Ganesh Puja is recommended before: starting a new business, moving into a new home, beginning of studies or exams, marriages and engagements, vehicle pooja (car puja), new venture launches, and any important life events.",
      q_hi: "किन अवसरों पर विशेष रूप से गणेश पूजा की जाती है?",
      a_hi: "गणेश पूजा इन अवसरों से पहले की जाती है: नया व्यवसाय शुरू करना, नए घर में प्रवेश, पढ़ाई या परीक्षाओं की शुरुआत, विवाह और सगाई, वाहन पूजा (कार पूजा), नई उद्यम शुरूआत और कोई भी महत्वपूर्ण जीवन की घटना।"
    },
    {
      q_en: "Can Ganesh Puja be done at home without an idol?",
      a_en: "Yes, Ganesh Puja can be performed at home using a Ganesha idol (preferably earthen clay), a photo, or even a Betel nut (Supari) placed on a kalash as a symbolic representation. Pandit Ji can guide you on the most appropriate form for your home.",
      q_hi: "क्या घर पर मूर्ति के बिना गणेश पूजा हो सकती है?",
      a_hi: "हाँ, गणेश पूजा घर पर गणेश मूर्ति (अधिमानतः मिट्टी की), फोटो, या कलश पर रखे सुपारी के प्रतीकात्मक प्रतिनिधित्व का उपयोग करके की जा सकती है। पंडित जी आपके घर के लिए सबसे उपयुक्त स्वरूप पर मार्गदर्शन करेंगे।"
    }
  ],
  "lakshmi-puja": [
    {
      q_en: "When is the most auspicious time to perform Lakshmi Puja?",
      a_en: "The most auspicious times for Lakshmi Puja are: every Friday (Shukravar), Diwali Amavasya night, Purnima (Full Moon), Navratri, and Akshaya Tritiya. The Shri Sukta from the Rigveda recommends Prahar Kaal (evening twilight) as the ideal time.",
      q_hi: "लक्ष्मी पूजा के लिए सबसे शुभ समय कब है?",
      a_hi: "लक्ष्मी पूजा के लिए सबसे शुभ समय है: प्रत्येक शुक्रवार, दीपावली अमावस्या की रात, पूर्णिमा, नवरात्रि और अक्षय तृतीया। ऋग्वेद के श्री सूक्त में प्रहर काल (सांध्यकालीन) को आदर्श समय बताया गया है।"
    },
    {
      q_en: "What are the benefits of Lakshmi Puja?",
      a_en: "Lakshmi Puja performed with Shri Sukta chanting removes financial obstacles, brings business prosperity, improves cash flow, removes debts, and invites abundance into the home. It is especially beneficial for shop/business inaugurations.",
      q_hi: "लक्ष्मी पूजा के क्या लाभ हैं?",
      a_hi: "श्री सूक्त पाठ के साथ लक्ष्मी पूजा वित्तीय बाधाओं को दूर करती है, व्यापारिक समृद्धि लाती है, नकदी प्रवाह बेहतर करती है, ऋण हटाती है और घर में वैभव लाती है। यह दुकान/व्यापार उद्घाटन के लिए विशेष रूप से लाभकारी है।"
    },
    {
      q_en: "Can Lakshmi Puja be performed in an office or shop?",
      a_en: "Yes, Lakshmi Puja is especially recommended for offices, shops, and business premises for prosperity. A special Lakshmi Puja with Vastu elements is available for commercial spaces.",
      q_hi: "क्या लक्ष्मी पूजा कार्यालय या दुकान में हो सकती है?",
      a_hi: "हाँ, लक्ष्मी पूजा विशेष रूप से कार्यालयों, दुकानों और व्यावसायिक परिसरों के लिए समृद्धि हेतु अनुशंसित है। व्यावसायिक स्थानों के लिए वास्तु तत्वों के साथ विशेष लक्ष्मी पूजा उपलब्ध है।"
    },
    {
      q_en: "How long does Lakshmi Puja take?",
      a_en: "A standard Lakshmi Puja takes about 1.5 to 2 hours including Shri Sukta recitation, Lotus archana, Aarti, and Prasad distribution. The Vaibhav Lakshmi Puja variant takes slightly longer.",
      q_hi: "लक्ष्मी पूजा में कितना समय लगता है?",
      a_hi: "एक सामान्य लक्ष्मी पूजा में श्री सूक्त पाठ, कमल अर्चना, आरती और प्रसाद वितरण सहित लगभग 1.5 से 2 घंटे लगते हैं। वैभव लक्ष्मी पूजा में थोड़ा अधिक समय लगता है।"
    },
    {
      q_en: "What items are needed for Lakshmi Puja?",
      a_en: "Key samagri includes lotus flowers or red flowers, Shri Yantra, gold/silver coins, turmeric, kumkum, ghee, honey, five fruits, and incense. PanditGhar.in brings all samagri included in the package price.",
      q_hi: "लक्ष्मी पूजा के लिए क्या सामग्री चाहिए?",
      a_hi: "मुख्य सामग्री में कमल या लाल फूल, श्री यंत्र, सोने/चाँदी के सिक्के, हल्दी, कुमकुम, घी, शहद, पाँच फल और धूप शामिल हैं। PanditGhar.in पैकेज मूल्य में सभी सामग्री लाता है।"
    }
  ],
  "navgrah-puja": [
    {
      q_en: "Which problems does Navgrah Puja solve?",
      a_en: "Navgrah Puja, as prescribed in the Matsya Purana, resolves issues caused by malefic planetary positions: career setbacks, delayed marriages, health issues, mental stress, financial losses, Shani Sade Sati, Rahu-Ketu doshas, and other planetary afflictions in the horoscope.",
      q_hi: "नवग्रह पूजा किन समस्याओं का समाधान करती है?",
      a_hi: "मत्स्य पुराण में वर्णित नवग्रह पूजा अशुभ ग्रह स्थितियों से उत्पन्न समस्याओं का समाधान करती है: करियर में बाधाएं, देरी से विवाह, स्वास्थ्य समस्याएं, मानसिक तनाव, आर्थिक नुकसान, शनि साढ़े साती और राहु-केतु दोष।"
    },
    {
      q_en: "When should Navgrah Puja be done?",
      a_en: "Navgrah Puja can be performed on any auspicious day. However, Sundays are dedicated to the Sun, Mondays to the Moon, Tuesdays to Mars, Wednesdays to Mercury, Thursdays to Jupiter, Fridays to Venus, and Saturdays to Saturn. Doing the puja on the planet's specific day amplifies its effect.",
      q_hi: "नवग्रह पूजा कब करनी चाहिए?",
      a_hi: "नवग्रह पूजा किसी भी शुभ दिन की जा सकती है। रविवार को सूर्य, सोमवार को चंद्र, मंगलवार को मंगल, बुधवार को बुध, गुरुवार को बृहस्पति, शुक्रवार को शुक्र और शनिवार को शनि समर्पित है।"
    },
    {
      q_en: "How long does Navgrah Puja take?",
      a_en: "A complete Navgrah Puja takes approximately 2 to 2.5 hours. It includes individual worship of each of the nine planets with specific mantras, offerings, and a combined Havan at the end.",
      q_hi: "नवग्रह पूजा में कितना समय लगता है?",
      a_hi: "संपूर्ण नवग्रह पूजा में लगभग 2 से 2.5 घंटे लगते हैं। इसमें नौ ग्रहों में से प्रत्येक की विशिष्ट मंत्रों और भेंट के साथ पूजा और अंत में संयुक्त हवन शामिल है।"
    },
    {
      q_en: "Is Navgrah Puja the same as Jyotish consultation?",
      a_en: "No. Navgrah Puja is a Vedic ritual performed by a qualified pandit. Jyotish (astrology) is a separate consultation for reading the horoscope. PanditGhar.in can assist with both — horoscope reading to identify the problematic planet and then performing the appropriate Navgrah Puja.",
      q_hi: "क्या नवग्रह पूजा और ज्योतिष परामर्श एक ही है?",
      a_hi: "नहीं। नवग्रह पूजा एक योग्य पंडित द्वारा किया जाने वाला वैदिक अनुष्ठान है। ज्योतिष कुंडली पढ़ने के लिए एक अलग परामर्श है। PanditGhar.in दोनों में सहायता कर सकता है।"
    },
    {
      q_en: "Can Navgrah Puja be done at home?",
      a_en: "Yes, Navgrah Puja is commonly performed at home. A Navgrah yantra or nine small idols of the planets can be set up by Pandit Ji in a designated worship area. The puja can also be performed in a temple.",
      q_hi: "क्या नवग्रह पूजा घर पर हो सकती है?",
      a_hi: "हाँ, नवग्रह पूजा सामान्यतः घर पर की जाती है। पंडित जी एक निर्धारित पूजा क्षेत्र में नवग्रह यंत्र या ग्रहों की नौ छोटी मूर्तियां स्थापित कर सकते हैं।"
    }
  ],
  "vastu-shanti": [
    {
      q_en: "What is Vastu Shanti Puja and when is it needed?",
      a_en: "Vastu Shanti Puja appeases Vastu Devata and corrects Vastu defects in a property without structural changes. It is needed when: moving into an existing property, after major renovations, when family members repeatedly fall sick, or when business is suffering despite efforts.",
      q_hi: "वास्तु शांति पूजा क्या है और कब जरूरी है?",
      a_hi: "वास्तु शांति पूजा वास्तु देवता को प्रसन्न करती है और बिना संरचनात्मक बदलाव के संपत्ति के वास्तु दोषों को ठीक करती है। यह जरूरी है: किसी मौजूदा संपत्ति में जाने पर, बड़े नवीकरण के बाद, परिवार के बार-बार बीमार पड़ने पर, या प्रयासों के बावजूद व्यवसाय में नुकसान होने पर।"
    },
    {
      q_en: "Can Vastu Shanti be done without doing structural changes?",
      a_en: "Yes. Vastu Shanti Puja is specifically designed to correct Vastu defects through ritual means without any demolition or structural changes. Pandit Ji will identify the Vastu Dosha zones and perform targeted rituals to correct the energy imbalances.",
      q_hi: "क्या संरचनात्मक बदलाव के बिना वास्तु शांति हो सकती है?",
      a_hi: "हाँ। वास्तु शांति पूजा विशेष रूप से किसी भी तोड़-फोड़ या संरचनात्मक परिवर्तन के बिना अनुष्ठानिक तरीकों से वास्तु दोषों को ठीक करने के लिए बनाई गई है।"
    },
    {
      q_en: "How long does Vastu Shanti Puja take?",
      a_en: "A complete Vastu Shanti Puja takes 3 to 4 hours and includes: property assessment, Ganesh Puja, Navgrah Puja, 45 Devata worship (Vastu Purush Mandal), Havan, and Kalash Sthapana in all directions.",
      q_hi: "वास्तु शांति पूजा में कितना समय लगता है?",
      a_hi: "संपूर्ण वास्तु शांति पूजा में 3 से 4 घंटे लगते हैं और इसमें संपत्ति मूल्यांकन, गणेश पूजा, नवग्रह पूजा, 45 देवता पूजा (वास्तु पुरुष मंडल), हवन और सभी दिशाओं में कलश स्थापना शामिल है।"
    },
    {
      q_en: "Is Vastu Shanti needed for rented properties?",
      a_en: "A simplified version of Vastu Shanti is recommended for rented homes. It focuses on purification and positive energy without the complete Vastu Purush Mandal puja. This is a cost-effective solution for renters.",
      q_hi: "क्या किराए की संपत्ति के लिए वास्तु शांति जरूरी है?",
      a_hi: "किराए के घरों के लिए वास्तु शांति का एक सरलीकृत संस्करण अनुशंसित है। यह पूर्ण वास्तु पुरुष मंडल पूजा के बिना शुद्धि और सकारात्मक ऊर्जा पर केंद्रित है।"
    },
    {
      q_en: "Can Vastu Shanti Puja be done for commercial properties?",
      a_en: "Yes, Vastu Shanti is performed for homes, offices, shops, factories, and commercial plots. For commercial properties, the puja emphasizes the 'Dhanasthana' (wealth zone) and 'Karmasthana' (work zone) of the property.",
      q_hi: "क्या वास्तु शांति पूजा व्यावसायिक संपत्तियों के लिए हो सकती है?",
      a_hi: "हाँ, वास्तु शांति घरों, कार्यालयों, दुकानों, कारखानों और व्यावसायिक भूखंडों के लिए की जाती है। व्यावसायिक संपत्तियों के लिए पूजा में 'धनस्थान' और 'कर्मस्थान' पर जोर दिया जाता है।"
    }
  ],
  "kanya-puja": [
    {
      q_en: "What is Kanya Puja and which girls qualify?",
      a_en: "Kanya Puja involves worshipping nine young girls (age 2-10) as the nine forms of Devi Durga (Nava Durga). Girls should be unmarried, pre-pubescent, and from any caste. The Devi Bhagavata and Markandeya Purana describe this as one of the most powerful forms of Devi worship.",
      q_hi: "कन्या पूजा क्या है और कौन सी कन्याएं योग्य हैं?",
      a_hi: "कन्या पूजा में नौ युवा कन्याओं (2-10 वर्ष) को देवी दुर्गा के नौ रूपों (नव दुर्गा) के रूप में पूजा जाता है। कन्याएं अविवाहित, पूर्व-यौवन और किसी भी जाति की होनी चाहिए।"
    },
    {
      q_en: "On which day of Navratri is Kanya Puja performed?",
      a_en: "Kanya Puja is traditionally performed on Ashtami (8th day) or Navami (9th day) of Navratri, though it can be done on any day during the nine nights. Ashtami is dedicated to Mahagauri and Navami to Siddhidatri.",
      q_hi: "कन्या पूजा नवरात्रि के किस दिन होती है?",
      a_hi: "कन्या पूजा परंपरागत रूप से नवरात्रि की अष्टमी (8वें दिन) या नवमी (9वें दिन) को की जाती है। अष्टमी महागौरी और नवमी सिद्धिदात्री को समर्पित है।"
    },
    {
      q_en: "What offerings are given to the girls in Kanya Puja?",
      a_en: "In Kanya Puja, the girls' feet are washed with Gangajal, Tilak is applied, Chunari (red dupatta) is offered, and they are given Puri-Halwa-Chana (traditional prasad), fruits, and small gifts. Cash or gifts are given as dakshina.",
      q_hi: "कन्या पूजा में कन्याओं को क्या भेंट दी जाती है?",
      a_hi: "कन्या पूजा में कन्याओं के पैर गंगाजल से धोए जाते हैं, तिलक लगाया जाता है, चुनरी (लाल दुपट्टा) भेंट की जाती है और उन्हें पूरी-हलवा-चना (पारंपरिक प्रसाद), फल और छोटे उपहार दिए जाते हैं।"
    },
    {
      q_en: "Can Kanya Puja be done outside Navratri?",
      a_en: "Yes, Kanya Puja can be performed as a standalone puja on any auspicious occasion such as house warming, child birth, or successful completion of a project. It is a powerful way to invoke Devi's blessings at any time.",
      q_hi: "क्या कन्या पूजा नवरात्रि के बाहर हो सकती है?",
      a_hi: "हाँ, कन्या पूजा गृह प्रवेश, बच्चे के जन्म या किसी परियोजना की सफल समाप्ति जैसे किसी भी शुभ अवसर पर एकल पूजा के रूप में की जा सकती है।"
    },
    {
      q_en: "How do I arrange for the nine girls?",
      a_en: "Typically, family members, neighbors, or family friends can provide their daughters for Kanya Puja. Pandit Ji can also guide you in finding suitable girls. The family conducting the puja does not need to provide all nine from their own family.",
      q_hi: "नौ कन्याओं की व्यवस्था कैसे करें?",
      a_hi: "आमतौर पर परिवार के सदस्य, पड़ोसी या पारिवारिक मित्र अपनी बेटियां कन्या पूजा के लिए दे सकते हैं। पंडित जी उपयुक्त कन्याएं ढूंढने में भी मार्गदर्शन कर सकते हैं।"
    }
  ],
  "annaprashan": [
    {
      q_en: "At what age is Annaprashan performed?",
      a_en: "Annaprashan (first rice feeding) is performed in the 6th month for boys and the 5th or 7th month for girls, as stated in the Ashvalayana and Baudhayana Grihya Sutras. The first even month (6th) is considered most auspicious for boys, and odd months for girls.",
      q_hi: "अन्नप्राशन किस उम्र में होता है?",
      a_hi: "आश्वलायन और बौधायन गृह्यसूत्रों के अनुसार अन्नप्राशन लड़कों के लिए 6वें महीने में और लड़कियों के लिए 5वें या 7वें महीने में किया जाता है।"
    },
    {
      q_en: "What food is offered to the baby in Annaprashan?",
      a_en: "The baby's first food in Annaprashan is traditionally Kheer (sweet rice pudding made with milk, rice, and sugar) or Khichdi (rice and lentils). The food is offered to the deity first, then fed to the baby by the father or maternal uncle, accompanied by Vedic mantras.",
      q_hi: "अन्नप्राशन में बच्चे को कौन सा भोजन दिया जाता है?",
      a_hi: "अन्नप्राशन में बच्चे का पहला भोजन परंपरागत रूप से खीर (दूध, चावल और चीनी से बनी मिठाई) या खिचड़ी होती है। भोजन पहले देवता को अर्पित किया जाता है, फिर वैदिक मंत्रों के साथ पिता या मामा द्वारा बच्चे को खिलाया जाता है।"
    },
    {
      q_en: "Is there any ritual of choosing the baby's career in Annaprashan?",
      a_en: "Yes, many families perform the 'Nishkraman' or 'Dahi-Chur' tradition where several objects (book, pen, coins, soil, food) are placed before the baby. The object the baby touches first is believed to indicate their natural inclination. This is a traditional practice not strictly Shastreey but widely followed.",
      q_hi: "क्या अन्नप्राशन में बच्चे के करियर चुनने का कोई अनुष्ठान होता है?",
      a_hi: "हाँ, कई परिवार 'दही-चूर' परंपरा करते हैं जहाँ बच्चे के सामने कई वस्तुएं (किताब, कलम, सिक्के, मिट्टी, भोजन) रखी जाती हैं। बच्चा जिस वस्तु को पहले छूता है वह उसकी प्राकृतिक प्रवृत्ति का संकेत माना जाता है।"
    },
    {
      q_en: "How long does Annaprashan Puja take?",
      a_en: "Annaprashan ceremony takes about 1.5 to 2 hours including Ganesh Puja, Navgrah puja, Janam Kundali preparation, the rice feeding ritual, and family blessings.",
      q_hi: "अन्नप्राशन पूजा में कितना समय लगता है?",
      a_hi: "अन्नप्राशन समारोह में गणेश पूजा, नवग्रह पूजा, जन्म कुंडली तैयारी, अन्न खिलाने की विधि और पारिवारिक आशीर्वाद सहित लगभग 1.5 से 2 घंटे लगते हैं।"
    },
    {
      q_en: "Can Annaprashan be done at home?",
      a_en: "Yes, Annaprashan is primarily a home ceremony. A clean, decorated space with the deity photo or idol is sufficient. Pandit Ji brings all required samagri and prepares the Janam Kundali for the baby.",
      q_hi: "क्या अन्नप्राशन घर पर हो सकता है?",
      a_hi: "हाँ, अन्नप्राशन मुख्यतः एक घरेलू समारोह है। देवता की फोटो या मूर्ति के साथ एक स्वच्छ, सजाई हुई जगह पर्याप्त है। पंडित जी सभी आवश्यक सामग्री लाते हैं और बच्चे की जन्म कुंडली तैयार करते हैं।"
    }
  ],
  "yagyopaveet": [
    {
      q_en: "At what age should Yagyopaveet (Janoi) be performed?",
      a_en: "According to the Paraskara Grihya Sutra, Yagyopaveet (Upanayana) should ideally be performed at age 7-8 for Brahmins, 11 for Kshatriyas, and 12 for Vaishyas. The ceremony must be completed before the age of 16 for full benefit.",
      q_hi: "यज्ञोपवीत (जनेऊ) संस्कार किस उम्र में होना चाहिए?",
      a_hi: "पारस्कर गृह्यसूत्र के अनुसार यज्ञोपवीत (उपनयन) ब्राह्मणों के लिए 7-8 वर्ष, क्षत्रियों के लिए 11 वर्ष और वैश्यों के लिए 12 वर्ष में आदर्श रूप से किया जाना चाहिए।"
    },
    {
      q_en: "What is the significance of the sacred thread (Yajnopavita)?",
      a_en: "The Yajnopavita (sacred thread) represents three debts a person owes: to Rishis (teachers/sages) through study of scriptures, to Pitru (ancestors) through continuation of lineage, and to Deva (gods) through performance of yajnas. The three strands of the thread symbolize these three debts.",
      q_hi: "पवित्र धागे (यज्ञोपवीत) का महत्व क्या है?",
      a_hi: "यज्ञोपवीत (पवित्र धागा) तीन ऋणों का प्रतिनिधित्व करता है: ऋषि ऋण (शास्त्रों के अध्ययन द्वारा), पितृ ऋण (वंश की निरंतरता द्वारा) और देव ऋण (यज्ञों के प्रदर्शन द्वारा)। धागे के तीन धागे इन तीन ऋणों का प्रतीक हैं।"
    },
    {
      q_en: "What happens during the Yagyopaveet ceremony?",
      a_en: "The Yagyopaveet ceremony includes: Ganesh Puja, Navagraha puja, the boy's head is shaved (Chuda Karma), sacred thread is worn with Gayatri Mantra initiation, Brahmacharya vows are taken, and the boy performs his first Havan. The ceremony can span 1 to 2 days.",
      q_hi: "यज्ञोपवीत समारोह में क्या होता है?",
      a_hi: "यज्ञोपवीत समारोह में शामिल हैं: गणेश पूजा, नवग्रह पूजा, लड़के का मुंडन (चूड़ा कर्म), गायत्री मंत्र दीक्षा के साथ पवित्र धागा धारण, ब्रह्मचर्य व्रत और लड़के का पहला हवन। समारोह 1 से 2 दिन तक चल सकता है।"
    },
    {
      q_en: "Can Yagyopaveet be performed by all castes?",
      a_en: "Traditionally, Yagyopaveet is for the three upper Varnas (Brahmin, Kshatriya, Vaishya). However, in modern times, many families from all communities perform this as a cultural and spiritual rite of passage. Pandit Ji will advise based on your family tradition.",
      q_hi: "क्या यज्ञोपवीत सभी जातियों द्वारा किया जा सकता है?",
      a_hi: "परंपरागत रूप से यज्ञोपवीत तीन ऊपरी वर्णों (ब्राह्मण, क्षत्रिय, वैश्य) के लिए है। हालाँकि, आधुनिक समय में सभी समुदायों के कई परिवार इसे सांस्कृतिक और आध्यात्मिक उत्तरदायित्व के रूप में करते हैं।"
    },
    {
      q_en: "What is the Gayatri Mantra initiation in Yagyopaveet?",
      a_en: "The Gayatri Mantra (Om Bhur Bhuvah Svah...) is the most sacred Vedic mantra, from the Rigveda. During Yagyopaveet, Pandit Ji whispers the Gayatri Mantra into the boy's right ear — this is the Upadesha (initiation). The boy commits to chanting it daily as part of his Brahmacharya.",
      q_hi: "यज्ञोपवीत में गायत्री मंत्र दीक्षा क्या है?",
      a_hi: "गायत्री मंत्र (ॐ भूर्भुवः स्वः...) सबसे पवित्र वैदिक मंत्र है। यज्ञोपवीत के दौरान पंडित जी लड़के के दाहिने कान में गायत्री मंत्र फुसफुसाते हैं — यही उपदेश (दीक्षा) है।"
    }
  ],
  "mangal-dosh": [
    {
      q_en: "How do I know if I have Mangal Dosha?",
      a_en: "Mangal Dosha occurs when Mars (Mangal) is placed in the 1st, 2nd, 4th, 7th, 8th, or 12th house of the Lagna (ascendant) or Moon or Venus chart in the horoscope. PanditGhar.in can help with Kundali analysis to confirm Mangal Dosha before booking the puja.",
      q_hi: "कैसे जानें कि मुझे मंगल दोष है?",
      a_hi: "मंगल दोष तब होता है जब मंगल कुंडली के लग्न, चंद्र या शुक्र की कुंडली में पहले, दूसरे, चौथे, सातवें, आठवें या बारहवें भाव में हो। PanditGhar.in बुकिंग से पहले मंगल दोष की पुष्टि के लिए कुंडली विश्लेषण में मदद कर सकता है।"
    },
    {
      q_en: "Is Mangal Dosha Shanti necessary before marriage?",
      a_en: "Yes, Jyotisha Shastra strongly recommends Mangal Dosha Shanti Puja before marriage, especially if only one partner has Mangal Dosha. The puja nullifies the malefic effect of Mars and ensures marital harmony. It's also done when two Manglik partners marry.",
      q_hi: "क्या मंगल दोष शांति विवाह से पहले जरूरी है?",
      a_hi: "हाँ, ज्योतिष शास्त्र विवाह से पहले मंगल दोष शांति पूजा की दृढ़ सिफारिश करता है, खासकर यदि केवल एक साथी को मंगल दोष है। यदि दोनों साथी मांगलिक हैं तो भी यह पूजा की जाती है।"
    },
    {
      q_en: "How long does Mangal Dosha Shanti Puja take?",
      a_en: "Mangal Dosha Shanti Puja takes approximately 2 to 3 hours and includes: Ganesh Puja, Mangal Stotra recitation, Coral (Moonga) gemstone consecration, Mars Havan with specific offerings (red lentils, jaggery), and Brahmin dakshina.",
      q_hi: "मंगल दोष शांति पूजा में कितना समय लगता है?",
      a_hi: "मंगल दोष शांति पूजा में लगभग 2 से 3 घंटे लगते हैं और इसमें गणेश पूजा, मंगल स्तोत्र पाठ, मूंगा रत्न अभिमंत्रण, विशिष्ट भेंट (लाल मसूर, गुड़) के साथ मंगल हवन और ब्राह्मण दक्षिणा शामिल है।"
    },
    {
      q_en: "Can Mangal Dosha Shanti be done in Bangalore?",
      a_en: "Yes, PanditGhar.in specializes in Mangal Dosha Shanti Puja at homes across all Bangalore areas. The puja is also recommended before the wedding date is finalized so that a fully auspicious Vivah Muhurat can be selected.",
      q_hi: "क्या बेंगलुरु में मंगल दोष शांति हो सकती है?",
      a_hi: "हाँ, PanditGhar.in बेंगलुरु के सभी क्षेत्रों में घरों पर मंगल दोष शांति पूजा में विशेषज्ञता रखता है। विवाह की तारीख तय होने से पहले यह पूजा करने की सिफारिश की जाती है।"
    },
    {
      q_en: "What are the remedies prescribed besides the puja?",
      a_en: "Besides the Mangal Dosha Shanti Puja, remedies include: wearing Red Coral (Moonga) gemstone in gold or copper ring on Tuesday, visiting Hanuman or Karthikeya temples on Tuesdays, chanting Mangal Stotra 108 times daily, and donating red lentils, jaggery, and copper items on Tuesdays.",
      q_hi: "पूजा के अलावा क्या उपाय बताए गए हैं?",
      a_hi: "मंगल दोष शांति पूजा के अलावा उपाय: मंगलवार को सोने या ताँबे की अंगूठी में लाल मूंगा रत्न पहनना, मंगलवार को हनुमान या कार्तिकेय मंदिर जाना, दैनिक 108 बार मंगल स्तोत्र का पाठ और मंगलवार को लाल मसूर, गुड़ और ताँबे की वस्तुएं दान करना।"
    }
  ],
  "kaal-sarp-dosh": [
    {
      q_en: "What is Kaal Sarp Dosha and how is it identified?",
      a_en: "Kaal Sarp Dosha arises when all seven planets (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn) are placed between Rahu and Ketu in the horoscope. It causes obstacles in career, delayed marriage, health issues, and mental restlessness. It's identified through detailed Kundali analysis.",
      q_hi: "काल सर्प दोष क्या है और इसे कैसे पहचाना जाता है?",
      a_hi: "काल सर्प दोष तब उत्पन्न होता है जब सभी सात ग्रह (सूर्य, चंद्र, मंगल, बुध, बृहस्पति, शुक्र, शनि) कुंडली में राहु और केतु के बीच हों। इससे करियर में बाधाएं, देरी से विवाह, स्वास्थ्य समस्याएं और मानसिक अशांति होती है।"
    },
    {
      q_en: "How is Kaal Sarp Dosha Puja performed?",
      a_en: "Kaal Sarp Dosha Puja includes: worship of Nag Devata with milk and flowers, Rudrabhishek, recitation of Kaal Sarp Stotra and Maha Mrityunjaya Mantra, Havan with specific offerings, and releasing a silver snake idol in flowing water. The puja is highly effective when performed at Trimbakeshwar or at home.",
      q_hi: "काल सर्प दोष पूजा कैसे होती है?",
      a_hi: "काल सर्प दोष पूजा में शामिल हैं: दूध और फूलों के साथ नाग देवता पूजा, रुद्राभिषेक, काल सर्प स्तोत्र और महा मृत्युंजय मंत्र पाठ, विशिष्ट भेंट के साथ हवन और बहते पानी में चाँदी की नाग मूर्ति विसर्जन।"
    },
    {
      q_en: "Is there a specific day for Kaal Sarp Dosha Puja?",
      a_en: "Nag Panchami is the most auspicious day for Kaal Sarp Dosha Puja. Additionally, Mondays during Shravan month, Nagula Chavithi, and any Amavasya (new moon) are also recommended. The puja should ideally be done when Rahu or Ketu are transiting favorable positions.",
      q_hi: "काल सर्प दोष पूजा के लिए कोई विशेष दिन है?",
      a_hi: "काल सर्प दोष पूजा के लिए नाग पंचमी सबसे शुभ दिन है। इसके अलावा सावन के महीने के सोमवार, नागुला चवितही और कोई भी अमावस्या भी अनुशंसित हैं।"
    },
    {
      q_en: "Can Kaal Sarp Dosha Puja be done at home in Bangalore?",
      a_en: "Yes, PanditGhar.in performs Kaal Sarp Dosha Puja at home across all Bangalore areas. While Trimbakeshwar (Nashik) is considered the ideal location, an equally effective home puja can be arranged with proper setup.",
      q_hi: "क्या काल सर्प दोष पूजा बेंगलुरु में घर पर हो सकती है?",
      a_hi: "हाँ, PanditGhar.in बेंगलुरु के सभी क्षेत्रों में घर पर काल सर्प दोष पूजा करता है। हालाँकि त्र्यंबकेश्वर (नासिक) को आदर्श स्थान माना जाता है, उचित व्यवस्था के साथ समान रूप से प्रभावी घरेलू पूजा हो सकती है।"
    },
    {
      q_en: "How many types of Kaal Sarp Dosha are there?",
      a_en: "There are 12 types of Kaal Sarp Dosha based on the position of Rahu: Anant, Kulika, Vasuki, Shankhapal, Padma, Mahapadma, Takshak, Karkotak, Shankachud, Ghatak, Vishdhar, and Sheshnag. Each type has slightly different effects. Pandit Ji determines the type from the Kundali.",
      q_hi: "काल सर्प दोष के कितने प्रकार हैं?",
      a_hi: "राहु की स्थिति के आधार पर 12 प्रकार के काल सर्प दोष होते हैं: अनंत, कुलिक, वासुकि, शंखपाल, पद्म, महापद्म, तक्षक, कर्कोटक, शंखचूड़, घातक, विषधर और शेषनाग। पंडित जी कुंडली से प्रकार निर्धारित करते हैं।"
    }
  ],
  "hanuman-puja": [
    {
      q_en: "On which days is Hanuman Puja most auspicious?",
      a_en: "Tuesday (Mangalwar) and Saturday (Shaniwar) are the most auspicious days for Hanuman Puja as Lord Hanuman is believed to be especially receptive on these days. Hanuman Jayanti (Chaitra Purnima) is the most sacred day for Hanuman worship.",
      q_hi: "हनुमान पूजा के लिए कौन से दिन सबसे शुभ हैं?",
      a_hi: "मंगलवार और शनिवार हनुमान पूजा के लिए सबसे शुभ दिन हैं। हनुमान जयंती (चैत्र पूर्णिमा) हनुमान पूजा के लिए सबसे पवित्र दिन है।"
    },
    {
      q_en: "What problems does Hanuman Puja help with?",
      a_en: "Hanuman Puja removes: fear, evil eye (nazar), black magic, negative energies, career obstacles, Shani dosha effects, and provides courage, mental strength, physical health, and devotion. The Sundarkand path is especially effective for removing all types of life obstacles.",
      q_hi: "हनुमान पूजा किन समस्याओं में मदद करती है?",
      a_hi: "हनुमान पूजा दूर करती है: भय, बुरी नज़र, काला जादू, नकारात्मक ऊर्जाएं, करियर बाधाएं और शनि दोष प्रभाव। यह साहस, मानसिक शक्ति, शारीरिक स्वास्थ्य और भक्ति प्रदान करती है।"
    },
    {
      q_en: "What is Sundarkand and should I add it to Hanuman Puja?",
      a_en: "Sundarkand is the 5th chapter of Valmiki Ramayana describing Hanuman's journey to Lanka. Including Sundarkand in Hanuman Puja amplifies the benefits significantly, especially for removal of obstacles and wish fulfillment. PanditGhar.in can arrange Sundarkand as a standalone or combined with Hanuman Puja.",
      q_hi: "सुंदरकांड क्या है और क्या मुझे इसे हनुमान पूजा में जोड़ना चाहिए?",
      a_hi: "सुंदरकांड वाल्मीकि रामायण का 5वाँ काण्ड है जो हनुमान की लंका यात्रा का वर्णन करता है। हनुमान पूजा में सुंदरकांड जोड़ने से लाभ काफी बढ़ जाता है, विशेष रूप से बाधाओं को दूर करने और मनोकामना पूर्ति के लिए।"
    },
    {
      q_en: "How long does Hanuman Puja take?",
      a_en: "A standard Hanuman Puja (with Hanuman Chalisa, Bajrang Baan, and Aarti) takes about 1 to 1.5 hours. If Sundarkand is added, it extends to 3 to 4 hours. The combined Hanuman Puja + Sundarkand is available at a special package price.",
      q_hi: "हनुमान पूजा में कितना समय लगता है?",
      a_hi: "एक सामान्य हनुमान पूजा (हनुमान चालीसा, बजरंग बाण और आरती के साथ) में लगभग 1 से 1.5 घंटे लगते हैं। सुंदरकांड जोड़ने पर 3 से 4 घंटे लग जाते हैं।"
    },
    {
      q_en: "What is the scriptural basis for Hanuman Puja?",
      a_en: "Hanuman worship is based on Valmiki Ramayana, Tulsidas's Ramcharitmanas, and the Hanuman Chalisa written by Goswami Tulsidas. The Bajrang Baan is considered especially powerful for protection from evil and negative forces.",
      q_hi: "हनुमान पूजा का शास्त्रीय आधार क्या है?",
      a_hi: "हनुमान पूजा वाल्मीकि रामायण, तुलसीदास की रामचरितमानस और गोस्वामी तुलसीदास द्वारा लिखी हनुमान चालीसा पर आधारित है। बजरंग बाण को बुराई और नकारात्मक शक्तियों से सुरक्षा के लिए विशेष रूप से शक्तिशाली माना जाता है।"
    }
  ],
  "durga-puja": [
    {
      q_en: "What is Durga Saptashati and why is it central to Durga Puja?",
      a_en: "Durga Saptashati (Devi Mahatmya) is a collection of 700 verses from the Markandeya Purana describing the divine power of Goddess Durga and her victories over demons. Its recitation is the most powerful form of Devi worship, granting protection, removal of enemies, and spiritual strength.",
      q_hi: "दुर्गा सप्तशती क्या है और यह दुर्गा पूजा में क्यों केंद्रीय है?",
      a_hi: "दुर्गा सप्तशती (देवी महात्म्य) मार्कण्डेय पुराण के 700 श्लोकों का संग्रह है जो देवी दुर्गा की दिव्य शक्ति और असुरों पर उनकी विजय का वर्णन करता है। इसका पाठ देवी पूजा का सबसे शक्तिशाली रूप है।"
    },
    {
      q_en: "When is the best time to perform Durga Puja?",
      a_en: "Durga Puja is most powerfully performed during Navratri (Chaitra and Sharad). Other auspicious times include Fridays, Ashtami, and Navami tithis. For Dosha removal, it can be performed on any day with proper intention.",
      q_hi: "दुर्गा पूजा के लिए सबसे शुभ समय कब है?",
      a_hi: "दुर्गा पूजा सबसे शक्तिशाली रूप से नवरात्रि (चैत्र और शारद) के दौरान की जाती है। अन्य शुभ समय में शुक्रवार, अष्टमी और नवमी तिथियां हैं।"
    },
    {
      q_en: "How long does a complete Durga Saptashati recitation take?",
      a_en: "Complete Durga Saptashati (700 verses in 13 chapters) takes approximately 3 to 4 hours for a single recitation. PanditGhar.in can arrange a single-day or multi-day recitation depending on your requirement.",
      q_hi: "संपूर्ण दुर्गा सप्तशती पाठ में कितना समय लगता है?",
      a_hi: "संपूर्ण दुर्गा सप्तशती (13 अध्यायों में 700 श्लोक) एक बार के पाठ में लगभग 3 से 4 घंटे लगते हैं। PanditGhar.in आपकी जरूरत के अनुसार एक दिन या बहु-दिवसीय पाठ की व्यवस्था कर सकता है।"
    },
    {
      q_en: "What problems does Durga Puja solve?",
      a_en: "Durga Puja protects against enemies, removes evil eye and black magic, provides courage to overcome life obstacles, cures chronic diseases, removes Graha doshas, and brings peace to the family. It's especially recommended for those facing persistent problems despite all efforts.",
      q_hi: "दुर्गा पूजा किन समस्याओं का समाधान करती है?",
      a_hi: "दुर्गा पूजा शत्रुओं से रक्षा करती है, बुरी नज़र और काले जादू को दूर करती है, जीवन की बाधाओं को दूर करने का साहस देती है, पुराने रोगों को ठीक करती है और परिवार में शांति लाती है।"
    },
    {
      q_en: "Can Durga Puja be combined with Navratri celebrations?",
      a_en: "Yes, PanditGhar.in offers comprehensive Navratri puja packages that include Ghatasthapana, daily Durga Saptashati recitation, Kanya Puja on Ashtami/Navami, and Havan on the final day. A home-based 9-day Navratri setup can be arranged.",
      q_hi: "क्या दुर्गा पूजा को नवरात्रि उत्सव के साथ मिलाया जा सकता है?",
      a_hi: "हाँ, PanditGhar.in व्यापक नवरात्रि पूजा पैकेज प्रदान करता है जिसमें घटस्थापना, दैनिक दुर्गा सप्तशती पाठ, अष्टमी/नवमी पर कन्या पूजा और अंतिम दिन हवन शामिल है।"
    }
  ],
  "saraswati-puja": [
    {
      q_en: "When is Saraswati Puja performed?",
      a_en: "Saraswati Puja is primarily performed on Basant Panchami (Shukla Panchami of Magh month), which is Goddess Saraswati's birthday. It can also be performed before examinations, at the start of a new academic year, or when beginning music, arts, or any skill-based learning.",
      q_hi: "सरस्वती पूजा कब होती है?",
      a_hi: "सरस्वती पूजा मुख्यतः बसंत पंचमी (माघ मास की शुक्ल पंचमी) पर की जाती है जो देवी सरस्वती का जन्मदिन है। परीक्षाओं से पहले, नए शैक्षणिक वर्ष की शुरुआत में, या संगीत, कला या किसी कौशल की शुरुआत पर भी की जा सकती है।"
    },
    {
      q_en: "Who should perform Saraswati Puja?",
      a_en: "Saraswati Puja is ideal for students (of all ages), teachers, musicians, artists, writers, software engineers, and anyone involved in knowledge-based professions. It's also recommended for children starting school.",
      q_hi: "सरस्वती पूजा किसे करनी चाहिए?",
      a_hi: "सरस्वती पूजा छात्रों (सभी उम्र के), शिक्षकों, संगीतकारों, कलाकारों, लेखकों, सॉफ्टवेयर इंजीनियरों और ज्ञान-आधारित व्यवसायों में किसी के लिए भी आदर्श है।"
    },
    {
      q_en: "What books and items are placed in Saraswati Puja?",
      a_en: "In Saraswati Puja, books, notebooks, musical instruments, computers/laptops, tools related to one's profession, and any learning materials are placed before the deity. The objects are worshipped and not used for 24 hours (Vidyarambha). After the puja, all items receive Devi's blessings.",
      q_hi: "सरस्वती पूजा में कौन सी किताबें और वस्तुएं रखी जाती हैं?",
      a_hi: "सरस्वती पूजा में किताबें, नोटबुक, संगीत वाद्ययंत्र, कंप्यूटर/लैपटॉप, अपने पेशे से संबंधित उपकरण और कोई भी सीखने की सामग्री देवता के सामने रखी जाती है।"
    },
    {
      q_en: "How long does Saraswati Puja take?",
      a_en: "Saraswati Puja takes approximately 1.5 to 2 hours including Ganesh Puja, Saraswati Stotra recitation, Pushpanjali, and Aarti. A complete Saraswati Yajna (with Havan) takes 2.5 to 3 hours.",
      q_hi: "सरस्वती पूजा में कितना समय लगता है?",
      a_hi: "सरस्वती पूजा में गणेश पूजा, सरस्वती स्तोत्र पाठ, पुष्पांजलि और आरती सहित लगभग 1.5 से 2 घंटे लगते हैं।"
    },
    {
      q_en: "What is Aksharaabhyasam and is it part of Saraswati Puja?",
      a_en: "Aksharaabhyasam (or Vidyarambha) is the first writing ceremony for young children, typically done on Vijayadashami. A child writes 'Om' or the first letter of the Devanagari script for the first time. This can be combined with Saraswati Puja for a powerful blessing for the child's education.",
      q_hi: "अक्षराभ्यासम क्या है और क्या यह सरस्वती पूजा का हिस्सा है?",
      a_hi: "अक्षराभ्यासम (या विद्यारंभ) छोटे बच्चों के लिए पहला लेखन समारोह है, आमतौर पर विजयदशमी पर किया जाता है। बच्चा पहली बार 'ॐ' या देवनागरी लिपि का पहला अक्षर लिखता है।"
    }
  ],
  "bhagvat-mahapuran": [
    {
      q_en: "What is the significance of Bhagvat Mahapuran Katha?",
      a_en: "Srimad Bhagavata Mahapurana is considered the most sacred of the 18 Puranas. Listening to the complete 7-day Katha grants spiritual merit equivalent to all other religious acts combined. It details the leelas of Lord Vishnu and especially Lord Krishna across all 12 Skandhas.",
      q_hi: "भागवत महापुराण कथा का क्या महत्व है?",
      a_hi: "श्रीमद् भागवत महापुराण 18 पुराणों में सबसे पवित्र माना जाता है। संपूर्ण 7 दिवसीय कथा सुनने से सभी अन्य धार्मिक कार्यों के संयुक्त पुण्य के बराबर आध्यात्मिक पुण्य मिलता है।"
    },
    {
      q_en: "How many days does Bhagvat Katha run and what is covered each day?",
      a_en: "The 7-day Bhagvat Katha covers: Day 1 - Mahatmya and Skandha 1-2 (creation), Day 2 - Skandha 3-4 (Kapila, Dhruva), Day 3 - Skandha 5-6 (Priyavrat, Vishnu Avatars), Day 4 - Skandha 7 (Prahlad), Day 5 - Skandha 8-9 (Gajendra, Vamana), Day 6 - Skandha 10 (Krishna leelas), Day 7 - Skandha 11-12 and Moksha.",
      q_hi: "भागवत कथा कितने दिन चलती है और प्रत्येक दिन क्या कवर होता है?",
      a_hi: "7 दिवसीय भागवत कथा में: दिन 1 - माहात्म्य और स्कंध 1-2, दिन 2 - स्कंध 3-4, दिन 3 - स्कंध 5-6, दिन 4 - स्कंध 7 (प्रह्लाद), दिन 5 - स्कंध 8-9, दिन 6 - स्कंध 10 (कृष्ण लीलाएं), दिन 7 - स्कंध 11-12 और मोक्ष।"
    },
    {
      q_en: "What is included in the Bhagvat Katha package?",
      a_en: "The package includes: Qualified Kathavachak (narrator), daily puja setup, Havan on Day 1 and Day 7, decoration with flowers and lights, sound system, daily Prasad distribution, and complete event management. Venue must be provided by the organizer.",
      q_hi: "भागवत कथा पैकेज में क्या शामिल है?",
      a_hi: "पैकेज में शामिल है: योग्य कथावाचक, दैनिक पूजा सेटअप, पहले और सातवें दिन हवन, फूलों और रोशनी से सजावट, ध्वनि प्रणाली, दैनिक प्रसाद वितरण और पूर्ण आयोजन प्रबंधन। स्थान आयोजक द्वारा प्रदान किया जाना चाहिए।"
    },
    {
      q_en: "Can Bhagvat Katha be arranged in an apartment complex in Bangalore?",
      a_en: "Yes, PanditGhar.in has conducted Bhagvat Katha events in apartment complexes, community halls, and open grounds across Bangalore. We handle all logistics including tent, sound, and prasad. A minimum space of 2000 sq ft is recommended for comfortable seating.",
      q_hi: "क्या बेंगलुरु में अपार्टमेंट कॉम्प्लेक्स में भागवत कथा हो सकती है?",
      a_hi: "हाँ, PanditGhar.in ने बेंगलुरु के अपार्टमेंट कॉम्प्लेक्स, सामुदायिक हॉल और खुले मैदानों में भागवत कथा कार्यक्रम आयोजित किए हैं। हम टेंट, ध्वनि और प्रसाद सहित सभी रसद संभालते हैं।"
    },
    {
      q_en: "What is the recommended donation (dakshina) for Bhagvat Katha?",
      a_en: "The Bhagvat Katha package starts at ₹51,000 for a 7-day event covering all services mentioned. Additional costs for catering, tent, and venue are separate. Brahmin Bhojan (feeding Brahmins) on Day 7 is traditional and highly meritorious.",
      q_hi: "भागवत कथा के लिए अनुशंसित दान (दक्षिणा) क्या है?",
      a_hi: "भागवत कथा पैकेज 7 दिवसीय कार्यक्रम के लिए ₹51,000 से शुरू होता है जिसमें सभी उल्लिखित सेवाएं शामिल हैं। भोजन, टेंट और स्थान की अतिरिक्त लागत अलग है। सातवें दिन ब्राह्मण भोजन परंपरागत और अत्यंत पुण्यकारी है।"
    }
  ],
  "sundarkand": [
    {
      q_en: "What are the benefits of Sundarkand Path?",
      a_en: "Regular Sundarkand Path removes all life obstacles, grants success in career and business, protects from evil eye and negative energies, fulfills wishes, and brings Lord Hanuman's blessings. It is especially recommended for those facing persistent problems despite all efforts.",
      q_hi: "सुंदरकांड पाठ के क्या लाभ हैं?",
      a_hi: "नियमित सुंदरकांड पाठ सभी जीवन की बाधाओं को दूर करता है, करियर और व्यवसाय में सफलता दिलाता है, बुरी नज़र और नकारात्मक ऊर्जाओं से बचाता है, मनोकामनाएं पूरी करता है और भगवान हनुमान का आशीर्वाद लाता है।"
    },
    {
      q_en: "How long does Sundarkand Path take?",
      a_en: "Sundarkand has 68 chapters and takes approximately 3 to 4 hours to complete. PanditGhar.in can arrange a solo recitation by Pandit Ji, or a group recitation with multiple pandits for faster completion.",
      q_hi: "सुंदरकांड पाठ में कितना समय लगता है?",
      a_hi: "सुंदरकांड में 68 अध्याय हैं और इसे पूरा करने में लगभग 3 से 4 घंटे लगते हैं। PanditGhar.in पंडित जी द्वारा एकल पाठ या जल्दी समापन के लिए कई पंडितों के साथ समूह पाठ की व्यवस्था कर सकता है।"
    },
    {
      q_en: "Can Sundarkand be combined with Hanuman Puja?",
      a_en: "Yes, Sundarkand + Hanuman Puja is a powerful combination especially recommended for removing black magic, evil eye, and persistent obstacles. PanditGhar.in offers this as a combined package at a special rate.",
      q_hi: "क्या सुंदरकांड को हनुमान पूजा के साथ जोड़ा जा सकता है?",
      a_hi: "हाँ, सुंदरकांड + हनुमान पूजा एक शक्तिशाली संयोजन है जो काले जादू, बुरी नज़र और लगातार बाधाओं को दूर करने के लिए विशेष रूप से अनुशंसित है।"
    },
    {
      q_en: "On which day should Sundarkand be performed?",
      a_en: "Tuesday and Saturday are the most auspicious days for Sundarkand Path as they are associated with Lord Hanuman. It can also be performed on any day when one needs divine intervention for an urgent matter.",
      q_hi: "सुंदरकांड किस दिन करना चाहिए?",
      a_hi: "मंगलवार और शनिवार सुंदरकांड पाठ के लिए सबसे शुभ दिन हैं क्योंकि ये भगवान हनुमान से जुड़े हैं। किसी जरूरी मामले के लिए किसी भी दिन भी किया जा सकता है।"
    },
    {
      q_en: "Can Sundarkand be performed in a group setting?",
      a_en: "Yes, Sundarkand is often performed as a group activity where family members, friends, or colony residents read together. PanditGhar.in can lead a group Sundarkand session at your community hall or open space.",
      q_hi: "क्या सुंदरकांड समूह में हो सकता है?",
      a_hi: "हाँ, सुंदरकांड अक्सर समूह गतिविधि के रूप में किया जाता है जहाँ परिवार के सदस्य, मित्र या कॉलोनी के निवासी एक साथ पढ़ते हैं। PanditGhar.in आपके सामुदायिक हॉल में समूह सुंदरकांड सत्र का नेतृत्व कर सकता है।"
    }
  ],
  "ram-katha": [
    {
      q_en: "How many days does Ram Katha last?",
      a_en: "Ram Katha can be conducted over 3, 5, 7, or 9 days depending on the organizer's requirement. The 9-day Navaham Ram Katha covers all 7 Kandas of Valmiki Ramayana along with Tulsidas's Ramcharitmanas. Daily bhajan-kirtan and Havan are included.",
      q_hi: "राम कथा कितने दिन चलती है?",
      a_hi: "राम कथा आयोजक की जरूरत के अनुसार 3, 5, 7 या 9 दिन आयोजित हो सकती है। 9 दिवसीय नवाहम राम कथा में वाल्मीकि रामायण के सभी 7 कांड और तुलसीदास की रामचरितमानस शामिल हैं।"
    },
    {
      q_en: "What is included in the Ram Katha package?",
      a_en: "The Ram Katha package includes: Qualified Kathavachak, sound and music system, daily Havan, flower decorations, Prasad distribution daily, and complete event management. Stage, seating, and venue are provided by the organizer.",
      q_hi: "राम कथा पैकेज में क्या शामिल है?",
      a_hi: "राम कथा पैकेज में शामिल है: योग्य कथावाचक, ध्वनि और संगीत प्रणाली, दैनिक हवन, फूलों की सजावट, दैनिक प्रसाद वितरण और पूर्ण आयोजन प्रबंधन।"
    },
    {
      q_en: "Can Ram Katha be organized in Bangalore?",
      a_en: "Yes, PanditGhar.in has experience organizing Ram Katha events in apartment complexes, parks, and community halls across Bangalore. We can arrange the Kathavachak, daily puja, and event logistics.",
      q_hi: "क्या बेंगलुरु में राम कथा आयोजित हो सकती है?",
      a_hi: "हाँ, PanditGhar.in को बेंगलुरु के अपार्टमेंट कॉम्प्लेक्स, पार्क और सामुदायिक हॉल में राम कथा कार्यक्रम आयोजित करने का अनुभव है।"
    },
    {
      q_en: "What is the spiritual benefit of organizing Ram Katha?",
      a_en: "Organizing Ram Katha brings immense spiritual merit (Punya) to the organizer (Yajaman), comparable to performing 100 Ashwamedha Yajnas according to traditional texts. It purifies the home, removes ancestral karma, and brings Lord Ram's blessings to the entire family and community.",
      q_hi: "राम कथा आयोजित करने का आध्यात्मिक लाभ क्या है?",
      a_hi: "राम कथा आयोजित करने से आयोजक (यजमान) को अपार आध्यात्मिक पुण्य मिलता है जो पारंपरिक ग्रंथों के अनुसार 100 अश्वमेध यज्ञ करने के बराबर है।"
    },
    {
      q_en: "Can Ram Katha be done as a private family event?",
      a_en: "Yes, Ram Katha can be organized as a private family event at home. A condensed 3-day format is available for home settings. The Kathavachak narrates the stories of Lord Ram with bhajan singing, making it suitable for intimate family gatherings.",
      q_hi: "क्या राम कथा एक निजी पारिवारिक कार्यक्रम के रूप में हो सकती है?",
      a_hi: "हाँ, राम कथा घर पर एक निजी पारिवारिक कार्यक्रम के रूप में आयोजित हो सकती है। घरेलू सेटिंग के लिए एक संक्षिप्त 3 दिवसीय प्रारूप उपलब्ध है।"
    }
  ],
  "shiv-mahapuran": [
    {
      q_en: "What is covered in Shiv Mahapuran Katha?",
      a_en: "Shiv Mahapurana covers 7 Samhitas: Vidyeshwara, Rudra, Shatarudra, Kotirudra, Uma, Kailasha, and Vayaviya. The 7-day Katha narrates Lord Shiva's forms, Shiva-Parvati vivah, the story of Tripurasura vadha, significance of Shivalinga worship, and path to moksha.",
      q_hi: "शिव महापुराण कथा में क्या कवर होता है?",
      a_hi: "शिव महापुराण में 7 संहिताएं हैं: विद्येश्वर, रुद्र, शतरुद्र, कोटिरुद्र, उमा, कैलाश और वायवीय। 7 दिवसीय कथा में भगवान शिव के रूप, शिव-पार्वती विवाह, त्रिपुरासुर वध की कहानी और मोक्ष का मार्ग शामिल है।"
    },
    {
      q_en: "How is Shiv Mahapuran Katha different from Bhagvat Katha?",
      a_en: "While Bhagvat Katha focuses primarily on Lord Vishnu and Krishna, Shiv Mahapuran Katha is dedicated to Lord Shiva — his forms, glory, leelas, and teachings. Shiv devotees (Shaivites) prefer Shiv Mahapuran, while Vaishnav devotees prefer Bhagvat Katha.",
      q_hi: "शिव महापुराण कथा और भागवत कथा में क्या अंतर है?",
      a_hi: "जहाँ भागवत कथा मुख्यतः भगवान विष्णु और कृष्ण पर केंद्रित है, वहीं शिव महापुराण कथा भगवान शिव को समर्पित है। शिव भक्त शिव महापुराण और वैष्णव भक्त भागवत कथा पसंद करते हैं।"
    },
    {
      q_en: "Is daily Rudrabhishek part of Shiv Mahapuran Katha?",
      a_en: "Yes, daily Rudrabhishek is an integral part of the Shiv Mahapuran Katha program. It is performed every morning before the Katha session begins, adding immense spiritual power to the event.",
      q_hi: "क्या दैनिक रुद्राभिषेक शिव महापुराण कथा का हिस्सा है?",
      a_hi: "हाँ, दैनिक रुद्राभिषेक शिव महापुराण कथा कार्यक्रम का एक अभिन्न अंग है। यह कथा सत्र शुरू होने से पहले हर सुबह किया जाता है।"
    },
    {
      q_en: "Can Shiv Mahapuran Katha be organized in Bangalore?",
      a_en: "Yes, PanditGhar.in organizes Shiv Mahapuran Katha across Bangalore. We arrange qualified Shaivacharya Kathavachak, daily Rudrabhishek, Havan, Bhojan, and complete event management for the 7-day program.",
      q_hi: "क्या शिव महापुराण कथा बेंगलुरु में हो सकती है?",
      a_hi: "हाँ, PanditGhar.in बेंगलुरु में शिव महापुराण कथा आयोजित करता है। हम 7 दिवसीय कार्यक्रम के लिए योग्य शैवाचार्य कथावाचक, दैनिक रुद्राभिषेक, हवन, भोजन और पूर्ण आयोजन प्रबंधन की व्यवस्था करते हैं।"
    },
    {
      q_en: "What is the benefit of sponsoring Shiv Mahapuran Katha?",
      a_en: "According to the Shiv Purana, organizing or sponsoring a Shiv Mahapuran Katha removes all sins, grants Shiva's blessings for health, wealth, and moksha. The organizer and all listeners are purified of past karma and receive divine protection.",
      q_hi: "शिव महापुराण कथा प्रायोजित करने का क्या लाभ है?",
      a_hi: "शिव पुराण के अनुसार, शिव महापुराण कथा आयोजित या प्रायोजित करने से सभी पापों का नाश होता है, स्वास्थ्य, धन और मोक्ष के लिए शिव का आशीर्वाद मिलता है।"
    }
  ],
  "devi-bhagvat": [
    {
      q_en: "What is Devi Bhagvat Katha?",
      a_en: "Devi Bhagavata Purana is one of the 18 Mahapuranas dedicated to Goddess Shakti (Adi Parashakti). The 5 to 7-day Katha includes narration of the nine forms of Devi, Durga Saptashati, stories of Shaktipeethas, and daily Kumari Puja. It is specially recommended during Navratri.",
      q_hi: "देवी भागवत कथा क्या है?",
      a_hi: "देवी भागवत पुराण 18 महापुराणों में से एक है जो देवी शक्ति (आदि पराशक्ति) को समर्पित है। 5 से 7 दिवसीय कथा में देवी के नौ रूपों, दुर्गा सप्तशती, शक्तिपीठों की कहानियों और दैनिक कुमारी पूजा का वर्णन शामिल है।"
    },
    {
      q_en: "When is the best time for Devi Bhagvat Katha?",
      a_en: "Devi Bhagvat Katha is most powerful during Navratri (both Chaitra and Sharad). It can also be organized on any auspicious occasion, after house warming, or to fulfill a vow (mannat) made to the Devi.",
      q_hi: "देवी भागवत कथा के लिए सबसे शुभ समय कब है?",
      a_hi: "देवी भागवत कथा नवरात्रि (चैत्र और शारद दोनों) के दौरान सबसे शक्तिशाली होती है। यह किसी भी शुभ अवसर, गृह प्रवेश के बाद या देवी से की गई मन्नत पूरी करने के लिए भी आयोजित हो सकती है।"
    },
    {
      q_en: "What is Kumari Puja and is it included in Devi Bhagvat Katha?",
      a_en: "Yes, Kumari Puja (worship of a young girl as Devi's manifestation) is an integral part of Devi Bhagvat Katha. It is performed daily during the Katha. The Kumari receives special honor, food, clothing, and gifts as divine offerings.",
      q_hi: "कुमारी पूजा क्या है और क्या यह देवी भागवत कथा में शामिल है?",
      a_hi: "हाँ, कुमारी पूजा (एक युवा कन्या की देवी के प्रतीक के रूप में पूजा) देवी भागवत कथा का एक अभिन्न अंग है। यह कथा के दौरान प्रतिदिन की जाती है।"
    },
    {
      q_en: "Can Devi Bhagvat Katha be organized in Bangalore?",
      a_en: "Yes, PanditGhar.in organizes Devi Bhagvat Katha events across Bangalore for apartment communities, societies, and private venues. We arrange the Kathavachak, Devi idol setup, daily Havan, Durga Saptashati recitation, and complete event management.",
      q_hi: "क्या बेंगलुरु में देवी भागवत कथा हो सकती है?",
      a_hi: "हाँ, PanditGhar.in बेंगलुरु में अपार्टमेंट समुदायों, सोसायटियों और निजी स्थानों के लिए देवी भागवत कथा कार्यक्रम आयोजित करता है।"
    },
    {
      q_en: "What benefits does Devi Bhagvat Katha provide?",
      a_en: "Devi Bhagvat Katha removes all obstacles, protects from enemies and negative forces, fulfills material and spiritual desires, blesses the family with health and prosperity, and ultimately grants Moksha. Those who hear the complete Katha receive Devi's direct blessings.",
      q_hi: "देवी भागवत कथा से क्या लाभ होता है?",
      a_hi: "देवी भागवत कथा सभी बाधाओं को दूर करती है, शत्रुओं और नकारात्मक शक्तियों से बचाती है, भौतिक और आध्यात्मिक इच्छाएं पूरी करती है, परिवार को स्वास्थ्य और समृद्धि का आशीर्वाद देती है और अंततः मोक्ष प्रदान करती है।"
    }
  ],
  "akhand-ramayan": [
    {
      q_en: "What is Akhand Ramayan Path?",
      a_en: "Akhand Ramayan Path is the continuous, uninterrupted 24-hour recitation of Tulsidas's Ramcharitmanas. A relay of trained pandits ensures the recitation never stops. All 7 Kandas (Bal, Ayodhya, Aranya, Kishkindha, Sundar, Lanka, Uttar Kanda) are completed in one sitting.",
      q_hi: "अखंड रामायण पाठ क्या है?",
      a_hi: "अखंड रामायण पाठ तुलसीदास की रामचरितमानस का निरंतर, बिना रुके 24 घंटे का पाठ है। प्रशिक्षित पंडितों की एक टीम यह सुनिश्चित करती है कि पाठ कभी न रुके।"
    },
    {
      q_en: "How many pandits are needed for Akhand Ramayan?",
      a_en: "Typically 4 to 6 trained pandits work in shifts throughout the 24 hours to maintain the uninterrupted recitation. PanditGhar.in provides a qualified team of pandits for the complete Akhand Path.",
      q_hi: "अखंड रामायण के लिए कितने पंडितों की जरूरत है?",
      a_hi: "निर्बाध पाठ बनाए रखने के लिए आमतौर पर 4 से 6 प्रशिक्षित पंडित 24 घंटे पालियों में काम करते हैं। PanditGhar.in संपूर्ण अखंड पाठ के लिए योग्य पंडितों की टीम प्रदान करता है।"
    },
    {
      q_en: "What occasions call for Akhand Ramayan?",
      a_en: "Akhand Ramayan is performed to: fulfill vows (mannat), on Ram Navami, on the occasion of marriage, for removal of serious Vastu doshas, after a death in the family as a purification ritual, or as a community spiritual event in apartments or temples.",
      q_hi: "किन अवसरों पर अखंड रामायण की जाती है?",
      a_hi: "अखंड रामायण की जाती है: मन्नत पूरी करने के लिए, राम नवमी पर, विवाह के अवसर पर, गंभीर वास्तु दोषों को दूर करने के लिए, परिवार में मृत्यु के बाद शुद्धि अनुष्ठान के रूप में या अपार्टमेंट या मंदिरों में एक सामुदायिक आध्यात्मिक कार्यक्रम के रूप में।"
    },
    {
      q_en: "What space is required for Akhand Ramayan at home?",
      a_en: "A clean, dedicated space of at least 200-300 sq ft is needed for the Akhand Ramayan setup including the reading podium, Havan Kund, and deity photos. The space should be free of foot traffic during the 24-hour recitation.",
      q_hi: "घर पर अखंड रामायण के लिए कितनी जगह चाहिए?",
      a_hi: "पाठ पोडियम, हवन कुंड और देवता की फोटो सहित अखंड रामायण सेटअप के लिए कम से कम 200-300 वर्ग फीट की स्वच्छ, समर्पित जगह की जरूरत है।"
    },
    {
      q_en: "Can Akhand Ramayan be organized at an apartment society level?",
      a_en: "Yes, Akhand Ramayan is increasingly popular as a community event in Bangalore apartment complexes, especially on Ram Navami and during Navratri. PanditGhar.in provides the full team of pandits and event setup.",
      q_hi: "क्या अखंड रामायण अपार्टमेंट सोसायटी स्तर पर आयोजित हो सकती है?",
      a_hi: "हाँ, बेंगलुरु के अपार्टमेंट कॉम्प्लेक्स में अखंड रामायण एक सामुदायिक कार्यक्रम के रूप में तेजी से लोकप्रिय हो रही है, खासकर राम नवमी और नवरात्रि के दौरान।"
    }
  ],
  "sagai": [
    {
      q_en: "What is the difference between Sagai and Tilak ceremony?",
      a_en: "Sagai (Vagdana) is the formal announcement of the marriage alliance, while Tilak is when the groom's forehead is marked with tilak by the bride's father/brother as a symbol of acceptance. Both are often combined into one ceremony. In North Indian tradition, Roka (informal) comes first, then Sagai, then Vivah.",
      q_hi: "सगाई और तिलक समारोह में क्या अंतर है?",
      a_hi: "सगाई (वाग्दान) विवाह गठबंधन की औपचारिक घोषणा है, जबकि तिलक में कन्या के पिता/भाई द्वारा वर के माथे पर तिलक लगाया जाता है। उत्तर भारतीय परंपरा में पहले रोका (अनौपचारिक), फिर सगाई, फिर विवाह होता है।"
    },
    {
      q_en: "What rituals are performed in Sagai ceremony?",
      a_en: "Sagai includes: Ganesh Puja, exchange of rings with Vedic mantras, Tilak ceremony, Roka ritual (both families exchange gifts and sweets), gotra uchchar (announcement of family lineages to confirm non-related match), and mutual agreement of marriage terms.",
      q_hi: "सगाई समारोह में कौन से अनुष्ठान होते हैं?",
      a_hi: "सगाई में शामिल हैं: गणेश पूजा, वैदिक मंत्रों के साथ अंगूठी का आदान-प्रदान, तिलक समारोह, रोका अनुष्ठान (दोनों परिवार उपहार और मिठाई का आदान-प्रदान), गोत्र उच्चार और विवाह शर्तों पर पारस्परिक समझौता।"
    },
    {
      q_en: "How long does Sagai ceremony take?",
      a_en: "Sagai ceremony typically takes 1.5 to 2 hours including Ganesh Puja, ring exchange, Tilak, and the family gathering. PanditGhar.in ensures the ceremony follows the proper Shastreey vidhi.",
      q_hi: "सगाई समारोह में कितना समय लगता है?",
      a_hi: "सगाई समारोह में गणेश पूजा, अंगूठी आदान-प्रदान, तिलक और पारिवारिक मिलन सहित आमतौर पर 1.5 से 2 घंटे लगते हैं।"
    },
    {
      q_en: "Can PanditGhar.in perform both Sagai and Vivah ceremonies?",
      a_en: "Yes, PanditGhar.in specializes in complete North Indian wedding ceremonies from Sagai to Vivah. Booking both ceremonies together gives scheduling priority and ensures consistency of Shastreey tradition.",
      q_hi: "क्या PanditGhar.in सगाई और विवाह दोनों समारोह कर सकता है?",
      a_hi: "हाँ, PanditGhar.in सगाई से लेकर विवाह तक संपूर्ण उत्तर भारतीय विवाह समारोह में विशेषज्ञता रखता है।"
    },
    {
      q_en: "Is Sagai ceremony specific to any region or community?",
      a_en: "Sagai/Engagement is practiced across North India — UP, Bihar, Rajasthan, Madhya Pradesh, Punjab, and by diaspora families settled in Bangalore. The specific customs (like Dhuliya in Bihari tradition or Chunri ritual in Rajasthani tradition) vary by community, and Pandit Ji adapts accordingly.",
      q_hi: "क्या सगाई समारोह किसी विशेष क्षेत्र या समुदाय का है?",
      a_hi: "सगाई/एंगेजमेंट पूरे उत्तर भारत में प्रचलित है — UP, बिहार, राजस्थान, मध्य प्रदेश, पंजाब और बेंगलुरु में बसे प्रवासी परिवारों में। विशिष्ट रीति-रिवाज समुदाय के अनुसार भिन्न होते हैं और पंडित जी तदनुसार अनुकूलित करते हैं।"
    }
  ],
  "navratri-puja": [
    {
      q_en: "What is Ghatasthapana and why is it done on Day 1 of Navratri?",
      a_en: "Ghatasthapana is the ritual of establishing a sacred water pot (Kalash) with sand, barley seeds, and a coconut on the first day of Navratri. The kalash represents the Divine Mother (Devi) and the barley sprouts (Jwar) that grow during the nine days symbolize prosperity. It must be done in the Pratipada muhurat.",
      q_hi: "घटस्थापना क्या है और नवरात्रि के पहले दिन क्यों होती है?",
      a_hi: "घटस्थापना नवरात्रि के पहले दिन रेत, जौ के बीज और नारियल के साथ एक पवित्र जल पात्र (कलश) स्थापित करने का अनुष्ठान है। कलश दिव्य माँ (देवी) का प्रतिनिधित्व करता है।"
    },
    {
      q_en: "What are the nine forms of Devi worshipped during Navratri?",
      a_en: "The Nava Durga (nine forms) are: Day 1 - Shailaputri, Day 2 - Brahmacharini, Day 3 - Chandraghanta, Day 4 - Kushmanda, Day 5 - Skandamata, Day 6 - Katyayani, Day 7 - Kaalratri, Day 8 - Mahagauri, Day 9 - Siddhidatri. Each form is worshipped with specific colors, flowers, and mantras.",
      q_hi: "नवरात्रि के दौरान देवी के नौ रूपों की पूजा क्या है?",
      a_hi: "नव दुर्गा: दिन 1 - शैलपुत्री, दिन 2 - ब्रह्मचारिणी, दिन 3 - चंद्रघंटा, दिन 4 - कूष्मांडा, दिन 5 - स्कंदमाता, दिन 6 - कात्यायनी, दिन 7 - कालरात्रि, दिन 8 - महागौरी, दिन 9 - सिद्धिदात्री।"
    },
    {
      q_en: "Can PanditGhar.in perform Navratri Puja across all 9 days?",
      a_en: "Yes, PanditGhar.in offers a complete 9-day Navratri Puja package with Ghatasthapana on Day 1, daily Durga Saptashati recitation, Kanya Puja on Ashtami/Navami, and Havan + Visharjan on Day 9. We also offer condensed 1-day Navratri Puja for those who want the core rituals only.",
      q_hi: "क्या PanditGhar.in सभी 9 दिन नवरात्रि पूजा कर सकता है?",
      a_hi: "हाँ, PanditGhar.in पहले दिन घटस्थापना, दैनिक दुर्गा सप्तशती पाठ, अष्टमी/नवमी पर कन्या पूजा और नौवें दिन हवन + विसर्जन के साथ पूर्ण 9 दिवसीय नवरात्रि पूजा पैकेज प्रदान करता है।"
    },
    {
      q_en: "What fasting rules apply during Navratri?",
      a_en: "During Navratri, devotees fast on all 9 days or at minimum on Day 1 (Pratipada) and Day 8/9 (Ashtami/Navami). Fasting involves abstaining from grains, non-vegetarian food, alcohol, and onion/garlic. Fruits, milk, and Sattvic food are consumed. Pandit Ji guides on specific traditions.",
      q_hi: "नवरात्रि के दौरान उपवास के क्या नियम हैं?",
      a_hi: "नवरात्रि के दौरान भक्त सभी 9 दिन या कम से कम पहले और आठवें/नौवें दिन उपवास रखते हैं। उपवास में अनाज, मांसाहार, शराब और प्याज/लहसुन से परहेज शामिल है।"
    },
    {
      q_en: "Can Navratri Puja be done in an apartment in Bangalore?",
      a_en: "Yes, Navratri Puja is commonly performed in homes and apartments. PanditGhar.in sets up a complete Navratri puja space including the Ghatasthapana kalash, Devi idol, flower decorations, and daily puja items. We serve all Bangalore areas.",
      q_hi: "क्या बेंगलुरु में अपार्टमेंट में नवरात्रि पूजा हो सकती है?",
      a_hi: "हाँ, नवरात्रि पूजा सामान्यतः घरों और अपार्टमेंट में की जाती है। PanditGhar.in घटस्थापना कलश, देवी मूर्ति, फूलों की सजावट और दैनिक पूजा सामग्री सहित पूर्ण नवरात्रि पूजा स्थान सेटअप करता है।"
    }
  ],
  "diwali-puja": [
    {
      q_en: "When exactly should Diwali Lakshmi Puja be performed?",
      a_en: "According to the Skanda and Padma Puranas, Diwali Lakshmi Puja must be performed during Pradosh Kaal (1.5 hours after sunset) on Amavasya night of Kartik month. This is the most auspicious muhurat when Goddess Lakshmi is believed to visit homes.",
      q_hi: "दीपावली लक्ष्मी पूजा ठीक कब करनी चाहिए?",
      a_hi: "स्कन्द और पद्म पुराणों के अनुसार, दीपावली लक्ष्मी पूजा कार्तिक मास की अमावस्या की रात को प्रदोष काल (सूर्यास्त के 1.5 घंटे बाद) में की जानी चाहिए।"
    },
    {
      q_en: "What is included in the Diwali Puja package?",
      a_en: "The Diwali Puja package includes: Ganesh Puja, Lakshmi Puja with Shri Sukta recitation, lighting of the main diya (lamp), worship of account books (Chopda Puja for business), Aarti, and Prasad distribution. Pandit Ji brings all required samagri.",
      q_hi: "दीपावली पूजा पैकेज में क्या शामिल है?",
      a_hi: "दीपावली पूजा पैकेज में शामिल है: गणेश पूजा, श्री सूक्त पाठ के साथ लक्ष्मी पूजा, मुख्य दीया जलाना, खाता-बही पूजा (व्यापारियों के लिए), आरती और प्रसाद वितरण।"
    },
    {
      q_en: "Should Diwali Puja be performed at home and at the shop separately?",
      a_en: "Yes, many business families perform Diwali Lakshmi Puja separately at home and at their shop/office. Home puja focuses on family prosperity while the business puja (Chopda Puja) consecrates new account books and invites Lakshmi's blessings for the new financial year.",
      q_hi: "क्या दीपावली पूजा घर और दुकान पर अलग-अलग होनी चाहिए?",
      a_hi: "हाँ, कई व्यापारी परिवार घर और दुकान/कार्यालय पर अलग-अलग दीपावली लक्ष्मी पूजा करते हैं। व्यापार पूजा (चोपड़ा पूजा) नए खाता-बही को अभिमंत्रित करती है।"
    },
    {
      q_en: "What is the significance of lighting diyas on Diwali?",
      a_en: "The lighting of diyas (oil lamps) on Diwali represents the victory of light over darkness and knowledge over ignorance. The Padma Purana states that Goddess Lakshmi visits homes that are clean and well-lit. A minimum of 13 diyas should be lit in specific locations: entrance, puja room, kitchen, and all corners.",
      q_hi: "दीपावली पर दीए जलाने का क्या महत्व है?",
      a_hi: "दीपावली पर दीए (तेल के दीपक) जलाना अंधकार पर प्रकाश और अज्ञान पर ज्ञान की विजय का प्रतीक है। पद्म पुराण कहता है कि देवी लक्ष्मी स्वच्छ और प्रकाशित घरों में आती हैं।"
    },
    {
      q_en: "Can PanditGhar.in perform Diwali Puja at my home in Bangalore?",
      a_en: "Yes, PanditGhar.in provides Diwali Lakshmi-Ganesh Puja services at homes and offices across all Bangalore areas. We book up quickly during Diwali season, so advance booking (2-3 weeks) is strongly recommended.",
      q_hi: "क्या PanditGhar.in बेंगलुरु में मेरे घर पर दीपावली पूजा कर सकता है?",
      a_hi: "हाँ, PanditGhar.in बेंगलुरु के सभी क्षेत्रों में घरों और कार्यालयों पर दीपावली लक्ष्मी-गणेश पूजा सेवाएं प्रदान करता है। दीपावली सीजन में अग्रिम बुकिंग (2-3 सप्ताह) की दृढ़ सिफारिश है।"
    }
  ],
  "janmashtami-puja": [
    {
      q_en: "When is Janmashtami Puja performed?",
      a_en: "Janmashtami is celebrated on Bhadrapad Krishna Ashtami — the 8th day of the dark fortnight of Bhadrapad month, when Lord Krishna was born. The main Puja and Abhishek is performed at midnight (Nishita Kaal) when Krishna is believed to have been born.",
      q_hi: "जन्माष्टमी पूजा कब होती है?",
      a_hi: "जन्माष्टमी भाद्रपद कृष्ण अष्टमी — भाद्रपद मास के कृष्ण पक्ष की अष्टमी तिथि को मनाई जाती है। मुख्य पूजा और अभिषेक मध्यरात्रि (निशिता काल) में होता है।"
    },
    {
      q_en: "What rituals are performed in Janmashtami Puja?",
      a_en: "Janmashtami Puja includes: decoration of the Jhulan (cradle) for baby Krishna, midnight Abhishek of the idol with Panchamrit (milk, curd, honey, ghee, sugar), recitation of Dasham Skandha from Bhagavata Purana, midnight Aarti, and distribution of Panchamrit prasad and Makhan-Mishri.",
      q_hi: "जन्माष्टमी पूजा में कौन से अनुष्ठान होते हैं?",
      a_hi: "जन्माष्टमी पूजा में शामिल हैं: बाल कृष्ण के लिए झूलन (पालना) सजावट, पंचामृत से मध्यरात्रि अभिषेक, भागवत पुराण के दशम स्कंध का पाठ, मध्यरात्रि आरती और पंचामृत प्रसाद एवं माखन-मिश्री वितरण।"
    },
    {
      q_en: "Can Janmashtami Puja be organized as a community event?",
      a_en: "Yes, Janmashtami is one of the most popular community events in Bangalore apartment complexes. PanditGhar.in can organize the complete Janmashtami program including Jhulan setup, cultural programs, Dahi Handi (optional), midnight Puja, and Prasad distribution for any number of families.",
      q_hi: "क्या जन्माष्टमी पूजा एक सामुदायिक कार्यक्रम के रूप में आयोजित हो सकती है?",
      a_hi: "हाँ, जन्माष्टमी बेंगलुरु के अपार्टमेंट कॉम्प्लेक्स में सबसे लोकप्रिय सामुदायिक कार्यक्रमों में से एक है। PanditGhar.in संपूर्ण जन्माष्टमी कार्यक्रम आयोजित कर सकता है।"
    },
    {
      q_en: "What is the significance of Dahi Handi on Janmashtami?",
      a_en: "Dahi Handi is a fun tradition associated with Krishna's love for butter and curd. A pot (Handi) filled with curd, butter, and sweets is hung high up, and teams of young men form human pyramids to break it. It celebrates Krishna's childhood playfulness.",
      q_hi: "जन्माष्टमी पर दही हांडी का क्या महत्व है?",
      a_hi: "दही हांडी एक मजेदार परंपरा है जो कृष्ण के मक्खन और दही के प्रेम से जुड़ी है। दही, मक्खन और मिठाई से भरा एक बर्तन (हांडी) ऊंचाई पर लटकाया जाता है और युवाओं की टीमें मानव पिरामिड बनाकर इसे तोड़ती हैं।"
    },
    {
      q_en: "What is the Bhagavata reference for Janmashtami?",
      a_en: "Janmashtami is described in detail in the Bhagavata Purana, Dashama Skandha (10th volume), which narrates Lord Krishna's entire life story. The birth of Krishna in Kamsa's prison and his miraculous transfer to Gokul by Vasudeva forms the central narrative.",
      q_hi: "जन्माष्टमी का भागवत संदर्भ क्या है?",
      a_hi: "जन्माष्टमी का विस्तृत वर्णन भागवत पुराण के दशम स्कंध में है। कंस की जेल में कृष्ण का जन्म और वासुदेव द्वारा उनका गोकुल में चमत्कारी स्थानांतरण केंद्रीय कथा है।"
    }
  ],
  "maha-shivaratri": [
    {
      q_en: "What is the significance of Maha Shivaratri?",
      a_en: "Maha Shivaratri is described in the Shiva and Linga Puranas as the most sacred night for Lord Shiva worship. It falls on the 14th day (Chaturdashi) of the dark fortnight in Phalguna month. Lord Shiva is believed to be most accessible to devotees on this night, and sincere worship grants moksha.",
      q_hi: "महा शिवरात्रि का क्या महत्व है?",
      a_hi: "शिव और लिंग पुराणों में महा शिवरात्रि को भगवान शिव पूजा की सबसे पवित्र रात के रूप में वर्णित किया गया है। यह फाल्गुन मास के कृष्ण पक्ष की चतुर्दशी को पड़ती है।"
    },
    {
      q_en: "What is the Prahar Puja system in Maha Shivaratri?",
      a_en: "Maha Shivaratri puja is divided into 4 Prahars (3-hour segments) throughout the night. Each Prahar has a specific Rudrabhishek with different offerings: Prahar 1 (6-9 PM) - milk; Prahar 2 (9-12 PM) - curd; Prahar 3 (12-3 AM) - ghee; Prahar 4 (3-6 AM) - honey. Aarti is performed at each Prahar.",
      q_hi: "महा शिवरात्रि में प्रहर पूजा प्रणाली क्या है?",
      a_hi: "महा शिवरात्रि पूजा रात भर 4 प्रहरों (3 घंटे के खंड) में विभाजित है। प्रत्येक प्रहर में अलग-अलग भेंट के साथ रुद्राभिषेक: प्रहर 1 - दूध; प्रहर 2 - दही; प्रहर 3 - घी; प्रहर 4 - शहद।"
    },
    {
      q_en: "Should one fast during Maha Shivaratri?",
      a_en: "Fasting (Upavasa) on Maha Shivaratri is considered highly meritorious. The Shiva Purana mentions that those who fast and stay awake (Jagran) through the night receive Shiva's direct blessings. Devotees abstain from food and water, or at minimum from grains. Breaking the fast next morning after the puja completes.",
      q_hi: "क्या महा शिवरात्रि पर उपवास रखना चाहिए?",
      a_hi: "महा शिवरात्रि पर उपवास (उपवास) अत्यंत पुण्यकारी माना जाता है। शिव पुराण कहता है कि जो लोग उपवास रखते हैं और रात भर जागते हैं (जागरण) उन्हें शिव का प्रत्यक्ष आशीर्वाद मिलता है।"
    },
    {
      q_en: "Can Maha Shivaratri Puja be arranged at home?",
      a_en: "Yes, PanditGhar.in performs Maha Shivaratri Puja at homes across Bangalore. A Shivalinga (or Saligram), Panchamrit, Bilva leaves, and a dedicated puja space are required. We provide the complete 4-Prahar Rudrabhishek service at your home.",
      q_hi: "क्या महा शिवरात्रि पूजा घर पर हो सकती है?",
      a_hi: "हाँ, PanditGhar.in बेंगलुरु के सभी क्षेत्रों में घरों पर महा शिवरात्रि पूजा करता है। शिवलिंग (या शालिग्राम), पंचामृत, बेलपत्र और एक समर्पित पूजा स्थान की जरूरत है।"
    },
    {
      q_en: "What is the significance of Bilva (Bel) leaves in Shiva worship?",
      a_en: "Bilva (Bael) leaves are considered the most sacred offering for Lord Shiva. The trifoliate Bilva leaf represents the three eyes of Shiva and the Trinity. Offering Bilva leaves with Rudrabhishek on Maha Shivaratri is equivalent to offering all flowers in the universe, according to the Shiva Purana.",
      q_hi: "शिव पूजा में बेलपत्र (बिल्व) का क्या महत्व है?",
      a_hi: "बेलपत्र (बेल) भगवान शिव के लिए सबसे पवित्र भेंट मानी जाती है। त्रिपत्रक बेलपत्र शिव की तीन आँखों और त्रिदेव का प्रतिनिधित्व करता है। शिव पुराण के अनुसार, महा शिवरात्रि पर रुद्राभिषेक के साथ बेलपत्र चढ़ाना ब्रह्मांड के सभी फूल चढ़ाने के बराबर है।"
    }
  ],
  "pitru-paksha": [
    {
      q_en: "What is Pitru Paksha Shradh and why is it important?",
      a_en: "Pitru Paksha is a 16-day period in Bhadrapad month (September-October) when Hindus perform Shradh rituals for departed ancestors. The Garuda Purana and Manusmriti prescribe it as a mandatory duty. Performing Shradh removes Pitru Dosha from the horoscope and brings ancestral blessings.",
      q_hi: "पितृ पक्ष श्राद्ध क्या है और यह क्यों महत्वपूर्ण है?",
      a_hi: "पितृ पक्ष भाद्रपद मास में 16 दिनों की अवधि है जब हिंदू दिवंगत पूर्वजों के लिए श्राद्ध अनुष्ठान करते हैं। गरुड़ पुराण और मनुस्मृति इसे अनिवार्य कर्तव्य के रूप में निर्धारित करते हैं।"
    },
    {
      q_en: "What rituals are performed in Pitru Paksha Shradh?",
      a_en: "Pitru Paksha Shradh includes: Pind Daan (offering rice balls mixed with sesame, barley, and grass), Tarpan (water offering with sesame), chanting of Pitru Mantras, Brahmin Bhojan (feeding Brahmins), and donation. Specific tithi of the ancestor's death date is used for their Shradh.",
      q_hi: "पितृ पक्ष श्राद्ध में कौन से अनुष्ठान होते हैं?",
      a_hi: "पितृ पक्ष श्राद्ध में शामिल हैं: पिंड दान (तिल, जौ और घास मिश्रित चावल के गोले की भेंट), तर्पण (तिल के साथ जल अर्पण), पितृ मंत्र पाठ, ब्राह्मण भोजन और दान।"
    },
    {
      q_en: "On which Tithi should Shradh be performed?",
      a_en: "Shradh should ideally be performed on the same Tithi (lunar date) on which the ancestor died. If the death Tithi is unknown, Amavasya Shradh (performed on the new moon day at the end of Pitru Paksha) covers all ancestors. Pandit Ji can guide you on the correct Tithi.",
      q_hi: "श्राद्ध किस तिथि को करना चाहिए?",
      a_hi: "श्राद्ध आदर्श रूप से उसी तिथि (चंद्र तारीख) को किया जाना चाहिए जिस तिथि पर पूर्वज का निधन हुआ। यदि मृत्यु तिथि अज्ञात है तो अमावस्या श्राद्ध (पितृ पक्ष के अंत में) सभी पूर्वजों को कवर करता है।"
    },
    {
      q_en: "What is Pitru Dosha and can Shradh Puja remove it?",
      a_en: "Pitru Dosha arises when ancestors are not properly honored or when they departed with unfulfilled desires. It causes persistent problems in the family: financial instability, health issues, delayed marriages, and lack of progeny. Regular Shradh and Pind Daan during Pitru Paksha progressively reduces Pitru Dosha.",
      q_hi: "पितृ दोष क्या है और क्या श्राद्ध पूजा इसे दूर कर सकती है?",
      a_hi: "पितृ दोष तब होता है जब पूर्वजों का उचित सम्मान नहीं होता या जब वे अधूरी इच्छाओं के साथ गए हों। यह परिवार में लगातार समस्याएं पैदा करता है। नियमित श्राद्ध और पिंड दान पितृ दोष को क्रमिक रूप से कम करता है।"
    },
    {
      q_en: "Can Pitru Paksha Shradh be done in Bangalore?",
      a_en: "Yes, PanditGhar.in performs Pitru Paksha Shradh at homes across all Bangalore areas. While performing Shradh at sacred rivers (Gaya, Haridwar) is more meritorious, home Shradh with proper Vedic rituals is equally accepted according to the Shastras.",
      q_hi: "क्या बेंगलुरु में पितृ पक्ष श्राद्ध हो सकता है?",
      a_hi: "हाँ, PanditGhar.in बेंगलुरु के सभी क्षेत्रों में घरों पर पितृ पक्ष श्राद्ध करता है। हालाँकि पवित्र नदियों (गया, हरिद्वार) पर श्राद्ध अधिक फलदायक है, शास्त्रों के अनुसार उचित वैदिक अनुष्ठानों के साथ घरेलू श्राद्ध समान रूप से स्वीकार्य है।"
    }
  ],
  "antim-sanskar": [
    {
      q_en: "What is Antim Sanskar (last rites) and what does it include?",
      a_en: "Antim Sanskar is the 16th and final Sanskar, covering all rituals from death to the 13th day (Terahi). It includes: Dahana Kriya (cremation), Asthi Sanchayan (bone collection), Sapindikaran, Dasagatra (10-day puja), and Terahi (13th day feast). All as per Garuda Purana.",
      q_hi: "अंतिम संस्कार क्या है और इसमें क्या शामिल है?",
      a_hi: "अंतिम संस्कार 16वाँ और अंतिम संस्कार है जो मृत्यु से 13वें दिन (तेरही) तक के सभी अनुष्ठानों को कवर करता है। इसमें दहन क्रिया, अस्थि संचयन, सपिंडीकरण, दशगात्र और तेरही शामिल है।"
    },
    {
      q_en: "Is PanditGhar.in available 24/7 for Antim Sanskar?",
      a_en: "Yes, PanditGhar.in provides round-the-clock support for Antim Sanskar as death does not follow any schedule. Please call +91 93295 66101 anytime for immediate assistance. We reach your location within 1-2 hours across Bangalore.",
      q_hi: "क्या PanditGhar.in अंतिम संस्कार के लिए 24/7 उपलब्ध है?",
      a_hi: "हाँ, PanditGhar.in अंतिम संस्कार के लिए चौबीसों घंटे सहायता प्रदान करता है क्योंकि मृत्यु कोई समय नहीं देखती। तत्काल सहायता के लिए कभी भी +91 93295 66101 पर कॉल करें।"
    },
    {
      q_en: "What is the Dasagatra Puja and why is it important?",
      a_en: "Dasagatra is the 10-day ritual after death where a pinda (rice ball) is offered daily to help the departed soul gradually form a new body (Linga Sharira) for the journey to Pitru Loka. As per the Garuda Purana, skipping Dasagatra causes the soul to remain in pain.",
      q_hi: "दशगात्र पूजा क्या है और यह क्यों महत्वपूर्ण है?",
      a_hi: "दशगात्र मृत्यु के बाद 10 दिनों का अनुष्ठान है जहाँ दिवंगत आत्मा को पितृ लोक की यात्रा के लिए नया शरीर (लिंग शरीर) बनाने में मदद के लिए प्रतिदिन पिंड (चावल का गोला) अर्पित किया जाता है।"
    },
    {
      q_en: "How do you handle Antim Sanskar in Bangalore for families from different regions?",
      a_en: "PanditGhar.in specializes in North Indian (UP, Bihar, Rajasthan, Madhya Pradesh) style Antim Sanskar. We follow the specific traditions of the family's regional community. The rituals, mantras, and customs are adapted based on the family's tradition while maintaining Vedic authenticity.",
      q_hi: "बेंगलुरु में विभिन्न क्षेत्रों के परिवारों के लिए अंतिम संस्कार कैसे होता है?",
      a_hi: "PanditGhar.in उत्तर भारतीय (UP, बिहार, राजस्थान, मध्य प्रदेश) शैली के अंतिम संस्कार में विशेषज्ञता रखता है। हम परिवार के क्षेत्रीय समुदाय की विशिष्ट परंपराओं का पालन करते हैं।"
    },
    {
      q_en: "What is Sapindikaran and when is it performed?",
      a_en: "Sapindikaran is performed on the 12th or 13th day after death. In this ritual, the deceased is formally united with the ancestors (Pitru) by merging the pinda of the deceased with pindas of three preceding generations. After Sapindikaran, the soul joins the ancestral realm.",
      q_hi: "सपिंडीकरण क्या है और यह कब होता है?",
      a_hi: "सपिंडीकरण मृत्यु के 12वें या 13वें दिन किया जाता है। इस अनुष्ठान में दिवंगत को तीन पूर्ववर्ती पीढ़ियों के पिंडों के साथ मिलाकर पूर्वजों (पितृ) के साथ औपचारिक रूप से जोड़ा जाता है।"
    }
  ]
};

const defaultFaqs: FAQ[] = [
  {
    q_en: "How long does this puja take?",
    a_en: "Most pujas take 2–3 hours depending on the extent of rituals. Pandit Ji will provide an accurate estimate after understanding your requirements.",
    q_hi: "इस पूजा में कितना समय लगता है?",
    a_hi: "अनुष्ठानों की सीमा के आधार पर अधिकांश पूजाओं में 2–3 घंटे लगते हैं। पंडित जी आपकी जरूरतें समझने के बाद सटीक अनुमान देंगे।"
  },
  {
    q_en: "Will Pandit Ji bring all Pooja Samagri?",
    a_en: "Pooja Samagri is NOT included in the pandit dakshina. It is charged separately at actual market rates. We share a complete samagri list in advance so your family can arrange the items, OR our team can arrange samagri on your behalf at actuals. Please confirm your preference while booking.",
    q_hi: "क्या पंडित जी सभी पूजा सामग्री लाएंगे?",
    a_hi: "पूजा सामग्री पंडित दक्षिणा में शामिल नहीं है। यह वास्तविक बाज़ार दर पर अलग से ली जाती है। हम पहले से पूरी सामग्री सूची साझा करते हैं ताकि आपका परिवार स्वयं व्यवस्था कर सके, अथवा हमारी टीम आपकी ओर से सामग्री की व्यवस्था कर सकती है। बुकिंग के समय अपनी प्राथमिकता बताएं।"
  },
  {
    q_en: "Is service available across all Bangalore areas?",
    a_en: "Yes, we serve all major Bangalore areas — Whitefield, HSR Layout, Koramangala, Indiranagar, Electronic City, Marathahalli, JP Nagar, Yelahanka, Hebbal, Sarjapur Road, and more.",
    q_hi: "क्या बेंगलुरु के सभी क्षेत्रों में सेवा उपलब्ध है?",
    a_hi: "हाँ, हम बेंगलुरु के सभी प्रमुख क्षेत्रों में सेवा देते हैं — व्हाइटफील्ड, HSR लेआउट, कोरमंगला, इंदिरानगर, इलेक्ट्रॉनिक सिटी, मराठहल्ली, JP नगर, येलहंका, हेब्बल, सर्जापुर रोड आदि।"
  },
  {
    q_en: "How do I book this puja?",
    a_en: "You can book directly via the form on this page, or WhatsApp us at +91 93295 66101. We confirm the booking within 30 minutes and share all further details.",
    q_hi: "इस पूजा को कैसे बुक करें?",
    a_hi: "आप इस पेज पर दिए गए फॉर्म के माध्यम से सीधे बुक कर सकते हैं, या हमें +91 93295 66101 पर व्हाट्सएप करें। हम 30 मिनट के भीतर बुकिंग की पुष्टि करते हैं और सभी आगे की जानकारी साझा करते हैं।"
  },
  {
    q_en: "Can the puja be rescheduled if needed?",
    a_en: "Yes, we offer flexible rescheduling with 24-hour notice. Please contact us as soon as possible if you need to reschedule so we can accommodate you with an equally auspicious date.",
    q_hi: "क्या जरूरत पड़ने पर पूजा को पुनर्निर्धारित किया जा सकता है?",
    a_hi: "हाँ, हम 24 घंटे की सूचना के साथ लचीला पुनर्निर्धारण प्रदान करते हैं। कृपया जल्द से जल्द हमसे संपर्क करें ताकि हम आपको समान रूप से शुभ तारीख दे सकें।"
  },
  {
    q_en: "What is the scriptural basis for this puja?",
    a_en: "All our rituals are strictly based on the Vedas, Puranas, and Grihya Sutras. The specific scriptural references for this puja are mentioned at the top of this page. We do not deviate from or abbreviate the Shastreey vidhi.",
    q_hi: "इस पूजा का शास्त्रीय आधार क्या है?",
    a_hi: "हमारे सभी अनुष्ठान वेदों, पुराणों और गृह्य सूत्रों पर आधारित हैं। इस पूजा के लिए विशिष्ट शास्त्रीय संदर्भ इस पेज के शीर्ष पर उल्लिखित हैं। हम शास्त्रीय विधि से विचलित नहीं होते।"
  },
  {
    q_en: "Are there any restrictions on who can participate in this puja?",
    a_en: "Most pujas are open to all family members regardless of gender or age. Specific restrictions, if any, will be communicated by Pandit Ji based on the Shastreey tradition. Generally, all are welcome to witness and receive blessings.",
    q_hi: "क्या इस पूजा में शामिल होने पर कोई प्रतिबंध है?",
    a_hi: "अधिकांश पूजाएं लिंग या उम्र की परवाह किए बिना सभी परिवार के सदस्यों के लिए खुली हैं। शास्त्रीय परंपरा के आधार पर कोई भी विशेष प्रतिबंध, यदि है तो, पंडित जी द्वारा सूचित किया जाएगा। आमतौर पर, सभी दर्शन और आशीर्वाद के लिए स्वागत योग्य हैं।"
  }
];

export default function ServiceDetail({ lang, params }: { lang: Language; params?: { slug?: string } }) {
  const t = useTranslation(lang);
  const isHi = lang === 'hi';

  const slug = params?.slug;
  if (!slug) return <NotFound />;

  const service = services.find(s => s.slug === slug);

  if (!service) return <NotFound />;

  const title = isHi ? service.hiTitle : service.enTitle;
  const desc = isHi ? service.hiDesc : service.enDesc;
  const content = isHi ? service.hiContent : service.enContent;

  const faqs = serviceFaqs[service.id] || defaultFaqs;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": isHi ? faq.q_hi : faq.q_en,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": isHi ? faq.a_hi : faq.a_en
      }
    }))
  };

  function extractHowToSteps(text: string, serviceName: string): { name: string; text: string }[] {
    const commonStart = [
      { name: `Book ${serviceName}`, text: `WhatsApp PanditGhar.in at +91 93295 66101 or fill the booking form online to schedule your ${serviceName} in Bangalore.` },
      { name: "Receive Samagri List", text: "Receive the complete Pooja Samagri list via WhatsApp. Arrange items or let PanditGhar.in procure at actuals." },
    ];
    const sentenceRegex = /[^.!?]*(?:perform|recit|worship|offer|begin|start|place|light|chant|take|enter|apply|tie|releas)[^.!?]*[.!?]/gi;
    const rawMatches = Array.from(text.matchAll(sentenceRegex)).map(m => m[0].trim()).filter(s => s.length > 30 && s.length < 200);
    const dedupedMatches = rawMatches.filter((s, i, arr) => arr.findIndex(x => x.slice(0, 40) === s.slice(0, 40)) === i).slice(0, 5);
    const ritualSteps = dedupedMatches.length >= 2
      ? dedupedMatches.map((text, i) => ({ name: `Step ${i + 1}`, text }))
      : [
          { name: "Sankalpa", text: `Pandit Ji performs a formal Sankalpa (vow), establishing the purpose and intent of the ${serviceName}.` },
          { name: "Ganesh Puja", text: "Lord Ganesha is invoked first to remove all obstacles from the ritual." },
          { name: "Main Ritual", text: `The core Vedic vidhi of ${serviceName} is performed with Mantras, Havan, and offerings as prescribed in the Shastras.` },
          { name: "Aarti & Prasad", text: "Aarti is performed and Prasad is distributed to all family members and guests." },
        ];
    return [
      ...commonStart,
      ...ritualSteps,
      { name: "Blessings & Closure", text: `Pandit Ji provides blessings and guidance on post-${serviceName} observances as per Shastreey tradition.` },
    ];
  }

  function extractHowToStepsHi(hiContent: string, serviceNameHi: string): { name: string; text: string }[] {
    const commonStart = [
      { name: "बुकिंग व मुहूर्त", text: `${serviceNameHi} के लिए PanditGhar.in को +91 93295 66101 पर व्हाट्सएप करें। बुकिंग फॉर्म भरें और शुभ मुहूर्त निर्धारित करें।` },
      { name: "सामग्री सूची", text: "व्हाट्सएप पर पूरी पूजा सामग्री सूची प्राप्त करें। स्वयं व्यवस्था करें या हमारी टीम आपकी ओर से खरीद सकती है।" },
    ];
    const sentenceRegex = /[^।!?]*(?:पूजा|हवन|मंत्र|आरती|संकल्प|अभिषेक|पाठ|विधि|प्रसाद|दान|स्थापन|आहुति|होम|चालीसा)[^।!?]*[।!?]/g;
    const rawMatches = Array.from(hiContent.matchAll(sentenceRegex)).map(m => m[0].trim()).filter(s => s.length > 20 && s.length < 200);
    const dedupedMatches = rawMatches.filter((s, i, arr) => arr.findIndex(x => x.slice(0, 30) === s.slice(0, 30)) === i).slice(0, 5);
    const ritualSteps = dedupedMatches.length >= 2
      ? dedupedMatches.map((s, i) => ({ name: `चरण ${i + 1}`, text: s }))
      : [
          { name: "संकल्प", text: `पंडित जी ${serviceNameHi} का उद्देश्य स्थापित करते हुए औपचारिक संकल्प लेते हैं।` },
          { name: "गणपति पूजा", text: "सभी बाधाओं को दूर करने के लिए पहले भगवान गणेश की पूजा की जाती है।" },
          { name: "मुख्य विधि", text: `${serviceNameHi} की मुख्य वैदिक विधि — मंत्रोच्चार, हवन और शास्त्रों के अनुसार आहुतियों के साथ संपन्न की जाती है।` },
          { name: "आरती और प्रसाद", text: "आरती की जाती है और परिवार के सभी सदस्यों व अतिथियों को प्रसाद दिया जाता है।" },
        ];
    return [
      ...commonStart,
      ...ritualSteps,
      { name: "आशीर्वाद", text: `पंडित जी ${serviceNameHi} के बाद की परंपराओं के बारे में मार्गदर्शन और आशीर्वाद देते हैं।` },
    ];
  }

  const howToStepsForService = isHi
    ? extractHowToStepsHi(service.hiContent, title)
    : extractHowToSteps(service.enContent, title);

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": isHi ? `${title} — चरण-दर-चरण विधि` : `How to Perform ${title} in Bangalore — Step-by-Step`,
    "description": desc,
    "step": howToStepsForService.map((step, i) => ({
      "@type": "HowToStep",
      "position": i + 1,
      "name": step.name,
      "text": step.text
    }))
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": title,
    "provider": {
      "@type": "LocalBusiness",
      "name": "PanditGhar.in",
      "url": "https://panditghar.in",
      "telephone": "+919329566101",
      "areaServed": [
        "Whitefield","HSR Layout","Koramangala","Indiranagar","Marathahalli",
        "Electronic City","JP Nagar","Yelahanka","Hebbal","Sarjapur Road","Bangalore"
      ]
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

  const relatedServices = services
    .filter(s => s.category === service.category && s.id !== service.id)
    .slice(0, 3);

  const combinedSchema: object[] = [schema, faqSchema, howToSchema];

  const whatsappMsg = encodeURIComponent(
    isHi
      ? `नमस्ते! मुझे ${title} के लिए बेंगलुरु में पंडित जी की सेवा चाहिए। कृपया विवरण बताएं।`
      : `Hello! I need a pandit for ${title} in Bangalore. Please share details.`
  );

  return (
    <div className="pb-16">
      <SEO
        title={isHi
          ? `${title} बेंगलुरु में | मूल्य, सामग्री व बुकिंग — PanditGhar.in`
          : `${title} in Bangalore | Price, Samagri & Booking — PanditGhar.in`}
        description={isHi
          ? `बेंगलुरु में ${title} के लिए प्रामाणिक उत्तर भारतीय पंडित बुक करें। शास्त्रीय विधि, पूरी सामग्री, ₹${service.price.toLocaleString('en-IN')} से शुरू। सभी क्षेत्रों में सेवा।`
          : `Book authentic North Indian Pandit for ${title} in Bangalore. Shastreey rituals, complete samagri, starting ₹${service.price.toLocaleString('en-IN')}. All areas covered.`}
        lang={lang}
        path={`/${lang}/services/${service.slug}`}
        schema={combinedSchema}
      />

      <div className="relative h-72 md:h-96 overflow-hidden">
        <ServiceCardImage
          src={`${import.meta.env.BASE_URL}${service.image.replace(/^\//, '')}`}
          alt={title}
          icon={service.icon}
          hiTitle={service.hiTitle}
          category={service.category}
          showHoverZoom={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-8 max-w-7xl mx-auto w-full left-0 right-0">
          <Breadcrumb
            items={[
              { label: isHi ? 'सेवाएं' : 'Services', href: `/${lang}/services` },
              { label: title },
            ]}
            lang={lang}
            inverted
            className="mb-3 sm:mb-4"
          />
          <h1 className={`text-2xl sm:text-4xl md:text-5xl font-display font-bold text-accent mb-2 drop-shadow-md ${isHi ? 'font-hindi' : ''}`}>
            {title}
          </h1>
          <p className={`text-white/80 text-sm sm:text-base md:text-lg max-w-2xl ${isHi ? 'font-hindi' : ''}`}>{desc}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">

          <div className="lg:col-span-2 space-y-10">
            <ScrollReveal direction="up">
            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-xl border border-border">
              <div className="flex items-center justify-end mb-8 flex-wrap gap-4">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className={`bg-green-600 hover:bg-green-700 text-white rounded-full gap-2 ${isHi ? 'font-hindi' : ''}`}>
                    <PhoneCall className="w-4 h-4" />
                    {isHi ? 'अभी बुक करें' : 'Book Now'}
                  </Button>
                </a>
              </div>

              <div className={`prose prose-lg max-w-none prose-headings:font-display prose-headings:text-secondary ${isHi ? 'font-hindi' : ''}`}>

                <div className="my-6 bg-background p-6 rounded-xl border-l-4 border-accent">
                  <div className="flex items-start gap-4">
                    <BookOpen className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h4 className={`m-0 text-base font-bold text-secondary ${isHi ? 'font-hindi' : ''}`}>
                        {isHi ? 'शास्त्रीय प्रमाण' : 'Scriptural Reference (शास्त्रीय प्रमाण)'}
                      </h4>
                      <p className="m-0 mt-1 text-sm text-muted-foreground">{service.shastreeyRef}</p>
                    </div>
                  </div>
                </div>

                <p>{content}</p>

                <h3 className={`${isHi ? 'font-hindi' : ''}`}>{isHi ? 'क्या-क्या शामिल है?' : 'What is included?'}</h3>
                <ul className="list-none pl-0 space-y-3">
                  {[
                    isHi ? 'प्रामाणिक उत्तर भारतीय पंडित' : 'Authentic North Indian Pandit',
                    isHi ? 'पूर्ण विधि-विधान से पूजा' : 'Complete Vedic Rituals as per Shastra',
                    isHi ? 'पूजा के बाद आशीर्वाद व प्रसाद' : 'Blessings and Prasad after the puja',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 m-0">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-xl border border-amber-400 bg-amber-50 p-5 not-prose">
                  <div className="flex items-start gap-3 mb-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <h4 className={`font-bold text-amber-800 text-sm m-0 ${isHi ? 'font-hindi' : ''}`}>
                      {isHi ? 'अतिरिक्त शुल्क (Additional Charges) — पंडित दक्षिणा में शामिल नहीं' : 'Additional Charges — Not included in Pandit Dakshina'}
                    </h4>
                  </div>
                  <ul className="space-y-2 m-0 pl-0 list-none">
                    <li className="flex items-start gap-3">
                      <ShoppingBag className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <p className={`text-sm font-semibold text-amber-800 m-0 ${isHi ? 'font-hindi' : ''}`}>
                          {isHi ? 'पूजा सामग्री शुल्क' : 'Pooja Samagri Cost'}
                        </p>
                        <p className={`text-xs text-amber-700 m-0 ${isHi ? 'font-hindi' : ''}`}>
                          {isHi ? 'वास्तविक बाज़ार दर पर अलग से देय। आप स्वयं व्यवस्था कर सकते हैं या हमारी टीम आपके लिए खरीद सकती है।' : 'Charged at actual market rates, billed separately. You may arrange samagri yourself or our team can procure it for you.'}
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Car className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <p className={`text-sm font-semibold text-amber-800 m-0 ${isHi ? 'font-hindi' : ''}`}>
                          {isHi ? 'यात्रा किराया (Kiraya)' : 'Travel Charges (Kiraya)'}
                        </p>
                        <p className={`text-xs text-amber-700 m-0 ${isHi ? 'font-hindi' : ''}`}>
                          {isHi ? 'बेंगलुरु में दूरी के अनुसार अलग से देय। बुकिंग के समय पंडित जी आपको सटीक जानकारी देंगे।' : 'Charged separately based on distance within Bangalore. Exact amount communicated at the time of booking.'}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.07}>
            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-xl border border-border">
              <div className="flex items-center gap-3 mb-6">
                <ShoppingBag className="w-6 h-6 text-primary shrink-0" />
                <h2 className={`text-xl font-display font-bold text-secondary m-0 ${isHi ? 'font-hindi' : ''}`}>
                  {service.samagri.length > 0
                    ? (isHi ? 'पूजा सामग्री सूची' : 'Pooja Samagri Required')
                    : (isHi ? 'परामर्श सेवा' : 'Consultation Service')}
                </h2>
              </div>
              {service.samagri.length > 0 ? (
                <>
                  <p className={`text-sm text-muted-foreground mb-5 ${isHi ? 'font-hindi' : ''}`}>
                    {isHi
                      ? 'नीचे दी गई सामग्री इस पूजा के लिए आवश्यक है। आप इसे स्वयं बाज़ार से खरीद सकते हैं, या हमारी टीम आपके लिए व्यवस्था कर सकती है (वास्तविक लागत पर)।'
                      : 'The following items are required for this puja. You may arrange them yourself or our team can procure them on your behalf at actual cost.'}
                  </p>
                  <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-2" staggerDelay={0.04}>
                    {service.samagri.map((item, i) => (
                      <StaggerItem key={i} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="w-2 h-2 rounded-full bg-primary shrink-0 inline-block" />
                        <span className={isHi ? 'font-hindi' : ''}>{item}</span>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </>
              ) : (
                <div className="bg-muted rounded-xl p-6 border border-border">
                  <p className={`text-sm text-muted-foreground leading-relaxed ${isHi ? 'font-hindi' : ''}`}>
                    {isHi
                      ? 'यह एक परामर्श सेवा है। किसी भौतिक सामग्री की आवश्यकता नहीं है। आप सत्र व्यक्तिगत रूप से (हमारे कार्यालय / आपके घर) या वीडियो कॉल के माध्यम से बुक कर सकते हैं। बुकिंग के बाद हमारी टीम आपसे समय और माध्यम की पुष्टि के लिए संपर्क करेगी।'
                      : 'This is a consultation service — no physical items are required. Sessions are available in person (our office / your home) or via video call. After booking, our team will contact you to confirm the time and mode of consultation.'}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {[
                      isHi ? '📋 जन्म तिथि, समय व स्थान' : '📋 Birth date, time & place',
                      isHi ? '🕐 1 घंटे का सत्र' : '🕐 1-hour session',
                      isHi ? '📞 वीडियो कॉल उपलब्ध' : '📞 Video call available',
                      isHi ? '📄 लिखित रिपोर्ट' : '📄 Written report',
                    ].map((item, i) => (
                      <span key={i} className={`inline-flex items-center gap-1.5 text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium ${isHi ? 'font-hindi' : ''}`}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            </ScrollReveal>

            <DecorativeDivider />

            <ScrollReveal direction="up" delay={0.05}>
              <div className="bg-card rounded-3xl p-8 border border-border shadow-md">
                <h3 className={`text-2xl font-display font-bold text-secondary mb-6 ${isHi ? 'font-hindi' : ''}`}>
                  {isHi ? 'सामान्य प्रश्न (FAQs)' : 'Frequently Asked Questions'}
                </h3>
                <Accordion type="multiple" className="space-y-2">
                  {faqs.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`faq-${i}`}
                      className="border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-colors px-2"
                    >
                      <AccordionTrigger className={`font-semibold text-secondary text-sm hover:no-underline px-3 ${isHi ? 'font-hindi' : ''}`}>
                        {isHi ? faq.q_hi : faq.q_en}
                      </AccordionTrigger>
                      <AccordionContent className={`text-muted-foreground leading-relaxed px-3 ${isHi ? 'font-hindi' : ''}`}>
                        {isHi ? faq.a_hi : faq.a_en}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </ScrollReveal>

            {relatedServices.length > 0 && (
              <ScrollReveal direction="up" delay={0.06}>
                <div>
                  <h3 className={`text-2xl font-display font-bold text-secondary mb-6 ${isHi ? 'font-hindi' : ''}`}>
                    {isHi ? 'संबंधित सेवाएं' : 'Related Services'}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {relatedServices.map(rel => (
                      <Link key={rel.id} href={`/${lang}/services/${rel.slug}`}>
                        <motion.div
                          whileHover={{ y: -4 }}
                          transition={{ duration: 0.2 }}
                          className="bg-card border border-border rounded-2xl p-5 hover:border-primary/40 hover:shadow-md transition-all cursor-pointer"
                        >
                          <div className="text-3xl mb-3">{rel.icon}</div>
                          <h4 className={`font-bold text-secondary text-sm mb-1 ${isHi ? 'font-hindi' : ''}`}>
                            {isHi ? rel.hiTitle : rel.enTitle}
                          </h4>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <BookingForm lang={lang} preselectedService={title} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
