import { motion } from 'framer-motion';
import { Language, useTranslation } from '@/lib/data';
import { SEO } from '@/components/SEO';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { CalendarDays, Clock } from 'lucide-react';

const blogPosts = [
  {
    slug: 'griha-pravesh-vidhi',
    enTitle: 'Griha Pravesh Vidhi: Complete Guide to the House Warming Ceremony',
    hiTitle: 'गृह प्रवेश विधि: हाउस वार्मिंग सेरेमनी की संपूर्ण मार्गदर्शिका',
    enExcerpt: 'Griha Pravesh is one of the most auspicious Vedic ceremonies. Learn the complete step-by-step rituals as prescribed in the Skanda Purana and Grihya Sutras.',
    hiExcerpt: 'गृह प्रवेश सबसे शुभ वैदिक समारोहों में से एक है। स्कन्द पुराण और गृह्य सूत्रों में निर्धारित चरण-दर-चरण अनुष्ठानों के बारे में जानें।',
    shastreeyRef: 'स्कन्द पुराण, गृह्य सूत्र (Skanda Purana, Grihya Sutras)',
    date: '15 January 2026',
    readTime: '8 min',
    icon: '🏠'
  },
  {
    slug: 'satyanarayan-katha-benefits',
    enTitle: 'Satyanarayan Katha: Benefits, Vidhi and Scriptural Significance',
    hiTitle: 'सत्यनारायण कथा: लाभ, विधि और शास्त्रीय महत्व',
    enExcerpt: 'The Satyanarayan Katha, as described in the Skanda Purana\'s Reva Khanda, brings prosperity, peace and removes obstacles from one\'s life.',
    hiExcerpt: 'स्कन्द पुराण के रेवा खण्ड में वर्णित सत्यनारायण कथा जीवन में समृद्धि, शांति लाती है और बाधाओं को दूर करती है।',
    shastreeyRef: 'स्कन्द पुराण, रेवा खण्ड (Skanda Purana, Reva Khanda)',
    date: '22 January 2026',
    readTime: '10 min',
    icon: '📖'
  },
  {
    slug: 'vivah-muhurat-2026',
    enTitle: 'Best Vivah Muhurat 2026: Auspicious Wedding Dates in Bangalore',
    hiTitle: 'सर्वश्रेष्ठ विवाह मुहूर्त 2026: बेंगलुरु में शुभ विवाह तिथियां',
    enExcerpt: 'Planning your wedding in 2026? Here are all the auspicious marriage dates (Vivah Muhurat) according to Hindu Panchang for Bangalore.',
    hiExcerpt: '2026 में विवाह की योजना बना रहे हैं? यहां बेंगलुरु के लिए हिंदू पंचांग के अनुसार सभी शुभ विवाह तिथियां दी गई हैं।',
    shastreeyRef: 'हिंदू पंचांग, पारस्कर गृह्यसूत्र (Hindu Panchang, Paraskara Grihya Sutra)',
    date: '1 February 2026',
    readTime: '6 min',
    icon: '🌺'
  },
  {
    slug: 'satyanarayan-katha-vidhi',
    enTitle: 'Satyanarayan Katha Vidhi: Step-by-Step Ritual Procedure',
    hiTitle: 'सत्यनारायण कथा विधि: चरण-दर-चरण अनुष्ठान प्रक्रिया',
    enExcerpt: 'A detailed guide to performing Satyanarayan Katha correctly — from Sankalpa to Prasad distribution, covering all five chapters and their significance.',
    hiExcerpt: 'सत्यनारायण कथा को सही तरीके से संपन्न करने की विस्तृत मार्गदर्शिका — संकल्प से प्रसाद वितरण तक, सभी पाँच अध्यायों और उनके महत्व सहित।',
    shastreeyRef: 'स्कन्द पुराण, रेवा खण्ड (Skanda Purana, Reva Khanda)',
    date: '10 February 2026',
    readTime: '9 min',
    icon: '🕉️'
  },
  {
    slug: 'mundan-sanskar-mahatva',
    enTitle: 'Mundan Sanskar: Significance, Procedure and the Right Age',
    hiTitle: 'मुंडन संस्कार: महत्व, विधि और सही उम्र',
    enExcerpt: 'Mundan (Chudakarana) is the 7th of 16 Samskaras. Discover its deep spiritual significance, the correct age for the ceremony, and what the Manusmriti says about it.',
    hiExcerpt: 'मुंडन (चूड़ाकरण) 16 संस्कारों में से सातवाँ है। इसके गहरे आध्यात्मिक महत्व, समारोह की सही उम्र और मनुस्मृति में क्या कहा गया है, जानें।',
    shastreeyRef: 'मनुस्मृति, गृह्य सूत्र (Manusmriti, Grihya Sutras)',
    date: '20 February 2026',
    readTime: '7 min',
    icon: '✂️'
  },
  {
    slug: 'pooja-samagri-complete-list',
    enTitle: 'Complete Pooja Samagri List: Items Required for Every Hindu Puja',
    hiTitle: 'पूजा सामग्री की संपूर्ण सूची: हर हिंदू पूजा के लिए आवश्यक वस्तुएं',
    enExcerpt: 'A comprehensive guide to all the items (samagri) needed for Hindu pujas — from basic Ganesh Puja to elaborate Havan. Know what to buy and why each item is significant.',
    hiExcerpt: 'हिंदू पूजाओं के लिए आवश्यक सभी वस्तुओं (सामग्री) की व्यापक मार्गदर्शिका — बुनियादी गणेश पूजा से विस्तृत हवन तक। जानें क्या खरीदें और प्रत्येक वस्तु क्यों महत्वपूर्ण है।',
    shastreeyRef: 'वैदिक परंपरा, गृह्य सूत्र (Vedic Tradition, Grihya Sutras)',
    date: '5 March 2026',
    readTime: '12 min',
    icon: '🪔'
  },
  {
    slug: 'navgrah-puja-significance',
    enTitle: 'Navgrah Puja: Balancing Planetary Energies for Health and Prosperity',
    hiTitle: 'नवग्रह पूजा: स्वास्थ्य और समृद्धि के लिए ग्रहों की ऊर्जा का संतुलन',
    enExcerpt: 'The nine planets (Navgraha) profoundly influence our lives. This guide explains each planet\'s role, what happens when they are malefic, and how Navgrah Puja provides relief.',
    hiExcerpt: 'नौ ग्रह (नवग्रह) हमारे जीवन पर गहरा प्रभाव डालते हैं। यह मार्गदर्शिका प्रत्येक ग्रह की भूमिका, उनके पाप होने पर क्या होता है, और नवग्रह पूजा कैसे राहत देती है, समझाती है।',
    shastreeyRef: 'मत्स्य पुराण, ज्योतिष शास्त्र (Matsya Purana, Jyotisha Shastra)',
    date: '15 March 2026',
    readTime: '11 min',
    icon: '⭐'
  }
];

