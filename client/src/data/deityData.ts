export interface DeityInfo {
  name: string;
  nameHi: string;
  description: string;
  descriptionHi: string;
  imageUrl: string;
}

export const DEITY_DATA: Record<string, DeityInfo> = {
  "konark-sun-temple": {
    name: "Surya — The Sun God",
    nameHi: "सूर्य — सूर्य देव",
    description:
      "Surya is the solar deity of the Hindu pantheon, revered as the source of all life and light. At Konark, the entire temple is designed as his celestial chariot with 24 stone wheels and 7 horses. The presiding idol depicts Surya in full royal regalia with lotus flowers in each hand.",
    descriptionHi:
      "सूर्य हिंदू पंथ के सौर देव हैं, जिन्हें समस्त जीवन और प्रकाश का स्रोत माना जाता है। कोणार्क में पूरा मंदिर 24 पत्थर के पहियों और 7 घोड़ों के साथ उनके दिव्य रथ के रूप में बनाया गया है। मुख्य मूर्ति में सूर्य को दोनों हाथों में कमल लिए पूर्ण राजकीय वेशभूषा में दर्शाया गया है।",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Surya-from-Konarak.jpg/300px-Surya-from-Konarak.jpg",
  },
  "lotus-temple": {
    name: "The One God (Bahá'í Faith)",
    nameHi: "एक ईश्वर (बहाई धर्म)",
    description:
      "The Lotus Temple belongs to the Bahá'í Faith, which believes in one God who has revealed Himself through all major religions. There are no idols or images — the nine-pointed star and the lotus flower symbolise unity of all faiths. All are welcome to pray or meditate in silence.",
    descriptionHi:
      "कमल मंदिर बहाई धर्म का है, जो एक ईश्वर में विश्वास करता है जिन्होंने सभी प्रमुख धर्मों के माध्यम से खुद को प्रकट किया है। यहाँ कोई मूर्ति या चित्र नहीं है — नौ-नुकीला तारा और कमल का फूल सभी धर्मों की एकता का प्रतीक हैं। सभी लोग मौन में प्रार्थना या ध्यान करने के लिए स्वागत के पात्र हैं।",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Ik_Onkar.svg/240px-Ik_Onkar.svg.png",
  },
  "golden-temple": {
    name: "Waheguru — The Wonderful Lord",
    nameHi: "वाहेगुरु — अद्भुत प्रभु",
    description:
      "Sikhism has no idol or image of God. The eternal scripture, the Guru Granth Sahib, is the living Guru and the central focus of worship at the Golden Temple. Waheguru — meaning 'Wonderful Lord' — is recited in prayer. The Golden Temple stands as the Darbar Sahib, the 'Court of the Lord.'",
    descriptionHi:
      "सिख धर्म में ईश्वर की कोई मूर्ति या तस्वीर नहीं है। शाश्वत ग्रंथ, गुरु ग्रंथ साहिब, जीवित गुरु हैं और स्वर्ण मंदिर में पूजा का केंद्र हैं। 'वाहेगुरु' — अर्थात 'अद्भुत प्रभु' — प्रार्थना में उच्चारित किया जाता है। स्वर्ण मंदिर दरबार साहिब अर्थात 'प्रभु का दरबार' के रूप में खड़ा है।",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Ik_Onkar.svg/240px-Ik_Onkar.svg.png",
  },
  "meenakshi-temple": {
    name: "Meenakshi Amman — The Fish-Eyed Goddess",
    nameHi: "मीनाक्षी अम्मन — मछली जैसी आँखों वाली देवी",
    description:
      "Meenakshi is a form of Parvati, the divine consort of Lord Shiva, who is also enshrined here as Sundareswarar. According to legend, Meenakshi was born with three breasts and ruled Madurai as a warrior queen. When she met Shiva, her third breast vanished — a sign she had found her divine husband.",
    descriptionHi:
      "मीनाक्षी पार्वती का एक रूप हैं, भगवान शिव की दिव्य पत्नी, जो यहाँ सुंदरेश्वर के रूप में विराजमान हैं। किंवदंती के अनुसार, मीनाक्षी तीन स्तनों के साथ पैदा हुईं और एक योद्धा रानी के रूप में मदुरई पर राज किया। जब वे शिव से मिलीं, तो उनका तीसरा स्तन गायब हो गया — एक संकेत कि उन्हें अपना दिव्य पति मिल गया।",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Meenakshi_Sundareswarar_1.jpg/300px-Meenakshi_Sundareswarar_1.jpg",
  },
  "khajuraho-temples": {
    name: "Shiva — Lord of the Cosmos",
    nameHi: "शिव — ब्रह्मांड के स्वामी",
    description:
      "The Western Group temples at Khajuraho are primarily dedicated to Shiva and Vishnu. Kandariya Mahadev, the largest temple, enshrines a magnificent Shiva lingam. The erotic sculptures that surround the outer walls represent the spectrum of human life — including worldly pleasures — before one enters the divine sanctum.",
    descriptionHi:
      "खजुराहो के पश्चिमी समूह के मंदिर मुख्यतः शिव और विष्णु को समर्पित हैं। सबसे बड़ा मंदिर कंदारिया महादेव में एक भव्य शिव लिंग है। बाहरी दीवारों पर कामुक मूर्तियाँ मानव जीवन के विभिन्न पहलुओं — सांसारिक सुखों सहित — को दर्शाती हैं, जिनसे होकर कोई दिव्य गर्भगृह में प्रवेश करता है।",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Shiva_Nataraja_Mus%C3%A9e_Guimet_25971.jpg/240px-Shiva_Nataraja_Mus%C3%A9e_Guimet_25971.jpg",
  },
  "mahabalipuram": {
    name: "Shiva — Somaskanda",
    nameHi: "शिव — सोमस्कंद",
    description:
      "The Shore Temple's main sanctum enshrines Shiva in the Somaskanda form — Shiva (So) with Uma/Parvati (ma) and their son Skanda (kanda). A second shrine faces the sea and honours Vishnu as Anantashayana. At dawn and dusk the sun's rays illuminated the deity through the east-facing entrance — a masterstroke of Pallava planning.",
    descriptionHi:
      "शोर मंदिर के मुख्य गर्भगृह में शिव को सोमस्कंद रूप में स्थापित किया गया है — शिव (सो), उमा/पार्वती (म) और उनके पुत्र स्कंद (कंद) के साथ। एक अन्य मंदिर समुद्र की ओर मुख किए हुए अनंतशयन के रूप में विष्णु का सम्मान करता है। भोर और संध्याकाल में सूर्य की किरणें पूर्व-मुखी प्रवेश द्वार से देवता को प्रकाशित करती थीं।",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Shiva_Nataraja_Mus%C3%A9e_Guimet_25971.jpg/240px-Shiva_Nataraja_Mus%C3%A9e_Guimet_25971.jpg",
  },
  "brihadeeswara-temple": {
    name: "Brihadeeswara — The Great Shiva",
    nameHi: "बृहदेश्वर — महान शिव",
    description:
      "The Brihadeeswara temple enshrines one of the largest Shiva lingams in India, nearly 4 metres tall. Known as Peruvudaiyar — 'the Great One' — this lingam is adorned with a golden crown weighing over 80 kg. The sanctum faces east so the first light of dawn falls directly on the deity.",
    descriptionHi:
      "बृहदेश्वर मंदिर में भारत के सबसे बड़े शिव लिंगों में से एक है, जो लगभग 4 मीटर ऊँचा है। 'पेरुवुडैयार' — 'महान' — के नाम से जाना जाने वाला यह लिंग 80 किलो से अधिक वजन के सोने के मुकुट से सजाया गया है। गर्भगृह पूर्व की ओर मुख किए हुए है ताकि भोर की पहली रोशनी सीधे देवता पर पड़े।",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Shiva_Nataraja_Mus%C3%A9e_Guimet_25971.jpg/240px-Shiva_Nataraja_Mus%C3%A9e_Guimet_25971.jpg",
  },
  "mahabodhi-temple": {
    name: "Gautama Buddha — The Enlightened One",
    nameHi: "गौतम बुद्ध — ज्ञानी",
    description:
      "Prince Siddhartha Gautama became the Buddha — 'The Enlightened One' — under the sacred Bodhi Tree at this very site around 528 BCE. The Mahabodhi Temple enshrines a golden image of the Buddha in the bhumisparsha mudra — touching the earth as witness to his enlightenment. This is the holiest site in Buddhism.",
    descriptionHi:
      "राजकुमार सिद्धार्थ गौतम लगभग 528 ईसा पूर्व इसी स्थान पर पवित्र बोधि वृक्ष के नीचे बुद्ध — 'ज्ञानी' — बने। महाबोधि मंदिर में बुद्ध की भूमिस्पर्श मुद्रा में — अपने ज्ञान के साक्षी के रूप में पृथ्वी को स्पर्श करते हुए — एक सोने की प्रतिमा है। यह बौद्ध धर्म का सबसे पवित्र स्थल है।",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Gautama_Buddha_in_Sarnath_Museum_%28Dhammajak_Mutra%29.jpg/300px-Gautama_Buddha_in_Sarnath_Museum_%28Dhammajak_Mutra%29.jpg",
  },
  "kailasa-temple": {
    name: "Shiva — Lord of Mount Kailash",
    nameHi: "शिव — कैलाश पर्वत के स्वामी",
    description:
      "The Kailasa Temple is dedicated to Shiva as the ruler of Mount Kailash — his mythological abode in the Himalayas. The entire temple, carved top-down from a single basalt cliff, represents Mount Kailash itself. The main sanctuary enshrines a large Shiva lingam, while the entrance tower depicts Shiva's wedding procession.",
    descriptionHi:
      "कैलाश मंदिर शिव को कैलाश पर्वत के शासक के रूप में समर्पित है — हिमालय में उनका पौराणिक निवास। एकल बेसाल्ट चट्टान से ऊपर से नीचे तक तराशा गया पूरा मंदिर कैलाश पर्वत का प्रतिनिधित्व करता है। मुख्य गर्भगृह में एक बड़ा शिव लिंग है, जबकि प्रवेश टॉवर शिव की बारात को दर्शाता है।",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Shiva_Nataraja_Mus%C3%A9e_Guimet_25971.jpg/240px-Shiva_Nataraja_Mus%C3%A9e_Guimet_25971.jpg",
  },
  "ranakpur-temple": {
    name: "Adinath — The First Tirthankara",
    nameHi: "आदिनाथ — पहले तीर्थंकर",
    description:
      "Adinath (also called Rishabhanatha) is the first of the 24 Jain Tirthankaras — the enlightened teachers who show the path to liberation. The Ranakpur temple is dedicated to him. His idol is carved in white marble and depicted in the padmasana (lotus) pose of meditation, symbolising complete detachment from the material world.",
    descriptionHi:
      "आदिनाथ (ऋषभनाथ भी कहलाते हैं) 24 जैन तीर्थंकरों में से पहले हैं — ज्ञानी शिक्षक जो मोक्ष का मार्ग दिखाते हैं। रणकपुर मंदिर उन्हें समर्पित है। उनकी मूर्ति सफेद संगमरमर में तराशी गई है और ध्यान की पद्मासन मुद्रा में दर्शाई गई है, जो भौतिक संसार से पूर्ण विरक्ति का प्रतीक है।",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Rishabhanatha.jpg/300px-Rishabhanatha.jpg",
  },
  "dilwara-temples": {
    name: "Neminath & Adinath — Jain Tirthankaras",
    nameHi: "नेमिनाथ और आदिनाथ — जैन तीर्थंकर",
    description:
      "Dilwara's five temples are dedicated to different Jain Tirthankaras. The Vimal Vasahi (1031 CE) is dedicated to Adinath, the first Tirthankara; the Luna Vasahi (1231 CE) to Neminath, the 22nd. These marble wonders feature ceilings so intricately carved that pilgrims still wonder how craftsmen created them without modern tools.",
    descriptionHi:
      "दिलवाड़ा के पाँच मंदिर विभिन्न जैन तीर्थंकरों को समर्पित हैं। विमल वसही (1031 ई.) पहले तीर्थंकर आदिनाथ को; लूना वसही (1231 ई.) 22वें तीर्थंकर नेमिनाथ को समर्पित है। इन संगमरमर के आश्चर्यों में इतनी जटिल रूप से तराशी गई छतें हैं कि तीर्थयात्री अभी भी सोचते हैं कि शिल्पकारों ने आधुनिक उपकरणों के बिना उन्हें कैसे बनाया।",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Rishabhanatha.jpg/300px-Rishabhanatha.jpg",
  },
  "ramappa-temple": {
    name: "Ramalingeswara — Shiva of the Lake",
    nameHi: "रामलिंगेश्वर — झील के शिव",
    description:
      "The Ramappa Temple enshrines Lord Shiva as Ramalingeswara, named after the sculptor Ramappa who built it — one of the rare cases where a temple bears the builder's name rather than the deity's. The presiding lingam is said to have appeared naturally (swayambhu) in the centre of the Ramappa lake that surrounds the complex.",
    descriptionHi:
      "रामप्पा मंदिर में भगवान शिव को रामलिंगेश्वर के रूप में स्थापित किया गया है, जिसका नाम मूर्तिकार रामप्पा के नाम पर रखा गया — यह उन दुर्लभ मामलों में से एक है जहाँ मंदिर देवता की बजाय निर्माता का नाम धारण करता है। माना जाता है कि मुख्य लिंग परिसर को घेरने वाली रामप्पा झील के केंद्र में स्वयंभू प्रकट हुआ था।",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Shiva_Nataraja_Mus%C3%A9e_Guimet_25971.jpg/240px-Shiva_Nataraja_Mus%C3%A9e_Guimet_25971.jpg",
  },
  "hoysaleswara-temple": {
    name: "Hoysaleswara & Shanthaleswara — Twin Shivas",
    nameHi: "होयसलेश्वर और शांतलेश्वर — जुड़वाँ शिव",
    description:
      "The temple has two interconnected shrines — Hoysaleswara, dedicated to Shiva and named after the Hoysala king Vishnuvardhana, and Shanthaleswara, named for his queen Shanthala. Each shrine has a large Nandi (sacred bull) facing the Shiva lingam inside. Over 240 friezes of elephants, horses, makaras and deities cover the outer walls.",
    descriptionHi:
      "मंदिर में दो परस्पर जुड़े हुए गर्भगृह हैं — होयसलेश्वर, जो शिव को समर्पित है और होयसल राजा विष्णुवर्धन के नाम पर है, और शांतलेश्वर, जो उनकी रानी शांतला के नाम पर है। प्रत्येक गर्भगृह में एक बड़ा नंदी (पवित्र बैल) अंदर के शिव लिंग की ओर मुख किए हुए है। बाहरी दीवारों पर हाथियों, घोड़ों, मकरों और देवताओं की 240 से अधिक पट्टियाँ हैं।",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Shiva_Nataraja_Mus%C3%A9e_Guimet_25971.jpg/240px-Shiva_Nataraja_Mus%C3%A9e_Guimet_25971.jpg",
  },
  "badami-caves": {
    name: "Vishnu & Shiva — Chalukyan Deities",
    nameHi: "विष्णु और शिव — चालुक्य देवता",
    description:
      "The Badami caves house shrines to both Shiva (Cave 1) and Vishnu (Cave 3, the largest). Cave 3's stunning 18-arm Vishnu as Trivikrama — depicting the cosmic stride that measured all three worlds — is considered a masterpiece of early Deccan sculpture. Cave 4 is a Jain cave dedicated to the Tirthankaras.",
    descriptionHi:
      "बादामी की गुफाओं में शिव (गुफा 1) और विष्णु (गुफा 3, सबसे बड़ी) दोनों के मंदिर हैं। गुफा 3 में 18-भुजा वाले विष्णु की आश्चर्यजनक त्रिविक्रम प्रतिमा — तीनों लोकों को नापने वाले ब्रह्मांडीय कदम को दर्शाती है — को प्रारंभिक दक्कन मूर्तिकला की उत्कृष्ट कृति माना जाता है।",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visnumurti.JPG/300px-Visnumurti.JPG",
  },
  "lepakshi-temple": {
    name: "Veerabhadra — The Fierce Avatar of Shiva",
    nameHi: "वीरभद्र — शिव का उग्र अवतार",
    description:
      "Veerabhadra is a fierce deity created by Shiva from a lock of his hair after Sati's self-immolation. At Lepakshi, the massive mural of Veerabhadra (7 × 5 metres) on the ceiling of the Natya Mandapa is one of the largest single-panel murals in the world. He is depicted with multiple arms carrying weapons, symbolising divine wrath against injustice.",
    descriptionHi:
      "वीरभद्र शिव द्वारा सती के आत्मदाह के बाद अपनी जटा से उत्पन्न एक उग्र देवता हैं। लेपाक्षी में, नाट्य मंडप की छत पर वीरभद्र का विशाल भित्तिचित्र (7 × 5 मीटर) दुनिया के सबसे बड़े एकल-पैनल भित्तिचित्रों में से एक है। उन्हें अन्याय के विरुद्ध दैवीय क्रोध का प्रतीक, कई भुजाओं में हथियार लिए दर्शाया गया है।",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Shiva_Nataraja_Mus%C3%A9e_Guimet_25971.jpg/240px-Shiva_Nataraja_Mus%C3%A9e_Guimet_25971.jpg",
  },
  "tirupati-temple": {
    name: "Venkateswara — Lord of the Seven Hills",
    nameHi: "वेंकटेश्वर — सात पहाड़ियों के स्वामी",
    description:
      "Lord Venkateswara is a form of Vishnu, believed to have descended to Earth during the Kali Yuga to save humanity. His eyes are kept veiled with a special cloth because his direct gaze is said to be so powerful it could dissolve the cosmos. Devotees donate their hair as an offering — the temple receives over 50 tonnes of hair every month.",
    descriptionHi:
      "भगवान वेंकटेश्वर विष्णु का एक रूप हैं, जिनके बारे में माना जाता है कि वे कलियुग में मानवता को बचाने के लिए पृथ्वी पर अवतरित हुए। उनकी आँखें एक विशेष कपड़े से ढकी रहती हैं क्योंकि माना जाता है कि उनकी सीधी नज़र इतनी शक्तिशाली है कि ब्रह्मांड को भंग कर सकती है। भक्त अपने बाल भेंट के रूप में दान करते हैं — मंदिर को हर महीने 50 टन से अधिक बाल मिलते हैं।",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Venkateswara_swamy_vaari_devasthanam_Tirumala.jpg/300px-Venkateswara_swamy_vaari_devasthanam_Tirumala.jpg",
  },
  "rameswaram-temple": {
    name: "Ramanathaswamy — Shiva Worshipped by Rama",
    nameHi: "रामनाथस्वामी — राम द्वारा पूजित शिव",
    description:
      "Lord Rama is said to have worshipped a Shiva lingam at this spot to seek absolution after slaying Ravana (who was a Brahmin). Ramanathaswamy is thus Shiva blessed by Rama himself. The temple houses two lingams — the sand lingam made by Sita and the stone lingam brought by Hanuman from Kailash. Rama decreed Sita's lingam be worshipped first.",
    descriptionHi:
      "माना जाता है कि भगवान राम ने रावण (जो एक ब्राह्मण था) के वध के बाद प्रायश्चित के लिए इसी स्थान पर एक शिव लिंग की पूजा की थी। रामनाथस्वामी इस प्रकार राम द्वारा आशीर्वादित शिव हैं। मंदिर में दो लिंग हैं — सीता द्वारा बनाया गया रेत का लिंग और हनुमान द्वारा कैलाश से लाया गया पत्थर का लिंग। राम ने आदेश दिया कि सीता के लिंग की पहले पूजा हो।",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Shiva_Nataraja_Mus%C3%A9e_Guimet_25971.jpg/240px-Shiva_Nataraja_Mus%C3%A9e_Guimet_25971.jpg",
  },
  "orchha-fort": {
    name: "Ram Raja — The King-God of Orchha",
    nameHi: "राम राजा — ओरछा के राजा-देव",
    description:
      "Orchha holds a unique distinction: Lord Rama is worshipped here as a king (Raja), not merely as a god. The royal palace was consecrated as a temple after Queen Ganesh Kunwari brought a Rama idol from Ayodhya that refused to move. Ram Raja is the only deity in India given a state guard of honour — armed police present arms before him every morning.",
    descriptionHi:
      "ओरछा एक अनूठी विशिष्टता रखता है: भगवान राम की यहाँ एक राजा (राजा) के रूप में पूजा की जाती है, न केवल एक देव के रूप में। महारानी गणेश कुंवरि अयोध्या से एक राम मूर्ति लाईं जो हिलने से इनकार कर दी, इसके बाद राजमहल को मंदिर के रूप में प्रतिष्ठित किया गया। राम राजा भारत के एकमात्र देवता हैं जिन्हें राज्य का सलामी गारद प्रदान किया जाता है।",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Rama_and_Sita.jpg/300px-Rama_and_Sita.jpg",
  },
  "lingaraja-temple": {
    name: "Lingaraja — Harihara, Lord of Three Worlds",
    nameHi: "लिंगराज — हरिहर, तीनों लोकों के स्वामी",
    description:
      "The Lingaraja temple enshrines a unique swayambhu (self-manifested) lingam of Shiva known as Lingaraja — 'Lord of the Linga.' Unusually, he is worshipped as Harihara — a fusion of Shiva and Vishnu in one form. Devotees offer Shiva's sacred bilva leaves and Vishnu's sacred tulsi to the same deity, symbolising the unity of all Hindu gods.",
    descriptionHi:
      "लिंगराज मंदिर में लिंगराज के रूप में जाने जाने वाले शिव के एक अनूठे स्वयंभू लिंग को स्थापित किया गया है। असामान्य रूप से, उनकी हरिहर के रूप में पूजा की जाती है — एक ही रूप में शिव और विष्णु का मिलन। भक्त एक ही देवता को शिव के पवित्र बेल पत्र और विष्णु की पवित्र तुलसी चढ़ाते हैं, जो सभी हिंदू देवताओं की एकता का प्रतीक है।",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Shiva_Nataraja_Mus%C3%A9e_Guimet_25971.jpg/240px-Shiva_Nataraja_Mus%C3%A9e_Guimet_25971.jpg",
  },
  "jagannath-temple": {
    name: "Jagannath — Lord of the Universe",
    nameHi: "जगन्नाथ — जगत के स्वामी",
    description:
      "Lord Jagannath is a form of Vishnu/Krishna. His wooden idol, along with his brother Balabhadra and sister Subhadra, has large round eyes and incomplete limbs — representing the universal, formless nature of God. Every 12–19 years, the idols are replaced in a secret ritual called Nabakalebara, where the divine spark (brahma padartha) is transferred to the new idols.",
    descriptionHi:
      "भगवान जगन्नाथ विष्णु/कृष्ण का एक रूप हैं। उनकी लकड़ी की मूर्ति, उनके भाई बलभद्र और बहन सुभद्रा के साथ, बड़ी गोल आँखें और अधूरे अंग हैं — ईश्वर की सार्वभौमिक, निराकार प्रकृति का प्रतिनिधित्व करते हैं। हर 12–19 वर्षों में, नबकलेबर नामक एक गुप्त अनुष्ठान में मूर्तियों को बदला जाता है।",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Jagannath_idol.jpg/300px-Jagannath_idol.jpg",
  },
  "kamakhya-temple": {
    name: "Kamakhya Devi — The Goddess of Desire",
    nameHi: "कामाख्या देवी — कामना की देवी",
    description:
      "Kamakhya is one of the most powerful Shakti peethas — sites where parts of the goddess Sati's body fell after Vishnu dismembered her to stop Shiva's grief. The temple enshrines the yoni (womb) of Sati rather than an idol. Once a year during the Ambubachi festival, the goddess is said to menstruate — the Brahmaputra river near the temple turns red and the temple closes for three days.",
    descriptionHi:
      "कामाख्या सबसे शक्तिशाली शक्तिपीठों में से एक है — वे स्थान जहाँ देवी सती के शरीर के अंग विष्णु द्वारा शिव के शोक को रोकने के लिए विखंडित करने के बाद गिरे थे। मंदिर में किसी मूर्ति की बजाय सती की योनि (गर्भ) स्थापित है। अंबुबाची उत्सव के दौरान वर्ष में एक बार, देवी के मासिक धर्म के समय मंदिर के पास ब्रह्मपुत्र नदी लाल हो जाती है और मंदिर तीन दिनों के लिए बंद हो जाता है।",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Kamakhya_devi.jpg/300px-Kamakhya_devi.jpg",
  },
  "modhera-sun-temple": {
    name: "Surya — The Vedic Sun God",
    nameHi: "सूर्य — वैदिक सूर्य देव",
    description:
      "Surya at Modhera is depicted in the Maga priest style — wearing Central Asian boots and a belt, reflecting the strong influence of Zoroastrian sun worship that merged with Hinduism. At the equinoxes the rising sun's rays pass directly through the eastern gate and illuminate the Surya idol in the innermost sanctum — a feat of precise astronomical planning.",
    descriptionHi:
      "मोधेरा में सूर्य को मग पुजारी शैली में चित्रित किया गया है — मध्य एशियाई जूते और बेल्ट पहने हुए, जो जोरास्ट्रियन सूर्य पूजा के मजबूत प्रभाव को दर्शाता है जो हिंदू धर्म में मिल गया। विषुव पर उगते सूर्य की किरणें पूर्वी द्वार से होकर सीधे सबसे अंदरूनी गर्भगृह में सूर्य प्रतिमा को प्रकाशित करती हैं।",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Surya-from-Konarak.jpg/300px-Surya-from-Konarak.jpg",
  },
  "somnath-temple": {
    name: "Somnath — The First Jyotirlinga",
    nameHi: "सोमनाथ — प्रथम ज्योतिर्लिंग",
    description:
      "Somnath is one of the 12 Jyotirlingas — self-manifested columns of divine light that mark Shiva's supreme presence. The name means 'Lord of the Moon' (Soma = Moon, Nath = Lord). The Moon god is said to have worshipped Shiva here after being cursed. This temple has been destroyed and rebuilt 17 times, making it a symbol of Hindu spiritual resilience.",
    descriptionHi:
      "सोमनाथ 12 ज्योतिर्लिंगों में से एक है — शिव की सर्वोच्च उपस्थिति को चिह्नित करने वाले दिव्य प्रकाश के स्वयंभू स्तंभ। इस नाम का अर्थ है 'चंद्रमा के स्वामी' (सोम = चंद्रमा, नाथ = स्वामी)। माना जाता है कि चंद्र देव ने शाप मिलने के बाद यहाँ शिव की पूजा की थी। यह मंदिर 17 बार नष्ट और पुनर्निर्मित हुआ है, जो इसे हिंदू आध्यात्मिक लचीलेपन का प्रतीक बनाता है।",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Shiva_Nataraja_Mus%C3%A9e_Guimet_25971.jpg/240px-Shiva_Nataraja_Mus%C3%A9e_Guimet_25971.jpg",
  },
};
