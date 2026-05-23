export interface Hotspot {
  name: string;
  description: string;
  position: [number, number, number];
}

export interface TimelineEntry {
  year: string;
  event: string;
  eventHi?: string;
}

export interface Monument {
  id: string;
  name: string;
  nameHi?: string;
  city: string;
  state: string;
  coordinates: [number, number]; // [longitude, latitude]
  description: string;
  descriptionHi?: string;
  yearBuilt: string;
  dynasty: string;
  dynastyHi?: string;
  primaryModel: string;
  historicalModels: {
    past: string;
    ancient: string;
  };
  facts: string[];
  factsHi?: string[];
  visitingHours: string;
  visitingHoursHi?: string;
  bestMonths?: number[]; // 0-based indices: 0=Jan … 11=Dec
  bestTimeDesc?: string;
  bestTimeDescHi?: string;
  timeline?: TimelineEntry[];
  entryFee?: string;
  entryFeeHi?: string;
  UNESCO?: boolean;
  era?: "ancient" | "medieval" | "modern";
  hotspots?: Hotspot[];
}

export const monuments: Monument[] = [
  {
    id: "taj-mahal",
    name: "Taj Mahal",
    nameHi: "ताज महल",
    city: "Agra",
    state: "Uttar Pradesh",
    coordinates: [78.0421, 27.1751],
    description: "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.",
    descriptionHi: "ताज महल आगरा, उत्तर प्रदेश में यमुना नदी के दाहिने तट पर स्थित एक हाथी-दांत सफेद संगमरमर का मकबरा है। इसे 1631 में मुगल सम्राट शाहजहाँ ने अपनी प्रिय पत्नी मुमताज महल की समाधि के लिए बनवाया था। इसमें स्वयं शाहजहाँ की भी समाधि है। यह इमारत प्रेम और शोक की अमर अभिव्यक्ति मानी जाती है और दुनिया के सात अजूबों में शामिल है।",
    yearBuilt: "1632-1653",
    dynasty: "Mughal Empire",
    dynastyHi: "मुगल साम्राज्य",
    primaryModel: "/models/taj_mahal.glb",
    historicalModels: { past: "/models/taj_mahal.glb", ancient: "/models/taj_mahal.glb" },
    era: "medieval",
    hotspots: [
      { name: "Main Dome", description: "The 73-metre-tall central onion dome flanked by four chhatris.", position: [0, 1.6, 0] },
      { name: "Minarets", description: "Four 40-metre minarets, slightly tilted outward to protect the tomb in case of an earthquake.", position: [1.4, 0.4, 1.4] },
      { name: "Charbagh Garden", description: "The Mughal-style four-part garden symbolises the four rivers of paradise.", position: [0, -0.8, 1.8] }
    ],
    facts: [
      "The Taj Mahal's construction took about 22 years to complete",
      "Over 20,000 workers were employed for its construction",
      "The main dome is 73 meters high",
      "The entire structure is made of white marble from Rajasthan"
    ],
    factsHi: [
      "ताज महल के निर्माण में लगभग 22 साल लगे",
      "इसके निर्माण में 20,000 से अधिक कारीगरों को लगाया गया था",
      "मुख्य गुंबद 73 मीटर ऊंचा है",
      "पूरी संरचना राजस्थान के सफेद संगमरमर से बनी है"
    ],
    visitingHours: "6:00 AM to 6:30 PM (Closed on Fridays)",
    visitingHoursHi: "सुबह 6:00 से शाम 6:30 बजे तक (शुक्रवार को बंद)",
    bestMonths: [10, 11, 0, 1],
    bestTimeDesc: "November to February is the most magical window — misty winter mornings cast an ethereal glow on the white marble at sunrise, and cool afternoons are perfect for lingering in the gardens. Avoid April–June (scorching 45°C+) and the monsoon months when humidity is oppressive.",
    bestTimeDescHi: "नवंबर से फ़रवरी सबसे जादुई समय है — सर्दियों की धुंधली सुबह में सफेद संगमरमर पर एक अलौकिक चमक होती है और ठंडी दोपहरें बगीचों में टहलने के लिए आदर्श हैं। अप्रैल–जून (45°C+) और उमस भरे मानसून महीनों से बचें।",
    timeline: [
      { year: "1631", event: "Construction begins; Shah Jahan commissions the mausoleum in memory of Mumtaz Mahal", eventHi: "सम्राट शाहजहाँ ने मुमताज महल की याद में मकबरे का निर्माण शुरू करवाया" },
      { year: "1643", event: "Main mausoleum structure completed after 12 years of construction", eventHi: "12 वर्षों के बाद मुख्य मकबरे का ढाँचा पूर्ण हुआ" },
      { year: "1653", event: "Full complex — gardens, mosque, and great gate — finally completed", eventHi: "बगीचे, मस्जिद और मुख्य द्वार सहित पूरा परिसर पूर्ण हुआ" },
      { year: "1908", event: "Major restoration by British Viceroy Lord Curzon revives the monument", eventHi: "ब्रिटिश वायसरॉय लॉर्ड कर्ज़न द्वारा बड़ा जीर्णोद्धार कार्य" },
      { year: "1983", event: "Designated a UNESCO World Heritage Site", eventHi: "यूनेस्को विश्व धरोहर स्थल घोषित" },
    ],
    entryFee: "₹1,100 for foreign tourists, ₹50 for Indian citizens",
    entryFeeHi: "विदेशी पर्यटकों के लिए ₹1,100, भारतीय नागरिकों के लिए ₹50",
    UNESCO: true
  },
  {
    id: "qutub-minar",
    name: "Qutub Minar",
    nameHi: "कुतुब मीनार",
    city: "Delhi",
    state: "Delhi",
    coordinates: [77.1855, 28.5245],
    description: "The Qutub Minar is a 73-metre tall minaret built in the early 13th century. It is a UNESCO World Heritage Site and has survived natural disasters and invasions throughout its history. The tower is known for its intricate carvings, inscriptions from the Quran, and distinctive architectural style that showcases a blend of Indo-Islamic influences.",
    descriptionHi: "कुतुब मीनार 73 मीटर ऊंची एक मीनार है जिसे 13वीं सदी की शुरुआत में बनाया गया था। यह यूनेस्को विश्व धरोहर स्थल है और इतिहास में प्राकृतिक आपदाओं तथा आक्रमणों के बावजूद सुरक्षित रही है। इस मीनार में जटिल नक्काशी, कुरानी शिलालेख और इंडो-इस्लामी वास्तुकला का अनूठा मेल देखने को मिलता है। यह विश्व की सबसे ऊंची ईंट की मीनार है।",
    yearBuilt: "1199-1220",
    dynasty: "Mamluk Dynasty",
    dynastyHi: "ममलूक वंश",
    primaryModel: "/models/qutub_minar_new.glb",
    historicalModels: { past: "/models/qutub_minar.glb", ancient: "/models/qutub_minar.glb" },
    era: "medieval",
    hotspots: [
      { name: "Five Storeys", description: "Five distinct storeys, each marked by a projecting carved balcony.", position: [0, 1.5, 0.6] },
      { name: "Quranic Inscriptions", description: "The first storey is covered in Arabic inscriptions from the Quran.", position: [0.5, 0.2, 0.5] }
    ],
    facts: [
      "It is the tallest brick minaret in the world",
      "Construction was started by Qutub-ud-din Aibak and completed by his successor Iltutmish",
      "The tower has five distinct storeys, each marked by a projecting balcony",
      "The first three storeys are made of red sandstone, while the fourth and fifth are made of marble and sandstone"
    ],
    factsHi: [
      "यह विश्व की सबसे ऊंची ईंट की मीनार है",
      "निर्माण कुतुब-उद-दीन ऐबक ने शुरू किया और उत्तराधिकारी इल्तुतमिश ने पूरा किया",
      "मीनार में पाँच मंजिलें हैं, जिनमें से प्रत्येक पर उभरी हुई नक्काशीदार बालकनी है",
      "पहली तीन मंजिलें लाल बलुआ पत्थर से और चौथी व पाँचवीं संगमरमर व बलुआ पत्थर से बनी हैं"
    ],
    visitingHours: "7:00 AM to 5:00 PM (All days)",
    visitingHoursHi: "सुबह 7:00 से शाम 5:00 बजे तक (सभी दिन)",
    bestMonths: [10, 11, 0, 1],
    bestTimeDesc: "November to February is ideal — Delhi's cool, clear winter skies let you appreciate the intricate carvings and towering height without heat exhaustion. Mornings are crisp and pleasantly uncrowded. Summers exceed 45°C and the monsoon makes the extensive grounds muddy and uncomfortable.",
    bestTimeDescHi: "नवंबर से फ़रवरी आदर्श है — दिल्ली के ठंडे, साफ़ सर्दियों के आसमान में जटिल नक्काशी और ऊँची मीनार को बिना थकान के निहारा जा सकता है। सुबहें शांत और कम भीड़ वाली होती हैं। गर्मियों में 45°C+ और मानसून में कीचड़ भरे मैदान यात्रा को असुविधाजनक बना देते हैं।",
    timeline: [
      { year: "1199", event: "Construction begins under Qutb-ud-Din Aibak of the Delhi Sultanate", eventHi: "दिल्ली सल्तनत के कुतुब-उद-दीन ऐबक के अधीन निर्माण शुरू" },
      { year: "1220", event: "Completed by Iltutmish, successor of Qutb-ud-Din Aibak", eventHi: "ऐबक के उत्तराधिकारी इल्तुतमिश द्वारा निर्माण पूर्ण" },
      { year: "1368", event: "Fifth storey added by Firuz Shah Tughlaq after lightning destroys the top", eventHi: "बिजली गिरने के बाद फ़िरोज़ शाह तुगलक ने पाँचवीं मंजिल जोड़ी" },
      { year: "1920s", event: "Repairs undertaken under British colonial authority", eventHi: "ब्रिटिश औपनिवेशिक प्रशासन के अधीन मरम्मत कार्य" },
      { year: "1993", event: "Designated a UNESCO World Heritage Site", eventHi: "यूनेस्को विश्व धरोहर स्थल घोषित" },
    ],
    entryFee: "₹600 for foreign tourists, ₹35 for Indian citizens",
    entryFeeHi: "विदेशी पर्यटकों के लिए ₹600, भारतीय नागरिकों के लिए ₹35",
    UNESCO: true
  },
  {
    id: "red-fort",
    name: "Red Fort",
    nameHi: "लाल किला",
    city: "Delhi",
    state: "Delhi",
    coordinates: [77.2410, 28.6562],
    description: "The Red Fort is a historic fort that served as the main residence of the emperors of the Mughal dynasty for nearly 200 years. Built in 1639 by Emperor Shah Jahan, it was the ceremonial and political center of the Mughal government. The massive red sandstone walls rise 33 meters above the surrounding area and encompass several impressive structures including the Diwan-i-Aam (Hall of Public Audience) and the Diwan-i-Khas (Hall of Private Audience).",
    descriptionHi: "लाल किला एक ऐतिहासिक किला है जो मुगल वंश के सम्राटों का लगभग 200 वर्षों तक मुख्य निवास था। 1639 में सम्राट शाहजहाँ द्वारा निर्मित, यह मुगल सरकार का औपचारिक और राजनीतिक केंद्र था। विशाल लाल बलुआ पत्थर की दीवारें आसपास के क्षेत्र से 33 मीटर ऊपर उठती हैं और दीवान-ए-आम (सार्वजनिक दरबार) तथा दीवान-ए-खास (विशेष दरबार) जैसी भव्य संरचनाओं को घेरती हैं।",
    yearBuilt: "1639-1648",
    dynasty: "Mughal Empire",
    dynastyHi: "मुगल साम्राज्य",
    primaryModel: "/models/red_fort_improved.glb",
    historicalModels: { past: "/models/red_fort_past.glb", ancient: "/models/red_fort.glb" },
    era: "medieval",
    facts: [
      "The fort derives its name from its massive red sandstone walls",
      "It was the ceremonial and political center of the Mughal government",
      "The Indian Prime Minister hoists the national flag here on Independence Day",
      "It houses several museums and was declared a UNESCO World Heritage Site in 2007"
    ],
    factsHi: [
      "किले का नाम इसकी विशाल लाल बलुआ पत्थर की दीवारों के कारण पड़ा",
      "यह मुगल सरकार का औपचारिक और राजनीतिक केंद्र था",
      "स्वतंत्रता दिवस पर भारतीय प्रधानमंत्री यहाँ राष्ट्रीय ध्वज फहराते हैं",
      "इसमें कई संग्रहालय हैं और 2007 में इसे यूनेस्को विश्व धरोहर स्थल घोषित किया गया"
    ],
    visitingHours: "9:30 AM to 4:30 PM (Closed on Mondays)",
    visitingHoursHi: "सुबह 9:30 से शाम 4:30 बजे तक (सोमवार को बंद)",
    bestMonths: [10, 11, 0, 1],
    bestTimeDesc: "November to February is the sweet spot — comfortable temperatures and clear skies make the red sandstone glow beautifully, and the museums inside are a pleasure to explore at a relaxed pace. Independence Day (15 August) brings a ceremonial flag-hoisting, but summer heat and monsoon humidity make extended visits draining.",
    bestTimeDescHi: "नवंबर से फ़रवरी सबसे अच्छा समय है — सुहावने तापमान और साफ़ आसमान में लाल बलुआ पत्थर खूबसूरती से चमकता है और अंदर के संग्रहालय आराम से देखे जा सकते हैं। स्वतंत्रता दिवस (15 अगस्त) पर झंडारोहण समारोह होता है, लेकिन गर्मी और मानसून की उमस लंबी यात्रा को थका देने वाली बनाती है।",
    timeline: [
      { year: "1639", event: "Emperor Shah Jahan orders construction of his new capital at Delhi", eventHi: "सम्राट शाहजहाँ ने दिल्ली में अपनी नई राजधानी के निर्माण का आदेश दिया" },
      { year: "1648", event: "Construction completed; Mughal court moves from Agra into the fort", eventHi: "निर्माण पूर्ण; मुगल दरबार आगरा से किले में आया" },
      { year: "1857", event: "British forces capture the fort after the Indian Rebellion; last Mughal emperor tried here", eventHi: "1857 के विद्रोह के बाद ब्रिटिश सेना का कब्जा; अंतिम मुगल सम्राट पर यहीं मुकदमा चला" },
      { year: "1947", event: "Indian flag raised here for the first time on Independence Day by Nehru", eventHi: "स्वतंत्रता दिवस पर नेहरू द्वारा पहली बार यहाँ तिरंगा फहराया गया" },
      { year: "2007", event: "Declared a UNESCO World Heritage Site", eventHi: "यूनेस्को विश्व धरोहर स्थल घोषित" },
    ],
    entryFee: "₹600 for foreign tourists, ₹35 for Indian citizens",
    entryFeeHi: "विदेशी पर्यटकों के लिए ₹600, भारतीय नागरिकों के लिए ₹35",
    UNESCO: true
  },
  {
    id: "hawa-mahal",
    name: "Hawa Mahal",
    nameHi: "हवा महल",
    city: "Jaipur",
    state: "Rajasthan",
    coordinates: [75.8267, 26.9239],
    description: "Hawa Mahal (Palace of Winds) is an extraordinary five-story palace in Jaipur, constructed of red and pink sandstone. Built in 1799 by Maharaja Sawai Pratap Singh, this architectural marvel features 953 small windows (jharokhas) with intricate lattice designs that create a honeycomb-like facade. The palace was ingeniously designed to allow royal women to observe street festivals and everyday city life without being seen, while also providing natural cooling through the breeze that flows through its many windows.",
    descriptionHi: "हवा महल (पवनों का महल) जयपुर में लाल और गुलाबी बलुआ पत्थर से बना एक असाधारण पाँच मंजिला महल है। 1799 में महाराजा सवाई प्रताप सिंह द्वारा निर्मित, इस वास्तुकला के चमत्कार में जटिल जाली के डिजाइन वाली 953 छोटी खिड़कियाँ (झरोखे) हैं जो मधुकोश जैसा मुखौटा बनाती हैं। महल को इस प्रकार बनाया गया था कि शाही महिलाएँ बिना दिखे गली के उत्सव और रोज़मर्रा का जीवन देख सकती थीं, साथ ही खिड़कियों से बहने वाली हवा प्राकृतिक शीतलता भी प्रदान करती थी।",
    yearBuilt: "1799",
    dynasty: "Rajput",
    dynastyHi: "राजपूत",
    primaryModel: "/models/hawa_mahal.glb",
    historicalModels: { past: "/models/hawa_mahal_past.glb", ancient: "/models/hawa_mahal_ancient.glb" },
    era: "medieval",
    facts: [
      "The palace has 953 small windows called jharokhas decorated with intricate latticework",
      "The unique five-story exterior is akin to a honeycomb with its 953 small windows",
      "It was built to allow royal ladies to observe everyday life and festivals without being seen",
      "The building has no foundation and is the tallest building in the world without a foundation"
    ],
    factsHi: [
      "महल में जटिल जालीकाम से सजी 953 छोटी खिड़कियाँ हैं जिन्हें झरोखा कहते हैं",
      "इसका पाँच मंजिला बाहरी भाग 953 झरोखों के साथ मधुमक्खी के छत्ते जैसा दिखता है",
      "इसे शाही महिलाओं के लिए बनाया गया था ताकि वे बिना दिखे रोज़मर्रा की ज़िंदगी देख सकें",
      "इमारत की कोई नींव नहीं है और यह बिना नींव के दुनिया की सबसे ऊंची इमारत है"
    ],
    visitingHours: "9:00 AM to 5:00 PM (All days)",
    visitingHoursHi: "सुबह 9:00 से शाम 5:00 बजे तक (सभी दिन)",
    bestMonths: [10, 11, 0, 1],
    bestTimeDesc: "November to February is when Jaipur truly shines — sunny days, cool nights, and the city's bazaars are at their most vibrant. The Jaipur Literature Festival in January draws visitors from around the world and adds a festive buzz. Summers are brutal (up to 48°C) and monsoon humidity dulls the palace's famous pink facade.",
    bestTimeDescHi: "नवंबर से फ़रवरी में जयपुर अपने सर्वश्रेष्ठ रूप में होता है — धूप भरे दिन, ठंडी रातें और रंग-बिरंगी बाज़ारें। जनवरी में जयपुर लिटरेचर फ़ेस्टिवल एक विशेष उत्सव का माहौल बनाता है। गर्मियाँ क्रूर होती हैं (48°C तक) और मानसून की उमस महल की गुलाबी दीवारों को फीका कर देती है।",
    timeline: [
      { year: "1799", event: "Built by Maharaja Sawai Pratap Singh of Jaipur", eventHi: "जयपुर के महाराजा सवाई प्रताप सिंह द्वारा निर्मित" },
      { year: "1800s", event: "Becomes a treasured icon of Jaipur's Pink City identity", eventHi: "जयपुर के पिंक सिटी की एक प्रिय पहचान बनी" },
      { year: "1876", event: "Jaipur painted pink to welcome the Prince of Wales, cementing the 'Pink City' name", eventHi: "वेल्स के राजकुमार के स्वागत में जयपुर को गुलाबी रंगा, 'पिंक सिटी' नाम पक्का हुआ" },
      { year: "2005", event: "Major restoration and conservation project undertaken by Rajasthan government", eventHi: "राजस्थान सरकार द्वारा बड़े पैमाने पर जीर्णोद्धार व संरक्षण परियोजना" },
      { year: "Present", event: "One of the most photographed monuments in Rajasthan, welcoming millions annually", eventHi: "राजस्थान के सर्वाधिक फोटो खिंचे जाने वाले स्मारकों में से एक, प्रतिवर्ष लाखों पर्यटकों का स्वागत" },
    ],
    entryFee: "₹200 for foreign tourists, ₹50 for Indian citizens",
    entryFeeHi: "विदेशी पर्यटकों के लिए ₹200, भारतीय नागरिकों के लिए ₹50",
    UNESCO: false
  },
  {
    id: "konark-sun-temple",
    name: "Konark Sun Temple",
    nameHi: "कोणार्क सूर्य मंदिर",
    city: "Konark",
    state: "Odisha",
    coordinates: [86.0945, 19.8876],
    description: "The Konark Sun Temple is a magnificent 13th-century CE temple at Konark, about 35 kilometers northeast from Puri on the coastline of Odisha, India. Dedicated to the Hindu Sun God Surya, this UNESCO World Heritage site is one of India's most stunning architectural marvels. The temple is designed in the form of a gigantic chariot of the Sun God with twelve pairs of elaborately carved stone wheels and pulled by seven horses. The temple's walls showcase exquisite stone carvings depicting various aspects of life, mythological narratives, and celestial beings.",
    descriptionHi: "कोणार्क सूर्य मंदिर ओडिशा के तट पर पुरी से लगभग 35 किलोमीटर उत्तर-पूर्व में स्थित एक भव्य 13वीं शताब्दी का मंदिर है। हिंदू सूर्य देवता सूर्य को समर्पित यह यूनेस्को विश्व धरोहर स्थल भारत के सबसे शानदार वास्तुशिल्प चमत्कारों में से एक है। मंदिर को सूर्य देव के विशाल रथ के रूप में डिजाइन किया गया है जिसमें बारह जोड़ी विस्तृत रूप से नक्काशीदार पत्थर के पहिये हैं और सात घोड़े इसे खींचते हैं। मंदिर की दीवारें जीवन के विभिन्न पहलुओं, पौराणिक कथाओं और खगोलीय प्राणियों को दर्शाती उत्कृष्ट पत्थर की नक्काशियों से सुशोभित हैं।",
    yearBuilt: "1250 CE",
    dynasty: "Eastern Ganga Dynasty",
    dynastyHi: "पूर्वी गंग वंश",
    primaryModel: "/models/konark_sun_temple.glb",
    historicalModels: { past: "/models/konark_sun_temple.glb", ancient: "/models/konark_ancient.glb" },
    era: "medieval",
    facts: [
      "The temple is designed in the form of a colossal chariot with 24 wheels, pulled by 7 horses",
      "The wheels of the temple are sundials which can be used to calculate time accurately",
      "The temple was built by King Narasimhadeva I of the Eastern Ganga Dynasty",
      "It is a UNESCO World Heritage Site since 1984"
    ],
    factsHi: [
      "मंदिर को 24 पहियों वाले विशाल रथ के रूप में बनाया गया है जिसे 7 घोड़े खींचते हैं",
      "मंदिर के पहिये सूक्ष्म घड़ियाँ हैं जिनसे सटीक समय की गणना की जा सकती है",
      "मंदिर का निर्माण पूर्वी गंग वंश के राजा नरसिंहदेव प्रथम ने करवाया था",
      "यह 1984 से यूनेस्को विश्व धरोहर स्थल है"
    ],
    visitingHours: "6:00 AM to 8:00 PM (All days)",
    visitingHoursHi: "सुबह 6:00 से रात 8:00 बजे तक (सभी दिन)",
    bestMonths: [10, 11, 0, 1],
    bestTimeDesc: "November to February is the prime season — Odisha's coast is cool and breezy, perfect for studying the temple's extraordinary stone carvings without the harsh summer glare. The Konark Dance Festival in December is a spectacular highlight, with classical performances held right before the temple. Avoid March–May (intense heat) and June–September (heavy coastal monsoon).",
    bestTimeDescHi: "नवंबर से फ़रवरी मुख्य मौसम है — ओडिशा का तट ठंडा और हवादार होता है, जो मंदिर की असाधारण पत्थर की नक्काशी को कड़ी गर्मी के बिना देखने के लिए एकदम सही है। दिसंबर में कोणार्क नृत्य महोत्सव एक शानदार आकर्षण है — मंदिर के सामने शास्त्रीय नृत्य प्रस्तुतियाँ होती हैं। मार्च–मई (तीव्र गर्मी) और जून–सितंबर (भारी तटीय मानसून) से बचें।",
    timeline: [
      { year: "1250 CE", event: "Construction begins under King Narasimhadeva I of the Eastern Ganga dynasty", eventHi: "पूर्वी गंग वंश के राजा नरसिंहदेव प्रथम के अधीन निर्माण शुरू" },
      { year: "1255 CE", event: "Temple construction completed; becomes a major pilgrimage and trading hub", eventHi: "मंदिर निर्माण पूर्ण; एक प्रमुख तीर्थ और व्यापार केंद्र बना" },
      { year: "~1568", event: "Mughal incursions; temple falls into neglect and structural sand-filling begins", eventHi: "मुगल आक्रमणों के बाद मंदिर उपेक्षित; रेत से भराई शुरू" },
      { year: "1902", event: "Archaeological Survey of India initiates first systematic conservation work", eventHi: "भारतीय पुरातत्व सर्वेक्षण ने पहला व्यवस्थित संरक्षण कार्य शुरू किया" },
      { year: "1984", event: "Designated a UNESCO World Heritage Site", eventHi: "यूनेस्को विश्व धरोहर स्थल घोषित" },
    ],
    entryFee: "₹600 for foreign tourists, ₹40 for Indian citizens",
    entryFeeHi: "विदेशी पर्यटकों के लिए ₹600, भारतीय नागरिकों के लिए ₹40",
    UNESCO: true
  },
  {
    id: "ajanta-ellora",
    name: "Ajanta & Ellora Caves",
    nameHi: "अजंता और एलोरा गुफाएँ",
    city: "Aurangabad",
    state: "Maharashtra",
    coordinates: [75.7010, 20.5500],
    description: "The Ajanta and Ellora Caves represent the pinnacle of ancient Indian rock-cut architecture and artistry. The Ajanta Caves comprise 30 Buddhist cave monuments carved into a horseshoe-shaped cliff, dating from the 2nd century BCE to about 480 CE. They feature exquisite paintings and sculptures depicting Buddha's life and Jataka tales, preserved remarkably through centuries of abandonment. The Ellora Caves, located about 100 km away, include 34 monasteries and temples spanning Buddhism, Hinduism, and Jainism, carved between the 6th and 10th centuries CE. The crown jewel of Ellora is the magnificent Kailasa Temple (Cave 16), the world's largest monolithic structure, carved top-down from a single massive rock, representing Mount Kailash, the abode of Lord Shiva.",
    descriptionHi: "अजंता और एलोरा की गुफाएँ प्राचीन भारतीय पाषाण-कला वास्तुकला और कलात्मकता की पराकाष्ठा का प्रतिनिधित्व करती हैं। अजंता की 30 बौद्ध गुफाएँ घोड़े की नाल के आकार की चट्टान में खुदी हुई हैं, जो दूसरी शताब्दी ईसा पूर्व से लगभग 480 ईस्वी तक की हैं। एलोरा की 34 मठों और मंदिरों में बौद्ध, हिंदू और जैन धर्म की झलक मिलती है। एलोरा का सबसे बड़ा रत्न कैलाश मंदिर (गुफा 16) है — एक ही विशाल चट्टान को ऊपर से नीचे काटकर बनाई गई दुनिया की सबसे बड़ी एकाश्म संरचना, जो भगवान शिव के निवास माउंट कैलाश का प्रतिनिधित्व करती है।",
    yearBuilt: "2nd century BCE to 7th century CE",
    dynasty: "Various dynasties including Satavahana, Vakataka, and Rashtrakuta",
    dynastyHi: "सातवाहन, वाकाटक और राष्ट्रकूट सहित विभिन्न वंश",
    primaryModel: "/models/ajanta_ellora.glb",
    historicalModels: { past: "/models/ajanta_ellora_past.glb", ancient: "/models/ajanta_ellora_ancient.glb" },
    era: "ancient",
    hotspots: [
      { name: "Shikhara Tower", description: "The tall pyramidal central tower of the Kailasa Temple, carved monolithically from the cliff above.", position: [0, 1.6, 0] },
      { name: "Carved Elephants", description: "Life-size elephants and lions sculpted in deep relief that appear to support the temple base.", position: [0.9, -0.7, 1.2] },
      { name: "Mandapa Hall", description: "The pillared front hall used for assembly and ritual, also carved from solid rock.", position: [0, 0.2, 1.6] },
      { name: "Wall Friezes", description: "Densely carved panels depicting Hindu deities, dancers and scenes from the Ramayana and Mahabharata.", position: [-1.4, 0.3, 0.4] }
    ],
    facts: [
      "The Ajanta Caves contain paintings and sculptures considered to be masterpieces of Buddhist religious art",
      "The Ellora Caves demonstrate the religious harmony prevalent during this period through dedicated Hindu, Buddhist, and Jain cave temples",
      "The Kailasa temple in Ellora is the largest monolithic rock excavation in the world",
      "Both cave complexes are UNESCO World Heritage Sites"
    ],
    factsHi: [
      "अजंता की गुफाओं में बौद्ध धार्मिक कला की उत्कृष्ट कृतियाँ मानी जाने वाली चित्रकारियाँ और मूर्तियाँ हैं",
      "एलोरा की गुफाएँ हिंदू, बौद्ध और जैन मंदिरों के माध्यम से उस काल की धार्मिक सद्भावना को दर्शाती हैं",
      "एलोरा में कैलाश मंदिर विश्व की सबसे बड़ी एकाश्म चट्टान खुदाई है",
      "दोनों गुफा परिसर यूनेस्को विश्व धरोहर स्थल हैं"
    ],
    visitingHours: "9:00 AM to 5:30 PM (Closed on Tuesdays)",
    visitingHoursHi: "सुबह 9:00 से शाम 5:30 बजे तक (मंगलवार को बंद)",
    bestMonths: [9, 10, 11, 0],
    bestTimeDesc: "October to January is the ideal window — October and November are the most beautiful as the surrounding Sahyadri hills are brilliantly lush green after the monsoon. December and January bring cool, dry comfort for extended exploration of the cave interiors. Avoid the hot, humid summer entirely — cave interiors become unbearably stifling.",
    bestTimeDescHi: "अक्तूबर से जनवरी सबसे अच्छा समय है — अक्तूबर और नवंबर में मानसून के बाद सह्याद्रि पहाड़ियाँ हरी-भरी होती हैं। दिसंबर और जनवरी में ठंडा, शुष्क मौसम गुफाओं की लंबी सैर के लिए आरामदायक है। गर्म, उमस भरी गर्मी में गुफाओं के अंदर असहनीय गर्मी होती है — उस समय आने से पूरी तरह बचें।",
    timeline: [
      { year: "2nd Century BCE", event: "Buddhist monks begin carving the Ajanta Caves in a horseshoe-shaped cliff", eventHi: "बौद्ध भिक्षुओं ने घोड़े की नाल आकार की चट्टान में अजंता गुफाएँ उकेरनी शुरू कीं" },
      { year: "6th–10th Century CE", event: "Ellora Caves carved spanning Buddhist, Hindu, and Jain traditions", eventHi: "एलोरा में बौद्ध, हिंदू और जैन परंपराओं की गुफाएँ उकेरी गईं" },
      { year: "~1100 CE", event: "Caves abandoned; forgotten for centuries as trade routes shifted", eventHi: "गुफाएँ छोड़ दी गईं; व्यापार मार्ग बदलने से सदियों तक भुला दी गईं" },
      { year: "1819", event: "British officer John Smith rediscovers the Ajanta Caves during a tiger hunt", eventHi: "ब्रिटिश अधिकारी जॉन स्मिथ ने बाघ के शिकार के दौरान अजंता गुफाएँ पुनः खोजीं" },
      { year: "1983 / 1984", event: "Ajanta and Ellora both designated UNESCO World Heritage Sites", eventHi: "अजंता और एलोरा दोनों को यूनेस्को विश्व धरोहर स्थल घोषित किया गया" },
    ],
    entryFee: "₹600 for foreign tourists, ₹40 for Indian citizens",
    entryFeeHi: "विदेशी पर्यटकों के लिए ₹600, भारतीय नागरिकों के लिए ₹40",
    UNESCO: true
  },
  {
    id: "gol-gumbaz",
    name: "Gol Gumbaz",
    nameHi: "गोल गुम्बज़",
    city: "Bijapur",
    state: "Karnataka",
    coordinates: [75.7101, 16.8302],
    description: "Gol Gumbaz is the mausoleum of Mohammed Adil Shah, Sultan of Bijapur. The tomb, located in Bijapur, Karnataka, was completed in 1656 and is remarkable for its massive dome, which is the second largest dome in the world after St. Peter's Basilica in Rome. The acoustics of the central chamber are particularly notable - even the faintest sound is echoed several times.",
    descriptionHi: "गोल गुम्बज़ बीजापुर के सुल्तान मोहम्मद आदिल शाह का मकबरा है। कर्नाटक के बीजापुर में स्थित यह मकबरा 1656 में पूरा हुआ और अपने विशाल गुंबद के लिए उल्लेखनीय है — रोम की सेंट पीटर की बेसिलिका के बाद दुनिया का दूसरा सबसे बड़ा गुंबद। केंद्रीय कक्ष की ध्वनिकी विशेष रूप से अनूठी है — यहाँ हल्की से हल्की आवाज़ भी कई बार गूंजती है, जिसे 'व्हिस्परिंग गैलरी' कहते हैं।",
    yearBuilt: "1626-1656",
    dynasty: "Adil Shahi Dynasty",
    dynastyHi: "आदिल शाही वंश",
    primaryModel: "/models/gol_gumbaz.glb",
    historicalModels: { past: "/models/gol_gumbaz_past.glb", ancient: "/models/gol_gumbaz_ancient.glb" },
    era: "medieval",
    facts: [
      "The dome of Gol Gumbaz is 44 meters in diameter, making it one of the largest single chamber spaces in the world",
      "The whispering gallery around the dome allows sounds to be heard across the diameter of the dome due to its acoustic properties",
      "The structure features four seven-story octagonal towers at each corner which served as minarets",
      "The name 'Gol Gumbaz' means 'circular dome' in reference to its distinctive architecture"
    ],
    factsHi: [
      "गोल गुम्बज़ का गुंबद 44 मीटर व्यास का है, जो दुनिया के सबसे बड़े एकल कक्ष स्थानों में से एक है",
      "गुंबद के चारों ओर व्हिस्परिंग गैलरी अपनी ध्वनि-विशेषताओं से आवाज़ को गुंबद के पार सुनने देती है",
      "संरचना में प्रत्येक कोने पर सात मंजिला अष्टभुजाकार मीनारें हैं जो मीनारों का काम करती थीं",
      "'गोल गुम्बज़' नाम का अर्थ है 'गोल गुंबद' जो इसकी विशिष्ट वास्तुकला को दर्शाता है"
    ],
    visitingHours: "6:00 AM to 6:00 PM (All days)",
    visitingHoursHi: "सुबह 6:00 से शाम 6:00 बजे तक (सभी दिन)",
    bestMonths: [10, 11, 0, 1],
    bestTimeDesc: "November to February brings crisp, dry air to the Deccan Plateau — ideal conditions for the famous whispering gallery, where even the faintest whisper travels the full circumference of the massive dome. Early winter mornings are the most magical. March–May is scorching, and the monsoon brings oppressive humidity.",
    bestTimeDescHi: "नवंबर से फ़रवरी में दक्कन पठार पर ठंडी, शुष्क हवा रहती है — प्रसिद्ध व्हिस्परिंग गैलरी के लिए आदर्श परिस्थितियाँ, जहाँ हल्की सी फुसफुसाहट भी विशाल गुंबद की परिधि में घूमती है। सर्दियों की शुरुआती सुबह सबसे जादुई होती है। मार्च–मई में झुलसाने वाली गर्मी और मानसून में उमस भरा मौसम होता है।",
    timeline: [
      { year: "1626", event: "Construction begins under Muhammad Adil Shah of the Adil Shahi dynasty", eventHi: "आदिल शाही वंश के मुहम्मद आदिल शाह के अधीन निर्माण शुरू" },
      { year: "1656", event: "Gol Gumbaz completed; Muhammad Adil Shah interred within the dome", eventHi: "गोल गुम्बज़ पूर्ण; मुहम्मद आदिल शाह को गुंबद के भीतर दफनाया गया" },
      { year: "1760", event: "Adil Shahi dynasty falls; monument enters a period of neglect", eventHi: "आदिल शाही वंश का पतन; स्मारक में उपेक्षा का दौर शुरू" },
      { year: "1881", event: "Archaeological Survey of India takes over and begins conservation", eventHi: "भारतीय पुरातत्व सर्वेक्षण ने देखरेख संभाली और संरक्षण शुरू किया" },
      { year: "1999", event: "Listed as a nationally protected monument of India", eventHi: "भारत के राष्ट्रीय महत्व के संरक्षित स्मारक के रूप में सूचीबद्ध" },
    ],
    entryFee: "₹300 for foreign tourists, ₹25 for Indian citizens",
    entryFeeHi: "विदेशी पर्यटकों के लिए ₹300, भारतीय नागरिकों के लिए ₹25",
    UNESCO: false
  },
  {
    id: "hampi",
    name: "Hampi",
    nameHi: "हम्पी",
    city: "Hampi",
    state: "Karnataka",
    coordinates: [76.4600, 15.3350],
    description: "Hampi is an ancient village in the southern Indian state of Karnataka, dotted with numerous ruined temple complexes from the Vijayanagara Empire. On the south bank of the river Tungabhadra, it contains the iconic Vittala Temple complex with its stone chariot and musical pillars, the Virupaksha Temple still used for worship, and a vast landscape of boulder-strewn hills and royal enclosures. Hampi was the capital of one of the greatest Hindu empires in Indian history during the 14th to 16th centuries.",
    descriptionHi: "हम्पी कर्नाटक में एक प्राचीन गाँव है जो विजयनगर साम्राज्य के अनेक खंडहर मंदिर परिसरों से सुशोभित है। तुंगभद्रा नदी के दक्षिणी तट पर स्थित, इसमें अपने पत्थर के रथ और संगीत स्तंभों के लिए प्रसिद्ध विट्ठल मंदिर परिसर, अभी भी पूजनीय विरूपाक्ष मंदिर, और बोल्डर-युक्त पहाड़ियों एवं शाही परिसरों का विशाल परिदृश्य है। हम्पी 14वीं से 16वीं शताब्दी के दौरान भारतीय इतिहास के सबसे महान हिंदू साम्राज्यों में से एक की राजधानी थी।",
    yearBuilt: "14th-16th century CE",
    dynasty: "Vijayanagara Empire",
    dynastyHi: "विजयनगर साम्राज्य",
    primaryModel: "/models/hampi.glb",
    historicalModels: { past: "/models/hampi.glb", ancient: "/models/hampi_ancient.glb" },
    era: "medieval",
    hotspots: [
      { name: "Stone Chariot", description: "The iconic Vittala Temple stone chariot, depicted on the Indian ₹50 note.", position: [0, 0.6, 0] },
      { name: "Carved Wheels", description: "Each wheel was carved to actually rotate around its axle.", position: [0.9, -0.6, 0.6] },
      { name: "Stone Elephants", description: "Two carved elephants pulling the chariot — originally horses, replaced later.", position: [0, -0.4, 1.2] }
    ],
    facts: [
      "Hampi was the capital of the Vijayanagara Empire and was once one of the richest and largest cities in the world",
      "The iconic stone chariot at the Vittala Temple is depicted on the Indian ₹50 currency note",
      "The Vittala Temple's musical pillars produce different musical notes when tapped",
      "The entire ruins of Hampi are a UNESCO World Heritage Site, spread across an area of more than 4,100 hectares"
    ],
    factsHi: [
      "हम्पी विजयनगर साम्राज्य की राजधानी थी और कभी दुनिया के सबसे अमीर और सबसे बड़े शहरों में से एक थी",
      "विट्ठल मंदिर का प्रतिष्ठित पत्थर का रथ भारतीय ₹50 के नोट पर अंकित है",
      "विट्ठल मंदिर के संगीत स्तंभों को थपथपाने पर अलग-अलग संगीत ध्वनियाँ निकलती हैं",
      "हम्पी के सभी खंडहर यूनेस्को विश्व धरोहर स्थल हैं जो 4,100 हेक्टेयर से अधिक क्षेत्र में फैले हैं"
    ],
    visitingHours: "6:00 AM to 6:00 PM (All days)",
    visitingHoursHi: "सुबह 6:00 से शाम 6:00 बजे तक (सभी दिन)",
    bestMonths: [9, 10, 11, 0],
    bestTimeDesc: "October to January is the best window — the sprawling ruins are most rewarding in cool weather when you can walk freely among the boulders and temples. November is particularly special as the Vijayanagara Festival brings classical music and cultural performances among the ancient stones. March–May becomes scorching, and the monsoon makes rocky terrain dangerously slippery.",
    bestTimeDescHi: "अक्तूबर से जनवरी सबसे अच्छा समय है — ठंडे मौसम में विशाल खंडहरों के बीच पत्थरों और मंदिरों में स्वतंत्र रूप से घूमा जा सकता है। नवंबर में विजयनगर उत्सव प्राचीन पत्थरों के बीच शास्त्रीय संगीत और सांस्कृतिक प्रस्तुतियाँ लेकर आता है। मार्च–मई में चिलचिलाती गर्मी और मानसून में चट्टानी भूमि फिसलन भरी हो जाती है।",
    timeline: [
      { year: "1336", event: "Vijayanagara Empire founded; Hampi established as the imperial capital", eventHi: "विजयनगर साम्राज्य की स्थापना; हम्पी को शाही राजधानी बनाया गया" },
      { year: "1400s", event: "City grows into one of the world's largest and wealthiest urban centres", eventHi: "शहर दुनिया के सबसे बड़े और धनी नगरों में गिना जाने लगा" },
      { year: "1510", event: "Vittala Temple complex construction commences under Krishna Deva Raya", eventHi: "कृष्णदेव राय के शासन में विट्ठल मंदिर परिसर का निर्माण शुरू" },
      { year: "1565", event: "Battle of Talikota — city sacked and burned; never rebuilt", eventHi: "तालीकोटा की लड़ाई — शहर लूटा और जलाया गया; दोबारा कभी न बना" },
      { year: "1986", event: "Designated a UNESCO World Heritage Site", eventHi: "यूनेस्को विश्व धरोहर स्थल घोषित" },
    ],
    entryFee: "₹600 for foreign tourists, ₹40 for Indian citizens",
    entryFeeHi: "विदेशी पर्यटकों के लिए ₹600, भारतीय नागरिकों के लिए ₹40",
    UNESCO: true
  },
  {
    id: "charminar",
    name: "Charminar",
    nameHi: "चारमीनार",
    city: "Hyderabad",
    state: "Telangana",
    coordinates: [78.4747, 17.3616],
    description: "The Charminar is a monument and mosque located in Hyderabad, Telangana, India. Constructed in 1591 by Muhammad Quli Qutb Shah, the fifth ruler of the Qutb Shahi dynasty, the iconic structure features four grand arches facing the four cardinal directions, with four ornate minarets at each corner soaring 56 metres above the ground. Built from granite and lime mortar, the Charminar is the most recognised symbol of Hyderabad and stands at the heart of the bustling old city, surrounded by the famous Laad Bazaar.",
    descriptionHi: "चारमीनार हैदराबाद, तेलंगाना में स्थित एक स्मारक और मस्जिद है। कुतुब शाही वंश के पाँचवें शासक मुहम्मद कुली कुतुब शाह द्वारा 1591 में निर्मित, इस प्रतिष्ठित संरचना में चारों कार्डिनल दिशाओं की ओर चार भव्य मेहराब और चार कोनों पर 56 मीटर ऊंची अलंकृत मीनारें हैं। ग्रेनाइट और चूने के मिश्रण से बनी चारमीनार हैदराबाद का सबसे पहचाना प्रतीक है और पुराने शहर के केंद्र में प्रसिद्ध लाड बाज़ार से घिरी स्थित है।",
    yearBuilt: "1591",
    dynasty: "Qutb Shahi Dynasty",
    dynastyHi: "कुतुब शाही वंश",
    primaryModel: "/models/charminar.glb",
    historicalModels: { past: "/models/charminar.glb", ancient: "/models/charminar.glb" },
    era: "medieval",
    hotspots: [
      { name: "Four Minarets", description: "Each of the four 56-metre minarets has four storeys with a tiered balcony.", position: [1.2, 1.2, 1.2] },
      { name: "Grand Arch", description: "Four 11-metre-tall pointed arches face the cardinal directions.", position: [0, -0.4, 1.4] },
      { name: "Mosque Above", description: "The upper floor houses Hyderabad's oldest still-active mosque.", position: [0, 0.8, 0] }
    ],
    facts: [
      "The Charminar gets its name from its four (char) minarets (minar), which rise to a height of 56 metres",
      "It was built to commemorate the eradication of a deadly plague from the city",
      "The monument is built from granite, limestone, mortar and pulverised marble",
      "A small mosque on the upper floor is the oldest in Hyderabad and is still in use today"
    ],
    factsHi: [
      "चारमीनार का नाम इसकी चार (चार) मीनारों (मीनार) से पड़ा है जो 56 मीटर की ऊँचाई तक जाती हैं",
      "इसे शहर से एक घातक प्लेग के उन्मूलन की स्मृति में बनाया गया था",
      "स्मारक ग्रेनाइट, चूना पत्थर, मोर्टार और चूर्णित संगमरमर से बनी है",
      "ऊपरी मंजिल पर एक छोटी मस्जिद है जो हैदराबाद की सबसे पुरानी है और आज भी उपयोग में है"
    ],
    visitingHours: "9:00 AM to 5:30 PM (All days)",
    visitingHoursHi: "सुबह 9:00 से शाम 5:30 बजे तक (सभी दिन)",
    bestMonths: [10, 11, 0, 1],
    bestTimeDesc: "November to February is the perfect time for Hyderabad — mild temperatures and dry air make wandering the bustling lanes around the Charminar an absolute pleasure. Visit at dusk for the dramatic evening illumination that turns the minarets golden. If you happen to be here during Ramzan, the surrounding bazaars come alive with an electric energy after sunset.",
    bestTimeDescHi: "नवंबर से फ़रवरी हैदराबाद के लिए आदर्श है — हल्का तापमान और शुष्क हवा चारमीनार के आसपास की हलचल भरी गलियों में घूमना सुखद बनाते हैं। सूर्यास्त के समय जाएं जब मीनारें सुनहरी रोशनी में नहाती हैं। रमज़ान में यहाँ होने का मौका मिले तो सूर्यास्त के बाद आसपास के बाज़ार जीवंत हो उठते हैं।",
    timeline: [
      { year: "1591", event: "Sultan Muhammad Quli Qutb Shah builds Charminar to mark Hyderabad's founding", eventHi: "सुल्तान मुहम्मद क़ुली क़ुतुब शाह ने हैदराबाद की स्थापना के उपलक्ष्य में चारमीनार बनवाया" },
      { year: "1687", event: "Aurangzeb captures Hyderabad; Charminar becomes part of Mughal Empire", eventHi: "औरंगज़ेब ने हैदराबाद पर कब्जा किया; चारमीनार मुगल साम्राज्य का हिस्सा बना" },
      { year: "1724", event: "Nizam dynasty establishes independent control over Hyderabad", eventHi: "निज़ाम वंश ने हैदराबाद पर स्वतंत्र नियंत्रण स्थापित किया" },
      { year: "1957", event: "Archaeological Survey of India undertakes major restoration work", eventHi: "भारतीय पुरातत्व सर्वेक्षण ने बड़ा जीर्णोद्धार कार्य किया" },
      { year: "Present", event: "One of India's most recognised landmarks; surrounded by vibrant bazaars", eventHi: "भारत के सबसे पहचाने जाने वाले स्मारकों में से एक; चारों ओर जीवंत बाज़ार" },
    ],
    entryFee: "₹250 for foreign tourists, ₹25 for Indian citizens",
    entryFeeHi: "विदेशी पर्यटकों के लिए ₹250, भारतीय नागरिकों के लिए ₹25",
    UNESCO: false
  },
  {
    id: "lotus-temple",
    name: "Lotus Temple",
    nameHi: "कमल मंदिर",
    city: "New Delhi",
    state: "Delhi",
    coordinates: [77.2588, 28.5535],
    description: "The Lotus Temple, located in New Delhi, is a Bahá'í House of Worship that was dedicated in December 1986. Notable for its flowerlike shape, it has become a prominent attraction in the city. Like all Bahá'í Houses of Worship, the Lotus Temple is open to all, regardless of religion or any other distinction. The building is composed of 27 free-standing marble-clad petals arranged in clusters of three to form nine sides, with nine doors opening onto a central hall capable of holding up to 2,500 people. Designed by Iranian architect Fariborz Sahba, the temple is surrounded by nine reflecting pools that beautifully mirror its petals.",
    descriptionHi: "कमल मंदिर नई दिल्ली में स्थित एक बहाई उपासना गृह है जिसे दिसंबर 1986 में समर्पित किया गया। अपने फूल जैसे आकार के लिए उल्लेखनीय, यह शहर का एक प्रमुख आकर्षण बन गया है। सभी बहाई उपासना गृहों की तरह, कमल मंदिर धर्म या किसी अन्य भेद के बिना सभी के लिए खुला है। इमारत 27 स्वतंत्र संगमरमर से मढ़ी पंखुड़ियों से बनी है जो तीन-तीन के समूह में नौ भुजाएँ बनाती हैं। ईरानी वास्तुकार फ़रीबोर्ज़ सहबा द्वारा डिज़ाइन किया गया, मंदिर नौ परावर्तक जलाशयों से घिरा है।",
    yearBuilt: "1980-1986",
    dynasty: "Modern (Bahá'í Faith)",
    dynastyHi: "आधुनिक (बहाई धर्म)",
    primaryModel: "/models/lotus_temple.glb",
    historicalModels: { past: "/models/lotus_temple.glb", ancient: "/models/lotus_temple.glb" },
    era: "modern",
    hotspots: [
      { name: "27 Marble Petals", description: "27 free-standing white marble petals in three concentric rings of nine.", position: [0, 1.2, 0] },
      { name: "Reflecting Pools", description: "Nine surrounding reflecting pools mirror the petals and naturally cool the building.", position: [1.6, -0.8, 0] }
    ],
    facts: [
      "The temple is composed of 27 free-standing marble-clad petals arranged in clusters of three to form nine sides",
      "It has won numerous architectural awards and has been featured in hundreds of newspaper and magazine articles",
      "The temple is open to people of all religions and is one of the most visited buildings in the world",
      "The structure is surrounded by nine reflecting pools that mirror its lotus-petal design"
    ],
    factsHi: [
      "मंदिर 27 स्वतंत्र संगमरमर-आच्छादित पंखुड़ियों से बना है जो तीन-तीन के समूह में नौ भुजाएँ बनाती हैं",
      "इसने अनेक वास्तुकला पुरस्कार जीते हैं और सैकड़ों अखबारों व पत्रिकाओं में इसकी चर्चा हुई है",
      "मंदिर सभी धर्मों के लोगों के लिए खुला है और दुनिया की सबसे अधिक देखी जाने वाली इमारतों में से एक है",
      "संरचना नौ परावर्तक जलाशयों से घिरी है जो इसके कमल की पंखुड़ी के डिजाइन को दर्शाते हैं"
    ],
    visitingHours: "9:00 AM to 5:30 PM (Closed on Mondays)",
    visitingHoursHi: "सुबह 9:00 से शाम 5:30 बजे तक (सोमवार को बंद)",
    bestMonths: [10, 11, 0, 1],
    bestTimeDesc: "November to February is ideal — Delhi's cool winters let you linger peacefully in the serene gardens and reflecting pools. Winter sunlight creates a warm golden glow on the white marble petals, and the calm atmosphere enhances the temple's meditative character. Arrive early on weekdays to avoid the considerable crowds this hugely popular landmark draws.",
    bestTimeDescHi: "नवंबर से फ़रवरी आदर्श है — दिल्ली की ठंडी सर्दियाँ शांत बगीचों और परावर्तक तालाबों में शांति से समय बिताने देती हैं। सर्दियों की धूप सफेद संगमरमर की पंखुड़ियों पर एक सुनहरी चमक पैदा करती है और शांत वातावरण मंदिर के ध्यानात्मक स्वरूप को और गहरा करता है। सप्ताह के दिनों में जल्दी पहुंचें।",
    timeline: [
      { year: "1953", event: "National Spiritual Assembly of India acquires the land in New Delhi", eventHi: "भारत की राष्ट्रीय आध्यात्मिक सभा ने नई दिल्ली में भूमि अर्जित की" },
      { year: "1976", event: "International design competition held; Iranian architect Fariborz Sahba selected", eventHi: "अंतर्राष्ट्रीय वास्तुकला प्रतियोगिता आयोजित; ईरानी वास्तुकार फ़रीबोर्ज़ सहबा चयनित" },
      { year: "1980", event: "Foundation stone laid; construction of the 27 marble petals commences", eventHi: "नींव का पत्थर रखा गया; 27 संगमरमर पंखुड़ियों का निर्माण शुरू" },
      { year: "1986", event: "Temple dedicated and opened to all — welcomes people of all faiths", eventHi: "मंदिर समर्पित एवं सभी धर्मों के लोगों के लिए खोला गया" },
      { year: "2001", event: "Receives Good Design Award; among the world's most visited buildings", eventHi: "गुड डिज़ाइन अवॉर्ड; दुनिया की सर्वाधिक देखी जाने वाली इमारतों में शुमार" },
    ],
    entryFee: "Free entry for all visitors",
    entryFeeHi: "सभी आगंतुकों के लिए निःशुल्क प्रवेश",
    UNESCO: false
  },
  {
    id: "gateway-of-india",
    name: "Gateway of India",
    nameHi: "गेटवे ऑफ इंडिया",
    city: "Mumbai",
    state: "Maharashtra",
    coordinates: [72.8347, 18.9220],
    description: "The Gateway of India is an arch-monument built in the early 20th century in the city of Mumbai, India. It was erected to commemorate the landing of King-Emperor George V, the first British monarch to visit India, in December 1911 at Strand Road near Wellington Fountain. Designed by architect George Wittet in the Indo-Saracenic style and completed in 1924, the monument is built from yellow basalt and reinforced concrete and stands 26 metres tall. Overlooking the Arabian Sea and the Mumbai Harbour, it has become one of the most iconic symbols of the city, often called the 'Taj Mahal of Mumbai'.",
    descriptionHi: "गेटवे ऑफ इंडिया मुंबई में 20वीं सदी की शुरुआत में बना एक मेहराब स्मारक है। इसे दिसंबर 1911 में भारत आने वाले पहले ब्रिटिश सम्राट किंग-एम्परर जॉर्ज पंचम के आगमन की स्मृति में बनाया गया था। इंडो-सारसेनिक शैली में वास्तुकार जॉर्ज विटेट द्वारा डिज़ाइन किया गया और 1924 में पूरा किया गया, यह स्मारक 26 मीटर ऊंचा है। अरब सागर और मुंबई बंदरगाह के सामने स्थित, इसे अक्सर 'मुंबई का ताज महल' कहा जाता है।",
    yearBuilt: "1913-1924",
    dynasty: "British Raj",
    dynastyHi: "ब्रिटिश राज",
    primaryModel: "/models/gateway_of_india.glb",
    historicalModels: { past: "/models/gateway_of_india.glb", ancient: "/models/gateway_of_india.glb" },
    era: "modern",
    hotspots: [
      { name: "Central Arch", description: "26 metres tall and about 15 metres wide, the focal point of the monument.", position: [0, 0.2, 1.2] },
      { name: "Corner Turrets", description: "Two octagonal turrets with ribbed domes flank the central arch.", position: [1.3, 1.1, 0.5] }
    ],
    facts: [
      "The Gateway of India was built to commemorate the visit of King George V and Queen Mary to Mumbai in 1911",
      "It was designed by Scottish architect George Wittet in the Indo-Saracenic architectural style",
      "The monument stands 26 metres (85 feet) tall, with a central arch about 15 metres in diameter",
      "It served as the ceremonial entrance for British Viceroys and was the symbolic 'last gateway' from which the final British troops left India in 1948"
    ],
    factsHi: [
      "गेटवे ऑफ इंडिया 1911 में किंग जॉर्ज पंचम और क्वीन मैरी की मुंबई यात्रा की स्मृति में बनाया गया था",
      "इसे स्कॉटिश वास्तुकार जॉर्ज विटेट ने इंडो-सारसेनिक वास्तुशैली में डिज़ाइन किया था",
      "स्मारक 26 मीटर (85 फुट) ऊँचा है और मुख्य मेहराब लगभग 15 मीटर व्यास का है",
      "यह ब्रिटिश वायसरायों के लिए औपचारिक प्रवेश द्वार था और 1948 में यहीं से अंतिम ब्रिटिश सैनिक भारत छोड़ गए"
    ],
    visitingHours: "Open 24 hours (All days)",
    visitingHoursHi: "24 घंटे खुला (सभी दिन)",
    bestMonths: [10, 11, 0, 1],
    bestTimeDesc: "November to February is Mumbai's most pleasant window — the coastal city finally cools to comfortable temperatures, making a boat trip to Elephanta Island or simply sitting at the waterfront a delightful experience. The Arabian Sea is calm and visibility is excellent. Avoid May–September when the monsoon brings heavy rain and rough harbour waters.",
    bestTimeDescHi: "नवंबर से फ़रवरी मुंबई का सबसे सुहावना समय है — तटीय शहर आरामदायक तापमान तक ठंडा हो जाता है और एलीफेंटा द्वीप की नाव यात्रा या बंदरगाह के किनारे बैठना दोनों ही आनंददायक होते हैं। अरब सागर शांत रहता है और दृश्यता उत्कृष्ट होती है। मई–सितंबर में भारी मानसूनी बारिश और तेज़ समुद्री लहरों से बचें।",
    timeline: [
      { year: "1911", event: "King George V and Queen Mary visit Bombay; foundation stone laid", eventHi: "किंग जॉर्ज पंचम और क्वीन मैरी की बंबई यात्रा; नींव का पत्थर रखा" },
      { year: "1913", event: "Construction begins under Scottish architect George Wittet", eventHi: "स्कॉटिश वास्तुकार जॉर्ज विटेट के निर्देशन में निर्माण शुरू" },
      { year: "1924", event: "Gateway of India officially inaugurated by Viceroy Rufus Isaacs", eventHi: "वायसरॉय रूफस आइज़ैक्स द्वारा गेटवे ऑफ इंडिया का आधिकारिक उद्घाटन" },
      { year: "1948", event: "Last British troops march through and leave India through the Gateway", eventHi: "अंतिम ब्रिटिश सैनिक यहाँ से मार्च करके भारत छोड़ गए" },
      { year: "Present", event: "Iconic symbol of Mumbai; departure point for Elephanta Island ferries", eventHi: "मुंबई का प्रतिष्ठित प्रतीक; एलीफेंटा द्वीप की नौकाओं का प्रस्थान बिंदु" },
    ],
    entryFee: "Free entry for all visitors",
    entryFeeHi: "सभी आगंतुकों के लिए निःशुल्क प्रवेश",
    UNESCO: false
  },
  {
    id: "golden-temple",
    name: "Golden Temple",
    nameHi: "स्वर्ण मंदिर",
    city: "Amritsar",
    state: "Punjab",
    coordinates: [74.8765, 31.6200],
    description: "The Golden Temple, also known as Sri Harmandir Sahib, is the holiest gurdwara and the most important pilgrimage site of Sikhism. Located in the city of Amritsar, Punjab, the temple sits on a square platform in the middle of the Amrit Sarovar (Pool of Nectar), connected to the surrounding marble causeway by a narrow bridge. The upper floors of the temple are covered with approximately 750 kg of pure gold leaf, giving it the distinctive shining golden appearance from which it gets its popular name. Built by Guru Arjan, the fifth Sikh Guru, in the late 16th century, it features a unique blend of Hindu and Islamic architectural styles and welcomes visitors of all faiths.",
    descriptionHi: "स्वर्ण मंदिर, जिसे श्री हरमंदिर साहिब के नाम से भी जाना जाता है, सिखों का सबसे पवित्र गुरुद्वारा और सबसे महत्वपूर्ण तीर्थस्थल है। अमृतसर में अमृत सरोवर (अमृत के तालाब) के मध्य में एक चौकोर मंच पर बने इस मंदिर तक एक संकरे पुल से पहुँचा जाता है। मंदिर की ऊपरी मंजिलें लगभग 750 किलोग्राम शुद्ध सोने की पत्तियों से ढकी हैं। पाँचवें सिख गुरु, गुरु अर्जन द्वारा 16वीं सदी के अंत में निर्मित, यह हिंदू और इस्लामी वास्तुशैलियों का अनूठा मेल प्रस्तुत करता है और सभी आस्थाओं के लोगों का स्वागत करता है।",
    yearBuilt: "1581-1604",
    dynasty: "Sikh Empire",
    dynastyHi: "सिख साम्राज्य",
    primaryModel: "/models/golden_temple.glb",
    historicalModels: { past: "/models/golden_temple.glb", ancient: "/models/golden_temple_ancient.glb" },
    era: "medieval",
    hotspots: [
      { name: "Gilded Dome", description: "The central onion-shaped dome covered in roughly 750 kg of pure gold leaf.", position: [0, 1.4, 0] },
      { name: "Causeway", description: "The Guru's Bridge — a marble causeway linking the temple to the surrounding parikrama.", position: [0, -0.6, 1.6] },
      { name: "Sarovar", description: "The Amrit Sarovar (Pool of Nectar) surrounding the temple.", position: [1.8, -0.9, 0] }
    ],
    facts: [
      "The upper floors of the temple are covered with approximately 750 kg of pure gold leaf",
      "The temple's langar (community kitchen) serves free vegetarian meals to up to 100,000 people daily, regardless of religion or background",
      "It has four entrances on each side, symbolising openness to people from all directions and walks of life",
      "The foundation stone was laid by the Muslim Sufi saint Mian Mir, reflecting the temple's message of religious harmony"
    ],
    factsHi: [
      "मंदिर की ऊपरी मंजिलें लगभग 750 किलोग्राम शुद्ध सोने की पत्तियों से ढकी हैं",
      "मंदिर का लंगर (सामुदायिक रसोई) धर्म या पृष्ठभूमि के बिना प्रतिदिन 1,00,000 लोगों को निःशुल्क भोजन कराता है",
      "इसके चारों तरफ चार प्रवेश द्वार हैं जो सभी दिशाओं के लोगों के लिए खुलेपन का प्रतीक हैं",
      "नींव का पत्थर मुस्लिम सूफी संत मियाँ मीर ने रखा था जो धार्मिक सद्भावना के संदेश को दर्शाता है"
    ],
    visitingHours: "Open 24 hours (All days)",
    visitingHoursHi: "24 घंटे खुला (सभी दिन)",
    bestMonths: [1, 2, 3, 9, 10],
    bestTimeDesc: "February to April and October to November are the two golden windows — spring brings Baisakhi (13–14 April), the most joyous festival at the Golden Temple, while October and November offer post-monsoon clarity with stunning golden reflections on the Amrit Sarovar. Amritsar summers are intense (45°C+) and winters can be bitterly cold with heavy fog that obscures the gold.",
    bestTimeDescHi: "फ़रवरी से अप्रैल और अक्तूबर से नवंबर दो सबसे अच्छे समय हैं — वसंत में बैसाखी (13-14 अप्रैल) स्वर्ण मंदिर का सबसे आनंदमय पर्व है, जबकि अक्तूबर और नवंबर में मानसून के बाद अमृत सरोवर में सोने का शानदार प्रतिबिंब दिखता है। अमृतसर की गर्मी तीव्र होती है (45°C+) और सर्दियाँ कड़ाके की ठंड व घने कोहरे के साथ आती हैं जो सोने की चमक को ढक देता है।",
    timeline: [
      { year: "1581", event: "Guru Ram Das founds Amritsar and begins excavating the sacred Sarovar", eventHi: "गुरु राम दास ने अमृतसर शहर की स्थापना की और पवित्र सरोवर खोदना शुरू किया" },
      { year: "1604", event: "Guru Arjan completes the temple and enshrines the Adi Granth within", eventHi: "गुरु अर्जन ने मंदिर पूर्ण किया और आदि ग्रंथ स्थापित किया" },
      { year: "1762", event: "Ahmed Shah Durrani destroys the temple; Sikh warriors rebuild it within months", eventHi: "अहमद शाह दुर्रानी ने मंदिर ध्वस्त किया; सिख योद्धाओं ने महीनों में पुनर्निर्माण किया" },
      { year: "1830", event: "Maharaja Ranjit Singh overlays the upper floors with 750 kg of pure gold leaf", eventHi: "महाराजा रणजीत सिंह ने ऊपरी मंजिलों पर 750 किलो शुद्ध सोने की पत्तियाँ चढ़वाईं" },
      { year: "Present", event: "Serves ~100,000 free meals daily and welcomes people of all faiths", eventHi: "प्रतिदिन ~1,00,000 लोगों को निःशुल्क भोजन और सभी आस्थाओं का स्वागत" },
    ],
    entryFee: "Free entry for all visitors",
    entryFeeHi: "सभी आगंतुकों के लिए निःशुल्क प्रवेश",
    UNESCO: false
  },
  {
    id: "mysore-palace",
    name: "Mysore Palace",
    nameHi: "मैसूर महल",
    city: "Mysore",
    state: "Karnataka",
    coordinates: [76.6551, 12.3052],
    description: "The Mysore Palace, officially the Mysuru Palace, is a historical palace and royal residence in Mysore, Karnataka. It is the official residence of the Wadiyar dynasty and the seat of the Kingdom of Mysore. After the old wooden palace was destroyed by fire in 1897, the 24th Wadiyar king Krishnaraja Wadiyar IV commissioned English architect Henry Irwin to build a new one. The three-storey structure in the Indo-Saracenic style, completed in 1912, blends Hindu, Muslim, Rajput, and Gothic elements under marble domes, towers, and ornate arches. It is illuminated by nearly 100,000 light bulbs every Sunday and on festivals, creating one of India's most breathtaking spectacles.",
    descriptionHi: "मैसूर महल, आधिकारिक रूप से मैसुरु महल, कर्नाटक के मैसूर में स्थित एक ऐतिहासिक महल और शाही निवास है। 1897 में पुराने लकड़ी के महल में आग लगने के बाद 24वें वाडियार राजा कृष्णराज वाडियार IV ने अंग्रेज़ वास्तुकार हेनरी इरविन से इंडो-सारसेनिक शैली में नया महल बनवाया। 1912 में पूर्ण यह तीन मंजिला संरचना संगमरमर के गुंबदों, मीनारों और भव्य मेहराबों के साथ भारत के सबसे शानदार शाही आवासों में से एक है।",
    yearBuilt: "1897–1912",
    dynasty: "Kingdom of Mysore (Wadiyar)",
    dynastyHi: "मैसूर राज्य (वाडियार)",
    primaryModel: "/models/mysore_palace.glb",
    historicalModels: { past: "/models/mysore_palace.glb", ancient: "/models/mysore_palace_ancient.glb" },
    era: "modern",
    hotspots: [
      { name: "Kalyana Mandapa", description: "The Royal Wedding Hall with a stunning stained-glass ceiling imported from Scotland and a mosaic floor with intricate geometric patterns.", position: [0, 0.3, 1.2] },
      { name: "Amba Vilas Darbar Hall", description: "The grand audience hall where the king held court — adorned with cast-iron pillars, stained glass, and paintings by Raja Ravi Varma.", position: [1.2, 1.0, 0.5] },
      { name: "Doll's Pavilion", description: "A display gallery housing the royal family's prized collection of dolls, palanquins, and ceremonial elephants accumulated over generations.", position: [-1.0, 0.5, 0.8] },
    ],
    facts: [
      "The palace is illuminated by approximately 100,000 light bulbs every Sunday evening and on public holidays",
      "It is the second most visited monument in India after the Taj Mahal, attracting over 6 million visitors annually",
      "Designed by British architect Henry Irwin in the Indo-Saracenic style, blending Hindu, Muslim, Rajput, and Gothic architectural elements",
      "The Mysore Dasara festival held here every October is one of the most spectacular royal celebrations in the world, featuring a grand elephant procession"
    ],
    factsHi: [
      "महल को हर रविवार शाम और सार्वजनिक छुट्टियों पर लगभग 1,00,000 बल्बों से रोशन किया जाता है",
      "ताज महल के बाद यह भारत में दूसरा सबसे अधिक देखा जाने वाला स्मारक है, जहाँ प्रतिवर्ष 60 लाख से अधिक पर्यटक आते हैं",
      "ब्रिटिश वास्तुकार हेनरी इरविन ने इसे इंडो-सारसेनिक शैली में डिज़ाइन किया, जिसमें हिंदू, मुस्लिम, राजपूत और गोथिक तत्वों का मेल है",
      "यहाँ हर अक्तूबर में होने वाला मैसूर दशहरा उत्सव दुनिया के सबसे शानदार शाही उत्सवों में से एक है"
    ],
    visitingHours: "10:00 AM to 5:30 PM (All days)",
    visitingHoursHi: "सुबह 10:00 से शाम 5:30 बजे तक (सभी दिन)",
    bestMonths: [9, 10, 11, 0],
    bestTimeDesc: "October to January is the prime time — the weather is pleasant and the famous Mysore Dasara festival (October) transforms the palace into a sea of golden light with a grand elephant procession. December and January offer comfortable winter temperatures. Avoid March–May when Karnataka heats up considerably.",
    bestTimeDescHi: "अक्तूबर से जनवरी सबसे अच्छा समय है — मौसम सुहावना होता है और मैसूर दशहरा उत्सव (अक्तूबर) महल को सुनहरी रोशनी और भव्य हाथी जुलूस से जीवंत कर देता है। दिसंबर और जनवरी में आरामदायक सर्दियों का मौसम रहता है। मार्च–मई में काफी गर्मी पड़ती है।",
    timeline: [
      { year: "1399", event: "Yaduraya founds the Kingdom of Mysore; Mysore established as seat of the Wadiyar dynasty", eventHi: "यदुराय ने मैसूर राज्य की स्थापना की; मैसूर वाडियार वंश की राजधानी बना" },
      { year: "1612", event: "An earlier version of the palace built by Wadiyar rulers on the same hilltop site", eventHi: "वाडियार शासकों ने इसी पहाड़ी स्थल पर महल का पहला संस्करण बनाया" },
      { year: "1897", event: "The old wooden palace burns down during a princess's wedding; Henry Irwin commissioned", eventHi: "राजकुमारी के विवाह के दौरान पुराना लकड़ी का महल जल गया; हेनरी इरविन को नया महल डिज़ाइन करने को नियुक्त किया गया" },
      { year: "1912", event: "The new Indo-Saracenic palace is completed and inaugurated", eventHi: "इंडो-सारसेनिक नया महल पूर्ण एवं उद्घाटित" },
      { year: "1970", event: "The palace is acquired by the Government of Karnataka and opened to the public", eventHi: "महल कर्नाटक सरकार ने अधिग्रहीत किया और जनता के लिए खोला" },
    ],
    entryFee: "₹100 (Adults), ₹10 (Children)",
    entryFeeHi: "₹100 (वयस्क), ₹10 (बच्चे)",
    UNESCO: false
  },
  {
    id: "meenakshi-temple",
    name: "Meenakshi Amman Temple",
    nameHi: "मीनाक्षी अम्मान मंदिर",
    city: "Madurai",
    state: "Tamil Nadu",
    coordinates: [78.1197, 9.9195],
    description: "The Meenakshi Amman Temple is a historic Hindu temple on the southern bank of the Vaigai River in Madurai, Tamil Nadu. Dedicated to the goddess Meenakshi (a form of Parvati) and her consort Sundareshvara (a form of Shiva), it forms the heart of the 2,500-year-old city. The 14-acre complex has 14 gopurams (gateway towers) ranging from 45 to 52 metres, covered with thousands of brightly painted mythological sculptures. The tallest, the Rajagopuram, rises 52 metres and carries 1,511 carved figures. With up to 20,000 visitors daily, it is one of the most active living temples in the world.",
    descriptionHi: "मीनाक्षी अम्मान मंदिर तमिलनाडु के मदुरई में वैगई नदी के दक्षिणी तट पर स्थित एक ऐतिहासिक हिंदू मंदिर है। देवी मीनाक्षी और सुंदरेश्वर को समर्पित, यह 2,500 वर्ष पुराने मदुरई शहर का दिल है। 14 एकड़ के परिसर में 45 से 52 मीटर ऊँचे 14 गोपुरम हैं जो हज़ारों रंगीन पौराणिक मूर्तियों से ढके हैं। सबसे ऊँचे राजगोपुरम में 1,511 नक्काशीदार मूर्तियाँ हैं।",
    yearBuilt: "7th century CE (major rebuild 1623–1655)",
    dynasty: "Nayak Kingdom",
    dynastyHi: "नायक राज्य",
    primaryModel: "/models/meenakshi_temple.glb",
    historicalModels: { past: "/models/meenakshi_temple.glb", ancient: "/models/meenakshi_ancient.glb" },
    era: "medieval",
    hotspots: [
      { name: "Rajagopuram", description: "The towering 52-metre south gateway adorned with 1,511 painted stone sculptures of deities — the visual crown of the entire temple complex.", position: [0, 1.5, 0.5] },
      { name: "Pottramarai Kulam", description: "The Golden Lotus Tank — a sacred pool at the heart of the complex, believed to be the site of Shiva and Parvati's celestial wedding.", position: [0.5, -0.5, 1.2] },
      { name: "Thousand-Pillar Hall", description: "The Hall of a Thousand Pillars (actually 985) features intricately carved columns and houses a small museum of temple sculpture and art.", position: [-1.2, 0.3, 0.8] },
    ],
    facts: [
      "The temple complex has 14 gopurams (gateway towers) — the tallest rises 52 metres and is adorned with 1,511 carved stone sculptures",
      "Around 15,000–20,000 pilgrims and tourists visit every day; during festivals this rises to over 25,000",
      "The temple has over 33,000 sculptures and is one of the largest active temple complexes in India",
      "The Meenakshi Tirukalyanam (divine wedding) festival held every April–May draws hundreds of thousands of devotees from across India"
    ],
    factsHi: [
      "मंदिर परिसर में 14 गोपुरम हैं, सबसे ऊँचा 52 मीटर ऊँचा है और 1,511 नक्काशीदार मूर्तियों से सजा है",
      "प्रतिदिन 15,000–20,000 तीर्थयात्री और पर्यटक आते हैं; त्योहारों के दौरान यह 25,000 से अधिक हो जाता है",
      "मंदिर में 33,000 से अधिक मूर्तियाँ हैं और यह भारत के सबसे बड़े सक्रिय मंदिर परिसरों में से एक है",
      "हर अप्रैल–मई में मीनाक्षी तिरुकल्याणम (दिव्य विवाह) उत्सव में पूरे भारत से लाखों श्रद्धालु आते हैं"
    ],
    visitingHours: "5:00 AM to 12:30 PM, 4:00 PM to 9:30 PM (All days)",
    visitingHoursHi: "सुबह 5:00 से दोपहर 12:30 बजे तक और शाम 4:00 से रात 9:30 बजे तक (सभी दिन)",
    bestMonths: [10, 11, 0, 1],
    bestTimeDesc: "November to February is ideal — Tamil Nadu winters are warm but manageable, making temple exploration comfortable. January's Pongal harvest festival adds a layer of cultural richness to any visit. Avoid April–June when temperatures climb above 40°C and Madurai's city-centre humidity becomes intense.",
    bestTimeDescHi: "नवंबर से फ़रवरी आदर्श है — तमिलनाडु की सर्दियाँ गर्म लेकिन सहनीय होती हैं। जनवरी में पोंगल फसल उत्सव यात्रा को सांस्कृतिक रूप से समृद्ध बनाता है। अप्रैल–जून से बचें जब तापमान 40°C से ऊपर जाता है।",
    timeline: [
      { year: "~3rd century BCE", event: "Early temple established; Madurai becomes a major Pandya trading and cultural capital", eventHi: "प्रारंभिक मंदिर स्थापित; मदुरई एक प्रमुख पांड्य व्यापार और सांस्कृतिक केंद्र बना" },
      { year: "7th century CE", event: "Temple praised by Sangam poets; becomes a central Shaivite pilgrimage destination", eventHi: "संगम कवियों द्वारा मंदिर की प्रशंसा; प्रमुख शैव तीर्थ केंद्र बना" },
      { year: "1310", event: "Malik Kafur's invasion destroys much of the original temple; gradual reconstruction begins", eventHi: "मलिक काफूर के आक्रमण में मंदिर का अधिकांश भाग नष्ट; क्रमिक पुनर्निर्माण शुरू" },
      { year: "1623–1655", event: "Nayak ruler Tirumalai Nayak undertakes the major reconstruction and expansion of the gopurams", eventHi: "नायक शासक तिरुमलाई नायक ने गोपुरमों का प्रमुख पुनर्निर्माण और विस्तार कराया" },
      { year: "Present", event: "One of the most visited Hindu temples in the world and a living cultural institution of Tamil Nadu", eventHi: "दुनिया के सर्वाधिक देखे जाने वाले हिंदू मंदिरों में से एक और तमिलनाडु की एक जीवंत सांस्कृतिक संस्था" },
    ],
    entryFee: "Free entry (Camera fee ₹50)",
    entryFeeHi: "निःशुल्क प्रवेश (कैमरा शुल्क ₹50)",
    UNESCO: false
  },
  {
    id: "khajuraho-temples",
    name: "Khajuraho Temples",
    nameHi: "खजुराहो मंदिर",
    city: "Khajuraho",
    state: "Madhya Pradesh",
    coordinates: [79.9199, 24.8318],
    description: "The Khajuraho Group of Monuments is a collection of Hindu and Jain temples in Chhatarpur district, Madhya Pradesh, built by the Chandela dynasty between 950 and 1050 CE. The temples are renowned for their nagara-style architectural symbolism and extraordinarily detailed erotic sculptures. Of the original 85 temples, only 25 survive. Divided into western, eastern, and southern groups, the temples are dedicated to Shiva, Vishnu, and other deities, and represent the pinnacle of medieval Indian artistic expression. They were lost to the wider world for centuries, hidden in dense jungle, until rediscovered by British surveyor T.S. Burt in 1838.",
    descriptionHi: "खजुराहो स्मारक समूह मध्य प्रदेश के छतरपुर जिले में 950 से 1050 ई. के बीच चंदेल वंश द्वारा बनाए गए हिंदू और जैन मंदिरों का संग्रह है। नागर शैली की वास्तुकला और विस्तृत कामुक मूर्तियों के लिए प्रसिद्ध, मूल 85 मंदिरों में से केवल 25 बचे हैं। शिव, विष्णु और अन्य देवताओं को समर्पित ये मंदिर मध्यकालीन भारतीय कलात्मक अभिव्यक्ति के शिखर का प्रतिनिधित्व करते हैं।",
    yearBuilt: "950–1050 CE",
    dynasty: "Chandela Dynasty",
    dynastyHi: "चंदेल वंश",
    primaryModel: "/models/khajuraho_temples.glb",
    historicalModels: { past: "/models/khajuraho_temples.glb", ancient: "/models/khajuraho_ancient.glb" },
    era: "medieval",
    hotspots: [
      { name: "Kandariya Mahadev Temple", description: "The largest and most ornate temple, dedicated to Shiva, soaring 30 metres — considered the pinnacle of Chandela artistic achievement.", position: [0, 1.2, 0.5] },
      { name: "Erotic Sculptures", description: "The outer walls are adorned with explicit carvings — representing tantric philosophy, the cycle of life, and Kama as one of the four aims of human existence.", position: [1.0, 0.5, 1.0] },
      { name: "Lakshmana Temple", description: "One of the best-preserved western group temples, dedicated to Vishnu, with a continuous narrative frieze of sculptures encircling the entire structure.", position: [-1.0, 0.3, 0.8] },
    ],
    facts: [
      "Of the original 85 temples built by the Chandela dynasty, only 25 survive into the 21st century",
      "The temples were lost in dense jungle for several centuries until rediscovered by British surveyor T.S. Burt in 1838",
      "The erotic sculptures represent only about 10% of the total decoration — the remaining 90% depicts deities, celestial dancers, and scenes of daily life",
      "Designated a UNESCO World Heritage Site in 1986 for extraordinary artistic and architectural achievement"
    ],
    factsHi: [
      "चंदेल वंश द्वारा बनाए गए मूल 85 मंदिरों में से केवल 25 21वीं सदी में बचे हैं",
      "मंदिर सदियों तक घने जंगल में खो गए थे, 1838 में ब्रिटिश सर्वेक्षक टी.एस. बर्ट ने इन्हें फिर से खोजा",
      "कामुक मूर्तियाँ कुल सजावट का केवल 10% हैं — शेष 90% देवताओं, अप्सराओं और दैनिक जीवन को दर्शाती हैं",
      "असाधारण कलात्मक और वास्तुकला उपलब्धि के लिए 1986 में यूनेस्को विश्व धरोहर स्थल घोषित"
    ],
    visitingHours: "Sunrise to Sunset (All days)",
    visitingHoursHi: "सूर्योदय से सूर्यास्त तक (सभी दिन)",
    bestMonths: [10, 11, 0, 1],
    bestTimeDesc: "November to February is perfect — Madhya Pradesh winters are cool and dry, ideal for wandering among the temples and studying the exquisite carvings at length. The Khajuraho Dance Festival in February–March brings spectacular classical Indian dance performances with the floodlit temples as a backdrop. Avoid April–June when the heat becomes punishing.",
    bestTimeDescHi: "नवंबर से फ़रवरी एकदम सही समय है — मध्य प्रदेश की सर्दियाँ ठंडी और शुष्क होती हैं। फ़रवरी–मार्च में खजुराहो नृत्य महोत्सव में रोशन मंदिरों की पृष्ठभूमि में शास्त्रीय नृत्य की शानदार प्रस्तुति होती है। अप्रैल–जून की कड़ी गर्मी से बचें।",
    timeline: [
      { year: "831 CE", event: "Chandela dynasty founded by Nannuka; begins consolidating power in central India", eventHi: "नन्नुक द्वारा चंदेल वंश की स्थापना; मध्य भारत में शक्ति को मज़बूत करना शुरू" },
      { year: "950 CE", event: "Major temple construction begins under Chandela king Yashovarman", eventHi: "चंदेल राजा यशोवर्मन के अधीन प्रमुख मंदिर निर्माण शुरू" },
      { year: "1050 CE", event: "Final temples completed; the complex reaches its zenith with 85 temples spanning 20 km²", eventHi: "अंतिम मंदिर पूर्ण; 20 वर्ग किमी में 85 मंदिरों के साथ परिसर अपने शिखर पर" },
      { year: "1838", event: "British surveyor T.S. Burt rediscovers the temples hidden in dense forest", eventHi: "ब्रिटिश सर्वेक्षक टी.एस. बर्ट ने घने जंगल में छिपे मंदिरों को फिर से खोजा" },
      { year: "1986", event: "Designated a UNESCO World Heritage Site for extraordinary artistic achievement", eventHi: "असाधारण कलात्मक उपलब्धि के लिए यूनेस्को विश्व धरोहर स्थल घोषित" },
    ],
    entryFee: "₹40 (Indians), ₹600 (Foreigners)",
    entryFeeHi: "₹40 (भारतीय), ₹600 (विदेशी)",
    UNESCO: true
  },
  {
    id: "sanchi-stupa",
    name: "Sanchi Stupa",
    nameHi: "सांची स्तूप",
    city: "Sanchi",
    state: "Madhya Pradesh",
    coordinates: [77.7395, 23.4795],
    description: "The Sanchi Stupa is one of the oldest stone structures in India and a crown jewel of Buddhist architecture. The Great Stupa at Sanchi was originally commissioned by the Maurya Emperor Ashoka in the 3rd century BCE to enshrine the relics of the Buddha. Enlarged and embellished over subsequent centuries, it now stands 16.5 metres tall with a circumference of nearly 120 metres. The four elaborately carved toranas (gateways), added in the 1st century BCE, depict scenes from the Buddha's life and Jataka tales in extraordinary detail. The hilltop site contains stupas, pillars, temples, and monasteries spanning nine centuries of Buddhist history.",
    descriptionHi: "सांची स्तूप भारत में सबसे पुरानी पत्थर संरचनाओं में से एक और बौद्ध वास्तुकला का गहना है। मौर्य सम्राट अशोक ने तीसरी शताब्दी ईसा पूर्व में बुद्ध के अवशेषों को स्थापित करने के लिए इसे बनवाया था। 16.5 मीटर ऊँचे और लगभग 120 मीटर परिधि वाले इस स्तूप में पहली शताब्दी ईसा पूर्व के चार विस्तृत नक्काशीदार तोरण हैं जो बुद्ध के जीवन के दृश्यों को दर्शाते हैं।",
    yearBuilt: "3rd century BCE (expanded 2nd–1st century BCE)",
    dynasty: "Maurya Empire",
    dynastyHi: "मौर्य साम्राज्य",
    primaryModel: "/models/sanchi_stupa.glb",
    historicalModels: { past: "/models/sanchi_stupa.glb", ancient: "/models/sanchi_stupa.glb" },
    era: "ancient",
    hotspots: [
      { name: "Great Stupa (Stupa 1)", description: "The hemispherical dome stands 16.5 metres tall with a 120-metre circumference — the spiritual core of the entire Sanchi complex, housing Buddha's relics.", position: [0, 0.5, 0.5] },
      { name: "Northern Torana", description: "The most intact of the four carved gateways, depicting scenes from the life of the Buddha in extraordinary sculptural detail across multiple narrative registers.", position: [0, 0.8, 1.5] },
      { name: "Ashoka Pillar", description: "A polished sandstone monolithic pillar erected by Ashoka around 250 BCE — the stump and detached capital survive, bearing edicts on dharma.", position: [1.2, 0.2, 0.6] },
    ],
    facts: [
      "The Great Stupa was originally built by Emperor Ashoka in the 3rd century BCE and later doubled in size by the Shunga dynasty in the 2nd century BCE",
      "Forgotten for centuries, it was used as a quarry by locals until General Taylor rediscovered it in 1818",
      "The four intricately carved toranas (gateways) date from the 1st century BCE and depict 900 years of Buddhist history",
      "Designated a UNESCO World Heritage Site in 1989, it is one of the best-preserved Buddhist sanctuaries in the world"
    ],
    factsHi: [
      "महान स्तूप मूल रूप से तीसरी शताब्दी ईसा पूर्व में सम्राट अशोक ने बनवाया था और दूसरी शताब्दी ईसा पूर्व में शुंग वंश ने इसे दोगुना बड़ा किया",
      "सदियों तक भुला दिया गया; 1818 में जनरल टेलर द्वारा पुनर्खोज तक स्थानीय लोग इसे पत्थर की खदान के रूप में उपयोग करते थे",
      "चार नक्काशीदार तोरण पहली शताब्दी ईसा पूर्व के हैं और 900 वर्षों के बौद्ध इतिहास को दर्शाते हैं",
      "1989 में यूनेस्को विश्व धरोहर स्थल घोषित; दुनिया के सर्वोत्तम संरक्षित बौद्ध अभयारण्यों में से एक"
    ],
    visitingHours: "Sunrise to Sunset (Closed on Fridays)",
    visitingHoursHi: "सूर्योदय से सूर्यास्त तक (शुक्रवार को बंद)",
    bestMonths: [10, 11, 0, 1],
    bestTimeDesc: "November to February is ideal — Madhya Pradesh's cool, clear winters are perfect for exploring the hilltop complex without heat exhaustion. Morning mist occasionally wraps the ancient stupa in an ethereal atmosphere. Avoid April–June when temperatures soar past 42°C and the exposed hilltop site provides almost no shade.",
    bestTimeDescHi: "नवंबर से फ़रवरी आदर्श है — मध्य प्रदेश की ठंडी, साफ़ सर्दियाँ पहाड़ी परिसर की सैर के लिए एकदम सही हैं। कभी-कभी सुबह की धुंध प्राचीन स्तूप को एक अलौकिक वातावरण में लपेट देती है। अप्रैल–जून से बचें जब तापमान 42°C से ऊपर जाता है।",
    timeline: [
      { year: "~268 BCE", event: "Emperor Ashoka converts to Buddhism after the Kalinga war; commissions stupas across India", eventHi: "कलिंग युद्ध के बाद सम्राट अशोक बौद्ध धर्म में परिवर्तित; भारत भर में स्तूप बनवाए" },
      { year: "~250 BCE", event: "The original brick Great Stupa erected at Sanchi to enshrine the Buddha's relics", eventHi: "बुद्ध के अवशेषों के लिए सांची में मूल ईंट का महान स्तूप बनाया गया" },
      { year: "~2nd century BCE", event: "Shunga dynasty enlarges the stupa, adds the stone casing, railing, and dome", eventHi: "शुंग वंश ने स्तूप को बड़ा किया और पत्थर की परत, रेलिंग और गुंबद जोड़े" },
      { year: "~1st century BCE", event: "Four elaborately carved toranas (gateways) added by the Satavahana dynasty", eventHi: "सातवाहन वंश द्वारा चार विस्तृत नक्काशीदार तोरण जोड़े गए" },
      { year: "1989", event: "Designated a UNESCO World Heritage Site; major conservation work completed", eventHi: "यूनेस्को विश्व धरोहर स्थल घोषित; प्रमुख संरक्षण कार्य पूर्ण" },
    ],
    entryFee: "₹30 (Indians), ₹500 (Foreigners)",
    entryFeeHi: "₹30 (भारतीय), ₹500 (विदेशी)",
    UNESCO: true
  },
  {
    id: "fatehpur-sikri",
    name: "Fatehpur Sikri",
    nameHi: "फ़तेहपुर सीकरी",
    city: "Agra District",
    state: "Uttar Pradesh",
    coordinates: [77.6638, 27.0939],
    description: "Fatehpur Sikri is a 16th-century Mughal city built entirely by Emperor Akbar between 1569 and 1585 on a rocky ridge in Uttar Pradesh. After Akbar visited the Sufi saint Salim Chishti at Sikri and a son (later Emperor Jahangir) was born fulfilling the saint's prophecy, Akbar transferred his capital here from Agra. The complex includes the Buland Darwaza — the tallest gateway in the world at 54 metres — the Jama Masjid, the white marble tomb of Salim Chishti, the five-storey Panch Mahal, and a series of palaces in a breathtaking blend of Mughal, Hindu, and Jain architectural styles. The city was mysteriously abandoned just 14 years after completion.",
    descriptionHi: "फ़तेहपुर सीकरी एक 16वीं सदी का मुगल शहर है जिसे सम्राट अकबर ने 1569 से 1585 के बीच पूरी तरह बनवाया। अकबर के पुत्र (बाद में सम्राट जहाँगीर) के जन्म की भविष्यवाणी करने वाले सूफी संत सलीम चिश्ती से मिलने के बाद अकबर ने आगरा से राजधानी यहाँ स्थानांतरित की। परिसर में 54 मीटर ऊँचा बुलंद दरवाज़ा (दुनिया का सबसे बड़ा प्रवेश द्वार), जामा मस्जिद, सलीम चिश्ती का सफेद संगमरमर का मकबरा और पंच महल शामिल हैं।",
    yearBuilt: "1569–1585",
    dynasty: "Mughal Empire",
    dynastyHi: "मुगल साम्राज्य",
    primaryModel: "/models/fatehpur_sikri.glb",
    historicalModels: { past: "/models/fatehpur_sikri.glb", ancient: "/models/fatehpur_sikri.glb" },
    era: "medieval",
    hotspots: [
      { name: "Buland Darwaza", description: "Built to commemorate Akbar's victory over Gujarat, this 54-metre gateway is the largest in the world — inscribed with verses from the Quran.", position: [0, 1.5, 0.5] },
      { name: "Panch Mahal", description: "A five-storey open pavilion with 176 uniquely carved columns — believed to have been used as a pleasure and wind-catching pavilion by the royal household.", position: [1.0, 0.8, 0.8] },
      { name: "Tomb of Salim Chishti", description: "A stunning white marble mausoleum of the Sufi saint whose prophecy brought Akbar to Sikri — devotees still tie threads here to wish for children.", position: [-0.8, 0.3, 1.0] },
    ],
    facts: [
      "Fatehpur Sikri was built following Akbar's pilgrimage to the Sufi saint Salim Chishti, who predicted the birth of Akbar's son (later Emperor Jahangir)",
      "The Buland Darwaza at 54 metres is the tallest gateway in the world, built to commemorate Akbar's conquest of Khandesh in Gujarat",
      "The city was abandoned just 14 years after construction was completed, believed to be due to failure of the water supply",
      "Designated a UNESCO World Heritage Site in 1986 for its remarkable blend of Mughal, Hindu, and Jain architectural styles"
    ],
    factsHi: [
      "फ़तेहपुर सीकरी सूफी संत सलीम चिश्ती की तीर्थयात्रा के बाद अकबर ने बनवाई, जिन्होंने जहाँगीर के जन्म की भविष्यवाणी की थी",
      "54 मीटर ऊँचा बुलंद दरवाज़ा दुनिया का सबसे ऊँचा प्रवेश द्वार है, जो गुजरात में खानदेश विजय की स्मृति में बना",
      "निर्माण के केवल 14 वर्ष बाद शहर छोड़ दिया गया, संभवतः जल आपूर्ति विफल होने के कारण",
      "1986 में मुगल, हिंदू और जैन वास्तुशैलियों के उल्लेखनीय मिश्रण के लिए यूनेस्को विश्व धरोहर स्थल घोषित"
    ],
    visitingHours: "Sunrise to Sunset (All days)",
    visitingHoursHi: "सूर्योदय से सूर्यास्त तक (सभी दिन)",
    bestMonths: [10, 11, 0, 1],
    bestTimeDesc: "November to February is the sweet spot — cool, dry winters make exploring this vast open-air complex of palaces and courtyards genuinely enjoyable. Sunrise visits offer dramatic golden light on the red sandstone. Avoid March–June when temperatures in the UP plains exceed 44°C and the open site provides little shade.",
    bestTimeDescHi: "नवंबर से फ़रवरी सबसे अच्छा समय है — ठंडी, शुष्क सर्दियाँ महलों और आँगनों के विशाल परिसर की सैर को सुखद बनाती हैं। सूर्योदय के समय लाल बलुआ पत्थर पर सुनहरी रोशनी अद्भुत होती है। मार्च–जून से बचें जब तापमान 44°C से अधिक हो सकता है।",
    timeline: [
      { year: "1569", event: "Akbar visits Sufi saint Salim Chishti at Sikri; a son is born fulfilling the prophecy", eventHi: "अकबर ने सीकरी में सलीम चिश्ती से मुलाकात की; भविष्यवाणी पूरी करते हुए पुत्र का जन्म हुआ" },
      { year: "1571", event: "Construction begins; Akbar moves his capital from Agra to the new city", eventHi: "निर्माण शुरू; अकबर ने राजधानी आगरा से नए शहर में स्थानांतरित की" },
      { year: "1585", event: "City abandoned — likely due to water scarcity — capital moves to Lahore", eventHi: "शहर छोड़ा गया — संभवतः जल अभाव के कारण — राजधानी लाहौर स्थानांतरित" },
      { year: "1601", event: "Buland Darwaza added to commemorate Akbar's conquest of Khandesh", eventHi: "खानदेश पर अकबर की विजय की स्मृति में बुलंद दरवाज़ा जोड़ा गया" },
      { year: "1986", event: "Designated a UNESCO World Heritage Site", eventHi: "यूनेस्को विश्व धरोहर स्थल घोषित" },
    ],
    entryFee: "₹50 (Indians), ₹610 (Foreigners)",
    entryFeeHi: "₹50 (भारतीय), ₹610 (विदेशी)",
    UNESCO: true
  },
  {
    id: "victoria-memorial",
    name: "Victoria Memorial",
    nameHi: "विक्टोरिया मेमोरियल",
    city: "Kolkata",
    state: "West Bengal",
    coordinates: [88.3421, 22.5448],
    description: "The Victoria Memorial is a magnificent marble building in Kolkata, West Bengal, built between 1906 and 1921 in memory of Queen Victoria, Empress of India. Designed by William Emerson in the Indo-Saracenic revivalist style, the structure fuses British and Mughal architectural elements and is built from the same white Makrana marble used in the Taj Mahal. Standing 56 metres tall under its central dome — topped by a 4.9-metre rotating bronze Angel of Victory — it is set in 64 acres of ornamental gardens. It now functions as a museum with 25 galleries housing 28,394 artefacts from the colonial era.",
    descriptionHi: "विक्टोरिया मेमोरियल कोलकाता में 1906 से 1921 के बीच महारानी विक्टोरिया की स्मृति में बना एक भव्य संगमरमर का भवन है। विलियम एमर्सन द्वारा इंडो-सारसेनिक शैली में डिज़ाइन किया गया, यह ताज महल जैसे सफेद मकराना संगमरमर से बना है। 56 मीटर ऊँचे केंद्रीय गुंबद वाला यह भवन 64 एकड़ के बगीचों में स्थित है और अब 25 दीर्घाओं में 28,394 कलाकृतियों वाले संग्रहालय के रूप में काम करता है।",
    yearBuilt: "1906–1921",
    dynasty: "British Raj",
    dynastyHi: "ब्रिटिश राज",
    primaryModel: "/models/victoria_memorial.glb",
    historicalModels: { past: "/models/victoria_memorial.glb", ancient: "/models/victoria_memorial.glb" },
    era: "modern",
    hotspots: [
      { name: "Central Dome & Angel of Victory", description: "The 56-metre dome is crowned by a 4.9-metre rotating bronze Angel of Victory — weighing over 3.6 tonnes, it turns with the wind like a majestic weathervane.", position: [0, 1.8, 0.3] },
      { name: "Royal Gallery", description: "Houses portraits of British monarchs and Viceroys — the visual centrepiece of 25 galleries containing 28,394 artefacts from the colonial era.", position: [0.8, 0.5, 1.0] },
      { name: "Ornamental Gardens", description: "64 acres of manicured gardens with ornamental pools, statues, and century-old trees — one of central Kolkata's most beloved green spaces.", position: [-1.2, -0.5, 0.8] },
    ],
    facts: [
      "Built from the same white Makrana marble as the Taj Mahal, the memorial stands 56 metres tall under its central dome",
      "The rotating bronze Angel of Victory atop the dome weighs over 3.6 tonnes and turns with the wind",
      "The memorial houses 28,394 artefacts in 25 galleries, including Queen Victoria's personal piano and state robes",
      "Viceroy Lord Curzon conceived the memorial as a 'monument of gratitude' and raised funds from Indian princes as well as the British government"
    ],
    factsHi: [
      "ताज महल जैसे सफेद मकराना संगमरमर से बना, यह मेमोरियल केंद्रीय गुंबद के नीचे 56 मीटर ऊँचा है",
      "गुंबद पर घूमने वाली कांस्य 'विजय की परी' का वजन 3.6 टन से अधिक है और यह हवा के साथ घूमती है",
      "25 दीर्घाओं में 28,394 कलाकृतियाँ हैं, जिनमें महारानी विक्टोरिया का व्यक्तिगत पियानो और राज्य वस्त्र शामिल हैं",
      "वायसराय लॉर्ड कर्ज़न ने इसे 'कृतज्ञता के स्मारक' के रूप में कल्पित किया और भारतीय राजकुमारों तथा ब्रिटिश सरकार से धन जुटाया"
    ],
    visitingHours: "10:00 AM to 5:00 PM (Closed on Mondays)",
    visitingHoursHi: "सुबह 10:00 से शाम 5:00 बजे तक (सोमवार को बंद)",
    bestMonths: [10, 11, 0, 1],
    bestTimeDesc: "November to February is ideal — Kolkata's brief but pleasant winter makes the white marble luminous in cool, clear light and the surrounding gardens come alive with flowers. The memorial is spectacularly illuminated on Republic Day (26 January). Avoid April–June when pre-monsoon heat and humidity make outdoor exploration exhausting.",
    bestTimeDescHi: "नवंबर से फ़रवरी आदर्श है — कोलकाता की संक्षिप्त लेकिन सुहावनी सर्दी में सफेद संगमरमर ठंडी, साफ़ रोशनी में चमकता है और बगीचे फूलों से जीवंत हो उठते हैं। गणतंत्र दिवस (26 जनवरी) पर मेमोरियल की रोशनी शानदार होती है। अप्रैल–जून से बचें।",
    timeline: [
      { year: "1901", event: "Queen Victoria dies; Viceroy Curzon proposes a grand memorial in Calcutta", eventHi: "महारानी विक्टोरिया का निधन; वायसराय कर्ज़न ने कलकत्ता में भव्य स्मारक का प्रस्ताव रखा" },
      { year: "1906", event: "Foundation stone laid by the Prince of Wales (later King George V)", eventHi: "वेल्स के राजकुमार (बाद में किंग जॉर्ज पंचम) द्वारा नींव का पत्थर रखा" },
      { year: "1921", event: "Memorial opened to the public by the Prince of Wales", eventHi: "वेल्स के राजकुमार द्वारा मेमोरियल जनता के लिए खोला गया" },
      { year: "1947", event: "India gains independence; memorial transferred to Indian national control", eventHi: "भारत स्वतंत्र; मेमोरियल भारतीय राष्ट्रीय नियंत्रण में आया" },
      { year: "Present", event: "One of Kolkata's most iconic landmarks; hosts cultural events and sound-and-light shows", eventHi: "कोलकाता का सबसे प्रतिष्ठित स्थल; सांस्कृतिक कार्यक्रमों और ध्वनि-प्रकाश शो का केंद्र" },
    ],
    entryFee: "₹30 (Indians), ₹500 (Foreigners)",
    entryFeeHi: "₹30 (भारतीय), ₹500 (विदेशी)",
    UNESCO: false
  },
  {
    id: "amber-fort",
    name: "Amber Fort",
    nameHi: "आमेर किला",
    city: "Jaipur",
    state: "Rajasthan",
    coordinates: [75.8513, 26.9855],
    description: "Amber Fort (also known as Amer Fort) is a majestic hilltop fortification located 11 kilometres from Jaipur, Rajasthan, overlooking the Maota Lake below. Originally founded by the Meena people, it was extensively built and expanded by Rajput chief Raja Man Singh I in 1592. The fort complex, spread over 4 square kilometres, was the principal residence of the Rajput Maharajas for over 150 years. Its most famous feature is the Sheesh Mahal (Palace of Mirrors), where thousands of tiny mirror inlays create the effect of 4,000 stars from a single candle. The fort is part of the UNESCO World Heritage Site 'Hill Forts of Rajasthan', inscribed in 2013.",
    descriptionHi: "आमेर किला (अमेर किला) जयपुर से 11 किलोमीटर दूर एक पहाड़ी पर स्थित राजसी किला है जो नीचे माओता झील की ओर देखता है। मूल रूप से मीना लोगों द्वारा स्थापित, इसे 1592 में राजपूत सरदार राजा मान सिंह प्रथम ने बड़े पैमाने पर बनवाया। 4 वर्ग किमी में फैला यह किला 150 से अधिक वर्षों तक राजपूत महाराजाओं का मुख्य निवास था। इसका सबसे प्रसिद्ध स्थान शीश महल है, जहाँ हज़ारों छोटे दर्पण एक मोमबत्ती से 4,000 तारों का प्रभाव पैदा करते हैं।",
    yearBuilt: "1592 (major expansion by Raja Man Singh I)",
    dynasty: "Kachwaha Rajput",
    dynastyHi: "कछवाहा राजपूत",
    primaryModel: "/models/amber_fort.glb",
    historicalModels: { past: "/models/amber_fort.glb", ancient: "/models/amber_fort_ancient.glb" },
    era: "medieval",
    hotspots: [
      { name: "Sheesh Mahal", description: "The Palace of Mirrors — every inch of walls and ceiling is covered with tiny mirror inlays that, when a single candle is lit, replicate a sky full of 4,000 stars.", position: [0, 0.8, 1.0] },
      { name: "Diwan-i-Khas", description: "The Hall of Private Audience where the Maharaja received nobles and allies — decorated with delicate floral motifs in alabaster and glasswork.", position: [1.0, 0.5, 0.5] },
      { name: "Ganesh Pol", description: "The ceremonial gateway decorated with frescoes and mosaic, featuring lattice screens (jali) through which royal women could view arrivals without being seen.", position: [-0.5, 0.5, 1.5] },
    ],
    facts: [
      "The Sheesh Mahal (Mirror Palace) is designed so that a single candle creates the effect of 4,000 stars through its thousands of tiny mirror inlays",
      "Elephants were the traditional mode of transport to the fort's main gate (Suraj Pol) — a practice that continued for tourists until 2017",
      "The fort is part of the UNESCO World Heritage Site 'Hill Forts of Rajasthan', inscribed in 2013",
      "Raja Man Singh I, who commissioned the major expansion, was one of the Navaratnas (nine jewels) of Emperor Akbar's court"
    ],
    factsHi: [
      "शीश महल इस तरह बना है कि एक मोमबत्ती की रोशनी हज़ारों छोटे दर्पणों से 4,000 तारों का प्रभाव पैदा करती है",
      "हाथी पारंपरिक रूप से किले के मुख्य द्वार तक पहुँचाते थे — 2017 तक पर्यटकों के लिए भी यह परंपरा जारी रही",
      "यह किला 2013 में यूनेस्को विश्व धरोहर स्थल 'राजस्थान के पर्वतीय किले' का हिस्सा है",
      "राजा मान सिंह प्रथम, जिन्होंने प्रमुख विस्तार कराया, सम्राट अकबर के दरबार के नवरत्नों में से एक थे"
    ],
    visitingHours: "8:00 AM to 6:00 PM (All days)",
    visitingHoursHi: "सुबह 8:00 से शाम 6:00 बजे तक (सभी दिन)",
    bestMonths: [9, 10, 11, 0],
    bestTimeDesc: "October to January is ideal — Rajasthan's crisp winter makes exploring the hilltop fort and its mirror-lined palaces a pure pleasure. Morning visits offer the most beautiful soft light on the pale sandstone. The fort is especially festive during the Jaipur Literature Festival in January. Summers are brutal with temperatures touching 48°C.",
    bestTimeDescHi: "अक्तूबर से जनवरी आदर्श है — राजस्थान की खुशनुमा सर्दी में पहाड़ी किले और दर्पण-जड़ित महलों की सैर शानदार होती है। सुबह की मुलायम रोशनी बलुआ पत्थर पर सबसे सुंदर दिखती है। जनवरी में जयपुर लिटरेचर फ़ेस्टिवल के दौरान किला विशेष रूप से जीवंत होता है। गर्मियाँ 48°C तक के साथ क्रूर होती हैं।",
    timeline: [
      { year: "967 CE", event: "Amber town founded by Meena ruler Ral Dan; early fortifications built on the hill", eventHi: "मीना शासक राल दान द्वारा आमेर शहर की स्थापना; पहाड़ी पर प्रारंभिक किलेबंदी" },
      { year: "1592", event: "Raja Man Singh I begins the major construction of the current fort complex", eventHi: "राजा मान सिंह प्रथम ने वर्तमान किला परिसर का प्रमुख निर्माण शुरू किया" },
      { year: "1727", event: "Maharaja Jai Singh II founds Jaipur and moves the capital, leaving Amber as the ancestral seat", eventHi: "महाराजा जय सिंह द्वितीय ने जयपुर की स्थापना की और राजधानी वहाँ स्थानांतरित की" },
      { year: "~1630", event: "Sheesh Mahal constructed; Amber Fort reaches its architectural zenith", eventHi: "शीश महल का निर्माण; आमेर किला अपनी वास्तुकला के शिखर पर पहुँचा" },
      { year: "2013", event: "Inscribed as UNESCO World Heritage Site — part of 'Hill Forts of Rajasthan'", eventHi: "यूनेस्को विश्व धरोहर स्थल — 'राजस्थान के पर्वतीय किले' के हिस्से के रूप में अंकित" },
    ],
    entryFee: "₹100 (Indians), ₹500 (Foreigners)",
    entryFeeHi: "₹100 (भारतीय), ₹500 (विदेशी)",
    UNESCO: true
  },
  {
    id: "mahabalipuram",
    name: "Shore Temple, Mahabalipuram",
    nameHi: "शोर मंदिर, महाबलिपुरम",
    city: "Mahabalipuram",
    state: "Tamil Nadu",
    coordinates: [80.1927, 12.6269],
    description: "The Shore Temple is an 8th-century complex of shrines at the edge of the Bay of Bengal in Mahabalipuram, Tamil Nadu, built by the Pallava king Narasimhavarman II (Rajasimha). It is one of the oldest structural stone temples of South India. Part of the UNESCO-listed Group of Monuments at Mahabalipuram, the site also includes the world's largest bas-relief — Arjuna's Penance, carved into a granite boulder face 27 metres wide — and the Five Rathas, five monolithic rock-cut temple-chariots. The Shore Temple has stood at the water's edge for over 1,300 years, battered by the waves of the Bay of Bengal.",
    descriptionHi: "शोर मंदिर तमिलनाडु के महाबलिपुरम में बंगाल की खाड़ी के किनारे स्थित 8वीं शताब्दी का मंदिर परिसर है, जिसे पल्लव राजा नरसिंहवर्मन द्वितीय ने बनवाया था। यह दक्षिण भारत के सबसे पुराने संरचनात्मक पत्थर मंदिरों में से एक है। इस यूनेस्को-सूचीबद्ध स्थल में दुनिया की सबसे बड़ी बास-रिलीफ — अर्जुन की तपस्या (27 मीटर चौड़ी) — और पंच रथ भी शामिल हैं।",
    yearBuilt: "700–728 CE",
    dynasty: "Pallava Dynasty",
    dynastyHi: "पल्लव वंश",
    primaryModel: "/models/mahabalipuram.glb",
    historicalModels: { past: "/models/mahabalipuram.glb", ancient: "/models/mahabalipuram_ancient.glb" },
    era: "ancient",
    hotspots: [
      { name: "Shore Temple Shrine", description: "The three-storied stone temple facing the sea, dedicated to both Shiva and Vishnu — one of the oldest structural temples of South India, battered by the Bay of Bengal for 1,300+ years.", position: [0, 1.0, 0.5] },
      { name: "Arjuna's Penance", description: "The world's largest bas-relief — 27 metres wide and 9 metres tall — carved into a single granite boulder, depicting the descent of the Ganges from heaven.", position: [1.2, 0.5, 0.8] },
      { name: "Five Rathas (Pancha Rathas)", description: "Five monolithic rock-cut temple-chariots carved from a single granite outcrop, named after the Pandava brothers — a masterpiece of early Dravidian architecture.", position: [-1.0, 0.2, 1.2] },
    ],
    facts: [
      "The Shore Temple is unusually dedicated to both Shiva and Vishnu, housing shrines to both deities within the same complex",
      "Local legend speaks of seven pagodas at Mahabalipuram — six submerged by the sea over the millennia",
      "The 2004 Indian Ocean tsunami temporarily exposed ancient submerged ruins offshore, seemingly confirming the seven pagodas legend",
      "The Group of Monuments at Mahabalipuram was designated a UNESCO World Heritage Site in 1984, among the earliest Indian sites inscribed"
    ],
    factsHi: [
      "शोर मंदिर असामान्य रूप से शिव और विष्णु दोनों को समर्पित है — एक ही परिसर में दोनों देवताओं के मंदिर हैं",
      "स्थानीय किंवदंती के अनुसार महाबलिपुरम में मूल रूप से सात पगोडा थे — सदियों में छह समुद्र में डूब गए",
      "2004 की हिंद महासागर सुनामी ने समुद्र में डूबी प्राचीन संरचनाओं को अस्थायी रूप से उजागर किया",
      "महाबलिपुरम स्मारक समूह 1984 में यूनेस्को विश्व धरोहर स्थल घोषित — भारत के शुरुआती अंकित स्थलों में से एक"
    ],
    visitingHours: "6:00 AM to 6:00 PM (All days)",
    visitingHoursHi: "सुबह 6:00 से शाम 6:00 बजे तक (सभी दिन)",
    bestMonths: [10, 11, 0],
    bestTimeDesc: "October to December is the sweet spot — the post-monsoon coast is refreshed and green, temperatures drop to a pleasant 25–28°C, and the sea is calm enough for a scenic walk beside the Shore Temple. January can bring occasional cool breezes off the Bay of Bengal. Avoid July–September when the northeast monsoon lashes the Tamil Nadu coast with heavy rain.",
    bestTimeDescHi: "अक्तूबर से दिसंबर सबसे अच्छा समय है — मानसून के बाद तट ताज़ा और हरा होता है, तापमान 25–28°C तक गिर जाता है और समुद्र शोर मंदिर के बगल में सुंदर सैर के लिए पर्याप्त शांत होता है। जुलाई–सितंबर से बचें जब उत्तर-पूर्वी मानसून भारी बारिश करता है।",
    timeline: [
      { year: "630–668 CE", event: "Narasimhavarman I (Mamalla) rules the Pallava kingdom; Mahabalipuram becomes the royal port city", eventHi: "नरसिंहवर्मन प्रथम पल्लव राज्य पर शासन करते हैं; महाबलिपुरम शाही बंदरगाह शहर बना" },
      { year: "700–728 CE", event: "Shore Temple built by Narasimhavarman II (Rajasimha); Pallava art at its pinnacle", eventHi: "नरसिंहवर्मन द्वितीय ने शोर मंदिर बनवाया; पल्लव कला अपने चरम पर" },
      { year: "~800 CE", event: "Pancha Rathas and Arjuna's Penance bas-relief completed under Pallava patronage", eventHi: "पल्लव संरक्षण में पंच रथ और अर्जुन की तपस्या बास-रिलीफ पूर्ण" },
      { year: "1984", event: "Group of Monuments at Mahabalipuram inscribed as a UNESCO World Heritage Site", eventHi: "महाबलिपुरम स्मारक समूह को यूनेस्को विश्व धरोहर स्थल घोषित" },
      { year: "2004", event: "Indian Ocean tsunami temporarily exposes submerged ancient structures, validating the 'seven pagodas' legend", eventHi: "हिंद महासागर सुनामी ने समुद्र में डूबी संरचनाओं को अस्थायी रूप से उजागर किया" },
    ],
    entryFee: "₹40 (Indians), ₹600 (Foreigners)",
    entryFeeHi: "₹40 (भारतीय), ₹600 (विदेशी)",
    UNESCO: true
  },
  {
    id: "humayuns-tomb",
    name: "Humayun's Tomb",
    nameHi: "हुमायूँ का मकबरा",
    city: "Delhi",
    state: "Delhi",
    coordinates: [77.2507, 28.5933],
    description: "Humayun's Tomb is the mausoleum of the Mughal Emperor Humayun in Delhi. Built in 1572 by his widow Bega Begum, it was the first garden-tomb on the Indian subcontinent and the architectural inspiration for the Taj Mahal. The central double dome of white marble rises from a high red sandstone platform, and the tomb is set in a formal Charbagh (four-part) garden.",
    descriptionHi: "हुमायूँ का मकबरा दिल्ली में मुगल सम्राट हुमायूँ की समाधि है। 1572 में उनकी विधवा बेगा बेगम द्वारा निर्मित, यह भारतीय उपमहाद्वीप पर पहला गार्डन-टॉम्ब था और ताज महल का स्थापत्य प्रेरणास्रोत था। सफेद संगमरमर का केंद्रीय दोहरा गुंबद ऊँचे लाल बलुआ पत्थर के चबूतरे से उठता है।",
    yearBuilt: "1565–1572",
    dynasty: "Mughal Empire",
    dynastyHi: "मुगल साम्राज्य",
    primaryModel: "/models/humayuns_tomb.glb",
    historicalModels: { past: "/models/humayuns_tomb.glb", ancient: "/models/humayuns_tomb.glb" },
    era: "medieval",
    hotspots: [
      { name: "Central Dome", description: "The 42.5-metre double dome of white marble — the first true double dome in India — directly inspired the later dome of the Taj Mahal.", position: [0, 1.5, 0] },
      { name: "Charbagh Garden", description: "The 12-hectare four-part garden divided by water channels is one of the finest surviving Mughal gardens in India.", position: [0, -0.5, 1.8] },
      { name: "Barber's Tomb", description: "A smaller domed tomb in the garden, said to belong to the royal barber — a rare honour reflecting Mughal affection for trusted servants.", position: [-1.2, 0.2, 1.0] }
    ],
    facts: [
      "Humayun's Tomb is considered the architectural prototype for the Taj Mahal built 80 years later",
      "It was the first garden-tomb on the Indian subcontinent",
      "The tomb served as a refuge for the last Mughal Emperor Bahadur Shah Zafar in 1857",
      "Over 150 Mughal family members are buried here, earning it the nickname 'dormitory of the Mughals'"
    ],
    factsHi: [
      "हुमायूँ का मकबरा ताज महल के लिए स्थापत्य प्रोटोटाइप माना जाता है",
      "यह भारतीय उपमहाद्वीप पर पहला गार्डन-टॉम्ब था",
      "1857 में अंतिम मुगल सम्राट बहादुर शाह ज़फ़र ने यहाँ शरण ली थी",
      "150 से अधिक मुगल परिवार के सदस्य यहाँ दफन हैं, इसे 'मुगलों की शयनशाला' कहा जाता है"
    ],
    visitingHours: "Sunrise to Sunset (All days)",
    visitingHoursHi: "सूर्योदय से सूर्यास्त तक (सभी दिन)",
    bestMonths: [10, 11, 0, 1, 2],
    bestTimeDesc: "October to March is ideal — crisp winters keep the gardens green and the red sandstone glows warmly in low winter sunlight. The symmetrical Charbagh is especially beautiful at sunrise when mist lingers over the water channels.",
    bestTimeDescHi: "अक्तूबर से मार्च आदर्श समय है — सर्दियों में बगीचे हरे-भरे रहते हैं और लाल बलुआ पत्थर सर्दी की धूप में गर्म चमक लेता है। सूर्योदय के समय धुंध के साथ चारबाग विशेष रूप से सुंदर होता है।",
    timeline: [
      { year: "1556", event: "Emperor Humayun dies falling from the steps of his library; his widow Bega Begum commissions the tomb", eventHi: "सम्राट हुमायूँ अपनी लाइब्रेरी की सीढ़ियों से गिरकर मर गए; उनकी विधवा बेगा बेगम ने मकबरा बनवाया" },
      { year: "1565–1572", event: "Construction completed by Persian architect Mirak Mirza Ghiyas in the new Mughal garden-tomb style", eventHi: "फ़ारसी वास्तुकार मिराक मिर्ज़ा गियास ने नई मुगल शैली में निर्माण पूर्ण किया" },
      { year: "1857", event: "Last Mughal Emperor Bahadur Shah Zafar takes refuge here during the Sepoy Mutiny before capture by the British", eventHi: "अंतिम मुगल सम्राट बहादुर शाह ज़फ़र ब्रिटिश द्वारा गिरफ्तारी से पहले यहाँ छुपे" },
      { year: "1993", event: "UNESCO World Heritage Site designation", eventHi: "यूनेस्को विश्व धरोहर स्थल घोषित" }
    ],
    entryFee: "₹35 (Indians), ₹550 (Foreigners)",
    entryFeeHi: "₹35 (भारतीय), ₹550 (विदेशी)",
    UNESCO: true
  },
  {
    id: "agra-fort",
    name: "Agra Fort",
    nameHi: "आगरा किला",
    city: "Agra",
    state: "Uttar Pradesh",
    coordinates: [78.0218, 27.1800],
    description: "Agra Fort is a UNESCO World Heritage site and one of the greatest Mughal fortifications in India. Built primarily by Emperor Akbar from 1565, it served as the main residence of the Mughal emperors until 1638. The fort contains several beautiful palaces, audience halls, and mosques — and from its Musamman Burj tower, the imprisoned Shah Jahan could see the Taj Mahal where his beloved Mumtaz was buried.",
    descriptionHi: "आगरा किला एक यूनेस्को विश्व धरोहर स्थल और भारत के सबसे महान मुगल किलों में से एक है। मुख्यतः सम्राट अकबर द्वारा 1565 से निर्मित, यह 1638 तक मुगल सम्राटों का मुख्य निवास था। किले में कई सुंदर महल, दरबार हॉल और मस्जिदें हैं — और इसके मुसम्मन बुर्ज से कैद शाहजहाँ उस ताज महल को देख सकते थे जहाँ उनकी प्रिय मुमताज दफन थीं।",
    yearBuilt: "1565–1573 (Akbar); expanded by Jahangir and Shah Jahan",
    dynasty: "Mughal Empire",
    dynastyHi: "मुगल साम्राज्य",
    primaryModel: "/models/agra_fort.glb",
    historicalModels: { past: "/models/agra_fort.glb", ancient: "/models/agra_fort.glb" },
    era: "medieval",
    hotspots: [
      { name: "Musamman Burj", description: "The octagonal tower where Shah Jahan was imprisoned by his son Aurangzeb — from here he could gaze at the Taj Mahal where Mumtaz lay.", position: [1.2, 1.0, 0.5] },
      { name: "Diwan-i-Khas", description: "The Hall of Private Audience, where the emperor received nobles — originally housing the famous Peacock Throne before it was taken to Delhi.", position: [0, 0.5, 1.0] },
      { name: "Amar Singh Gate", description: "The main public entrance, a double-bend gateway designed so that war elephants could not gain enough momentum to break through.", position: [-1.0, 0, 1.5] }
    ],
    facts: [
      "The fort's walls are 70 feet high and stretch for 2.5 km",
      "Shah Jahan spent the last 8 years of his life imprisoned in Agra Fort by his son Aurangzeb",
      "The fort contains over 500 buildings inside its walls",
      "It was the most important Mughal fort and housed successive emperors for nearly 100 years"
    ],
    factsHi: [
      "किले की दीवारें 70 फीट ऊँची हैं और 2.5 किमी तक फैली हैं",
      "शाहजहाँ ने अपने बेटे औरंगजेब द्वारा आगरा किले में कैद होकर अपने जीवन के अंतिम 8 साल बिताए",
      "किले की दीवारों के अंदर 500 से अधिक इमारतें हैं",
      "यह सबसे महत्वपूर्ण मुगल किला था जो लगभग 100 वर्षों तक उत्तराधिकारी सम्राटों का घर था"
    ],
    visitingHours: "6:00 AM to 6:00 PM (Closed on Fridays for the mosque)",
    visitingHoursHi: "सुबह 6:00 से शाम 6:00 बजे तक (मस्जिद के लिए शुक्रवार को बंद)",
    bestMonths: [10, 11, 0, 1, 2],
    bestTimeDesc: "October to March — the same window as the Taj Mahal just 2 km away. Many visitors combine both in a single Agra day trip. Winter mornings offer the clearest views of the Taj Mahal from the Musamman Burj tower.",
    bestTimeDescHi: "अक्तूबर से मार्च — ताज महल के समान ही, जो मात्र 2 किमी दूर है। कई पर्यटक एक ही दिन में दोनों को देखते हैं। सर्दियों की सुबह मुसम्मन बुर्ज से ताज महल का सबसे स्पष्ट दृश्य मिलता है।",
    timeline: [
      { year: "1526", event: "Babur wins the First Battle of Panipat; Agra becomes the Mughal capital", eventHi: "बाबर ने पानीपत की पहली लड़ाई जीती; आगरा मुगल राजधानी बनी" },
      { year: "1565", event: "Akbar demolishes the older fort and begins construction of the present red sandstone structure", eventHi: "अकबर ने पुराने किले को ध्वस्त कर लाल बलुआ पत्थर की मौजूदा संरचना का निर्माण शुरू किया" },
      { year: "1638", event: "Shah Jahan shifts the Mughal capital to Delhi (Shahjahanabad); Agra Fort becomes secondary", eventHi: "शाहजहाँ ने मुगल राजधानी दिल्ली (शाहजहानाबाद) स्थानांतरित की" },
      { year: "1658–1666", event: "Shah Jahan imprisoned by Aurangzeb; gazes at the Taj from Musamman Burj until his death", eventHi: "शाहजहाँ को औरंगजेब ने कैद किया; मृत्यु तक मुसम्मन बुर्ज से ताज देखते रहे" },
      { year: "1983", event: "UNESCO World Heritage Site designation", eventHi: "यूनेस्को विश्व धरोहर स्थल घोषित" }
    ],
    entryFee: "₹40 (Indians), ₹600 (Foreigners)",
    entryFeeHi: "₹40 (भारतीय), ₹600 (विदेशी)",
    UNESCO: true
  },
  {
    id: "brihadeeswara-temple",
    name: "Brihadeeswara Temple",
    nameHi: "बृहदेश्वर मंदिर",
    city: "Thanjavur",
    state: "Tamil Nadu",
    coordinates: [79.1317, 10.7828],
    description: "The Brihadeeswara Temple (Big Temple) in Thanjavur is one of the greatest masterpieces of Chola architecture. Built by Emperor Raja Raja Chola I and completed in 1010 CE, its 66-metre vimana tower remains the tallest in India. The entire structure is built from granite without mortar, and the capstone at the apex — a single piece of granite weighing 80 tonnes — was hauled up via a 6-km earthen ramp.",
    descriptionHi: "तंजावुर का बृहदेश्वर मंदिर (बड़ा मंदिर) चोल वास्तुकला की महानतम कृतियों में से एक है। सम्राट राजराज चोल प्रथम द्वारा निर्मित और 1010 ई. में पूर्ण, इसका 66 मीटर का विमान टॉवर भारत में सबसे ऊँचा है। पूरी संरचना बिना मोर्टार के ग्रेनाइट से बनी है, और शीर्ष पर 80 टन का एकल ग्रेनाइट पत्थर 6 किमी लंबे मिट्टी के रैंप से ऊपर खींचा गया था।",
    yearBuilt: "1003–1010 CE",
    dynasty: "Chola Dynasty",
    dynastyHi: "चोल वंश",
    primaryModel: "/models/brihadeeswara_temple.glb",
    historicalModels: { past: "/models/brihadeeswara_temple.glb", ancient: "/models/brihadeeswara_temple.glb" },
    era: "ancient",
    hotspots: [
      { name: "Vimana Tower", description: "The 66-metre tower — the tallest in India at the time of construction — casts no shadow at noon on equinox days, a deliberate feat of Chola astronomical engineering.", position: [0, 1.5, 0] },
      { name: "Nandi Mandapa", description: "The massive Nandi bull pavilion in the courtyard — carved from a single boulder 6 metres long — is one of the largest monolithic Nandi statues in India.", position: [0, 0, 1.5] },
      { name: "Shivakami Amman Shrine", description: "The subsidiary shrine to Parvati (Shivakami) within the outer courtyard, added by later Chola rulers as a companion to the main Shiva shrine.", position: [-1.0, 0.2, 0.8] }
    ],
    facts: [
      "The vimana tower casts no shadow at noon on the equinox — a deliberate Chola engineering marvel",
      "The 80-tonne capstone at the apex was transported via a 6 km earthen ramp",
      "The entire structure is built without mortar — held together by interlocking granite blocks",
      "Raja Raja Chola I dedicated the temple in 1010 CE with a grand inscription recording the donation of 600 kg of gold"
    ],
    factsHi: [
      "विषुव के दिन दोपहर को विमान टॉवर कोई छाया नहीं डालता — एक जानबूझकर किया गया चोल इंजीनियरिंग चमत्कार",
      "शीर्ष पर 80 टन का पत्थर 6 किमी लंबे मिट्टी के रैंप से ले जाया गया",
      "पूरी संरचना बिना मोर्टार के बनी है — ग्रेनाइट ब्लॉकों को परस्पर बंद करके",
      "राजराज चोल प्रथम ने 1010 ई. में 600 किलोग्राम सोने के दान का लेख दर्ज करते हुए मंदिर समर्पित किया"
    ],
    visitingHours: "6:00 AM to 12:30 PM, 4:00 PM to 8:30 PM",
    visitingHoursHi: "सुबह 6:00 से दोपहर 12:30 बजे तक, शाम 4:00 से 8:30 बजे तक",
    bestMonths: [10, 11, 0, 1],
    bestTimeDesc: "October to February — post-monsoon Tamil Nadu is lush and cool (25–30°C). The Brihadeeswara Festival (Karthigai Deepam) in November is spectacular, when thousands of lamps illuminate the temple complex. Avoid April–June when temperatures cross 40°C.",
    bestTimeDescHi: "अक्तूबर से फ़रवरी — मानसून के बाद तमिलनाडु हरा-भरा और ठंडा (25–30°C) होता है। नवंबर में बृहदेश्वर महोत्सव (कार्तिगई दीपम) शानदार होता है। अप्रैल–जून से बचें जब तापमान 40°C पार करता है।",
    timeline: [
      { year: "985 CE", event: "Raja Raja Chola I ascends the throne and begins planning the grand temple", eventHi: "राजराज चोल प्रथम सिंहासन पर बैठे और भव्य मंदिर की योजना बनाई" },
      { year: "1003–1010 CE", event: "Brihadeeswara Temple constructed and consecrated — the tallest structure in India at the time", eventHi: "बृहदेश्वर मंदिर बनाया और प्रतिष्ठित किया गया — उस समय भारत की सबसे ऊँची संरचना" },
      { year: "1987", event: "UNESCO World Heritage Site designation as part of the Great Living Chola Temples", eventHi: "महान जीवित चोल मंदिरों के हिस्से के रूप में यूनेस्को विश्व धरोहर स्थल घोषित" }
    ],
    entryFee: "Free entry",
    entryFeeHi: "निःशुल्क प्रवेश",
    UNESCO: true
  },
  {
    id: "mahabodhi-temple",
    name: "Mahabodhi Temple",
    nameHi: "महाबोधि मंदिर",
    city: "Bodh Gaya",
    state: "Bihar",
    coordinates: [84.9912, 24.6961],
    description: "The Mahabodhi Temple in Bodh Gaya marks the exact spot where Siddhartha Gautama attained enlightenment under the Bodhi tree and became the Buddha, around 500 BCE. One of the holiest Buddhist sites in the world, the current temple dates to the 5th–6th century CE. The Bodhi Tree in the courtyard is a direct descendant of the original tree under which the Buddha sat.",
    descriptionHi: "बोध गया का महाबोधि मंदिर उस सटीक स्थान को चिह्नित करता है जहाँ सिद्धार्थ गौतम ने लगभग 500 ईसा पूर्व बोधि वृक्ष के नीचे ज्ञान प्राप्त किया और बुद्ध बने। दुनिया के सबसे पवित्र बौद्ध स्थलों में से एक, मौजूदा मंदिर 5वीं–6वीं शताब्दी ई. का है। प्रांगण में बोधि वृक्ष उसी मूल वृक्ष का प्रत्यक्ष वंशज है जिसके नीचे बुद्ध बैठे थे।",
    yearBuilt: "5th–6th century CE (original shrine ~250 BCE by Ashoka)",
    dynasty: "Gupta Era (temple); Mauryan (original shrine)",
    dynastyHi: "गुप्त काल (मंदिर); मौर्य (मूल मंदिर)",
    primaryModel: "/models/mahabodhi_temple.glb",
    historicalModels: { past: "/models/mahabodhi_temple.glb", ancient: "/models/mahabodhi_temple.glb" },
    era: "ancient",
    hotspots: [
      { name: "Bodhi Tree", description: "A Ficus religiosa tree — a direct descendant of the original tree under which the Buddha sat for 49 days in meditation before attaining enlightenment.", position: [0.8, 0.5, 0.8] },
      { name: "Vajrasana (Diamond Throne)", description: "The stone slab placed by Emperor Ashoka marking the exact spot where the Buddha sat during enlightenment — considered the navel of the earth in Buddhist cosmology.", position: [0, 0, 0.5] },
      { name: "Main Spire", description: "The 55-metre tapering shikhara tower covered with carved niches of seated Buddha figures, one of the finest examples of Gupta-era brick temple architecture.", position: [0, 1.5, 0] }
    ],
    facts: [
      "Bodh Gaya is the most holy of the four main Buddhist pilgrimage sites in the world",
      "The original Bodhi tree was destroyed and the current tree is a 4th-generation descendant",
      "Emperor Ashoka visited Bodh Gaya around 260 BCE and built the first memorial shrine",
      "Pilgrims from over 100 countries visit Bodh Gaya every year"
    ],
    factsHi: [
      "बोध गया दुनिया के चार मुख्य बौद्ध तीर्थ स्थलों में सबसे पवित्र है",
      "मूल बोधि वृक्ष नष्ट हो गया था और वर्तमान वृक्ष चौथी पीढ़ी का वंशज है",
      "सम्राट अशोक ने लगभग 260 ईसा पूर्व बोध गया का दौरा किया और पहला स्मारक मंदिर बनाया",
      "100 से अधिक देशों के तीर्थयात्री हर साल बोध गया आते हैं"
    ],
    visitingHours: "5:00 AM to 9:00 PM (All days)",
    visitingHoursHi: "सुबह 5:00 से रात 9:00 बजे तक (सभी दिन)",
    bestMonths: [10, 11, 0, 1, 2],
    bestTimeDesc: "October to March — Bihar winters are mild and pleasant (15–25°C). The Buddha Purnima festival in April/May draws massive pilgrim gatherings. Avoid June–September when monsoon rains can be heavy.",
    bestTimeDescHi: "अक्तूबर से मार्च — बिहार की सर्दियाँ हल्की और सुखद (15–25°C) होती हैं। अप्रैल/मई में बुद्ध पूर्णिमा उत्सव में बड़ी तीर्थयात्री भीड़ होती है।",
    timeline: [
      { year: "~500 BCE", event: "Siddhartha Gautama attains enlightenment under the Bodhi tree and becomes the Buddha", eventHi: "सिद्धार्थ गौतम बोधि वृक्ष के नीचे ज्ञान प्राप्त कर बुद्ध बने" },
      { year: "~260 BCE", event: "Emperor Ashoka visits Bodh Gaya and builds the first Vajrasana shrine", eventHi: "सम्राट अशोक ने बोध गया का दौरा किया और पहला वज्रासन मंदिर बनाया" },
      { year: "5th–6th century CE", event: "Current Mahabodhi Temple structure built during the Gupta period", eventHi: "गुप्त काल में मौजूदा महाबोधि मंदिर संरचना बनाई गई" },
      { year: "2002", event: "UNESCO World Heritage Site designation", eventHi: "यूनेस्को विश्व धरोहर स्थल घोषित" }
    ],
    entryFee: "Free entry",
    entryFeeHi: "निःशुल्क प्रवेश",
    UNESCO: true
  },
  {
    id: "elephanta-caves",
    name: "Elephanta Caves",
    nameHi: "एलिफेंटा गुफाएँ",
    city: "Mumbai",
    state: "Maharashtra",
    coordinates: [72.9314, 18.9633],
    description: "The Elephanta Caves are a UNESCO World Heritage site on Elephanta Island in Mumbai Harbour. Carved into basalt rock between the 5th and 8th centuries CE, the caves contain extraordinary Hindu rock-cut sculptures — most notably the Trimurti, a magnificent 6-metre three-headed bust of Shiva representing his roles as creator, preserver, and destroyer, considered one of the finest works of Indian art.",
    descriptionHi: "एलिफेंटा गुफाएँ मुंबई हार्बर में एलिफेंटा द्वीप पर स्थित एक यूनेस्को विश्व धरोहर स्थल हैं। 5वीं से 8वीं शताब्दी ई. के बीच बेसाल्ट चट्टान में उकेरी गई इन गुफाओं में असाधारण हिंदू रॉक-कट मूर्तिकलाएँ हैं — विशेष रूप से त्रिमूर्ति, शिव का एक शानदार 6 मीटर तीन सिर वाला वक्षप्रतिमा।",
    yearBuilt: "5th–8th century CE",
    dynasty: "Kalachuri / early Chalukya period",
    dynastyHi: "कलचुरी / प्रारंभिक चालुक्य काल",
    primaryModel: "/models/elephanta_caves.glb",
    historicalModels: { past: "/models/elephanta_caves.glb", ancient: "/models/elephanta_caves.glb" },
    era: "ancient",
    hotspots: [
      { name: "Trimurti", description: "The iconic 6-metre three-headed bust of Shiva — his benevolent face at centre, fierce Bhairava on the left, and serene Vamadeva on the right — considered one of the greatest sculptures ever created.", position: [0, 0.8, 0.5] },
      { name: "Shiva-Parvati Panel", description: "A huge relief depicting Shiva's marriage to Parvati with the entire divine assembly present — one of the most narrative and detailed carvings in the caves.", position: [1.0, 0.5, 0.8] },
      { name: "Main Cave Entrance", description: "The rock-cut portico with two massive pillared mandapas — each column with a square base, pot-shaped shaft, and cushion capital — creates a forest-like interior.", position: [0, 0, 1.5] }
    ],
    facts: [
      "The famous Trimurti sculpture is 6 metres tall and took decades to carve from living rock",
      "The island was named 'Elephanta' by Portuguese colonisers after a large stone elephant they found there",
      "There are seven cave temples in total on the island — five Hindu and two Buddhist",
      "The island can only be reached by a 1-hour ferry from the Gateway of India"
    ],
    factsHi: [
      "प्रसिद्ध त्रिमूर्ति मूर्तिकला 6 मीटर ऊँची है और जीवित चट्टान से तराशने में दशकों लगे",
      "पुर्तगाली उपनिवेशकों ने वहाँ मिले एक बड़े पत्थर के हाथी के नाम पर द्वीप का नाम 'एलिफेंटा' रखा",
      "द्वीप पर कुल सात गुफा मंदिर हैं — पाँच हिंदू और दो बौद्ध",
      "गेटवे ऑफ इंडिया से 1 घंटे की फेरी द्वारा ही द्वीप तक पहुँचा जा सकता है"
    ],
    visitingHours: "9:00 AM to 5:30 PM (Closed on Mondays)",
    visitingHoursHi: "सुबह 9:00 से शाम 5:30 बजे तक (सोमवार को बंद)",
    bestMonths: [10, 11, 0, 1, 2],
    bestTimeDesc: "October to February — Mumbai winters are mild and breezy (20–30°C), and the ferry ride across the harbour is pleasant. Avoid the monsoon (June–September) when ferry services are often suspended due to rough seas.",
    bestTimeDescHi: "अक्तूबर से फ़रवरी — मुंबई की सर्दियाँ हल्की और हवादार (20–30°C) होती हैं और हार्बर की नाव यात्रा सुखद होती है। मानसून (जून–सितंबर) से बचें जब समुद्री तूफान के कारण फेरी सेवाएँ अक्सर बंद रहती हैं।",
    timeline: [
      { year: "5th–6th century CE", event: "Main cave temples carved during the Kalachuri period; Trimurti sculpture created", eventHi: "कलचुरी काल में मुख्य गुफा मंदिर बनाए गए; त्रिमूर्ति मूर्तिकला निर्मित" },
      { year: "1534", event: "Portuguese arrive and use the cave sculptures for target practice, damaging many reliefs", eventHi: "पुर्तगाली आए और गुफा मूर्तियों का निशानेबाज़ी अभ्यास के लिए उपयोग किया, कई राहतें क्षतिग्रस्त हुईं" },
      { year: "1987", event: "UNESCO World Heritage Site designation", eventHi: "यूनेस्को विश्व धरोहर स्थल घोषित" }
    ],
    entryFee: "₹40 (Indians), ₹600 (Foreigners) + ferry charges",
    entryFeeHi: "₹40 (भारतीय), ₹600 (विदेशी) + फेरी शुल्क",
    UNESCO: true
  },
  {
    id: "rani-ki-vav",
    name: "Rani ki Vav",
    nameHi: "रानी की वाव",
    city: "Patan",
    state: "Gujarat",
    coordinates: [72.1022, 23.8586],
    description: "Rani ki Vav (Queen's Stepwell) in Patan, Gujarat is one of the most extraordinary examples of subterranean architecture and sculpture in the world. Built in the 11th century CE by Queen Udayamati in memory of her husband King Bhimdev I of the Solanki dynasty, this inverted-temple stepwell descends seven storeys underground and is decorated with over 500 major sculptures and more than 1,000 minor ones.",
    descriptionHi: "पाटण, गुजरात में रानी की वाव (रानी का बावड़ी) दुनिया में भूमिगत वास्तुकला और मूर्तिकला के सबसे असाधारण उदाहरणों में से एक है। 11वीं शताब्दी ई. में रानी उदयामती द्वारा सोलंकी राजवंश के अपने पति राजा भीमदेव प्रथम की स्मृति में निर्मित, यह उलटे मंदिर की बावड़ी सात मंजिल भूमिगत उतरती है।",
    yearBuilt: "1063 CE (Solanki dynasty)",
    dynasty: "Solanki Dynasty",
    dynastyHi: "सोलंकी राजवंश",
    primaryModel: "/models/rani_ki_vav.glb",
    historicalModels: { past: "/models/rani_ki_vav.glb", ancient: "/models/rani_ki_vav.glb" },
    era: "medieval",
    hotspots: [
      { name: "Vishnu Panels", description: "The walls are lined with over 500 sculptures of Vishnu in his ten avatars (Dashavatar) — the most comprehensive Dashavatar sculptural programme in India.", position: [0, 0.5, 0.8] },
      { name: "Seven Tiers", description: "The stepwell descends through seven elaborately carved tiers — each level a different architectural style — to reach the water at the bottom.", position: [0, -0.8, 0] },
      { name: "Apsara Sculptures", description: "Hundreds of graceful celestial maiden (apsara) figures are carved in niches — each unique in pose and adornment, representing the highest point of Solanki decorative art.", position: [1.0, 0.3, 0.6] }
    ],
    facts: [
      "Rani ki Vav contains over 500 major sculptures and more than 1,000 minor ones",
      "The stepwell was silted over and forgotten for 700 years before being excavated by the Archaeological Survey of India",
      "The Rani ki Vav image appears on the reverse of the Indian ₹100 note",
      "It is the only stepwell in India that has been awarded UNESCO World Heritage status"
    ],
    factsHi: [
      "रानी की वाव में 500 से अधिक प्रमुख मूर्तियाँ और 1,000 से अधिक छोटी मूर्तियाँ हैं",
      "बावड़ी 700 वर्षों तक गाद से ढकी और भुला दी गई थी, फिर भारतीय पुरातत्व सर्वेक्षण ने इसे खोदा",
      "रानी की वाव की छवि भारतीय ₹100 नोट के पिछले भाग पर है",
      "यह भारत की एकमात्र बावड़ी है जिसे यूनेस्को विश्व धरोहर का दर्जा मिला है"
    ],
    visitingHours: "8:00 AM to 6:00 PM (All days)",
    visitingHoursHi: "सुबह 8:00 से शाम 6:00 बजे तक (सभी दिन)",
    bestMonths: [10, 11, 0, 1, 2],
    bestTimeDesc: "October to February — Gujarat winters are comfortable (15–25°C) and the golden sandstone sculptures are beautifully lit in the low winter sun. Avoid May–June when temperatures in Patan can reach 45°C.",
    bestTimeDescHi: "अक्तूबर से फ़रवरी — गुजरात की सर्दियाँ आरामदायक (15–25°C) होती हैं और सोने जैसे बलुआ पत्थर की मूर्तियाँ सर्दियों की धूप में खूबसूरती से जगमगाती हैं।",
    timeline: [
      { year: "1063 CE", event: "Queen Udayamati builds Rani ki Vav in memory of her husband King Bhimdev I of the Solanki dynasty", eventHi: "रानी उदयामती ने अपने पति सोलंकी राजा भीमदेव प्रथम की स्मृति में रानी की वाव बनाई" },
      { year: "~1300 CE", event: "The stepwell is silted over by floods of the Saraswati river and buried for centuries", eventHi: "सरस्वती नदी की बाढ़ से बावड़ी गाद से ढक गई और सदियों तक दबी रही" },
      { year: "1980s", event: "Archaeological Survey of India excavates and restores the stepwell", eventHi: "भारतीय पुरातत्व सर्वेक्षण ने बावड़ी की खुदाई और जीर्णोद्धार किया" },
      { year: "2014", event: "UNESCO World Heritage Site designation; image added to ₹100 note", eventHi: "यूनेस्को विश्व धरोहर स्थल घोषित; ₹100 नोट पर चित्र जोड़ा गया" }
    ],
    entryFee: "₹25 (Indians), ₹300 (Foreigners)",
    entryFeeHi: "₹25 (भारतीय), ₹300 (विदेशी)",
    UNESCO: true
  },
  {
    id: "jantar-mantar",
    name: "Jantar Mantar",
    nameHi: "जंतर मंतर",
    city: "Jaipur",
    state: "Rajasthan",
    coordinates: [75.8245, 26.9247],
    description: "Jantar Mantar in Jaipur is a collection of 19 astronomical instruments built by the Rajput king Maharaja Jai Singh II between 1724 and 1735. The largest instrument — the Samrat Yantra — is a sundial 27 metres tall that can measure time to within 2 seconds of accuracy. This UNESCO World Heritage site represents the last great observatory of the classical astronomical tradition.",
    descriptionHi: "जयपुर का जंतर मंतर राजपूत राजा महाराजा जय सिंह द्वितीय द्वारा 1724 से 1735 के बीच बनाए गए 19 खगोलीय यंत्रों का संग्रह है। सबसे बड़ा यंत्र — सम्राट यंत्र — 27 मीटर ऊँची धूप घड़ी है जो 2 सेकंड की सटीकता के साथ समय माप सकती है।",
    yearBuilt: "1724–1735",
    dynasty: "Rajput (Kachwaha)",
    dynastyHi: "राजपूत (कछवाहा)",
    primaryModel: "/models/jantar_mantar.glb",
    historicalModels: { past: "/models/jantar_mantar.glb", ancient: "/models/jantar_mantar.glb" },
    era: "modern",
    hotspots: [
      { name: "Samrat Yantra", description: "The world's largest sundial — a 27-metre triangular gnomon whose shadow moves at 1 mm per second, allowing time measurement accurate to 2 seconds.", position: [0, 1.2, 0] },
      { name: "Jai Prakash Yantra", description: "Two hemispherical marble bowls sunk into the ground, with a web of cross-wires inside — used to observe the sun's position and verify the other instruments.", position: [0.8, -0.3, 0.8] },
      { name: "Ram Yantra", description: "Two large open cylindrical structures with a vertical rod at the centre — used to measure the altitude and azimuth of celestial bodies.", position: [-0.8, 0, 1.0] }
    ],
    facts: [
      "The Samrat Yantra is the world's largest sundial — accurate to within 2 seconds",
      "Maharaja Jai Singh II built five Jantar Mantar observatories across India — in Delhi, Jaipur, Ujjain, Mathura, and Varanasi",
      "All instruments are built from local pink sandstone, lime plaster, and marble — no metal or glass",
      "The observatory still produces accurate astronomical measurements today"
    ],
    factsHi: [
      "सम्राट यंत्र दुनिया की सबसे बड़ी धूप घड़ी है — 2 सेकंड की सटीकता के साथ",
      "महाराजा जय सिंह द्वितीय ने भारत भर में पाँच जंतर मंतर वेधशालाएँ बनाईं — दिल्ली, जयपुर, उज्जैन, मथुरा और वाराणसी में",
      "सभी यंत्र स्थानीय गुलाबी बलुआ पत्थर, चूने के प्लास्टर और संगमरमर से बने हैं — कोई धातु या काँच नहीं",
      "वेधशाला आज भी सटीक खगोलीय माप देती है"
    ],
    visitingHours: "9:00 AM to 4:30 PM (All days)",
    visitingHoursHi: "सुबह 9:00 से शाम 4:30 बजे तक (सभी दिन)",
    bestMonths: [10, 11, 0, 1, 2],
    bestTimeDesc: "October to March — Jaipur winters are clear and sunny, perfect for watching the sundials in action. Visit at solar noon to see the Samrat Yantra at maximum precision. Summer can be brutal at 45°C+.",
    bestTimeDescHi: "अक्तूबर से मार्च — जयपुर की सर्दियाँ साफ और धूपदार होती हैं, धूप घड़ियों को काम करते देखने के लिए आदर्श। सौर दोपहर पर जाएँ।",
    timeline: [
      { year: "1699", event: "Maharaja Jai Singh II ascends the throne of Amer at age 13 and develops deep interest in astronomy", eventHi: "महाराजा जय सिंह द्वितीय 13 वर्ष की आयु में आमेर के सिंहासन पर बैठे और खगोल विज्ञान में गहरी रुचि विकसित की" },
      { year: "1724–1735", event: "Jantar Mantar observatory built in Jaipur with 19 precision masonry instruments", eventHi: "जयपुर में 19 सटीक यंत्रों के साथ जंतर मंतर वेधशाला बनाई गई" },
      { year: "2010", event: "UNESCO World Heritage Site designation", eventHi: "यूनेस्को विश्व धरोहर स्थल घोषित" }
    ],
    entryFee: "₹50 (Indians), ₹200 (Foreigners)",
    entryFeeHi: "₹50 (भारतीय), ₹200 (विदेशी)",
    UNESCO: true
  },
  {
    id: "nalanda-ruins",
    name: "Nalanda Ruins",
    nameHi: "नालंदा",
    city: "Nalanda",
    state: "Bihar",
    coordinates: [85.4437, 25.1358],
    description: "Nalanda was the world's first residential university, flourishing from the 5th to 12th century CE in Bihar. At its peak, Nalanda accommodated 10,000 students and 2,000 teachers from across Asia, offering courses in logic, grammar, medicine, and Buddhist philosophy. The university was destroyed by the forces of Bakhtiyar Khilji around 1193 CE; the ruins that remain are a UNESCO World Heritage site.",
    descriptionHi: "नालंदा दुनिया का पहला आवासीय विश्वविद्यालय था, जो बिहार में 5वीं से 12वीं शताब्दी ई. तक फला-फूला। अपने चरम पर नालंदा में एशिया भर से 10,000 छात्र और 2,000 शिक्षक थे। विश्वविद्यालय को लगभग 1193 ई. में बख्तियार खिलजी की सेना ने नष्ट कर दिया था।",
    yearBuilt: "5th century CE (founded); destroyed ~1193 CE",
    dynasty: "Gupta to Pala dynasty patronage",
    dynastyHi: "गुप्त से पाल वंश संरक्षण",
    primaryModel: "/models/nalanda_ruins.glb",
    historicalModels: { past: "/models/nalanda_ruins.glb", ancient: "/models/nalanda_ruins.glb" },
    era: "ancient",
    hotspots: [
      { name: "Stupa 3 (Sariputta Stupa)", description: "The largest excavated stupa at Nalanda — a multi-tiered brick tower once holding relics of Sariputta, one of the Buddha's chief disciples.", position: [0, 1.0, 0] },
      { name: "Monastery 1", description: "The largest of the excavated monasteries — a rectangular quadrangle with rows of small monk cells on all four sides, revealing how thousands of students lived and studied.", position: [-0.8, 0, 1.0] },
      { name: "Temple Site 12", description: "One of the main teaching temples, with layers of successive construction visible — each Gupta or Pala king added a new outer layer over the previous structure.", position: [1.0, 0.5, 0.5] }
    ],
    facts: [
      "At its peak, Nalanda had a library of 9 million manuscripts spread across three buildings",
      "The university library burned for three months when set alight by Bakhtiyar Khilji's forces",
      "Students came from China, Korea, Japan, Tibet, Mongolia, Sri Lanka, and Southeast Asia",
      "Chinese traveller Xuanzang spent 5 years at Nalanda in the 7th century CE and left detailed accounts"
    ],
    factsHi: [
      "अपने चरम पर नालंदा में तीन इमारतों में फैले 90 लाख पांडुलिपियों का पुस्तकालय था",
      "बख्तियार खिलजी की सेना द्वारा आग लगाने पर विश्वविद्यालय का पुस्तकालय तीन महीने तक जलता रहा",
      "चीन, कोरिया, जापान, तिब्बत, मंगोलिया, श्रीलंका और दक्षिण-पूर्व एशिया से छात्र आते थे",
      "चीनी यात्री ह्वेनसांग ने 7वीं शताब्दी ई. में नालंदा में 5 साल बिताए"
    ],
    visitingHours: "Sunrise to Sunset (All days)",
    visitingHoursHi: "सूर्योदय से सूर्यास्त तक (सभी दिन)",
    bestMonths: [10, 11, 0, 1, 2],
    bestTimeDesc: "October to February — Bihar winters are pleasant and ideal for archaeological exploration. The Buddha Jayanti season (April/May) sees increased pilgrimage activity at nearby Bodh Gaya, making a combined trip worthwhile.",
    bestTimeDescHi: "अक्तूबर से फ़रवरी — बिहार की सर्दियाँ पुरातात्विक अन्वेषण के लिए सुखद और आदर्श हैं।",
    timeline: [
      { year: "~450 CE", event: "Nalanda University founded under Gupta Emperor Kumaragupta I's patronage", eventHi: "गुप्त सम्राट कुमारगुप्त प्रथम के संरक्षण में नालंदा विश्वविद्यालय की स्थापना" },
      { year: "629–645 CE", event: "Chinese scholar Xuanzang studies at Nalanda and documents its 10,000 students and vast library", eventHi: "चीनी विद्वान ह्वेनसांग ने नालंदा में अध्ययन किया और इसके 10,000 छात्रों और विशाल पुस्तकालय का दस्तावेज़ीकरण किया" },
      { year: "~1193 CE", event: "Nalanda sacked and burned by Bakhtiyar Khilji's forces; its library burns for months", eventHi: "बख्तियार खिलजी की सेना ने नालंदा को लूटा और जलाया; पुस्तकालय महीनों तक जलता रहा" },
      { year: "2016", event: "UNESCO World Heritage Site designation", eventHi: "यूनेस्को विश्व धरोहर स्थल घोषित" }
    ],
    entryFee: "₹15 (Indians), ₹200 (Foreigners)",
    entryFeeHi: "₹15 (भारतीय), ₹200 (विदेशी)",
    UNESCO: true
  },
  {
    id: "chittor-fort",
    name: "Chittor Fort",
    nameHi: "चित्तौड़गढ़ किला",
    city: "Chittorgarh",
    state: "Rajasthan",
    coordinates: [74.6444, 24.8887],
    description: "Chittorgarh Fort is the largest fort in India, sprawling across a 180-metre-high mesa plateau in Rajasthan. It has been the scene of three legendary sieges and three Jauhar (mass self-immolation) by Rajput women who chose death over dishonour. The fort contains the iconic Vijay Stambha (Tower of Victory), the Kirti Stambha, numerous palaces and temples, and is a UNESCO World Heritage site.",
    descriptionHi: "चित्तौड़गढ़ किला राजस्थान में 180 मीटर ऊँचे पठार पर भारत का सबसे बड़ा किला है। यह तीन महान घेराबंदियों और तीन जौहर (सामूहिक आत्मदाह) का स्थल रहा है जब राजपूत महिलाओं ने अपमान के बजाय मृत्यु को चुना।",
    yearBuilt: "7th century CE (founded); 15th–16th century (peak)",
    dynasty: "Mewar Rajput (Sisodia clan)",
    dynastyHi: "मेवाड़ राजपूत (सिसोदिया वंश)",
    primaryModel: "/models/chittor_fort.glb",
    historicalModels: { past: "/models/chittor_fort.glb", ancient: "/models/chittor_fort.glb" },
    era: "medieval",
    hotspots: [
      { name: "Vijay Stambha", description: "The 37-metre Tower of Victory built by Rana Kumbha in 1448 to commemorate his victory over Mahmud Khilji — nine storeys of intricately carved Hindu iconography.", position: [0, 1.5, 0.5] },
      { name: "Rani Padmini's Palace", description: "The palace of the legendary Rajput queen Rani Padmavati, whose beauty is said to have sparked Alauddin Khilji's 1303 siege — the first great Jauhar took place here.", position: [-0.8, 0.3, 1.0] },
      { name: "Kirti Stambha", description: "A 22-metre Jain tower of fame from the 12th century, covered with Jain Tirthankaras — predating the Vijay Stambha and equally ornate.", position: [1.0, 0.8, 0.5] }
    ],
    facts: [
      "Chittorgarh Fort is the largest fort in India at 700 acres",
      "The fort has been sacked three times — by Alauddin Khilji (1303), Bahadur Shah of Gujarat (1535), and Akbar (1568)",
      "Three Jauhars (mass self-immolation) took place here, each time to preserve Rajput honour",
      "The Vijay Stambha tower is inscribed with a virtual encyclopaedia of Hindu iconography"
    ],
    factsHi: [
      "चित्तौड़गढ़ किला 700 एकड़ में भारत का सबसे बड़ा किला है",
      "किले पर तीन बार आक्रमण हुआ — अलाउद्दीन खिलजी (1303), गुजरात के बहादुर शाह (1535) और अकबर (1568) द्वारा",
      "राजपूत सम्मान बचाने के लिए यहाँ तीन जौहर (सामूहिक आत्मदाह) हुए",
      "विजय स्तंभ हिंदू प्रतीकात्मकता का एक आभासी विश्वकोश है"
    ],
    visitingHours: "9:45 AM to 5:00 PM (All days)",
    visitingHoursHi: "सुबह 9:45 से शाम 5:00 बजे तक (सभी दिन)",
    bestMonths: [10, 11, 0, 1],
    bestTimeDesc: "October to February — Rajasthan winters are clear and dry (10–25°C) and the fort's beige sandstone glows in the low winter sun. The Jauhar Mela (March) is an annual cultural festival commemorating the Rajput sacrifices.",
    bestTimeDescHi: "अक्तूबर से फ़रवरी — राजस्थान की सर्दियाँ साफ और सूखी (10–25°C) होती हैं। मार्च में जौहर मेला राजपूत बलिदानों को स्मरण करता वार्षिक सांस्कृतिक उत्सव है।",
    timeline: [
      { year: "7th century CE", event: "Fort founded by Chitrangada Mori of the Maurya clan on the mesa plateau", eventHi: "मौर्य वंश के चित्रांगद मोरी ने पठार पर किले की स्थापना की" },
      { year: "1303", event: "Alauddin Khilji besieges the fort; first great Jauhar led by Rani Padmavati", eventHi: "अलाउद्दीन खिलजी ने किले की घेराबंदी की; रानी पद्मावती के नेतृत्व में पहला महान जौहर" },
      { year: "1568", event: "Akbar captures the fort after a great siege; third and final Jauhar", eventHi: "अकबर ने महान घेराबंदी के बाद किले पर कब्ज़ा किया; तीसरा और अंतिम जौहर" },
      { year: "2013", event: "UNESCO World Heritage Site as part of Hill Forts of Rajasthan", eventHi: "राजस्थान के पर्वतीय किलों के हिस्से के रूप में यूनेस्को विश्व धरोहर स्थल घोषित" }
    ],
    entryFee: "₹40 (Indians), ₹600 (Foreigners)",
    entryFeeHi: "₹40 (भारतीय), ₹600 (विदेशी)",
    UNESCO: true
  },
  {
    id: "kailasa-temple",
    name: "Kailasa Temple, Ellora",
    nameHi: "कैलाश मंदिर, एलोरा",
    city: "Aurangabad",
    state: "Maharashtra",
    coordinates: [75.1797, 20.0260],
    description: "The Kailasa Temple (Cave 16) at Ellora is the world's largest monolithic rock-cut structure. Built by the Rashtrakuta king Krishna I in the 8th century CE, the entire temple was carved top-down from a single basalt cliff face — an estimated 400,000 tonnes of rock removed by hammer and chisel. Dedicated to Shiva as Mount Kailash, it features a 32-metre-tall main shikhara and elaborate sculptural galleries.",
    descriptionHi: "एलोरा का कैलाश मंदिर (गुफा 16) दुनिया की सबसे बड़ी अखंड रॉक-कट संरचना है। 8वीं शताब्दी ई. में राष्ट्रकूट राजा कृष्ण प्रथम द्वारा निर्मित, पूरा मंदिर एक ही बेसाल्ट चट्टान के सामने से ऊपर से नीचे तक तराशा गया था — हथौड़े और छेनी से लगभग 4 लाख टन चट्टान निकाली गई।",
    yearBuilt: "756–773 CE",
    dynasty: "Rashtrakuta Dynasty",
    dynastyHi: "राष्ट्रकूट वंश",
    primaryModel: "/models/kailasa_temple.glb",
    historicalModels: { past: "/models/kailasa_temple.glb", ancient: "/models/kailasa_temple.glb" },
    era: "ancient",
    hotspots: [
      { name: "Main Shikhara", description: "The 32-metre Dravidian shikhara tower carved from the living rock — it stands free from the cliff entirely, defying any modern understanding of how it was engineered.", position: [0, 1.5, 0] },
      { name: "Ravana Shaking Kailash", description: "A massive sculpted panel showing the demon king Ravana lifting Mount Kailash — Shiva calmly pins it down with his toe. One of the greatest narrative sculptures in India.", position: [0.8, 0, 0.8] },
      { name: "Elephants at the Base", description: "The entire lower plinth of the temple is supported by life-sized carved stone elephants — appearing to carry the entire mountain on their backs.", position: [0, -0.5, 1.0] }
    ],
    facts: [
      "Kailasa Temple is the world's largest monolithic rock excavation — carved from a single cliff",
      "An estimated 400,000 tonnes of rock was removed to create it using only hand tools",
      "Construction was completed in approximately 18 years under a single king",
      "The temple was originally painted brilliant white to resemble snow-capped Mount Kailash"
    ],
    factsHi: [
      "कैलाश मंदिर दुनिया का सबसे बड़ा अखंड रॉक उत्खनन है — एकल चट्टान से तराशा गया",
      "इसे बनाने के लिए केवल हाथ के औज़ारों से अनुमानित 4 लाख टन चट्टान निकाली गई",
      "एक ही राजा के शासनकाल में लगभग 18 वर्षों में निर्माण पूर्ण हुआ",
      "मंदिर मूल रूप से बर्फ से ढके कैलाश पर्वत जैसा दिखने के लिए चमकीले सफेद रंग में रंगा गया था"
    ],
    visitingHours: "9:00 AM to 5:30 PM (Closed on Tuesdays)",
    visitingHoursHi: "सुबह 9:00 से शाम 5:30 बजे तक (मंगलवार को बंद)",
    bestMonths: [10, 11, 0, 1, 2],
    bestTimeDesc: "October to March — Maharashtra winters are cool and dry (15–28°C), ideal for exploring the rock-cut complex. The caves are often combined with Ajanta Caves in a 2-day excursion from Aurangabad. Avoid monsoon months when access roads can flood.",
    bestTimeDescHi: "अक्तूबर से मार्च — महाराष्ट्र की सर्दियाँ ठंडी और सूखी (15–28°C) होती हैं। गुफाओं को अक्सर औरंगाबाद से 2 दिन की यात्रा में अजंता गुफाओं के साथ जोड़ा जाता है।",
    timeline: [
      { year: "756 CE", event: "Rashtrakuta king Krishna I commissions the Kailasa Temple carved from a single cliff face", eventHi: "राष्ट्रकूट राजा कृष्ण प्रथम ने एकल चट्टान से तराशे जाने वाले कैलाश मंदिर का निर्माण शुरू करवाया" },
      { year: "773 CE", event: "Temple completed in approximately 18 years; originally painted brilliant white", eventHi: "लगभग 18 वर्षों में मंदिर पूर्ण हुआ; मूल रूप से चमकीले सफेद रंग में रंगा गया" },
      { year: "1983", event: "Ellora Caves (including Kailasa Temple) designated UNESCO World Heritage Site", eventHi: "एलोरा गुफाएँ (कैलाश मंदिर सहित) यूनेस्को विश्व धरोहर स्थल घोषित" }
    ],
    entryFee: "₹40 (Indians), ₹600 (Foreigners)",
    entryFeeHi: "₹40 (भारतीय), ₹600 (विदेशी)",
    UNESCO: true
  },
  // ── BATCH 3: 50 NEW MONUMENTS ──────────────────────────────────────────
  {
    id: "mehrangarh-fort",
    name: "Mehrangarh Fort",
    nameHi: "मेहरानगढ़ किला",
    city: "Jodhpur",
    state: "Rajasthan",
    coordinates: [73.0183, 26.2980],
    description: "Mehrangarh Fort is one of the largest forts in India, rising 125 metres above the blue city of Jodhpur on a sheer rocky cliff. Built by Rao Jodha in 1459 CE, its massive sandstone walls and seven successive gateways have guarded the city for over 500 years. Inside are several magnificent palaces with intricate carvings, latticed windows (jharokhas), and a museum holding Rajput artefacts.",
    descriptionHi: "मेहरानगढ़ किला भारत के सबसे बड़े किलों में से एक है, जो जोधपुर के नीले शहर के ऊपर एक खड़ी चट्टान पर 125 मीटर उठता है। 1459 में राव जोधा द्वारा निर्मित, इसकी विशाल बलुआ पत्थर की दीवारें और सात क्रमिक द्वार 500 से अधिक वर्षों से शहर की रक्षा करते हैं।",
    yearBuilt: "1459 CE",
    dynasty: "Rathore Rajput",
    dynastyHi: "राठौड़ राजपूत",
    primaryModel: "/models/mehrangarh_fort.glb",
    historicalModels: { past: "/models/mehrangarh_fort.glb", ancient: "/models/mehrangarh_fort.glb" },
    era: "medieval",
    hotspots: [
      { name: "Jayapol Gate", description: "The highest of Mehrangarh's seven gates, built by Maharaja Man Singh to celebrate his victories over the armies of Jaipur and Bikaner.", position: [0, 0.5, 1.5] },
      { name: "Moti Mahal", description: "The Pearl Palace — the largest of Mehrangarh's five royal chambers, where the Maharajas held public audience (darbars).", position: [0.8, 1.0, 0.5] },
      { name: "Sheesh Mahal", description: "The Mirror Palace with a ceiling studded with coloured glass and mirrors, one of the most ornate interiors in the Jodhpur fort complex.", position: [-0.8, 0.8, 0.5] }
    ],
    facts: [
      "Mehrangarh's walls are up to 36 metres thick — wide enough to drive a car across the top",
      "The cannons on the battlements were never fired in actual warfare — they were purely ceremonial",
      "The blue colour of Jodhpur's houses below was traditionally associated with Brahmin homes, but later all residents adopted it to repel insects",
      "The fort contains a famous handprint shrine of the wives who committed Sati on the funeral pyres of their husbands"
    ],
    factsHi: [
      "मेहरानगढ़ की दीवारें 36 मीटर तक मोटी हैं",
      "बुर्जों पर तोपें कभी असल लड़ाई में नहीं चलाई गईं — वे पूरी तरह से औपचारिक थीं",
      "जोधपुर के घरों का नीला रंग पहले ब्राह्मण घरों की पहचान था",
      "किले में सती की अनुयायी रानियों के हाथों के निशानों का प्रसिद्ध तीर्थस्थल है"
    ],
    visitingHours: "9:00 AM to 5:00 PM (All days)",
    visitingHoursHi: "सुबह 9:00 से शाम 5:00 बजे तक (सभी दिन)",
    bestMonths: [10, 11, 0, 1, 2],
    bestTimeDesc: "October to March — Jodhpur winters are warm and dry (15–28°C). The fort glows magnificently in the golden hour light. The Rajasthan International Folk Festival (RIFF) held at Mehrangarh every October is world-renowned.",
    bestTimeDescHi: "अक्तूबर से मार्च — जोधपुर की सर्दियाँ गर्म और सूखी (15–28°C) होती हैं। अक्तूबर में RIFF लोक संगीत उत्सव विश्व प्रसिद्ध है।",
    timeline: [
      { year: "1459 CE", event: "Rao Jodha founds Jodhpur and begins construction of Mehrangarh Fort on Bhakurcheeria Hill", eventHi: "राव जोधा ने जोधपुर की स्थापना की और भाकुरचेरिया पहाड़ी पर मेहरानगढ़ किले का निर्माण शुरू किया" },
      { year: "1806", event: "Jayapol Gate built by Maharaja Man Singh to celebrate victory over Jaipur and Bikaner", eventHi: "महाराजा मान सिंह ने जयपुर और बीकानेर पर विजय के उपलक्ष्य में जयापोल द्वार बनाया" }
    ],
    entryFee: "₹100 (Indians), ₹600 (Foreigners)",
    entryFeeHi: "₹100 (भारतीय), ₹600 (विदेशी)",
    UNESCO: false
  },
  {
    id: "jaisalmer-fort",
    name: "Jaisalmer Fort",
    nameHi: "जैसलमेर किला",
    city: "Jaisalmer",
    state: "Rajasthan",
    coordinates: [70.9101, 26.9124],
    description: "Jaisalmer Fort (Sonar Qila, the Golden Fort) is one of the few living forts in the world — about 3,000 people still reside within its walls. Built in 1156 CE by Rawal Jaisal on Tricuta Hill in the Thar Desert, the fort's yellow sandstone walls glow like gold at sunset, giving it the name 'Sonar Qila.' It contains palaces, Jain temples, havelis, and bazaars.",
    descriptionHi: "जैसलमेर किला (सोनार किला, सुनहरा किला) दुनिया के कुछ जीवित किलों में से एक है — इसकी दीवारों के भीतर लगभग 3,000 लोग अभी भी रहते हैं। 1156 ई. में रावल जैसल द्वारा थार रेगिस्तान में त्रिकूट पहाड़ी पर निर्मित, किले की पीली बलुआ पत्थर की दीवारें सूर्यास्त पर सोने की तरह चमकती हैं।",
    yearBuilt: "1156 CE",
    dynasty: "Bhati Rajput",
    dynastyHi: "भाटी राजपूत",
    primaryModel: "/models/jaisalmer_fort.glb",
    historicalModels: { past: "/models/jaisalmer_fort.glb", ancient: "/models/jaisalmer_fort.glb" },
    era: "medieval",
    hotspots: [
      { name: "Raj Mahal Palace", description: "The royal palace of the Jaisalmer rulers with ornate jharokhas (latticed balconies) and Jaisalmer yellow sandstone carvings, offering panoramic views of the desert.", position: [0, 1.0, 0] },
      { name: "Jain Temples (7 temples)", description: "Seven beautiful Jain temples built between the 12th–16th centuries inside the fort, with extraordinary marble carvings rivalling Dilwara and Ranakpur.", position: [0.8, 0.3, 0.8] },
      { name: "Trikuta Hill", description: "The fort sits on a three-peaked hill (Trikuta) 80 metres above the surrounding desert — its strategic position made it nearly impregnable for centuries.", position: [0, -0.3, 1.2] }
    ],
    facts: [
      "Jaisalmer Fort is one of the world's few living forts — about 3,000 people live inside its walls",
      "The fort glows golden-yellow at sunrise and sunset, earning it the name Sonar Qila (Golden Fort)",
      "The Jain temples inside Jaisalmer Fort contain some of the finest medieval Jain art in Rajasthan",
      "The fort has 99 bastions — 92 of these were built between 1633 and 1647"
    ],
    factsHi: [
      "जैसलमेर किला दुनिया के कुछ जीवित किलों में से एक है — इसकी दीवारों के अंदर लगभग 3,000 लोग रहते हैं",
      "किला सूर्योदय और सूर्यास्त पर सुनहरा-पीला चमकता है, इसलिए इसे सोनार किला कहते हैं",
      "जैसलमेर किले के अंदर जैन मंदिरों में राजस्थान की बेहतरीन मध्ययुगीन जैन कला है",
      "किले में 99 बुर्ज हैं — इनमें से 92 का निर्माण 1633 से 1647 के बीच हुआ"
    ],
    visitingHours: "9:00 AM to 6:00 PM (All days)",
    visitingHoursHi: "सुबह 9:00 से शाम 6:00 बजे तक (सभी दिन)",
    bestMonths: [10, 11, 0, 1, 2],
    bestTimeDesc: "October to March — the desert winter is cool and golden. Visit at sunrise or sunset when the entire fort turns luminous yellow. Avoid May–June when temperatures exceed 45°C.",
    bestTimeDescHi: "अक्तूबर से मार्च — रेगिस्तान की सर्दी ठंडी और सुनहरी होती है। सूर्योदय या सूर्यास्त पर जाएं जब पूरा किला चमकदार पीला हो जाता है।",
    timeline: [
      { year: "1156 CE", event: "Rawal Jaisal founds Jaisalmer city and fort on Tricuta Hill", eventHi: "रावल जैसल ने त्रिकूट पहाड़ी पर जैसलमेर शहर और किले की स्थापना की" },
      { year: "2013", event: "Hill Forts of Rajasthan (including Jaisalmer) inscribed as UNESCO World Heritage Site", eventHi: "राजस्थान के पर्वतीय किले (जैसलमेर सहित) यूनेस्को विश्व धरोहर स्थल घोषित" }
    ],
    entryFee: "₹50 (Indians), ₹250 (Foreigners)",
    entryFeeHi: "₹50 (भारतीय), ₹250 (विदेशी)",
    UNESCO: true
  },
  {
    id: "kumbhalgarh-fort",
    name: "Kumbhalgarh Fort",
    nameHi: "कुंभलगढ़ किला",
    city: "Rajsamand",
    state: "Rajasthan",
    coordinates: [73.5876, 25.1474],
    description: "Kumbhalgarh Fort is a UNESCO World Heritage site built by Maharana Kumbha between 1443 and 1458 CE. Its outer wall stretches an extraordinary 36 kilometres along the Aravalli Hills — the second-longest continuous wall in the world after the Great Wall of China. The fort contains 360 temples and was the birthplace of Maharana Pratap, the great Rajput hero.",
    descriptionHi: "कुंभलगढ़ किला एक यूनेस्को विश्व धरोहर स्थल है, जिसे महाराणा कुंभा ने 1443 से 1458 ई. के बीच बनाया था। इसकी बाहरी दीवार अरावली पहाड़ियों के साथ 36 किलोमीटर तक फैली हुई है — चीन की महान दीवार के बाद दुनिया की दूसरी सबसे लंबी दीवार।",
    yearBuilt: "1443–1458 CE",
    dynasty: "Mewar Rajput (Sisodia)",
    dynastyHi: "मेवाड़ राजपूत (सिसोदिया)",
    primaryModel: "/models/kumbhalgarh_fort.glb",
    historicalModels: { past: "/models/kumbhalgarh_fort.glb", ancient: "/models/kumbhalgarh_fort.glb" },
    era: "medieval",
    hotspots: [
      { name: "Great Wall", description: "The 36-km outer wall of Kumbhalgarh — wide enough for eight horses to ride abreast — the second-longest wall in the world, visible from space.", position: [0, 0, 1.5] },
      { name: "Badal Mahal", description: "The Cloud Palace at the summit of the fort, where Maharana Pratap was born in 1540 CE — a two-storey pavilion offering breathtaking views of the Aravalli Range.", position: [0, 1.5, 0] },
      { name: "Vedi Temple", description: "A Jain temple with a six-storey tower inside the fort — one of 360 temples within Kumbhalgarh's enormous perimeter.", position: [-0.8, 0.3, 0.8] }
    ],
    facts: [
      "Kumbhalgarh's outer wall is 36 km long — the second-longest wall in the world",
      "The fort contains 360 temples, including 300 Jain and 60 Hindu",
      "Maharana Pratap — the great Rajput hero who resisted Mughal conquest — was born here in 1540 CE",
      "The fort was only breached once in its history — by the combined armies of Akbar, Marwar, and Amber in 1576"
    ],
    factsHi: [
      "कुंभलगढ़ की बाहरी दीवार 36 किमी लंबी है — दुनिया की दूसरी सबसे लंबी दीवार",
      "किले में 360 मंदिर हैं, जिनमें 300 जैन और 60 हिंदू हैं",
      "महाराणा प्रताप — मुगल विजय का विरोध करने वाले महान राजपूत नायक — 1540 ई. में यहाँ पैदा हुए थे",
      "किले को इतिहास में केवल एक बार 1576 में अकबर, मारवाड़ और आमेर की संयुक्त सेनाओं ने भेदा"
    ],
    visitingHours: "9:00 AM to 6:00 PM (All days)",
    visitingHoursHi: "सुबह 9:00 से शाम 6:00 बजे तक (सभी दिन)",
    bestMonths: [10, 11, 0, 1, 2],
    bestTimeDesc: "October to February — the Aravalli hills are green and cool after the monsoon. A light and sound show is held at the fort on evenings from October to February.",
    bestTimeDescHi: "अक्तूबर से फ़रवरी — मानसून के बाद अरावली पहाड़ियाँ हरी और ठंडी होती हैं।",
    timeline: [
      { year: "1443–1458 CE", event: "Maharana Kumbha builds Kumbhalgarh Fort over 15 years on the Aravalli Hills", eventHi: "महाराणा कुंभा ने 15 वर्षों में अरावली पहाड़ियों पर कुंभलगढ़ किला बनाया" },
      { year: "1540 CE", event: "Maharana Pratap is born in the Badal Mahal within the fort", eventHi: "महाराणा प्रताप का जन्म किले के बादल महल में हुआ" },
      { year: "2013", event: "UNESCO World Heritage Site as part of Hill Forts of Rajasthan", eventHi: "राजस्थान के पर्वतीय किलों के हिस्से के रूप में यूनेस्को विश्व धरोहर" }
    ],
    entryFee: "₹40 (Indians), ₹600 (Foreigners)",
    entryFeeHi: "₹40 (भारतीय), ₹600 (विदेशी)",
    UNESCO: true
  },
  {
    id: "junagarh-fort",
    name: "Junagarh Fort",
    nameHi: "जूनागढ़ किला",
    city: "Bikaner",
    state: "Rajasthan",
    coordinates: [73.3113, 28.0175],
    description: "Junagarh Fort in Bikaner is one of the few major forts in Rajasthan that was never conquered. Built in 1593 CE by Raja Rai Singh, a general in Akbar's army, it sits on flat terrain (unlike other Rajasthani hill forts) and contains a stunning complex of 37 palaces and pavilions built over five centuries. Its Karan Mahal durbar hall and ornate Phool Mahal are masterpieces of Rajput-Mughal architecture.",
    descriptionHi: "बीकानेर का जूनागढ़ किला राजस्थान के कुछ प्रमुख किलों में से एक है जिसे कभी जीता नहीं गया। 1593 ई. में अकबर की सेना के सेनापति राजा राय सिंह द्वारा निर्मित, यह मैदानी भूमि पर स्थित है और पाँच शताब्दियों में बने 37 महलों और मंडपों का शानदार परिसर है।",
    yearBuilt: "1593 CE",
    dynasty: "Rathore Rajput (Bikaner)",
    dynastyHi: "राठौड़ राजपूत (बीकानेर)",
    primaryModel: "/models/junagarh_fort.glb",
    historicalModels: { past: "/models/junagarh_fort.glb", ancient: "/models/junagarh_fort.glb" },
    era: "medieval",
    hotspots: [
      { name: "Karan Mahal", description: "The Hall of Audience built by Maharaja Karan Singh in 1680, decorated with mirrors, gold leaf, and paintings — the finest durbar hall in Rajasthan.", position: [0.8, 0.8, 0.5] },
      { name: "Phool Mahal", description: "The Flower Palace with exquisite gold and floral paintings on every surface — considered one of the most ornate chambers in any Rajputana palace.", position: [-0.8, 0.5, 0.8] },
      { name: "Hawa Mahal (Bikaner)", description: "Not to be confused with Jaipur's Hawa Mahal — Bikaner's own Palace of Winds has intricately carved red sandstone jharokhas.", position: [0, 0.3, 1.2] }
    ],
    facts: [
      "Junagarh is one of the few major Rajasthani forts never conquered by an enemy",
      "The fort houses one of only two biplanes in the world that were used in World War I — gifted to Bikaner by the British",
      "The fort's construction spans five centuries — each ruler added new palaces in the style of their era",
      "There are 37 palaces and temples within Junagarh's moated walls"
    ],
    factsHi: [
      "जूनागढ़ राजस्थान के कुछ प्रमुख किलों में से एक है जिसे कभी दुश्मन ने नहीं जीता",
      "किले में प्रथम विश्व युद्ध में इस्तेमाल किए गए दुनिया के केवल दो बाइप्लेन में से एक है",
      "किले का निर्माण पाँच शताब्दियों तक फैला है",
      "जूनागढ़ की खाई वाली दीवारों के भीतर 37 महल और मंदिर हैं"
    ],
    visitingHours: "10:00 AM to 4:30 PM (All days)",
    visitingHoursHi: "सुबह 10:00 से शाम 4:30 बजे तक (सभी दिन)",
    bestMonths: [10, 11, 0, 1, 2],
    bestTimeDesc: "October to February — Bikaner's desert winters are pleasant (8–25°C). The Camel Festival in January is held nearby. Combine with Karni Mata temple (Rat Temple) in nearby Deshnok.",
    bestTimeDescHi: "अक्तूबर से फ़रवरी — बीकानेर की रेगिस्तानी सर्दियाँ सुखद (8–25°C) होती हैं।",
    timeline: [
      { year: "1588–1593 CE", event: "Raja Rai Singh builds Junagarh Fort on flat terrain without any hill for defence", eventHi: "राजा राय सिंह ने बिना पहाड़ के मैदान पर जूनागढ़ किला बनाया" },
      { year: "1680 CE", event: "Maharaja Karan Singh adds the magnificent Karan Mahal audience chamber", eventHi: "महाराजा करण सिंह ने शानदार करण महल दरबार हॉल जोड़ा" }
    ],
    entryFee: "₹50 (Indians), ₹300 (Foreigners)",
    entryFeeHi: "₹50 (भारतीय), ₹300 (विदेशी)",
    UNESCO: false
  },
  {
    id: "udaipur-city-palace",
    name: "City Palace, Udaipur",
    nameHi: "सिटी पैलेस, उदयपुर",
    city: "Udaipur",
    state: "Rajasthan",
    coordinates: [73.6851, 24.5764],
    description: "The City Palace of Udaipur is the largest palace complex in Rajasthan, built over 400 years by 22 successive Mewar kings. Overlooking the serene Lake Pichola, the palace is a grand fusion of Rajput, Mughal, European, and Chinese architectural styles. Its rooftop terraces offer some of the most beautiful views in India — the lake, the island palace (Jag Niwas / Taj Lake Palace), and the Aravalli hills.",
    descriptionHi: "उदयपुर का सिटी पैलेस राजस्थान का सबसे बड़ा महल परिसर है, जिसे 22 उत्तराधिकारी मेवाड़ राजाओं ने 400 वर्षों में बनाया। शांत पिछोला झील के ऊपर, महल राजपूत, मुगल, यूरोपीय और चीनी वास्तुशिल्प शैलियों का भव्य मिश्रण है।",
    yearBuilt: "1559 CE onwards (Maharana Udai Singh II)",
    dynasty: "Mewar Rajput (Sisodia)",
    dynastyHi: "मेवाड़ राजपूत (सिसोदिया)",
    primaryModel: "/models/udaipur_city_palace.glb",
    historicalModels: { past: "/models/udaipur_city_palace.glb", ancient: "/models/udaipur_city_palace.glb" },
    era: "medieval",
    hotspots: [
      { name: "Mor Chowk (Peacock Courtyard)", description: "The most photographed spot in the palace — a courtyard decorated with glass mosaics of three peacocks representing the seasons, painstakingly assembled from thousands of tiny coloured glass pieces.", position: [0, 0.8, 0.5] },
      { name: "Sheesh Mahal", description: "The Palace of Mirrors on the upper floors, where mirrored ceilings create the illusion of a starlit sky inside the palace chambers.", position: [0.8, 1.2, 0] },
      { name: "Lake Pichola View", description: "The palace's western terrace offers an unobstructed view of Lake Pichola, the Jag Niwas island palace (now Taj Lake Palace hotel), and the Aravalli hills.", position: [-0.5, 0.5, 1.0] }
    ],
    facts: [
      "The City Palace is the largest palace complex in Rajasthan — built over four centuries by 22 consecutive kings",
      "The palace's Peacock Courtyard (Mor Chowk) is covered in thousands of coloured glass mosaic tiles",
      "Part of the palace is now a luxury hotel (Fateh Prakash Palace) and another part a museum",
      "The Mewar royal family still resides in a private section of the palace today"
    ],
    factsHi: [
      "सिटी पैलेस राजस्थान का सबसे बड़ा महल परिसर है — 22 राजाओं द्वारा चार शताब्दियों में निर्मित",
      "महल के मोर चौक में हजारों रंगीन काँच की मोजेक टाइलें हैं",
      "महल का एक हिस्सा अब लक्जरी होटल (फतेह प्रकाश पैलेस) और दूसरा संग्रहालय है",
      "मेवाड़ शाही परिवार आज भी महल के एक निजी हिस्से में रहता है"
    ],
    visitingHours: "9:30 AM to 5:30 PM (All days)",
    visitingHoursHi: "सुबह 9:30 से शाम 5:30 बजे तक (सभी दिन)",
    bestMonths: [9, 10, 11, 0, 1, 2],
    bestTimeDesc: "September to March — Udaipur's post-monsoon lakes are full and the palace reflections in Lake Pichola are magical. Visit at sunrise or sunset for the best light on the white marble facades.",
    bestTimeDescHi: "सितंबर से मार्च — मानसून के बाद उदयपुर की झीलें भरी होती हैं और पिछोला झील में महल का प्रतिबिंब जादुई होता है।",
    timeline: [
      { year: "1559 CE", event: "Maharana Udai Singh II founds Udaipur city and begins the City Palace on Lake Pichola", eventHi: "महाराणा उदय सिंह द्वितीय ने उदयपुर शहर की स्थापना की और पिछोला झील पर सिटी पैलेस शुरू किया" },
      { year: "1736 CE", event: "Jag Niwas island palace (now Taj Lake Palace) built in the middle of Lake Pichola", eventHi: "जग निवास द्वीप महल (अब ताज लेक पैलेस) पिछोला झील के बीच में बनाया गया" }
    ],
    entryFee: "₹30 (Indians), ₹250 (Foreigners)",
    entryFeeHi: "₹30 (भारतीय), ₹250 (विदेशी)",
    UNESCO: false
  },
  {
    id: "ranakpur-temple",
    name: "Ranakpur Jain Temple",
    nameHi: "रणकपुर जैन मंदिर",
    city: "Ranakpur",
    state: "Rajasthan",
    coordinates: [73.4716, 25.1163],
    description: "The Ranakpur Chaturmukha Dharana Vihara is one of the largest and most important Jain temples in the world. Built in 1437 CE and dedicated to Adinatha (the first Jain Tirthankara), the temple is renowned for its 1,444 intricately carved marble pillars — no two are alike. Built over 65 years from white Makrana marble, it is considered the pinnacle of Jain marble temple architecture.",
    descriptionHi: "रणकपुर चतुर्मुख धर्ना विहार दुनिया के सबसे बड़े और महत्वपूर्ण जैन मंदिरों में से एक है। 1437 ई. में आदिनाथ को समर्पित, मंदिर 1,444 बारीक नक्काशीदार संगमरमर के स्तंभों के लिए प्रसिद्ध है — कोई दो एक जैसे नहीं हैं।",
    yearBuilt: "1437 CE (built over 65 years)",
    dynasty: "Solanki-era patronage (Seth Dharana Shah)",
    dynastyHi: "सोलंकी युग संरक्षण (सेठ धरण शाह)",
    primaryModel: "/models/ranakpur_temple.glb",
    historicalModels: { past: "/models/ranakpur_temple.glb", ancient: "/models/ranakpur_temple.glb" },
    era: "medieval",
    hotspots: [
      { name: "1,444 Pillars", description: "The temple's 1,444 marble pillars each tell a different story through their unique carvings. Standing in the centre of the hall, you can see through any of the 24 entrances simultaneously.", position: [0, 0.5, 0] },
      { name: "Nemi Mandir", description: "One of four subsidiary temples within the complex, dedicated to Neminatha — with its own set of elaborately carved pillars and ceilings.", position: [1.0, 0.3, 0.8] },
      { name: "Dancing Apsaras ceiling", description: "The domed ceilings above the main chamber are carved with celestial musicians and dancers — among the finest ceiling carvings in any Indian religious building.", position: [0, 1.5, 0] }
    ],
    facts: [
      "The temple has 1,444 carved marble pillars — no two are identical",
      "Construction took 65 years and required over 2 million kilograms of white marble",
      "The temple has 80 domes, 29 halls, 400 columns, and the main shikhara rises 45 metres",
      "The temple is still an active place of Jain worship and entry for non-Jains has certain restrictions"
    ],
    factsHi: [
      "मंदिर में 1,444 नक्काशीदार संगमरमर के स्तंभ हैं — कोई दो एक जैसे नहीं",
      "निर्माण में 65 साल और 20 लाख किलोग्राम से अधिक सफेद संगमरमर लगा",
      "मंदिर में 80 गुंबद, 29 हॉल, 400 स्तंभ हैं और मुख्य शिखर 45 मीटर ऊँचा है",
      "मंदिर अभी भी सक्रिय जैन पूजा स्थल है"
    ],
    visitingHours: "12:00 PM to 5:00 PM for non-Jains (Closed mornings for worship)",
    visitingHoursHi: "गैर-जैनों के लिए दोपहर 12:00 से शाम 5:00 बजे (सुबह पूजा के लिए बंद)",
    bestMonths: [9, 10, 11, 0, 1, 2],
    bestTimeDesc: "October to March — the marble glows softly in winter light. The surrounding Aravalli forest is lush after monsoon from September. Avoid the main Jain festival days when access for non-Jains may be restricted.",
    bestTimeDescHi: "अक्तूबर से मार्च — सर्दी की रोशनी में संगमरमर नरम चमक से दमकता है।",
    timeline: [
      { year: "1437 CE", event: "Seth Dharana Shah begins construction of the Chaturmukha temple, dedicated to Adinatha", eventHi: "सेठ धरण शाह ने आदिनाथ को समर्पित चतुर्मुख मंदिर का निर्माण शुरू किया" },
      { year: "1502 CE", event: "Temple completed after 65 years of continuous construction", eventHi: "65 साल के निरंतर निर्माण के बाद मंदिर पूर्ण हुआ" }
    ],
    entryFee: "Free (camera fee applies)",
    entryFeeHi: "निःशुल्क (कैमरा शुल्क लागू)",
    UNESCO: false
  },
  {
    id: "dilwara-temples",
    name: "Dilwara Jain Temples",
    nameHi: "दिलवाड़ा जैन मंदिर",
    city: "Mount Abu",
    state: "Rajasthan",
    coordinates: [72.7101, 24.5877],
    description: "The Dilwara Temples on Mount Abu are five Jain temples built between the 11th and 13th centuries CE, considered the finest examples of Jain marble architecture in the world. The Vimal Vasahi temple (1031 CE) and Luna Vasahi temple (1231 CE) are most famous for their incomparably detailed white marble carvings — every centimetre of ceiling, column, and wall is covered in breathtaking sculptural work.",
    descriptionHi: "माउंट आबू पर दिलवाड़ा मंदिर 11वीं और 13वीं शताब्दी के बीच बने पाँच जैन मंदिर हैं, जो दुनिया की बेहतरीन जैन संगमरमर वास्तुकला मानी जाती हैं। विमल वसही (1031 ई.) और लूना वसही (1231 ई.) मंदिर अपनी अतुलनीय विस्तृत सफेद संगमरमर नक्काशी के लिए प्रसिद्ध हैं।",
    yearBuilt: "1031–1300 CE (five temples)",
    dynasty: "Solanki dynasty patronage",
    dynastyHi: "सोलंकी वंश संरक्षण",
    primaryModel: "/models/dilwara_temples.glb",
    historicalModels: { past: "/models/dilwara_temples.glb", ancient: "/models/dilwara_temples.glb" },
    era: "medieval",
    hotspots: [
      { name: "Vimal Vasahi ceiling", description: "The incredible 11th-century domed ceiling of Vimal Vasahi temple — a circular chandelier of marble carved from a single slab into a dizzying lacework of lotus flowers and figures.", position: [0, 1.5, 0] },
      { name: "Luna Vasahi (Neminath Temple)", description: "The 1231 CE Luna Vasahi is considered even more ornate than Vimal Vasahi — its Hasti Shala (elephant hall) lined with carved elephants is particularly spectacular.", position: [1.0, 0.3, 0.8] },
      { name: "Mahavir Swami Temple", description: "The third of the five Dilwara temples, with a single domed sanctuary and superb carved pillar figures of celestial beings.", position: [-0.8, 0.2, 0.8] }
    ],
    facts: [
      "The Dilwara temples took between 14 and 1,500 craftsmen working daily for decades to complete",
      "Craftsmen were reportedly paid in gold equal to the weight of marble dust they produced each day",
      "From the outside the temples look plain — the extraordinary carving is entirely on the interior",
      "The Vimal Vasahi temple was built by Vimal Shah, a minister to the Solanki king, in 1031 CE"
    ],
    factsHi: [
      "दिलवाड़ा मंदिरों को पूरा करने में दशकों तक रोज 14 से 1,500 कारीगर काम करते थे",
      "कारीगरों को हर दिन उत्पादित संगमरमर की धूल के वजन के बराबर सोने में भुगतान किया जाता था",
      "बाहर से मंदिर सादे दिखते हैं — असाधारण नक्काशी पूरी तरह से अंदर है",
      "विमल वसही मंदिर 1031 ई. में सोलंकी राजा के मंत्री विमल शाह ने बनवाया"
    ],
    visitingHours: "12:00 PM to 6:00 PM for non-Jains",
    visitingHoursHi: "गैर-जैनों के लिए दोपहर 12:00 से शाम 6:00 बजे तक",
    bestMonths: [10, 11, 0, 1, 2],
    bestTimeDesc: "October to February — Mount Abu is India's only hill station in Rajasthan, pleasantly cool (5–20°C) in winter. The morning light inside the marble temples is magical. Non-Jains cannot enter before noon.",
    bestTimeDescHi: "अक्तूबर से फ़रवरी — माउंट आबू राजस्थान का एकमात्र हिल स्टेशन है, सर्दियों में सुखद ठंडा (5–20°C)।",
    timeline: [
      { year: "1031 CE", event: "Vimal Vasahi temple built by Vimal Shah, minister to the Solanki king Bhimdev I", eventHi: "सोलंकी राजा भीमदेव प्रथम के मंत्री विमल शाह ने विमल वसही मंदिर बनवाया" },
      { year: "1231 CE", event: "Luna Vasahi temple built by Tejpal and Vastupal, Solanki ministers", eventHi: "सोलंकी मंत्रियों तेजपाल और वास्तुपाल ने लूना वसही मंदिर बनाया" }
    ],
    entryFee: "Free (camera fee applies)",
    entryFeeHi: "निःशुल्क (कैमरा शुल्क लागू)",
    UNESCO: false
  },
  {
    id: "ajmer-dargah",
    name: "Ajmer Sharif Dargah",
    nameHi: "अजमेर शरीफ दरगाह",
    city: "Ajmer",
    state: "Rajasthan",
    coordinates: [74.6261, 26.4527],
    description: "The Ajmer Sharif Dargah is the shrine of the great Sufi saint Hazrat Khwaja Moinuddin Chishti, who came to Ajmer in 1192 CE. It is one of the most important places of pilgrimage in India, attracting people of all faiths — Muslim, Hindu, Sikh, and Christian alike. The main tomb chamber is covered with a gilded silver dome, and Akbar himself made pilgrimages here on foot from Agra.",
    descriptionHi: "अजमेर शरीफ दरगाह महान सूफी संत हज़रत ख्वाजा मोइनुद्दीन चिश्ती का मज़ार है, जो 1192 ई. में अजमेर आए थे। यह भारत में सबसे महत्वपूर्ण तीर्थ स्थलों में से एक है, जो सभी धर्मों के लोगों को आकर्षित करती है।",
    yearBuilt: "13th century CE (original shrine); expanded by Mughals",
    dynasty: "Mughal (major expansions by Akbar and Shahjahan)",
    dynastyHi: "मुगल (अकबर और शाहजहाँ द्वारा प्रमुख विस्तार)",
    primaryModel: "/models/ajmer_dargah.glb",
    historicalModels: { past: "/models/ajmer_dargah.glb", ancient: "/models/ajmer_dargah.glb" },
    era: "medieval",
    hotspots: [
      { name: "Dargah (Main Tomb)", description: "The marble tomb of Khwaja Moinuddin Chishti, covered with a silver dome — pilgrims offer rose petals and pray at the tomb for blessings (duas).", position: [0, 1.0, 0] },
      { name: "Buland Darwaza", description: "The grand entrance gate of the dargah, 14 metres high, built by Mahmud Khilji of Malwa in 1455 CE — its massive wooden doors are studded with horseshoes donated by pilgrims.", position: [0, 0, 1.5] },
      { name: "Deg (Cauldron)", description: "Two enormous iron cauldrons (degs) in the courtyard — the larger one can hold 4,800 kg of food for langar (community feast) cooked during the Urs festival.", position: [0.8, 0, 0.5] }
    ],
    facts: [
      "Akbar and his wives made barefoot pilgrimages from Agra to Ajmer to pray at the dargah",
      "The Urs festival (death anniversary) draws over 500,000 pilgrims from across the world each year",
      "The dargah receives devotees of all faiths — it is the living heart of India's syncretic culture",
      "Emperor Akbar gifted the large iron cauldron (deg) to the dargah after the birth of his heir Salim (Jahangir)"
    ],
    factsHi: [
      "अकबर और उनकी पत्नियाँ दरगाह में प्रार्थना करने के लिए आगरा से नंगे पाँव तीर्थ यात्रा करती थीं",
      "उर्स उत्सव (पुण्यतिथि) हर साल दुनिया भर से 5 लाख से अधिक तीर्थयात्री आते हैं",
      "दरगाह सभी धर्मों के भक्तों को स्वीकार करती है — यह भारत की समन्वयी संस्कृति का जीवित केंद्र है",
      "अकबर ने अपने उत्तराधिकारी सलीम (जहाँगीर) के जन्म के बाद बड़ी लोहे की देग दरगाह को उपहार दी"
    ],
    visitingHours: "5:00 AM to 9:00 PM (All days); special times during Urs",
    visitingHoursHi: "सुबह 5:00 से रात 9:00 बजे तक (सभी दिन); उर्स के दौरान विशेष समय",
    bestMonths: [10, 11, 0, 1, 2, 3],
    bestTimeDesc: "Year-round as a pilgrimage site. The Urs festival (held in the Islamic month of Rajab, typically March/April) is the most spectacular time to visit but also most crowded.",
    bestTimeDescHi: "तीर्थयात्रा स्थल के रूप में साल भर। उर्स उत्सव (इस्लामिक माह रजब में, आमतौर पर मार्च/अप्रैल) सबसे शानदार लेकिन सबसे भीड़भाड़ वाला समय है।",
    timeline: [
      { year: "1192 CE", event: "Hazrat Khwaja Moinuddin Chishti arrives in Ajmer and establishes himself as the city's spiritual guide", eventHi: "हज़रत ख्वाजा मोइनुद्दीन चिश्ती अजमेर आए और शहर के आध्यात्मिक मार्गदर्शक बने" },
      { year: "1236 CE", event: "Khwaja Moinuddin Chishti passes away; his dargah becomes a major pilgrimage site", eventHi: "ख्वाजा मोइनुद्दीन चिश्ती का निधन; उनकी दरगाह प्रमुख तीर्थस्थल बनी" },
      { year: "16th century", event: "Mughal Emperor Akbar makes repeated pilgrimages and expands the dargah complex", eventHi: "मुगल सम्राट अकबर ने बार-बार तीर्थयात्रा की और दरगाह परिसर का विस्तार किया" }
    ],
    entryFee: "Free (offerings voluntary)",
    entryFeeHi: "निःशुल्क (भेंट ऐच्छिक)",
    UNESCO: false
  },
  {
    id: "purana-qila",
    name: "Purana Qila",
    nameHi: "पुराना किला",
    city: "Delhi",
    state: "Delhi",
    coordinates: [77.2421, 28.6126],
    description: "Purana Qila (Old Fort) is one of the oldest forts in Delhi, built on the site of the legendary city of Indraprastha from the Mahabharata. The current fort was begun by Humayun and completed by Sher Shah Suri around 1545 CE. Inside are the beautiful Qila-i-Kuhna Mosque (1541 CE) and the Sher Mandal octagonal tower where Humayun fell and died.",
    descriptionHi: "पुराना किला दिल्ली के सबसे पुराने किलों में से एक है, जो महाभारत के पौराणिक शहर इंद्रप्रस्थ की जगह पर बना है। मौजूदा किला हुमायूँ द्वारा शुरू किया गया और लगभग 1545 ई. में शेर शाह सूरी द्वारा पूरा किया गया।",
    yearBuilt: "1533–1545 CE",
    dynasty: "Sur Empire (Sher Shah Suri) / Mughal",
    dynastyHi: "सूर साम्राज्य (शेर शाह सूरी) / मुगल",
    primaryModel: "/models/purana_qila.glb",
    historicalModels: { past: "/models/purana_qila.glb", ancient: "/models/purana_qila.glb" },
    era: "medieval",
    hotspots: [
      { name: "Qila-i-Kuhna Mosque", description: "Built by Sher Shah Suri in 1541 CE — a superb example of early Mughal-Suri mosque architecture with five arched bays of red sandstone inlaid with white marble.", position: [0.8, 0.5, 0.8] },
      { name: "Sher Mandal", description: "The octagonal tower where Humayun fell down the stairs while carrying books from his library and died in 1556 CE — the tower was his personal library and observatory.", position: [-0.5, 0.8, 0.5] },
      { name: "Talaq Darwaza", description: "The southern gate of Purana Qila — the most architecturally detailed gateway with a horseshoe-arch central bay flanked by octagonal towers.", position: [0, 0, 1.5] }
    ],
    facts: [
      "Archaeological excavations at Purana Qila have uncovered remains from 2500 BCE, suggesting continuous habitation for 4,500 years",
      "Humayun died here in 1556 — he fell from the top of the Sher Mandal tower while descending the stairs with his hands full of books",
      "Sher Shah Suri temporarily ousted Humayun and built most of the current fort — one of Humayun's great rivals",
      "A large artificial lake inside the fort was dug by Sher Shah for pleasure boating"
    ],
    factsHi: [
      "पुराना किला में पुरातात्विक उत्खनन में 2500 ईसा पूर्व के अवशेष मिले हैं — 4,500 वर्षों की निरंतर बसावट",
      "हुमायूँ 1556 में यहाँ मर गए — शेर मंडल टॉवर की सीढ़ियों से हाथ में किताबें लिए उतरते समय गिर गए",
      "शेर शाह सूरी ने अस्थायी रूप से हुमायूँ को हटाया और मौजूदा किले का अधिकांश भाग बनाया",
      "किले के अंदर एक बड़ी कृत्रिम झील शेर शाह ने नौका विहार के लिए खोदवाई थी"
    ],
    visitingHours: "7:00 AM to 5:00 PM (All days)",
    visitingHoursHi: "सुबह 7:00 से शाम 5:00 बजे तक (सभी दिन)",
    bestMonths: [9, 10, 11, 0, 1, 2],
    bestTimeDesc: "October to February — Delhi winters are pleasant (8–22°C). The Purana Qila lake (boating available in the moat outside the fort) is especially scenic in winter morning mist.",
    bestTimeDescHi: "अक्तूबर से फ़रवरी — दिल्ली की सर्दियाँ सुखद (8–22°C) होती हैं।",
    timeline: [
      { year: "1533 CE", event: "Humayun begins construction of Dinpanah (Refuge of the Faith) on the site of ancient Indraprastha", eventHi: "हुमायूँ ने प्राचीन इंद्रप्रस्थ की जगह पर दीनपनाह (आस्था की शरण) का निर्माण शुरू किया" },
      { year: "1540–1545 CE", event: "Sher Shah Suri captures Delhi, renames the fort Sher Garh, and builds the mosque and towers", eventHi: "शेर शाह सूरी ने दिल्ली पर कब्ज़ा किया, किले का नाम शेर गढ़ रखा और मस्जिद और टॉवर बनाए" },
      { year: "1556 CE", event: "Humayun dies falling from the Sher Mandal library tower; Akbar recaptures Delhi", eventHi: "हुमायूँ शेर मंडल पुस्तकालय टॉवर से गिरकर मर गए; अकबर ने दिल्ली पर पुनः कब्ज़ा किया" }
    ],
    entryFee: "₹20 (Indians), ₹200 (Foreigners)",
    entryFeeHi: "₹20 (भारतीय), ₹200 (विदेशी)",
    UNESCO: false
  },
  {
    id: "safdarjung-tomb",
    name: "Safdarjung's Tomb",
    nameHi: "सफदरजंग का मकबरा",
    city: "Delhi",
    state: "Delhi",
    coordinates: [77.2089, 28.5910],
    description: "Safdarjung's Tomb is the last great Mughal garden tomb, built in 1754 CE for Mirza Muqim Abul Mansur Khan (Safdarjung), the Prime Minister of the Mughal Empire under Muhammad Shah. It represents the twilight of the Mughal architectural tradition — the craftsmanship is still refined, but on a reduced scale compared to earlier masterpieces like Humayun's Tomb.",
    descriptionHi: "सफदरजंग का मकबरा अंतिम महान मुगल गार्डन-टॉम्ब है, जो 1754 ई. में मुहम्मद शाह के तहत मुगल साम्राज्य के प्रधानमंत्री मिर्जा मुकिम अबुल मंसूर खान (सफदरजंग) के लिए बनाया गया था।",
    yearBuilt: "1754 CE",
    dynasty: "Mughal (late period)",
    dynastyHi: "मुगल (उत्तर काल)",
    primaryModel: "/models/safdarjung_tomb.glb",
    historicalModels: { past: "/models/safdarjung_tomb.glb", ancient: "/models/safdarjung_tomb.glb" },
    era: "modern",
    hotspots: [
      { name: "Main Tomb Chamber", description: "The central mausoleum with its white marble double dome — the last dome of this type constructed in the Mughal tradition, inspired directly by Humayun's Tomb.", position: [0, 1.5, 0] },
      { name: "Charbagh Garden", description: "The formal four-part garden, now lovingly maintained as a public park — one of the greenest and most peaceful spots in central Delhi.", position: [0, -0.5, 1.5] },
      { name: "Moti Mahal & Jangli Mahal", description: "Two small pavilions flanking the main gateway — their names ('Pearl Palace' and 'Wilderness Palace') hint at their original decorative splendour, now faded.", position: [1.0, 0.5, 0.8] }
    ],
    facts: [
      "This was the last garden tomb built in the Mughal tradition in India",
      "British colonists used the tomb as an office and later as a hunting lodge — many of the original decorations were stripped",
      "The building reused marble from other monuments, including the tomb of Khan-i-Khanan in nearby Nizamuddin",
      "The tomb is surrounded by one of the most peaceful green gardens in central Delhi, popular with morning walkers"
    ],
    factsHi: [
      "यह भारत में मुगल परंपरा में बना अंतिम गार्डन टॉम्ब था",
      "ब्रिटिश उपनिवेशकों ने मकबरे का उपयोग कार्यालय और बाद में शिकार के ठिकाने के रूप में किया",
      "इमारत में अन्य स्मारकों का संगमरमर पुनः उपयोग किया गया, जिसमें पास में खान-ए-खाना का मकबरा शामिल है",
      "मकबरा मध्य दिल्ली के सबसे शांत हरे बगीचों में से एक से घिरा है"
    ],
    visitingHours: "Sunrise to Sunset (All days)",
    visitingHoursHi: "सूर्योदय से सूर्यास्त तक (सभी दिन)",
    bestMonths: [10, 11, 0, 1, 2],
    bestTimeDesc: "October to March — Delhi winters make the garden exceptionally pleasant. The garden is at its most beautiful in February when the flowers bloom.",
    bestTimeDescHi: "अक्तूबर से मार्च — दिल्ली की सर्दियाँ बगीचे को असाधारण रूप से सुखद बनाती हैं।",
    timeline: [
      { year: "1748 CE", event: "Safdarjung, Prime Minister of the Mughal Empire, dies in Farrukhabd", eventHi: "मुगल साम्राज्य के प्रधानमंत्री सफदरजंग का फ़र्रुखाबाद में निधन" },
      { year: "1754 CE", event: "His son Shuja-ud-Daula builds this tomb in Delhi, marking the twilight of Mughal architecture", eventHi: "उनके बेटे शुजा-उद-दौला ने दिल्ली में यह मकबरा बनाया, जो मुगल वास्तुकला की संध्या का प्रतीक है" }
    ],
    entryFee: "₹15 (Indians), ₹200 (Foreigners)",
    entryFeeHi: "₹15 (भारतीय), ₹200 (विदेशी)",
    UNESCO: false
  },
  {
    id: "jama-masjid",
    name: "Jama Masjid, Delhi",
    nameHi: "जामा मस्जिद, दिल्ली",
    city: "Delhi",
    state: "Delhi",
    coordinates: [77.2334, 28.6507],
    description: "The Jama Masjid of Delhi is the largest mosque in India, built by Mughal Emperor Shah Jahan between 1644 and 1656 CE. The mosque can accommodate 25,000 worshippers in its vast courtyard. Its twin red sandstone minarets and three white marble onion domes are iconic landmarks of Old Delhi. The mosque took 12 years to build, with a workforce of 5,000.",
    descriptionHi: "दिल्ली की जामा मस्जिद भारत की सबसे बड़ी मस्जिद है, जिसे मुगल सम्राट शाहजहाँ ने 1644 से 1656 ई. के बीच बनाया। मस्जिद के विशाल प्रांगण में 25,000 उपासक आ सकते हैं। इसके जुड़वाँ लाल बलुआ पत्थर मीनारें और तीन सफेद संगमरमर के गुंबद पुरानी दिल्ली के प्रतिष्ठित स्थलचिह्न हैं।",
    yearBuilt: "1644–1656 CE",
    dynasty: "Mughal Empire (Shah Jahan)",
    dynastyHi: "मुगल साम्राज्य (शाहजहाँ)",
    primaryModel: "/models/jama_masjid.glb",
    historicalModels: { past: "/models/jama_masjid.glb", ancient: "/models/jama_masjid.glb" },
    era: "medieval",
    hotspots: [
      { name: "Main Dome and Minarets", description: "The three white marble domes striped with black marble, flanked by two 40-metre minarets — the visual centrepiece of the mosque and of Old Delhi.", position: [0, 1.5, 0] },
      { name: "Main Courtyard", description: "The vast 100-metre-square sandstone courtyard, capable of holding 25,000 worshippers — it functions as the spiritual and social heart of Old Delhi to this day.", position: [0, -0.3, 0] },
      { name: "Relics Chamber", description: "A chamber in the northern tower houses sacred relics: a hair of the Prophet Muhammad, a sandal of the Prophet, and an impression of his foot in stone.", position: [1.0, 0.8, 0.5] }
    ],
    facts: [
      "Jama Masjid is India's largest mosque — its courtyard can hold 25,000 worshippers at Friday prayers",
      "Construction took 12 years (1644–1656) and employed 5,000 workers",
      "The mosque is built on a natural rock 10 metres above the surrounding area — reached by three great gateways",
      "Entry to the mosque requires appropriate modest dress; women must cover their heads"
    ],
    factsHi: [
      "जामा मस्जिद भारत की सबसे बड़ी मस्जिद है — इसके प्रांगण में शुक्रवार की नमाज़ में 25,000 उपासक आ सकते हैं",
      "निर्माण में 12 साल (1644–1656) और 5,000 श्रमिक लगे",
      "मस्जिद आसपास से 10 मीटर ऊँची प्राकृतिक चट्टान पर बनी है — तीन बड़े द्वारों से पहुँचें",
      "मस्जिद में प्रवेश के लिए उचित शालीन पोशाक जरूरी है; महिलाओं को सिर ढकना होगा"
    ],
    visitingHours: "7:00 AM to 12:00 PM, 1:30 PM to 6:30 PM (Closed during prayer times)",
    visitingHoursHi: "सुबह 7:00 से दोपहर 12:00, दोपहर 1:30 से शाम 6:30 बजे तक (नमाज़ के समय बंद)",
    bestMonths: [9, 10, 11, 0, 1, 2],
    bestTimeDesc: "October to February — Delhi winters are pleasant. Friday prayers at Jama Masjid are a remarkable cultural experience. The mosque is closed to non-Muslims during the five daily prayer times.",
    bestTimeDescHi: "अक्तूबर से फ़रवरी — दिल्ली की सर्दियाँ सुखद होती हैं। जामा मस्जिद में शुक्रवार की नमाज़ एक उल्लेखनीय सांस्कृतिक अनुभव है।",
    timeline: [
      { year: "1644 CE", event: "Shah Jahan commissions Jama Masjid, his last major architectural project in Delhi", eventHi: "शाहजहाँ ने दिल्ली में अपनी आखिरी बड़ी वास्तुशिल्प परियोजना जामा मस्जिद शुरू की" },
      { year: "1656 CE", event: "Jama Masjid completed and inaugurated by Imam Syed Abdul Ghafoor Shah Bukhari", eventHi: "जामा मस्जिद पूर्ण हुई और इमाम सैयद अब्दुल गफूर शाह बुखारी द्वारा उद्घाटन किया गया" }
    ],
    entryFee: "Free (camera fee applies; tower climb fee)",
    entryFeeHi: "निःशुल्क (कैमरा शुल्क लागू; मीनार चढ़ाई शुल्क)",
    UNESCO: false
  },
  {
    id: "itmad-ud-daulah",
    name: "Itmad-ud-Daulah's Tomb",
    nameHi: "इतमाद-उद-दौला का मकबरा",
    city: "Agra",
    state: "Uttar Pradesh",
    coordinates: [78.0396, 27.1965],
    description: "Itmad-ud-Daulah's Tomb — nicknamed the 'Baby Taj' — is a Mughal mausoleum built by Empress Nur Jahan (wife of Jahangir) between 1622 and 1628 for her father Mirza Ghiyas Beg (Itmad-ud-Daulah). It was the first Mughal structure built entirely of white marble and the first to use extensive pietra dura (stone inlay) — techniques later perfected in the Taj Mahal.",
    descriptionHi: "इतमाद-उद-दौला का मकबरा — 'बेबी ताज' उपनाम — एक मुगल मकबरा है जो महारानी नूर जहाँ (जहाँगीर की पत्नी) ने 1622 से 1628 के बीच अपने पिता मिर्जा गियास बेग के लिए बनाया। यह पूरी तरह सफेद संगमरमर से बना पहला मुगल स्मारक और व्यापक पिएत्रा दुरा (पत्थर जड़ाई) का उपयोग करने वाला पहला था।",
    yearBuilt: "1622–1628 CE",
    dynasty: "Mughal Empire (Nur Jahan)",
    dynastyHi: "मुगल साम्राज्य (नूर जहाँ)",
    primaryModel: "/models/itmad_ud_daulah.glb",
    historicalModels: { past: "/models/itmad_ud_daulah.glb", ancient: "/models/itmad_ud_daulah.glb" },
    era: "medieval",
    hotspots: [
      { name: "Pietra Dura Inlay", description: "Every surface of the tomb is decorated with intricate pietra dura — geometric and floral patterns inlaid with lapis lazuli, onyx, jasper, and topaz. This pioneered the technique later used on the Taj Mahal.", position: [0.5, 0.5, 0.5] },
      { name: "Four Corner Towers", description: "The four slender octagonal minarets at the corners of the platform — shorter and more delicate than those of the Taj Mahal, with perforated marble railings.", position: [1.0, 0.8, 0.8] },
      { name: "Perforated Marble Screens", description: "The windows are filled with white marble lattice screens of extraordinary delicacy — different geometric patterns in each window, allowing light to filter into the tomb chamber.", position: [0, 0.8, 1.0] }
    ],
    facts: [
      "This was the first Mughal structure built entirely of white marble rather than red sandstone",
      "It pioneered the pietra dura stone inlay technique that was later perfected in the Taj Mahal",
      "The tomb was built by a woman (Empress Nur Jahan) for her father — unusual even by Mughal standards",
      "The tomb chamber inside has the most ornate pietra dura decoration of any Mughal building"
    ],
    factsHi: [
      "यह लाल बलुआ पत्थर के बजाय पूरी तरह सफेद संगमरमर से बना पहला मुगल स्मारक था",
      "इसने पिएत्रा दुरा तकनीक को अग्रगामी बनाया जो बाद में ताज महल में पूर्णता तक पहुँची",
      "मकबरा एक महिला (महारानी नूर जहाँ) ने अपने पिता के लिए बनवाया — मुगल मानकों से भी असामान्य",
      "आंतरिक मकबरा कक्ष में किसी भी मुगल इमारत की सबसे अलंकृत पिएत्रा दुरा सजावट है"
    ],
    visitingHours: "Sunrise to Sunset (Closed on Fridays)",
    visitingHoursHi: "सूर्योदय से सूर्यास्त तक (शुक्रवार को बंद)",
    bestMonths: [10, 11, 0, 1, 2],
    bestTimeDesc: "October to March — the same winter window as the Taj Mahal, just across the Yamuna river. Many visitors combine both in a single Agra visit. Sunrise light on the white marble and stone inlay is exceptional.",
    bestTimeDescHi: "अक्तूबर से मार्च — ताज महल के समान सर्दियों की खिड़की, यमुना नदी के उस पार। कई पर्यटक दोनों को एक ही आगरा यात्रा में जोड़ते हैं।",
    timeline: [
      { year: "1622 CE", event: "Empress Nur Jahan begins construction of the tomb for her father Itmad-ud-Daulah (Mirza Ghiyas Beg)", eventHi: "महारानी नूर जहाँ ने अपने पिता इतमाद-उद-दौला के लिए मकबरे का निर्माण शुरू किया" },
      { year: "1628 CE", event: "Tomb completed — the first Mughal building of white marble with pietra dura inlay, inspiring the Taj Mahal", eventHi: "मकबरा पूर्ण — पिएत्रा दुरा जड़ाई के साथ सफेद संगमरमर की पहली मुगल इमारत, जिसने ताज महल को प्रेरित किया" }
    ],
    entryFee: "₹35 (Indians), ₹550 (Foreigners)",
    entryFeeHi: "₹35 (भारतीय), ₹550 (विदेशी)",
    UNESCO: false
  },
  {
    id: "akbars-tomb",
    name: "Akbar's Tomb, Sikandra",
    nameHi: "अकबर का मकबरा, सिकंदरा",
    city: "Agra",
    state: "Uttar Pradesh",
    coordinates: [77.9633, 27.2086],
    description: "Akbar's Tomb at Sikandra (near Agra) is a unique monument — unlike any other Mughal mausoleum. Built from 1605 to 1613, it is a five-storey stepped pyramid of red sandstone topped not with a dome but with an open white marble courtyard housing the cenotaph. Akbar himself designed the tomb before his death, blending Hindu, Buddhist, and Islamic architectural elements in his characteristic syncretic style.",
    descriptionHi: "सिकंदरा (आगरा के पास) में अकबर का मकबरा एक अनूठा स्मारक है। 1605 से 1613 तक निर्मित, यह लाल बलुआ पत्थर का पाँच मंजिला सीढ़ीदार पिरामिड है, जिसकी छत पर गुंबद नहीं बल्कि एक खुला सफेद संगमरमर का प्रांगण है।",
    yearBuilt: "1605–1613 CE",
    dynasty: "Mughal Empire",
    dynastyHi: "मुगल साम्राज्य",
    primaryModel: "/models/akbars_tomb.glb",
    historicalModels: { past: "/models/akbars_tomb.glb", ancient: "/models/akbars_tomb.glb" },
    era: "medieval",
    hotspots: [
      { name: "Southern Gateway", description: "The monumental gateway decorated with white marble inlay and colourful mosaic patterns — one of the most ornate gateways of the Mughal era.", position: [0, 0, 1.5] },
      { name: "Stepped Pyramid", description: "Four storeys of red sandstone, each slightly smaller, rising to a rooftop marble courtyard — an architectural form unique in the Mughal tradition.", position: [0, 1.2, 0] },
      { name: "Deer Park", description: "The large enclosure surrounding the tomb is home to deer, peacocks, and monkeys that freely roam — Akbar was famous for his love of animals, and the park reflects this.", position: [-1.0, 0, 0.8] }
    ],
    facts: [
      "Akbar's Tomb is the only major Mughal mausoleum without a dome — topped instead by an open marble platform",
      "Akbar himself began designing his tomb before his death in 1605 — construction was completed by Jahangir",
      "The tomb blends Hindu, Buddhist, Jain, and Islamic architectural motifs in a single structure",
      "The deer park surrounding the tomb is one of the few green sanctuaries near Agra city"
    ],
    factsHi: [
      "अकबर का मकबरा एकमात्र प्रमुख मुगल मकबरा है जिसमें गुंबद नहीं है — ऊपर खुला संगमरमर का मंच है",
      "अकबर ने 1605 में अपनी मृत्यु से पहले खुद अपने मकबरे का डिजाइन करना शुरू किया — निर्माण जहाँगीर ने पूरा किया",
      "मकबरा एक ही संरचना में हिंदू, बौद्ध, जैन और इस्लामी वास्तुशिल्प रूपांकनों को जोड़ता है",
      "मकबरे के चारों ओर हिरण पार्क आगरा शहर के पास कुछ हरे अभयारण्यों में से एक है"
    ],
    visitingHours: "Sunrise to Sunset (All days)",
    visitingHoursHi: "सूर्योदय से सूर्यास्त तक (सभी दिन)",
    bestMonths: [10, 11, 0, 1, 2],
    bestTimeDesc: "October to March — combine with the Taj Mahal and Agra Fort on the same Agra trip. The deer park is especially pleasant in winter mornings.",
    bestTimeDescHi: "अक्तूबर से मार्च — उसी आगरा यात्रा में ताज महल और आगरा किले के साथ जोड़ें।",
    timeline: [
      { year: "1605 CE", event: "Akbar dies; Jahangir inherits the throne and continues construction of Akbar's self-designed tomb", eventHi: "अकबर की मृत्यु; जहाँगीर गद्दी पर बैठे और अकबर के स्वयं डिजाइन किए मकबरे का निर्माण जारी रखा" },
      { year: "1613 CE", event: "Tomb completed by Jahangir with the addition of the marble upper platform and ornate southern gateway", eventHi: "जहाँगीर ने संगमरमर के ऊपरी मंच और अलंकृत दक्षिण द्वार के साथ मकबरा पूर्ण किया" }
    ],
    entryFee: "₹30 (Indians), ₹510 (Foreigners)",
    entryFeeHi: "₹30 (भारतीय), ₹510 (विदेशी)",
    UNESCO: false
  },
  {
    id: "leh-palace",
    name: "Leh Palace",
    nameHi: "लेह पैलेस",
    city: "Leh",
    state: "Ladakh",
    coordinates: [77.5848, 34.1660],
    description: "Leh Palace (Lhachen Palkhar) is a ruined nine-storey royal palace built in the 17th century by King Sengge Namgyal of the Namgyal dynasty. Modelled after the Potala Palace in Lhasa, Tibet, it towers over the town of Leh at 3,524 metres elevation. Though partially in ruins, it dominates the Leh skyline and offers spectacular views of the Indus Valley and Stok Kangri mountain.",
    descriptionHi: "लेह पैलेस (ल्हाचेन पालखर) नामग्याल वंश के राजा सेंगे नामग्याल द्वारा 17वीं शताब्दी में बनाया गया नौ मंजिला शाही महल है। तिब्बत के पोताला महल के मॉडल पर बना, यह 3,524 मीटर की ऊँचाई पर लेह शहर के ऊपर खड़ा है।",
    yearBuilt: "17th century CE (c. 1600s)",
    dynasty: "Namgyal dynasty",
    dynastyHi: "नामग्याल वंश",
    primaryModel: "/models/leh_palace.glb",
    historicalModels: { past: "/models/leh_palace.glb", ancient: "/models/leh_palace.glb" },
    era: "medieval",
    hotspots: [
      { name: "Roof Terrace", description: "The rooftop terrace of Leh Palace offers one of the most spectacular views in India — the Indus Valley, Zanskar Range, and the Stok Kangri glacier visible simultaneously.", position: [0, 1.5, 0] },
      { name: "Namgyal Tsemo Monastery", description: "The monastery and victory tower perched even higher above the palace on the rocky summit — reached by a steep 20-minute climb from the palace roof.", position: [0, 2.0, -0.5] },
      { name: "Palace Museum", description: "The palace's lower floors house a museum of Ladakhi royal regalia, thangka paintings, and ancient weapons — managed by the Archaeological Survey of India.", position: [0, 0, 0.5] }
    ],
    facts: [
      "Leh Palace was modelled on the Potala Palace of Lhasa, Tibet",
      "The palace was abandoned by the Namgyal royal family in the 19th century when the Dogra forces of Kashmir invaded Ladakh",
      "At 3,524 metres elevation, it is one of the highest royal palaces in the world",
      "The palace has 9 storeys and its rooftop offers a 360° view of the entire Indus Valley"
    ],
    factsHi: [
      "लेह पैलेस तिब्बत के ल्हासा के पोताला महल के मॉडल पर बनाया गया था",
      "19वीं शताब्दी में जब डोगरा सेनाओं ने लद्दाख पर आक्रमण किया तो नामग्याल शाही परिवार ने महल छोड़ दिया",
      "3,524 मीटर की ऊँचाई पर, यह दुनिया के सबसे ऊँचे शाही महलों में से एक है",
      "महल में 9 मंजिलें हैं और इसकी छत से पूरी सिंधु घाटी का 360° दृश्य मिलता है"
    ],
    visitingHours: "7:00 AM to 4:00 PM (All days)",
    visitingHoursHi: "सुबह 7:00 से शाम 4:00 बजे तक (सभी दिन)",
    bestMonths: [5, 6, 7, 8, 9],
    bestTimeDesc: "May to September — Ladakh is accessible by road only in summer (the mountain passes are snow-blocked from November to April). June–August is peak tourist season.",
    bestTimeDescHi: "मई से सितंबर — लद्दाख केवल गर्मियों में सड़क से पहुँचा जा सकता है (नवंबर से अप्रैल तक पहाड़ी दर्रे बर्फ से बंद)।",
    timeline: [
      { year: "~1600 CE", event: "King Sengge Namgyal builds Leh Palace as the new royal seat of the Namgyal dynasty", eventHi: "राजा सेंगे नामग्याल ने नामग्याल वंश की नई शाही सीट के रूप में लेह पैलेस बनाया" },
      { year: "1834–1842 CE", event: "Dogra conquest of Ladakh forces the Namgyal family to abandon the palace and move to Stok", eventHi: "डोगरा विजय ने नामग्याल परिवार को महल छोड़कर स्टोक जाने पर मजबूर किया" }
    ],
    entryFee: "₹15 (Indians), ₹100 (Foreigners)",
    entryFeeHi: "₹15 (भारतीय), ₹100 (विदेशी)",
    UNESCO: false
  },
  {
    id: "hemis-monastery",
    name: "Hemis Monastery",
    nameHi: "हेमिस मठ",
    city: "Hemis",
    state: "Ladakh",
    coordinates: [77.7063, 33.9113],
    description: "Hemis Monastery (Hemis Gompa) is the largest and wealthiest Buddhist monastery in Ladakh, founded in the 17th century by Lama Stagsang Raspa Nawang Dorje. It belongs to the Drukpa school of Tibetan Buddhism and houses extraordinary thangka paintings, ancient manuscripts, gold and silver stupas, and the famous Hemis thangka — a massive silk appliqué said to be the largest in Asia.",
    descriptionHi: "हेमिस मठ (हेमिस गोम्पा) लद्दाख का सबसे बड़ा और सबसे धनी बौद्ध मठ है, जिसे 17वीं शताब्दी में लामा स्टागसंग रस्पा नवांग दोर्जे ने स्थापित किया। यह तिब्बती बौद्ध धर्म के द्रुकपा स्कूल से संबंधित है।",
    yearBuilt: "17th century CE (refounded 1630s by the King of Ladakh)",
    dynasty: "Drukpa Kagyu Buddhist tradition",
    dynastyHi: "द्रुकपा काग्यू बौद्ध परंपरा",
    primaryModel: "/models/hemis_monastery.glb",
    historicalModels: { past: "/models/hemis_monastery.glb", ancient: "/models/hemis_monastery.glb" },
    era: "medieval",
    hotspots: [
      { name: "Main Courtyard (Dukhang)", description: "The large courtyard where the famous Hemis Festival (Tsechu) is held every year — monks perform Cham dances in elaborate masks and costumes celebrating Guru Padmasambhava.", position: [0, 0, 1.0] },
      { name: "Giant Thangka", description: "Hemis possesses one of the largest thangka (silk painting) in the world — 12 storeys tall and displayed only once every 12 years during the Hemis Festival.", position: [0, 1.5, 0] },
      { name: "Gold and Silver Stupas", description: "The monastery's treasury contains gold and silver stupas encrusted with precious stones, ancient manuscripts, and priceless ritual objects accumulated over centuries.", position: [0.8, 0.5, 0.5] }
    ],
    facts: [
      "Hemis possesses one of the world's largest thangka paintings — displayed only once every 12 years",
      "The Hemis Festival (held in June/July) is one of the most spectacular Buddhist festivals in India",
      "The monastery is believed to have been founded in the 11th century, then refounded in the 17th century",
      "Nicholas Notovitch claimed in 1894 that the monastery held documents proving Jesus visited India — a claim widely discredited"
    ],
    factsHi: [
      "हेमिस में दुनिया की सबसे बड़ी थंका पेंटिंग है — हर 12 साल में केवल एक बार प्रदर्शित होती है",
      "हेमिस उत्सव (जून/जुलाई में) भारत के सबसे शानदार बौद्ध उत्सवों में से एक है",
      "माना जाता है कि मठ 11वीं शताब्दी में स्थापित किया गया था, फिर 17वीं शताब्दी में पुनः स्थापित",
      "निकोलस नोटोविच ने 1894 में दावा किया था कि मठ में यीशु की भारत यात्रा के दस्तावेज हैं — एक व्यापक रूप से खंडित दावा"
    ],
    visitingHours: "8:00 AM to 1:00 PM, 2:00 PM to 5:00 PM (All days)",
    visitingHoursHi: "सुबह 8:00 से 1:00 बजे, दोपहर 2:00 से शाम 5:00 बजे तक (सभी दिन)",
    bestMonths: [5, 6, 7, 8, 9],
    bestTimeDesc: "June to September — Ladakh summer. The Hemis Festival is held in June/July and is the best time to experience the monastery alive with music, masked dances, and thousands of pilgrims.",
    bestTimeDescHi: "जून से सितंबर — लद्दाख गर्मी। हेमिस उत्सव जून/जुलाई में होता है।",
    timeline: [
      { year: "~1630s CE", event: "Hemis Monastery refounded by Lama Stagsang Raspa with royal patronage of the Namgyal King Sengge Namgyal", eventHi: "हेमिस मठ को लामा स्टागसंग रस्पा द्वारा नामग्याल राजा सेंगे नामग्याल के संरक्षण में पुनः स्थापित किया गया" }
    ],
    entryFee: "₹100 (Indians and Foreigners)",
    entryFeeHi: "₹100 (भारतीय और विदेशी)",
    UNESCO: false
  },
  // ── SOUTH & DECCAN ──────────────────────────────────────────────────────
  {
    id: "golconda-fort",
    name: "Golconda Fort",
    nameHi: "गोलकोंडा किला",
    city: "Hyderabad",
    state: "Telangana",
    coordinates: [78.4011, 17.3834],
    description: "Golconda Fort was the capital of the Qutb Shahi kingdom (1518–1687 CE) and one of the most powerful diamond-trading centres in the world. Built on a 120-metre granite hill, it was also the world's most famed source of diamonds — the Koh-i-Noor, Hope Diamond, and Darya-ye-Noor all came from the mines under Golconda's control. Its acoustic system allowed whispers at the base to be heard at the summit 1 km away.",
    descriptionHi: "गोलकोंडा किला कुतुब शाही राज्य (1518–1687 ई.) की राजधानी और दुनिया के सबसे शक्तिशाली हीरा व्यापार केंद्रों में से एक था। 120 मीटर ग्रेनाइट पहाड़ी पर बना, यह कोहिनूर, होप डायमंड और दरिया-ए-नूर का स्रोत था।",
    yearBuilt: "~1143 CE (original); expanded 16th century by Qutb Shahi",
    dynasty: "Qutb Shahi dynasty",
    dynastyHi: "कुतुब शाही वंश",
    primaryModel: "/models/golconda_fort.glb",
    historicalModels: { past: "/models/golconda_fort.glb", ancient: "/models/golconda_fort.glb" },
    era: "medieval",
    hotspots: [
      { name: "Acoustic Wonder (Clap at the Gate)", description: "A handclap at the entrance gate can be heard at the throne room at the summit 1 km away — a deliberate acoustic feat of the Qutb Shahi engineers for military security.", position: [0, 0, 1.5] },
      { name: "Bala Hissar (Summit Palace)", description: "The palace complex at the 120-metre summit, where the Qutb Shahi kings lived — commanding views of Hyderabad and the tombs visible in the distance.", position: [0, 1.5, 0] },
      { name: "Rani Mahal", description: "The harem quarters inside the fort, where an underground water supply system fed by rainwater channels served the royal women's quarters.", position: [0.8, 0.3, 0.8] }
    ],
    facts: [
      "The Koh-i-Noor, Hope Diamond, and Darya-ye-Noor diamonds all originated from mines under Golconda's control",
      "Golconda's acoustic engineering allows a handclap at the main gate to be heard clearly at the summit 1 km away",
      "The fort fell to Aurangzeb in 1687 after a siege of 9 months, ending the Qutb Shahi dynasty",
      "The word 'Golconda' became synonymous with 'treasure' or 'a great source of wealth' in English"
    ],
    factsHi: [
      "कोहिनूर, होप डायमंड और दरिया-ए-नूर सभी हीरे गोलकोंडा के नियंत्रण में खदानों से निकले",
      "गोलकोंडा की ध्वनिक इंजीनियरिंग मुख्य द्वार पर एक ताली बजाने से 1 किमी दूर शिखर पर स्पष्ट सुनाई देती है",
      "किला 1687 में 9 महीने की घेराबंदी के बाद औरंगजेब के हाथ गिरा, जिससे कुतुब शाही वंश समाप्त हुआ",
      "'गोलकोंडा' शब्द अंग्रेजी में 'खजाना' का पर्याय बन गया"
    ],
    visitingHours: "9:00 AM to 5:30 PM (All days)",
    visitingHoursHi: "सुबह 9:00 से शाम 5:30 बजे तक (सभी दिन)",
    bestMonths: [10, 11, 0, 1, 2],
    bestTimeDesc: "October to February — Hyderabad winters are mild (15–28°C). The evening sound and light show at Golconda is spectacular and highly recommended.",
    bestTimeDescHi: "अक्तूबर से फ़रवरी — हैदराबाद की सर्दियाँ हल्की (15–28°C) होती हैं। गोलकोंडा में शाम की साउंड एंड लाइट शो शानदार है।",
    timeline: [
      { year: "1518 CE", event: "Qutb Shahi dynasty founded; Golconda becomes the capital of a new Deccan Sultanate", eventHi: "कुतुब शाही वंश की स्थापना; गोलकोंडा एक नए दक्कन सल्तनत की राजधानी बनी" },
      { year: "1687 CE", event: "Aurangzeb besieges Golconda for 9 months and captures it, ending the Qutb Shahi dynasty", eventHi: "औरंगजेब ने 9 महीने घेराबंदी कर गोलकोंडा पर कब्जा किया, कुतुब शाही वंश समाप्त हुआ" }
    ],
    entryFee: "₹25 (Indians), ₹300 (Foreigners)",
    entryFeeHi: "₹25 (भारतीय), ₹300 (विदेशी)",
    UNESCO: false
  },
  {
    id: "ramappa-temple",
    name: "Ramappa Temple",
    nameHi: "रामप्पा मंदिर",
    city: "Mulugu",
    state: "Telangana",
    coordinates: [79.9647, 17.9929],
    description: "Ramappa Temple (officially the Rudresvara Temple) is a 13th-century masterpiece of Kakatiya architecture, built in 1213 CE under the reign of Kakatiya king Ganapati Deva. The temple is famed for its floating bricks — the shikhara bricks are so light they float on water, made from a special mixture used for the first time in India. It was designated a UNESCO World Heritage Site in 2021.",
    descriptionHi: "रामप्पा मंदिर (आधिकारिक रूप से रुद्रेश्वर मंदिर) काकतीय वास्तुकला की 13वीं शताब्दी की उत्कृष्ट कृति है, जिसे 1213 ई. में काकतीय राजा गणपति देव के शासनकाल में बनाया गया। यह मंदिर अपनी तैरती ईंटों के लिए प्रसिद्ध है — शिखर की ईंटें इतनी हल्की हैं कि वे पानी पर तैरती हैं।",
    yearBuilt: "1213 CE",
    dynasty: "Kakatiya dynasty",
    dynastyHi: "काकतीय वंश",
    primaryModel: "/models/ramappa_temple.glb",
    historicalModels: { past: "/models/ramappa_temple.glb", ancient: "/models/ramappa_temple.glb" },
    era: "medieval",
    hotspots: [
      { name: "Floating Bricks Shikhara", description: "The temple tower is built with specially fired lightweight bricks that float on water — made from a frothy slag mixture, discovered centuries before its time.", position: [0, 1.5, 0] },
      { name: "Madanika Bracket Figures", description: "The exterior corners have famous bracket sculptures of graceful maidens (madanika) in dynamic dance poses — considered the finest examples of Kakatiya figurative sculpture.", position: [0.8, 0.5, 0.5] },
      { name: "Star-Shaped Platform", description: "The entire temple rests on a 6-foot-high star-shaped platform (jagati) that creates a series of dramatic projecting angles around the base.", position: [0, -0.3, 1.0] }
    ],
    facts: [
      "The temple's shikhara is made of special 'floating bricks' — bricks so light they float on water",
      "The Ramappa Temple is named after its sculptor Ramappa, not the deity it enshrines",
      "The madanika (bracket figure) sculptures here are considered the finest examples of Kakatiya dance sculpture",
      "It was designated a UNESCO World Heritage Site in 2021 — the 39th from India"
    ],
    factsHi: [
      "मंदिर का शिखर विशेष 'तैरती ईंटों' से बना है — इतनी हल्की ईंटें कि वे पानी पर तैरती हैं",
      "रामप्पा मंदिर का नाम इसके मूर्तिकार रामप्पा के नाम पर है, न कि देवता के नाम पर",
      "यहाँ मदानिका (ब्रैकेट फिगर) मूर्तियाँ काकतीय नृत्य मूर्तिकला के बेहतरीन उदाहरण हैं",
      "इसे 2021 में यूनेस्को विश्व धरोहर स्थल घोषित किया गया — भारत का 39वाँ"
    ],
    visitingHours: "6:00 AM to 6:00 PM (All days)",
    visitingHoursHi: "सुबह 6:00 से शाम 6:00 बजे तक (सभी दिन)",
    bestMonths: [10, 11, 0, 1, 2],
    bestTimeDesc: "October to February — Telangana is hot most of the year; winters (18–28°C) are the best time. The surrounding Ramappa Lake adds scenic beauty. Combine with Warangal Fort 77 km away.",
    bestTimeDescHi: "अक्तूबर से फ़रवरी — तेलंगाना अधिकांश वर्ष गर्म है; सर्दियाँ (18–28°C) सबसे अच्छा समय हैं।",
    timeline: [
      { year: "1213 CE", event: "Kakatiya general Recharla Rudra builds Ramappa Temple during the reign of Ganapati Deva", eventHi: "काकतीय सेनापति रेचर्ला रुद्र ने गणपति देव के शासनकाल में रामप्पा मंदिर बनाया" },
      { year: "2021 CE", event: "UNESCO World Heritage Site designation — India's 39th UNESCO site", eventHi: "यूनेस्को विश्व धरोहर स्थल घोषित — भारत का 39वाँ यूनेस्को स्थल" }
    ],
    entryFee: "₹25 (Indians), ₹300 (Foreigners)",
    entryFeeHi: "₹25 (भारतीय), ₹300 (विदेशी)",
    UNESCO: true
  },
  {
    id: "warangal-fort",
    name: "Warangal Fort",
    nameHi: "वारंगल किला",
    city: "Warangal",
    state: "Telangana",
    coordinates: [79.5941, 17.9717],
    description: "Warangal Fort was the capital of the Kakatiya dynasty (1083–1323 CE), one of the great medieval kingdoms of the Deccan. The fort's most distinctive features are its four massive ornamental stone arches (toranas) — each rising over 10 metres and intricately carved with Kakatiya motifs — marking the four cardinal entrances of the circular fort. The arches are one of the finest examples of medieval Indian stone-carving.",
    descriptionHi: "वारंगल किला काकतीय वंश (1083–1323 ई.) की राजधानी था, जो दक्कन के महान मध्यकालीन राज्यों में से एक था। किले की सबसे विशिष्ट विशेषताएं इसके चार विशाल अलंकृत पत्थर के मेहराब (तोरण) हैं — प्रत्येक 10 मीटर से अधिक ऊँचे और काकतीय रूपांकनों से जटिल रूप से नक्काशीदार।",
    yearBuilt: "12th–13th century CE",
    dynasty: "Kakatiya dynasty",
    dynastyHi: "काकतीय वंश",
    primaryModel: "/models/warangal_fort.glb",
    historicalModels: { past: "/models/warangal_fort.glb", ancient: "/models/warangal_fort.glb" },
    era: "medieval",
    hotspots: [
      { name: "Four Ornamental Toranas", description: "The four massive stone arches (toranas) marking the cardinal directions — each elaborately carved with Kakatiya Scrolls, mythological scenes, and celestial figures.", position: [0, 0.8, 1.0] },
      { name: "Thousand Pillar Temple", description: "A spectacular 12th-century Kakatiya temple inside the fort complex with a thousand carved pillars — a masterwork of Deccan medieval architecture.", position: [0.8, 0.3, 0.5] },
      { name: "Svayambhu Shiva Shrine", description: "The natural Shiva lingam at the heart of the fort complex — the reason the city was founded at this spot, revered as a self-manifested (svayambhu) deity.", position: [-0.5, 0, 0.8] }
    ],
    facts: [
      "The Warangal Fort's ornamental stone arches (toranas) are among the finest medieval stone carvings in South India",
      "The Kakatiya dynasty ruled from Warangal for over 200 years — their court was visited by Marco Polo in 1289",
      "The fort was captured by the Delhi Sultanate in 1323, ending the Kakatiya dynasty",
      "The star-shaped layout of the fort reflects Kakatiya planning genius — the fort has three concentric defensive rings"
    ],
    factsHi: [
      "वारंगल किले के अलंकृत पत्थर के तोरण दक्षिण भारत की बेहतरीन मध्यकालीन पत्थर नक्काशी में से हैं",
      "काकतीय वंश ने 200 से अधिक वर्षों तक वारंगल से शासन किया — उनके दरबार में 1289 में मार्को पोलो आए",
      "1323 में दिल्ली सल्तनत ने किले पर कब्जा किया, काकतीय वंश समाप्त हुआ",
      "किले का तारे के आकार का लेआउट काकतीय नियोजन प्रतिभा को दर्शाता है"
    ],
    visitingHours: "9:00 AM to 5:00 PM (All days)",
    visitingHoursHi: "सुबह 9:00 से शाम 5:00 बजे तक (सभी दिन)",
    bestMonths: [10, 11, 0, 1, 2],
    bestTimeDesc: "October to February — Telangana winters are the most comfortable season. Combine with a visit to Ramappa Temple 77 km away.",
    bestTimeDescHi: "अक्तूबर से फ़रवरी — तेलंगाना की सर्दियाँ सबसे आरामदायक मौसम हैं।",
    timeline: [
      { year: "~1162 CE", event: "Rudra Deva I completes Warangal Fort as the Kakatiya capital, replacing earlier earthen defences with stone", eventHi: "रुद्र देव प्रथम ने मिट्टी की किलेबंदी की जगह पत्थर से काकतीय राजधानी वारंगल किला पूर्ण किया" },
      { year: "1289 CE", event: "Marco Polo visits the Kakatiya kingdom and praises its diamond trade and fine cotton muslin", eventHi: "मार्को पोलो ने काकतीय राज्य का दौरा किया और इसके हीरे व्यापार और सूती मसलीन की प्रशंसा की" },
      { year: "1323 CE", event: "Delhi Sultanate under Ulugh Khan (Muhammad bin Tughluq) captures Warangal, ending the Kakatiya dynasty", eventHi: "मुहम्मद बिन तुगलक ने वारंगल पर कब्जा किया, काकतीय वंश समाप्त हुआ" }
    ],
    entryFee: "₹25 (Indians), ₹300 (Foreigners)",
    entryFeeHi: "₹25 (भारतीय), ₹300 (विदेशी)",
    UNESCO: false
  },
  {
    id: "chowmahalla-palace",
    name: "Chowmahalla Palace",
    nameHi: "चौमहल्ला पैलेस",
    city: "Hyderabad",
    state: "Telangana",
    coordinates: [78.4665, 17.3597],
    description: "Chowmahalla Palace (Chār Maḥallāt — 'Four Palaces') was the seat of the Asaf Jah dynasty, the Nizams of Hyderabad — who were once the richest people in the world. Built in the 18th–19th century, it combines Mughal and European Baroque architecture in stunning white colonnaded courtyards. The Khilwat (Durbar Hall) was where the Nizams gave audience and signed official documents.",
    descriptionHi: "चौमहल्ला पैलेस असफ जाह वंश, हैदराबाद के निजामों का केंद्र था — जो कभी दुनिया के सबसे अमीर लोग थे। 18वीं–19वीं शताब्दी में निर्मित, यह शानदार सफेद स्तंभित प्रांगणों में मुगल और यूरोपीय बारोक वास्तुकला को जोड़ता है।",
    yearBuilt: "1750s–1880s CE (built in phases)",
    dynasty: "Asaf Jah (Nizam) dynasty",
    dynastyHi: "असफ जाह (निजाम) वंश",
    primaryModel: "/models/chowmahalla_palace.glb",
    historicalModels: { past: "/models/chowmahalla_palace.glb", ancient: "/models/chowmahalla_palace.glb" },
    era: "modern",
    hotspots: [
      { name: "Khilwat Hall (Durbar Hall)", description: "The grand audience hall where the Nizams received dignitaries — its Belgian crystal chandeliers (each weighing over 1,000 kg) hanging from tall ceilings are the centrepiece.", position: [0, 1.0, 0] },
      { name: "Southern Courtyard (Rangamahal)", description: "The southern court with four palaces arranged symmetrically around a central fountain — the oldest part of the complex.", position: [0, 0, 1.0] },
      { name: "Vintage Car Collection", description: "The palace garage houses the Nizam's collection of vintage and antique cars, including early 20th-century Rolls-Royces and Bentleys used for the royal fleet.", position: [0.8, -0.2, 0.8] }
    ],
    facts: [
      "The last Nizam of Hyderabad (Mir Osman Ali Khan) was listed by Time magazine in 1937 as the world's richest person",
      "The Belgian crystal chandeliers in Khilwat Hall weigh over 1,000 kg each",
      "The palace was gifted to the Telangana state government by the Nizam family — renovated and opened to the public in 2005",
      "The palace museum houses the personal jewellery and robes of the Nizams, including priceless 18th-century pieces"
    ],
    factsHi: [
      "हैदराबाद के अंतिम निजाम (मीर उस्मान अली खान) को 1937 में टाइम पत्रिका ने दुनिया का सबसे अमीर व्यक्ति बताया",
      "खिलवत हॉल के बेल्जियन क्रिस्टल झूमर प्रत्येक 1,000 किग्रा से अधिक वजन के हैं",
      "महल निजाम परिवार ने तेलंगाना राज्य सरकार को उपहार दिया — 2005 में जनता के लिए खोला गया",
      "महल संग्रहालय में निजामों के व्यक्तिगत गहने और वस्त्र हैं"
    ],
    visitingHours: "10:00 AM to 5:00 PM (Closed on Fridays)",
    visitingHoursHi: "सुबह 10:00 से शाम 5:00 बजे तक (शुक्रवार को बंद)",
    bestMonths: [10, 11, 0, 1, 2],
    bestTimeDesc: "October to February — Hyderabad winters are pleasant. The palace is best combined with a visit to Golconda Fort and the Qutb Shahi Tombs in the same day.",
    bestTimeDescHi: "अक्तूबर से फ़रवरी — हैदराबाद की सर्दियाँ सुखद हैं।",
    timeline: [
      { year: "1750s CE", event: "Nizam Salabat Jung begins construction of Chowmahalla Palace near the old city", eventHi: "निजाम सलाबत जंग ने पुराने शहर के पास चौमहल्ला पैलेस का निर्माण शुरू किया" },
      { year: "1880s CE", event: "Mahbub Ali Khan (the sixth Nizam) refurbishes and expands the palace to its present grandeur", eventHi: "महबूब अली खान (छठे निजाम) ने महल को अपनी वर्तमान भव्यता तक पुनर्निर्मित और विस्तारित किया" }
    ],
    entryFee: "₹80 (Indians), ₹200 (Foreigners)",
    entryFeeHi: "₹80 (भारतीय), ₹200 (विदेशी)",
    UNESCO: false
  },
  {
    id: "bidar-fort",
    name: "Bidar Fort",
    nameHi: "बीदर किला",
    city: "Bidar",
    state: "Karnataka",
    coordinates: [77.5278, 17.9162],
    description: "Bidar Fort was the capital of the Bahmani Sultanate and later the Barid Shahi dynasty from the 15th century onwards. Set on the edge of the Deccan plateau, its massive laterite ramparts protect a series of extraordinary structures — including the Solah Khamba Mosque (with 16 unusual pillars), the Rangin Mahal palace, and the nearby ruins of the Mahmud Gawan Madrasa with its striking blue-and-white Persian tile facade.",
    descriptionHi: "बीदर किला 15वीं शताब्दी से बहमनी सल्तनत और बाद में बरीद शाही वंश की राजधानी था। दक्कन पठार के किनारे पर, इसके विशाल लेटराइट प्राचीर असाधारण संरचनाओं की रक्षा करते हैं।",
    yearBuilt: "14th–15th century CE",
    dynasty: "Bahmani Sultanate / Barid Shahi",
    dynastyHi: "बहमनी सल्तनत / बरीद शाही",
    primaryModel: "/models/bidar_fort.glb",
    historicalModels: { past: "/models/bidar_fort.glb", ancient: "/models/bidar_fort.glb" },
    era: "medieval",
    hotspots: [
      { name: "Solah Khamba Mosque", description: "The 16-pillar mosque inside the fort — an unusual architectural experiment with massive square pillars and a flat roof, unique among Indian Islamic monuments.", position: [0.8, 0.3, 0.8] },
      { name: "Rangin Mahal", description: "The Painted Palace — a small but exquisitely decorated royal palace with mother-of-pearl tile work and turquoise tile inlay on the walls and ceilings.", position: [-0.5, 0.5, 0.8] },
      { name: "Mahmud Gawan Madrasa", description: "Just outside the fort — the magnificent ruined madrasa with a striking blue-green Persian faience tile facade, once among the finest educational institutions of medieval India.", position: [1.0, 0.5, 0.5] }
    ],
    facts: [
      "Bidar was the capital of the Bahmani Sultanate — the first Islamic kingdom of the Deccan",
      "The Mahmud Gawan Madrasa was once a three-storey library and college for 3,000 students",
      "Bidriware — a unique metalwork art form of silver inlay on blackened zinc — originated in Bidar",
      "The fort has a triple-moat defensive system and stretches over 5 km of walls"
    ],
    factsHi: [
      "बीदर बहमनी सल्तनत की राजधानी थी — दक्कन का पहला इस्लामी राज्य",
      "महमूद गवान का मदरसा कभी 3,000 छात्रों के लिए तीन मंजिला पुस्तकालय और कॉलेज था",
      "बिदरी वर्क — काली जस्त पर चाँदी जड़ाई की अनूठी धातुकारी — बीदर में उत्पन्न हुई",
      "किले में तिहरी खाई रक्षा प्रणाली है और दीवारें 5 किमी से अधिक फैली हैं"
    ],
    visitingHours: "9:00 AM to 5:30 PM (All days)",
    visitingHoursHi: "सुबह 9:00 से शाम 5:30 बजे तक (सभी दिन)",
    bestMonths: [10, 11, 0, 1, 2],
    bestTimeDesc: "October to February — Bidar's Deccan plateau climate is pleasant in winter. The fort is uncrowded and a peaceful destination for history enthusiasts.",
    bestTimeDescHi: "अक्तूबर से फ़रवरी — बीदर के दक्कन पठार की जलवायु सर्दियों में सुखद है।",
    timeline: [
      { year: "1347 CE", event: "Bahmani Sultanate founded — Bidar later becomes its capital in 1428", eventHi: "बहमनी सल्तनत की स्थापना — बीदर 1428 में इसकी राजधानी बनी" },
      { year: "1472 CE", event: "Mahmud Gawan builds his magnificent madrasa — it burns down in 1696 when a gunpowder store inside explodes", eventHi: "महमूद गवान ने अपना शानदार मदरसा बनाया — 1696 में जब अंदर बारूद का भंडार फटा तो यह जल गया" }
    ],
    entryFee: "₹15 (Indians), ₹200 (Foreigners)",
    entryFeeHi: "₹15 (भारतीय), ₹200 (विदेशी)",
    UNESCO: false
  },
  {
    id: "hoysaleswara-temple",
    name: "Hoysaleswara Temple",
    nameHi: "होयसलेश्वर मंदिर",
    city: "Halebidu",
    state: "Karnataka",
    coordinates: [75.9966, 13.2142],
    description: "The Hoysaleswara Temple at Halebidu is the largest and finest example of Hoysala architecture in the world. Built in the 12th century CE, its twin temple bodies sit on a low star-shaped platform and are covered — every centimetre of exterior surface — with an unbroken horizontal frieze of dense sculptural carvings: elephants, lions, horses, scrolling foliage, mythological scenes, and over 240 different deities.",
    descriptionHi: "हलेबिडु का होयसलेश्वर मंदिर दुनिया का सबसे बड़ा और बेहतरीन होयसल वास्तुकला का उदाहरण है। 12वीं शताब्दी में निर्मित, इसके जुड़वाँ मंदिर नीचे एक तारे के आकार के मंच पर बैठे हैं और बाहरी सतह पर मूर्तिकला की एक अखंड क्षैतिज फ्रिज से ढके हैं।",
    yearBuilt: "1121 CE (construction continued for 90+ years)",
    dynasty: "Hoysala Empire",
    dynastyHi: "होयसल साम्राज्य",
    primaryModel: "/models/hoysaleswara_temple.glb",
    historicalModels: { past: "/models/hoysaleswara_temple.glb", ancient: "/models/hoysaleswara_temple.glb" },
    era: "ancient",
    hotspots: [
      { name: "Sculptural Friezes", description: "Eleven horizontal bands of sculpture run around the exterior: elephants (symbolising stability), then lions, scrolling foliage, horses, scrollwork, figures, more elephants — an encyclopaedia carved in stone.", position: [0, 0.5, 1.0] },
      { name: "Natesha Panel", description: "The magnificent 12-metre-wide panel depicting the cosmic dance of Shiva (Nataraja) surrounded by 64 dancing forms — considered one of the greatest sculptural panels in India.", position: [0.8, 0.8, 0.5] },
      { name: "Twin Sanctuaries", description: "The Hoysaleswara temple (for the king) and the Shanthaleswara temple (for the queen) — twin Shiva sanctuaries connected by a shared mandapa, both equally ornate.", position: [-0.5, 0, 0.8] }
    ],
    facts: [
      "The Hoysaleswara Temple took over 90 years to build and was never fully completed",
      "It contains over 340 different sculptures of gods, demi-gods, animals, and erotic figures",
      "The star-shaped base (stellate plan) is the defining feature of all Hoysala temples",
      "The temple was sacked and damaged by Malik Kafur (Alauddin Khilji's general) in 1310 CE"
    ],
    factsHi: [
      "होयसलेश्वर मंदिर को बनने में 90 से अधिक साल लगे और यह कभी पूरी तरह से पूर्ण नहीं हुआ",
      "इसमें देवताओं, अर्ध-देवताओं, जानवरों और कामुक आकृतियों की 340 से अधिक विभिन्न मूर्तियाँ हैं",
      "तारे के आकार का आधार (स्टेलेट प्लान) सभी होयसल मंदिरों की परिभाषित विशेषता है",
      "मंदिर को 1310 ई. में मलिक काफूर (अलाउद्दीन खिलजी के सेनापति) ने बर्बाद और क्षतिग्रस्त किया"
    ],
    visitingHours: "9:00 AM to 6:00 PM (All days)",
    visitingHoursHi: "सुबह 9:00 से शाम 6:00 बजे तक (सभी दिन)",
    bestMonths: [9, 10, 11, 0, 1, 2],
    bestTimeDesc: "September to February — Karnataka's post-monsoon season is lush and comfortable (18–28°C). Combine with Belur's Chennakeshava Temple 16 km away — both are among the finest medieval temples in India.",
    bestTimeDescHi: "सितंबर से फ़रवरी — कर्नाटक का मानसून के बाद का मौसम हरा-भरा और आरामदायक (18–28°C) है।",
    timeline: [
      { year: "1121 CE", event: "Construction of Hoysaleswara Temple begins under King Vishnuvardhana of the Hoysala Empire", eventHi: "होयसल साम्राज्य के राजा विष्णुवर्धन के तहत होयसलेश्वर मंदिर का निर्माण शुरू" },
      { year: "1310 CE", event: "Malik Kafur sacks Halebidu, damaging the temples and stripping their treasures", eventHi: "मलिक काफूर ने हलेबिडु को लूटा, मंदिरों को क्षतिग्रस्त किया और उनके खजाने छीने" }
    ],
    entryFee: "Free entry",
    entryFeeHi: "निःशुल्क प्रवेश",
    UNESCO: false
  },
  {
    id: "pattadakal",
    name: "Pattadakal",
    nameHi: "पट्टदकल",
    city: "Pattadakal",
    state: "Karnataka",
    coordinates: [75.8178, 15.9507],
    description: "Pattadakal is a UNESCO World Heritage Site containing a group of 10 temples (8 Hindu and 2 Jain) built in the 7th and 8th centuries by the Chalukya dynasty. It is historically significant as the coronation site of Chalukya kings and architecturally significant for showcasing both North Indian (Nagara) and South Indian (Dravida) temple styles side by side — a unique architectural laboratory of ancient India.",
    descriptionHi: "पट्टदकल यूनेस्को विश्व धरोहर स्थल है जिसमें चालुक्य वंश द्वारा 7वीं और 8वीं शताब्दी में बने 10 मंदिरों (8 हिंदू और 2 जैन) का समूह है। यह ऐतिहासिक रूप से चालुक्य राजाओं के राज्याभिषेक स्थल के रूप में और उत्तर भारतीय (नागर) और दक्षिण भारतीय (द्रविड़) मंदिर शैलियों को एक साथ दिखाने के लिए महत्वपूर्ण है।",
    yearBuilt: "7th–8th century CE",
    dynasty: "Badami Chalukya dynasty",
    dynastyHi: "बादामी चालुक्य वंश",
    primaryModel: "/models/pattadakal.glb",
    historicalModels: { past: "/models/pattadakal.glb", ancient: "/models/pattadakal.glb" },
    era: "ancient",
    hotspots: [
      { name: "Virupaksha Temple", description: "The largest and finest temple at Pattadakal — built by Queen Lokamahadevi in 733 CE to celebrate her husband's victory. Inspired by the Kailasa Temple at Ellora.", position: [0, 1.5, 0] },
      { name: "Papanatha Temple", description: "A North Indian Nagara-style temple at the far end of the site, with an unusual mixture of Nagara and Dravida elements — built earlier than the Virupaksha.", position: [1.0, 0.8, 0.5] },
      { name: "Sangamesvara Temple", description: "An incomplete Dravida-style temple — the earliest large temple at Pattadakal, whose construction was halted for unknown reasons.", position: [-0.8, 0.5, 0.5] }
    ],
    facts: [
      "Pattadakal was where Chalukya kings were crowned — 'patta' means 'crown' and 'dakal' means 'to receive' in Kannada",
      "The site shows both North Indian (Nagara) and South Indian (Dravida) temple styles at the same location",
      "The Virupaksha Temple inspired the design of the Kailasa Temple at Ellora, built a few decades later",
      "Pattadakal was inscribed as a UNESCO World Heritage Site in 1987"
    ],
    factsHi: [
      "पट्टदकल वह जगह थी जहाँ चालुक्य राजाओं का राज्याभिषेक होता था — कन्नड़ में 'पट्ट' का मतलब 'ताज' है",
      "यह स्थल उत्तर भारतीय (नागर) और दक्षिण भारतीय (द्रविड़) मंदिर शैलियों को एक ही स्थान पर दिखाता है",
      "विरूपाक्ष मंदिर ने कुछ दशक बाद बने एलोरा के कैलाश मंदिर के डिजाइन को प्रेरित किया",
      "पट्टदकल को 1987 में यूनेस्को विश्व धरोहर स्थल घोषित किया गया"
    ],
    visitingHours: "6:00 AM to 6:00 PM (All days)",
    visitingHoursHi: "सुबह 6:00 से शाम 6:00 बजे तक (सभी दिन)",
    bestMonths: [9, 10, 11, 0, 1, 2],
    bestTimeDesc: "September to February — the Malaprabha River nearby is at its most scenic. Combine with Badami Caves 22 km away and Aihole for a full day of Chalukya heritage.",
    bestTimeDescHi: "सितंबर से फ़रवरी — पास की मालप्रभा नदी सबसे सुंदर है। बादामी गुफाओं और ऐहोल के साथ एक पूरे दिन की चालुक्य विरासत के लिए जोड़ें।",
    timeline: [
      { year: "7th century CE", event: "Badami Chalukyas choose Pattadakal as their coronation city and begin building temples", eventHi: "बादामी चालुक्यों ने पट्टदकल को अपना राज्याभिषेक शहर चुना और मंदिर बनाना शुरू किया" },
      { year: "733 CE", event: "Queen Lokamahadevi builds the Virupaksha Temple to celebrate Vikramaditya II's victory over the Pallavas", eventHi: "रानी लोकमहादेवी ने विक्रमादित्य द्वितीय की पल्लव विजय के उपलक्ष्य में विरूपाक्ष मंदिर बनाया" },
      { year: "1987", event: "UNESCO World Heritage Site designation", eventHi: "यूनेस्को विश्व धरोहर स्थल घोषित" }
    ],
    entryFee: "₹30 (Indians), ₹500 (Foreigners)",
    entryFeeHi: "₹30 (भारतीय), ₹500 (विदेशी)",
    UNESCO: true
  },
  {
    id: "badami-caves",
    name: "Badami Cave Temples",
    nameHi: "बादामी गुफा मंदिर",
    city: "Badami",
    state: "Karnataka",
    coordinates: [75.6837, 15.9176],
    description: "The Badami Cave Temples are four rock-cut cave temples carved into a dramatic red sandstone cliff above the Agastya Lake by the early Chalukya dynasty in the 6th century CE. Cave 3 is the largest and most impressive — its carved columns and ceiling panels, and the magnificent Trivikrama (Vishnu in cosmic form, spanning the universe) and Varaha panels, are masterpieces of early South Indian art.",
    descriptionHi: "बादामी गुफा मंदिर प्रारंभिक चालुक्य वंश द्वारा 6वीं शताब्दी ई. में अगस्त्य झील के ऊपर एक नाटकीय लाल बलुआ पत्थर की चट्टान में तराशे गए चार रॉक-कट गुफा मंदिर हैं।",
    yearBuilt: "6th century CE (578–590 CE)",
    dynasty: "Badami Chalukya dynasty",
    dynastyHi: "बादामी चालुक्य वंश",
    primaryModel: "/models/badami_caves.glb",
    historicalModels: { past: "/models/badami_caves.glb", ancient: "/models/badami_caves.glb" },
    era: "ancient",
    hotspots: [
      { name: "Cave 3 (Vaishnava)", description: "The largest and finest cave — featuring the monumental Trivikrama (Vishnu taking three strides to span the universe), the Narasimha panel, and intricately carved columns. Dated 578 CE by an inscription.", position: [0, 0.8, 0.5] },
      { name: "Cave 1 (Shaiva)", description: "The earliest cave — a colonnaded veranda with a famous 18-armed dancing Shiva (Nataraja) in dynamic pose, and a large Ardhanarishvara (half Shiva, half Parvati) panel.", position: [-0.8, 0.5, 0.8] },
      { name: "Agastya Lake Reservoir", description: "The sacred tank below the caves, flanked by smaller rock-cut shrines — the entire complex of caves, lake, and fort was the ancient Chalukya capital Vatapi.", position: [0, -0.5, 1.5] }
    ],
    facts: [
      "Cave 3 has an inscription dating it to 578 CE — one of the earliest dated Vaishnava cave temples in India",
      "The Badami caves were among the first major rock-cut temples in South India, preceding the Ellora and Mahabalipuram caves",
      "The Chalukyas chose Badami (Vatapi) for its dramatic red gorge — the sandstone cliffs allowed precise carving",
      "Cave 4 is a Jain cave — unusual in that most Badami caves are Hindu, reflecting the Chalukyas' religious tolerance"
    ],
    factsHi: [
      "गुफा 3 में 578 ई. का शिलालेख है — भारत में सबसे पुराने दिनांकित वैष्णव गुफा मंदिरों में से एक",
      "बादामी गुफाएँ दक्षिण भारत के पहले प्रमुख रॉक-कट मंदिरों में थीं, एलोरा और महाबलिपुरम से पहले",
      "चालुक्यों ने अपनी नाटकीय लाल घाटी के लिए बादामी (वातापी) को चुना",
      "गुफा 4 एक जैन गुफा है — यह असामान्य है क्योंकि अधिकांश बादामी गुफाएँ हिंदू हैं"
    ],
    visitingHours: "9:00 AM to 5:30 PM (All days)",
    visitingHoursHi: "सुबह 9:00 से शाम 5:30 बजे तक (सभी दिन)",
    bestMonths: [9, 10, 11, 0, 1, 2],
    bestTimeDesc: "September to February — post-monsoon Badami is beautiful with the red gorge reflected in the lake. Combine with Pattadakal and Aihole for a full Chalukya heritage trail.",
    bestTimeDescHi: "सितंबर से फ़रवरी — मानसून के बाद बादामी सुंदर है — लाल घाटी झील में प्रतिबिंबित होती है।",
    timeline: [
      { year: "543–598 CE", event: "Pulakesi I and his successors establish Badami (Vatapi) as the Chalukya capital and commission the cave temples", eventHi: "पुलकेसी प्रथम और उनके उत्तराधिकारियों ने बादामी (वातापी) को चालुक्य राजधानी बनाया और गुफा मंदिर बनवाए" },
      { year: "642 CE", event: "Pallava king Narasimhavarman I defeats and kills the Chalukya king Pulakesi II, temporarily sacking Vatapi", eventHi: "पल्लव राजा नरसिंहवर्मन प्रथम ने चालुक्य राजा पुलकेसी द्वितीय को हराया और वातापी को लूटा" }
    ],
    entryFee: "₹25 (Indians), ₹300 (Foreigners)",
    entryFeeHi: "₹25 (भारतीय), ₹300 (विदेशी)",
    UNESCO: false
  },
  {
    id: "gomateshwara",
    name: "Gomateshwara (Bahubali)",
    nameHi: "गोमतेश्वर (बाहुबलि)",
    city: "Sravanabelagola",
    state: "Karnataka",
    coordinates: [76.4958, 12.8570],
    description: "The Gomateshwara monolith at Sravanabelagola is an 18-metre monolithic granite statue of Bahubali (Gomateshwara), the Jain figure who renounced the world and stood in meditation for so long that vines grew around his legs and arms. Carved in 983 CE and visible from 30 km away, it is the world's largest free-standing monolithic statue and a major Digambara Jain pilgrimage site.",
    descriptionHi: "श्रवणबेलगोल में गोमतेश्वर एकाश्म बाहुबलि (गोमतेश्वर) की 18 मीटर की एकाश्म ग्रेनाइट प्रतिमा है, जो वह जैन व्यक्ति हैं जिन्होंने दुनिया का त्याग किया और इतने लंबे समय तक ध्यान में खड़े रहे कि उनके पैरों और भुजाओं के चारों ओर बेलें उग आईं।",
    yearBuilt: "983 CE",
    dynasty: "Ganga dynasty (commissioned by Chamundaraya)",
    dynastyHi: "गंग वंश (चामुंडराय द्वारा निर्मित)",
    primaryModel: "/models/gomateshwara.glb",
    historicalModels: { past: "/models/gomateshwara.glb", ancient: "/models/gomateshwara.glb" },
    era: "ancient",
    hotspots: [
      { name: "Monolithic Statue", description: "The 18-metre granite statue carved from a single boulder atop Vindhyagiri Hill — its serene face is visible from 30 km across the Karnataka plains.", position: [0, 1.5, 0] },
      { name: "Mahamastakabhisheka Platform", description: "Every 12 years, thousands of pots of milk, honey, sandalwood paste, and coloured powder are poured over the statue's head in the Mahamastakabhisheka ceremony — one of India's greatest religious spectacles.", position: [0.3, 2.0, 0] },
      { name: "Chandragiri Hill", description: "The smaller hill opposite Vindhyagiri has a cluster of Jain temples and the oldest Brahmi inscription in Karnataka — together the two hills form the sacred complex.", position: [-1.0, -0.3, 1.0] }
    ],
    facts: [
      "The Gomateshwara statue is the world's largest free-standing monolithic statue — 18 metres tall",
      "Every 12 years, the Mahamastakabhisheka (head anointing) ceremony draws over a million pilgrims",
      "The statue has been standing for over 1,000 years with virtually no structural repair",
      "Sravanabelagola contains Karnataka's oldest known Brahmi inscription, from the time of Chandragupta Maurya"
    ],
    factsHi: [
      "गोमतेश्वर प्रतिमा दुनिया की सबसे बड़ी स्वतंत्र-खड़ी एकाश्म प्रतिमा है — 18 मीटर ऊँची",
      "हर 12 साल में महामस्तकाभिषेक (सिर अभिषेक) समारोह में 10 लाख से अधिक तीर्थयात्री आते हैं",
      "प्रतिमा बिना किसी संरचनात्मक मरम्मत के 1,000 से अधिक वर्षों से खड़ी है",
      "श्रवणबेलगोल में कर्नाटक का सबसे पुराना ज्ञात ब्राह्मी शिलालेख है, चंद्रगुप्त मौर्य के समय का"
    ],
    visitingHours: "6:30 AM to 5:30 PM (All days)",
    visitingHoursHi: "सुबह 6:30 से शाम 5:30 बजे तक (सभी दिन)",
    bestMonths: [9, 10, 11, 0, 1, 2],
    bestTimeDesc: "October to February — mild Karnataka weather. The Mahamastakabhisheka ceremony (next around 2030–2031) is the once-in-12-years spectacle not to be missed if timing aligns.",
    bestTimeDescHi: "अक्तूबर से फ़रवरी — हल्की कर्नाटक जलवायु। महामस्तकाभिषेक समारोह (अगला लगभग 2030–2031) 12 साल में एक बार का नज़ारा है।",
    timeline: [
      { year: "983 CE", event: "Chamundaraya, minister of the Ganga king Rachamalla, commissions the Gomateshwara statue", eventHi: "गंग राजा रचामल्ल के मंत्री चामुंडराय ने गोमतेश्वर प्रतिमा बनवाई" },
      { year: "993 CE", event: "First Mahamastakabhisheka ceremony performed by Chamundaraya at the statue's consecration", eventHi: "प्रतिमा के अभिषेक पर चामुंडराय द्वारा पहला महामस्तकाभिषेक समारोह किया गया" }
    ],
    entryFee: "Free entry (camera fee applies)",
    entryFeeHi: "निःशुल्क प्रवेश (कैमरा शुल्क लागू)",
    UNESCO: false
  },
  {
    id: "lepakshi-temple",
    name: "Lepakshi Temple",
    nameHi: "लेपाक्षी मंदिर",
    city: "Lepakshi",
    state: "Andhra Pradesh",
    coordinates: [77.6065, 13.8033],
    description: "The Veerabhadra Temple at Lepakshi is a 16th-century Vijayanagara temple famous for three extraordinary features: a hanging pillar that appears not to touch the ground, extraordinary painted ceiling murals spanning 70 sq metres (among the finest surviving examples of Vijayanagara mural art), and an immense monolithic Nandi bull — 4.5 metres high and 8 metres long — carved from a single boulder.",
    descriptionHi: "लेपाक्षी में वीरभद्र मंदिर एक 16वीं शताब्दी का विजयनगर मंदिर तीन असाधारण विशेषताओं के लिए प्रसिद्ध है: एक लटकता हुआ स्तंभ जो जमीन नहीं छूता, 70 वर्गमीटर की भव्य चित्रित छत भित्तिचित्र, और एक विशाल एकाश्म नंदी बैल।",
    yearBuilt: "1530 CE (Vijayanagara period)",
    dynasty: "Vijayanagara Empire",
    dynastyHi: "विजयनगर साम्राज्य",
    primaryModel: "/models/lepakshi_temple.glb",
    historicalModels: { past: "/models/lepakshi_temple.glb", ancient: "/models/lepakshi_temple.glb" },
    era: "medieval",
    hotspots: [
      { name: "Hanging Pillar", description: "One of the 70 pillars of the temple appears not to touch the floor — a cloth or thin object can be passed under it. This architectural puzzle has never been fully explained.", position: [0, 0.5, 1.0] },
      { name: "Painted Ceiling Murals", description: "70 sq metres of exceptionally well-preserved Vijayanagara ceiling paintings in vivid colours — scenes from the Ramayana, Mahabharata, Shiva Purana, and the Vijayanagara court.", position: [0, 1.5, 0] },
      { name: "Monolithic Nandi", description: "One of the largest monolithic Nandi bulls in India — 4.5 metres high, 8.23 metres long, carved from a single granite boulder — located 200 metres from the main temple.", position: [1.2, 0, 0.5] }
    ],
    facts: [
      "One of the 70 pillars in Lepakshi temple appears to 'hang' — a sheet of paper can be passed under it",
      "The 70 sq metre painted ceiling is among the most extensive and best-preserved Vijayanagara murals in existence",
      "The giant monolithic Nandi at Lepakshi is one of the largest in India at 4.5 metres tall",
      "The name 'Lepakshi' comes from 'Lepakshi O Pakshi' — 'Rise, O Bird' — what Rama said to Jatayu the eagle who died fighting Ravana"
    ],
    factsHi: [
      "लेपाक्षी मंदिर के 70 में से एक स्तंभ 'लटकता' प्रतीत होता है — इसके नीचे एक कागज की शीट पास की जा सकती है",
      "70 वर्गमीटर की चित्रित छत मौजूदा सबसे व्यापक और सबसे अच्छी तरह से संरक्षित विजयनगर भित्तिचित्रों में से है",
      "लेपाक्षी में विशाल एकाश्म नंदी 4.5 मीटर ऊँचे भारत के सबसे बड़े में से एक है",
      "'लेपाक्षी' नाम 'ले पाक्षी ओ पाक्षी' से आया है — 'उठो, हे पक्षी' — राम ने रावण से लड़ते हुए मरते जटायु से कहा"
    ],
    visitingHours: "9:00 AM to 5:30 PM (All days)",
    visitingHoursHi: "सुबह 9:00 से शाम 5:30 बजे तक (सभी दिन)",
    bestMonths: [10, 11, 0, 1, 2],
    bestTimeDesc: "October to February — Andhra Pradesh's winter is mild. Lepakshi is 120 km from Bengaluru, making it a popular day trip from the city.",
    bestTimeDescHi: "अक्तूबर से फ़रवरी — आंध्र प्रदेश की सर्दी हल्की है। लेपाक्षी बेंगलुरु से 120 किमी दूर है।",
    timeline: [
      { year: "1530 CE", event: "Brothers Virupanna and Veeranna, treasury officials of the Vijayanagara king, commission the Veerabhadra temple at Lepakshi", eventHi: "विजयनगर राजा के खजाना अधिकारी भाई विरूपण्ण और वीरण्ण ने लेपाक्षी में वीरभद्र मंदिर बनवाया" }
    ],
    entryFee: "Free entry",
    entryFeeHi: "निःशुल्क प्रवेश",
    UNESCO: false
  },
  {
    id: "tirupati-temple",
    name: "Tirupati Venkateswara Temple",
    nameHi: "तिरुपति वेंकटेश्वर मंदिर",
    city: "Tirupati",
    state: "Andhra Pradesh",
    coordinates: [79.3474, 13.6836],
    description: "The Venkateswara Temple on Tirumala Hill in Tirupati is the most visited religious site in the world — over 100,000 pilgrims visit every single day. The temple is also the wealthiest religious institution on Earth, with annual revenues exceeding ₹3,000 crore. Dedicated to Lord Venkateswara (Vishnu), the temple's gold-plated vimana and gopuram are iconic symbols of South Indian temple architecture.",
    descriptionHi: "तिरुमला पहाड़ी पर तिरुपति में वेंकटेश्वर मंदिर दुनिया का सबसे अधिक देखा जाने वाला धार्मिक स्थल है — हर दिन 1 लाख से अधिक तीर्थयात्री आते हैं। मंदिर पृथ्वी का सबसे धनी धार्मिक संस्थान भी है, जिसकी वार्षिक आय ₹3,000 करोड़ से अधिक है।",
    yearBuilt: "Early centuries CE (current structure 9th–10th century onwards)",
    dynasty: "Various (Pallava, Chola, Vijayanagara patronage)",
    dynastyHi: "विविध (पल्लव, चोल, विजयनगर संरक्षण)",
    primaryModel: "/models/tirupati_temple.glb",
    historicalModels: { past: "/models/tirupati_temple.glb", ancient: "/models/tirupati_temple.glb" },
    era: "ancient",
    hotspots: [
      { name: "Golden Vimana", description: "The main sanctum tower — covered in sheets of gold — houses the idol of Lord Venkateswara, said to be a self-manifested (swayambhu) form of Vishnu.", position: [0, 1.5, 0] },
      { name: "Kalyana Katta (Tonsure Hall)", description: "Where pilgrims donate their hair (tonsure) as an offering — Tirupati collects and sells tens of thousands of kg of human hair annually, generating enormous revenue.", position: [0.8, 0, 0.8] },
      { name: "Rajagopuram Gateway", description: "The towering gold-plated main gateway through which pilgrims enter — covered in intricate sculptural reliefs of deities, now gilded in gold.", position: [0, 0, 1.5] }
    ],
    facts: [
      "Tirupati is the most visited pilgrimage site in the world — over 100,000 pilgrims visit daily",
      "The temple is the wealthiest religious institution on Earth — annual income exceeds ₹3,000 crore",
      "Tirupati collects and auctions over 50,000 kg of human hair (donated by pilgrims as tonsure offerings) every year",
      "The famous Tirupati laddu prasadam (sweet) has a Geographical Indication (GI) tag protecting its recipe"
    ],
    factsHi: [
      "तिरुपति दुनिया का सबसे अधिक देखा जाने वाला तीर्थ स्थल है — रोज 1 लाख से अधिक तीर्थयात्री",
      "मंदिर पृथ्वी का सबसे धनी धार्मिक संस्थान है — वार्षिक आय ₹3,000 करोड़ से अधिक",
      "तिरुपति हर साल मुंडन भेंट से 50,000 किलोग्राम से अधिक मानव बाल एकत्र और नीलाम करता है",
      "प्रसिद्ध तिरुपति लड्डू प्रसादम में एक भौगोलिक संकेत (GI) टैग है जो इसकी रेसिपी की रक्षा करता है"
    ],
    visitingHours: "2:30 AM to 1:30 AM next day (nearly 23 hours daily)",
    visitingHoursHi: "सुबह 2:30 से अगले दिन 1:30 बजे तक (लगभग 23 घंटे रोज)",
    bestMonths: [0, 1, 2, 9, 10, 11],
    bestTimeDesc: "Year-round, but December to February is most comfortable (20–28°C). Book darshan tickets online in advance — waiting times can exceed 12 hours during festivals. The Brahmotsavam festival (September/October) draws over a million pilgrims.",
    bestTimeDescHi: "साल भर, लेकिन दिसंबर से फ़रवरी सबसे आरामदायक (20–28°C)। दर्शन टिकट ऑनलाइन अग्रिम बुक करें।",
    timeline: [
      { year: "300–600 CE", event: "Early Pallava kings build the first structured temple at Tirumala to enshrine Venkateswara", eventHi: "प्रारंभिक पल्लव राजाओं ने तिरुमला में वेंकटेश्वर के लिए पहला संरचित मंदिर बनाया" },
      { year: "14th–16th century CE", event: "Vijayanagara kings make enormous donations and gold gifts — the current golden vimana dates from this era", eventHi: "विजयनगर राजाओं ने भारी दान और सोने के उपहार दिए — वर्तमान सोने का विमान इसी युग का है" }
    ],
    entryFee: "Free darshan (optional ₹300 for priority access)",
    entryFeeHi: "निःशुल्क दर्शन (प्राथमिकता पहुँच के लिए वैकल्पिक ₹300)",
    UNESCO: false
  },
  {
    id: "rameswaram-temple",
    name: "Ramanathaswamy Temple",
    nameHi: "रामनाथस्वामी मंदिर",
    city: "Rameswaram",
    state: "Tamil Nadu",
    coordinates: [79.3208, 9.2879],
    description: "The Ramanathaswamy Temple on Rameswaram Island is one of the four dhams (Hindu pilgrimage circuit) and one of the 12 Jyotirlinga shrines of Shiva. The temple is renowned for its extraordinary corridor — the third corridor (outer prakaram) is 1,212 metres long with 1,212 pillars, making it the longest corridor of any temple in the world. The island is also the place where Rama built a bridge to Lanka.",
    descriptionHi: "रामेश्वरम द्वीप पर रामनाथस्वामी मंदिर चार धामों (हिंदू तीर्थयात्रा परिपथ) में से एक और शिव के 12 ज्योतिर्लिंग मंदिरों में से एक है। मंदिर अपने असाधारण गलियारे के लिए प्रसिद्ध है — तीसरा गलियारा 1,212 मीटर लंबा और 1,212 स्तंभों के साथ — दुनिया के किसी भी मंदिर का सबसे लंबा गलियारा।",
    yearBuilt: "12th century CE (current structure); ancient origin",
    dynasty: "Pandya, Nayak, Setupati dynasty patronage",
    dynastyHi: "पांड्य, नायक, सेतुपति वंश संरक्षण",
    primaryModel: "/models/rameswaram_temple.glb",
    historicalModels: { past: "/models/rameswaram_temple.glb", ancient: "/models/rameswaram_temple.glb" },
    era: "ancient",
    hotspots: [
      { name: "World's Longest Temple Corridor", description: "The outer corridor stretches 1,212 metres — 1,212 pillars with a double-row perspective — making it the longest temple corridor in the world.", position: [0, 0.3, 1.5] },
      { name: "22 Sacred Wells (Teerthas)", description: "There are 22 sacred wells inside the temple, each with water believed to have different curative properties — pilgrims traditionally bathe in all 22 before the main darshan.", position: [0.8, 0, 0.8] },
      { name: "Gandhamadana Hill", description: "A small hillock outside the temple where Rama is said to have stood surveying the sea and planning the bridge to Lanka — a sandal-wood footprint of Rama is enshrined here.", position: [-0.8, 0.3, 0.8] }
    ],
    facts: [
      "Ramanathaswamy Temple has the world's longest corridor — the outer prakaram is 1,212 metres with 1,212 pillars",
      "Pilgrims traditionally bathe in 22 sacred wells (teerthas) inside the temple before darshan",
      "Rameswaram is connected to the mainland by the Pamban Bridge — for decades the longest sea bridge in India",
      "The temple is one of India's four Char Dham pilgrimage sites: Badrinath, Dwarka, Puri, and Rameswaram"
    ],
    factsHi: [
      "रामनाथस्वामी मंदिर में दुनिया का सबसे लंबा गलियारा है — बाहरी प्राकारम 1,212 मीटर और 1,212 स्तंभ",
      "तीर्थयात्री परंपरागत रूप से दर्शन से पहले मंदिर के अंदर 22 पवित्र कुओं (तीर्थों) में स्नान करते हैं",
      "रामेश्वरम पंबन पुल से मुख्य भूमि से जुड़ा है — दशकों तक भारत का सबसे लंबा समुद्री पुल",
      "मंदिर भारत के चार चारधाम तीर्थस्थलों में से एक है: बद्रीनाथ, द्वारका, पुरी और रामेश्वरम"
    ],
    visitingHours: "5:00 AM to 1:00 PM, 3:00 PM to 9:00 PM (All days)",
    visitingHoursHi: "सुबह 5:00 से 1:00 बजे, दोपहर 3:00 से रात 9:00 बजे तक (सभी दिन)",
    bestMonths: [11, 0, 1, 2, 3],
    bestTimeDesc: "November to April — Rameswaram's coastal climate is hot and humid year-round, but slightly milder in winter. The Maha Shivaratri festival (February/March) is the most auspicious time to visit.",
    bestTimeDescHi: "नवंबर से अप्रैल — रामेश्वरम का तटीय जलवायु साल भर गर्म और आर्द्र है, लेकिन सर्दियों में थोड़ा हल्का।",
    timeline: [
      { year: "12th century CE", event: "Pandya kings build the current stone temple over the ancient site where Rama is said to have worshipped", eventHi: "पांड्य राजाओं ने उस प्राचीन स्थान पर वर्तमान पत्थर मंदिर बनाया जहाँ राम ने पूजा की थी" },
      { year: "16th–18th century CE", event: "The Nayaks and Setupati kings of Ramanathapuram build the famous long corridors and gopurams", eventHi: "राजाओं और रामनाथपुरम के सेतुपति राजाओं ने प्रसिद्ध लंबे गलियारे और गोपुरम बनाए" }
    ],
    entryFee: "Free entry (special darshan tickets available)",
    entryFeeHi: "निःशुल्क प्रवेश (विशेष दर्शन टिकट उपलब्ध)",
    UNESCO: false
  },
  {
    id: "gangaikonda-cholapuram",
    name: "Gangaikonda Cholapuram",
    nameHi: "गंगईकोंड चोलपुरम",
    city: "Ariyalur",
    state: "Tamil Nadu",
    coordinates: [79.4513, 11.2073],
    description: "Gangaikonda Cholapuram ('City of the Chola who conquered the Ganga') was the capital of Emperor Rajendra Chola I (1012–1044 CE) after his legendary north Indian military campaign that reached the Ganges. The Brihadeesvarar temple here — built in 1035 CE — is nearly as magnificent as the Brihadeeswara Temple at Thanjavur, with a 55-metre shikhara that curves slightly inward, creating a different visual effect.",
    descriptionHi: "गंगईकोंड चोलपुरम ('गंगा पर विजय प्राप्त करने वाले चोल का शहर') सम्राट राजेंद्र चोल प्रथम की राजधानी थी। 1035 ई. में यहाँ बना बृहदीश्वर मंदिर तंजावुर के बृहदेश्वर मंदिर जितना ही शानदार है, जिसमें 55 मीटर का शिखर थोड़ा अंदर की ओर झुका है।",
    yearBuilt: "1035 CE",
    dynasty: "Chola dynasty (Rajendra Chola I)",
    dynastyHi: "चोल वंश (राजेंद्र चोल प्रथम)",
    primaryModel: "/models/gangaikonda_cholapuram.glb",
    historicalModels: { past: "/models/gangaikonda_cholapuram.glb", ancient: "/models/gangaikonda_cholapuram.glb" },
    era: "ancient",
    hotspots: [
      { name: "Curvilinear Shikhara", description: "The 55-metre vimana tower — slightly taller than Brihadeeswara's — curves inward at the top, giving it a subtly different, more organic silhouette.", position: [0, 1.5, 0] },
      { name: "Ardhanarishvara Sculpture", description: "One of the finest Chola bronze and stone sculptures in existence — a large stone Ardhanarishvara (Shiva as half-man, half-woman) of extraordinary refinement.", position: [0.8, 0.5, 0.5] },
      { name: "Shiva Ganga Tank", description: "The large sacred tank in front of the temple — Rajendra Chola brought water from the Ganges in golden pots and poured it into this tank, giving it its sacred status.", position: [0, -0.5, 1.5] }
    ],
    facts: [
      "Rajendra Chola I defeated the rulers of Bengal, Orissa, and even briefly reached the Ganges — then returned with pots of Ganga water",
      "The Brihadeesvarar shikhara here is 55 metres tall and curves inward — different from the straight tower at Thanjavur",
      "The site was once a flourishing city — now only the temple complex remains amid agricultural fields",
      "The temple contains some of the finest Chola bronze sculptures, including the famous Nataraja kept here"
    ],
    factsHi: [
      "राजेंद्र चोल प्रथम ने बंगाल, उड़ीसा के शासकों को हराया और गंगा तक पहुँचे — फिर गंगा जल के घड़े लेकर लौटे",
      "यहाँ बृहदीश्वर शिखर 55 मीटर ऊँचा है और थोड़ा अंदर की ओर झुकता है — तंजावुर के सीधे टॉवर से अलग",
      "यह स्थल कभी एक समृद्ध शहर था — अब केवल मंदिर परिसर कृषि क्षेत्रों के बीच बचा है",
      "मंदिर में बेहतरीन चोल कांस्य मूर्तियाँ हैं"
    ],
    visitingHours: "6:00 AM to 8:00 PM (All days)",
    visitingHoursHi: "सुबह 6:00 से रात 8:00 बजे तक (सभी दिन)",
    bestMonths: [10, 11, 0, 1],
    bestTimeDesc: "October to January — Tamil Nadu's cool season. The temple is less visited than Brihadeeswara at Thanjavur, making it a more serene experience for those who seek it out.",
    bestTimeDescHi: "अक्तूबर से जनवरी — तमिलनाडु का ठंडा मौसम। यह मंदिर तंजावुर से कम देखा जाता है।",
    timeline: [
      { year: "1012–1044 CE", event: "Rajendra Chola I rules — his northern campaign reaches the Ganges and brings back Ganga water for his new capital", eventHi: "राजेंद्र चोल प्रथम का शासन — उनका उत्तरी अभियान गंगा तक पहुँचा और नई राजधानी के लिए गंगा जल वापस लाया" },
      { year: "1035 CE", event: "Brihadeesvarar Temple at Gangaikonda Cholapuram consecrated — the second great Chola temple after Thanjavur", eventHi: "गंगईकोंड चोलपुरम में बृहदीश्वर मंदिर प्रतिष्ठित — तंजावुर के बाद दूसरा महान चोल मंदिर" }
    ],
    entryFee: "Free entry",
    entryFeeHi: "निःशुल्क प्रवेश",
    UNESCO: true
  },
  {
    id: "basilica-bom-jesus",
    name: "Basilica of Bom Jesus",
    nameHi: "बेसिलिका ऑफ बॉम जीसस",
    city: "Old Goa",
    state: "Goa",
    coordinates: [73.9116, 15.5009],
    description: "The Basilica of Bom Jesus is the most famous church in India and a UNESCO World Heritage Site. Built by the Portuguese Jesuits in 1605 CE, it holds the mortal remains of Saint Francis Xavier — the Catholic missionary who brought Christianity to Asia — in an ornate silver casket. The church is a masterpiece of Indian Baroque architecture, blending Portuguese and Indian architectural traditions.",
    descriptionHi: "बेसिलिका ऑफ बॉम जीसस भारत का सबसे प्रसिद्ध चर्च और यूनेस्को विश्व धरोहर स्थल है। पुर्तगाली जेसुइट्स द्वारा 1605 ई. में निर्मित, यह सेंट फ्रांसिस जेवियर — एशिया में ईसाई धर्म लाने वाले कैथोलिक मिशनरी — के नश्वर अवशेष रखता है।",
    yearBuilt: "1594–1605 CE",
    dynasty: "Portuguese colonial (Estado da India)",
    dynastyHi: "पुर्तगाली औपनिवेशिक (एस्टाडो दा इंडिया)",
    primaryModel: "/models/basilica_bom_jesus.glb",
    historicalModels: { past: "/models/basilica_bom_jesus.glb", ancient: "/models/basilica_bom_jesus.glb" },
    era: "modern",
    hotspots: [
      { name: "Tomb of St. Francis Xavier", description: "The elaborate multi-tiered casket of silver and glass housing the preserved body of St. Francis Xavier — on display permanently, but the casket is opened for special Exposition every 10 years.", position: [0.8, 0.8, 0] },
      { name: "Baroque Facade", description: "The three-storey laterite stone Baroque facade — divided into three sections representing Doric, Ionic, and Corinthian orders — is one of the finest Baroque facades in Asia.", position: [0, 0, 1.5] },
      { name: "Golden Altar", description: "The gilded Baroque high altar is dedicated to the Infant Jesus (Bom Jesus) — the carved gilded reredos rises the full height of the apse behind the altar.", position: [0, 0.8, 0.5] }
    ],
    facts: [
      "The body of St. Francis Xavier has been preserved for over 450 years without embalming — considered miraculous by the Catholic Church",
      "Every 10 years, the casket is opened for a grand Exposition — millions of pilgrims attend from around the world",
      "The church was built without using lime plaster in the mortar — laterite stone alone was used for construction",
      "The Basilica is part of the Churches and Convents of Goa UNESCO World Heritage Site (designated 1986)"
    ],
    factsHi: [
      "सेंट फ्रांसिस जेवियर का शरीर बिना शव-परिरक्षण के 450 से अधिक वर्षों से संरक्षित है — कैथोलिक चर्च इसे चमत्कार मानती है",
      "हर 10 साल में एक भव्य एक्सपोजिशन के लिए ताबूत खोला जाता है — दुनिया भर से लाखों तीर्थयात्री आते हैं",
      "चर्च मोर्टार में चूने के प्लास्टर के बिना बनाया गया था — अकेले लेटराइट पत्थर का उपयोग",
      "बेसिलिका 1986 में घोषित यूनेस्को विश्व धरोहर स्थल 'गोवा के चर्च और कॉन्वेंट' का हिस्सा है"
    ],
    visitingHours: "9:00 AM to 6:30 PM (All days)",
    visitingHoursHi: "सुबह 9:00 से शाम 6:30 बजे तक (सभी दिन)",
    bestMonths: [10, 11, 0, 1, 2],
    bestTimeDesc: "October to February — Goa's pleasant winter season (22–30°C). The Exposition of St. Xavier's relics (next one around 2034) is a once-in-a-decade event attracting millions.",
    bestTimeDescHi: "अक्तूबर से फ़रवरी — गोवा का सुखद सर्दियों का मौसम (22–30°C)।",
    timeline: [
      { year: "1594 CE", event: "Construction of Bom Jesus Basilica begins in Old Goa under the Portuguese Jesuits", eventHi: "पुर्तगाली जेसुइट्स के तहत ओल्ड गोवा में बॉम जीसस बेसिलिका का निर्माण शुरू" },
      { year: "1605 CE", event: "Basilica completed and consecrated; St. Francis Xavier's remains moved here from the Se Cathedral", eventHi: "बेसिलिका पूर्ण और पवित्र; सेंट फ्रांसिस जेवियर के अवशेष से कैथेड्रल से यहाँ स्थानांतरित" },
      { year: "1986", event: "UNESCO World Heritage Site designation as part of Churches and Convents of Goa", eventHi: "गोवा के चर्च और कॉन्वेंट के हिस्से के रूप में यूनेस्को विश्व धरोहर" }
    ],
    entryFee: "Free entry",
    entryFeeHi: "निःशुल्क प्रवेश",
    UNESCO: true
  },
  {
    id: "daulatabad-fort",
    name: "Daulatabad Fort",
    nameHi: "दौलताबाद किला",
    city: "Aurangabad",
    state: "Maharashtra",
    coordinates: [75.2152, 19.9426],
    description: "Daulatabad Fort (originally Devagiri Fort) is considered one of the most impregnable forts ever built. Erected on a 190-metre-high isolated conical basalt rock, its sides were cut vertically smooth to prevent any climbing. The fort is famous for the misguided attempt of Sultan Muhammad bin Tughluq to move the entire population of Delhi here as his new capital in 1327 CE — resulting in massive deaths and his eventual reversal.",
    descriptionHi: "दौलताबाद किला (मूल रूप से देवगिरी किला) अब तक बनाए गए सबसे अभेद्य किलों में से एक माना जाता है। 190 मीटर ऊँची अलगाव-कोनी बेसाल्ट चट्टान पर खड़ा, इसके किनारों को चढ़ाई रोकने के लिए लंबवत सीधा काटा गया था।",
    yearBuilt: "12th century CE (Yadava dynasty); strengthened by Bahmanis and Mughals",
    dynasty: "Yadava dynasty; later Bahmani, Nizam Shahi, Mughal",
    dynastyHi: "यादव वंश; बाद में बहमनी, निजाम शाही, मुगल",
    primaryModel: "/models/daulatabad_fort.glb",
    historicalModels: { past: "/models/daulatabad_fort.glb", ancient: "/models/daulatabad_fort.glb" },
    era: "medieval",
    hotspots: [
      { name: "Chand Minar", description: "The 30-metre-tall tower inside the fort — modelled after the Qutub Minar — built by Alauddin Bahmani in 1435 CE to celebrate his conquest of the fort.", position: [0.8, 1.2, 0] },
      { name: "The Moat and Drawbridge", description: "A water-filled moat surrounding the rock historically contained crocodiles, with a drawbridge controlled by the garrison — forming the first of three defensive perimeters.", position: [0, 0, 1.5] },
      { name: "Dark Spiral Tunnel", description: "To reach the summit, invaders had to pass through a pitch-dark spiral tunnel with trap doors — the garrison could pour fire, boiling water, or bats on invaders below.", position: [0, 0.8, 0.5] }
    ],
    facts: [
      "Muhammad bin Tughluq attempted to move the entire population of Delhi to Daulatabad in 1327 — resulting in thousands of deaths and an eventual reversal",
      "The fort has never been taken by direct assault — only by treachery, siege, or starvation",
      "The dark tunnel approach to the summit included trap doors, fire outlets, and live bat colonies to confuse attackers",
      "The Chand Minar inside is 30 metres tall and is the third-tallest minaret in India"
    ],
    factsHi: [
      "मुहम्मद बिन तुगलक ने 1327 में दिल्ली की पूरी आबादी को दौलताबाद स्थानांतरित करने की कोशिश की — हजारों मौतें और अंततः वापसी",
      "किला कभी सीधे हमले से नहीं लिया गया — केवल विश्वासघात, घेराबंदी या भूख से",
      "शिखर तक अंधेरे सुरंग मार्ग में ट्रैप दरवाजे, आग के आउटलेट और जीवित चमगादड़ कॉलोनियाँ थीं",
      "अंदर का चाँद मीनार 30 मीटर ऊँचा है और भारत का तीसरा सबसे ऊँचा मीनार है"
    ],
    visitingHours: "9:00 AM to 6:00 PM (All days)",
    visitingHoursHi: "सुबह 9:00 से शाम 6:00 बजे तक (सभी दिन)",
    bestMonths: [10, 11, 0, 1, 2],
    bestTimeDesc: "October to February — combine with Ajanta and Ellora Caves nearby for a full Aurangabad heritage tour. The fort climb takes about an hour each way.",
    bestTimeDescHi: "अक्तूबर से फ़रवरी — पास की अजंता और एलोरा गुफाओं के साथ पूरे औरंगाबाद विरासत दौरे के लिए जोड़ें।",
    timeline: [
      { year: "1187 CE", event: "Yadava king Bhillama V builds Devagiri Fort on the isolated basalt cone", eventHi: "यादव राजा भिल्लमा पंचम ने अलग-थलग बेसाल्ट शंकु पर देवगिरी किला बनाया" },
      { year: "1327 CE", event: "Muhammad bin Tughluq renames it Daulatabad and disastrously shifts Delhi's population here", eventHi: "मुहम्मद बिन तुगलक ने इसका नाम दौलताबाद रखा और दिल्ली की आबादी को यहाँ स्थानांतरित करने की विनाशकारी कोशिश की" }
    ],
    entryFee: "₹25 (Indians), ₹300 (Foreigners)",
    entryFeeHi: "₹25 (भारतीय), ₹300 (विदेशी)",
    UNESCO: false
  },
  {
    id: "aga-khan-palace",
    name: "Aga Khan Palace",
    nameHi: "आगा खान पैलेस",
    city: "Pune",
    state: "Maharashtra",
    coordinates: [73.9028, 18.5480],
    description: "The Aga Khan Palace in Pune is an important site in India's independence history. Built in 1892 by Sultan Muhammad Shah, Aga Khan III as a work of charity for the poor, it was used by the British as a detention camp where Mahatma Gandhi, Kasturba Gandhi, and Sarojini Naidu were interned from 1942–1944 during the Quit India Movement. Kasturba Gandhi and Gandhi's secretary Mahadev Desai died here.",
    descriptionHi: "पुणे का आगा खान पैलेस भारत के स्वतंत्रता इतिहास में एक महत्वपूर्ण स्थल है। 1892 में सुल्तान मुहम्मद शाह, आगा खान तृतीय द्वारा गरीबों के लिए दान के काम के रूप में बनाया गया, इसे ब्रिटिश द्वारा 1942–1944 में भारत छोड़ो आंदोलन के दौरान महात्मा गांधी, कस्तूरबा गांधी और सरोजिनी नायडू को हिरासत में रखने के लिए उपयोग किया गया।",
    yearBuilt: "1892 CE",
    dynasty: "Aga Khan dynasty (Ismaili Muslim)",
    dynastyHi: "आगा खान वंश (इस्माइली मुस्लिम)",
    primaryModel: "/models/aga_khan_palace.glb",
    historicalModels: { past: "/models/aga_khan_palace.glb", ancient: "/models/aga_khan_palace.glb" },
    era: "modern",
    hotspots: [
      { name: "Gandhi Memorial", description: "The samadhi (memorial shrine) of Kasturba Gandhi in the palace gardens — she died here in British captivity in February 1944 after illness. Gandhi's ashes are also enshrined here.", position: [0.5, 0, 1.0] },
      { name: "Detention Room", description: "The rooms where Gandhi and Kasturba were kept in captivity — preserved as they were during their 21-month detention from 1942–1944.", position: [0, 0.5, 0.5] },
      { name: "Italian Arched Verandas", description: "The palace's wide Italian-style arcaded verandas with pointed Moorish arches — designed to suit the Pune climate while reflecting the Aga Khan's cosmopolitan aesthetic.", position: [0, 0, 1.2] }
    ],
    facts: [
      "Kasturba Gandhi (Mahatma Gandhi's wife) died in British captivity at this palace in 1944",
      "Gandhi himself was detained here for 21 months (1942–1944) during the Quit India Movement",
      "The palace was built to provide employment to Pune's poor during the famine of 1892",
      "The Aga Khan family donated the palace to India as a symbol of goodwill after independence"
    ],
    factsHi: [
      "कस्तूरबा गांधी (महात्मा गांधी की पत्नी) की 1944 में इस महल में ब्रिटिश हिरासत में मृत्यु हुई",
      "गांधी खुद 1942–1944 के भारत छोड़ो आंदोलन के दौरान यहाँ 21 महीने तक नजरबंद थे",
      "महल 1892 के अकाल के दौरान पुणे के गरीबों को रोजगार प्रदान करने के लिए बनाया गया था",
      "आगा खान परिवार ने महल को स्वतंत्रता के बाद सद्भाव के प्रतीक के रूप में भारत को दान किया"
    ],
    visitingHours: "9:00 AM to 5:30 PM (All days)",
    visitingHoursHi: "सुबह 9:00 से शाम 5:30 बजे तक (सभी दिन)",
    bestMonths: [10, 11, 0, 1, 2],
    bestTimeDesc: "October to February — Pune winters are mild (15–28°C). The palace gardens are peaceful and the museum is well-maintained. A must-visit for those interested in Gandhi and India's independence movement.",
    bestTimeDescHi: "अक्तूबर से फ़रवरी — पुणे की सर्दियाँ हल्की (15–28°C) होती हैं।",
    timeline: [
      { year: "1892 CE", event: "Sultan Muhammad Shah Aga Khan III builds the palace to provide employment to Pune's famine-hit poor", eventHi: "सुल्तान मुहम्मद शाह आगा खान तृतीय ने अकाल पीड़ित पुणे के गरीबों को रोजगार देने के लिए महल बनाया" },
      { year: "1942–1944 CE", event: "British intern Mahatma Gandhi, Kasturba Gandhi, and Sarojini Naidu here after the Quit India Movement begins", eventHi: "भारत छोड़ो आंदोलन शुरू होने के बाद ब्रिटिश ने यहाँ महात्मा गांधी, कस्तूरबा गांधी और सरोजिनी नायडू को नजरबंद किया" }
    ],
    entryFee: "₹5 (Indians), ₹5 (Foreigners)",
    entryFeeHi: "₹5 (भारतीय), ₹5 (विदेशी)",
    UNESCO: false
  },
  {
    id: "shaniwar-wada",
    name: "Shaniwar Wada",
    nameHi: "शनिवार वाडा",
    city: "Pune",
    state: "Maharashtra",
    coordinates: [73.8554, 18.5183],
    description: "Shaniwar Wada was the seat of the Peshwa rulers of the Maratha Empire from 1732 until it was largely destroyed by a mysterious fire in 1828. The fortified palace complex was once a seven-storey structure of extraordinary grandeur, housing the Peshwa court and thousands of attendants. Today only the massive outer walls and grand gateways survive, along with a beautifully maintained garden in the ruins.",
    descriptionHi: "शनिवार वाडा 1732 से 1828 में रहस्यमय आग से बड़े पैमाने पर नष्ट होने तक मराठा साम्राज्य के पेशवा शासकों का केंद्र था। किलेबंद महल परिसर एक समय सात मंजिल की असाधारण भव्यता की संरचना थी।",
    yearBuilt: "1732 CE",
    dynasty: "Peshwa (Maratha Empire)",
    dynastyHi: "पेशवा (मराठा साम्राज्य)",
    primaryModel: "/models/shaniwar_wada.glb",
    historicalModels: { past: "/models/shaniwar_wada.glb", ancient: "/models/shaniwar_wada.glb" },
    era: "modern",
    hotspots: [
      { name: "Dilli Darwaza", description: "The main Delhi Gate — 21 feet tall with enormous spike-studded wooden doors designed to prevent war elephants from breaking through — the spikes are arranged in a lotus pattern.", position: [0, 0.5, 1.5] },
      { name: "Hazari Karanje Fountain", description: "The Thousand Jets Fountain at the centre of the inner garden — originally fed by an ingenious water-lifting system, the 16-pointed star-shaped fountain was the centrepiece of the Peshwa's inner garden.", position: [0, 0, 0.5] },
      { name: "Outer Walls", description: "The massive 22-metre-high outer walls of dark stone — the only major structure to survive the 1828 fire, now housing the formal garden that occupies the site of the original palace.", position: [0, 0.8, 1.0] }
    ],
    facts: [
      "Shaniwar Wada burned in a mysterious fire in 1828 — the origin of the fire was never determined",
      "The main gate's spike-studded doors are arranged in a lotus pattern — the spikes are 14 inches long",
      "At its height, Shaniwar Wada housed over 1,000 attendants, soldiers, and functionaries of the Peshwa court",
      "The ruins are said to be haunted — the ghost of the young Peshwa Narayanrao who was murdered here in 1773"
    ],
    factsHi: [
      "शनिवार वाडा 1828 में एक रहस्यमय आग में जला — आग की उत्पत्ति कभी निर्धारित नहीं हुई",
      "मुख्य दरवाजे की नुकीले दरवाजे कमल के पैटर्न में व्यवस्थित हैं — कील 14 इंच लंबे हैं",
      "अपनी ऊँचाई पर, शनिवार वाडा में पेशवा दरबार के 1,000 से अधिक परिचारक, सैनिक और कार्यकर्ता थे",
      "खंडहरों में भूत होने की बात कही जाती है — युवा पेशवा नारायणराव का जो 1773 में यहाँ मारे गए थे"
    ],
    visitingHours: "8:00 AM to 6:30 PM (All days)",
    visitingHoursHi: "सुबह 8:00 से शाम 6:30 बजे तक (सभी दिन)",
    bestMonths: [9, 10, 11, 0, 1, 2],
    bestTimeDesc: "September to February — Pune's climate is pleasant. The sound and light show at Shaniwar Wada in the evenings recounts the glory and tragedy of the Peshwa era.",
    bestTimeDescHi: "सितंबर से फ़रवरी — पुणे की जलवायु सुखद है। शनिवार वाडा में शाम की साउंड एंड लाइट शो पेशवा युग की महिमा और त्रासदी बताती है।",
    timeline: [
      { year: "1732 CE", event: "Peshwa Baji Rao I builds Shaniwar Wada as the administrative centre of the Maratha Empire", eventHi: "पेशवा बाजी राव प्रथम ने मराठा साम्राज्य के प्रशासनिक केंद्र के रूप में शनिवार वाडा बनाया" },
      { year: "1773 CE", event: "Young Peshwa Narayanrao assassinated inside the wada by guards loyal to his uncle", eventHi: "युवा पेशवा नारायणराव की वाडा के अंदर उनके चाचा के वफादार गार्डों ने हत्या की" },
      { year: "1828 CE", event: "A mysterious fire destroys most of Shaniwar Wada, leaving only the outer walls standing", eventHi: "एक रहस्यमय आग ने शनिवार वाडा का अधिकांश भाग नष्ट किया, केवल बाहरी दीवारें बचीं" }
    ],
    entryFee: "₹5 (Indians), ₹125 (Foreigners)",
    entryFeeHi: "₹5 (भारतीय), ₹125 (विदेशी)",
    UNESCO: false
  },
  {
    id: "raigad-fort",
    name: "Raigad Fort",
    nameHi: "रायगढ़ किला",
    city: "Mahad",
    state: "Maharashtra",
    coordinates: [73.4402, 18.2375],
    description: "Raigad Fort was the capital of the Maratha Empire and the seat of Chhatrapati Shivaji Maharaj. Situated on a dramatic plateau rising 820 metres above the Raigad district, Shivaji was coronated here as Chhatrapati (Emperor) in 1674 CE. The fort contains the ruins of the palace, markets, water tanks, temples, and most significantly, the Samadhi (memorial) of Shivaji Maharaj himself.",
    descriptionHi: "रायगढ़ किला मराठा साम्राज्य की राजधानी और छत्रपति शिवाजी महाराज का केंद्र था। रायगढ़ जिले के ऊपर 820 मीटर उठे एक नाटकीय पठार पर स्थित, शिवाजी को 1674 ई. में यहाँ छत्रपति (सम्राट) के रूप में राज्याभिषेक किया गया था।",
    yearBuilt: "~1030 CE (Chandrarao More); extensively rebuilt by Shivaji 1674 CE",
    dynasty: "Maratha Empire (Bhonsle)",
    dynastyHi: "मराठा साम्राज्य (भोंसले)",
    primaryModel: "/models/raigad_fort.glb",
    historicalModels: { past: "/models/raigad_fort.glb", ancient: "/models/raigad_fort.glb" },
    era: "medieval",
    hotspots: [
      { name: "Shivaji's Throne (Sinhasana)", description: "The stone throne at the summit where Shivaji was crowned Chhatrapati (Emperor of the Marathas) on June 6, 1674 — one of the most important events in Indian history.", position: [0, 1.0, 0.5] },
      { name: "Samadhi of Shivaji Maharaj", description: "The memorial of Chhatrapati Shivaji Maharaj at the fort summit — a simple stone platform marking where the great warrior-king was cremated in 1680 CE.", position: [0.5, 0, 0.8] },
      { name: "Maha Darwaja", description: "The Great Gate — the main entrance to the fort, with massive stone doors that required elephants to push open, set into the cliff face.", position: [0, 0, 1.5] }
    ],
    facts: [
      "Shivaji Maharaj was crowned Chhatrapati (Emperor) at Raigad on June 6, 1674 — marking the formal establishment of the Maratha Empire",
      "The fort is accessible by a ropeway (cable car) or a 1,737-step staircase climb from the base",
      "Raigad was captured by the Mughals under Aurangzeb in 1689 — Shivaji's son Sambhaji had already been captured and killed",
      "The fort contains ruins of 300 houses, 16 water tanks, and a market of 23 shops from Shivaji's capital city"
    ],
    factsHi: [
      "शिवाजी महाराज को 6 जून 1674 को रायगढ़ में छत्रपति (सम्राट) बनाया गया — मराठा साम्राज्य की औपचारिक स्थापना",
      "किला रोपवे (केबल कार) या तल से 1,737 सीढ़ियों की चढ़ाई से पहुँचा जा सकता है",
      "रायगढ़ 1689 में औरंगजेब के मुगलों ने कब्जा किया — शिवाजी के पुत्र संभाजी पहले ही पकड़े और मारे जा चुके थे",
      "किले में शिवाजी की राजधानी शहर के 300 घरों, 16 जल टैंकों और 23 दुकानों के बाजार के खंडहर हैं"
    ],
    visitingHours: "9:00 AM to 5:00 PM (All days)",
    visitingHoursHi: "सुबह 9:00 से शाम 5:00 बजे तक (सभी दिन)",
    bestMonths: [10, 11, 0, 1, 2],
    bestTimeDesc: "October to February — Raigad's plateau is misty and dramatic after monsoon (October) and clear in winter. The ropeway makes it accessible, though the 1,737-step climb is a popular pilgrimage for devotees of Shivaji Maharaj.",
    bestTimeDescHi: "अक्तूबर से फ़रवरी — रायगढ़ का पठार मानसून के बाद धुंधला और नाटकीय होता है।",
    timeline: [
      { year: "1656 CE", event: "Shivaji captures Raigad from Chandrarao More and begins transforming it into his capital", eventHi: "शिवाजी ने चंद्रराव मोरे से रायगढ़ लिया और इसे अपनी राजधानी में बदलना शुरू किया" },
      { year: "1674 CE", event: "Shivaji Maharaj crowned Chhatrapati (Emperor) at Raigad on June 6", eventHi: "6 जून को शिवाजी महाराज को रायगढ़ में छत्रपति (सम्राट) बनाया गया" },
      { year: "1689 CE", event: "Mughals under Aurangzeb capture Raigad after the death of Sambhaji; renamed Islamgarh", eventHi: "संभाजी की मृत्यु के बाद औरंगजेब के मुगलों ने रायगढ़ पर कब्जा किया; इसका नाम इस्लामगढ़ रखा" }
    ],
    entryFee: "₹25 (Indians), ₹300 (Foreigners) + ropeway charges",
    entryFeeHi: "₹25 (भारतीय), ₹300 (विदेशी) + रोपवे शुल्क",
    UNESCO: false
  },
  // ── CENTRAL INDIA ──────────────────────────────────────────────────────
  {
    id: "gwalior-fort",
    name: "Gwalior Fort",
    nameHi: "ग्वालियर किला",
    city: "Gwalior",
    state: "Madhya Pradesh",
    coordinates: [78.1691, 26.2295],
    description: "Gwalior Fort has been described by the Mughal Emperor Babur as 'the pearl amongst the fortresses of Hind.' Built on a flat-topped sandstone hill rising 100 metres above the city, its 3-km outer wall contains multiple palaces, temples, and water tanks within. The Man Singh Palace — with its extraordinary blue, yellow, and green ceramic tile facade — is one of the finest examples of medieval Indian secular architecture.",
    descriptionHi: "ग्वालियर किले को मुगल सम्राट बाबर ने 'हिंद के किलों में मोती' कहा था। शहर के ऊपर 100 मीटर उठती सपाट-शीर्ष बलुआ पत्थर की पहाड़ी पर बना, इसकी 3 किमी की बाहरी दीवार के अंदर कई महल, मंदिर और जल टैंक हैं।",
    yearBuilt: "~6th century CE (original); Man Singh Palace 1486–1516 CE",
    dynasty: "Tomar Rajput (Man Singh); earlier Gurjara-Pratihara",
    dynastyHi: "तोमर राजपूत (मान सिंह); पूर्व गुर्जर-प्रतिहार",
    primaryModel: "/models/gwalior_fort.glb",
    historicalModels: { past: "/models/gwalior_fort.glb", ancient: "/models/gwalior_fort.glb" },
    era: "medieval",
    hotspots: [
      { name: "Man Singh Palace", description: "The palace of Raja Man Singh Tomar (1486–1516) — its outer facade has six drum-shaped towers decorated with bands of blue, yellow, green, and white ceramic tiles, unique in Indian architecture.", position: [0.8, 1.0, 0.3] },
      { name: "Jain Tirthankaras", description: "On the rock faces ascending to the fort, enormous Jain figures of the Tirthankaras (some up to 17 metres tall) are carved into the cliff — created between the 7th and 15th centuries.", position: [-0.5, 0.5, 1.0] },
      { name: "Sas Bahu Temple", description: "Two beautifully carved 11th-century temples inside the fort — the Sas (mother-in-law) temple is the larger and finer, with a three-storey carved facade.", position: [0.3, 0.5, 0.8] }
    ],
    facts: [
      "Babur called Gwalior Fort 'the pearl amongst the fortresses of Hind'",
      "The fort has never fallen to direct military assault — only through treachery or prolonged siege",
      "The Man Singh Palace ceramic tile work is one of the only surviving examples of medieval Indian tiling",
      "Gwalior is the birthplace of the legendary musician Tansen — his tomb is at the foot of the fort"
    ],
    factsHi: [
      "बाबर ने ग्वालियर किले को 'हिंद के किलों में मोती' कहा",
      "किला कभी सीधे सैन्य हमले से नहीं गिरा — केवल विश्वासघात या लंबी घेराबंदी से",
      "मान सिंह पैलेस की सिरेमिक टाइल कार्य मध्यकालीन भारतीय टाइलिंग के एकमात्र जीवित उदाहरणों में से एक है",
      "ग्वालियर पौराणिक संगीतकार तानसेन की जन्मभूमि है — उनकी कब्र किले के तल पर है"
    ],
    visitingHours: "6:00 AM to 6:00 PM (All days)",
    visitingHoursHi: "सुबह 6:00 से शाम 6:00 बजे तक (सभी दिन)",
    bestMonths: [9, 10, 11, 0, 1, 2],
    bestTimeDesc: "October to February — Gwalior's winters are mild (10–25°C). The Tansen Samaroha music festival held annually at the fort in November/December is a classical music pilgrimage.",
    bestTimeDescHi: "अक्तूबर से फ़रवरी — ग्वालियर की सर्दियाँ हल्की (10–25°C) होती हैं। नवंबर/दिसंबर में किले पर तानसेन समारोह शास्त्रीय संगीत का तीर्थस्थल है।",
    timeline: [
      { year: "~525 CE", event: "Local king Suraj Sen reportedly builds the first fort at Gwalior after being cured of leprosy by the sage Gwalipa", eventHi: "स्थानीय राजा सूरज सेन ने ऋषि ग्वालिपा द्वारा कुष्ठ रोग से ठीक होने के बाद ग्वालियर में पहला किला बनाया" },
      { year: "1486–1516 CE", event: "Man Singh Tomar builds the magnificent ceramic-tiled Man Singh Palace within the fort", eventHi: "मान सिंह तोमर ने किले के अंदर शानदार सिरेमिक टाइल वाला मान सिंह पैलेस बनाया" },
      { year: "1527 CE", event: "Babur captures Gwalior Fort and calls it 'the pearl of fortresses in Hind'", eventHi: "बाबर ने ग्वालियर किले पर कब्जा किया और इसे 'हिंद के किलों में मोती' कहा" }
    ],
    entryFee: "₹75 (Indians), ₹250 (Foreigners)",
    entryFeeHi: "₹75 (भारतीय), ₹250 (विदेशी)",
    UNESCO: false
  },
  {
    id: "orchha-fort",
    name: "Orchha Fort & Temples",
    nameHi: "ओरछा किला और मंदिर",
    city: "Orchha",
    state: "Madhya Pradesh",
    coordinates: [78.6423, 25.3550],
    description: "Orchha is a remarkably preserved 16th–17th century Bundela Rajput town on a rocky island in the Betwa river in Madhya Pradesh. The Jahangir Mahal palace (built to honour Emperor Jahangir's visit) with its blue-tiled domes and chhatri pavilions, the Ram Raja Temple where Ram is worshipped as a king (with state honours including a police guard), and the cenotaphs (chhatris) of Orchha rulers along the riverbank create an unforgettable ensemble.",
    descriptionHi: "ओरछा मध्यप्रदेश में बेतवा नदी में एक चट्टानी द्वीप पर 16वीं–17वीं शताब्दी का उल्लेखनीय रूप से संरक्षित बुंदेला राजपूत शहर है।",
    yearBuilt: "1501 CE (Orchha established); Jahangir Mahal 1605 CE",
    dynasty: "Bundela Rajput",
    dynastyHi: "बुंदेला राजपूत",
    primaryModel: "/models/orchha_fort.glb",
    historicalModels: { past: "/models/orchha_fort.glb", ancient: "/models/orchha_fort.glb" },
    era: "medieval",
    hotspots: [
      { name: "Jahangir Mahal", description: "The magnificent Jahangir Mahal palace built by Bir Singh Deo Bundela for Emperor Jahangir's single visit in 1606 — its 136-room complex with blue-tiled domes is one of the finest 17th-century palaces in India.", position: [0, 1.2, 0.3] },
      { name: "Ram Raja Temple", description: "The only temple in India where Ram is worshipped as a king with state honours — police guards present arms to Ram twice daily, and the temple once functioned as a royal palace.", position: [0.8, 0.3, 0.8] },
      { name: "Betwa River Chhatris", description: "Fourteen royal cenotaphs (chhatris) built along the Betwa riverbank — the riverside panorama of these domed memorial towers rising from the water is one of the most atmospheric scenes in central India.", position: [-0.5, 0, 1.5] }
    ],
    facts: [
      "Orchha's Ram Raja Temple is the only temple in India where Ram receives full royal military honours",
      "Jahangir Mahal was built for just one royal visit — Jahangir stayed for only one night",
      "The riverside chhatris of Orchha's rulers are among the most scenic memorial structures in India",
      "Orchha was largely forgotten for centuries and is remarkably well-preserved as a result"
    ],
    factsHi: [
      "ओरछा का राम राजा मंदिर भारत का एकमात्र मंदिर है जहाँ राम को पूर्ण शाही सैन्य सम्मान मिलता है",
      "जहाँगीर महल सिर्फ एक शाही यात्रा के लिए बनाया गया था — जहाँगीर केवल एक रात रहे",
      "ओरछा के शासकों की नदी किनारे की छतरियाँ भारत की सबसे दर्शनीय स्मारक संरचनाओं में हैं",
      "ओरछा सदियों तक काफी हद तक भूला हुआ था और परिणामस्वरूप उल्लेखनीय रूप से संरक्षित है"
    ],
    visitingHours: "9:00 AM to 6:00 PM (All days; temples have separate timings)",
    visitingHoursHi: "सुबह 9:00 से शाम 6:00 बजे तक (सभी दिन; मंदिरों का अलग समय)",
    bestMonths: [9, 10, 11, 0, 1, 2],
    bestTimeDesc: "September to February — the Betwa river is full after monsoon and the chhatri reflections are spectacular. Orchha is 16 km from Jhansi and easily combined with a Madhya Pradesh heritage tour.",
    bestTimeDescHi: "सितंबर से फ़रवरी — मानसून के बाद बेतवा नदी भरी होती है और छतरियों के प्रतिबिंब शानदार होते हैं।",
    timeline: [
      { year: "1501 CE", event: "Rudra Pratap Singh establishes Orchha as the Bundela capital on the Betwa island", eventHi: "रुद्र प्रताप सिंह ने बेतवा द्वीप पर बुंदेला राजधानी ओरछा की स्थापना की" },
      { year: "1606 CE", event: "Jahangir Mahal completed for Emperor Jahangir's visit — he stays one night and then leaves", eventHi: "सम्राट जहाँगीर की यात्रा के लिए जहाँगीर महल पूर्ण — वह एक रात रुके और फिर चले गए" }
    ],
    entryFee: "₹25 (Indians), ₹250 (Foreigners)",
    entryFeeHi: "₹25 (भारतीय), ₹250 (विदेशी)",
    UNESCO: false
  },
  {
    id: "bhimbetka-caves",
    name: "Bhimbetka Rock Shelters",
    nameHi: "भीमबेटका शैलाश्रय",
    city: "Raisen",
    state: "Madhya Pradesh",
    coordinates: [77.6154, 22.9368],
    description: "The Bhimbetka Rock Shelters in Madhya Pradesh contain some of the oldest known rock paintings in the world — spanning 30,000 years to just 500 years ago. Over 700 rock shelters are spread across a forested Vindhya hillside, with paintings in red, white, yellow, and green showing prehistoric hunting scenes, dancing, religious rituals, and eventually the arrival of horses and chariots. It is a UNESCO World Heritage Site.",
    descriptionHi: "मध्यप्रदेश में भीमबेटका शैलाश्रयों में दुनिया की कुछ सबसे पुरानी ज्ञात रॉक पेंटिंग हैं — 30,000 वर्ष से 500 वर्ष पहले तक। 700 से अधिक रॉक आश्रय एक वनाच्छादित विंध्य पहाड़ी पर फैले हैं, जिनमें लाल, सफेद, पीले और हरे रंग में पेंटिंग हैं।",
    yearBuilt: "~30,000 BCE (earliest paintings); inhabited continuously until medieval era",
    dynasty: "Prehistoric; no dynasty",
    dynastyHi: "प्रागैतिहासिक; कोई राजवंश नहीं",
    primaryModel: "/models/bhimbetka_caves.glb",
    historicalModels: { past: "/models/bhimbetka_caves.glb", ancient: "/models/bhimbetka_caves.glb" },
    era: "ancient",
    hotspots: [
      { name: "Auditorium Cave", description: "The largest cave at Bhimbetka — with paintings spanning 30,000 years, including some of the oldest Red images and more recent paintings of horses, elephants, and warriors superimposed on each other.", position: [0, 0.5, 0.8] },
      { name: "Red Ochre Animals", description: "Some of the oldest paintings — bison, tigers, rhinos, and elephants drawn in red ochre from the Stone Age — possibly 30,000 years old.", position: [0.8, 0.3, 0.5] },
      { name: "Dancing Figures", description: "Multiple caves contain prehistoric paintings of human figures in various dance poses — among the earliest visual evidence of human dance and music rituals.", position: [-0.5, 0.3, 1.0] }
    ],
    facts: [
      "Some Bhimbetka paintings are estimated to be 30,000 years old — older than the famous Lascaux Cave paintings in France",
      "The site was discovered only in 1957 by archaeologist V.S. Wakankar",
      "Over 750 rock shelters contain paintings at Bhimbetka — only 15 are open to the public",
      "The paintings use natural pigments — red and yellow ochre, limestone, manganese — which have lasted millennia"
    ],
    factsHi: [
      "कुछ भीमबेटका पेंटिंग 30,000 वर्ष पुरानी अनुमानित हैं — फ्रांस की प्रसिद्ध लासको गुफा चित्रों से पुरानी",
      "यह स्थल 1957 में पुरातत्वविद् वी.एस. वाकणकर द्वारा खोजा गया था",
      "भीमबेटका में 750 से अधिक शैलाश्रयों में चित्र हैं — केवल 15 जनता के लिए खुले हैं",
      "चित्र प्राकृतिक रंगद्रव्यों का उपयोग करते हैं — लाल और पीला गेरू, चूना पत्थर, मैंगनीज — जो सहस्राब्दियों तक टिके हैं"
    ],
    visitingHours: "9:00 AM to 5:00 PM (Closed on Tuesdays)",
    visitingHoursHi: "सुबह 9:00 से शाम 5:00 बजे तक (मंगलवार को बंद)",
    bestMonths: [9, 10, 11, 0, 1, 2],
    bestTimeDesc: "September to February — the Sal forest around the shelters is lush and green. An evening visit is best as the slanting light illuminates the paintings dramatically.",
    bestTimeDescHi: "सितंबर से फ़रवरी — शैलाश्रयों के आसपास का साल वन हरा-भरा होता है।",
    timeline: [
      { year: "~30,000 BCE", event: "Earliest known paintings at Bhimbetka created by Upper Paleolithic hunter-gatherers", eventHi: "उच्च पुरापाषाण शिकारी-संग्रहकर्ताओं द्वारा भीमबेटका में सबसे पुरानी ज्ञात पेंटिंग बनाई गईं" },
      { year: "1957 CE", event: "V.S. Wakankar discovers Bhimbetka while on a train and recognises the rock paintings", eventHi: "वी.एस. वाकणकर ट्रेन में यात्रा करते हुए भीमबेटका की खोज की और रॉक पेंटिंग को पहचाना" },
      { year: "2003", event: "UNESCO World Heritage Site designation", eventHi: "यूनेस्को विश्व धरोहर स्थल घोषित" }
    ],
    entryFee: "₹25 (Indians), ₹250 (Foreigners)",
    entryFeeHi: "₹25 (भारतीय), ₹250 (विदेशी)",
    UNESCO: true
  },
  {
    id: "mandu-jahaz-mahal",
    name: "Jahaz Mahal, Mandu",
    nameHi: "जहाज महल, माँडू",
    city: "Mandu",
    state: "Madhya Pradesh",
    coordinates: [75.3996, 22.3660],
    description: "Jahaz Mahal (Ship Palace) in Mandu is a remarkable 15th-century Afghan-style palace built by Sultan Ghiyas-ud-Din Khalji. Constructed on a narrow strip of land between two lakes, the 120-metre-long, two-storey palace appears to float like a great stone ship when the lakes are full. Mandu — 'the city of joy' — was built by the Malwa Sultanate and contains the love story of Sultan Baz Bahadur and the poetess Rani Roopmati.",
    descriptionHi: "माँडू का जहाज महल (जहाज पैलेस) 15वीं शताब्दी का एक उल्लेखनीय अफगान शैली का महल है जो सुल्तान ग्यास-उद-दीन खिलजी ने बनाया। दो झीलों के बीच एक संकीर्ण भूमि पर निर्मित, 120 मीटर लंबा दो मंजिला महल झीलों के भरने पर एक बड़े पत्थर के जहाज की तरह तैरता प्रतीत होता है।",
    yearBuilt: "1469–1500 CE",
    dynasty: "Malwa Sultanate (Khalji dynasty)",
    dynastyHi: "मालवा सल्तनत (खिलजी वंश)",
    primaryModel: "/models/mandu_jahaz_mahal.glb",
    historicalModels: { past: "/models/mandu_jahaz_mahal.glb", ancient: "/models/mandu_jahaz_mahal.glb" },
    era: "medieval",
    hotspots: [
      { name: "Ship Palace Exterior", description: "The long palace flanked by water on both sides — when the Munj and Kapoor lakes are full in the monsoon, the palace truly appears to float like a great grey stone ship.", position: [0, 0.5, 1.0] },
      { name: "Rooftop Bathing Pools", description: "The rooftop has bathing pools and pavilions — Sultan Ghiyas reportedly maintained a harem of 15,000 women and built Jahaz Mahal primarily as a pleasure palace.", position: [0, 1.2, 0.3] },
      { name: "Afghan Architectural Style", description: "The pointed arches, flat roofline, crenellated parapets, and absence of Hindu decorative motifs reflect the pure Afghan architectural tradition — different from Mughal or Rajput styles.", position: [0.8, 0.3, 0.8] }
    ],
    facts: [
      "Jahaz Mahal was reportedly built as a pleasure palace for Sultan Ghiyas's harem of 15,000 women",
      "The palace looks like a ship when the surrounding lakes are full — giving it the name 'Jahaz Mahal'",
      "Mandu contains the love story of Sultan Baz Bahadur and poet-singer Rani Roopmati — still celebrated in folk songs",
      "Mandu's plateau setting 635 metres high provides spectacular views of the Narmada Valley below"
    ],
    factsHi: [
      "जहाज महल कथित तौर पर सुल्तान ग्यास के 15,000 महिलाओं के हरम के लिए एक आनंद महल के रूप में बनाया गया था",
      "जब आसपास की झीलें भरी होती हैं तो महल एक जहाज की तरह दिखता है — इसीलिए इसे 'जहाज महल' कहते हैं",
      "माँडू में सुल्तान बाज़ बहादुर और कवयित्री-गायिका रानी रूपमती की प्रेम कहानी है — अभी भी लोकगीतों में मनाई जाती है",
      "माँडू का 635 मीटर ऊँचा पठार नर्मदा घाटी के शानदार दृश्य प्रदान करता है"
    ],
    visitingHours: "9:00 AM to 5:00 PM (All days)",
    visitingHoursHi: "सुबह 9:00 से शाम 5:00 बजे तक (सभी दिन)",
    bestMonths: [7, 8, 9, 10, 11],
    bestTimeDesc: "July to November — Mandu is most spectacular during and just after monsoon, when the surrounding lakes are full and the palace truly 'floats.' The green landscape of the Vindhya plateau is at its most beautiful.",
    bestTimeDescHi: "जुलाई से नवंबर — माँडू मानसून के दौरान और उसके तुरंत बाद सबसे शानदार होता है, जब आसपास की झीलें भरी होती हैं।",
    timeline: [
      { year: "1469 CE", event: "Sultan Ghiyas-ud-Din Khalji of the Malwa Sultanate begins Jahaz Mahal", eventHi: "मालवा सल्तनत के सुल्तान ग्यास-उद-दीन खिलजी ने जहाज महल शुरू किया" },
      { year: "1555 CE", event: "Mandu falls to Sher Shah Suri's forces; the sultanate ends", eventHi: "माँडू शेर शाह सूरी की सेनाओं के हाथ गिरा; सल्तनत समाप्त" }
    ],
    entryFee: "₹25 (Indians), ₹300 (Foreigners)",
    entryFeeHi: "₹25 (भारतीय), ₹300 (विदेशी)",
    UNESCO: false
  },
  // ── EAST INDIA ──────────────────────────────────────────────────────────
  {
    id: "lingaraja-temple",
    name: "Lingaraja Temple",
    nameHi: "लिंगराज मंदिर",
    city: "Bhubaneswar",
    state: "Odisha",
    coordinates: [85.8344, 20.2358],
    description: "The Lingaraja Temple is the largest and most magnificent temple in Bhubaneswar — the 'City of Temples' — and the greatest example of Kalinga (Odishan) temple architecture. Built in the 11th century CE and dedicated to Harihara (a fusion of Shiva and Vishnu), the 55-metre tall curvilinear deul tower is surrounded by over 50 smaller subsidiary shrines within a vast walled enclosure.",
    descriptionHi: "लिंगराज मंदिर भुवनेश्वर — 'मंदिरों का शहर' — का सबसे बड़ा और सबसे शानदार मंदिर है और कलिंग (ओड़िशा) मंदिर वास्तुकला का सबसे बड़ा उदाहरण है। 11वीं शताब्दी ई. में निर्मित और हरिहर (शिव और विष्णु के संयोजन) को समर्पित, 55 मीटर का वक्र शिखर वाला देउल टॉवर विशाल दीवारों के अंदर 50 से अधिक सहायक मंदिरों से घिरा है।",
    yearBuilt: "~11th century CE (Somavamsi dynasty)",
    dynasty: "Somavamsi dynasty; expanded by Ganga dynasty",
    dynastyHi: "सोमवंशी वंश; गंग वंश द्वारा विस्तारित",
    primaryModel: "/models/lingaraja_temple.glb",
    historicalModels: { past: "/models/lingaraja_temple.glb", ancient: "/models/lingaraja_temple.glb" },
    era: "ancient",
    hotspots: [
      { name: "Deul (Main Tower)", description: "The 55-metre curvilinear tower — its upward tapering form with intricate sculptural carving and the large amalaka disc at the apex is the defining image of Kalinga temple architecture.", position: [0, 1.5, 0] },
      { name: "Bindu Sagar Lake", description: "The sacred tank adjacent to the temple — believed to contain water from every sacred river in India. Pilgrims must bathe here before entering the Lingaraja Temple.", position: [0, -0.5, 1.5] },
      { name: "Parameshvari Temple", description: "A subsidiary temple within the complex with intricate Odishan carvings — one of the 50+ smaller shrines that cluster around the main Lingaraja deul.", position: [0.8, 0.3, 0.8] }
    ],
    facts: [
      "The Lingaraja Temple is a living temple — non-Hindus are not permitted to enter but can view from a viewing platform outside",
      "The temple tank (Bindu Sagar) is believed to contain water from every sacred river in India",
      "The temple is dedicated to Harihara — a composite form of Shiva and Vishnu — unusually combining both Shaiva and Vaishnava traditions",
      "Emperor Aurangzeb ordered the temple demolished, but his orders were not fully carried out — the temple survived largely intact"
    ],
    factsHi: [
      "लिंगराज मंदिर एक जीवित मंदिर है — गैर-हिंदुओं को अंदर जाने की अनुमति नहीं है, लेकिन बाहर से देख सकते हैं",
      "मंदिर टैंक (बिंदु सागर) में भारत की हर पवित्र नदी का पानी होने की मान्यता है",
      "मंदिर हरिहर को समर्पित है — शिव और विष्णु का एक संयुक्त रूप — असामान्य रूप से शैव और वैष्णव परंपराओं को जोड़ता है",
      "सम्राट औरंगजेब ने मंदिर तोड़ने के आदेश दिए, लेकिन उसके आदेश पूरी तरह नहीं माने गए"
    ],
    visitingHours: "6:00 AM to 9:00 PM (Only Hindus admitted inside)",
    visitingHoursHi: "सुबह 6:00 से रात 9:00 बजे तक (केवल हिंदुओं को अंदर प्रवेश)",
    bestMonths: [10, 11, 0, 1, 2],
    bestTimeDesc: "October to February — Odisha winters are mild (15–25°C). The Shivratri festival at Lingaraja draws hundreds of thousands of pilgrims. Bhubaneswar has dozens of other temples worth visiting.",
    bestTimeDescHi: "अक्तूबर से फ़रवरी — ओड़िशा की सर्दियाँ हल्की (15–25°C) होती हैं। लिंगराज पर शिवरात्रि उत्सव में लाखों तीर्थयात्री आते हैं।",
    timeline: [
      { year: "~1050 CE", event: "Lingaraja Temple built by Somavamsi king Yayati I or II of the Somavamsi dynasty", eventHi: "सोमवंशी वंश के सोमवंशी राजा ययाति प्रथम या द्वितीय ने लिंगराज मंदिर बनाया" },
      { year: "11th–13th century CE", event: "Eastern Ganga dynasty expands the temple complex with subsidiary shrines and the compound wall", eventHi: "पूर्वी गंग वंश ने सहायक मंदिरों और परिसर की दीवार के साथ मंदिर परिसर का विस्तार किया" }
    ],
    entryFee: "Free entry (Hindus only inside)",
    entryFeeHi: "निःशुल्क प्रवेश (केवल हिंदू अंदर)",
    UNESCO: false
  },
  {
    id: "jagannath-temple",
    name: "Jagannath Temple, Puri",
    nameHi: "जगन्नाथ मंदिर, पुरी",
    city: "Puri",
    state: "Odisha",
    coordinates: [85.8184, 19.8042],
    description: "The Jagannath Temple at Puri is one of the four sacred Char Dham pilgrimage sites and one of the most important Hindu temples in the world. Built in the 12th century CE and dedicated to Lord Jagannath (a form of Vishnu), the temple's 65-metre tall deul tower dominates the Puri skyline. The annual Rath Yatra (chariot festival) — where three enormous chariots are pulled through the city — is one of the world's largest religious gatherings.",
    descriptionHi: "पुरी का जगन्नाथ मंदिर चार पवित्र चारधाम तीर्थ स्थलों में से एक और दुनिया के सबसे महत्वपूर्ण हिंदू मंदिरों में से एक है। 12वीं शताब्दी ई. में निर्मित और भगवान जगन्नाथ (विष्णु का एक रूप) को समर्पित, मंदिर का 65 मीटर का देउल टॉवर पुरी के क्षितिज पर हावी है।",
    yearBuilt: "12th century CE (Ganga dynasty)",
    dynasty: "Eastern Ganga dynasty (King Anantavarman Chodaganga Deva)",
    dynastyHi: "पूर्वी गंग वंश (राजा अनंतवर्मन चोडगंग देव)",
    primaryModel: "/models/jagannath_temple.glb",
    historicalModels: { past: "/models/jagannath_temple.glb", ancient: "/models/jagannath_temple.glb" },
    era: "ancient",
    hotspots: [
      { name: "Rath Yatra Chariots", description: "During the annual Rath Yatra (June/July), three massive wooden chariots — Nandighosa (for Jagannath), Taladhvaja (for Balabhadra), and Darpadalana (for Subhadra) — are built fresh and pulled through the city.", position: [0, -0.3, 1.5] },
      { name: "Sudarshana Chakra (Flag)", description: "The sacred Sudarshana Chakra (disc) and flag at the very top of the main tower — no matter which direction you stand in Puri, the flag always appears to wave in the direction of the wind.", position: [0, 2.0, 0] },
      { name: "Ananda Bazar (Kitchen)", description: "The world's largest temple kitchen — 500 cooks prepare Mahaprasad (sacred food) for 20,000–100,000 pilgrims daily using 752 clay pots stacked in seven layers over wood fires.", position: [0.8, 0, 0.8] }
    ],
    facts: [
      "Jagannath Temple's kitchen is the world's largest — feeding 20,000 to 100,000 pilgrims daily from 752 clay pots",
      "The flag on the temple summit always appears to wave against the wind direction — considered miraculous",
      "The word 'Juggernaut' in English — meaning an unstoppable force — comes from the name 'Jagannath'",
      "Non-Hindus are not permitted inside the temple — the policy is strictly enforced to this day"
    ],
    factsHi: [
      "जगन्नाथ मंदिर की रसोई दुनिया की सबसे बड़ी है — 752 मिट्टी के बर्तनों से रोज 20,000 से 1 लाख तीर्थयात्रियों को खाना",
      "मंदिर की चोटी पर झंडा हमेशा हवा की दिशा के विपरीत लहराता प्रतीत होता है — चमत्कारी माना जाता है",
      "अंग्रेजी शब्द 'जगर्नॉट' — अदम्य शक्ति का अर्थ — 'जगन्नाथ' नाम से आया है",
      "गैर-हिंदुओं को मंदिर के अंदर जाने की अनुमति नहीं है — यह नीति आज भी सख्ती से लागू है"
    ],
    visitingHours: "5:00 AM to midnight (Only Hindus admitted)",
    visitingHoursHi: "सुबह 5:00 से आधी रात तक (केवल हिंदू प्रवेश)",
    bestMonths: [10, 11, 0, 1, 2],
    bestTimeDesc: "October to February — pleasant Odisha coastal weather. The Rath Yatra festival (June/July) is the most famous time — millions attend but it is extremely crowded and hot.",
    bestTimeDescHi: "अक्तूबर से फ़रवरी — सुखद ओड़िशा तटीय मौसम। रथयात्रा उत्सव (जून/जुलाई) सबसे प्रसिद्ध समय है।",
    timeline: [
      { year: "~1135 CE", event: "King Anantavarman Chodaganga Deva of the Eastern Ganga dynasty builds the current Jagannath Temple", eventHi: "पूर्वी गंग वंश के राजा अनंतवर्मन चोडगंग देव ने वर्तमान जगन्नाथ मंदिर बनाया" },
      { year: "12th century CE", event: "Annual Rath Yatra (Chariot Festival) instituted — three chariots are pulled through the city", eventHi: "वार्षिक रथयात्रा (रथ उत्सव) की स्थापना — तीन रथ शहर से खींचे जाते हैं" }
    ],
    entryFee: "Free entry (Hindus only)",
    entryFeeHi: "निःशुल्क प्रवेश (केवल हिंदू)",
    UNESCO: false
  },
  {
    id: "udayagiri-khandagiri",
    name: "Udayagiri & Khandagiri Caves",
    nameHi: "उदयगिरि और खंडगिरि गुफाएँ",
    city: "Bhubaneswar",
    state: "Odisha",
    coordinates: [85.7613, 20.2558],
    description: "The Udayagiri ('Sunrise Hill') and Khandagiri ('Broken Hill') twin rock-cut cave shelters near Bhubaneswar were carved in the 1st century BCE during the reign of King Kharavela of the Mahameghavahana dynasty. They are primarily Jain cave monasteries, with the most famous being Rani Gumpha (Queen's Cave) — a double-storey cave with elaborately carved friezes of royal court scenes, athletes, and processions.",
    descriptionHi: "भुवनेश्वर के पास उदयगिरि ('सूर्योदय पहाड़ी') और खंडगिरि ('टूटी हुई पहाड़ी') जुड़वाँ रॉक-कट गुफा आश्रय महामेघवाहन वंश के राजा खारवेल के शासनकाल में 1वीं शताब्दी ईसा पूर्व में उकेरे गए थे।",
    yearBuilt: "1st century BCE (Mahameghavahana King Kharavela)",
    dynasty: "Mahameghavahana dynasty",
    dynastyHi: "महामेघवाहन वंश",
    primaryModel: "/models/udayagiri_khandagiri.glb",
    historicalModels: { past: "/models/udayagiri_khandagiri.glb", ancient: "/models/udayagiri_khandagiri.glb" },
    era: "ancient",
    hotspots: [
      { name: "Rani Gumpha (Queen's Cave)", description: "The finest cave at Udayagiri — a double-storey rock-cut cave with elaborately carved friezes of the royal court, abduction scenes, athletes, musicians, and royal processions.", position: [0, 0.8, 0.8] },
      { name: "Hati Gumpha (Elephant Cave)", description: "Famous for Emperor Kharavela's 17-line Brahmi inscription — one of the most important ancient inscriptions in India, describing his military campaigns and religious activities.", position: [0.8, 0, 0.8] },
      { name: "Mancapuri Cave (Khandagiri)", description: "The finest cave on Khandagiri hill — two carved pilasters flank its entrance, with a small cell inside where Jain monks meditated.", position: [-0.5, 0.3, 1.0] }
    ],
    facts: [
      "The Hati Gumpha inscription of Emperor Kharavela is one of the most important ancient inscriptions in India",
      "Udayagiri contains 18 cave chambers and Khandagiri has 15 — all originally serving as residences for Jain monks",
      "The carvings are remarkably detailed for their age — 2,000-year-old narrative friezes showing court life",
      "Both hills offer panoramic views of Bhubaneswar — a city that has grown around its ancient temple heritage"
    ],
    factsHi: [
      "सम्राट खारवेल का हाथी गुम्फा शिलालेख भारत के सबसे महत्वपूर्ण प्राचीन शिलालेखों में से एक है",
      "उदयगिरि में 18 गुफा कक्ष हैं और खंडगिरि में 15 — सभी मूल रूप से जैन भिक्षुओं के निवास स्थान थे",
      "नक्काशी अपनी आयु के लिए उल्लेखनीय रूप से विस्तृत हैं — 2,000 साल पुराने कथात्मक भित्तिचित्र दरबारी जीवन दिखाते हैं",
      "दोनों पहाड़ियाँ भुवनेश्वर के पैनोरामिक दृश्य प्रदान करती हैं"
    ],
    visitingHours: "8:00 AM to 6:00 PM (All days)",
    visitingHoursHi: "सुबह 8:00 से शाम 6:00 बजे तक (सभी दिन)",
    bestMonths: [10, 11, 0, 1, 2],
    bestTimeDesc: "October to February — combine with Lingaraja Temple and other Bhubaneswar temples. Udayagiri is a short auto-rickshaw ride from the city centre.",
    bestTimeDescHi: "अक्तूबर से फ़रवरी — लिंगराज मंदिर और अन्य भुवनेश्वर मंदिरों के साथ जोड़ें।",
    timeline: [
      { year: "~180 BCE", event: "King Kharavela of the Mahameghavahana dynasty begins carving the caves at Udayagiri as Jain monasteries", eventHi: "महामेघवाहन वंश के राजा खारवेल ने उदयगिरि में जैन मठों के रूप में गुफाएँ खोदना शुरू किया" }
    ],
    entryFee: "₹25 (Indians), ₹300 (Foreigners)",
    entryFeeHi: "₹25 (भारतीय), ₹300 (विदेशी)",
    UNESCO: false
  },
  {
    id: "sarnath",
    name: "Sarnath",
    nameHi: "सारनाथ",
    city: "Varanasi",
    state: "Uttar Pradesh",
    coordinates: [83.0240, 25.3810],
    description: "Sarnath is the Deer Park where the Buddha gave his first sermon (Dhammacakkappavattana Sutta — Setting the Wheel of Dharma in Motion) to five disciples after attaining enlightenment at Bodh Gaya. It is one of the four most sacred Buddhist pilgrimage sites. The Dhamek Stupa (500 CE) is the main monument — a massive 28-metre-wide, 43-metre-tall cylindrical tower of brick and stone carved with intricate geometrical and floral patterns.",
    descriptionHi: "सारनाथ वह हिरण उद्यान है जहाँ बुद्ध ने बोध गया में ज्ञान प्राप्ति के बाद पाँच शिष्यों को अपना पहला उपदेश (धम्मचक्कप्पवत्तन सुत्त) दिया। यह चार सबसे पवित्र बौद्ध तीर्थ स्थलों में से एक है। धमेक स्तूप (500 ई.) मुख्य स्मारक है।",
    yearBuilt: "3rd century BCE (Ashoka's structures); Dhamek Stupa 500 CE (Gupta era)",
    dynasty: "Mauryan (Ashoka); rebuilt Gupta era",
    dynastyHi: "मौर्य (अशोक); गुप्त काल में पुनर्निर्मित",
    primaryModel: "/models/sarnath.glb",
    historicalModels: { past: "/models/sarnath.glb", ancient: "/models/sarnath.glb" },
    era: "ancient",
    hotspots: [
      { name: "Dhamek Stupa", description: "The massive 43-metre-tall cylindrical stupa — marking the exact spot where the Buddha preached his first sermon. Its carved geometric and floral patterns are among the finest Gupta-era stone carving.", position: [0, 1.5, 0] },
      { name: "Ashokan Pillar Capital", description: "The famous Lion Capital of Ashoka — four lions atop an abacus carved with animals — was discovered here and is now in the Sarnath Museum. It became the National Emblem of India.", position: [0.8, 0.5, 0.5] },
      { name: "Sarnath Museum", description: "Contains the finest collection of Gupta-period Buddhist sculpture in the world, including the Ashoka Lion Capital and exquisite Bodhisattva figures.", position: [-0.5, 0, 1.0] }
    ],
    facts: [
      "The Lion Capital of Ashoka discovered at Sarnath became the National Emblem of India",
      "The Dharma Chakra (Wheel of Law) on India's national flag is also derived from Sarnath",
      "Emperor Ashoka visited Sarnath in ~250 BCE and built a pillar, a stupa, and a monastery here",
      "Sarnath was once a flourishing monastic city with thousands of monks — it was sacked and destroyed by Muhammad of Ghor's forces in 1194 CE"
    ],
    factsHi: [
      "सारनाथ में मिला अशोक का सिंह स्तंभ भारत का राष्ट्रीय प्रतीक बन गया",
      "भारत के राष्ट्रीय ध्वज पर धर्म चक्र (कानून का पहिया) भी सारनाथ से लिया गया है",
      "सम्राट अशोक ने ~250 ईसा पूर्व सारनाथ का दौरा किया और यहाँ एक स्तंभ, एक स्तूप और एक मठ बनाया",
      "सारनाथ कभी हजारों भिक्षुओं के साथ एक समृद्ध मठ शहर था — 1194 ई. में मुहम्मद गोरी की सेनाओं ने इसे बर्बाद किया"
    ],
    visitingHours: "Sunrise to Sunset (All days); Museum 9 AM to 5 PM",
    visitingHoursHi: "सूर्योदय से सूर्यास्त तक (सभी दिन); संग्रहालय सुबह 9 से शाम 5 बजे",
    bestMonths: [9, 10, 11, 0, 1, 2],
    bestTimeDesc: "September to February — Varanasi winters are atmospheric. Sarnath is 10 km from Varanasi and easily combined with a Varanasi ghat visit. Buddha Purnima in May is the most auspicious time.",
    bestTimeDescHi: "सितंबर से फ़रवरी — वाराणसी की सर्दियाँ वातावरणीय होती हैं। सारनाथ वाराणसी से 10 किमी दूर है।",
    timeline: [
      { year: "~528 BCE", event: "The Buddha delivers his first sermon (Dhamma Chakra Pavattana) at Sarnath's Deer Park", eventHi: "बुद्ध ने सारनाथ के हिरण उद्यान में अपना पहला उपदेश (धम्म चक्र पवत्तन) दिया" },
      { year: "~250 BCE", event: "Emperor Ashoka visits Sarnath and erects his famous lion-topped pillar", eventHi: "सम्राट अशोक ने सारनाथ का दौरा किया और अपना प्रसिद्ध सिंह-शीर्ष स्तंभ स्थापित किया" },
      { year: "1194 CE", event: "Muhammad of Ghor's general Qutb-ud-din Aibak destroys the Sarnath monastic complex", eventHi: "मुहम्मद गोरी के सेनापति कुतुब-उद-दीन ऐबक ने सारनाथ के मठ परिसर को नष्ट किया" }
    ],
    entryFee: "₹5 (Indians), ₹100 (Foreigners)",
    entryFeeHi: "₹5 (भारतीय), ₹100 (विदेशी)",
    UNESCO: false
  },
  {
    id: "vaishali",
    name: "Vaishali",
    nameHi: "वैशाली",
    city: "Vaishali",
    state: "Bihar",
    coordinates: [85.1275, 25.9968],
    description: "Vaishali is one of the most historically important sites in India — it was the world's first known republic (the Vajjian Confederacy) in the 6th century BCE, a major site of the Buddha's teachings, and the birthplace of Lord Mahavira (the 24th Jain Tirthankara). Emperor Ashoka erected one of his finest polished sandstone pillars here. The site contains the relic stupa of the Buddha and the Coronation Tank used for royal ceremonies.",
    descriptionHi: "वैशाली भारत के सबसे ऐतिहासिक महत्वपूर्ण स्थलों में से एक है — यह 6वीं शताब्दी ईसा पूर्व में दुनिया का पहला ज्ञात गणतंत्र (वज्जी संघ), बुद्ध के उपदेशों का प्रमुख स्थल और भगवान महावीर (24वें जैन तीर्थंकर) की जन्मभूमि था।",
    yearBuilt: "6th century BCE (Republican city); Ashokan structures ~250 BCE",
    dynasty: "Licchavi Republic (Vajjian Confederacy)",
    dynastyHi: "लिच्छवी गणतंत्र (वज्जी संघ)",
    primaryModel: "/models/vaishali.glb",
    historicalModels: { past: "/models/vaishali.glb", ancient: "/models/vaishali.glb" },
    era: "ancient",
    hotspots: [
      { name: "Ashokan Pillar", description: "A single 18.3-metre polished sandstone column erected by Emperor Ashoka — its highly polished surface still gleams after 2,300 years. A single lion sits atop the polished capital.", position: [0, 1.5, 0] },
      { name: "Relic Stupa (Relic of Buddha)", description: "A stupa containing one-eighth of the Buddha's cremated remains — gifted to the Licchavi rulers of Vaishali, who were among the closest allies of the Buddha.", position: [0.8, 0.3, 0.8] },
      { name: "Coronation Tank (Abhishek Pushkarni)", description: "The sacred tank where the elected representatives of the Vajjian Republic were coronated — water from this tank was used for all royal investiture ceremonies.", position: [-0.5, -0.3, 1.0] }
    ],
    facts: [
      "Vaishali was the capital of the world's first known democratic republic — the Vajjian Confederacy — in the 6th century BCE",
      "Lord Mahavira, the 24th Jain Tirthankara, was born at Vaishali in 599 BCE",
      "The Buddha spent his last rainy season at Vaishali and announced his approaching parinirvana here",
      "The site was visited by the Chinese scholar Xuanzang in 637 CE who described the ruins in detail"
    ],
    factsHi: [
      "वैशाली 6वीं शताब्दी ईसा पूर्व में दुनिया के पहले ज्ञात लोकतांत्रिक गणतंत्र — वज्जी संघ — की राजधानी थी",
      "जैन धर्म के 24वें तीर्थंकर भगवान महावीर का जन्म 599 ईसा पूर्व में वैशाली में हुआ था",
      "बुद्ध ने अपना आखिरी वर्षाकाल वैशाली में बिताया और यहाँ अपने आने वाले परिनिर्वाण की घोषणा की",
      "637 ई. में चीनी विद्वान ह्वेनसांग ने वैशाली का दौरा किया और खंडहरों का विस्तृत वर्णन किया"
    ],
    visitingHours: "Sunrise to Sunset (All days)",
    visitingHoursHi: "सूर्योदय से सूर्यास्त तक (सभी दिन)",
    bestMonths: [10, 11, 0, 1, 2],
    bestTimeDesc: "October to February — Bihar winters are pleasant. Vaishali is 55 km from Patna. The Vaishali Mahotsav festival in April celebrates the site's republican heritage.",
    bestTimeDescHi: "अक्तूबर से फ़रवरी — बिहार की सर्दियाँ सुखद होती हैं। वैशाली पटना से 55 किमी दूर है।",
    timeline: [
      { year: "~600 BCE", event: "Vaishali flourishes as the capital of the Vajjian Confederacy — considered the world's first republic", eventHi: "वैशाली वज्जी संघ की राजधानी के रूप में फली-फूली — दुनिया का पहला गणतंत्र माना जाता है" },
      { year: "599 BCE", event: "Lord Mahavira (24th Jain Tirthankara) born at Kundalagram near Vaishali", eventHi: "भगवान महावीर (24वें जैन तीर्थंकर) का जन्म वैशाली के पास कुंडलग्राम में हुआ" },
      { year: "~250 BCE", event: "Emperor Ashoka erects his famous lion pillar at Vaishali to mark the site's Buddhist significance", eventHi: "सम्राट अशोक ने वैशाली में बौद्ध महत्व को चिह्नित करने के लिए अपना प्रसिद्ध सिंह स्तंभ स्थापित किया" }
    ],
    entryFee: "Free entry",
    entryFeeHi: "निःशुल्क प्रवेश",
    UNESCO: false
  },
  {
    id: "kushinagar",
    name: "Kushinagar",
    nameHi: "कुशीनगर",
    city: "Kushinagar",
    state: "Uttar Pradesh",
    coordinates: [83.8884, 26.7394],
    description: "Kushinagar is the place where Siddhartha Gautama (the Buddha) passed away (Mahaparinirvana) around 483 BCE, at the age of 80. It is one of the four most sacred Buddhist pilgrimage sites. The Parinirvana Temple contains a magnificent 6.1-metre-long reclining Buddha statue, carved in the 5th century CE. The Ramabhar Stupa marks the spot where the Buddha was cremated.",
    descriptionHi: "कुशीनगर वह स्थान है जहाँ सिद्धार्थ गौतम (बुद्ध) लगभग 483 ईसा पूर्व, 80 वर्ष की आयु में निधन हो गए (महापरिनिर्वाण)। यह चार सबसे पवित्र बौद्ध तीर्थ स्थलों में से एक है। परिनिर्वाण मंदिर में 6.1 मीटर लंबी लेटे हुए बुद्ध की मूर्ति है।",
    yearBuilt: "~5th century CE (current Parinirvana Temple); original shrines 3rd century BCE",
    dynasty: "Malla Republic (original); Gupta era (current structures)",
    dynastyHi: "मल्ल गणतंत्र (मूल); गुप्त काल (वर्तमान संरचनाएं)",
    primaryModel: "/models/kushinagar.glb",
    historicalModels: { past: "/models/kushinagar.glb", ancient: "/models/kushinagar.glb" },
    era: "ancient",
    hotspots: [
      { name: "Reclining Buddha (Parinirvana Temple)", description: "A 6.1-metre-long gilded statue of the Buddha lying on his right side in the posture of final passing (Mahaparinirvana) — one of the most serene and moving sculptures in Indian art.", position: [0, 0.3, 0.8] },
      { name: "Ramabhar Stupa", description: "The 15-metre-high brick stupa marking the spot where the Buddha's body was cremated — Ramabhar means 'place of the golden flame' in Pali.", position: [0.8, 0.8, 0.5] },
      { name: "Mathakuar Shrine", description: "An ancient brick shrine containing a 3-metre black stone statue of the Buddha in a teaching posture — considered to be from the 10th–11th century CE.", position: [-0.5, 0.3, 0.8] }
    ],
    facts: [
      "The Buddha passed away (Mahaparinirvana) at Kushinagar around 483 BCE, under twin Sal trees",
      "The gilded reclining Buddha in the Parinirvana Temple dates to the 5th century CE",
      "Kushinagar was rediscovered in 1876 by British archaeologist A.C.L. Carlleyle, who excavated the Parinirvana stupa",
      "Thousands of Buddhist pilgrims from Thailand, Myanmar, Japan, Sri Lanka, and China visit Kushinagar every year"
    ],
    factsHi: [
      "बुद्ध का निधन (महापरिनिर्वाण) कुशीनगर में लगभग 483 ईसा पूर्व, जुड़वाँ साल के पेड़ों के नीचे हुआ",
      "परिनिर्वाण मंदिर में सोने की परत वाली लेटी बुद्ध प्रतिमा 5वीं शताब्दी ई. की है",
      "कुशीनगर को 1876 में ब्रिटिश पुरातत्वविद् ए.सी.एल. कार्लेले ने फिर से खोजा",
      "थाईलैंड, म्याँमार, जापान, श्रीलंका और चीन से हजारों बौद्ध तीर्थयात्री हर साल कुशीनगर आते हैं"
    ],
    visitingHours: "5:00 AM to 9:00 PM (All days)",
    visitingHoursHi: "सुबह 5:00 से रात 9:00 बजे तक (सभी दिन)",
    bestMonths: [10, 11, 0, 1, 2],
    bestTimeDesc: "October to February — Eastern UP winters are pleasant. Kushinagar is 51 km from Gorakhpur and 55 km from the Nepal border — part of the Buddhist circuit tour that includes Lumbini.",
    bestTimeDescHi: "अक्तूबर से फ़रवरी — पूर्वी UP की सर्दियाँ सुखद होती हैं। कुशीनगर गोरखपुर से 51 किमी दूर है।",
    timeline: [
      { year: "~483 BCE", event: "The Buddha passes away (Mahaparinirvana) at Kushinagar; his body is cremated at Ramabhar", eventHi: "कुशीनगर में बुद्ध का निधन (महापरिनिर्वाण); उनका शरीर रामभर में दाह संस्कार" },
      { year: "~250 BCE", event: "Emperor Ashoka visits Kushinagar and builds a stupa and memorial column", eventHi: "सम्राट अशोक ने कुशीनगर का दौरा किया और एक स्तूप और स्मारक स्तंभ बनाया" },
      { year: "1876 CE", event: "British archaeologist A.C.L. Carlleyle rediscovers and excavates the Parinirvana stupa and Temple", eventHi: "ब्रिटिश पुरातत्वविद् ए.सी.एल. कार्लेले ने परिनिर्वाण स्तूप और मंदिर को फिर से खोजा" }
    ],
    entryFee: "Free entry",
    entryFeeHi: "निःशुल्क प्रवेश",
    UNESCO: false
  },
  {
    id: "vikramshila",
    name: "Vikramshila Ruins",
    nameHi: "विक्रमशिला",
    city: "Antichak",
    state: "Bihar",
    coordinates: [87.2862, 25.3196],
    description: "Vikramshila was one of the three most important centres of Buddhist learning in India during the Pala Empire period (8th–12th century CE), alongside Nalanda and Somapura. Founded by King Dharmapala of the Pala dynasty, it specialised in Vajrayana Buddhism and attracted scholars from Tibet, Nepal, and Southeast Asia. The great Tibetan translator Atisha studied and taught here before going to Tibet.",
    descriptionHi: "विक्रमशिला पाल साम्राज्य काल (8वीं–12वीं शताब्दी ई.) में नालंदा और सोमपुरा के साथ बौद्ध शिक्षा के तीन सबसे महत्वपूर्ण केंद्रों में से एक था। पाल वंश के राजा धर्मपाल द्वारा स्थापित, यह वज्रयान बौद्ध धर्म में विशेषज्ञता रखता था।",
    yearBuilt: "~800 CE (Pala dynasty); destroyed ~1203 CE",
    dynasty: "Pala dynasty",
    dynastyHi: "पाल वंश",
    primaryModel: "/models/vikramshila.glb",
    historicalModels: { past: "/models/vikramshila.glb", ancient: "/models/vikramshila.glb" },
    era: "ancient",
    hotspots: [
      { name: "Central Cruciform Stupa", description: "The large cruciform stupa mound at the heart of the excavated site — the main temple structure that formed the spiritual centre of the Vikramshila monastery-university.", position: [0, 1.0, 0] },
      { name: "Monastery Cells", description: "The excavated square layout of individual monk cells surrounding the central stupa — each small room would have housed one scholar-monk.", position: [0.8, 0, 0.8] },
      { name: "Archaeological Museum", description: "The on-site museum at Antichak houses bronze and stone sculptures, terracotta pieces, and inscriptions found during excavation.", position: [-0.5, 0, 1.0] }
    ],
    facts: [
      "Vikramshila was founded by King Dharmapala of the Pala dynasty around 800 CE",
      "The great Tibetan Buddhist translator Atisha (Dipankara Srijnana) was the head of Vikramshila before travelling to Tibet in 1042 CE",
      "The university had 107 teachers and 108 temples-cum-libraries at its peak",
      "It was destroyed by Bakhtiyar Khilji around 1203 CE, shortly after the sacking of Nalanda"
    ],
    factsHi: [
      "विक्रमशिला की स्थापना लगभग 800 ई. में पाल वंश के राजा धर्मपाल ने की थी",
      "महान तिब्बती बौद्ध अनुवादक अतीश (दीपंकर श्रीज्ञान) 1042 ई. में तिब्बत जाने से पहले विक्रमशिला के प्रमुख थे",
      "विश्वविद्यालय में अपने चरम पर 107 शिक्षक और 108 मंदिर-सह-पुस्तकालय थे",
      "नालंदा की तबाही के कुछ समय बाद लगभग 1203 ई. में बख्तियार खिलजी ने इसे नष्ट किया"
    ],
    visitingHours: "9:00 AM to 5:00 PM (Closed on Fridays)",
    visitingHoursHi: "सुबह 9:00 से शाम 5:00 बजे तक (शुक्रवार को बंद)",
    bestMonths: [10, 11, 0, 1, 2],
    bestTimeDesc: "October to February — Bihar winters are pleasant. Vikramshila is 50 km from Bhagalpur and is an off-the-beaten-path destination for serious Buddhist history enthusiasts.",
    bestTimeDescHi: "अक्तूबर से फ़रवरी — बिहार की सर्दियाँ सुखद हैं। विक्रमशिला भागलपुर से 50 किमी दूर है।",
    timeline: [
      { year: "~800 CE", event: "King Dharmapala of the Pala dynasty founds Vikramshila as a centre of Vajrayana Buddhist learning", eventHi: "पाल वंश के राजा धर्मपाल ने वज्रयान बौद्ध शिक्षा के केंद्र के रूप में विक्रमशिला की स्थापना की" },
      { year: "~1203 CE", event: "Bakhtiyar Khilji destroys Vikramshila during his Bengal campaign — the university is abandoned", eventHi: "बख्तियार खिलजी ने अपने बंगाल अभियान के दौरान विक्रमशिला को नष्ट किया — विश्वविद्यालय छोड़ दिया गया" }
    ],
    entryFee: "₹15 (Indians), ₹200 (Foreigners)",
    entryFeeHi: "₹15 (भारतीय), ₹200 (विदेशी)",
    UNESCO: false
  },
  {
    id: "kamakhya-temple",
    name: "Kamakhya Temple",
    nameHi: "कामाख्या मंदिर",
    city: "Guwahati",
    state: "Assam",
    coordinates: [91.7074, 26.1665],
    description: "The Kamakhya Temple on Nilachal Hill in Guwahati is one of the most important Shakta Tantra shrines in India and one of the 51 Shakti Peethas. Unlike most Hindu temples, Kamakhya has no physical idol — the innermost sanctum contains a natural cleft in the rock representing the yoni of the goddess Kamakhya (a form of Kali/Durga). The temple is famous for the annual Ambubachi Mela festival.",
    descriptionHi: "गुवाहाटी में नीलाचल पहाड़ी पर कामाख्या मंदिर भारत में सबसे महत्वपूर्ण शाक्त तंत्र मंदिरों में से एक है और 51 शक्तिपीठों में से एक है। अधिकांश हिंदू मंदिरों के विपरीत, कामाख्या में कोई भौतिक मूर्ति नहीं है।",
    yearBuilt: "Pre-historic origin; current structure 17th century CE",
    dynasty: "Koch dynasty (current structure rebuilt)",
    dynastyHi: "कोच वंश (वर्तमान संरचना पुनर्निर्मित)",
    primaryModel: "/models/kamakhya_temple.glb",
    historicalModels: { past: "/models/kamakhya_temple.glb", ancient: "/models/kamakhya_temple.glb" },
    era: "ancient",
    hotspots: [
      { name: "Garbhagriha (Innermost Sanctum)", description: "The innermost cave with a natural rock cleft — believed to represent the goddess herself. A natural spring keeps the cleft moist, and the water is distributed as prasad.", position: [0, 0, 0.5] },
      { name: "Beehive Shikhara Dome", description: "The distinctive rounded beehive-shaped shikhara dome of Kamakhya — an unusual Assamese architectural form found only in Assam and Cooch Behar.", position: [0, 1.5, 0] },
      { name: "Ambubachi Mela Grounds", description: "The grounds where the annual Ambubachi Mela is held every June — one of India's largest religious gatherings, where Tantric sadhus and pilgrims from across India congregate.", position: [0, -0.3, 1.0] }
    ],
    facts: [
      "Kamakhya Temple has no physical idol — the innermost sanctum contains a natural rock cleft worshipped as the goddess",
      "The annual Ambubachi Mela (June) draws over 100,000 Tantric sadhus and pilgrims — one of the largest in Northeast India",
      "The temple complex houses shrines to all ten Mahavidyas (Tantric forms of the goddess) — a unique arrangement",
      "The Brahmaputra river visible from the temple hill is considered particularly sacred in Assamese tradition"
    ],
    factsHi: [
      "कामाख्या मंदिर में कोई भौतिक मूर्ति नहीं है — सबसे अंदर के गर्भगृह में एक प्राकृतिक रॉक दरार है जिसे देवी के रूप में पूजा जाता है",
      "वार्षिक अंबुबाची मेला (जून) में 1 लाख से अधिक तांत्रिक साधु और तीर्थयात्री आते हैं",
      "मंदिर परिसर में सभी दस महाविद्याओं के मंदिर हैं — एक अनूठी व्यवस्था",
      "मंदिर पहाड़ी से दिखने वाली ब्रह्मपुत्र नदी असमिया परंपरा में विशेष रूप से पवित्र मानी जाती है"
    ],
    visitingHours: "8:00 AM to 1:00 PM, 2:30 PM to 5:30 PM (All days)",
    visitingHoursHi: "सुबह 8:00 से 1:00 बजे, दोपहर 2:30 से शाम 5:30 बजे तक (सभी दिन)",
    bestMonths: [10, 11, 0, 1, 2, 3],
    bestTimeDesc: "October to April — Guwahati is pleasant in winter and spring. Avoid June during Ambubachi Mela unless you specifically want to attend (temples are closed for 4 days when the goddess is believed to menstruate).",
    bestTimeDescHi: "अक्तूबर से अप्रैल — गुवाहाटी सर्दियों और वसंत में सुखद है।",
    timeline: [
      { year: "Pre-historic", event: "Kamakhya is among the oldest Shakti Peethas — mentioned in ancient Tantric texts and Kalika Purana", eventHi: "कामाख्या सबसे पुरानी शक्तिपीठों में से एक है — प्राचीन तांत्रिक ग्रंथों और कालिका पुराण में उल्लेखित" },
      { year: "16th century CE", event: "Koch dynasty king Naranarayan rebuilds the current temple after it was destroyed by Muslim invaders", eventHi: "कोच वंश के राजा नरनारायण ने मुस्लिम आक्रमणकारियों द्वारा नष्ट होने के बाद वर्तमान मंदिर का पुनर्निर्माण किया" }
    ],
    entryFee: "Free entry (special darshan fee applies)",
    entryFeeHi: "निःशुल्क प्रवेश (विशेष दर्शन शुल्क लागू)",
    UNESCO: false
  },
  {
    id: "tawang-monastery",
    name: "Tawang Monastery",
    nameHi: "तवांग मठ",
    city: "Tawang",
    state: "Arunachal Pradesh",
    coordinates: [91.8642, 27.5814],
    description: "Tawang Monastery (Galden Namgey Lhatse — 'Celestial Paradise in a Clear Night') is the largest Buddhist monastery in India and the second-largest in the world after the Potala Palace in Lhasa. Founded in 1680–1681 CE, the monastery sits at 3,048 metres elevation in the eastern Himalayas and houses over 450 monks. It is the birthplace of the 6th Dalai Lama.",
    descriptionHi: "तवांग मठ (गालदेन नामगे ल्हात्से — 'साफ रात में स्वर्गीय स्वर्ग') भारत का सबसे बड़ा बौद्ध मठ और ल्हासा में पोताला महल के बाद दुनिया का दूसरा सबसे बड़ा मठ है। 1680–1681 ई. में स्थापित, मठ पूर्वी हिमालय में 3,048 मीटर की ऊँचाई पर है।",
    yearBuilt: "1680–1681 CE",
    dynasty: "Drukpa Kagyu Buddhist tradition",
    dynastyHi: "द्रुकपा काग्यू बौद्ध परंपरा",
    primaryModel: "/models/tawang_monastery.glb",
    historicalModels: { past: "/models/tawang_monastery.glb", ancient: "/models/tawang_monastery.glb" },
    era: "medieval",
    hotspots: [
      { name: "Main Prayer Hall (Dukhang)", description: "The central prayer hall housing a 8-metre golden statue of the Buddha — the monks gather here daily for prayers and religious ceremonies.", position: [0, 1.0, 0.5] },
      { name: "Tawang Museum", description: "The monastery museum contains ancient thangkas, manuscripts, weapons, and the personal belongings of the 6th Dalai Lama who was born near Tawang.", position: [0.8, 0.3, 0.8] },
      { name: "Himalayan Panorama", description: "The monastery's location at 3,048 metres offers spectacular views of the surrounding snow-capped peaks — on clear days, the Bhutan and Tibet borders are visible.", position: [0, 0, 1.5] }
    ],
    facts: [
      "Tawang Monastery is the largest monastery in India — second largest in the world after Potala Palace",
      "Tawang is the birthplace of the 6th Dalai Lama (Tsangyang Gyatso, 1683–1706)",
      "The Dalai Lama fled to India via Tawang in 1959 — the monastery was his first refuge in India",
      "Tawang was part of Tibet until 1914 when the McMahon Line drew the border between India and Tibet"
    ],
    factsHi: [
      "तवांग मठ भारत का सबसे बड़ा मठ है — पोताला महल के बाद दुनिया का दूसरा सबसे बड़ा",
      "तवांग छठे दलाई लामा (त्संगयांग ग्यात्सो, 1683–1706) की जन्मभूमि है",
      "दलाई लामा 1959 में तवांग के रास्ते भारत भागे — मठ भारत में उनका पहला आश्रय था",
      "तवांग 1914 तक तिब्बत का हिस्सा था जब मैकमहोन रेखा ने भारत-तिब्बत सीमा खींची"
    ],
    visitingHours: "7:00 AM to 5:00 PM (All days)",
    visitingHoursHi: "सुबह 7:00 से शाम 5:00 बजे तक (सभी दिन)",
    bestMonths: [3, 4, 5, 9, 10],
    bestTimeDesc: "April to June (spring) and September to October (autumn) — Tawang is accessible by road only when mountain passes are open (May to November). Winter is beautiful but the Sela Pass (4,170 m) can be blocked by snow.",
    bestTimeDescHi: "अप्रैल से जून (वसंत) और सितंबर से अक्तूबर (शरद) — तवांग केवल तभी सड़क से पहुँचा जा सकता है जब पहाड़ी दर्रे खुले हों।",
    timeline: [
      { year: "1680–1681 CE", event: "Merak Lama Lodre Gyatso founds Tawang Monastery with support of the 5th Dalai Lama", eventHi: "मेरक लामा लोड्रे ग्यात्सो ने पाँचवें दलाई लामा के समर्थन से तवांग मठ की स्थापना की" },
      { year: "1959 CE", event: "The 14th Dalai Lama flees Tibet via Tawang after the Chinese invasion — receives asylum in India", eventHi: "चीनी आक्रमण के बाद 14वें दलाई लामा तवांग के रास्ते तिब्बत से भागे — भारत में शरण मिली" }
    ],
    entryFee: "₹100 (Indians and Foreigners)",
    entryFeeHi: "₹100 (भारतीय और विदेशी)",
    UNESCO: false
  },
  {
    id: "howrah-bridge",
    name: "Howrah Bridge",
    nameHi: "हावड़ा ब्रिज",
    city: "Kolkata",
    state: "West Bengal",
    coordinates: [88.3468, 22.5851],
    description: "Howrah Bridge (officially Rabindra Setu) is the iconic symbol of Kolkata — a 705-metre cantilever truss bridge spanning the Hooghly River, connecting Kolkata with Howrah. Built entirely without nuts or bolts (riveted construction only), it opened in 1943 and carries over 100,000 vehicles and possibly 150,000 pedestrians daily — making it one of the busiest bridges in the world.",
    descriptionHi: "हावड़ा ब्रिज (आधिकारिक तौर पर रवींद्र सेतु) कोलकाता का प्रतीक है — हुगली नदी पर फैला 705 मीटर का कैंटिलीवर ट्रस पुल, कोलकाता को हावड़ा से जोड़ता है। पूरी तरह से नट या बोल्ट के बिना बना (केवल रिवेटेड निर्माण), यह 1943 में खुला।",
    yearBuilt: "1937–1943 CE",
    dynasty: "British Colonial (Bengal Presidency)",
    dynastyHi: "ब्रिटिश औपनिवेशिक (बंगाल प्रेसीडेंसी)",
    primaryModel: "/models/howrah_bridge.glb",
    historicalModels: { past: "/models/howrah_bridge.glb", ancient: "/models/howrah_bridge.glb" },
    era: "modern",
    hotspots: [
      { name: "Main Cantilever Span", description: "The 97-metre-high central tower supporting the 457-metre main span across the Hooghly — when built, it was the third-longest cantilever span in the world.", position: [0, 1.5, 0] },
      { name: "Howrah Station (background)", description: "The Victorian red-brick Howrah Railway Station, one of the largest railway terminals in India, visible from the Kolkata side of the bridge — the busiest train station serving the bridge.", position: [1.0, 0.5, 0.5] },
      { name: "Flower Market (Mullick Ghat)", description: "The famous Mullick Ghat flower market under the bridge on the Kolkata side — one of the largest flower markets in Asia, open 24 hours.", position: [-0.5, -0.3, 1.0] }
    ],
    facts: [
      "Howrah Bridge was built without a single nut or bolt — only 26,500 tonnes of riveted steel",
      "It carries over 100,000 vehicles and up to 150,000 pedestrians every single day",
      "The bridge was deliberately not named for years during WWII to prevent Japanese bombers from targeting it",
      "The pillars of the bridge are slowly eroding because people spit pan (betel leaf) on them — causing acid damage"
    ],
    factsHi: [
      "हावड़ा ब्रिज एक भी नट या बोल्ट के बिना बना था — केवल 26,500 टन रिवेटेड स्टील",
      "यह हर दिन 1 लाख से अधिक वाहनों और 1.5 लाख तक पैदल यात्रियों को ले जाता है",
      "पुल का WWII के दौरान जानबूझकर नाम नहीं रखा गया था ताकि जापानी बम वर्षकों को लक्ष्य करने से रोका जा सके",
      "पुल के खंभे धीरे-धीरे क्षत्रीभूत हो रहे हैं क्योंकि लोग उन पर पान थूकते हैं — जिससे एसिड क्षति होती है"
    ],
    visitingHours: "Open 24 hours (vehicular and pedestrian)",
    visitingHoursHi: "24 घंटे खुला (वाहन और पैदल यात्री)",
    bestMonths: [9, 10, 11, 0, 1, 2],
    bestTimeDesc: "October to March — Kolkata's pleasant winter season. Walk across the bridge at sunrise for stunning views of the Hooghly and Kolkata's colonial waterfront. The flower market below is best at 4–6 AM.",
    bestTimeDescHi: "अक्तूबर से मार्च — कोलकाता का सुखद सर्दियों का मौसम। सूर्योदय पर पुल पार करें।",
    timeline: [
      { year: "1937 CE", event: "Construction begins on the new Hooghly River bridge — replacing the old pontoon float bridge", eventHi: "नए हुगली नदी पुल का निर्माण शुरू — पुराने पोंटून फ्लोट पुल की जगह" },
      { year: "1943 CE", event: "Howrah Bridge officially opened to traffic, without ceremony, during World War II", eventHi: "द्वितीय विश्व युद्ध के दौरान बिना किसी समारोह के हावड़ा ब्रिज आधिकारिक रूप से यातायात के लिए खुला" },
      { year: "1965 CE", event: "Renamed Rabindra Setu in honour of poet Rabindranath Tagore", eventHi: "कवि रवींद्रनाथ टैगोर के सम्मान में रवींद्र सेतु नाम दिया गया" }
    ],
    entryFee: "Free (pedestrian crossing)",
    entryFeeHi: "निःशुल्क (पैदल पार करना)",
    UNESCO: false
  },
  // ── WEST INDIA ──────────────────────────────────────────────────────────
  {
    id: "modhera-sun-temple",
    name: "Sun Temple, Modhera",
    nameHi: "सूर्य मंदिर, मोधेरा",
    city: "Modhera",
    state: "Gujarat",
    coordinates: [72.1301, 23.5823],
    description: "The Sun Temple at Modhera is a masterpiece of Solanki-era (Maru-Gurjara) architecture built in 1026 CE by King Bhimdev I. The temple complex is aligned perfectly east-west so that at the solstices and equinoxes, the first rays of the rising sun fall directly on the main shrine. The rectangular stepped Surya Kund tank in front, with 108 miniature shrines descending its steps, is one of the finest in India.",
    descriptionHi: "मोधेरा का सूर्य मंदिर 1026 ई. में राजा भीमदेव प्रथम द्वारा निर्मित सोलंकी युग (मारू-गुर्जर) वास्तुकला की एक उत्कृष्ट कृति है। मंदिर परिसर पूर्व-पश्चिम में पूरी तरह से संरेखित है ताकि विषुव और संक्रांति पर उगते सूरज की पहली किरणें मुख्य मंदिर पर सीधे पड़ें।",
    yearBuilt: "1026 CE",
    dynasty: "Chaulukya (Solanki) dynasty",
    dynastyHi: "चौलुक्य (सोलंकी) वंश",
    primaryModel: "/models/modhera_sun_temple.glb",
    historicalModels: { past: "/models/modhera_sun_temple.glb", ancient: "/models/modhera_sun_temple.glb" },
    era: "ancient",
    hotspots: [
      { name: "Surya Kund (Stepped Tank)", description: "The magnificent rectangular stepped reservoir with 108 small subsidiary shrines on all four descending stairways — each shrine houses a different deity.", position: [0, -0.5, 1.5] },
      { name: "Sabha Mandapa (Assembly Hall)", description: "The elaborately carved assembly hall — its exterior walls are covered with intricate bands of sculptural carving including erotic scenes, mythological narratives, and celestial figures.", position: [0.5, 0.5, 0.8] },
      { name: "Solar Alignment", description: "The temple is so precisely aligned that at sunrise on the equinoxes (March 21 and September 21), sunlight enters the main shrine and illuminates the inner sanctum directly.", position: [0, 0, 1.0] }
    ],
    facts: [
      "Modhera Sun Temple is precisely aligned so the rising sun illuminates the inner sanctum on the equinoxes",
      "The temple has no idol — it was deliberately de-consecrated during the Muslim invasions to prevent desecration",
      "The Surya Kund has 108 miniature shrines — 108 is a sacred number in Hindu astronomy",
      "The Modhera Dance Festival is held at the temple every January during the Uttarayan season"
    ],
    factsHi: [
      "मोधेरा सूर्य मंदिर सटीक रूप से संरेखित है ताकि विषुव पर उगता सूरज सीधे आंतरिक गर्भगृह को रोशन करे",
      "मंदिर में कोई मूर्ति नहीं है — मुस्लिम आक्रमणों के दौरान जानबूझकर इसे अपवित्रता से बचाने के लिए अपवित्र किया गया",
      "सूर्य कुंड में 108 लघु मंदिर हैं — 108 हिंदू खगोल विज्ञान में एक पवित्र संख्या है",
      "मोधेरा नृत्य महोत्सव हर जनवरी में उत्तरायण के दौरान मंदिर में आयोजित होता है"
    ],
    visitingHours: "6:00 AM to 6:00 PM (All days)",
    visitingHoursHi: "सुबह 6:00 से शाम 6:00 बजे तक (सभी दिन)",
    bestMonths: [10, 11, 0, 1, 2],
    bestTimeDesc: "October to March — Gujarat winters are pleasant (15–28°C). The Modhera Dance Festival (January) is the finest time to visit, with classical dance performances held in the temple courtyard.",
    bestTimeDescHi: "अक्तूबर से मार्च — गुजरात की सर्दियाँ सुखद (15–28°C) होती हैं। मोधेरा नृत्य महोत्सव (जनवरी) सबसे अच्छा समय है।",
    timeline: [
      { year: "1026 CE", event: "King Bhimdev I of the Solanki dynasty builds the Sun Temple at Modhera", eventHi: "सोलंकी वंश के राजा भीमदेव प्रथम ने मोधेरा में सूर्य मंदिर बनाया" },
      { year: "1024–1025 CE", event: "Mahmud of Ghazni sacks the earlier temple at Modhera — Bhimdev I rebuilds it in 1026", eventHi: "महमूद गज़नी ने मोधेरा के पहले मंदिर को नष्ट किया — भीमदेव प्रथम ने 1026 में इसे फिर से बनाया" }
    ],
    entryFee: "₹25 (Indians), ₹300 (Foreigners)",
    entryFeeHi: "₹25 (भारतीय), ₹300 (विदेशी)",
    UNESCO: false
  },
  {
    id: "dholavira",
    name: "Dholavira",
    nameHi: "धोलावीरा",
    city: "Dholavira",
    state: "Gujarat",
    coordinates: [70.2143, 23.8885],
    description: "Dholavira is a UNESCO World Heritage Site and one of the five largest cities of the Indus Valley Civilisation, flourishing from approximately 2650 to 1450 BCE on the island of Khadir in the Rann of Kutch. Remarkable for its sophisticated urban planning, the city had a unique water management system of reservoirs and wells, a giant stadium-like public space, and the world's earliest known signboard — a ten-character inscription.",
    descriptionHi: "धोलावीरा एक यूनेस्को विश्व धरोहर स्थल है और सिंधु घाटी सभ्यता के पाँच सबसे बड़े शहरों में से एक है, जो कच्छ के रण में खडिर द्वीप पर लगभग 2650 से 1450 ईसा पूर्व तक फला-फूला।",
    yearBuilt: "~2650–1450 BCE",
    dynasty: "Indus Valley Civilisation",
    dynastyHi: "सिंधु घाटी सभ्यता",
    primaryModel: "/models/dholavira.glb",
    historicalModels: { past: "/models/dholavira.glb", ancient: "/models/dholavira.glb" },
    era: "ancient",
    hotspots: [
      { name: "Citadel", description: "The highest and most heavily fortified section of the city — the ancient Harappan equivalent of a government/administrative complex, with massive stone walls.", position: [0, 1.0, 0] },
      { name: "Giant Reservoir System", description: "Sixteen large water reservoirs and many wells — the most sophisticated water management system of any ancient city of the period, capturing both rain and river water.", position: [0.8, 0, 0.8] },
      { name: "World's Earliest Signboard", description: "A 10-character Indus script inscription that was displayed on a wooden/ivory board at the entrance to the citadel — the world's earliest known signboard (4,000 years old).", position: [-0.5, 0.5, 0.8] }
    ],
    facts: [
      "Dholavira contains the world's oldest known signboard — a 10-character Indus script inscription 4,000 years old",
      "The city had 16 reservoirs — the most sophisticated water management system of any Bronze Age city",
      "Dholavira was abandoned and the site submerged and re-emerged multiple times as the Rann of Kutch flooded seasonally",
      "UNESCO inscribed Dholavira as a World Heritage Site in 2021 — India's 40th UNESCO site"
    ],
    factsHi: [
      "धोलावीरा में दुनिया की सबसे पुरानी ज्ञात तख्ती है — 4,000 साल पुराना 10-अक्षरों का सिंधु लिपि शिलालेख",
      "शहर में 16 जलाशय थे — किसी भी कांस्य युग शहर की सबसे परिष्कृत जल प्रबंधन प्रणाली",
      "धोलावीरा छोड़ दिया गया और कच्छ के रण में मौसमी बाढ़ के कारण यह स्थल कई बार डूबा और पुनः उभरा",
      "यूनेस्को ने 2021 में धोलावीरा को विश्व धरोहर स्थल घोषित किया — भारत का 40वाँ यूनेस्को स्थल"
    ],
    visitingHours: "8:00 AM to 6:00 PM (All days)",
    visitingHoursHi: "सुबह 8:00 से शाम 6:00 बजे तक (सभी दिन)",
    bestMonths: [10, 11, 0, 1, 2],
    bestTimeDesc: "October to February — the Rann of Kutch is dry and accessible in winter. The Rann Utsav festival (November to February) transforms the white salt desert into a cultural spectacle nearby.",
    bestTimeDescHi: "अक्तूबर से फ़रवरी — कच्छ का रण सर्दियों में सूखा और पहुँचने योग्य है।",
    timeline: [
      { year: "~2650 BCE", event: "Dholavira founded as one of the largest cities of the mature Harappan phase", eventHi: "धोलावीरा परिपक्व हड़प्पा चरण के सबसे बड़े शहरों में से एक के रूप में स्थापित" },
      { year: "~1450 BCE", event: "Dholavira gradually abandoned as the Harappan civilisation declines", eventHi: "हड़प्पा सभ्यता के पतन के साथ धोलावीरा धीरे-धीरे छोड़ दिया गया" },
      { year: "2021 CE", event: "UNESCO World Heritage Site designation — India's 40th inscription", eventHi: "यूनेस्को विश्व धरोहर स्थल घोषित — भारत का 40वाँ अंकन" }
    ],
    entryFee: "₹40 (Indians), ₹600 (Foreigners)",
    entryFeeHi: "₹40 (भारतीय), ₹600 (विदेशी)",
    UNESCO: true
  },
  {
    id: "somnath-temple",
    name: "Somnath Temple",
    nameHi: "सोमनाथ मंदिर",
    city: "Somnath",
    state: "Gujarat",
    coordinates: [70.4013, 20.8880],
    description: "Somnath Temple on the western coast of Gujarat is one of the twelve sacred Jyotirlinga shrines of Shiva and one of the most important Hindu pilgrimage sites. Called 'the eternal shrine', the temple has been destroyed and rebuilt six times over the centuries — repeatedly plundered by Mahmud of Ghazni, later by Aurangzeb. The current temple was rebuilt in 1951 CE after Indian independence, with the first brick personally laid by Vallabhbhai Patel.",
    descriptionHi: "गुजरात के पश्चिमी तट पर सोमनाथ मंदिर शिव के बारह पवित्र ज्योतिर्लिंग मंदिरों में से एक और सबसे महत्वपूर्ण हिंदू तीर्थ स्थलों में से एक है। 'अनंत मंदिर' कहलाया, इस मंदिर को सदियों में छह बार नष्ट और पुनर्निर्मित किया गया है।",
    yearBuilt: "Ancient origin; current structure completed 1951 CE",
    dynasty: "Ancient (various); current temple by government of India",
    dynastyHi: "प्राचीन (विभिन्न); वर्तमान मंदिर भारत सरकार द्वारा",
    primaryModel: "/models/somnath_temple.glb",
    historicalModels: { past: "/models/somnath_temple.glb", ancient: "/models/somnath_temple.glb" },
    era: "ancient",
    hotspots: [
      { name: "Baan Stambha (Arrow Pillar)", description: "A pillar with an arrow pointing south from the temple — an inscription says 'From this point to the South Pole, there is no land only sea', reflecting ancient Indian geographical knowledge.", position: [0, 0, 1.5] },
      { name: "Sea-Facing Temple", description: "The temple stands directly at the edge of the Arabian Sea — the view from the front is the open ocean horizon with no land between here and the South Pole.", position: [0, 1.0, 0] },
      { name: "Parvati Temple (Adi Jyotirlinga)", description: "The inner sanctum houses the Somnath Shivalinga — the Jyotirlinga is believed to be self-manifested (swayambhu) and is the most sacred in the Jyotirlinga series.", position: [0, 0.5, 0.5] }
    ],
    facts: [
      "Somnath has been destroyed and rebuilt six times — the current temple was completed in 1951 after Indian independence",
      "Mahmud of Ghazni looted Somnath 17 times, each time carrying away enormous treasures",
      "Sardar Vallabhbhai Patel was the primary force behind rebuilding Somnath — he personally supervised the project before his death in 1950",
      "The temple stands at Prabhas Patan — where the Saraswati, Hiran, and Kapila rivers meet the Arabian Sea"
    ],
    factsHi: [
      "सोमनाथ को छह बार नष्ट और पुनर्निर्मित किया गया है — वर्तमान मंदिर 1951 में भारतीय स्वतंत्रता के बाद पूर्ण",
      "महमूद गज़नी ने सोमनाथ को 17 बार लूटा, हर बार भारी खजाना ले गया",
      "सरदार वल्लभभाई पटेल सोमनाथ के पुनर्निर्माण के पीछे प्रमुख शक्ति थे — उन्होंने 1950 में अपनी मृत्यु से पहले परियोजना की निगरानी की",
      "मंदिर प्रभास पाटन पर खड़ा है — जहाँ सरस्वती, हिरण और कपिला नदियाँ अरब सागर से मिलती हैं"
    ],
    visitingHours: "6:00 AM to 10:00 PM (All days)",
    visitingHoursHi: "सुबह 6:00 से रात 10:00 बजे तक (सभी दिन)",
    bestMonths: [10, 11, 0, 1, 2],
    bestTimeDesc: "October to March — coastal Gujarat winters are pleasant. The Kartik Purnima festival (November) at Somnath draws large pilgrim gatherings. The evening aarti is one of the most spectacular in Gujarat.",
    bestTimeDescHi: "अक्तूबर से मार्च — तटीय गुजरात की सर्दियाँ सुखद हैं। सोमनाथ में कार्तिक पूर्णिमा उत्सव (नवंबर) में बड़ी तीर्थयात्री भीड़ होती है।",
    timeline: [
      { year: "Ancient", event: "Somnath is described in the Rigveda and Skanda Purana — one of the oldest and most sacred Shiva sites", eventHi: "सोमनाथ का वर्णन ऋग्वेद और स्कंद पुराण में है — सबसे पुराने और पवित्र शिव स्थलों में से एक" },
      { year: "1025 CE", event: "Mahmud of Ghazni plunders Somnath for the first time — carrying away enormous wealth and breaking the Shivalinga", eventHi: "महमूद गज़नी ने पहली बार सोमनाथ को लूटा — भारी धन ले गया और शिवलिंग तोड़ा" },
      { year: "1951 CE", event: "New Somnath Temple rebuilt by the Government of India — inaugurated by President Rajendra Prasad", eventHi: "भारत सरकार द्वारा नए सोमनाथ मंदिर का पुनर्निर्माण — राष्ट्रपति राजेंद्र प्रसाद द्वारा उद्घाटन" }
    ],
    entryFee: "Free entry",
    entryFeeHi: "निःशुल्क प्रवेश",
    UNESCO: false
  },
];
