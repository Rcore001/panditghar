export type { Language } from './i18n';
export { useTranslation, translations } from './i18n';
import type { Language } from './i18n';

export const WHATSAPP_NUMBER = "919329566101";

export interface Location {
  id: string;
  name: string;
  enIntro: string;
  hiIntro: string;
}

export interface Service {
  id: string;
  slug: string;
  enTitle: string;
  hiTitle: string;
  price: number;
  enDesc: string;
  hiDesc: string;
  shastreeyRef: string;
  enContent: string;
  hiContent: string;
  icon: string;
  image: string;
  category: 'small' | 'large' | 'sanskar' | 'festival' | 'dosha' | 'jyotish';
  samagri: string[];
}

export const services: Service[] = [
  {
    id: "griha-pravesh",
    slug: "griha-pravesh-pooja-bangalore",
    enTitle: "Griha Pravesh Pooja",
    hiTitle: "गृह प्रवेश पूजा",
    price: 5100,
    icon: "🏠",
    image: "/images/services/griha-pravesh.jpg",
    category: "small",
    shastreeyRef: "प्रमाण: स्कन्द पुराण, गृह्य सूत्र (Skanda Purana, Grihya Sutras)",
    enDesc: "Purify your new home and invite divine blessings before moving in.",
    hiDesc: "नए घर में प्रवेश करने से पहले उसे शुद्ध करें और ईश्वरीय आशीर्वाद आमंत्रित करें।",
    enContent: "Griha Pravesh rituals are mentioned in the Skanda Purana and Grihya Sutras. It is an essential Vedic ceremony performed before occupying a new residence to cleanse the space of negative energies and seek the blessings of Vastu Purush and other deities. The ritual includes Ganesh Puja, Navagraha Puja, Vastu Puja, Havan, and Kalash Sthapana.",
    hiContent: "गृह प्रवेश पूजा का उल्लेख स्कन्द पुराण एवं गृह्य सूत्रों में मिलता है। नए निवास पर प्रवेश करने से पहले नकारात्मक ऊर्जाओं की जगह को साफ करने और वास्तु पुरुष और अन्य देवताओं का आशीर्वाद लेने के लिए यह एक आवश्यक वैदिक समारोह है। इसमें गणेश पूजा, नवग्रह पूजा, वास्तु पूजा, हवन और कलश स्थापना शामिल है।",
    samagri: ["हवन कुंड व आम की लकड़ी", "देसी घी", "तिल व जौ", "ताम्र कलश", "आम के पत्ते", "नारियल", "लाल वस्त्र", "हल्दी व कुमकुम", "गंगाजल", "पान व सुपारी", "मिठाई व फल"]
  },
  {
    id: "satyanarayan",
    slug: "satyanarayan-katha-bangalore",
    enTitle: "Satyanarayan Katha",
    hiTitle: "सत्यनारायण कथा",
    price: 3100,
    icon: "📖",
    image: "/images/services/satyanarayan.jpg",
    category: "small",
    shastreeyRef: "प्रमाण: स्कन्द पुराण, रेवा खण्ड (Skanda Purana, Reva Khanda)",
    enDesc: "A powerful prayer to Lord Vishnu for peace, prosperity, and success.",
    hiDesc: "शांति, समृद्धि और सफलता के लिए भगवान विष्णु की एक शक्तिशाली प्रार्थना।",
    enContent: "The Satyanarayan Puja is a religious worship of the Hindu god Vishnu. Maharshi Suta recounted this katha to the sages in the Naimisharanya forest, as detailed in the Skanda Purana, Reva Khanda. It is performed on auspicious occasions, Purnima, and for fulfillment of wishes.",
    hiContent: "सत्यनारायण पूजा हिंदू भगवान विष्णु की एक धार्मिक पूजा है। महर्षि सूत ने नैमिषारण्य जंगल में ऋषियों को यह कथा सुनाई थी, जिसका विवरण स्कंद पुराण, रेवा खण्ड में मिलता है। यह शुभ अवसरों, पूर्णिमा और इच्छा पूर्ति के लिए की जाती है।",
    samagri: ["केले (पाँच)", "पंचामृत (दूध, दही, घी, शहद, चीनी)", "पीला वस्त्र", "तुलसी पत्र", "पुष्प", "नारियल", "गेहूं का आटा (प्रसाद हेतु)", "देसी घी व दीपक", "कलश", "पान व सुपारी", "मिठाई"]
  },
  {
    id: "vivah",
    slug: "vivah-pandit-bangalore",
    enTitle: "Vivah Sanskar",
    hiTitle: "विवाह संस्कार",
    price: 11000,
    icon: "🌺",
    image: "/images/services/vivah.jpg",
    category: "sanskar",
    shastreeyRef: "प्रमाण: पारस्कर गृह्यसूत्र, मनुस्मृति (Paraskara Grihya Sutra, Manusmriti)",
    enDesc: "Authentic North Indian wedding rituals conducted with precision.",
    hiDesc: "सटीकता के साथ आयोजित प्रामाणिक उत्तर भारतीय विवाह अनुष्ठान।",
    enContent: "Marriage (Vivah) is the most important of the 16 Sanskars. We conduct the complete ceremony including Kanyadaan, Panigrahan, and Saptapadi strictly according to the Grihya Sutras. Full services include: Ganesh Puja, Navgrah Puja, Mangal Ashtakam, Varmala, Saptapadi, Sindoor Daan.",
    hiContent: "विवाह 16 संस्कारों में सबसे महत्वपूर्ण है। हम कन्यादान, पाणिग्रहण और सप्तपदी सहित पूरा समारोह गृह्य सूत्रों के अनुसार सख्ती से आयोजित करते हैं। पूर्ण सेवा में शामिल हैं: गणेश पूजा, नवग्रह पूजा, मंगल अष्टकम, वरमाला, सप्तपदी, सिंदूर दान।",
    samagri: ["हवन कुंड व आम की लकड़ी", "देसी घी", "लावा (खील)", "जौ व तिल", "नारियल", "वरमाला व पुष्प", "सिंदूर", "पान व सुपारी", "लाल-पीला वस्त्र", "सप्तपदी पत्थर (सात)", "कलश", "मंगलसूत्र"]
  },
  {
    id: "rudrabhishek",
    slug: "rudrabhishek-pooja-bangalore",
    enTitle: "Rudrabhishek Pooja",
    hiTitle: "रुद्राभिषेक पूजा",
    price: 4100,
    icon: "🔱",
    image: "/images/services/rudrabhishek.jpg",
    category: "small",
    shastreeyRef: "प्रमाण: शिव पुराण, यजुर्वेद (Shiva Purana, Yajurveda)",
    enDesc: "Sacred bathing of the Shiva Lingam to remove obstacles and grant prosperity.",
    hiDesc: "बाधाओं को दूर करने और समृद्धि प्रदान करने के लिए शिव लिंग का पवित्र अभिषेक।",
    enContent: "Rudrabhishek is a highly rewarding ritual detailed in the Shiva Purana. Bathing Lord Shiva with Panchamrit (milk, curd, honey, ghee, sugar) while chanting the Rudra Ashtadhyayi and Shri Rudram from the Yajurveda brings immense peace and removes planetary doshas.",
    hiContent: "रुद्राभिषेक शिव पुराण में विस्तृत एक अत्यधिक फलदायी अनुष्ठान है। यजुर्वेद की रुद्र अष्टाध्यायी और श्री रुद्रम का पाठ करते हुए भगवान शिव को पंचामृत (दूध, दही, शहद, घी, चीनी) से स्नान कराने से अपार शांति मिलती है और ग्रहों के दोष दूर होते हैं।",
    samagri: ["पंचामृत (दूध, दही, घी, शहद, चीनी)", "बेलपत्र", "धतूरा", "सफेद पुष्प", "गंगाजल", "चंदन", "विभूति (भस्म)", "रुद्राक्ष", "देसी घी का दीपक", "नारियल"]
  },
  {
    id: "namkaran",
    slug: "namkaran-pooja-bangalore",
    enTitle: "Namkaran Sanskar",
    hiTitle: "नामकरण संस्कार",
    price: 2500,
    icon: "👶",
    image: "/images/services/namkaran.jpg",
    category: "sanskar",
    shastreeyRef: "प्रमाण: आश्वलायन गृह्यसूत्र (Ashvalayana Grihya Sutra)",
    enDesc: "Traditional naming ceremony for the newborn child.",
    hiDesc: "नवजात शिशु के लिए पारंपरिक नामकरण समारोह।",
    enContent: "The naming of a child (Namkaran) is a profound spiritual event prescribed in the Ashvalayana Grihya Sutra. Based on astrological charts (Kundali) and birth Nakshatra, an auspicious letter is chosen, and the ceremony is performed to bless the child with a long and healthy life.",
    hiContent: "बच्चे का नामकरण एक गहरा आध्यात्मिक आयोजन है जो आश्वलायन गृह्यसूत्र में निर्धारित है। ज्योतिषीय चार्ट (कुंडली) और जन्म नक्षत्र के आधार पर एक शुभ अक्षर चुना जाता है, और बच्चे को लंबे और स्वस्थ जीवन का आशीर्वाद देने के लिए यह समारोह किया जाता है।",
    samagri: ["नारियल", "हल्दी व कुमकुम", "पुष्प", "मिठाई", "देसी घी का दीपक", "अक्षत (चावल)", "पान व सुपारी", "कलश", "नए वस्त्र (शिशु हेतु)", "सोने की अंगूठी (नाम लिखने हेतु)"]
  },
  {
    id: "mundan",
    slug: "mundan-pooja-bangalore",
    enTitle: "Mundan Sanskar",
    hiTitle: "मुंडन संस्कार",
    price: 2500,
    icon: "✂️",
    image: "/images/services/mundan.jpg",
    category: "sanskar",
    shastreeyRef: "प्रमाण: गृह्य सूत्र, मनुस्मृति (Grihya Sutras, Manusmriti)",
    enDesc: "First hair-cutting ceremony to purify the child's mind and soul.",
    hiDesc: "बच्चे के मन और आत्मा को शुद्ध करने के लिए पहला बाल काटने का समारोह।",
    enContent: "Chudakarana or Mundan is the 7th Sanskar performed during the first or third year of the child. It purifies the child from past life karma and stimulates the nerves in the brain for better intellectual growth, as stated in the Manusmriti and Grihya Sutras.",
    hiContent: "चूड़ाकरण या मुंडन सातवाँ संस्कार है जो बच्चे के पहले या तीसरे वर्ष के दौरान किया जाता है। मनुस्मृति और गृह्य सूत्रों के अनुसार यह बच्चे को पिछले जन्म के कर्मों से शुद्ध करता है और बेहतर बौद्धिक विकास के लिए मस्तिष्क की नसों को उत्तेजित करता है।",
    samagri: ["नारियल", "हल्दी व कुमकुम", "दूर्वा", "पुष्प", "देसी घी का दीपक", "जौ व तिल", "पान व सुपारी", "मिठाई", "कलश", "नए वस्त्र (शिशु हेतु)"]
  },
  {
    id: "ganesh-puja",
    slug: "ganesh-puja-bangalore",
    enTitle: "Ganesh Puja",
    hiTitle: "गणेश पूजा",
    price: 2100,
    icon: "🐘",
    image: "/images/services/ganesh-puja.jpg",
    category: "small",
    shastreeyRef: "प्रमाण: गणेश पुराण, मुद्गल पुराण (Ganesha Purana, Mudgala Purana)",
    enDesc: "Worship Lord Ganesha to remove obstacles and ensure success in all endeavors.",
    hiDesc: "सभी कार्यों में सफलता के लिए बाधाविनाशक भगवान गणेश की पूजा।",
    enContent: "Ganesh Puja is performed before any auspicious work to seek the blessings of Vighnaharta (remover of obstacles) Lord Ganesha. As per the Ganesha Purana and Mudgala Purana, worshipping Ganesha ensures success in business, education, new ventures, and any Mangal Karya.",
    hiContent: "किसी भी शुभ कार्य से पहले बाधाओं के हर्ता भगवान गणेश का आशीर्वाद लेने के लिए गणेश पूजा की जाती है। गणेश पुराण और मुद्गल पुराण के अनुसार, गणेश की पूजा व्यापार, शिक्षा, नए उद्यमों और किसी भी मंगल कार्य में सफलता सुनिश्चित करती है।",
    samagri: ["मोदक या लड्डू", "दूर्वा", "लाल पुष्प", "नारियल", "पान व सुपारी", "देसी घी का दीपक", "अगरबत्ती", "हल्दी व कुमकुम", "लाल वस्त्र", "मिठाई"]
  },
  {
    id: "lakshmi-puja",
    slug: "lakshmi-puja-bangalore",
    enTitle: "Lakshmi Puja",
    hiTitle: "लक्ष्मी पूजा",
    price: 2100,
    icon: "🪷",
    image: "/images/services/lakshmi-puja.jpg",
    category: "small",
    shastreeyRef: "प्रमाण: स्कन्द पुराण, श्री सूक्त (Skanda Purana, Shri Sukta - Rigveda)",
    enDesc: "Invite Goddess Lakshmi's blessings for wealth, prosperity, and abundance.",
    hiDesc: "धन, समृद्धि और वैभव के लिए माँ लक्ष्मी का आशीर्वाद आमंत्रित करें।",
    enContent: "Lakshmi Puja is performed with the chanting of Shri Sukta from the Rigveda, which is the oldest hymn dedicated to Goddess Lakshmi. This puja attracts wealth, removes financial obstacles, and brings peace and prosperity to the home and business.",
    hiContent: "लक्ष्मी पूजा ऋग्वेद के श्री सूक्त के पाठ के साथ की जाती है, जो देवी लक्ष्मी को समर्पित सबसे प्राचीन स्तोत्र है। यह पूजा धन को आकर्षित करती है, आर्थिक बाधाओं को दूर करती है और घर और व्यवसाय में शांति और समृद्धि लाती है।",
    samagri: ["कमल या पीले पुष्प", "देसी घी का दीपक", "खील व बताशे", "पान व सुपारी", "नारियल", "हल्दी व कुमकुम", "सफेद वस्त्र", "मिठाई", "कलश", "इत्र (केसर/गुलाब)"]
  },
  {
    id: "navgrah-puja",
    slug: "navgrah-puja-bangalore",
    enTitle: "Navgrah Puja",
    hiTitle: "नवग्रह पूजा",
    price: 3100,
    icon: "⭐",
    image: "/images/services/navgrah-puja.jpg",
    category: "dosha",
    shastreeyRef: "प्रमाण: मत्स्य पुराण, ज्योतिष शास्त्र (Matsya Purana, Jyotisha Shastra)",
    enDesc: "Pacify all nine planets and remove malefic planetary effects from your life.",
    hiDesc: "नौ ग्रहों को शांत करें और जीवन से अशुभ ग्रह प्रभावों को दूर करें।",
    enContent: "Navgrah Puja appeases all nine planets — Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu. Prescribed in the Matsya Purana and Jyotisha Shastra, this puja nullifies negative planetary effects, removes Doshas in the horoscope, and brings health, peace, and prosperity.",
    hiContent: "नवग्रह पूजा सभी नौ ग्रहों — सूर्य, चंद्र, मंगल, बुध, बृहस्पति, शुक्र, शनि, राहु और केतु — को प्रसन्न करती है। मत्स्य पुराण और ज्योतिष शास्त्र में वर्णित यह पूजा नकारात्मक ग्रह प्रभावों को नष्ट करती है, कुंडली के दोष दूर करती है और स्वास्थ्य, शांति और समृद्धि लाती है।",
    samagri: ["नौ प्रकार के अन्न (तिल, जौ, चावल, गेहूं, उड़द, मूंग, चना, मसूर, सरसों)", "नौ रंग के पुष्प", "देसी घी", "दीपक", "नौ रंग के वस्त्र (कपड़े)", "नारियल", "पान व सुपारी", "कुश (दर्भ)", "नवग्रह यंत्र"]
  },
  {
    id: "vastu-shanti",
    slug: "vastu-shanti-pooja-bangalore",
    enTitle: "Vastu Shanti Puja",
    hiTitle: "वास्तु शांति पूजा",
    price: 5100,
    icon: "🧭",
    image: "/images/services/vastu-shanti.jpg",
    category: "small",
    shastreeyRef: "प्रमाण: मयमत, विश्वकर्मा पुराण (Mayamata, Vishwakarma Purana)",
    enDesc: "Harmonize your home or office with Vedic Vastu principles for peace and success.",
    hiDesc: "शांति और सफलता के लिए अपने घर या कार्यालय को वैदिक वास्तु सिद्धांतों से सुसंगत करें।",
    enContent: "Vastu Shanti Puja is prescribed in the ancient Vastu Shastra texts like Mayamata and Vishwakarma Purana. This puja corrects Vastu defects in a home, office, or factory without structural changes, appeasing Vastu Devata and the 45 energy fields of the dwelling.",
    hiContent: "वास्तु शांति पूजा प्राचीन वास्तु शास्त्र ग्रंथों जैसे मयमत और विश्वकर्मा पुराण में वर्णित है। यह पूजा बिना संरचनात्मक बदलाव के घर, कार्यालय या फैक्टरी के वास्तु दोषों को ठीक करती है, वास्तु देवता और निवास के 45 ऊर्जा क्षेत्रों को प्रसन्न करती है।",
    samagri: ["हवन कुंड व आम की लकड़ी", "देसी घी", "तिल व जौ", "पंचरत्न", "गंगाजल", "नव धान्य", "नारियल", "लाल वस्त्र", "कलश", "वास्तु यंत्र"]
  },
  {
    id: "kanya-puja",
    slug: "kanya-puja-bangalore",
    enTitle: "Kanya Puja",
    hiTitle: "कन्या पूजा",
    price: 2100,
    icon: "🙏",
    image: "/images/services/kanya-puja.jpg",
    category: "festival",
    shastreeyRef: "प्रमाण: देवी भागवत पुराण, मार्कण्डेय पुराण (Devi Bhagavata, Markandeya Purana)",
    enDesc: "Worship nine young girls as manifestations of the nine forms of Devi Durga.",
    hiDesc: "देवी दुर्गा के नौ रूपों के प्रतीक के रूप में नौ कन्याओं की पूजा।",
    enContent: "Kanya Puja is an integral part of Navratri, prescribed in the Devi Bhagavata and Markandeya Purana. Nine young girls (ages 2-10) are worshipped as manifestations of the nine Shaktis. Their feet are washed, tilak applied, and they are offered food, clothes, and gifts.",
    hiContent: "कन्या पूजा नवरात्रि का एक अभिन्न अंग है जो देवी भागवत और मार्कण्डेय पुराण में वर्णित है। नौ छोटी कन्याओं (2-10 वर्ष) को नौ शक्तियों के रूप में पूजा जाता है। उनके पैर धोए जाते हैं, तिलक लगाया जाता है और भोजन, वस्त्र और उपहार भेंट किए जाते हैं।",
    samagri: ["नौ रंग की चुनरी / दुपट्टा", "नौ प्रकार के पुष्प", "हलवा-पूरी-काले चने (भोग हेतु)", "मिठाई", "पान व सुपारी", "कुमकुम व हल्दी", "मेहंदी", "दक्षिणा (कन्याओं हेतु)", "दीपक"]
  },
  {
    id: "annaprashan",
    slug: "annaprashan-pooja-bangalore",
    enTitle: "Annaprashan Sanskar",
    hiTitle: "अन्नप्राशन संस्कार",
    price: 2500,
    icon: "🍚",
    image: "/images/services/annaprashan.jpg",
    category: "sanskar",
    shastreeyRef: "प्रमाण: आश्वलायन गृह्यसूत्र, बौधायन गृह्यसूत्र (Ashvalayana & Baudhayana Grihya Sutra)",
    enDesc: "First rice-feeding ceremony marking the baby's transition to solid food.",
    hiDesc: "शिशु के ठोस आहार की शुरुआत का प्रतीक पहला अन्नप्राशन समारोह।",
    enContent: "Annaprashan (first rice feeding) is the 6th Sanskar described in the Ashvalayana and Baudhayana Grihya Sutras. Performed in the 6th month for boys and the 5th or 7th month for girls, it is the baby's first experience of solid food, blessed by the chanting of Vedic mantras.",
    hiContent: "अन्नप्राशन (पहला अन्न खिलाना) छठा संस्कार है जो आश्वलायन और बौधायन गृह्यसूत्रों में वर्णित है। लड़कों के लिए छठे महीने और लड़कियों के लिए पाँचवें या सातवें महीने में किया जाता है, यह वैदिक मंत्रों के पाठ द्वारा आशीर्वादित शिशु के ठोस आहार का पहला अनुभव है।",
    samagri: ["खीर या चावल का भात", "चांदी या तांबे का कटोरा", "केला", "शहद", "देसी घी", "हल्दी व कुमकुम", "दीपक", "कलश", "नारियल", "नए वस्त्र (शिशु हेतु)"]
  },
  {
    id: "yagyopaveet",
    slug: "yagyopaveet-sanskar-bangalore",
    enTitle: "Yagyopaveet Sanskar",
    hiTitle: "यज्ञोपवीत संस्कार",
    price: 5100,
    icon: "🧵",
    image: "/images/services/yagyopaveet.jpg",
    category: "sanskar",
    shastreeyRef: "प्रमाण: पारस्कर गृह्यसूत्र, मनुस्मृति (Paraskara Grihya Sutra, Manusmriti)",
    enDesc: "Sacred thread ceremony — the spiritual rebirth of a Brahmin boy.",
    hiDesc: "जनेऊ संस्कार — एक ब्राह्मण बालक का आध्यात्मिक पुनर्जन्म।",
    enContent: "Yagyopaveet (Janoi/Upanayana) is the 10th Sanskar and marks a boy's formal entry into the Vedic education system. As per the Paraskara Grihya Sutra, the sacred thread (Yajnopavita) is worn as a symbol of the three debts — to teachers, ancestors, and gods. The ceremony includes Havan, Gayatri Mantra initiation.",
    hiContent: "यज्ञोपवीत (जनेऊ/उपनयन) दसवाँ संस्कार है और एक बालक के वैदिक शिक्षा प्रणाली में औपचारिक प्रवेश का प्रतीक है। पारस्कर गृह्यसूत्र के अनुसार, पवित्र धागा (यज्ञोपवीत) तीन ऋणों — गुरु, पितृ और देव — के प्रतीक के रूप में पहना जाता है। समारोह में हवन और गायत्री मंत्र दीक्षा शामिल है।",
    samagri: ["यज्ञोपवीत धागा (जनेऊ)", "हवन कुंड व आम की लकड़ी", "देसी घी", "तिल व जौ", "पीला वस्त्र", "कमंडल", "कुश", "नारियल", "कलश", "मेखला (कच्चा धागा)"]
  },
  {
    id: "mangal-dosh",
    slug: "mangal-dosh-puja-bangalore",
    enTitle: "Mangal Dosh Shanti",
    hiTitle: "मंगल दोष शांति",
    price: 5100,
    icon: "🪐",
    image: "/images/services/mangal-dosh.jpg",
    category: "dosha",
    shastreeyRef: "प्रमाण: ज्योतिष शास्त्र, मुहूर्त चिंतामणि (Jyotisha Shastra, Muhurta Chintamani)",
    enDesc: "Nullify the malefic effects of Mangal (Mars) Dosha before marriage.",
    hiDesc: "विवाह से पहले मंगल दोष के अशुभ प्रभावों को शांत करें।",
    enContent: "Mangal Dosha occurs when Mars is placed in the 1st, 4th, 7th, 8th, or 12th house of the horoscope. Prescribed in Jyotisha Shastra, this puja pacifies Lord Mangal through specific rituals, recitation of Mangal Stotra, Havan, and donation. It is essential before marriage to ensure marital harmony.",
    hiContent: "मंगल दोष तब होता है जब मंगल कुंडली के पहले, चौथे, सातवें, आठवें या बारहवें भाव में हो। ज्योतिष शास्त्र में वर्णित यह पूजा विशेष अनुष्ठानों, मंगल स्तोत्र पाठ, हवन और दान के माध्यम से भगवान मंगल को प्रसन्न करती है। विवाहिक सामंजस्य सुनिश्चित करने के लिए विवाह से पहले यह आवश्यक है।",
    samagri: ["लाल वस्त्र", "मंगल यंत्र (ताम्र पट्टिका)", "लाल पुष्प", "मसूर दाल", "गुड़", "लाल चंदन", "आम की लकड़ी", "देसी घी", "तिल", "कलश"]
  },
  {
    id: "kaal-sarp-dosh",
    slug: "kaal-sarp-dosh-puja-bangalore",
    enTitle: "Kaal Sarp Dosh Puja",
    hiTitle: "काल सर्प दोष शांति",
    price: 7100,
    icon: "🐍",
    image: "/images/services/kaal-sarp-dosh.jpg",
    category: "dosha",
    shastreeyRef: "प्रमाण: सर्प पुराण, नाग पंचमी विधि (Sarpa Purana, Naga Panchami Vidhi)",
    enDesc: "Powerful remedy to nullify Kaal Sarp Dosha and its life-disrupting effects.",
    hiDesc: "जीवन को प्रभावित करने वाले काल सर्प दोष को शांत करने का शक्तिशाली उपाय।",
    enContent: "Kaal Sarp Dosha arises when all seven planets are hemmed between Rahu and Ketu in the horoscope. This powerful puja, performed with Nag Devata worship, Rudrabhishek, and recitation of Kaal Sarp Stotra, removes the affliction and brings relief from obstacles in career, marriage, and progeny.",
    hiContent: "काल सर्प दोष तब उत्पन्न होता है जब सभी सात ग्रह कुंडली में राहु और केतु के बीच हों। नाग देवता पूजा, रुद्राभिषेक और काल सर्प स्तोत्र पाठ के साथ की जाने वाली यह शक्तिशाली पूजा करियर, विवाह और संतान में बाधाओं से राहत दिलाती है।",
    samagri: ["चांदी या तांबे के नाग-नागिन युगल", "दूध", "देसी घी", "सफेद पुष्प", "हवन कुंड", "तिल", "कुश (दर्भ)", "पंचमेवा", "नारियल", "काल सर्प यंत्र"]
  },
  {
    id: "hanuman-puja",
    slug: "hanuman-puja-bangalore",
    enTitle: "Hanuman Puja",
    hiTitle: "हनुमान पूजा",
    price: 2100,
    icon: "🙏",
    image: "/images/services/hanuman-puja.jpg",
    category: "small",
    shastreeyRef: "प्रमाण: वाल्मीकि रामायण, हनुमान चालीसा (Valmiki Ramayana, Hanuman Chalisa)",
    enDesc: "Invoke Lord Hanuman's protection, strength, and blessings for victory over obstacles.",
    hiDesc: "बाधाओं पर विजय के लिए भगवान हनुमान की सुरक्षा, शक्ति और आशीर्वाद का आह्वान।",
    enContent: "Hanuman Puja, performed on Tuesdays and Saturdays, removes fear, evil eye, and black magic. Recitation of Sundarkand, Hanuman Chalisa, and Bajrang Baan, as prescribed in Valmiki Ramayana, grants protection from evil forces, courage, devotion, and success.",
    hiContent: "मंगलवार और शनिवार को की जाने वाली हनुमान पूजा भय, बुरी नज़र और काला जादू दूर करती है। वाल्मीकि रामायण में वर्णित सुंदरकांड, हनुमान चालीसा और बजरंग बाण के पाठ से बुरी शक्तियों से सुरक्षा, साहस, भक्ति और सफलता मिलती है।",
    samagri: ["सिंदूर", "सरसों का तेल", "लाल पुष्प (गुड़हल)", "बूंदी के लड्डू", "जनेऊ", "लाल वस्त्र", "देसी घी का दीपक", "बजरंग बाण (पुस्तिका)"]
  },
  {
    id: "durga-puja",
    slug: "durga-puja-bangalore",
    enTitle: "Durga Puja",
    hiTitle: "दुर्गा पूजा",
    price: 3100,
    icon: "⚔️",
    image: "/images/services/durga-puja.jpg",
    category: "small",
    shastreeyRef: "प्रमाण: देवी भागवत पुराण, दुर्गा सप्तशती (Devi Bhagavata, Durga Saptashati)",
    enDesc: "Worship Goddess Durga with Durga Saptashati recitation for protection and power.",
    hiDesc: "सुरक्षा और शक्ति के लिए दुर्गा सप्तशती पाठ के साथ माँ दुर्गा की पूजा।",
    enContent: "Durga Puja involves the complete recitation of Durga Saptashati (700 verses from Markandeya Purana) — the primary scripture for Devi worship. This puja grants protection from enemies, evil forces, and disease, and blesses the devotee with health, courage, and spiritual strength.",
    hiContent: "दुर्गा पूजा में दुर्गा सप्तशती (मार्कण्डेय पुराण के 700 श्लोक) का पूर्ण पाठ शामिल है — देवी पूजा का प्रमुख शास्त्र। यह पूजा शत्रुओं, दुष्ट शक्तियों और रोगों से सुरक्षा प्रदान करती है और भक्त को स्वास्थ्य, साहस और आध्यात्मिक शक्ति का आशीर्वाद देती है।",
    samagri: ["लाल पुष्प", "चंदन", "कुमकुम", "हल्दी", "गंगाजल", "नारियल", "पान व सुपारी", "देसी घी का दीपक", "लाल चुनरी", "दुर्गा सप्तशती पुस्तक"]
  },
  {
    id: "saraswati-puja",
    slug: "saraswati-puja-bangalore",
    enTitle: "Saraswati Puja",
    hiTitle: "सरस्वती पूजा",
    price: 2100,
    icon: "📚",
    image: "/images/services/saraswati-puja.jpg",
    category: "small",
    shastreeyRef: "प्रमाण: स्कन्द पुराण, सरस्वती स्तोत्र (Skanda Purana, Saraswati Stotra)",
    enDesc: "Seek Goddess Saraswati's blessings for knowledge, wisdom, and success in studies.",
    hiDesc: "ज्ञान, बुद्धि और अध्ययन में सफलता के लिए माँ सरस्वती का आशीर्वाद प्राप्त करें।",
    enContent: "Saraswati Puja is especially performed on Basant Panchami and before examinations. Recitation of Saraswati Stotra, as in the Skanda Purana, and worship of books, instruments, and tools blesses students, artists, and professionals with clarity of mind, creativity, and excellence.",
    hiContent: "सरस्वती पूजा विशेष रूप से बसंत पंचमी पर और परीक्षाओं से पहले की जाती है। स्कन्द पुराण के सरस्वती स्तोत्र का पाठ और पुस्तकों, वाद्य यंत्रों और उपकरणों की पूजा छात्रों, कलाकारों और पेशेवरों को मन की स्पष्टता, रचनात्मकता और उत्कृष्टता का आशीर्वाद देती है।",
    samagri: ["पीले पुष्प", "सफेद वस्त्र", "मिश्री व दही", "देसी घी का दीपक", "नारियल", "पान व सुपारी", "पुस्तकें (पूजा हेतु रखना)", "कलश", "इत्र", "अगरबत्ती"]
  },
  {
    id: "bhagvat-mahapuran",
    slug: "bhagvat-mahapuran-katha-bangalore",
    enTitle: "Bhagvat Mahapuran Katha",
    hiTitle: "श्रीमद् भागवत महापुराण कथा",
    price: 51000,
    icon: "🕉️",
    image: "/images/services/bhagvat-mahapuran.jpg",
    category: "large",
    shastreeyRef: "प्रमाण: श्रीमद् भागवत महापुराण, 12 स्कंध (Srimad Bhagavata Mahapurana, 12 Skandhas)",
    enDesc: "7-day complete Bhagvat Katha event — the highest form of devotional discourse.",
    hiDesc: "7 दिवसीय सम्पूर्ण भागवत कथा — भक्ति प्रवचन का सर्वोच्च रूप।",
    enContent: "Srimad Bhagavata Mahapurana is the jewel of all 18 Puranas, comprising 12 Skandhas (volumes) and 18,000 shlokas. A 7-day Bhagvat Katha event includes detailed narration of Lord Krishna's leelas, Prahlad charitra, Dhruva charitra, Sudama charitra, and Bhagavata Gita. Covers full event management, decoration, and daily puja.",
    hiContent: "श्रीमद् भागवत महापुराण सभी 18 पुराणों का मणि है, जिसमें 12 स्कंध और 18,000 श्लोक हैं। 7 दिवसीय भागवत कथा में भगवान कृष्ण की लीलाएं, प्रह्लाद चरित्र, ध्रुव चरित्र, सुदामा चरित्र और भागवत गीता का विस्तृत वर्णन शामिल है। पूर्ण इवेंट प्रबंधन, सजावट और दैनिक पूजा सम्मिलित।",
    samagri: ["श्रीमद् भागवत ग्रंथ", "व्यास पीठ (लकड़ी का आसन)", "फूल माला (सजावट हेतु)", "देसी घी के दीपक", "नारियल", "पान व सुपारी", "तुलसी पत्र", "पंचामृत", "हवन सामग्री (अंतिम दिन हेतु)", "कलश"]
  },
  {
    id: "sundarkand",
    slug: "sundarkand-path-bangalore",
    enTitle: "Sundarkand Path",
    hiTitle: "सुंदरकांड पाठ",
    price: 5100,
    icon: "📿",
    image: "/images/services/sundarkand.jpg",
    category: "large",
    shastreeyRef: "प्रमाण: वाल्मीकि रामायण, पंचम काण्ड (Valmiki Ramayana, 5th Kanda)",
    enDesc: "Complete recitation of Sundarkand from Ramayana for blessings and wish fulfillment.",
    hiDesc: "आशीर्वाद और इच्छा पूर्ति के लिए रामायण के सुंदरकांड का सम्पूर्ण पाठ।",
    enContent: "Sundarkand is the 5th Kanda (chapter) of Valmiki Ramayana, describing Hanuman's journey to Lanka, his meeting with Sita, and his victory over Ravana's forces. Regular Sundarkand path removes all obstacles, brings success, and fulfills wishes. Can be done as an individual or group recitation.",
    hiContent: "सुंदरकांड वाल्मीकि रामायण का पाँचवाँ काण्ड है जो हनुमान की लंका यात्रा, सीता से मुलाकात और रावण की सेना पर विजय का वर्णन करता है। नियमित सुंदरकांड पाठ सभी बाधाओं को दूर करता है, सफलता लाता है और मनोकामनाएं पूरी करता है। व्यक्तिगत या समूह पाठ के रूप में किया जा सकता है।",
    samagri: ["सुंदरकांड ग्रंथ", "देसी घी का दीपक", "हनुमान प्रतिमा या चित्र", "लाल पुष्प", "सिंदूर", "बूंदी", "पान व सुपारी", "नारियल"]
  },
  {
    id: "ram-katha",
    slug: "ram-katha-bangalore",
    enTitle: "Ram Katha",
    hiTitle: "राम कथा",
    price: 31000,
    icon: "🏹",
    image: "/images/services/ram-katha.jpg",
    category: "large",
    shastreeyRef: "प्रमाण: वाल्मीकि रामायण, रामचरितमानस (Valmiki Ramayana, Ramcharitmanas)",
    enDesc: "Multi-day Ram Katha discourse — the story of Lord Ram narrated with devotional singing.",
    hiDesc: "बहु-दिवसीय राम कथा प्रवचन — भक्ति संगीत के साथ भगवान राम की कथा।",
    enContent: "Ram Katha is a devotional narrative of Lord Ram's life based on Valmiki Ramayana and Tulsidas's Ramcharitmanas. The 3 to 9-day event features daily discourses, bhajan-kirtan, and brings immense spiritual merit. Complete event setup including stage, lighting, sound, and prasad distribution.",
    hiContent: "राम कथा वाल्मीकि रामायण और तुलसीदास की रामचरितमानस पर आधारित भगवान राम के जीवन का भक्तिपूर्ण वर्णन है। 3 से 9 दिवसीय कार्यक्रम में दैनिक प्रवचन, भजन-कीर्तन होते हैं और अपार आध्यात्मिक पुण्य मिलता है। मंच, प्रकाश, ध्वनि और प्रसाद वितरण सहित पूर्ण कार्यक्रम व्यवस्था।",
    samagri: ["रामचरितमानस ग्रंथ", "व्यास पीठ", "राम दरबार मूर्ति या चित्र", "फूल माला", "देसी घी के दीपक", "पान व सुपारी", "नारियल", "हवन सामग्री (अंतिम दिन)"]
  },
  {
    id: "shiv-mahapuran",
    slug: "shiv-mahapuran-katha-bangalore",
    enTitle: "Shiv Mahapuran Katha",
    hiTitle: "शिव महापुराण कथा",
    price: 51000,
    icon: "🔱",
    image: "/images/services/shiv-mahapuran.jpg",
    category: "large",
    shastreeyRef: "प्रमाण: शिव महापुराण, 7 संहिताएं (Shiva Mahapurana, 7 Samhitas)",
    enDesc: "11-day Gyarah-diwasiya Shiv Mahapuran Katha event narrating the glory of Lord Shiva.",
    hiDesc: "भगवान शिव की महिमा का वर्णन करने वाला 11 दिवसीय (ग्यारह दिवसीय) शिव महापुराण कथा कार्यक्रम।",
    enContent: "Shiv Mahapurana contains 7 Samhitas (collections) — Vidyeshwara, Rudra, Shatarudra, Kotirudra, Uma, Kailasha, and Vayaviya — comprising 24,000 shlokas narrating the glory, forms, and leelas of Lord Shiva. The canonical 11-day (Gyarah-diwasiya) Katha event systematically covers all 7 Samhitas with daily Rudrabhishek, bhajans, and discourses. Brings Shiva's blessings for moksha and removal of all sins.",
    hiContent: "शिव महापुराण में 7 संहिताएं — विद्येश्वर, रुद्र, शतरुद्र, कोटिरुद्र, उमा, कैलाश और वायवीय — और 24,000 श्लोक हैं जो भगवान शिव की महिमा, रूपों और लीलाओं का वर्णन करते हैं। शास्त्रोक्त 11 दिवसीय (ग्यारह दिवसीय) कथा में सभी 7 संहिताओं का क्रमबद्ध वर्णन होता है, साथ में दैनिक रुद्राभिषेक, भजन और प्रवचन होते हैं। मोक्ष और सभी पापों के नाश के लिए शिव का आशीर्वाद मिलता है।",
    samagri: ["शिव महापुराण ग्रंथ", "व्यास पीठ", "बेलपत्र", "सफेद पुष्प", "पंचामृत", "देसी घी के दीपक", "रुद्राक्ष", "विभूति", "नारियल", "कलश"]
  },
  {
    id: "devi-bhagvat",
    slug: "devi-bhagvat-katha-bangalore",
    enTitle: "Devi Bhagvat Katha",
    hiTitle: "देवी भागवत कथा",
    price: 41000,
    icon: "🪔",
    image: "/images/services/devi-bhagvat.jpg",
    category: "large",
    shastreeyRef: "प्रमाण: देवी भागवत पुराण, 12 स्कंध (Devi Bhagavata Purana, 12 Skandhas)",
    enDesc: "9-day Nav-diwasiya Devi Bhagvat Katha narrating the glory of the Divine Mother.",
    hiDesc: "दिव्य माँ की महिमा का वर्णन करने वाली 9 दिवसीय (नव दिवसीय) देवी भागवत कथा।",
    enContent: "Devi Bhagavata Purana is one of the 18 Mahapuranas, dedicated to Goddess Shakti, comprising 12 Skandhas and 18,000 shlokas. The canonical 9-day (Nav-diwasiya) Katha — corresponding to the nine Devis worshipped across Navratri and the 12 Skandhas of the Purana — includes narration of Devi Mahatmya, the glory of all nine Shakti forms, and Durga Saptashati. Daily Havan, Kumari Puja, and bhajans are included. Specially recommended during Navratri.",
    hiContent: "देवी भागवत पुराण 18 महापुराणों में से एक है जो देवी शक्ति को समर्पित है, इसमें 12 स्कंध और 18,000 श्लोक हैं। शास्त्रोक्त 9 दिवसीय (नव दिवसीय) कथा — जो नवरात्रि में पूजी जाने वाली नौ देवियों और पुराण के 12 स्कंधों के अनुरूप है — में देवी महात्म्य, सभी नौ शक्ति रूपों की महिमा और दुर्गा सप्तशती का वर्णन शामिल है। दैनिक हवन, कुमारी पूजा और भजन सम्मिलित हैं। नवरात्रि के दौरान विशेष रूप से अनुशंसित।",
    samagri: ["देवी भागवत ग्रंथ", "व्यास पीठ", "लाल पुष्प", "लाल चुनरी", "नारियल", "पान व सुपारी", "कुमकुम व हल्दी", "देसी घी के दीपक", "हवन सामग्री (दैनिक)"]
  },
  {
    id: "akhand-ramayan",
    slug: "akhand-ramayan-path-bangalore",
    enTitle: "Akhand Ramayan Path",
    hiTitle: "अखंड रामायण पाठ",
    price: 11000,
    icon: "📜",
    image: "/images/services/akhand-ramayan.jpg",
    category: "large",
    shastreeyRef: "प्रमाण: रामचरितमानस, तुलसीदास (Ramcharitmanas, Tulsidas)",
    enDesc: "24-hour non-stop recitation of the complete Ramcharitmanas (Akhand Path).",
    hiDesc: "सम्पूर्ण रामचरितमानस का 24 घंटे निरंतर अखंड पाठ।",
    enContent: "Akhand Ramayan Path is the continuous, uninterrupted 24-hour recitation of Tulsidas's Ramcharitmanas by a relay of trained pandits. The entire 7 Kandas are completed without break. Brings immense spiritual merit, removes negative energies from home, and grants Lord Ram's blessings to the entire family.",
    hiContent: "अखंड रामायण पाठ प्रशिक्षित पंडितों की एक टीम द्वारा तुलसीदास की रामचरितमानस का निरंतर 24 घंटे का पाठ है। बिना किसी रुकावट के पूरे 7 कांड पूर्ण किए जाते हैं। अपार आध्यात्मिक पुण्य प्राप्त होता है, घर से नकारात्मक ऊर्जाएं दूर होती हैं और पूरे परिवार को भगवान राम का आशीर्वाद मिलता है।",
    samagri: ["रामचरितमानस (बड़ा ग्रंथ)", "ग्रंथ पीठ", "देसी घी के दीपक (24 घंटे हेतु)", "पान व सुपारी", "नारियल", "हल्दी", "तुलसी पत्र", "पुष्प"]
  },
  {
    id: "sagai",
    slug: "sagai-engagement-bangalore",
    enTitle: "Sagai / Engagement Ceremony",
    hiTitle: "सगाई / रोका समारोह",
    price: 5100,
    icon: "💍",
    image: "/images/services/sagai.jpg",
    category: "sanskar",
    shastreeyRef: "प्रमाण: पारस्कर गृह्यसूत्र, वाग्दान विधि (Paraskara Grihya Sutra, Vagdana Vidhi)",
    enDesc: "Auspicious Sagai/Tilak engagement ceremony with Vedic rituals.",
    hiDesc: "वैदिक अनुष्ठानों के साथ शुभ सगाई/तिलक समारोह।",
    enContent: "Sagai (Vagdana or Vacha) is the formal engagement ceremony where the boy's family visits the girl's home to formally announce the alliance. According to the Paraskara Grihya Sutra, the Tilak ceremony includes Ganesh Puja, ring exchange, Roka ritual, and Tilak with mantra recitation.",
    hiContent: "सगाई (वाग्दान या वाचा) वह औपचारिक समारोह है जिसमें वर पक्ष कन्या के घर जाकर औपचारिक रूप से संबंध की घोषणा करता है। पारस्कर गृह्यसूत्र के अनुसार, तिलक समारोह में गणेश पूजा, अंगूठी का आदान-प्रदान, रोका अनुष्ठान और मंत्र पाठ के साथ तिलक शामिल है।",
    samagri: ["रोली व अक्षत", "पुष्प", "मिठाई", "नारियल", "पान व सुपारी", "लाल वस्त्र", "देसी घी का दीपक", "कलश", "हल्दी व कुमकुम"]
  },
  {
    id: "navratri-puja",
    slug: "navratri-puja-bangalore",
    enTitle: "Navratri Special Puja",
    hiTitle: "नवरात्रि विशेष पूजा",
    price: 7100,
    icon: "🏺",
    image: "/images/services/navratri-puja.jpg",
    category: "festival",
    shastreeyRef: "प्रमाण: देवी भागवत, मार्कण्डेय पुराण (Devi Bhagavata, Markandeya Purana)",
    enDesc: "Complete 9-day Navratri puja including Ghatasthapana, Kanya Puja, and Havan.",
    hiDesc: "घटस्थापना, कन्या पूजा और हवन सहित सम्पूर्ण 9 दिवसीय नवरात्रि पूजा।",
    enContent: "Navratri is celebrated twice a year (Chaitra and Sharad) for nine nights worshipping nine forms of Goddess Durga. The complete puja package includes Ghatasthapana (Day 1), daily Durga Saptashati recitation, Kanya Puja (Day 8/9), and Havan on the final day.",
    hiContent: "नवरात्रि साल में दो बार (चैत्र और शारद) देवी दुर्गा के नौ रूपों की पूजा के लिए नौ रातें मनाई जाती है। सम्पूर्ण पूजा पैकेज में घटस्थापना (पहला दिन), दैनिक दुर्गा सप्तशती पाठ, कन्या पूजा (8वां/9वां दिन) और अंतिम दिन हवन शामिल है।",
    samagri: ["मिट्टी का कलश (घटस्थापना हेतु)", "जौ", "नव दुर्गा मूर्ति या चित्र", "लाल चुनरी", "नौ रंग के पुष्प", "कुमकुम व हल्दी", "देसी घी के दीपक", "नौ प्रकार के फल", "दुर्गा सप्तशती पुस्तक", "हवन सामग्री (अंतिम दिन)"]
  },
  {
    id: "diwali-puja",
    slug: "diwali-puja-bangalore",
    enTitle: "Diwali Lakshmi-Ganesh Puja",
    hiTitle: "दीपावली लक्ष्मी-गणेश पूजा",
    price: 3100,
    icon: "🪔",
    image: "/images/services/diwali-puja.jpg",
    category: "festival",
    shastreeyRef: "प्रमाण: स्कन्द पुराण, पद्म पुराण (Skanda Purana, Padma Purana)",
    enDesc: "Auspicious Diwali Lakshmi-Ganesh puja for wealth, prosperity, and divine blessings.",
    hiDesc: "धन, समृद्धि और दिव्य आशीर्वाद के लिए शुभ दीपावली लक्ष्मी-गणेश पूजा।",
    enContent: "Diwali Lakshmi Puja, prescribed in the Skanda and Padma Puranas, is performed on Amavasya (new moon) night of Kartik month. The puja includes Ganesh Puja, Lakshmi Puja with Shri Sukta, lighting of diyas, and Aarti. Ensures the blessings of Goddess Lakshmi for the coming year.",
    hiContent: "दीपावली लक्ष्मी पूजा, स्कन्द और पद्म पुराणों में वर्णित, कार्तिक मास की अमावस्या की रात को की जाती है। पूजा में गणेश पूजा, श्री सूक्त के साथ लक्ष्मी पूजा, दीपों का प्रज्वलन और आरती शामिल है। आने वाले वर्ष के लिए देवी लक्ष्मी का आशीर्वाद सुनिश्चित होता है।",
    samagri: ["लक्ष्मी-गणेश मूर्ति", "खील व बताशे", "मिठाई", "मिट्टी के दीपक", "देसी घी", "पीले पुष्प", "पान व सुपारी", "नारियल", "कलश", "कुमकुम"]
  },
  {
    id: "janmashtami-puja",
    slug: "janmashtami-puja-bangalore",
    enTitle: "Janmashtami Puja",
    hiTitle: "जन्माष्टमी पूजा",
    price: 3100,
    icon: "🎷",
    image: "/images/services/janmashtami-puja.jpg",
    category: "festival",
    shastreeyRef: "प्रमाण: भागवत पुराण, दशम स्कंध (Bhagavata Purana, Dashama Skandha)",
    enDesc: "Celebrate Lord Krishna's birth with full rituals, Jhulan decoration, and Prasad.",
    hiDesc: "पूर्ण अनुष्ठान, झूलन सजावट और प्रसाद के साथ भगवान कृष्ण के जन्म का उत्सव।",
    enContent: "Janmashtami celebrates the birth of Lord Krishna at midnight on Bhadrapad Krishna Ashtami, as narrated in the Bhagavata Purana, Dashama Skandha. The puja includes Abhishek of baby Krishna, Jhulan (cradle) decoration, Bhagavata recitation, midnight Aarti, and distribution of Panchamrit prasad.",
    hiContent: "जन्माष्टमी भागवत पुराण के दशम स्कंध में वर्णित भाद्रपद कृष्ण अष्टमी को मध्यरात्रि में भगवान कृष्ण के जन्म का उत्सव है। पूजा में बाल कृष्ण का अभिषेक, झूलन (पालना) सजावट, भागवत पाठ, मध्यरात्रि आरती और पंचामृत प्रसाद वितरण शामिल है।",
    samagri: ["बाल कृष्ण मूर्ति", "झूलन / पालना", "पंचामृत (दूध, दही, घी, शहद, चीनी)", "माखन व मिश्री", "तुलसी पत्र", "पीले पुष्प", "देसी घी का दीपक", "नारियल", "पान व सुपारी"]
  },
  {
    id: "maha-shivaratri",
    slug: "maha-shivaratri-puja-bangalore",
    enTitle: "Maha Shivaratri Puja",
    hiTitle: "महा शिवरात्रि पूजा",
    price: 4100,
    icon: "🌙",
    image: "/images/services/maha-shivaratri.jpg",
    category: "festival",
    shastreeyRef: "प्रमाण: शिव पुराण, लिंग पुराण (Shiva Purana, Linga Purana)",
    enDesc: "All-night Maha Shivaratri puja with four Prahar Rudrabhishek and Jagran.",
    hiDesc: "चार प्रहर रुद्राभिषेक और जागरण के साथ सम्पूर्ण रात्रि महा शिवरात्रि पूजा।",
    enContent: "Maha Shivaratri, described in the Shiva and Linga Puranas, is the most sacred night for Lord Shiva worship. The puja includes four Prahar (3-hour) Rudrabhishek sessions through the night with milk, honey, curd, and water, recitation of Shiva Mahimna Stotra, and Aarti at each Prahar.",
    hiContent: "महा शिवरात्रि, शिव और लिंग पुराणों में वर्णित, भगवान शिव पूजा की सबसे पवित्र रात है। पूजा में रात के दौरान चार प्रहर (3 घंटे) दूध, शहद, दही और जल के साथ रुद्राभिषेक, शिव महिम्न स्तोत्र का पाठ और प्रत्येक प्रहर पर आरती शामिल है।",
    samagri: ["पंचामृत (दूध, दही, घी, शहद, चीनी)", "बेलपत्र", "धतूरा", "सफेद पुष्प", "गंगाजल", "देसी घी के दीपक (चार प्रहर हेतु)", "विभूति", "रुद्राक्ष", "नारियल"]
  },
  {
    id: "pitru-paksha",
    slug: "pitru-paksha-shradh-bangalore",
    enTitle: "Pitru Paksha Shradh Puja",
    hiTitle: "पितृ पक्ष श्राद्ध पूजा",
    price: 3100,
    icon: "🕯️",
    image: "/images/services/pitru-paksha.jpg",
    category: "small",
    shastreeyRef: "प्रमाण: गरुड़ पुराण, मनुस्मृति (Garuda Purana, Manusmriti)",
    enDesc: "Perform Shradh rituals to honor ancestors and seek their blessings and liberation.",
    hiDesc: "पूर्वजों का सम्मान करने और उनका आशीर्वाद व मोक्ष के लिए श्राद्ध अनुष्ठान।",
    enContent: "Pitru Paksha Shradh is prescribed in the Garuda Purana and Manusmriti as an essential duty to departed ancestors. Performed during the Pitru Paksha fortnight (16 days), it includes Pind Daan (rice ball offering), Tarpan (water offering), Brahmin Bhojan, and recitation of specific Pitru Mantras.",
    hiContent: "पितृ पक्ष श्राद्ध गरुड़ पुराण और मनुस्मृति में दिवंगत पूर्वजों के प्रति एक आवश्यक कर्तव्य के रूप में वर्णित है। पितृ पक्ष पखवाड़े (16 दिन) के दौरान किया जाता है, इसमें पिंड दान (चावल के गोले की भेंट), तर्पण (जल अर्पण), ब्राह्मण भोजन और विशेष पितृ मंत्रों का पाठ शामिल है।",
    samagri: ["काले तिल", "जौ", "चावल", "कुश (दर्भ)", "तांबे का कलश", "गंगाजल", "जनेऊ", "पिंड सामग्री (आटे के गोले)", "पान व सुपारी"]
  },
  {
    id: "rudrachandi",
    slug: "rudrachandi-path-bangalore",
    enTitle: "Rudrachandi Path",
    hiTitle: "रुद्रचण्डी पाठ",
    price: 11000,
    icon: "⚡",
    image: "/images/services/rudrachandi.jpg",
    category: "large",
    shastreeyRef: "प्रमाण: मार्कण्डेय पुराण, दुर्गा सप्तशती (Markandeya Purana, Durga Saptashati)",
    enDesc: "A powerful combined recitation of Rudrashtadhyayi and Durga Saptashati for protection and victory.",
    hiDesc: "सुरक्षा और विजय के लिए रुद्राष्टाध्यायी और दुर्गा सप्तशती का शक्तिशाली संयुक्त पाठ।",
    enContent: "Rudrachandi Path is a combined recitation of Shri Rudra (Yajurveda) and Durga Saptashati (Markandeya Purana). Rudra represents Lord Shiva's protective and destructive aspect while Chandi (Durga) embodies divine feminine power. Together they create an invincible shield of protection. This path is performed for removal of enemies, severe doshas, Kaal Sarp dosh, and to gain victory in legal or personal disputes. Includes Havan, Rudra Ashtadhyayi, all 13 chapters of Saptashati, and full Navarna Mantra japa.",
    hiContent: "रुद्रचण्डी पाठ श्री रुद्र (यजुर्वेद) और दुर्गा सप्तशती (मार्कण्डेय पुराण) का संयुक्त पाठ है। रुद्र भगवान शिव के रक्षक और संहारक रूप का प्रतिनिधित्व करते हैं जबकि चण्डी (दुर्गा) दिव्य स्त्री शक्ति का अवतार है। साथ मिलकर वे सुरक्षा की अजेय ढाल बनाते हैं। यह पाठ शत्रुओं से मुक्ति, गंभीर दोषों, काल सर्प दोष के निवारण और कानूनी या व्यक्तिगत विवादों में विजय के लिए किया जाता है। इसमें हवन, रुद्र अष्टाध्यायी, सप्तशती के सभी 13 अध्याय और पूर्ण नवार्ण मंत्र जाप शामिल हैं।",
    samagri: ["हवन कुंड व आम की लकड़ी", "देसी घी", "तिल व जौ", "नवग्रह समिधा", "लाल पुष्प", "नारियल", "बेलपत्र", "धूप व दीपक", "कलश", "लाल वस्त्र", "सिन्दूर", "सप्तशती पुस्तक"]
  },
  {
    id: "navchandi",
    slug: "navchandi-path-bangalore",
    enTitle: "Navchandi Path",
    hiTitle: "नवचण्डी पाठ",
    price: 15000,
    icon: "🌟",
    image: "/images/services/navchandi.jpg",
    category: "large",
    shastreeyRef: "प्रमाण: मार्कण्डेय पुराण, देवी भागवत (Markandeya Purana, Devi Bhagavata)",
    enDesc: "Nine complete recitations of Durga Saptashati for immense divine blessings and fulfillment of wishes.",
    hiDesc: "अपार दिव्य आशीर्वाद और मनोकामना पूर्ति के लिए दुर्गा सप्तशती के नौ संपूर्ण पाठ।",
    enContent: "Navchandi Path involves nine complete consecutive recitations of Durga Saptashati (700 shlokas from Markandeya Purana). The number nine is sacred to Maa Durga representing the Navdurga. This grand path is performed over one or two days with multiple pandits reciting simultaneously. It is prescribed for removal of all types of obstacles, sudden calamities, chronic illness, and to seek the supreme blessings of Maa Bhagawati. Includes Kalaash Sthapana, Havan, and Devi Puja with sixteen Upachars.",
    hiContent: "नवचण्डी पाठ में दुर्गा सप्तशती (मार्कण्डेय पुराण से 700 श्लोक) के नौ पूर्ण क्रमागत पाठ शामिल हैं। नौ की संख्या नवदुर्गा का प्रतिनिधित्व करते हुए माँ दुर्गा को पवित्र है। यह भव्य पाठ एक या दो दिन में कई पंडितों द्वारा एक साथ किया जाता है। यह सभी प्रकार की बाधाओं, अचानक विपत्तियों, दीर्घकालिक बीमारी को दूर करने और माँ भगवती के परम आशीर्वाद के लिए निर्धारित है। इसमें कलाश स्थापना, हवन और षोडशोपचार देवी पूजा शामिल है।",
    samagri: ["हवन कुंड व आम की लकड़ी", "देसी घी", "नवग्रह समिधा", "लाल पुष्प (9 प्रकार)", "9 नारियल", "कलश (9)", "लाल वस्त्र (9)", "सिन्दूर", "काजल", "पान (108)", "मिठाई", "फल", "सप्तशती पुस्तक (9)"]
  },
  {
    id: "satchandi",
    slug: "satchandi-path-bangalore",
    enTitle: "Satchandi Path",
    hiTitle: "सतचण्डी पाठ",
    price: 51000,
    icon: "🔥",
    image: "/images/services/satchandi.jpg",
    category: "large",
    shastreeyRef: "प्रमाण: मार्कण्डेय पुराण, तंत्र शास्त्र (Markandeya Purana, Tantra Shastra)",
    enDesc: "The most powerful 100-recitation Chandi path — an extremely rare and potent mahayagna.",
    hiDesc: "सबसे शक्तिशाली 100 पाठ चण्डी पाठ — एक अत्यंत दुर्लभ और शक्तिशाली महायज्ञ।",
    enContent: "Satchandi Path is the apex of Shakti worship — the complete recitation of Durga Saptashati 100 times (Shat = 100, Chandi = Saptashati). This mahayagna is performed over 7 to 11 days by a group of learned pandits. Prescribed in Tantra Shastra for the most difficult life situations: severe black magic (abhichar), intractable doshas, liberation of the deceased, or to propitiate Maa Chandi for extraordinary blessings. Includes elaborate Navarna Mantra Anushthana, 100 Havans, and grand Purnabhishek.",
    hiContent: "सतचण्डी पाठ शक्ति पूजा का सर्वोच्च स्तर है — दुर्गा सप्तशती का 100 बार पूर्ण पाठ (शत = 100, चण्डी = सप्तशती)। यह महायज्ञ 7 से 11 दिन तक विद्वान पंडितों के समूह द्वारा किया जाता है। तंत्र शास्त्र में सबसे कठिन जीवन परिस्थितियों के लिए निर्धारित: गंभीर काला जादू (अभिचार), अजेय दोष, दिवंगत आत्मा की मुक्ति, या असाधारण आशीर्वाद के लिए माँ चण्डी को प्रसन्न करना। इसमें विस्तृत नवार्ण मंत्र अनुष्ठान, 100 हवन और भव्य पूर्णाभिषेक शामिल हैं।",
    samagri: ["विशाल हवन कुंड", "100 किग्रा देसी घी", "नवग्रह समिधा (100 सेट)", "100 नारियल", "लाल पुष्प (विशाल मात्रा)", "1008 पान", "सोना/चाँदी (भेंट)", "सप्तशती पुस्तक (100)", "विशेष तांत्रिक सामग्री", "पंचरत्न"]
  },
  {
    id: "laghu-rudra",
    slug: "laghu-rudra-puja-bangalore",
    enTitle: "Laghu Rudra",
    hiTitle: "लघु रुद्र",
    price: 11000,
    icon: "🌊",
    image: "/images/services/laghu-rudra.jpg",
    category: "large",
    shastreeyRef: "प्रमाण: यजुर्वेद, शिव पुराण (Yajurveda, Shiva Purana)",
    enDesc: "11 recitations of Shri Rudram with Rudrabhishek — highly meritorious puja for Shiva's supreme grace.",
    hiDesc: "श्री रुद्रम के 11 पाठ और रुद्राभिषेक — शिव की परम कृपा के लिए अत्यंत पुण्यदायी पूजा।",
    enContent: "Laghu Rudra is a complete Rudrabhishek anushthana involving 11 recitations of Shri Rudram and Chamakam from the Yajurveda (Ekadash Rudri), making it 11 times more potent than a single Rudrabhishek. The Shiva Purana states that Laghu Rudra removes all sins, grants moksha to ancestors, heals chronic diseases, and bestows supreme peace. Performed by multiple pandits, this takes 6-8 hours. It is prescribed for Shani Dosha, Kaal Sarp Dosh, and major life obstacles.",
    hiContent: "लघु रुद्र एक पूर्ण रुद्राभिषेक अनुष्ठान है जिसमें यजुर्वेद की श्री रुद्रम और चमकम के 11 पाठ (एकादश रुद्री) शामिल हैं, जिससे यह एक साधारण रुद्राभिषेक से 11 गुना अधिक शक्तिशाली हो जाता है। शिव पुराण कहता है कि लघु रुद्र सभी पापों को नष्ट करता है, पूर्वजों को मोक्ष देता है, पुराने रोगों को ठीक करता है और परम शांति प्रदान करता है। कई पंडितों द्वारा किया गया यह 6-8 घंटे लेता है। शनि दोष, काल सर्प दोष और बड़ी जीवन बाधाओं के लिए निर्धारित।",
    samagri: ["11 बेलपत्र (1008 x 11)", "पंचामृत (दूध, दही, घी, शहद, चीनी) बड़ी मात्रा", "गंगाजल", "धतूरा", "सफेद पुष्प", "चंदन", "विभूति (भस्म)", "रुद्राक्ष माला", "देसी घी के 11 दीपक", "11 नारियल", "कलश"]
  },
  {
    id: "namak-chamak-rudrabhishek",
    slug: "namak-chamak-rudrabhishek-bangalore",
    enTitle: "Namak Chamak Rudrabhishek",
    hiTitle: "नमक चामक रुद्राभिषेक",
    price: 5100,
    icon: "💧",
    image: "/images/services/namak-chamak-rudrabhishek.jpg",
    category: "small",
    shastreeyRef: "प्रमाण: यजुर्वेद, कृष्ण यजुर्वेद (Yajurveda — Namakam & Chamakam)",
    enDesc: "Traditional Rudrabhishek with full chanting of Namakam (Shri Rudram) and Chamakam from Yajurveda.",
    hiDesc: "यजुर्वेद के नमकम (श्री रुद्रम) और चमकम के पूर्ण पाठ के साथ पारंपरिक रुद्राभिषेक।",
    enContent: "Namak Chamak Rudrabhishek is the most classical form of Rudrabhishek where the complete Namakam (Shri Rudra — 11 Anuvakas) and Chamakam (Praises to Shiva — 11 Anuvakas) from the Krishna Yajurveda are chanted in full. 'Namak' refers to the Namakam portion which lists Rudra's 1000 names, and 'Chamak' refers to boons sought from Shiva. This puja bestows good health, removes Vaastu and Graha doshas, and brings peace to the entire household.",
    hiContent: "नमक चामक रुद्राभिषेक रुद्राभिषेक का सबसे शास्त्रीय रूप है जहाँ कृष्ण यजुर्वेद से पूर्ण नमकम (श्री रुद्र — 11 अनुवाक) और चमकम (शिव की स्तुति — 11 अनुवाक) का पाठ किया जाता है। 'नमक' उस नमकम भाग को संदर्भित करता है जो रुद्र के 1000 नामों को सूचीबद्ध करता है, और 'चमक' शिव से माँगे गए वरदानों को। यह पूजा अच्छा स्वास्थ्य प्रदान करती है, वास्तु और ग्रह दोषों को दूर करती है और पूरे घर में शांति लाती है।",
    samagri: ["पंचामृत (दूध, दही, घी, शहद, चीनी)", "बेलपत्र (108)", "धतूरा", "सफेद पुष्प", "गंगाजल", "चंदन", "विभूति (भस्म)", "रुद्राक्ष", "देसी घी का दीपक", "नारियल", "पान व सुपारी"]
  },
  {
    id: "kundli-nirman",
    slug: "kundli-nirman-bangalore",
    enTitle: "Kundli Nirman",
    hiTitle: "कुंडली निर्माण",
    price: 1100,
    icon: "📜",
    image: "/images/services/kundli-nirman.jpg",
    category: "jyotish",
    shastreeyRef: "प्रमाण: बृहत् पाराशर होरा शास्त्र, ज्योतिष शास्त्र (Brihat Parashara Hora Shastra)",
    enDesc: "Detailed Vedic birth chart (Janam Kundali) prepared with precise planetary positions and life analysis.",
    hiDesc: "सटीक ग्रह स्थिति और जीवन विश्लेषण के साथ विस्तृत वैदिक जन्म कुंडली का निर्माण।",
    enContent: "Kundli Nirman (birth chart creation) is the foundation of Vedic astrology as codified in the Brihat Parashara Hora Shastra by Maharshi Parashara. Based on exact birth date, time, and place, a complete Janam Kundali is prepared showing all 12 houses, planetary positions (Graha Sthiti), Dasha periods, Yoga formations, and Lagna. The chart includes: Rashi Chart, Navamsha, Bhava Chart, and a personalized life report covering education, career, marriage, health, and spiritual path.",
    hiContent: "कुंडली निर्माण (जन्म चार्ट निर्माण) वैदिक ज्योतिष की नींव है जैसा कि महर्षि पराशर द्वारा बृहत् पाराशर होरा शास्त्र में संहिताबद्ध किया गया है। जन्म की सटीक तारीख, समय और स्थान के आधार पर सभी 12 भावों, ग्रह स्थिति, दशा काल, योग निर्माण और लग्न के साथ पूरी जन्म कुंडली तैयार की जाती है। चार्ट में शामिल हैं: राशि चार्ट, नवांश, भाव चार्ट और शिक्षा, करियर, विवाह, स्वास्थ्य और आध्यात्मिक पथ को कवर करने वाली व्यक्तिगत जीवन रिपोर्ट।",
    samagri: []
  },
  {
    id: "kundli-milan",
    slug: "kundli-milan-bangalore",
    enTitle: "Kundli Milan",
    hiTitle: "कुंडली मिलान",
    price: 1500,
    icon: "💑",
    image: "/images/services/kundli-milan.jpg",
    category: "jyotish",
    shastreeyRef: "प्रमाण: बृहत् पाराशर होरा शास्त्र, मुहूर्त चिंतामणि (Brihat Parashara Hora Shastra, Muhurta Chintamani)",
    enDesc: "Comprehensive horoscope matching for marriage using the 36-point Ashtakoot system.",
    hiDesc: "विवाह के लिए 36 अंक अष्टकूट पद्धति से व्यापक कुंडली मिलान।",
    enContent: "Kundli Milan (horoscope matching) is essential before marriage in the Vedic tradition. Using the Ashtakoot (8-factor) system from the Brihat Parashara Hora Shastra and Muhurta Chintamani, 36 points are evaluated including: Varna, Vashya, Tara, Yoni, Graha Maitri, Gana, Bhakoot (Rashi Adhipati), and Nadi. Mangal Dosha, Rajju Dosha, and Vedha are also analyzed. A minimum of 18/36 is required for a compatible match. The full report includes remedies for any deficiency found.",
    hiContent: "वैदिक परंपरा में विवाह से पहले कुंडली मिलान आवश्यक है। बृहत् पाराशर होरा शास्त्र और मुहूर्त चिंतामणि से अष्टकूट (8 कारक) प्रणाली का उपयोग करके 36 अंकों का मूल्यांकन किया जाता है जिसमें शामिल हैं: वर्ण, वश्य, तारा, योनि, ग्रह मैत्री, गण, भकूट (राशि अधिपति) और नाड़ी। मंगल दोष, राजू दोष और वेध का भी विश्लेषण किया जाता है। अनुकूल मिलान के लिए न्यूनतम 18/36 अंक आवश्यक हैं। पूर्ण रिपोर्ट में पाई गई किसी भी कमी के लिए उपाय शामिल हैं।",
    samagri: []
  },
  {
    id: "jyotish-paramarsh",
    slug: "jyotish-paramarsh-bangalore",
    enTitle: "Jyotish Paramarsh",
    hiTitle: "ज्योतिष परामर्श",
    price: 2100,
    icon: "🔭",
    image: "/images/services/jyotish-paramarsh.jpg",
    category: "jyotish",
    shastreeyRef: "प्रमाण: बृहत् जातक, सारावली, फलदीपिका (Brihat Jataka, Saravali, Phaladeepika)",
    enDesc: "Personal astrology consultation to understand your Dasha, planetary effects, and remedies.",
    hiDesc: "आपकी दशा, ग्रह प्रभाव और उपायों को समझने के लिए व्यक्तिगत ज्योतिष परामर्श।",
    enContent: "Jyotish Paramarsh is a personal one-on-one consultation with our expert Jyotishi, deeply trained in Brihat Jataka (Varahamihira), Saravali, and Phaladeepika. The session covers: current Dasha-Antardasha analysis, active transits (Gochar), specific life concerns (career, marriage, health, finance), identification of active Yogas (Raj Yoga, Dhana Yoga, etc.), malefic planetary combinations and their effects, and personalized remedies including Mantra, Stotra, Ratna (gemstone), and Upay (ritual remedies). Sessions are available in person or via video call.",
    hiContent: "ज्योतिष परामर्श एक व्यक्तिगत आमने-सामने परामर्श है जो बृहत् जातक (वराहमिहिर), सारावली और फलदीपिका में गहरे प्रशिक्षित हमारे विशेषज्ञ ज्योतिषी के साथ है। सत्र में शामिल हैं: वर्तमान दशा-अंतर्दशा विश्लेषण, सक्रिय गोचर, विशिष्ट जीवन चिंताएं (करियर, विवाह, स्वास्थ्य, वित्त), सक्रिय योगों की पहचान (राज योग, धन योग आदि), अशुभ ग्रह संयोजन और उनके प्रभाव, और मंत्र, स्तोत्र, रत्न और उपाय (अनुष्ठान उपाय) सहित व्यक्तिगत उपाय। सत्र व्यक्तिगत रूप से या वीडियो कॉल के माध्यम से उपलब्ध हैं।",
    samagri: []
  },
  {
    id: "vastu-paramarsh",
    slug: "vastu-paramarsh-bangalore",
    enTitle: "Vastu Paramarsh",
    hiTitle: "वास्तु परामर्श",
    price: 3100,
    icon: "🧭",
    image: "/images/services/vastu-paramarsh.jpg",
    category: "jyotish",
    shastreeyRef: "प्रमाण: मयमत, विश्वकर्मा प्रकाश, वास्तु शास्त्र (Mayamata, Vishwakarma Prakasha, Vastu Shastra)",
    enDesc: "Expert Vastu consultation for home or office to correct energy flows and directions.",
    hiDesc: "ऊर्जा प्रवाह और दिशाओं को सुधारने के लिए घर या कार्यालय के लिए विशेषज्ञ वास्तु परामर्श।",
    enContent: "Vastu Paramarsh is an expert consultation based on classical Vastu Shastra texts including Mayamata and Vishwakarma Prakasha. Our Vastu consultant analyzes the complete Vastu of your home or office: entrance direction (Mukha), placement of rooms (Brahmasthan, kitchen, bedroom, pooja room), water bodies, slopes, underground utilities, and the 45 energy fields (Vastu Purusha Mandala). The report provides practical, non-structural corrective measures such as Yantra placement, color therapy, mirror correction, and elemental balancing — without demolition.",
    hiContent: "वास्तु परामर्श मयमत और विश्वकर्मा प्रकाश सहित शास्त्रीय वास्तु शास्त्र ग्रंथों पर आधारित एक विशेषज्ञ परामर्श है। हमारे वास्तु सलाहकार आपके घर या कार्यालय के संपूर्ण वास्तु का विश्लेषण करते हैं: प्रवेश दिशा (मुख), कमरों का स्थान (ब्रह्मस्थान, रसोई, शयनकक्ष, पूजा कक्ष), जल निकाय, ढलान, भूमिगत उपयोगिताएं और 45 ऊर्जा क्षेत्र (वास्तु पुरुष मंडल)। रिपोर्ट यंत्र स्थापना, रंग चिकित्सा, दर्पण सुधार और तत्व संतुलन जैसे व्यावहारिक, गैर-संरचनात्मक सुधारात्मक उपाय प्रदान करती है — बिना तोड़-फोड़ के।",
    samagri: []
  },
  {
    id: "antim-sanskar",
    slug: "antim-sanskar-bangalore",
    enTitle: "Antim Sanskar",
    hiTitle: "अंतिम संस्कार",
    price: 5100,
    icon: "🕊️",
    image: "/images/services/antim-sanskar.jpg",
    category: "sanskar",
    shastreeyRef: "प्रमाण: गरुड़ पुराण, आश्वलायन गृह्यसूत्र (Garuda Purana, Ashvalayana Grihya Sutra)",
    enDesc: "Vedic last rites performed with dignity, care, and complete scriptural adherence.",
    hiDesc: "सम्पूर्ण शास्त्रीय पालन के साथ गरिमा और सम्मान से किए गए वैदिक अंतिम संस्कार।",
    enContent: "Antim Sanskar (last rites) is the 16th and final Sanskar, detailed in the Garuda Purana and Ashvalayana Grihya Sutra. It includes complete guidance through Dahana Kriya (cremation rites), Asthi Sanchayan, Dasagatra, and Sapindikaran. We provide compassionate, round-the-clock support for the grieving family.",
    hiContent: "अंतिम संस्कार 16वाँ और अंतिम संस्कार है, जो गरुड़ पुराण और आश्वलायन गृह्यसूत्र में विस्तृत है। इसमें दहन क्रिया, अस्थि संचयन, दशगात्र और सपिंडीकरण के माध्यम से पूर्ण मार्गदर्शन शामिल है। हम शोक संतप्त परिवार के लिए सहानुभूतिपूर्ण, चौबीसों घंटे सहायता प्रदान करते हैं।",
    samagri: ["तिल व देसी घी", "लोबान", "गंगाजल", "तुलसी पत्र", "कुश", "सफेद वस्त्र (कफन)", "मिट्टी का कलश", "पंचरत्न", "काजल या सोने का टुकड़ा (मुख हेतु)"]
  }
];

