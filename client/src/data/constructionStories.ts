export interface ConstructionPhase {
  phase: number;
  title: string;
  titleHi: string;
  year: string;
  description: string;
  descriptionHi: string;
  icon: string;
  material?: string;
  materialHi?: string;
  workers?: string;
}

export interface ConstructionStory {
  monumentId: string;
  architectName?: string;
  architectNameHi?: string;
  totalDuration: string;
  totalDurationHi: string;
  phases: ConstructionPhase[];
  funFact: string;
  funFactHi: string;
}

const constructionStories: ConstructionStory[] = [
  {
    monumentId: "taj-mahal",
    architectName: "Ustad Ahmad Lahori",
    architectNameHi: "उस्ताद अहमद लाहौरी",
    totalDuration: "22 years (1631–1653)",
    totalDurationHi: "22 वर्ष (1631–1653)",
    funFact: "Over 1,000 elephants were used to transport building materials from across India and Central Asia.",
    funFactHi: "भारत और मध्य एशिया से निर्माण सामग्री लाने के लिए 1,000 से अधिक हाथियों का उपयोग किया गया था।",
    phases: [
      { phase: 1, title: "Planning & Design", titleHi: "योजना और डिजाइन", year: "1631", description: "Emperor Shah Jahan commissioned the tomb for his beloved wife Mumtaz Mahal who died during childbirth. Ustad Ahmad Lahori was appointed chief architect. Detailed blueprints were drawn blending Persian, Ottoman, and Indian Mughal styles.", descriptionHi: "सम्राट शाहजहाँ ने अपनी प्रिय पत्नी मुमताज महल की याद में मकबरा बनवाया। उस्ताद अहमद लाहौरी को मुख्य वास्तुकार नियुक्त किया गया।", icon: "📐", material: "Master plans drafted on silk cloth", materialHi: "रेशमी कपड़े पर मास्टर प्लान तैयार किए गए" },
      { phase: 2, title: "Foundation & Platform", titleHi: "नींव और मंच", year: "1632–1633", description: "The riverbank was reinforced with deep well foundations to protect against Yamuna floods. A massive 50m high platform of white Makrana marble was constructed, acting as the structural base for the entire complex.", descriptionHi: "यमुना बाढ़ से बचाव के लिए नदी तट को गहरी नींव से मजबूत किया गया। मकराना संगमरमर का विशाल मंच तैयार किया गया।", icon: "⚒️", material: "Red sandstone & deep well foundations", materialHi: "लाल बलुआ पत्थर और गहरी कुएं की नींव", workers: "~20,000 workers" },
      { phase: 3, title: "Main Tomb Construction", titleHi: "मुख्य मकबरे का निर्माण", year: "1633–1643", description: "The central dome rose 73 metres using a revolutionary double-dome design — an inner dome for proportional beauty and an outer dome for grand exterior silhouette. Walls were laid with translucent Makrana marble using precise interlocking masonry.", descriptionHi: "मुख्य गुंबद 73 मीटर ऊंचा दोहरे गुंबद डिजाइन के साथ बनाया गया। मकराना संगमरमर की दीवारें सटीक इंटरलॉकिंग चिनाई से बनाई गईं।", icon: "🏛️", material: "Makrana white marble, double-dome technique", materialHi: "मकराना सफेद संगमरमर, दोहरी गुंबद तकनीक", workers: "~37,000 artisans at peak" },
      { phase: 4, title: "Inlay & Decorative Work", titleHi: "जड़ाई और सजावटी कार्य", year: "1643–1648", description: "Master craftsmen inlaid the marble with 28 types of precious and semi-precious stones including lapis lazuli from Afghanistan, carnelian from Arabia, and jade from China. Over 43 types of gemstones were used in intricate floral patterns.", descriptionHi: "कारीगरों ने 28 प्रकार के बहुमूल्य पत्थरों से संगमरमर को सजाया — अफगानिस्तान से लापिस लाजुली, अरब से कार्नेलियन, चीन से जेड।", icon: "💎", material: "Lapis lazuli, jade, carnelian, turquoise, coral", materialHi: "लापिस लाजुली, जेड, कार्नेलियन, फ़िरोज़ा, मूंगा" },
      { phase: 5, title: "Gardens & Gateway", titleHi: "बाग और प्रवेश द्वार", year: "1648–1652", description: "The famous charbagh (four-part garden) was laid out on a 300m × 300m scale with water channels representing the rivers of paradise. The grand sandstone gateway was constructed with Quranic inscriptions in black marble calligraphy.", descriptionHi: "300×300 मीटर का प्रसिद्ध चारबाग़ बनाया गया जिसमें स्वर्ग की नदियों को दर्शाते जलमार्ग हैं। काले संगमरमर की सुलेखन के साथ भव्य प्रवेश द्वार बनाया गया।", icon: "🌿", material: "Red Agra sandstone, black marble calligraphy", materialHi: "लाल आगरा बलुआ पत्थर, काली संगमरमर सुलेख" },
      { phase: 6, title: "Minarets & Final Touches", titleHi: "मीनारें और अंतिम स्पर्श", year: "1652–1653", description: "Four 40-metre minarets were constructed slightly tilted outward — a deliberate design choice so they would fall away from the main tomb in case of an earthquake. The golden finial atop the main dome was the final element placed.", descriptionHi: "चार 40 मीटर ऊंची मीनारें थोड़ी बाहर की ओर झुकी हुई बनाई गईं — भूकंप की स्थिति में मुख्य मकबरे से दूर गिरने के लिए। मुख्य गुंबद के ऊपर सुनहरा कलश अंतिम तत्व था।", icon: "✨", material: "White marble minarets, gilded bronze finial", materialHi: "सफेद संगमरमर मीनारें, सोने की कांस्य कलश" }
    ]
  },
  {
    monumentId: "red-fort",
    architectName: "Ustad Ahmad Lahori",
    architectNameHi: "उस्ताद अहमद लाहौरी",
    totalDuration: "9 years (1639–1648)",
    totalDurationHi: "9 वर्ष (1639–1648)",
    funFact: "The Red Fort's walls are 2.5 km long and up to 33 metres high, making it one of the largest fortress complexes ever built.",
    funFactHi: "लाल किले की दीवारें 2.5 किमी लंबी और 33 मीटर तक ऊंची हैं, जो इसे अब तक बनाए गए सबसे बड़े किला परिसरों में से एक बनाती हैं।",
    phases: [
      { phase: 1, title: "Site Selection & Planning", titleHi: "स्थान चयन और योजना", year: "1638–1639", description: "Shah Jahan decided to shift his capital from Agra to Delhi. The site on the banks of the Yamuna was chosen for its strategic location. Architect Ustad Ahmad Lahori drew plans for the massive octagonal fort complex.", descriptionHi: "शाहजहाँ ने अपनी राजधानी आगरा से दिल्ली स्थानांतरित करने का निर्णय लिया। यमुना के किनारे स्थल का चयन किया गया।", icon: "📐" },
      { phase: 2, title: "Foundation & Walls", titleHi: "नींव और दीवारें", year: "1639–1642", description: "Massive red sandstone walls were erected, ranging from 18 to 33 metres in height. The walls form an irregular octagon 900 metres by 550 metres with two main gates: the Lahori Gate and Delhi Gate.", descriptionHi: "18 से 33 मीटर ऊंची विशाल लाल बलुआ पत्थर की दीवारें खड़ी की गईं। दीवारें 900×550 मीटर का अनियमित अष्टभुज बनाती हैं।", icon: "🧱", material: "Red Agra sandstone", materialHi: "लाल आगरा बलुआ पत्थर", workers: "~10,000 workers" },
      { phase: 3, title: "Palace Quarters", titleHi: "महल के कक्ष", year: "1642–1645", description: "The Diwan-i-Aam (Hall of Public Audience) and Diwan-i-Khas (Hall of Private Audience) were built within the fort. The famous Peacock Throne was placed in the Diwan-i-Khas, the most richly decorated chamber.", descriptionHi: "दीवान-ए-आम और दीवान-ए-खास का निर्माण किया गया। प्रसिद्ध मयूर सिंहासन दीवान-ए-खास में रखा गया था।", icon: "🏛️", material: "White marble inlaid with precious stones", materialHi: "बहुमूल्य पत्थरों से जड़ा सफेद संगमरमर" },
      { phase: 4, title: "Royal Baths & Mosque", titleHi: "शाही स्नानागार और मस्जिद", year: "1645–1647", description: "The Hammam (royal baths) featured three large chambers with hot and cold water systems using underground channels. The Moti Masjid (Pearl Mosque) was added with three marble domes, reserved for the emperor's personal use.", descriptionHi: "हम्माम में गर्म और ठंडे पानी की प्रणाली के साथ तीन बड़े कक्ष थे। मोती मस्जिद तीन संगमरमर के गुंबदों के साथ जोड़ी गई।", icon: "🕌", material: "White marble, with underground channel system", materialHi: "सफेद संगमरमर, भूमिगत नहर प्रणाली के साथ" },
      { phase: 5, title: "Gardens & Water Channels", titleHi: "बाग और जलमार्ग", year: "1647–1648", description: "The Nahr-i-Bahisht (Stream of Paradise) — an elaborate water channel system — flowed through the entire fort complex, supplying water to fountains, gardens, and royal apartments. Formal Mughal gardens were landscaped.", descriptionHi: "नहर-ए-बहिश्त पानी की नहर प्रणाली पूरे किले से होकर बहती थी, फव्वारों, बागों और शाही कक्षों को पानी देती थी।", icon: "🌊", material: "Marble channels with copper pipes", materialHi: "तांबे की पाइप के साथ संगमरमर की नहरें" }
    ]
  },
  {
    monumentId: "qutub-minar",
    architectName: "Qutb al-Din Aibak & Iltutmish",
    architectNameHi: "कुतुब-उद-दीन ऐबक और इल्तुतमिश",
    totalDuration: "75 years (1193–1368, multiple builders)",
    totalDurationHi: "75 वर्ष (1193–1368, कई निर्माता)",
    funFact: "The Qutub Minar leans slightly — about 65 cm from the vertical — but unlike the Leaning Tower of Pisa, this tilt is considered structurally stable.",
    funFactHi: "कुतुब मीनार थोड़ा झुका हुआ है — लगभग 65 सेमी — लेकिन पीसा की मीनार के विपरीत, यह झुकाव संरचनात्मक रूप से स्थिर माना जाता है।",
    phases: [
      { phase: 1, title: "First Storey Foundation", titleHi: "पहली मंजिल की नींव", year: "1193", description: "Qutb al-Din Aibak, the first ruler of the Delhi Sultanate, began the minar as a victory tower following his conquest of Delhi. Stones from 27 demolished Hindu and Jain temples were used in the construction.", descriptionHi: "कुतुब-उद-दीन ऐबक ने दिल्ली की विजय के बाद विजय स्तंभ के रूप में मीनार शुरू की। 27 ध्वस्त मंदिरों के पत्थरों का उपयोग किया गया।", icon: "🏗️", material: "Repurposed temple stone & red sandstone", materialHi: "पुनः उपयोग किए गए मंदिर के पत्थर और लाल बलुआ पत्थर" },
      { phase: 2, title: "Storeys 2–4 (Iltutmish)", titleHi: "2–4 मंजिलें (इल्तुतमिश)", year: "1211–1236", description: "After Aibak died in 1210, his son-in-law Iltutmish added three more storeys to the tower. Each storey was surrounded by a projecting balcony supported by ornate corbels. Alternating fluted and starred polygonal cross-sections were used.", descriptionHi: "ऐबक की मृत्यु के बाद इल्तुतमिश ने तीन और मंजिलें जोड़ीं। प्रत्येक मंजिल में अलंकृत कोनसोल पर टिकी हुई बालकनी थी।", icon: "🔺", material: "Red quartzite stone with marble upper storeys", materialHi: "संगमरमर की ऊपरी मंजिलों के साथ लाल क्वार्टजाइट पत्थर" },
      { phase: 3, title: "Lightning Strike & Repair", titleHi: "बिजली गिरना और मरम्मत", year: "1326", description: "The top of the minar was struck by lightning and two storeys collapsed. Sultan Muhammad bin Tughluq rebuilt them but the replacement storeys were shorter, changing the original proportions. A marble top storey was added.", descriptionHi: "मीनार की चोटी पर बिजली गिरी और दो मंजिलें ढह गईं। सुल्तान मुहम्मद बिन तुगलक ने उन्हें पुनर्निर्मित किया।", icon: "⚡", material: "Marble & lighter sandstone for rebuilt top", materialHi: "पुनर्निर्मित शीर्ष के लिए संगमरमर और हल्का बलुआ पत्थर" },
      { phase: 4, title: "Final Storey (Firuz Shah Tughluq)", titleHi: "अंतिम मंजिल (फिरोज शाह तुगलक)", year: "1368", description: "Firuz Shah Tughluq replaced the damaged upper portion with the current marble-capped cupola. He also built a rest house at the base and added the final decorative finishes, completing the tower's current 73-metre height.", descriptionHi: "फिरोज शाह तुगलक ने क्षतिग्रस्त ऊपरी हिस्से को वर्तमान संगमरमर-ढके कपोला से बदला। उन्होंने आधार पर एक विश्राम गृह भी बनाया।", icon: "🏁", material: "White Makrana marble cupola", materialHi: "सफेद मकराना संगमरमर का कपोला" }
    ]
  },
  {
    monumentId: "hampi",
    architectName: "Vijayanagara Royal Artisans",
    architectNameHi: "विजयनगर शाही कारीगर",
    totalDuration: "150+ years (1336–1565)",
    totalDurationHi: "150+ वर्ष (1336–1565)",
    funFact: "Hampi was once one of the world's largest cities with a population of 500,000 and was described by Portuguese and Persian travellers as more magnificent than Rome.",
    funFactHi: "हम्पी कभी 5 लाख की आबादी वाले विश्व के सबसे बड़े शहरों में से एक था और पुर्तगाली और फारसी यात्रियों ने इसे रोम से भी भव्य बताया।",
    phases: [
      { phase: 1, title: "City Foundation", titleHi: "शहर की नींव", year: "1336", description: "Brothers Hakka and Bukka Raya founded the Vijayanagara Empire and chose Hampi on the Tungabhadra River for the capital. The site was sacred — described in the Ramayana as Kishkindha, the kingdom of the monkey god Vali.", descriptionHi: "हक्का और बुक्का राय भाइयों ने विजयनगर साम्राज्य की स्थापना की और तुंगभद्रा नदी पर हम्पी को राजधानी के रूप में चुना।", icon: "🏙️" },
      { phase: 2, title: "Virupaksha Temple Complex", titleHi: "विरुपाक्ष मंदिर परिसर", year: "1336–1400", description: "The Virupaksha Temple dedicated to Lord Shiva was expanded dramatically. The 50-metre tall gopuram (entrance tower) was built with thousands of sculpted figures. A 160-metre long pillared corridor was added.", descriptionHi: "भगवान शिव को समर्पित विरुपाक्ष मंदिर का नाटकीय विस्तार हुआ। 50 मीटर ऊंचा गोपुरम हजारों मूर्तियों के साथ बनाया गया।", icon: "🛕", material: "Local Deccan granite carved on-site", materialHi: "स्थानीय डेक्कन ग्रेनाइट" },
      { phase: 3, title: "Royal Enclosure & Elephant Stables", titleHi: "शाही परिसर और हाथी अस्तबल", year: "1400–1500", description: "The Royal Enclosure housed the king's palace, audience halls, and treasury buildings. The famous Elephant Stables — eleven domed chambers — were built for the royal war elephants. The Zenana enclosure for royal women was added.", descriptionHi: "शाही परिसर में राजा का महल, दर्शक भवन और खजाना भवन थे। शाही युद्ध हाथियों के लिए प्रसिद्ध हाथी अस्तबल बनाए गए।", icon: "🐘", material: "Granite rubble masonry with lime plaster", materialHi: "चूने के प्लास्टर के साथ ग्रेनाइट मलबा चिनाई" },
      { phase: 4, title: "Vittala Temple & Stone Chariot", titleHi: "विट्ठल मंदिर और पत्थर का रथ", year: "1500–1565", description: "The Vittala Temple complex, dedicated to Lord Vishnu, was built as the artistic pinnacle. The 56 musical pillars (sapta swara) produced different musical notes when tapped. The iconic stone chariot in the courtyard became a symbol of Hampi.", descriptionHi: "भगवान विष्णु को समर्पित विट्ठल मंदिर परिसर कलात्मक चरमोत्कर्ष के रूप में बनाया गया। 56 संगीत स्तंभ अलग-अलग संगीत स्वर उत्पन्न करते थे।", icon: "🎵", material: "Granite with unique acoustic properties", materialHi: "अद्वितीय ध्वनिक गुणों के साथ ग्रेनाइट" }
    ]
  },
  {
    monumentId: "konark-sun-temple",
    architectName: "Bishu Maharan (attributed)",
    architectNameHi: "बिशु महाराण (श्रेय)",
    totalDuration: "~16 years (1244–1260)",
    totalDurationHi: "~16 वर्ष (1244–1260)",
    funFact: "The temple was designed as a giant stone chariot of the sun god with 24 wheels, each 2.9 metres in diameter. The wheels also function as precise sundials.",
    funFactHi: "मंदिर को सूर्य देव के 24 पहियों वाले विशाल पत्थर के रथ के रूप में डिजाइन किया गया था, प्रत्येक 2.9 मीटर व्यास। पहिए सटीक सूर्य-घड़ी के रूप में भी काम करते हैं।",
    phases: [
      { phase: 1, title: "Royal Commission & Vision", titleHi: "शाही आदेश और दृष्टि", year: "1244", description: "King Narasimhadeva I of the Eastern Ganga dynasty commissioned the temple after his military victory over the Muslim armies. The grand vision was a chariot of the sun god Surya — unlike anything built before.", descriptionHi: "पूर्वी गंग वंश के राजा नरसिम्हदेव प्रथम ने मुस्लिम सेनाओं पर विजय के बाद मंदिर का आदेश दिया। दृष्टि थी सूर्य देव सूर्य का रथ।", icon: "☀️" },
      { phase: 2, title: "Foundation & Platform", titleHi: "नींव और मंच", year: "1244–1248", description: "The massive jagamohana (porch) and deula (sanctuary) required a 3-metre deep foundation raft. Over 1,200 craftsmen were brought from across Odisha. The platform was designed as the chariot's body with seven rearing stone horses.", descriptionHi: "विशाल जगमोहन और देउला के लिए 3 मीटर गहरी नींव की आवश्यकता थी। ओडिशा से 1,200 से अधिक शिल्पकार लाए गए।", icon: "⚒️", material: "Khondalite stone quarried from Konark hills", materialHi: "कोणार्क पहाड़ियों से खनिज खोंडालाइट पत्थर", workers: "1,200+ craftsmen" },
      { phase: 3, title: "Chariot Wheels & Horses", titleHi: "रथ के पहिए और घोड़े", year: "1248–1254", description: "Twenty-four massive wheels (12 on each side) were carved in intricate detail. Each 3-metre wheel has 8 spokes representing the 8 prahara (3-hour periods of the day). Seven galloping horses on the west face pull the chariot.", descriptionHi: "24 विशाल पहिए (प्रत्येक तरफ 12) जटिल विवरण में उकेरे गए। प्रत्येक 3 मीटर के पहिए में 8 तीलियां दिन के 8 प्रहरों को दर्शाती हैं।", icon: "🎡", material: "Chlorite, khondalite, laterite stone", materialHi: "क्लोराइट, खोंडालाइट, लेटेराइट पत्थर" },
      { phase: 4, title: "Erotic Sculptures & Panels", titleHi: "काम मूर्तियां और पैनल", year: "1254–1258", description: "Thousands of sculptures cover the temple walls — celestial musicians, animals, and the famous erotic figures representing the energy of creation. These panels also served an educational purpose in temple tradition.", descriptionHi: "हजारों मूर्तियाँ मंदिर की दीवारों को ढकती हैं — स्वर्गीय संगीतकार, जानवर, और प्रसिद्ध काम मूर्तियां सृष्टि की ऊर्जा को दर्शाती हैं।", icon: "🎭", material: "High-precision stone carving tools of iron", materialHi: "लोहे के उच्च परिशुद्धता वाले पत्थर नक्काशी उपकरण" },
      { phase: 5, title: "Main Sanctum & Shikhara", titleHi: "मुख्य गर्भगृह और शिखर", year: "1258–1260", description: "The main shikhara (tower) rose to approximately 70 metres — higher than today's remains. The presiding deity, Surya, was placed in the sanctum to receive the first rays of the rising sun at the equinoxes.", descriptionHi: "मुख्य शिखर लगभग 70 मीटर ऊंचा था। विषुव पर उगते सूर्य की पहली किरणें प्राप्त करने के लिए गर्भगृह में सूर्य देव को स्थापित किया गया।", icon: "🌅", material: "Chlorite stone capping with copper finial", materialHi: "तांबे के कलश के साथ क्लोराइट पत्थर की टोपी" }
    ]
  },
  {
    monumentId: "charminar",
    architectName: "Muhammad Quli Qutb Shah",
    architectNameHi: "मुहम्मद कुली कुतुब शाह",
    totalDuration: "~4 years (1591–1595)",
    totalDurationHi: "~4 वर्ष (1591–1595)",
    funFact: "The Charminar was built at the precise geographic centre of the new city of Hyderabad, with four roads radiating outward in the four cardinal directions.",
    funFactHi: "चारमीनार हैदराबाद शहर के सटीक भौगोलिक केंद्र में बनाया गया था, जिसमें चार सड़कें चार मुख्य दिशाओं में निकलती हैं।",
    phases: [
      { phase: 1, title: "Founding of Hyderabad", titleHi: "हैदराबाद की स्थापना", year: "1591", description: "Sultan Muhammad Quli Qutb Shah moved his capital from Golconda to a new city on the Musi river. He promised to build a mosque if a plague was defeated. The Charminar would mark the new city's founding point.", descriptionHi: "सुल्तान ने गोलकोंडा से मूसी नदी पर एक नए शहर में अपनी राजधानी स्थानांतरित की। उन्होंने प्लेग समाप्त होने पर मस्जिद बनाने का वादा किया।", icon: "🕌" },
      { phase: 2, title: "Four Minarets Rise", titleHi: "चार मीनारें उठती हैं", year: "1591–1592", description: "Four 56-metre minarets were built simultaneously, one at each corner of the square structure. Each minaret has four storeys separated by decorative balconies. The minarets represent the first four caliphs of Islam.", descriptionHi: "चार 56 मीटर ऊंची मीनारें एक साथ बनाई गईं, चौकोर संरचना के प्रत्येक कोने पर एक। प्रत्येक मीनार में चार मंजिलें हैं।", icon: "🏗️", material: "Granite, limestone, mortar and pulverised marble", materialHi: "ग्रेनाइट, चूना पत्थर, मोर्टार और पिसा संगमरमर", workers: "~3,000 workers" },
      { phase: 3, title: "Central Arch & Upper Mosque", titleHi: "केंद्रीय मेहराब और ऊपरी मस्जिद", year: "1592–1594", description: "Four grand pointed arches (each 11 metres wide) span between the minarets, creating the central open hall. The mosque on the roof — the oldest mosque in Hyderabad — was built with 45 prayer spaces and three open domes.", descriptionHi: "चार भव्य नुकीले मेहराब (प्रत्येक 11 मीटर चौड़े) मीनारों के बीच फैले हैं। छत पर मस्जिद — हैदराबाद की सबसे पुरानी — 45 प्रार्थना स्थानों के साथ बनाई गई।", icon: "🌙", material: "Lime stucco rendering & granite load-bearing walls", materialHi: "चूने का प्लास्टर और ग्रेनाइट लोड-बेयरिंग दीवारें" },
      { phase: 4, title: "Clock & Final Decoration", titleHi: "घड़ी और अंतिम सजावट", year: "1889 (clocks added)", description: "The original 1591 structure was completed with elaborate stucco decorations and calligraphy. In 1889, clocks were added to each facade by the Nizam of Hyderabad — making it one of India's earliest public clock towers.", descriptionHi: "मूल 1591 की संरचना विस्तृत प्लास्टर सजावट और सुलेखन के साथ पूरी हुई। 1889 में हैदराबाद के निजाम ने घड़ियां जोड़ीं।", icon: "🕐", material: "Fine lime stucco with decorative bands", materialHi: "सजावटी बैंड के साथ बारीक चूने का प्लास्टर" }
    ]
  },
  {
    monumentId: "lotus-temple",
    architectName: "Fariborz Sahba",
    architectNameHi: "फरीबोर्ज़ सहबा",
    totalDuration: "10 years (1976–1986)",
    totalDurationHi: "10 वर्ष (1976–1986)",
    funFact: "The Lotus Temple has 27 free-standing marble-clad petals arranged in groups of three, and the building uses no steel frame — it relies entirely on concrete shell construction.",
    funFactHi: "लोटस टेम्पल में 27 स्वतंत्र संगमरमर से ढकी पंखुड़ियां हैं। इमारत में कोई स्टील फ्रेम नहीं है — यह पूरी तरह कंक्रीट शेल निर्माण पर निर्भर करती है।",
    phases: [
      { phase: 1, title: "Design Competition & Vision", titleHi: "डिजाइन प्रतियोगिता और दृष्टि", year: "1976", description: "Iranian-Canadian architect Fariborz Sahba was commissioned to design a Bahá'í House of Worship for the Indian subcontinent. He took the lotus — sacred in multiple Indian religions — as his central motif, spending 2 years on conceptual design.", descriptionHi: "ईरानी-कनाडाई वास्तुकार फरीबोर्ज़ सहबा को भारतीय उपमहाद्वीप के लिए बहाई उपासना मंदिर डिजाइन करने का काम दिया गया। उन्होंने कमल को केंद्रीय रूपांकन के रूप में चुना।", icon: "🪷" },
      { phase: 2, title: "Structural Engineering", titleHi: "संरचनात्मक इंजीनियरिंग", year: "1979–1981", description: "The complex shell structure required advanced computer modelling — one of the first major buildings in India to use computerised structural analysis. The double-curved concrete shells required over 800 engineering drawings.", descriptionHi: "जटिल शेल संरचना के लिए उन्नत कंप्यूटर मॉडलिंग की आवश्यकता थी — भारत में कंप्यूटरीकृत संरचनात्मक विश्लेषण का उपयोग करने वाली पहली प्रमुख इमारतों में से एक।", icon: "💻", material: "Reinforced concrete shells", materialHi: "प्रबलित कंक्रीट शेल", workers: "800+ engineers & workers" },
      { phase: 3, title: "Concrete Shell Construction", titleHi: "कंक्रीट शेल निर्माण", year: "1981–1984", description: "The 27 petals are arranged in three layers of nine, forming outer, inner, and ceiling petals. Each petal rises 34.27 metres. The concrete was poured in curved formwork requiring extraordinary precision to achieve the smooth organic form.", descriptionHi: "27 पंखुड़ियां नौ के तीन स्तरों में व्यवस्थित हैं। प्रत्येक पंखुड़ी 34.27 मीटर उठती है। कंक्रीट को घुमावदार सांचे में डाला गया।", icon: "🏗️", material: "High-strength concrete with curved formwork", materialHi: "घुमावदार सांचे के साथ उच्च शक्ति कंक्रीट" },
      { phase: 4, title: "Greek Marble Cladding", titleHi: "यूनानी संगमरमर की परत", year: "1984–1986", description: "Pure white Pentelic marble from Greece — the same used in the Parthenon — was imported to clad the outer surfaces of all 27 petals. Each marble panel was custom-cut to fit the unique curvature of its petal, requiring over 10,000 unique pieces.", descriptionHi: "ग्रीस से शुद्ध सफेद पेंटेलिक संगमरमर — पार्थेनन में उपयोग किया जाने वाला — आयात किया गया। प्रत्येक संगमरमर पैनल को अद्वितीय वक्रता के अनुरूप काटा गया।", icon: "🪨", material: "Pentelic white marble from Mt. Pentelikon, Greece", materialHi: "ग्रीस के माउंट पेंटेलिकॉन से पेंटेलिक सफेद संगमरमर" }
    ]
  },
  {
    monumentId: "golden-temple",
    architectName: "Guru Arjan Dev Ji (5th Sikh Guru)",
    architectNameHi: "गुरु अर्जन देव जी (5वें सिख गुरु)",
    totalDuration: "8 years (1581–1589, gold added 1830)",
    totalDurationHi: "8 वर्ष (1581–1589, सोना 1830 में जोड़ा)",
    funFact: "The Harmandir Sahib was deliberately built lower than the surrounding land, symbolising humility. It has four entrances on all four sides — welcoming people from all four directions regardless of faith.",
    funFactHi: "हरमंदिर साहिब जानबूझकर आसपास की जमीन से नीचा बनाया गया था — विनम्रता का प्रतीक। इसके चारों दिशाओं में प्रवेश द्वार हैं।",
    phases: [
      { phase: 1, title: "Sacred Pool Excavation", titleHi: "पवित्र सरोवर खुदाई", year: "1577", description: "Guru Ram Das Ji, the fourth Sikh Guru, excavated the sacred pool (sarovar) in Amritsar. The city takes its name from this pool — Amritsar means 'pool of the nectar of immortality.' Local workers and Sikh devotees volunteered for the work.", descriptionHi: "चौथे सिख गुरु, गुरु राम दास जी ने अमृतसर में पवित्र सरोवर खोदा। शहर का नाम इसी सरोवर से है — अमृतसर का अर्थ है 'अमृत का सरोवर'।", icon: "💧" },
      { phase: 2, title: "Foundation & Design", titleHi: "नींव और डिजाइन", year: "1581–1583", description: "Guru Arjan Dev Ji commissioned the main shrine in the centre of the pool. Revolutionary design elements: four entrances (no exclusion), built lower than ground level (humility), and a blend of Hindu and Islamic architectural styles showing inclusivity.", descriptionHi: "गुरु अर्जन देव जी ने सरोवर के बीच में मुख्य मंदिर की स्थापना की। क्रांतिकारी तत्व: चार प्रवेश द्वार, जमीनी स्तर से नीचा, हिंदू और इस्लामी शैलियों का मिश्रण।", icon: "📐", material: "White marble & lime mortar foundation", materialHi: "सफेद संगमरमर और चूने मोर्टार की नींव" },
      { phase: 3, title: "Shrine Construction", titleHi: "मंदिर निर्माण", year: "1583–1589", description: "The two-storey shrine was built with a unique domed roof. The lower floor houses the Guru Granth Sahib (holy scripture). Intricate frescoes and inlay work adorned the interior walls. The foundation stone was reportedly laid by a Muslim saint, Mian Mir of Lahore.", descriptionHi: "दो मंजिला मंदिर अद्वितीय गुंबदाकार छत के साथ बनाया गया। निचली मंजिल में गुरु ग्रंथ साहिब है। आधारशिला एक मुस्लिम संत, मियां मीर ने रखी।", icon: "🕌", material: "White marble with gilded copper work", materialHi: "सोने के तांबे के काम के साथ सफेद संगमरमर", workers: "Thousands of voluntary seva workers", },
      { phase: 4, title: "Gold Plating (Maharaja Ranjit Singh)", titleHi: "सोने की परत (महाराजा रणजीत सिंह)", year: "1830", description: "Maharaja Ranjit Singh, the Sikh Empire's founder, donated 162 kg of gold to gild the temple. Copper sheets were first fixed to the walls, then covered with gold leaf. This is when it became known as the 'Golden Temple.'", descriptionHi: "महाराजा रणजीत सिंह ने मंदिर को सोने से मढ़ने के लिए 162 किलो सोना दिया। पहले तांबे की चादरें दीवारों पर लगाई गईं, फिर सोने की पत्ती से ढकी गईं।", icon: "✨", material: "162 kg gold over copper sheeting", materialHi: "तांबे की चादर पर 162 किलो सोना" }
    ]
  },
  {
    monumentId: "gateway-of-india",
    architectName: "George Wittet",
    architectNameHi: "जॉर्ज विट्टेट",
    totalDuration: "13 years (1911–1924)",
    totalDurationHi: "13 वर्ष (1911–1924)",
    funFact: "The Gateway was originally meant to commemorate the visit of King George V and Queen Mary in 1911 — but construction wasn't even started when they arrived. They had to walk through a cardboard arch!",
    funFactHi: "गेटवे मूल रूप से 1911 में राजा जॉर्ज V की यात्रा के लिए बनाया जाना था — लेकिन उनके आने पर निर्माण शुरू भी नहीं हुआ था। उन्हें गत्ते के द्वार से गुजरना पड़ा!",
    phases: [
      { phase: 1, title: "Design Competition", titleHi: "डिजाइन प्रतियोगिता", year: "1911", description: "Scottish architect George Wittet won the design competition. He proposed an Indo-Saracenic arch blending 16th-century Gujarati architectural styles with Muslim pointed arches. The design symbolised the meeting of British and Indian cultures.", descriptionHi: "स्कॉटिश वास्तुकार जॉर्ज विट्टेट ने डिजाइन प्रतियोगिता जीती। उन्होंने 16वीं सदी की गुजराती शैली और मुस्लिम नुकीले मेहराबों का मिश्रण प्रस्तावित किया।", icon: "📐" },
      { phase: 2, title: "Land Reclamation & Foundation", titleHi: "भूमि पुनः प्राप्ति और नींव", year: "1911–1915", description: "Building in the sea required massive land reclamation work at the Apollo Bunder waterfront. The foundation used yellow Kharodi basalt stone from local quarries, with deep pilings driven into the seabed for stability.", descriptionHi: "समुद्र में निर्माण के लिए अपोलो बंदर पर भारी भूमि पुनः प्राप्ति की आवश्यकता थी। नींव में स्थानीय खदानों से पीले खारोदी बेसाल्ट पत्थर का उपयोग किया गया।", icon: "🌊", material: "Yellow Kharodi basalt from local quarries", materialHi: "स्थानीय खदानों से पीला खारोदी बेसाल्ट" },
      { phase: 3, title: "Arch & Tower Construction", titleHi: "मेहराब और टावर निर्माण", year: "1915–1922", description: "The 26-metre high central arch was raised with ornate lattice work in the spandrels. Four turrets with ornamental perforated lattice screens flank the arch. The trident-patterned stonework on the facade required skilled Gujarati craftsmen.", descriptionHi: "26 मीटर ऊंचा केंद्रीय मेहराब जालीदार काम के साथ उठाया गया। चार बुर्ज मेहराब को सजाते हैं। मुखभाग पर त्रिशूल-पैटर्न पत्थर का काम कुशल गुजराती कारीगरों की आवश्यकता थी।", icon: "🏗️", material: "Yellow basalt & reinforced concrete", materialHi: "पीला बेसाल्ट और प्रबलित कंक्रीट", workers: "~1,500 workers" },
      { phase: 4, title: "Inauguration & Ironies of History", titleHi: "उद्घाटन और इतिहास की विडंबनाएं", year: "1924", description: "The Gateway was inaugurated by Viceroy Rufus Isaacs in 1924. Ironically, just 24 years later in 1948, it was through this same Gateway that the last British troops marched out of India as the nation achieved independence.", descriptionHi: "गेटवे का उद्घाटन 1924 में वायसराय रुफस इसाक्स ने किया। विडंबना यह है कि 1948 में यहां से अंतिम ब्रिटिश सैनिकों ने भारत छोड़ा।", icon: "🎉", material: "Completed with decorative limestone details", materialHi: "सजावटी चूना पत्थर विवरण के साथ पूरा हुआ" }
    ]
  },
  {
    monumentId: "ajanta-caves",
    architectName: "Buddhist Monk-Artisans",
    architectNameHi: "बौद्ध भिक्षु-कारीगर",
    totalDuration: "800 years (2nd century BCE – 6th century CE)",
    totalDurationHi: "800 वर्ष (दूसरी शताब्दी ईसा पूर्व – 6वीं शताब्दी ईस्वी)",
    funFact: "The Ajanta painters mixed pigments with animal glue, lime, and vegetable materials to create colours that have survived 1,500+ years in a dark cave without any modern preservatives.",
    funFactHi: "अजंता के चित्रकारों ने पशु गोंद, चूना और वनस्पति सामग्री के साथ रंगद्रव्य मिलाया, जो किसी भी आधुनिक संरक्षक के बिना अंधेरी गुफा में 1,500+ वर्षों तक जीवित रहे।",
    phases: [
      { phase: 1, title: "Early Hinayana Caves", titleHi: "प्रारंभिक हीनयान गुफाएं", year: "2nd–1st century BCE", description: "The earliest caves (9, 10, 12, 13, 15A) were simple chaitya-grihas (prayer halls) and viharas (monasteries) cut directly into the horseshoe-shaped basalt cliff. Buddhist monks carved by hand using iron chisels — no machinery.", descriptionHi: "प्रारंभिक गुफाएं बेसाल्ट चट्टान में सीधे काटे गए सरल चैत्य-गृह और विहार थीं। बौद्ध भिक्षुओं ने लोहे की छेनी से हाथ से काटा।", icon: "⛏️", material: "Hand-carved volcanic basalt", materialHi: "हाथ से उकेरा बेसाल्ट" },
      { phase: 2, title: "Gupta Period Expansion", titleHi: "गुप्त काल विस्तार", year: "5th–6th century CE", description: "The greatest creative burst came under Gupta and Vakataka royal patronage. Twenty-five new caves were excavated, including the magnificent Cave 1 with its Bodhisattva Padmapani painting. Work proceeded simultaneously across multiple cave faces.", descriptionHi: "गुप्त और वाकाटक शाही संरक्षण में सबसे बड़ा रचनात्मक विस्फोट हुआ। 25 नई गुफाएं खोदी गईं, जिनमें बोधिसत्व पद्मपाणि चित्र वाली शानदार गुफा 1 शामिल है।", icon: "🎨", workers: "Hundreds of monks and artisans" },
      { phase: 3, title: "Wall Preparation for Painting", titleHi: "चित्रकला के लिए दीवार तैयारी", year: "5th century CE", description: "Walls were prepared in three stages: a rough mud-and-cow-dung coat, then a fine lime-plaster finish. A mica-based burnishing gave the final layer a reflective sheen to maximise lamplight visibility in the dark caves.", descriptionHi: "दीवारें तीन चरणों में तैयार की गईं: मिट्टी-गोबर की मोटी परत, फिर बारीक चूने के प्लास्टर की परत। अभ्रक-आधारित पॉलिश ने परावर्तक चमक दी।", icon: "🖌️", material: "Mud plaster, lime, cow dung, and vegetable pigments", materialHi: "मिट्टी का प्लास्टर, चूना, गोबर और वनस्पति रंगद्रव्य" },
      { phase: 4, title: "Paintings & Sculptures", titleHi: "चित्र और मूर्तियां", year: "5th–6th century CE", description: "Masters painted ceiling-to-floor murals using lapis lazuli, ochre, red haematite and local minerals. Paintings show Jataka tales, court scenes, and nature in unprecedented naturalistic detail. 3D sculptures were simultaneously carved from walls.", descriptionHi: "उस्तादों ने लापिस लाजुली, गेरू, लाल हेमेटाइट और स्थानीय खनिजों का उपयोग करके छत से फर्श तक भित्तिचित्र बनाए।", icon: "🖼️", material: "Lapis lazuli, ochre, malachite, red haematite", materialHi: "लापिस लाजुली, गेरू, मैलाकाइट, लाल हेमेटाइट" }
    ]
  },
  {
    monumentId: "ellora-caves",
    architectName: "Rashtrakuta & Chalukya Artisans",
    architectNameHi: "राष्ट्रकूट और चालुक्य कारीगर",
    totalDuration: "600 years (5th–11th century CE)",
    totalDurationHi: "600 वर्ष (5वीं–11वीं शताब्दी ईस्वी)",
    funFact: "The Kailasa Temple (Cave 16) required removing 400,000 tonnes of rock. Builders worked downward from the top — it was carved from the mountain top down, not bottom up.",
    funFactHi: "कैलाश मंदिर (गुफा 16) के लिए 4 लाख टन चट्टान हटानी पड़ी। निर्माताओं ने ऊपर से नीचे की ओर काम किया — इसे पहाड़ की चोटी से नीचे की ओर उकेरा गया।",
    phases: [
      { phase: 1, title: "Buddhist Phase", titleHi: "बौद्ध चरण", year: "5th–7th century CE", description: "The first 12 caves (Buddhist) were excavated as multi-storey monasteries with ornate facades. Cave 5 has a 35-metre long hall for communal dining. Cave 10 features a remarkable wooden-ribbed ceiling carved entirely in stone.", descriptionHi: "पहली 12 गुफाएं (बौद्ध) अलंकृत मुखभाग के साथ बहु-मंजिला मठों के रूप में खोदी गईं। गुफा 10 में पूरी तरह पत्थर में उकेरी लकड़ी की छत है।", icon: "☸️", material: "Volcanic basalt, hand-carved downward", materialHi: "ज्वालामुखीय बेसाल्ट, हाथ से ऊपर से नीचे उकेरी" },
      { phase: 2, title: "Hindu Phase & Kailasa", titleHi: "हिंदू चरण और कैलाश", year: "7th–10th century CE", description: "Caves 13–29 represent the Hindu phase with the magnificent Kailasa Temple as centerpiece. Under Rashtrakuta King Dantidurga, 7,000 labourers worked for 150 years to carve the Kailasa — removing rock for three generations.", descriptionHi: "गुफाएं 13–29 हिंदू चरण का प्रतिनिधित्व करती हैं, जिसमें कैलाश मंदिर मुख्य है। राष्ट्रकूट राजा दंतिदुर्ग के अधीन 7,000 मजदूरों ने 150 वर्षों तक काम किया।", icon: "🛕", workers: "7,000+ workers for Kailasa alone" },
      { phase: 3, title: "Kailasa Temple Carving", titleHi: "कैलाश मंदिर की नक्काशी", year: "8th century CE", description: "The Kailasa was carved top-to-bottom from a single massive cliff. Three vertical trenches were cut first to isolate the rock mass. 200,000 tonnes of stone were removed over generations. The result was a replica of Mt. Kailash in the Himalayas.", descriptionHi: "कैलाश को एक ही विशाल चट्टान से ऊपर से नीचे की ओर उकेरा गया था। पहले तीन ऊर्ध्वाधर खाइयां काटी गईं। 2 लाख टन पत्थर पीढ़ियों में हटाया गया।", icon: "⛰️", material: "Single granite cliff — no construction, only subtraction", materialHi: "एकल ग्रेनाइट चट्टान — कोई निर्माण नहीं, केवल घटाव" },
      { phase: 4, title: "Jain Phase & Indra Sabha", titleHi: "जैन चरण और इंद्र सभा", year: "9th–11th century CE", description: "The final 5 caves (30–34) are Jain monuments with the Indra Sabha as their jewel. Two-storeyed cave with perfectly proportioned columns and delicate ivory-like carvings in pure white marble show the mastery of Jain artisans.", descriptionHi: "अंतिम 5 गुफाएं (30–34) जैन स्मारक हैं जिनमें इंद्र सभा सबसे उत्कृष्ट है। पूरी तरह सफेद संगमरमर में हाथीदांत जैसी नक्काशी जैन कारीगरों की महारत दिखाती है।", icon: "🔮", material: "White marble with extremely fine chisel work", materialHi: "अत्यंत बारीक छेनी काम के साथ सफेद संगमरमर" }
    ]
  }
];

