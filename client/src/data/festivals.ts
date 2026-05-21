export interface FestivalEvent {
  name: string;
  nameHi: string;
  month: number;
  day?: number;
  endDay?: number;
  description: string;
  descriptionHi: string;
  type: "religious" | "cultural" | "historical" | "seasonal";
  monumentIds: string[];
  color: string;
  icon: string;
}

export const FESTIVAL_EVENTS: FestivalEvent[] = [
  {
    name: "Makar Sankranti / Pongal",
    nameHi: "मकर संक्रांति / पोंगल",
    month: 1,
    day: 14,
    description: "The harvest festival marks the sun's transition into Capricorn. Celebrated as Pongal in Tamil Nadu near the great temples, as Makar Sankranti in Gujarat near Modhera, and as Lohri in Punjab near the Golden Temple.",
    descriptionHi: "फसल उत्सव सूर्य के मकर राशि में प्रवेश का जश्न मनाता है। तमिलनाडु में पोंगल, गुजरात में मकर संक्रांति और पंजाब में लोहड़ी के रूप में मनाया जाता है।",
    type: "religious",
    monumentIds: ["gangaikonda-cholapuram", "rameswaram-temple", "tirupati-temple", "modhera-sun-temple", "golden-temple"],
    color: "#f59e0b",
    icon: "☀️"
  },
  {
    name: "Republic Day",
    nameHi: "गणतंत्र दिवस",
    month: 1,
    day: 26,
    description: "India's Constitution came into effect on this day in 1950. Red Fort and India Gate in Delhi are illuminated and grand parades are held. All major monuments are lit up in tricolour lights across the country.",
    descriptionHi: "1950 में इस दिन भारत का संविधान लागू हुआ। दिल्ली में लाल किला और इंडिया गेट जगमगाते हैं और भव्य परेड होती है। देशभर के स्मारक तिरंगे रोशनी में जगमगाते हैं।",
    type: "historical",
    monumentIds: ["red-fort", "purana-qila", "jama-masjid", "humayuns-tomb", "agra-fort"],
    color: "#ff9933",
    icon: "🇮🇳"
  },
  {
    name: "Maha Shivaratri",
    nameHi: "महाशिवरात्रि",
    month: 2,
    day: 18,
    description: "The great night of Shiva draws millions of devotees to Shiva temples across India. Lingaraja Temple in Bhubaneswar, Konark, and the Ramappa Temple in Telangana host major celebrations with all-night prayers and abhishekam rituals.",
    descriptionHi: "शिव की महारात्रि पर लाखों भक्त भारत के शिव मंदिरों में आते हैं। भुवनेश्वर में लिंगराज मंदिर, कोणार्क और रामप्पा मंदिर में प्रमुख उत्सव होते हैं।",
    type: "religious",
    monumentIds: ["lingaraja-temple", "konark-sun-temple", "ramappa-temple", "somnath-temple", "brihadeeswara-temple"],
    color: "#6366f1",
    icon: "🔱"
  },
  {
    name: "Holi – Festival of Colours",
    nameHi: "होली – रंगों का उत्सव",
    month: 3,
    day: 8,
    description: "The festival of colours celebrates the arrival of spring. Jaipur and Rajasthan's forts are especially spectacular during Holi celebrations, with elephant parades at Amber Fort and the royal holi tradition at City Palace.",
    descriptionHi: "रंगों का त्योहार वसंत के आगमन का जश्न मनाता है। जयपुर और राजस्थान के किले होली के दौरान विशेष रूप से शानदार होते हैं — आमेर किले में हाथी परेड और सिटी पैलेस में शाही होली।",
    type: "cultural",
    monumentIds: ["amber-fort", "hawa-mahal", "junagarh-fort", "udaipur-city-palace", "ranakpur-temple"],
    color: "#ec4899",
    icon: "🎨"
  },
  {
    name: "Ram Navami",
    nameHi: "राम नवमी",
    month: 4,
    day: 2,
    description: "The birthday of Lord Rama brings massive celebrations to temples across India. Ayodhya (near Kushinagar), Ajmer Dargah (interfaith harmony), and the Tirupati pilgrimage see their largest annual footfall during this period.",
    descriptionHi: "भगवान राम के जन्मदिन पर भारत के मंदिरों में भव्य उत्सव होते हैं। अयोध्या, अजमेर दरगाह और तिरुपति में इस दौरान सबसे ज्यादा तीर्थयात्री आते हैं।",
    type: "religious",
    monumentIds: ["kushinagar", "ajmer-dargah", "tirupati-temple", "rameswaram-temple"],
    color: "#f97316",
    icon: "🙏"
  },
  {
    name: "Bihu / Rongali Bihu",
    nameHi: "बिहू / रोंगाली बिहू",
    month: 4,
    day: 14,
    description: "The Assamese New Year and harvest festival. Kamakhya Temple in Guwahati holds the Ambubachi Mela — a massive 4-day tantric festival drawing hundreds of thousands of devotees from across India.",
    descriptionHi: "असमिया नव वर्ष और फसल उत्सव। गुवाहाटी में कामाख्या मंदिर में अंबुबाची मेला — एक विशाल 4 दिवसीय तांत्रिक उत्सव जिसमें लाखों भक्त आते हैं।",
    type: "religious",
    monumentIds: ["kamakhya-temple"],
    color: "#10b981",
    icon: "🌾"
  },
  {
    name: "Buddha Purnima / Vesak",
    nameHi: "बुद्ध पूर्णिमा / वेसाक",
    month: 5,
    day: 23,
    description: "The most sacred day in Buddhism celebrates the birth, enlightenment, and death of Gautama Buddha. Sarnath (site of first sermon), Kushinagar (site of Mahaparinirvana), and Vaishali draw thousands of international Buddhist pilgrims.",
    descriptionHi: "बौद्ध धर्म में सबसे पवित्र दिन गौतम बुद्ध के जन्म, ज्ञान प्राप्ति और मृत्यु का जश्न मनाता है। सारनाथ, कुशीनगर और वैशाली अंतरराष्ट्रीय बौद्ध तीर्थयात्रियों को आकर्षित करते हैं।",
    type: "religious",
    monumentIds: ["sarnath", "kushinagar", "vaishali", "sanchi-stupa"],
    color: "#f59e0b",
    icon: "☸️"
  },
  {
    name: "Rath Yatra – Puri",
    nameHi: "रथ यात्रा – पुरी",
    month: 7,
    day: 7,
    description: "The world's largest chariot procession at Jagannath Temple, Puri. Three massive wooden chariots — some 14 metres tall — are pulled by thousands of devotees through the streets. Over 1 million people attend annually. UNESCO Intangible Cultural Heritage.",
    descriptionHi: "पुरी के जगन्नाथ मंदिर में विश्व का सबसे बड़ा रथ यात्रा। 14 मीटर ऊंचे तीन विशाल लकड़ी के रथों को हजारों भक्त खींचते हैं। प्रतिवर्ष 10 लाख से अधिक लोग शामिल होते हैं।",
    type: "religious",
    monumentIds: ["jagannath-temple", "lingaraja-temple", "udayagiri-khandagiri"],
    color: "#ef4444",
    icon: "🎡"
  },
  {
    name: "Independence Day",
    nameHi: "स्वतंत्रता दिवस",
    month: 8,
    day: 15,
    description: "India's Independence Day since 1947. The Prime Minister unfurls the national flag from the Red Fort in Delhi. Illuminations at major historical monuments, especially those connected to the freedom movement.",
    descriptionHi: "1947 से भारत का स्वतंत्रता दिवस। प्रधानमंत्री दिल्ली के लाल किले से राष्ट्रीय ध्वज फहराते हैं। प्रमुख ऐतिहासिक स्मारकों पर विशेष रोशनी।",
    type: "historical",
    monumentIds: ["red-fort", "gateway-of-india", "aga-khan-palace", "raigad-fort", "agra-fort"],
    color: "#ffffff",
    icon: "🇮🇳"
  },
  {
    name: "Ganesh Chaturthi",
    nameHi: "गणेश चतुर्थी",
    month: 9,
    day: 7,
    description: "The 10-day festival of Lord Ganesha is most spectacularly celebrated in Maharashtra. Shaniwar Wada and Raigad Fort in Maharashtra, and the Aga Khan Palace (where Gandhi was imprisoned during freedom struggle) take on festive colours.",
    descriptionHi: "भगवान गणेश का 10 दिवसीय उत्सव महाराष्ट्र में सबसे शानदार ढंग से मनाया जाता है। महाराष्ट्र में शनिवारवाडा और रायगढ़ किला उत्सवी रंगों में रंग जाते हैं।",
    type: "religious",
    monumentIds: ["shaniwar-wada", "raigad-fort", "aga-khan-palace", "daulatabad-fort", "chowmahalla-palace"],
    color: "#f97316",
    icon: "🐘"
  },
  {
    name: "Navratri & Durga Puja",
    nameHi: "नवरात्रि और दुर्गा पूजा",
    month: 10,
    day: 3,
    endDay: 12,
    description: "Nine nights of Goddess Durga's worship. Kamakhya Temple in Assam is the prime seat of Shakti worship. Varanasi's ghats, the Dilwara Temples in Rajasthan, and Kolkata (near Howrah Bridge) are among the most spectacular celebration sites.",
    descriptionHi: "देवी दुर्गा की पूजा की नौ रातें। असम में कामाख्या मंदिर शक्ति पूजा का प्रमुख स्थान है। वाराणसी के घाट, राजस्थान के दिलवाड़ा मंदिर और कोलकाता में भव्य उत्सव।",
    type: "religious",
    monumentIds: ["kamakhya-temple", "dilwara-temples", "howrah-bridge", "victoria-memorial", "brihadeeswara-temple"],
    color: "#dc2626",
    icon: "🪔"
  },
  {
    name: "Dussehra / Vijayadashami",
    nameHi: "दशहरा / विजयदशमी",
    month: 10,
    day: 12,
    description: "Celebrates the victory of good over evil. Mysore Dasara at Mysore Palace is among the world's most spectacular — the palace is lit with 100,000 light bulbs and a golden-howdah elephant procession marks the royal tradition.",
    descriptionHi: "बुराई पर अच्छाई की विजय का जश्न। मैसूर पैलेस में मैसूर दसारा विश्व के सबसे शानदार उत्सवों में से एक है — महल 1 लाख बल्बों से जगमगाता है।",
    type: "cultural",
    monumentIds: ["mysore-palace", "hampi", "golconda-fort", "mehrangarh-fort", "red-fort"],
    color: "#b45309",
    icon: "🎆"
  },
  {
    name: "Diwali – Festival of Lights",
    nameHi: "दीवाली – रोशनी का त्योहार",
    month: 11,
    day: 1,
    endDay: 5,
    description: "India's greatest festival of lights. The Golden Temple in Amritsar glows magnificently, Jaipur's forts are illuminated, and the ghats of Varanasi draw millions for the floating lamps. Historic monuments are open late with special light shows.",
    descriptionHi: "भारत का सबसे बड़ा रोशनी का त्योहार। अमृतसर में स्वर्ण मंदिर जगमगाता है, जयपुर के किले रोशन होते हैं और वाराणसी के घाट दीपों से जगमगाते हैं।",
    type: "religious",
    monumentIds: ["golden-temple", "amber-fort", "red-fort", "hawa-mahal", "mehrangarh-fort", "gateway-of-india", "victoria-memorial", "udaipur-city-palace"],
    color: "#fbbf24",
    icon: "🪔"
  },
  {
    name: "Pushkar Camel Fair",
    nameHi: "पुष्कर ऊंट मेला",
    month: 11,
    day: 15,
    endDay: 22,
    description: "One of the world's largest camel fairs and a major Hindu pilgrimage. Held near Ajmer, pilgrims also visit the Ajmer Dargah (Sufi shrine) and the Brahma Temple. Rajasthan's desert monuments and forts take on a festive atmosphere.",
    descriptionHi: "दुनिया के सबसे बड़े ऊंट मेलों में से एक और एक प्रमुख हिंदू तीर्थयात्रा। अजमेर के पास आयोजित, तीर्थयात्री अजमेर दरगाह और ब्रह्मा मंदिर भी जाते हैं।",
    type: "cultural",
    monumentIds: ["ajmer-dargah", "mehrangarh-fort", "jaisalmer-fort", "junagarh-fort"],
    color: "#d97706",
    icon: "🐪"
  },
  {
    name: "Guru Nanak Jayanti",
    nameHi: "गुरु नानक जयंती",
    month: 11,
    day: 27,
    description: "The birthday of Guru Nanak Dev Ji, founder of Sikhism. The Golden Temple in Amritsar glows with special illuminations for three days. Hemis Monastery in Ladakh and other monuments associated with Sikh history hold special programmes.",
    descriptionHi: "सिख धर्म के संस्थापक गुरु नानक देव जी का जन्मदिन। अमृतसर में स्वर्ण मंदिर तीन दिनों तक विशेष रोशनी से जगमगाता है।",
    type: "religious",
    monumentIds: ["golden-temple", "hemis-monastery", "leh-palace"],
    color: "#f59e0b",
    icon: "🌟"
  },
  {
    name: "Hampi Utsav",
    nameHi: "हम्पी उत्सव",
    month: 11,
    day: 3,
    endDay: 5,
    description: "A 3-day cultural extravaganza at the Vijayanagara ruins of Hampi. Folk dances, classical music, chariot processions, and light-and-sound shows recreate the glory of the Vijayanagara Empire. Held against the backdrop of the Virupaksha Temple.",
    descriptionHi: "हम्पी के विजयनगर खंडहरों में 3 दिवसीय सांस्कृतिक उत्सव। लोक नृत्य, शास्त्रीय संगीत, रथ जुलूस और ध्वनि-प्रकाश शो विजयनगर साम्राज्य की महिमा को जीवंत करते हैं।",
    type: "cultural",
    monumentIds: ["hampi"],
    color: "#b45309",
    icon: "🎭"
  },
  {
    name: "Konark Dance Festival",
    nameHi: "कोणार्क नृत्य महोत्सव",
    month: 12,
    day: 1,
    endDay: 5,
    description: "Five days of classical Indian dance performed against the backdrop of the Konark Sun Temple. Odissi, Bharatanatyam, Kathakali, Manipuri and other classical forms are performed by India's top artists at this UNESCO World Heritage site.",
    descriptionHi: "कोणार्क सूर्य मंदिर की पृष्ठभूमि में पाँच दिन की शास्त्रीय भारतीय नृत्य प्रस्तुतियाँ। ओडिसी, भरतनाट्यम, कथकली, मणिपुरी और अन्य शास्त्रीय नृत्य प्रस्तुत किए जाते हैं।",
    type: "cultural",
    monumentIds: ["konark-sun-temple"],
    color: "#7c3aed",
    icon: "💃"
  },
  {
    name: "Tawang Festival",
    nameHi: "तवांग महोत्सव",
    month: 12,
    day: 28,
    endDay: 30,
    description: "A winter festival at Tawang Monastery in Arunachal Pradesh celebrating Tibetan Buddhist culture. Cham dances, traditional sports, and cultural performances under the shadow of the 17th-century monastery.",
    descriptionHi: "अरुणाचल प्रदेश में तवांग मठ में तिब्बती बौद्ध संस्कृति का जश्न मनाने वाला शीतकालीन उत्सव। 17वीं सदी के मठ की छाया में छम नृत्य, पारंपरिक खेल और सांस्कृतिक प्रस्तुतियाँ।",
    type: "cultural",
    monumentIds: ["tawang-monastery"],
    color: "#0891b2",
    icon: "🏔️"
  },
  {
    name: "Urs of Khwaja Sahib",
    nameHi: "ख्वाजा साहब का उर्स",
    month: 3,
    day: 15,
    endDay: 21,
    description: "The annual death anniversary of Sufi saint Khwaja Moinuddin Chishti at Ajmer Dargah. One of the largest Sufi gatherings in the world — over 500,000 pilgrims of all faiths attend. Qawwali music fills the air for six days.",
    descriptionHi: "अजमेर दरगाह में सूफी संत ख्वाजा मोइनुद्दीन चिश्ती की वार्षिक पुण्यतिथि। दुनिया के सबसे बड़े सूफी समारोहों में से एक — सभी धर्मों के 5 लाख तीर्थयात्री शामिल होते हैं।",
    type: "religious",
    monumentIds: ["ajmer-dargah", "fatehpur-sikri"],
    color: "#059669",
    icon: "🌹"
  },
  {
    name: "Mahamasthakabhisheka",
    nameHi: "महामस्तकाभिषेक",
    month: 2,
    day: 18,
    description: "Held every 12 years at Shravanabelagola, this massive Jain ceremony involves anointing the 18-metre monolithic statue of Lord Gomateshwara with milk, saffron, gold, and flowers. The next occurrence is expected around 2030.",
    descriptionHi: "हर 12 साल में श्रवणबेलगोला में आयोजित यह भव्य जैन समारोह भगवान गोमतेश्वर की 18 मीटर एकाश्म प्रतिमा को दूध, केसर, सोना और फूलों से अभिषेक करता है।",
    type: "religious",
    monumentIds: ["gomateshwara"],
    color: "#8b5cf6",
    icon: "🧘"
  },
  {
    name: "Hornbill Festival",
    nameHi: "हॉर्नबिल महोत्सव",
    month: 12,
    day: 1,
    endDay: 10,
    description: "Northeast India's greatest tribal cultural festival in Nagaland. While not monument-linked, it celebrates the heritage of tribes whose traditions connect to ancient sites across the Northeast, including near Tawang Monastery.",
    descriptionHi: "नागालैंड में पूर्वोत्तर भारत का सबसे बड़ा आदिवासी सांस्कृतिक उत्सव। तवांग मठ सहित पूर्वोत्तर के प्राचीन स्थलों से जुड़ी जनजातीय परंपराओं का जश्न।",
    type: "cultural",
    monumentIds: ["tawang-monastery"],
    color: "#dc2626",
    icon: "🦜"
  }
];

export const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const MONTH_NAMES_HI = [
  "जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून",
  "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"
];

export function getFestivalsForMonth(month: number): FestivalEvent[] {
  return FESTIVAL_EVENTS.filter(e => e.month === month);
}

export function getFestivalsForMonument(monumentId: string): FestivalEvent[] {
  return FESTIVAL_EVENTS.filter(e => e.monumentIds.includes(monumentId));
}

export default FESTIVAL_EVENTS;