export const serviceCategories = [
  { id: 'all', hiLabel: 'सभी सेवाएं', enLabel: 'All Services' },
  { id: 'small', hiLabel: 'घरेलू पूजा', enLabel: 'Home Pujas' },
  { id: 'sanskar', hiLabel: '16 संस्कार', enLabel: '16 Sanskars' },
  { id: 'large', hiLabel: 'कथा / सप्ताह', enLabel: 'Katha Events' },
  { id: 'festival', hiLabel: 'त्यौहार पूजा', enLabel: 'Festival Pujas' },
  { id: 'dosha', hiLabel: 'दोष शांति', enLabel: 'Dosha Shanti' },
  { id: 'jyotish', hiLabel: 'ज्योतिष व वास्तु', enLabel: 'Jyotish & Vastu' },
];

export const locations = [
  {
    id: "whitefield",
    name: "Whitefield",
    enIntro: "Whitefield is one of Bangalore's premier IT hubs, home to thousands of North Indian families. PanditGhar.in has served Whitefield for over a decade, conducting Griha Pravesh, Satyanarayan Katha, and Vivah ceremonies across EPIP Zone, Varthur Road, and Kadugodi.",
    hiIntro: "व्हाइटफील्ड बेंगलुरु के प्रमुख आईटी हब में से एक है जहाँ हजारों उत्तर भारतीय परिवार रहते हैं। PanditGhar.in एक दशक से व्हाइटफील्ड, EPIP ज़ोन, वर्थुर रोड और कदुगोडी में गृह प्रवेश, सत्यनारायण कथा और विवाह संस्कार कर रहा है।"
  },
  {
    id: "hsr-layout",
    name: "HSR Layout",
    enIntro: "HSR Layout is a vibrant residential area in Bangalore known for its sectors and professional community. PanditGhar.in regularly performs Griha Pravesh, Namkaran, and all home pujas across all HSR sectors including Sector 1 to 7.",
    hiIntro: "HSR लेआउट बेंगलुरु का एक जीवंत आवासीय क्षेत्र है। PanditGhar.in, HSR के सभी सेक्टरों (1 से 7) में गृह प्रवेश, नामकरण और सभी घरेलू पूजाएं नियमित रूप से संपन्न करता है।"
  },
  {
    id: "marathahalli",
    name: "Marathahalli",
    enIntro: "Marathahalli is a bustling IT and residential corridor near Outer Ring Road. PanditGhar.in proudly serves families in Marathahalli, Brookefield, Kundalahalli, and surrounding areas with all Vedic rituals.",
    hiIntro: "मराठहल्ली आउटर रिंग रोड के पास एक व्यस्त आईटी और आवासीय क्षेत्र है। PanditGhar.in, मराठहल्ली, ब्रुकफील्ड और कुंडलहल्ली में सभी वैदिक अनुष्ठान गर्व से संपन्न करता है।"
  },
  {
    id: "electronic-city",
    name: "Electronic City",
    enIntro: "Electronic City hosts India's premier tech companies and a growing North Indian community. PanditGhar.in covers Electronic City Phase 1 & 2, Neeladri Road, and Hebbagodi for all puja and ceremony needs.",
    hiIntro: "इलेक्ट्रॉनिक सिटी में भारत की प्रमुख टेक कंपनियां और एक बढ़ता हुआ उत्तर भारतीय समुदाय है। PanditGhar.in, इलेक्ट्रॉनिक सिटी फेज 1 और 2, नीलाद्री रोड और हेब्बागोडी में सभी पूजा और समारोह संपन्न करता है।"
  },
  {
    id: "jp-nagar",
    name: "JP Nagar",
    enIntro: "JP Nagar is one of Bangalore's most established residential localities with a strong community of Hindu families. PanditGhar.in serves all JP Nagar phases (1 to 8) for Griha Pravesh, Satyanarayan, and all other pujas.",
    hiIntro: "जेपी नगर बेंगलुरु के सबसे स्थापित आवासीय इलाकों में से एक है। PanditGhar.in, JP Nagar के सभी फेज (1 से 8) में गृह प्रवेश, सत्यनारायण और अन्य सभी पूजाएं संपन्न करता है।"
  },
  {
    id: "koramangala",
    name: "Koramangala",
    enIntro: "Koramangala is a cosmopolitan area in the heart of Bangalore, popular among young professionals and families. PanditGhar.in provides all puja services across Koramangala's 1st to 8th Block.",
    hiIntro: "कोरमंगला बेंगलुरु के दिल में एक महानगरीय क्षेत्र है। PanditGhar.in, कोरमंगला के 1st से 8th ब्लॉक में सभी पूजा सेवाएं प्रदान करता है।"
  },
  {
    id: "indiranagar",
    name: "Indiranagar",
    enIntro: "Indiranagar is among Bangalore's most sought-after residential and commercial localities. PanditGhar.in has performed hundreds of Griha Pravesh and Satyanarayan ceremonies for families across Indiranagar's 1st to 16th Cross.",
    hiIntro: "इंदिरानगर बेंगलुरु के सबसे प्रतिष्ठित आवासीय और व्यावसायिक इलाकों में से एक है। PanditGhar.in ने इंदिरानगर के 1st से 16th क्रॉस तक सैकड़ों परिवारों के लिए गृह प्रवेश और सत्यनारायण कथा संपन्न की है।"
  },
  {
    id: "jayanagar",
    name: "Jayanagar",
    enIntro: "Jayanagar is one of Bangalore's oldest and most respected residential areas, known for its traditional values. PanditGhar.in serves all Jayanagar blocks for Griha Pravesh, Vivah, Mundan, and all Vedic ceremonies.",
    hiIntro: "जयनगर बेंगलुरु के सबसे पुराने और सम्मानित आवासीय क्षेत्रों में से एक है। PanditGhar.in जयनगर के सभी ब्लॉकों में गृह प्रवेश, विवाह, मुंडन और सभी वैदिक समारोह संपन्न करता है।"
  },
  {
    id: "yelahanka",
    name: "Yelahanka",
    enIntro: "Yelahanka is a fast-growing area in North Bangalore near the airport, attracting many North Indian professionals. PanditGhar.in offers all Vedic puja services across Yelahanka, Yelahanka New Town, and Sahakarnagar.",
    hiIntro: "येलहंका उत्तरी बेंगलुरु में हवाई अड्डे के पास एक तेजी से बढ़ता हुआ क्षेत्र है। PanditGhar.in येलहंका, येलहंका न्यू टाउन और सहकारनगर में सभी वैदिक पूजा सेवाएं प्रदान करता है।"
  },
  {
    id: "hebbal",
    name: "Hebbal",
    enIntro: "Hebbal is a prime locality in North Bangalore with excellent connectivity. PanditGhar.in covers Hebbal, Bellary Road, and Kogilu for Griha Pravesh, Satyanarayan, Navgrah Puja, and all Vedic rituals.",
    hiIntro: "हेब्बल उत्तरी बेंगलुरु में एक प्रमुख इलाका है। PanditGhar.in हेब्बल, बेल्लारी रोड और कोगिलु में गृह प्रवेश, सत्यनारायण, नवग्रह पूजा और सभी वैदिक अनुष्ठान संपन्न करता है।"
  },
  {
    id: "sarjapur-road",
    name: "Sarjapur Road",
    enIntro: "Sarjapur Road is one of Bangalore's fastest-growing corridors with numerous gated communities. PanditGhar.in serves families across Sarjapur Road, Carmelram, Bellandur, and all gated societies for all types of pujas.",
    hiIntro: "सर्जापुर रोड बेंगलुरु के सबसे तेजी से बढ़ते गलियारों में से एक है। PanditGhar.in सर्जापुर रोड, कारमेलराम, बेल्लंदूर और सभी गेटेड सोसाइटियों में सभी प्रकार की पूजाएं संपन्न करता है।"
  },
  {
    id: "btm-layout",
    name: "BTM Layout",
    enIntro: "BTM Layout is a popular residential locality with a large community of families from across India. PanditGhar.in provides all puja services in BTM Layout Stages 1 and 2 with prompt, reliable pandits.",
    hiIntro: "बीटीएम लेआउट एक लोकप्रिय आवासीय इलाका है। PanditGhar.in, BTM लेआउट स्टेज 1 और 2 में सभी पूजा सेवाएं तुरंत और विश्वसनीय रूप से प्रदान करता है।"
  },
  {
    id: "bannerghatta-road",
    name: "Bannerghatta Road",
    enIntro: "Bannerghatta Road is a major south Bangalore corridor with growing residential communities. PanditGhar.in covers Bannerghatta Road, Arekere, Hulimavu, and Gottigere for all Vedic ceremonies and puja needs.",
    hiIntro: "बनेरघट्टा रोड दक्षिण बेंगलुरु का एक प्रमुख क्षेत्र है। PanditGhar.in बनेरघट्टा रोड, अरेकेरे, हुलिमावु और गोट्टीगेरे में सभी वैदिक समारोह और पूजा सेवाएं प्रदान करता है।"
  },
  {
    id: "rajajinagar",
    name: "Rajajinagar",
    enIntro: "Rajajinagar is one of West Bangalore's most prominent residential localities. PanditGhar.in provides all puja services in Rajajinagar, Basaveshwaranagar, Nandini Layout, and surrounding areas.",
    hiIntro: "राजाजीनगर पश्चिमी बेंगलुरु के सबसे प्रमुख आवासीय इलाकों में से एक है। PanditGhar.in राजाजीनगर, बसवेश्वरनगर, नंदिनी लेआउट और आसपास के क्षेत्रों में सभी पूजा सेवाएं प्रदान करता है।"
  },
  {
    id: "malleshwaram",
    name: "Malleshwaram",
    enIntro: "Malleshwaram is one of Bangalore's most traditional and culturally rich neighborhoods, known for its temples and North Indian community. PanditGhar.in serves all of Malleshwaram's circles and cross streets.",
    hiIntro: "मल्लेश्वरम बेंगलुरु के सबसे पारंपरिक और सांस्कृतिक रूप से समृद्ध क्षेत्रों में से एक है। PanditGhar.in मल्लेश्वरम के सभी सर्किल और क्रॉस स्ट्रीटों में सेवा प्रदान करता है।"
  },
  {
    id: "kr-puram",
    name: "KR Puram",
    enIntro: "KR Puram is a well-connected East Bangalore locality near the railway station and IT corridors. PanditGhar.in covers KR Puram, Old Madras Road, and Ramamurthy Nagar for all puja and ceremony needs.",
    hiIntro: "केआर पुरम पूर्वी बेंगलुरु में रेलवे स्टेशन और आईटी कॉरिडोर के पास एक अच्छी तरह से जुड़ा हुआ इलाका है। PanditGhar.in केआर पुरम, ओल्ड मद्रास रोड और रामामूर्ति नगर में सभी पूजा और समारोह सेवाएं प्रदान करता है।"
  },
  {
    id: "hennur",
    name: "Hennur",
    enIntro: "Hennur is a rapidly developing area in North Bangalore with many new residential complexes. PanditGhar.in serves Hennur, Hennur Main Road, HBR Layout, and Kammanahalli for all types of Vedic pujas.",
    hiIntro: "हेन्नूर उत्तरी बेंगलुरु में तेजी से विकसित हो रहा एक क्षेत्र है। PanditGhar.in हेन्नूर, हेन्नूर मेन रोड, HBR लेआउट और कम्मनहल्ली में सभी प्रकार की वैदिक पूजाएं संपन्न करता है।"
  },
  {
    id: "banashankari",
    name: "Banashankari",
    enIntro: "Banashankari is a serene and well-established South Bangalore residential area named after the revered Goddess Banashankari. PanditGhar.in provides all Vedic puja services across Banashankari 1st to 6th Stage.",
    hiIntro: "बनशंकरी दक्षिण बेंगलुरु का एक शांत और सुस्थापित आवासीय क्षेत्र है जो देवी बनशंकरी के नाम पर है। PanditGhar.in बनशंकरी के 1st से 6th स्टेज तक सभी वैदिक पूजा सेवाएं प्रदान करता है।"
  },
  {
    id: "vijayanagar",
    name: "Vijayanagar",
    enIntro: "Vijayanagar is a large, well-planned residential locality in West Bangalore with a strong North Indian community. PanditGhar.in serves Vijayanagar, Magadi Road, and Chord Road areas for all pujas and Vedic ceremonies.",
    hiIntro: "विजयनगर पश्चिमी बेंगलुरु में एक बड़ा, सुनियोजित आवासीय क्षेत्र है जहाँ उत्तर भारतीय समुदाय की मजबूत उपस्थिति है। PanditGhar.in विजयनगर, मगडी रोड और कॉर्ड रोड क्षेत्रों में सभी पूजाएं और वैदिक समारोह संपन्न करता है।"
  },
  {
    id: "ulsoor",
    name: "Ulsoor",
    enIntro: "Ulsoor is a historic locality in Central Bangalore near MG Road with diverse communities. PanditGhar.in covers Ulsoor, Frazer Town, and Benson Town for all Vedic puja needs including Griha Pravesh and Satyanarayan.",
    hiIntro: "उल्सूर एमजी रोड के पास मध्य बेंगलुरु का एक ऐतिहासिक इलाका है। PanditGhar.in उल्सूर, फ्रेज़र टाउन और बेन्सन टाउन में गृह प्रवेश और सत्यनारायण सहित सभी वैदिक पूजाओं की सेवाएं प्रदान करता है।"
  }
];