export function getConstructionStory(monumentId: string): ConstructionStory | null {
  return constructionStories.find(s => s.monumentId === monumentId) || null;
}

export function generateGenericStory(monumentId: string, name: string, yearBuilt: string, dynasty: string): ConstructionStory {
  return {
    monumentId,
    totalDuration: `Several years during ${yearBuilt}`,
    totalDurationHi: `${yearBuilt} के दौरान कई वर्ष`,
    funFact: `${name} stands as a remarkable example of ${dynasty} architecture, blending local craft traditions with the architectural ideals of its era.`,
    funFactHi: `${name} ${dynasty} वास्तुकला का एक उल्लेखनीय उदाहरण है, जो अपने युग की स्थानीय शिल्प परंपराओं और वास्तुकला आदर्शों का मिश्रण है।`,
    phases: [
      { phase: 1, title: "Royal Decree & Patronage", titleHi: "शाही आदेश और संरक्षण", year: yearBuilt, description: `The construction of ${name} was commissioned under the ${dynasty}. The ruler chose the site carefully for its strategic, religious, or symbolic importance. Master architects were summoned from across the region to draw up plans.`, descriptionHi: `${name} का निर्माण ${dynasty} के अधीन आदेशित किया गया था। शासक ने रणनीतिक, धार्मिक या प्रतीकात्मक महत्व के लिए स्थान का सावधानीपूर्वक चयन किया।`, icon: "👑" },
      { phase: 2, title: "Site Preparation & Foundation", titleHi: "स्थल तैयारी और नींव", year: yearBuilt, description: `The construction site was levelled and a deep foundation was laid to support the structure above. Local stone and materials were sourced from nearby quarries. Thousands of workers and artisans were employed for the project.`, descriptionHi: `निर्माण स्थल को समतल किया गया और संरचना को सहारा देने के लिए गहरी नींव रखी गई। स्थानीय पत्थर और सामग्री पास की खदानों से प्राप्त की गई।`, icon: "⚒️", material: "Local stone and mortar", materialHi: "स्थानीय पत्थर और मोर्टार", workers: "Thousands of craftsmen and labourers" },
      { phase: 3, title: "Main Structure Rising", titleHi: "मुख्य संरचना का उठना", year: yearBuilt, description: `The main structural elements — walls, pillars, arches and towers — were raised by skilled masons. Traditional architectural techniques were combined with innovations unique to the ${dynasty} style.`, descriptionHi: `मुख्य संरचनात्मक तत्व — दीवारें, स्तंभ, मेहराब और टावर — कुशल राजमिस्त्रियों द्वारा उठाए गए। परंपरागत तकनीकों को ${dynasty} शैली की अनूठी नवाचारों के साथ मिलाया गया।`, icon: "🏛️" },
      { phase: 4, title: "Decorative Artwork & Carving", titleHi: "सजावटी कलाकृति और नक्काशी", year: yearBuilt, description: `Master artisans were brought in to add decorative carvings, paintings, and ornamentation. Floral patterns, geometric designs, and figures from mythology were chiselled into the stone or plaster surfaces.`, descriptionHi: `सजावटी नक्काशी, चित्र और सजावट जोड़ने के लिए उस्ताद कारीगर लाए गए। फूलों के पैटर्न, ज्यामितीय डिजाइन और पौराणिक आकृतियों को पत्थर या प्लास्टर में उकेरा गया।`, icon: "🎨" },
      { phase: 5, title: "Final Consecration", titleHi: "अंतिम प्रतिष्ठा", year: yearBuilt, description: `After years of construction, the monument was formally inaugurated in a grand ceremony. Religious rituals were performed, and the structure was dedicated to its intended purpose — whether as a place of worship, a symbol of power, or a memorial.`, descriptionHi: `वर्षों के निर्माण के बाद, स्मारक को एक भव्य समारोह में औपचारिक रूप से उद्घाटन किया गया। धार्मिक अनुष्ठान किए गए और संरचना को उसके उद्देश्य के लिए समर्पित किया गया।`, icon: "✨" }
    ]
  };
}

export default constructionStories;