const blogContent: Record<string, { en: string; hi: string }> = {
  'griha-pravesh-vidhi': {
    en: `
## What is Griha Pravesh?

Griha Pravesh (Sanskrit: गृहप्रवेश) is the sacred ceremony of entering a new home for the first time. It is one of the most important domestic rites in the Hindu tradition.

**Scriptural Reference (Pramāṇ):** 
> "गृहप्रवेशे कर्तव्यः पूजनं परमेष्ठिनः।"
> — स्कन्द पुराण, गृह्य खण्ड
> 
> "On entering a new home, one must perform worship of the Supreme."
> — Skanda Purana, Grihya Khanda

## Types of Griha Pravesh

1. **Apurva** — First entry into a newly built house
2. **Sapoorva** — Re-entry after renovation or repairs  
3. **Dwandwah** — Entry after a period of absence

## Step-by-Step Vidhi (Procedure)

### 1. Ganapati Puja
Begin with worshipping Lord Ganesha — the remover of all obstacles. This is mandatory before any Vedic rite.

### 2. Vastu Shanti Homa
A fire ritual (Homa) is performed to appease the Vastu Purusha (deity of the building plot).

### 3. Punyaha Vachanam
Purification of the home with sacred water (Ganga Jal) and mantras.

### 4. Navagraha Puja
Worship of the nine planetary deities to ensure harmonious cosmic energies in the new home.

### 5. Griha Pravesh Proper
The couple enters with the right foot first, carrying a pot of milk that is allowed to boil over — symbolizing abundance.

## FAQs

**Q: What is the best time (muhurat) for Griha Pravesh?**
A: An auspicious Nakshatra, Tithi, and planetary position are checked in the Panchang. Avoid Amavasya and inauspicious periods.

**Q: Can Griha Pravesh be done in rented houses?**
A: Yes, a modified version can be performed for rented accommodation.

**Q: How long does the ceremony take?**
A: Typically 3-4 hours including all sub-rituals.

**Q: What items (samagri) are needed?**
A: Pandit Ji brings all samagri. A detailed list is provided in advance.

**Q: Can we do Griha Pravesh in the evening?**
A: Only morning muhurats (before sunset) are considered auspicious for Griha Pravesh.
    `,
    hi: `
## गृह प्रवेश क्या है?

गृह प्रवेश नए घर में पहली बार प्रवेश करने का पवित्र समारोह है। यह हिंदू परंपरा में सबसे महत्वपूर्ण घरेलू संस्कारों में से एक है।

**प्रमाण (शास्त्रीय संदर्भ):**
> "गृहप्रवेशे कर्तव्यः पूजनं परमेष्ठिनः।"
> — स्कन्द पुराण, गृह्य खण्ड

## गृह प्रवेश के प्रकार

1. **अपूर्व** — नव निर्मित घर में पहला प्रवेश
2. **सपूर्व** — नवीनीकरण के बाद पुनः प्रवेश
3. **द्वन्द्व** — कुछ समय बाद पुनः प्रवेश

## चरण-दर-चरण विधि

### 1. गणपति पूजा
किसी भी वैदिक अनुष्ठान से पहले विघ्नहर्ता भगवान गणेश की पूजा अनिवार्य है।

### 2. वास्तु शांति हवन
वास्तु पुरुष को प्रसन्न करने के लिए हवन किया जाता है।

### 3. पुण्याह वाचनम
गंगाजल और मंत्रों से घर की शुद्धि।

### 4. नवग्रह पूजा
नौ ग्रहों की पूजा से घर में शुभ ऊर्जाओं का आह्वान।

### 5. गृह प्रवेश
दूध उबलने की रस्म के साथ दाएं पैर से प्रवेश।

## अक्सर पूछे जाने वाले प्रश्न

**प्र: गृह प्रवेश का शुभ मुहूर्त कैसे निकालें?**
उ: पंचांग में शुभ नक्षत्र, तिथि और ग्रह स्थिति देखकर मुहूर्त निकाला जाता है।

**प्र: किराए के मकान में गृह प्रवेश हो सकता है?**
उ: हां, किराए के मकान के लिए संशोधित विधि की जाती है।

**प्र: समारोह में कितना समय लगता है?**
उ: सभी उप-अनुष्ठानों सहित सामान्यतः 3-4 घंटे।
    `
  },
  'satyanarayan-katha-benefits': {
    en: `
## What is Satyanarayan Katha?

The Satyanarayan Katha is a revered form of worship dedicated to Lord Vishnu in his aspect as Satyanarayan — the Lord of Truth.

**Scriptural Reference (Pramāṇ):**
> "सत्यनारायणस्य व्रतं पुण्यं पापप्रणाशनम्।"
> — स्कन्द पुराण, रेवा खण्ड
>
> "The vow of Satyanarayan is meritorious and destroys all sins."
> — Skanda Purana, Reva Khanda

## Benefits of Satyanarayan Katha

- Removes obstacles and brings peace of mind
- Brings prosperity and financial stability
- Fulfills sincere wishes and desires
- Strengthens family bonds
- Recommended after every auspicious event (new home, marriage, childbirth)

## When to Perform

- **Poornima (Full Moon):** Ideal for Satyanarayan Puja
- **After major life events:** New home, wedding, new job
- **Monthly:** Many families perform it monthly on Poornima

## FAQs

**Q: How long does Satyanarayan Katha take?**
A: Approximately 2.5 to 3 hours including prasad distribution.

**Q: What is the prasad?**
A: Panchamrit and Sheera (semolina sweet) are the traditional prasads.

**Q: Can it be done at home?**
A: Yes, it is typically performed at home.

**Q: How much does it cost in Bangalore?**
A: Starting from ₹3100 including pandit dakshina and samagri.
    `,
    hi: `
## सत्यनारायण कथा क्या है?

सत्यनारायण कथा भगवान विष्णु के सत्यनारायण स्वरूप की एक पूजनीय पूजा है।

**प्रमाण:**
> "सत्यनारायणस्य व्रतं पुण्यं पापप्रणाशनम्।"
> — स्कन्द पुराण, रेवा खण्ड

## सत्यनारायण कथा के लाभ

- बाधाएं दूर होती हैं और मन को शांति मिलती है
- समृद्धि और आर्थिक स्थिरता आती है
- मनोकामनाएं पूरी होती हैं
- पारिवारिक बंधन मजबूत होते हैं

## कब करें

- **पूर्णिमा:** सत्यनारायण पूजा के लिए आदर्श
- **शुभ अवसरों के बाद:** नया घर, विवाह, नई नौकरी
- **मासिक:** कई परिवार हर पूर्णिमा को करते हैं

## अक्सर पूछे जाने वाले प्रश्न

**प्र: कितना समय लगता है?**
उ: प्रसाद वितरण सहित लगभग 2.5 से 3 घंटे।

**प्र: प्रसाद क्या होता है?**
उ: पंचामृत और शीरा (सूजी की मिठाई)।

**प्र: क्या घर पर हो सकती है?**
उ: हां, यह आमतौर पर घर पर ही की जाती है।
    `
  },
  'vivah-muhurat-2026': {
    en: `
## Vivah Muhurat 2026

Marriage (Vivah) is the most sacred of all 16 Samskaras. Choosing an auspicious Muhurat is essential for a blessed marital life.

**Scriptural Reference (Pramāṇ):**
> "शुभे मुहूर्ते विधिवत् कन्यादानं प्रशस्यते।"
> — पारस्कर गृह्यसूत्र

## Auspicious Vivah Muhurats 2026

| Month | Dates | Nakshatra | Special Notes |
|-------|-------|-----------|---------------|
| January | 15, 16, 20 | Rohini, Uttara Phalguni | Good |
| April | 22, 23, 24 | Akshaya Tritiya | Most Auspicious |
| May | 5, 7, 8, 12 | Hasta, Uttara Bhadra | Very Good |
| November | 12, 13, 20, 24 | Mrigashira, Rohini | Good |
| December | 5, 8, 9, 15 | Uttara Phalguni | Good |

## Key Factors in Muhurat Selection

1. **Tithi:** Auspicious lunar day (avoid Chaturthi, Ashtami, Navami, Chaturdashi, Amavasya)
2. **Vara:** Auspicious weekday (Monday, Wednesday, Thursday, Friday)
3. **Nakshatra:** Star constellation (Rohini, Mrigashira, Hasta, Uttara Phalguni most auspicious)
4. **Yoga:** Favourable Yoga combination
5. **Karana:** Lunar sub-day

## FAQs

**Q: Can Vivah be done any day in 2026?**
A: No, specific months (Adhik Maas/Holashtak/Pitru Paksha) are avoided.

**Q: How far in advance should I book a pandit?**
A: At least 2-3 months in advance for peak wedding season.

**Q: Can a North Indian Pandit perform South Indian-style wedding?**
A: We specialize in authentic North Indian (UP/Bihar/Rajasthan) Vivah rituals.
    `,
    hi: `
## विवाह मुहूर्त 2026

विवाह 16 संस्कारों में सबसे पवित्र है। सुखी वैवाहिक जीवन के लिए शुभ मुहूर्त का चयन आवश्यक है।

**प्रमाण:**
> "शुभे मुहूर्ते विधिवत् कन्यादानं प्रशस्यते।"
> — पारस्कर गृह्यसूत्र

## 2026 के शुभ विवाह मुहूर्त

| माह | तिथियां | नक्षत्र | विशेष टिप्पणी |
|-----|---------|---------|----------------|
| जनवरी | 15, 16, 20 | रोहिणी, उत्तरा फाल्गुनी | शुभ |
| अप्रैल | 22, 23, 24 | अक्षय तृतीया | अत्यंत शुभ |
| मई | 5, 7, 8, 12 | हस्त, उत्तरा भाद्र | बहुत शुभ |
| नवंबर | 12, 13, 20, 24 | मृगशिरा, रोहिणी | शुभ |
| दिसंबर | 5, 8, 9, 15 | उत्तरा फाल्गुनी | शुभ |

## मुहूर्त चयन के मुख्य कारक

1. **तिथि:** शुभ चंद्र तिथि
2. **वार:** सोमवार, बुधवार, गुरुवार, शुक्रवार
3. **नक्षत्र:** रोहिणी, मृगशिरा, हस्त सर्वश्रेष्ठ
4. **योग:** अनुकूल योग
5. **करण:** लग्न और चंद्र स्थिति

## अक्सर पूछे जाने वाले प्रश्न

**प्र: क्या 2026 में किसी भी दिन विवाह हो सकता है?**
उ: नहीं, अधिक मास, होलाष्टक और पितृ पक्ष में विवाह वर्जित है।

**प्र: पंडित जी को कितने समय पहले बुक करें?**
उ: विवाह सीजन में कम से कम 2-3 महीने पहले बुकिंग करें।
    `
  },
  'satyanarayan-katha-vidhi': {
    en: `
## Satyanarayan Katha Vidhi: The Complete Procedure

The Satyanarayan Katha is a five-chapter devotional text from the Skanda Purana, Reva Khanda. The complete Vidhi (procedure) follows specific steps that must be observed for the Katha to be fully effective.

**Scriptural Reference (Pramāṇ):**
> "सत्यनारायणस्य व्रतं पुण्यं पापप्रणाशनम्। सर्वदा श्रोतव्यं भक्त्या मनोवाक्कायसिद्धये॥"
> — Skanda Purana, Reva Khanda

## Preparations Before the Katha

### Space Setup
- Clean and decorate the puja space with flowers, mango leaves, and banana plants
- Install an idol or photo of Lord Vishnu (Satyanarayan)
- Prepare the Kalash (sacred pot) with water, mango leaves, and coconut

### Samagri (Materials)
- Panchamrit (milk, curd, honey, ghee, sugar)
- Yellow/saffron cloth for the deity
- Flowers, incense sticks, camphor
- Wheat flour for Prasad Sheera (semolina can also be used)
- Betel leaves, betel nuts, Tulsi leaves

## Step-by-Step Katha Procedure

### Step 1: Sankalpa (Sacred Vow)
The performer takes a Sankalpa — a formal vow stating the purpose of the Katha. The pandit recites the Sankalpa mantra while the performer holds water, flowers, and rice.

### Step 2: Ganesh Puja
Lord Ganesha is worshipped to remove all obstacles before the main Katha.

### Step 3: Shodashopachara Puja of Lord Satyanarayan
Sixteen forms of devotional offering are made — including Ahvana (invitation), Asana (seat), Padyam (water for feet), Arghya (oblation), Panchamrit Abhishek, and Pushp (flowers).

### Step 4: Five-Chapter Katha Recitation
The five chapters of the Satyanarayan Katha are then recited by the Pandit:

1. **Adhyay 1:** Origin of the Katha — Sage Narada asks Lord Vishnu for a remedy for mankind's suffering
2. **Adhyay 2:** Story of the woodcutter and the poor Brahmin who perform the Katha and gain prosperity
3. **Adhyay 3:** Story of King Ulkamukha and the merchant Sadhu who benefit from the Katha
4. **Adhyay 4:** Story of the merchant Sadhu and the punishment for neglecting the Katha
5. **Adhyay 5:** Story of King Tungadhwaja who suffers by ignoring the prasad — emphasizing the importance of respect

### Step 5: Aarti and Prasad Distribution
The Aarti of Lord Satyanarayan is performed, followed by distribution of Panchamrit and Sheera (semolina sweet) as prasad.

## When is the Katha Most Effective?

According to the Skanda Purana, the Katha yields maximum benefit when performed:
- On Poornima (Full Moon day)
- On Ekadashi (11th lunar day)
- On Thursdays (Guruvar — Lord Vishnu's day)
- After major life events: new home, marriage, business launch

## FAQs

**Q: Is it necessary to have family members present?**
A: The Katha is more auspicious when family members are present. However, it can be performed alone with devotion.

**Q: Can the Katha be performed in an apartment?**
A: Yes, it is ideally suited for home/apartment puja. A clean, dedicated space is sufficient.

**Q: How much Sheera is offered as prasad?**
A: Typically 250 to 500 grams of Sheera is prepared. The quantity depends on the number of attendees.
    `,
    hi: `
## सत्यनारायण कथा विधि: संपूर्ण प्रक्रिया

सत्यनारायण कथा स्कन्द पुराण के रेवा खण्ड का पाँच-अध्याय भक्ति ग्रंथ है। कथा को पूरी तरह प्रभावी बनाने के लिए विशिष्ट चरणों का पालन करना आवश्यक है।

**प्रमाण:**
> "सत्यनारायणस्य व्रतं पुण्यं पापप्रणाशनम्।"
> — स्कन्द पुराण, रेवा खण्ड

## कथा से पहले की तैयारी

**स्थान की व्यवस्था:**
- फूलों, आम के पत्तों और केले के पौधों से पूजा स्थान को सजाएं
- भगवान विष्णु (सत्यनारायण) की मूर्ति या फोटो स्थापित करें
- जल, आम के पत्तों और नारियल के साथ कलश तैयार करें

**सामग्री:**
- पंचामृत (दूध, दही, शहद, घी, चीनी)
- देवता के लिए पीला/केसरिया वस्त्र
- फूल, अगरबत्ती, कपूर
- प्रसाद शीरा के लिए गेहूं का आटा
- पान के पत्ते, सुपारी, तुलसी के पत्ते

## चरण-दर-चरण कथा प्रक्रिया

### चरण 1: संकल्प
पंडित जी द्वारा संकल्प मंत्र के पाठ के साथ कथा के उद्देश्य की घोषणा।

### चरण 2: गणेश पूजा
मुख्य कथा से पहले सभी बाधाओं को दूर करने के लिए।

### चरण 3: षोडशोपचार पूजा
भगवान सत्यनारायण को 16 प्रकार की भक्तिपूर्ण अर्पण।

### चरण 4: पाँच-अध्याय कथा वाचन
पंडित जी सत्यनारायण कथा के पाँच अध्यायों का पाठ करते हैं।

### चरण 5: आरती और प्रसाद वितरण
भगवान सत्यनारायण की आरती के बाद पंचामृत और शीरा प्रसाद का वितरण।

## अक्सर पूछे जाने वाले प्रश्न

**प्र: क्या परिवार के सदस्यों का उपस्थित होना आवश्यक है?**
उ: कथा अधिक शुभ होती है जब परिवार के सदस्य उपस्थित हों।

**प्र: क्या अपार्टमेंट में कथा हो सकती है?**
उ: हाँ, यह घर/अपार्टमेंट पूजा के लिए आदर्श है।
    `
  },
  'mundan-sanskar-mahatva': {
    en: `
## What is Mundan Sanskar?

Mundan (Chudakarana) is the 7th of the 16 Samskaras (sacred rites of passage) prescribed in Hindu Dharma. It involves the first ritual shaving of a child's head.

**Scriptural Reference (Pramāṇ):**
> "चूडाकर्म द्विजातीनां सर्वेषामेव धर्मतः।"
> — मनुस्मृति (Manusmriti)
>
> "Chudakarana must be performed for all twice-born as prescribed by Dharma."
> — Manusmriti

## Why is Mundan Performed?

The Shastras give multiple reasons for this important Sanskar:

1. **Removal of Birth Karma:** The hair present at birth is believed to carry karmic impressions (vasanas) from past lives. Removing it symbolically purifies the child.

2. **Brain Development:** The Ayurvedic tradition explains that the vibrations of the shaving stimulate nerve endings on the scalp, promoting better neurological development.

3. **Health and Hygiene:** The first hair (Jaatarooma) is considered impure. Its removal ensures the child's health and longevity.

4. **Spiritual Significance:** The ceremony marks the child's official entry into the family's Vedic tradition.

## The Correct Age for Mundan

According to the Manusmriti and Paraskara Grihya Sutra:
- **Ideal:** In the first year of life (before the child's first birthday)
- **Acceptable:** In the third year (before the third birthday)
- **Extended:** Some Shastras allow until the 5th or 7th year (odd years preferred)

## Mundan Vidhi (Procedure)

### 1. Ganesh Puja
Begin with Ganesh Puja to remove obstacles.

### 2. Kalash Sthapana
Establish the sacred Kalash (pot) with water and mango leaves.

### 3. Mundan Mantra and Sankalpa
The Pandit recites specific Mundan mantras while the barber performs the first symbolic cut, followed by the formal head-shaving.

### 4. Closing Aarti
The ceremony concludes with Aarti and blessings for the child's long and healthy life.

## Where to Perform Mundan?

- **At Home:** Convenient and comfortable for the child
- **At a Temple:** Adding divine sanctity — popular choices in Bangalore include Iskcon Temple and Tirupati Balaji Devasthanam
- **On a Pilgrimage:** Many families combine it with a pilgrimage to Tirupati or Mathura

## FAQs

**Q: Should all the hair be shaved or just a symbolic cut?**
A: Traditionally, all hair is removed. However, leaving a small tuft (Shikha) at the top is recommended for Brahmin children.

**Q: What to do with the hair after Mundan?**
A: The cut hair should ideally be immersed in a sacred river or donated at a temple. Never discard it in ordinary waste.

**Q: Can Mundan be done for twins on the same day?**
A: Yes, both twins can have their Mundan on the same day, preferably simultaneously.
    `,
    hi: `
## मुंडन संस्कार क्या है?

मुंडन (चूड़ाकरण) हिंदू धर्म में निर्धारित 16 संस्कारों (पवित्र संस्कारों) में से सातवाँ संस्कार है। इसमें बच्चे के सिर का पहला औपचारिक मुंडन शामिल है।

**प्रमाण:**
> "चूडाकर्म द्विजातीनां सर्वेषामेव धर्मतः।"
> — मनुस्मृति

## मुंडन क्यों किया जाता है?

1. **पिछले जन्म के कर्म का निवारण:** जन्म के समय के बाल पिछले जन्मों के कर्मिक संस्कारों को वहन करते हैं।

2. **मस्तिष्क विकास:** आयुर्वेद के अनुसार मुंडन से सिर के तंत्रिका सिरों की उत्तेजना होती है।

3. **स्वास्थ्य और स्वच्छता:** जन्म के बाल अपवित्र माने जाते हैं।

4. **आध्यात्मिक महत्व:** यह बच्चे के वैदिक परंपरा में प्रवेश का प्रतीक है।

## मुंडन की सही उम्र

- **आदर्श:** पहले वर्ष में (पहले जन्मदिन से पहले)
- **स्वीकार्य:** तीसरे वर्ष में
- **विस्तारित:** 5वें या 7वें वर्ष तक

## मुंडन विधि

1. गणेश पूजा से आरंभ
2. कलश स्थापना
3. मुंडन मंत्र और संकल्प
4. समापन आरती और आशीर्वाद

## अक्सर पूछे जाने वाले प्रश्न

**प्र: सभी बाल मुंडन होने चाहिए या केवल प्रतीकात्मक कट?**
उ: परंपरागत रूप से सभी बाल हटाए जाते हैं। ब्राह्मण बच्चों के लिए शीर्ष पर छोटी शिखा छोड़ने की सिफारिश की जाती है।

**प्र: मुंडन के बाद बालों का क्या करें?**
उ: कटे बालों को पवित्र नदी में विसर्जित या मंदिर में दान करना चाहिए।
    `
  },
  'pooja-samagri-complete-list': {
    en: `
## Complete Pooja Samagri Guide

Every Hindu puja requires specific items (Samagri) as prescribed in the Vedic tradition. This comprehensive guide covers the most important items and their significance.

**Scriptural Reference:**
> "द्रव्यैर्यजेत देवान् — Worship the gods with appropriate offerings"
> — Grihya Sutras

## Universal Samagri (Common to All Pujas)

### Sacred Items
- **Ganga Jal** — Holy water from the River Ganga; used for purification
- **Tulsi Leaves** — Sacred to Lord Vishnu; used in Abhishek and offerings
- **Durva Grass** — Sacred to Lord Ganesha; offered in triads
- **Betel Leaves (Paan)** — Used in offerings and closing rituals

### Abhishek Items (for bathing the deity)
- **Panchamrit** — Five divine liquids: milk (Dugdha), curd (Dadhi), honey (Madhu), clarified butter (Ghee), sugar (Sharkara)
- **Rose water** — Used for final rinse
- **Raw milk** — For Abhishek of Shivaling specifically

### Incense and Light
- **Agarbatti (Incense Sticks)** — Preferably sandalwood or rose
- **Ghee Diya (Lamp)** — Clay or brass lamp with cotton wick
- **Camphor (Kapoor)** — For Aarti
- **Dhoop** — Resin incense for larger ceremonies

### Offerings (Naivedya)
- **Coconut (Naariyal)** — Whole coconut for Kalash; broken coconut as offering
- **Seasonal Fruits** — 5 or 11 varieties recommended
- **Sweets** — Modak for Ganesha; Peda for Krishna; Laddoo general
- **Panchamrit** — As prasad

### Flowers and Leaves
- **Marigold (Genda)** — Universal puja flower
- **Rose (Gulab)** — Especially for Devi puja
- **Lotus (Kamal)** — For Lakshmi puja
- **Ashoka leaves** — For Kalash
- **Mango leaves** — For Kalash and entrance decorations

## Samagri for Specific Pujas

### Griha Pravesh Specific
- Havan Kund and Havan Samagri (mixture of sesame, barley, ghee, herbs)
- Mango wood (Aam ki Lakdi)
- New broom (for symbolic sweeping)
- Pot of rice (for boiling over — abundance ritual)
- Red cloth for doorway

### Satyanarayan Katha Specific
- Wheat flour or Semolina (Suji) for Sheera prasad
- Banana (Kela)
- Yellow cloth for deity
- Panchamrit for Abhishek

### Rudrabhishek Specific
- Bilva (Bel) leaves — Most sacred for Lord Shiva
- Shivaling (or copper Shivaling if at home)
- White flowers (especially Datura, Akada)
- Bhang (if performing on Shivaratri)
- Black sesame (Kale Til)

## FAQs

**Q: Can I use plastic items in puja?**
A: Avoid plastic wherever possible. Brass, copper, clay, and stainless steel are preferred for all puja vessels.

**Q: What is the difference between Agarbatti and Dhoop?**
A: Agarbatti (incense sticks) are used for daily puja. Dhoop (resin incense) is used for more elaborate ceremonies. Dhoop is considered more potent for Havan-related rituals.

**Q: Do I need to buy samagri myself?**
A: PanditGhar.in includes all necessary samagri in the package. You don't need to purchase anything — just provide a clean space.
    `,
    hi: `
## संपूर्ण पूजा सामग्री मार्गदर्शिका

हर हिंदू पूजा के लिए वैदिक परंपरा में निर्धारित विशिष्ट वस्तुएं (सामग्री) आवश्यक होती हैं।

**प्रमाण:**
> "द्रव्यैर्यजेत देवान् — उचित अर्पण के साथ देवताओं की पूजा करें"
> — गृह्य सूत्र

## सार्वभौमिक सामग्री (सभी पूजाओं के लिए सामान्य)

### पवित्र वस्तुएं
- **गंगाजल** — शुद्धि के लिए
- **तुलसी के पत्ते** — भगवान विष्णु को प्रिय
- **दूर्वा घास** — भगवान गणेश को प्रिय
- **पान के पत्ते** — अर्पण में उपयोग

### अभिषेक सामग्री
- **पंचामृत** — दूध, दही, शहद, घी, चीनी
- **गुलाब जल** — अंतिम धुलाई के लिए
- **कच्चा दूध** — शिवलिंग अभिषेक के लिए

### धूप और दीप
- **अगरबत्ती** — चंदन या गुलाब
- **घी का दिया** — मिट्टी या पीतल का
- **कपूर** — आरती के लिए

### विशिष्ट पूजाओं की सामग्री

**गृह प्रवेश के लिए:**
- हवन कुंड और हवन सामग्री
- आम की लकड़ी
- लाल कपड़ा

**सत्यनारायण कथा के लिए:**
- सूजी या गेहूं का आटा (शीरा के लिए)
- केला, पीला कपड़ा

**रुद्राभिषेक के लिए:**
- बिल्व (बेल) के पत्ते
- सफेद फूल, काले तिल

## अक्सर पूछे जाने वाले प्रश्न

**प्र: क्या मुझे सामग्री खुद खरीदनी होगी?**
उ: नहीं, PanditGhar.in के पैकेज में सभी आवश्यक सामग्री शामिल है।
    `
  },
  'navgrah-puja-significance': {
    en: `
## The Nine Planets (Navgraha) and Their Influence

The Navgraha — nine celestial bodies — are central to Vedic astrology (Jyotisha Shastra). Their positions in the horoscope at birth determine our destiny, and their ongoing movements affect our daily lives.

**Scriptural Reference (Pramāṇ):**
> "नवग्रहाः प्रसन्नाः स्युः सौभाग्यं सुखमायुषः।"
> — मत्स्य पुराण (Matsya Purana)
>
> "When the nine planets are pleased, they bestow fortune, happiness, and long life."

## The Nine Planets and Their Roles

| Planet (Graha) | Deity | Governs | Malefic Effects |
|----------------|-------|---------|-----------------|
| Sun (Surya) | Lord Vishnu | Authority, vitality, father | Government troubles, health issues |
| Moon (Chandra) | Lord Shiva | Mind, emotions, mother | Mental stress, relationship issues |
| Mars (Mangal) | Lord Kartikeya | Courage, property, siblings | Accidents, disputes, Mangal Dosha |
| Mercury (Budha) | Lord Vishnu | Intelligence, communication, trade | Learning difficulties, business losses |
| Jupiter (Guru/Brihaspati) | Lord Brahma | Wisdom, wealth, children | Financial losses, progeny issues |
| Venus (Shukra) | Goddess Lakshmi | Love, luxury, marriage | Relationship problems, material losses |
| Saturn (Shani) | Lord Yama | Karma, discipline, longevity | Delays, obstacles, Shani Sade Sati |
| Rahu | Shadow planet | Ambitions, foreign travels | Confusion, deceit, sudden events |
| Ketu | Shadow planet | Spirituality, liberation | Isolation, spiritual confusion |

## When is Navgrah Puja Needed?

The Matsya Purana prescribes Navgrah Puja in these situations:
- When malefic planets cause problems in the horoscope
- During Sade Sati (7.5-year Saturn transit)
- During Rahu/Ketu transits (18-month cycle)
- Before major life events (marriage, business launch, house purchase)
- For general wellbeing and planetary harmony

## The Navgrah Puja Procedure

### 1. Navagraha Mandala Setup
Nine specific colors and materials are arranged in a geometric pattern (Mandala) representing each planet.

### 2. Individual Planetary Worship
Each planet receives its specific offerings:
- **Surya (Sun):** Red flowers, wheat, copper
- **Chandra (Moon):** White rice, white flowers, silver
- **Mangal (Mars):** Red lentils, red cloth
- **Budha (Mercury):** Green gram, green cloth
- **Guru (Jupiter):** Yellow gram, yellow cloth, turmeric
- **Shukra (Venus):** White rice, white cloth, curd
- **Shani (Saturn):** Black sesame, blue/black cloth, iron
- **Rahu:** Black gram, blue cloth
- **Ketu:** Multi-colored cloth, sesame mixture

### 3. Specific Planetary Mantras
Each planet has its specific Beej (seed) mantra chanted 108 times during the puja.

### 4. Navgrah Homa (Optional)
A fire ritual with planetary offerings provides additional powerful remediation.

## FAQs

**Q: How long does Navgrah Puja take?**
A: A complete Navgrah Puja takes 1.5 to 2.5 hours. With Homa, it can take 3-4 hours.

**Q: Can Navgrah Puja be done by anyone?**
A: Yes, Navgrah Puja can be performed by any person seeking planetary harmony. It is not restricted to those with specific doshas.

**Q: How often should Navgrah Puja be done?**
A: For general wellbeing, once a year is sufficient. For active doshas or difficult planetary periods, monthly or quarterly is recommended.

**Q: What is the difference between Navgrah Puja and Navgrah Homa?**
A: Navgrah Puja involves ritual worship and mantra chanting. Navgrah Homa adds a fire ritual with planetary offerings, making it more powerful for severe doshas.
    `,
    hi: `
## नवग्रह (नौ ग्रह) और उनका प्रभाव

नवग्रह — नौ खगोलीय पिंड — वैदिक ज्योतिष शास्त्र के केंद्र में हैं। जन्म के समय कुंडली में उनकी स्थिति हमारी नियति निर्धारित करती है।

**प्रमाण:**
> "नवग्रहाः प्रसन्नाः स्युः सौभाग्यं सुखमायुषः।"
> — मत्स्य पुराण

## नौ ग्रह और उनकी भूमिकाएं

| ग्रह | देवता | शासन करता है | अशुभ प्रभाव |
|------|-------|-------------|------------|
| सूर्य | भगवान विष्णु | अधिकार, जीवन शक्ति | सरकारी परेशानी |
| चंद्र | भगवान शिव | मन, भावनाएं | मानसिक तनाव |
| मंगल | भगवान कार्तिकेय | साहस, संपत्ति | दुर्घटनाएं, मंगल दोष |
| बुध | भगवान विष्णु | बुद्धि, व्यापार | सीखने में कठिनाई |
| गुरु | भगवान ब्रह्मा | ज्ञान, धन | आर्थिक नुकसान |
| शुक्र | देवी लक्ष्मी | प्रेम, विवाह | संबंध समस्याएं |
| शनि | यमराज | कर्म, अनुशासन | देरी, शनि साढ़ेसाती |
| राहु | छाया ग्रह | महत्वाकांक्षाएं | भ्रम, अचानक घटनाएं |
| केतु | छाया ग्रह | आध्यात्मिकता | एकांत, भ्रम |

## नवग्रह पूजा कब आवश्यक है?

- जब कुंडली में पाप ग्रह परेशानी करें
- शनि साढ़ेसाती के दौरान
- राहु/केतु गोचर के दौरान
- विवाह, व्यापार, घर खरीदने से पहले

## अक्सर पूछे जाने वाले प्रश्न

**प्र: नवग्रह पूजा में कितना समय लगता है?**
उ: संपूर्ण नवग्रह पूजा में 1.5 से 2.5 घंटे लगते हैं। हवन के साथ 3-4 घंटे।

**प्र: नवग्रह पूजा कितनी बार करनी चाहिए?**
उ: सामान्य भलाई के लिए साल में एक बार। सक्रिय दोषों के लिए मासिक या त्रैमासिक अनुशंसित है।
    `
  }
};