export const muhurats = [
  { date: "15 Jan 2026", day: "Thursday", occasion: "Makar Sankranti", time: "07:15 AM - 05:45 PM", type: "General" },
  { date: "20 Jan 2026", day: "Tuesday", occasion: "Shukla Paksha Panchami", time: "08:00 AM - 11:30 AM", type: "Griha Pravesh" },
  { date: "26 Jan 2026", day: "Monday", occasion: "Vasant Panchami", time: "08:30 AM - 12:15 PM", type: "Griha Pravesh / Saraswati Puja" },
  { date: "5 Feb 2026", day: "Thursday", occasion: "Poornima", time: "07:00 AM - 12:00 PM", type: "Satyanarayan / Sundarkand" },
  { date: "14 Feb 2026", day: "Saturday", occasion: "Maha Shivaratri", time: "11:00 PM - 02:00 AM", type: "Rudrabhishek / Maha Shivaratri" },
  { date: "4 Mar 2026", day: "Wednesday", occasion: "Poornima (Holi)", time: "06:30 AM - 10:30 AM", type: "Satyanarayan" },
  { date: "22 Apr 2026", day: "Wednesday", occasion: "Akshaya Tritiya", time: "06:00 AM - 01:30 PM", type: "Vivah / Griha Pravesh / Sagai" },
  { date: "23 Apr 2026", day: "Thursday", occasion: "Akshaya Tritiya Extended", time: "06:00 AM - 12:00 PM", type: "Vivah / Griha Pravesh" },
  { date: "5 May 2026", day: "Tuesday", occasion: "Rohini Nakshatra", time: "09:00 AM - 01:00 PM", type: "Vivah / Bhagvat Katha" },
  { date: "7 May 2026", day: "Thursday", occasion: "Uttara Phalguni", time: "07:30 AM - 11:30 AM", type: "Griha Pravesh / Vivah" },
  { date: "10 May 2026", day: "Sunday", occasion: "Ganga Dussehra", time: "09:15 AM - 02:45 PM", type: "Satyanarayan / Ram Katha" },
  { date: "12 May 2026", day: "Tuesday", occasion: "Hasta Nakshatra", time: "08:00 AM - 12:00 PM", type: "Namkaran / Mundan / Annaprashan" },
  { date: "4 Jun 2026", day: "Thursday", occasion: "Poornima - Jyeshtha", time: "07:00 AM - 11:00 AM", type: "Satyanarayan / Sundarkand" },
  { date: "25 Jul 2026", day: "Saturday", occasion: "Nag Panchami", time: "07:00 AM - 11:00 AM", type: "Kaal Sarp Dosh Puja" },
  { date: "16 Aug 2026", day: "Sunday", occasion: "Janmashtami", time: "11:00 PM - 01:00 AM", type: "Janmashtami Puja" },
  { date: "25 Sep 2026", day: "Friday", occasion: "Navratri Start (Ghatasthapana)", time: "06:00 AM - 09:00 AM", type: "Navratri Puja / Devi Bhagvat" },
  { date: "15 Nov 2026", day: "Sunday", occasion: "Dev Uthani Ekadashi", time: "06:30 AM - 11:30 AM", type: "Vivah / Griha Pravesh / Sagai" },
  { date: "20 Nov 2026", day: "Friday", occasion: "Margashirsha Shukla", time: "07:00 AM - 12:00 PM", type: "Vivah / Bhagvat Mahapuran" },
  { date: "24 Nov 2026", day: "Tuesday", occasion: "Rohini Nakshatra", time: "08:30 AM - 01:00 PM", type: "Vivah / Namkaran" },
  { date: "5 Dec 2026", day: "Saturday", occasion: "Uttara Phalguni", time: "07:00 AM - 11:30 AM", type: "Griha Pravesh / Vivah" },
  { date: "9 Dec 2026", day: "Wednesday", occasion: "Uttara Bhadra Nakshatra", time: "08:00 AM - 12:30 PM", type: "Vivah / Akhand Ramayan" },
  { date: "15 Dec 2026", day: "Tuesday", occasion: "Mrigashira Nakshatra", time: "09:00 AM - 01:00 PM", type: "Vivah / Griha Pravesh" },
];

export const satyanarayan2026: { date: string; day_en: string; day_hi: string; maas_en: string; maas_hi: string }[] = [
  { date: "03 Jan", day_en: "Saturday", day_hi: "शनिवार", maas_en: "Paush Purnima", maas_hi: "पौष पूर्णिमा" },
  { date: "01 Feb", day_en: "Sunday", day_hi: "रविवार", maas_en: "Magha Purnima", maas_hi: "माघ पूर्णिमा" },
  { date: "03 Mar", day_en: "Tuesday", day_hi: "मंगलवार", maas_en: "Phalguna Purnima", maas_hi: "फाल्गुन पूर्णिमा" },
  { date: "01 Apr", day_en: "Wednesday", day_hi: "बुधवार", maas_en: "Chaitra Purnima", maas_hi: "चैत्र पूर्णिमा" },
  { date: "01 May", day_en: "Friday", day_hi: "शुक्रवार", maas_en: "Vaishakha Purnima", maas_hi: "वैशाख पूर्णिमा" },
  { date: "31 May", day_en: "Sunday", day_hi: "रविवार", maas_en: "Jyeshtha Adhika Purnima", maas_hi: "ज्येष्ठ अधिक पूर्णिमा" },
  { date: "29 Jun", day_en: "Monday", day_hi: "सोमवार", maas_en: "Jyeshtha Purnima", maas_hi: "ज्येष्ठ पूर्णिमा" },
  { date: "29 Jul", day_en: "Wednesday", day_hi: "बुधवार", maas_en: "Ashadha / Guru Purnima", maas_hi: "आषाढ़ / गुरु पूर्णिमा" },
  { date: "28 Aug", day_en: "Friday", day_hi: "शुक्रवार", maas_en: "Shravana Purnima", maas_hi: "श्रावण पूर्णिमा" },
  { date: "26 Sep", day_en: "Saturday", day_hi: "शनिवार", maas_en: "Bhadrapada Purnima", maas_hi: "भाद्रपद पूर्णिमा" },
  { date: "26 Oct", day_en: "Monday", day_hi: "सोमवार", maas_en: "Ashwin / Sharad Purnima", maas_hi: "आश्विन / शरद पूर्णिमा" },
  { date: "24 Nov", day_en: "Tuesday", day_hi: "मंगलवार", maas_en: "Kartika Purnima", maas_hi: "कार्तिक पूर्णिमा" },
  { date: "23 Dec", day_en: "Wednesday", day_hi: "बुधवार", maas_en: "Margashirsha Purnima", maas_hi: "मार्गशीर्ष पूर्णिमा" },
];