export default function Blog({ lang }: { lang: Language }) {
  const t = useTranslation(lang);
  const isHi = lang === 'hi';

  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": isHi ? "PanditGhar.in ब्लॉग — वैदिक ज्ञान" : "PanditGhar.in Blog — Vedic Knowledge",
    "description": isHi
      ? "वैदिक अनुष्ठानों, पूजाओं और शुभ मुहूर्त के बारे में शास्त्रों पर आधारित जानकारी।"
      : "Shastreey information about Vedic rituals, poojas, and auspicious muhurats.",
    "url": `https://panditghar.in/${lang}/blog`,
    "inLanguage": lang === 'hi' ? "hi-IN" : "en-IN"
  };

  return (
    <div className="pt-24 pb-16">
      <SEO
        title={isHi ? "ब्लॉग | वैदिक अनुष्ठान मार्गदर्शिका | PanditGhar.in" : "Blog | Vedic Ritual Guide | PanditGhar.in"}
        description={isHi ? "वैदिक अनुष्ठानों, पूजाओं और शुभ मुहूर्त के बारे में शास्त्रों पर आधारित जानकारी।" : "Shastreey information about Vedic rituals, poojas, and auspicious muhurats in Bangalore."}
        lang={lang}
        path={`/${lang}/blog`}
        schema={schema}
      />

      <section className="bg-gradient-maroon text-white py-20 px-4 text-center">
        <h1 className={`text-4xl md:text-5xl font-display font-bold mb-4 text-accent ${isHi ? 'font-hindi' : ''}`}>
          {isHi ? 'ब्लॉग — वैदिक ज्ञान' : 'Blog — Vedic Knowledge'}
        </h1>
        <p className={`text-xl text-white/80 max-w-2xl mx-auto ${isHi ? 'font-hindi' : ''}`}>
          {isHi ? 'शास्त्रों पर आधारित प्रामाणिक जानकारी' : 'Authentic knowledge based on the Shastras'}
        </p>
      </section>

      <section className="py-16 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-1 gap-8">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl border border-border shadow-md overflow-hidden flex flex-col md:flex-row"
            >
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center p-12 text-7xl min-w-[160px]">
                {post.icon}
              </div>
              <div className="p-8 flex-1">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4" /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime} read</span>
                </div>
                <h2 className={`text-2xl font-display font-bold text-secondary mb-3 ${isHi ? 'font-hindi' : ''}`}>
                  {isHi ? post.hiTitle : post.enTitle}
                </h2>
                <p className={`text-muted-foreground mb-3 ${isHi ? 'font-hindi' : ''}`}>
                  {isHi ? post.hiExcerpt : post.enExcerpt}
                </p>
                <p className="text-xs text-primary/70 italic mb-5">📜 {post.shastreeyRef}</p>
                <Link href={`/${lang}/blog/${post.slug}`}>
                  <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white">
                    {isHi ? 'पूरा पढ़ें →' : 'Read More →'}
                  </Button>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}