export const satyanarayan2027: { date: string; day_en: string; day_hi: string; maas_en: string; maas_hi: string }[] = [
  { date: "22 Jan", day_en: "Friday", day_hi: "शुक्रवार", maas_en: "Paush Purnima", maas_hi: "पौष पूर्णिमा" },
  { date: "20 Feb", day_en: "Saturday", day_hi: "शनिवार", maas_en: "Magha Purnima", maas_hi: "माघ पूर्णिमा" },
  { date: "22 Mar", day_en: "Monday", day_hi: "सोमवार", maas_en: "Phalguna Purnima", maas_hi: "फाल्गुन पूर्णिमा" },
  { date: "20 Apr", day_en: "Tuesday", day_hi: "मंगलवार", maas_en: "Chaitra Purnima", maas_hi: "चैत्र पूर्णिमा" },
  { date: "20 May", day_en: "Thursday", day_hi: "गुरुवार", maas_en: "Vaishakha Purnima", maas_hi: "वैशाख पूर्णिमा" },
  { date: "18 Jun", day_en: "Friday", day_hi: "शुक्रवार", maas_en: "Jyeshtha Purnima", maas_hi: "ज्येष्ठ पूर्णिमा" },
  { date: "18 Jul", day_en: "Sunday", day_hi: "रविवार", maas_en: "Ashadha Purnima", maas_hi: "आषाढ़ पूर्णिमा" },
  { date: "17 Aug", day_en: "Tuesday", day_hi: "मंगलवार", maas_en: "Shravana Purnima", maas_hi: "श्रावण पूर्णिमा" },
  { date: "15 Sep", day_en: "Wednesday", day_hi: "बुधवार", maas_en: "Bhadrapada Purnima", maas_hi: "भाद्रपद पूर्णिमा" },
  { date: "15 Oct", day_en: "Friday", day_hi: "शुक्रवार", maas_en: "Ashwin Purnima", maas_hi: "आश्विन पूर्णिमा" },
  { date: "14 Nov", day_en: "Sunday", day_hi: "रविवार", maas_en: "Kartika Purnima", maas_hi: "कार्तिक पूर्णिमा" },
  { date: "13 Dec", day_en: "Monday", day_hi: "सोमवार", maas_en: "Margashirsha Purnima", maas_hi: "मार्गशीर्ष पूर्णिमा" },
];

export const vivahMuhurat2026: { month_en: string; month_hi: string; dates: number[]; note_en?: string; note_hi?: string }[] = [
  { month_en: "February", month_hi: "फरवरी", dates: [5, 6, 8, 10, 12, 14, 19, 20, 21, 24, 25, 26] },
  { month_en: "March", month_hi: "मार्च", dates: [2, 3, 4, 7, 8, 9, 11, 12] },
  { month_en: "April", month_hi: "अप्रैल", dates: [15, 20, 21, 25, 26, 27, 28, 29] },
  { month_en: "May", month_hi: "मई", dates: [1, 3, 5, 6, 7, 8, 13, 14] },
  { month_en: "June", month_hi: "जून", dates: [21, 22, 23, 24, 25, 26, 27, 29] },
  { month_en: "July", month_hi: "जुलाई", dates: [1, 6, 7, 11], note_en: "Chaturmas begins after this — no further marriages", note_hi: "इसके बाद चातुर्मास शुरू — विवाह वर्जित" },
  { month_en: "August – October", month_hi: "अगस्त – अक्टूबर", dates: [], note_en: "Chaturmas period — marriages not permitted", note_hi: "चातुर्मास काल — विवाह वर्जित" },
  { month_en: "November", month_hi: "नवंबर", dates: [21, 24, 25, 26], note_en: "After Devuthani Ekadashi (15 Nov)", note_hi: "देवउठनी एकादशी (15 नव.) के बाद" },
  { month_en: "December", month_hi: "दिसंबर", dates: [2, 3, 4, 5, 6, 11, 12] },
];