export function BlogPost({ lang, slug }: { lang: Language; slug: string }) {
  const t = useTranslation(lang);
  const isHi = lang === 'hi';
  const post = blogPosts.find(p => p.slug === slug);
  const content = blogContent[slug];

  if (!post || !content) {
    return (
      <div className="pt-24 pb-16 text-center">
        <h1 className="text-2xl font-bold text-secondary">Blog post not found</h1>
      </div>
    );
  }

  const text = isHi ? content.hi : content.en;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": isHi ? post.hiTitle : post.enTitle,
    "description": isHi ? post.hiExcerpt : post.enExcerpt,
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": "PanditGhar.in"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PanditGhar.in",
      "url": "https://panditghar.in"
    },
    "inLanguage": lang === 'hi' ? "hi-IN" : "en-IN"
  };

  return (
    <div className="pt-24 pb-16">
      <SEO
        title={isHi ? `${post.hiTitle} | PanditGhar.in` : `${post.enTitle} | PanditGhar.in`}
        description={isHi ? post.hiExcerpt : post.enExcerpt}
        lang={lang}
        path={`/${lang}/blog/${slug}`}
        schema={schema}
      />

      <article className="max-w-3xl mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4" /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime} read</span>
          </div>
          <h1 className={`text-4xl font-display font-bold text-secondary mb-4 ${isHi ? 'font-hindi' : ''}`}>
            {isHi ? post.hiTitle : post.enTitle}
          </h1>
          <div className="inline-block bg-primary/10 text-primary text-sm px-4 py-2 rounded-full border border-primary/20 mb-6">
            📜 {post.shastreeyRef}
          </div>
        </div>

        <div className={`prose prose-stone max-w-none ${isHi ? 'font-hindi' : ''}`}
          dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, '<br/>').replace(/## /g, '<h2 class="text-2xl font-bold text-secondary mt-8 mb-4">').replace(/### /g, '<h3 class="text-xl font-bold text-secondary mt-6 mb-3">').replace(/\*\*/g, '<strong>').replace(/> /g, '<blockquote class="border-l-4 border-primary pl-4 italic text-muted-foreground my-4">') }}
        />

        <div className="mt-12 p-8 bg-card rounded-2xl border border-border text-center">
          <h2 className={`text-2xl font-bold text-secondary mb-4 ${isHi ? 'font-hindi' : ''}`}>
            {isHi ? 'पंडित जी से बात करें' : 'Talk to Pandit Ji'}
          </h2>
          <p className={`text-muted-foreground mb-6 ${isHi ? 'font-hindi' : ''}`}>
            {isHi ? 'किसी भी पूजा के बारे में अधिक जानकारी के लिए हमसे संपर्क करें।' : 'Contact us for more information about any pooja.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lang}/book`}>
              <Button className="bg-primary text-white rounded-full px-8 py-6">
                {isHi ? 'पूजा बुक करें' : 'Book a Pooja'}
              </Button>
            </Link>
            <a href="https://wa.me/919880123456" target="_blank" rel="noreferrer">
              <Button variant="outline" className="rounded-full border-primary text-primary px-8 py-6">
                {isHi ? 'वाट्सएप करें' : 'WhatsApp Us'}
              </Button>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