export const vivahMuhurat2027: { month_en: string; month_hi: string; dates: number[] }[] = [
  { month_en: "January", month_hi: "जनवरी", dates: [14, 18, 24, 31] },
  { month_en: "April", month_hi: "अप्रैल", dates: [18, 22, 23, 25, 28] },
  { month_en: "May", month_hi: "मई", dates: [3, 7, 9, 16, 23, 24, 30, 31] },
  { month_en: "June", month_hi: "जून", dates: [10, 13, 16, 21] },
];

export const grahaPraveshMuhurat2026: { month_en: string; month_hi: string; dates: number[] }[] = [
  { month_en: "February", month_hi: "फरवरी", dates: [6, 11, 19, 20, 21, 25, 26] },
  { month_en: "March", month_hi: "मार्च", dates: [4, 5, 6, 9, 13, 14] },
  { month_en: "April", month_hi: "अप्रैल", dates: [20, 23, 29] },
  { month_en: "May", month_hi: "मई", dates: [1, 4, 6, 8, 11, 13] },
  { month_en: "June", month_hi: "जून", dates: [24, 26, 27] },
  { month_en: "July", month_hi: "जुलाई", dates: [1, 2, 6] },
  { month_en: "November", month_hi: "नवंबर", dates: [11, 14, 20, 25, 26] },
  { month_en: "December", month_hi: "दिसंबर", dates: [2, 3, 4, 10, 12, 14] },
];

export const namkaranRules = {
  shubhVaar: {
    en: "Monday, Wednesday, Thursday, Friday",
    hi: "सोमवार, बुधवार, गुरुवार और शुक्रवार",
  },
  shubhNakshatra: {
    en: "Ashwini, Rohini, Mrigashira, Pushya, Hasta, Chitra, Swati, Anuradha, Shravan, Revati",
    hi: "अश्विनी, रोहिणी, मृगशिरा, पुष्य, हस्त, चित्रा, स्वाति, अनुराधा, श्रवण और रेवती",
  },
  varjit: {
    en: "Rikta Tithis (4th, 9th, 14th), Amavasya, and Eclipse periods",
    hi: "रिक्ता तिथियां (4, 9, 14), अमावस्या और ग्रहण काल",
  },
};

export const mundanRules = {
  niyam: {
    en: "For boys: odd birth years (1st, 3rd, 5th year) · For girls: even birth years (2nd, 4th year)",
    hi: "लड़कों के लिए जन्म के विषम वर्ष (1, 3, 5) में · लड़कियों के लिए सम वर्ष (2, 4) में",
  },
  shubhMaah: {
    en: "Magha, Phalguna, Chaitra, Vaishakha, Jyeshtha, Ashadha (before Devshayani Ekadashi)",
    hi: "माघ, फाल्गुन, चैत्र, वैशाख, ज्येष्ठ और आषाढ़ (देवशयनी एकादशी से पहले)",
  },
  abujhMuhurat: {
    en: "Akshaya Tritiya, Ram Navami, and Basant Panchami — ideal without consulting Panchang",
    hi: "अक्षय तृतीया, राम नवमी और बसंत पंचमी — बिना पंचांग देखे उत्तम",
  },
};

export const vyaparRules: { type_en: string; type_hi: string; iconName: string; rule_en: string; rule_hi: string }[] = [
  {
    type_en: "Vehicle (Vahan) Purchase",
    type_hi: "वाहन खरीद",
    iconName: "Car",
    rule_en: "Thursday & Friday · Pushya, Punarvasu, Swati nakshatra preferred",
    rule_hi: "गुरुवार और शुक्रवार · पुष्य, पुनर्वसु, स्वाति नक्षत्र में",
  },
  {
    type_en: "Land / Property Purchase",
    type_hi: "भूमि / संपत्ति खरीद",
    iconName: "Home",
    rule_en: "Tuesday is most auspicious (Mars is the lord of land)",
    rule_hi: "मंगलवार सबसे उत्तम (मंगल भूमि का कारक है)",
  },
  {
    type_en: "New Business / Shop Opening",
    type_hi: "नई दुकान / व्यापार प्रारंभ",
    iconName: "Store",
    rule_en: "Wednesday & Thursday · Fixed Lagna: Vrishabha, Singh, Vrishchik or Kumbha",
    rule_hi: "बुधवार और गुरुवार को वृषभ, सिंह, वृश्चिक या कुंभ लग्न (स्थिर लग्न) में",
  },
];

export const abujhMuhuratList: { name_en: string; name_hi: string; use_en: string; use_hi: string }[] = [
  {
    name_en: "Basant Panchami",
    name_hi: "बसंत पंचमी",
    use_en: "Sagai, Vidyarambh, and all new auspicious beginnings",
    use_hi: "सगाई, विद्यारंभ और नए शुभ कार्यों के लिए",
  },
  {
    name_en: "Gudi Padwa / Chaitra Navratri Pratipada",
    name_hi: "गुड़ी पड़वा / चैत्र नवरात्रि प्रतिपदा",
    use_en: "Inauguration of new home or business",
    use_hi: "नए घर या व्यापार की शुरुआत के लिए",
  },
  {
    name_en: "Akshaya Tritiya (Akha Teej)",
    name_hi: "अक्षय तृतीया (अखा तीज)",
    use_en: "Best for buying gold and for marriage ceremonies",
    use_hi: "सोना खरीदने और विवाह के लिए सर्वोत्तम",
  },
  {
    name_en: "Vijayadashami (Dussehra)",
    name_hi: "विजयादशमी (दशहरा)",
    use_en: "Vehicle and property purchase",
    use_hi: "वाहन और संपत्ति खरीदने के लिए",
  },
  {
    name_en: "Devuthani Ekadashi",
    name_hi: "देवउठनी एकादशी",
    use_en: "All auspicious events and commencement of the marriage season",
    use_hi: "सभी मंगल कार्यों और विवाह सीजन की शुरुआत के लिए",
  },
];
