export interface Deity {
  name: string;
  nameHi: string;
  aspect: string;
  aspectHi: string;
  description: string;
  descriptionHi: string;
  modelPath: string;
  color: string;
}

export interface TempleDeityInfo {
  deities: Deity[];
  templeNote?: string;
  templeNoteHi?: string;
}

export const TEMPLE_DEITIES: Record<string, TempleDeityInfo> = {
  "konark-sun-temple": {
    deities: [{
      name: "Surya", nameHi: "सूर्य देव",
      aspect: "God of the Sun", aspectHi: "सूर्य के देवता",
      description: "Surya, the solar deity, rides a chariot pulled by seven horses representing the seven days of the week and the seven colours of light. The entire Konark temple is designed as his grand cosmic chariot.",
      descriptionHi: "सूर्य देव सात घोड़ों वाले रथ पर सवार हैं जो सप्ताह के सात दिनों और प्रकाश के सात रंगों का प्रतीक हैं। पूरा कोणार्क मंदिर उनके भव्य ब्रह्मांडीय रथ के रूप में बनाया गया है।",
      modelPath: "/models/deities/surya.glb",
      color: "from-yellow-400 to-orange-500"
    }]
  },
  "meenakshi-temple": {
    deities: [
      {
        name: "Goddess Meenakshi", nameHi: "देवी मीनाक्षी",
        aspect: "Avatar of Parvati", aspectHi: "पार्वती का अवतार",
        description: "Meenakshi, the fish-eyed goddess, is an avatar of Parvati. She is depicted with a parrot in her left hand and a sugarcane bow. The temple celebrates her divine marriage to Sundareswarar (Shiva).",
        descriptionHi: "मीनाक्षी, मछली जैसी आँखों वाली देवी, पार्वती का अवतार हैं। वे बाएँ हाथ में तोते और गन्ने के धनुष के साथ चित्रित हैं। मंदिर सुंदरेश्वर (शिव) के साथ उनके दिव्य विवाह का उत्सव मनाता है।",
        modelPath: "/models/deities/meenakshi.glb",
        color: "from-pink-400 to-rose-500"
      },
      {
        name: "Sundareswarar (Shiva)", nameHi: "सुंदरेश्वर (शिव)",
        aspect: "Lord Shiva as the handsome one", aspectHi: "सुंदर रूप में भगवान शिव",
        description: "Sundareswarar — 'the handsome lord' — is the form of Shiva worshipped at Meenakshi Amman Temple. He is the divine consort of Meenakshi, their sacred marriage being the central celebration of the temple.",
        descriptionHi: "सुंदरेश्वर — 'सुंदर भगवान' — मीनाक्षी अम्मन मंदिर में पूजे जाने वाले शिव का रूप हैं। वे मीनाक्षी के दिव्य पति हैं, उनका पवित्र विवाह मंदिर का केंद्रीय उत्सव है।",
        modelPath: "/models/deities/shiva.glb",
        color: "from-blue-400 to-indigo-500"
      }
    ]
  },
  "khajuraho-temples": {
    deities: [
      {
        name: "Lord Shiva", nameHi: "भगवान शिव",
        aspect: "The Destroyer & Transformer", aspectHi: "संहारक और परिवर्तक",
        description: "The Kandariya Mahadev temple — the largest at Khajuraho — is dedicated to Shiva. The carvings represent the full spectrum of life and consciousness, with the divine at the centre.",
        descriptionHi: "कंदारिया महादेव मंदिर — खजुराहो का सबसे बड़ा — शिव को समर्पित है। नक्काशियाँ जीवन और चेतना के पूर्ण स्पेक्ट्रम का प्रतिनिधित्व करती हैं, केंद्र में दिव्यता के साथ।",
        modelPath: "/models/deities/shiva.glb",
        color: "from-blue-400 to-indigo-500"
      },
      {
        name: "Lord Vishnu", nameHi: "भगवान विष्णु",
        aspect: "The Preserver", aspectHi: "संरक्षक",
        description: "The Lakshmana temple is dedicated to Vishnu and is one of the finest at Khajuraho, featuring a continuous frieze of sculptures encircling the entire structure depicting Vishnu's ten avatars.",
        descriptionHi: "लक्ष्मण मंदिर विष्णु को समर्पित है और खजुराहो में सबसे उत्कृष्ट है, जिसमें विष्णु के दस अवतारों को दर्शाती मूर्तियों की एक निरंतर भित्ति है।",
        modelPath: "/models/deities/vishnu.glb",
        color: "from-amber-400 to-yellow-500"
      }
    ]
  },
  "mahabalipuram": {
    deities: [
      {
        name: "Lord Shiva", nameHi: "भगवान शिव",
        aspect: "The Shore Temple deity", aspectHi: "किनारे के मंदिर के देवता",
        description: "The Shore Temple at Mahabalipuram has two Shiva shrines and one Vishnu shrine. The Shiva lingam faces east so the first rays of the rising sun illuminate it each morning.",
        descriptionHi: "महाबलीपुरम के किनारे के मंदिर में दो शिव मंदिर और एक विष्णु मंदिर है। शिव लिंग पूर्व की ओर है ताकि उगते सूरज की पहली किरणें हर सुबह उसे प्रकाशित करें।",
        modelPath: "/models/deities/shiva.glb",
        color: "from-blue-400 to-indigo-500"
      }
    ]
  },
  "brihadeeswara-temple": {
    deities: [{
      name: "Lord Shiva (Brihadeeswara)", nameHi: "भगवान शिव (बृहदेश्वर)",
      aspect: "The Great Lord — Shiva as Lingam", aspectHi: "महान भगवान — लिंग रूप में शिव",
      description: "The Brihadeeswara temple houses one of the tallest Shiva lingams in India — 8.7 metres tall — carved from a single granite block. Raja Raja Chola I dedicated this temple to Shiva after his military conquests.",
      descriptionHi: "बृहदेश्वर मंदिर में भारत के सबसे ऊँचे शिव लिंगों में से एक है — 8.7 मीटर ऊँचा — एक ग्रेनाइट पत्थर से उकेरा हुआ। राजराज चोल प्रथम ने अपनी सैन्य विजयों के बाद इस मंदिर को शिव को समर्पित किया।",
      modelPath: "/models/deities/shiva.glb",
      color: "from-blue-400 to-indigo-500"
    }]
  },
  "mahabodhi-temple": {
    deities: [{
      name: "Gautama Buddha", nameHi: "गौतम बुद्ध",
      aspect: "The Enlightened One", aspectHi: "ज्ञान प्राप्त महात्मा",
      description: "The Mahabodhi Temple marks the spot where Siddhartha Gautama attained enlightenment under the Bodhi tree around 500 BCE. The golden statue inside depicts the Buddha in bhumisparsha mudra — touching the earth as witness to his enlightenment.",
      descriptionHi: "महाबोधि मंदिर उस स्थान को चिह्नित करता है जहाँ सिद्धार्थ गौतम ने 500 ईसा पूर्व के आसपास बोधि वृक्ष के नीचे ज्ञान प्राप्त किया था। अंदर की सुनहरी मूर्ति बुद्ध को भूमिस्पर्श मुद्रा में दर्शाती है।",
      modelPath: "/models/deities/buddha.glb",
      color: "from-yellow-400 to-amber-500"
    }]
  },
  "kailasa-temple": {
    deities: [{
      name: "Lord Shiva (Kailasha)", nameHi: "भगवान शिव (कैलाश)",
      aspect: "Shiva as Lord of Mount Kailash", aspectHi: "कैलाश पर्वत के स्वामी शिव",
      description: "The Kailasa temple at Ellora is a tribute to Mount Kailash — Shiva's heavenly abode. The entire temple was carved downward from the cliff top to represent the sacred mountain. The centrepiece is a massive panel of Ravana shaking Kailash.",
      descriptionHi: "एलोरा का कैलास मंदिर माउंट कैलाश — शिव के स्वर्गीय निवास — को समर्पित है। पूरे मंदिर को ऊपर से नीचे चट्टान को काटकर पवित्र पर्वत के रूप में बनाया गया था। केंद्रबिंदु रावण द्वारा कैलाश हिलाने का एक विशाल पैनल है।",
      modelPath: "/models/deities/shiva.glb",
      color: "from-blue-400 to-indigo-500"
    }]
  },
  "ranakpur-temple": {
    deities: [{
      name: "Adinath (Rishabhanatha)", nameHi: "आदिनाथ (ऋषभनाथ)",
      aspect: "First Jain Tirthankara", aspectHi: "प्रथम जैन तीर्थंकर",
      description: "Adinath, the first of the 24 Jain Tirthankaras (ford-makers), is the presiding deity of the Ranakpur temple. He is depicted seated in meditation, recognisable by the bull symbol (lanchhan) on his throne.",
      descriptionHi: "आदिनाथ, 24 जैन तीर्थंकरों में से प्रथम, रणकपुर मंदिर के प्रमुख देवता हैं। वे ध्यान में बैठे दर्शाए जाते हैं, उनके सिंहासन पर बैल चिह्न (लांछन) से पहचाने जाते हैं।",
      modelPath: "/models/deities/tirthankara.glb",
      color: "from-white to-stone-100"
    }]
  },
  "dilwara-temples": {
    deities: [
      {
        name: "Adinath (Vimal Vasahi)", nameHi: "आदिनाथ (विमल वसही)",
        aspect: "First Jain Tirthankara", aspectHi: "प्रथम जैन तीर्थंकर",
        description: "The Vimal Vasahi temple is dedicated to Adinath, the first Tirthankara. Built in 1031 CE by minister Vimal Shah, its white marble interior is considered one of the finest examples of Jain art.",
        descriptionHi: "विमल वसही मंदिर आदिनाथ, प्रथम तीर्थंकर को समर्पित है। 1031 ई. में मंत्री विमल शाह द्वारा निर्मित, इसका सफेद संगमरमर का आंतरिक भाग जैन कला के सर्वोत्तम उदाहरणों में से एक माना जाता है।",
        modelPath: "/models/deities/tirthankara.glb",
        color: "from-white to-stone-100"
      },
      {
        name: "Neminath (Luna Vasahi)", nameHi: "नेमिनाथ (लूना वसही)",
        aspect: "22nd Jain Tirthankara", aspectHi: "22वें जैन तीर्थंकर",
        description: "The Luna Vasahi temple is dedicated to Neminath, the 22nd Tirthankara, whose symbol is the conch shell. Built in 1231 CE, it is considered even more ornate than Vimal Vasahi.",
        descriptionHi: "लूना वसही मंदिर नेमिनाथ, 22वें तीर्थंकर को समर्पित है, जिनका प्रतीक शंख है। 1231 ई. में निर्मित, इसे विमल वसही से भी अधिक अलंकृत माना जाता है।",
        modelPath: "/models/deities/tirthankara.glb",
        color: "from-white to-stone-100"
      }
    ]
  },
  "ramappa-temple": {
    deities: [{
      name: "Lord Shiva (Ramalingeswara)", nameHi: "भगवान शिव (रामलिंगेश्वर)",
      aspect: "Shiva as the Ramalingeswara lingam", aspectHi: "रामलिंगेश्वर लिंग रूप में शिव",
      description: "The presiding deity of the Ramappa temple is a Shiva lingam called Ramalingeswara — named after the sculptor Ramappa who built the temple. The lingam is made of black basalt stone.",
      descriptionHi: "रामप्पा मंदिर का प्रमुख देवता रामलिंगेश्वर शिव लिंग है — जिसका नाम मंदिर बनाने वाले मूर्तिकार रामप्पा के नाम पर है। लिंग काले बेसाल्ट पत्थर से बना है।",
      modelPath: "/models/deities/shiva.glb",
      color: "from-blue-400 to-indigo-500"
    }]
  },
  "hoysaleswara-temple": {
    deities: [{
      name: "Lord Shiva (Hoysaleswara)", nameHi: "भगवान शिव (होयसलेश्वर)",
      aspect: "Shiva as Lord of the Hoysalas", aspectHi: "होयसलों के स्वामी शिव",
      description: "The Hoysaleswara temple is dedicated to Shiva as the patron god of the Hoysala kings. The temple's 240 exterior friezes famously include the Nataraj — Shiva's cosmic dance of creation and destruction.",
      descriptionHi: "होयसलेश्वर मंदिर होयसल राजाओं के संरक्षक देवता के रूप में शिव को समर्पित है। मंदिर की 240 बाहरी भित्तियों में प्रसिद्ध रूप से नटराज — सृष्टि और विनाश का शिव का ब्रह्मांडीय नृत्य — शामिल है।",
      modelPath: "/models/deities/shiva.glb",
      color: "from-blue-400 to-indigo-500"
    }]
  },
  "badami-caves": {
    deities: [
      {
        name: "Lord Vishnu (Trivikrama)", nameHi: "भगवान विष्णु (त्रिविक्रम)",
        aspect: "Vishnu as the Three-Strides", aspectHi: "तीन पग वाले विष्णु",
        description: "Cave 3 at Badami features a monumental sculpture of Trivikrama — Vishnu measuring the universe in three giant strides. It is considered one of the most dramatic Vishnu sculptures in Indian art.",
        descriptionHi: "बादामी की गुफा 3 में त्रिविक्रम की एक विशाल मूर्ति है — विष्णु तीन विशाल पगों में ब्रह्मांड माप रहे हैं। इसे भारतीय कला में सबसे नाटकीय विष्णु मूर्तियों में से एक माना जाता है।",
        modelPath: "/models/deities/vishnu.glb",
        color: "from-amber-400 to-yellow-500"
      },
      {
        name: "Lord Shiva (Nataraja)", nameHi: "भगवान शिव (नटराज)",
        aspect: "Shiva as the Cosmic Dancer", aspectHi: "ब्रह्मांडीय नर्तक शिव",
        description: "Cave 1 at Badami is the earliest Shaiva cave, featuring an 18-armed dancing Shiva (Nataraja) — one of the finest early Nataraja images in India, predating the famous Chola bronzes.",
        descriptionHi: "बादामी की गुफा 1 सबसे प्रारंभिक शैव गुफा है, जिसमें 18 भुजाओं वाले नृत्य करते शिव (नटराज) हैं — भारत में सबसे उत्कृष्ट प्रारंभिक नटराज छवियों में से एक।",
        modelPath: "/models/deities/shiva.glb",
        color: "from-blue-400 to-indigo-500"
      }
    ]
  },
  "lepakshi-temple": {
    deities: [{
      name: "Veerabhadra", nameHi: "वीरभद्र",
      aspect: "The fierce avatar of Shiva", aspectHi: "शिव का उग्र अवतार",
      description: "Veerabhadra is a fierce avatar of Shiva, created from his matted hair when he learned of Sati's death. The Lepakshi temple's main shrine is dedicated to this warrior deity, depicted with multiple arms and weapons.",
      descriptionHi: "वीरभद्र शिव का उग्र अवतार है, जिन्हें सती की मृत्यु की खबर सुनकर शिव ने अपनी जटाओं से बनाया था। लेपाक्षी मंदिर का मुख्य मंदिर इस योद्धा देवता को समर्पित है।",
      modelPath: "/models/deities/shiva.glb",
      color: "from-red-500 to-orange-600"
    }]
  },
  "tirupati-temple": {
    deities: [{
      name: "Lord Venkateswara", nameHi: "भगवान वेंकटेश्वर",
      aspect: "Vishnu as Balaji — Lord of Tirupati", aspectHi: "बालाजी — तिरुपति के स्वामी",
      description: "Venkateswara, known as Balaji or Srinivasa, is a form of Vishnu worshipped at the wealthiest temple on earth. He is depicted standing, dressed in black robes, eyes covered with Chandan to protect devotees from his divine radiance.",
      descriptionHi: "वेंकटेश्वर, जिन्हें बालाजी या श्रीनिवास के नाम से जाना जाता है, पृथ्वी पर सबसे धनी मंदिर में पूजे जाने वाले विष्णु का एक रूप है। वे काले वस्त्रों में खड़े दर्शाए जाते हैं, आँखें चंदन से ढकी होती हैं।",
      modelPath: "/models/deities/venkateswara.glb",
      color: "from-amber-600 to-yellow-700"
    }]
  },
  "rameswaram-temple": {
    deities: [{
      name: "Lord Ramanathaswamy (Shiva)", nameHi: "भगवान रामनाथस्वामी (शिव)",
      aspect: "Shiva as worshipped by Lord Rama", aspectHi: "भगवान राम द्वारा पूजित शिव",
      description: "Ramanathaswamy is the form of Shiva worshipped at Rameswaram. According to legend, Lord Rama himself installed the Shiva lingam here to atone for killing Ravana. There are two lingams — one made of sand by Sita, one brought from Kailash by Hanuman.",
      descriptionHi: "रामनाथस्वामी रामेश्वरम में पूजे जाने वाले शिव का रूप है। किंवदंती के अनुसार, भगवान राम ने स्वयं रावण को मारने के प्रायश्चित के लिए यहाँ शिव लिंग स्थापित किया था।",
      modelPath: "/models/deities/shiva.glb",
      color: "from-blue-400 to-indigo-500"
    }]
  },
  "orchha-fort": {
    deities: [{
      name: "Lord Ram Raja", nameHi: "भगवान राम राजा",
      aspect: "Lord Ram worshipped as a king", aspectHi: "राजा के रूप में पूजित भगवान राम",
      description: "Ram Raja temple is the only temple in India where Ram is worshipped as a king with full state honours — a royal salute, police guard, and royal flag. The idol of Ram was originally placed in the palace by queen Ganeshkuwari and refused to be moved.",
      descriptionHi: "राम राजा मंदिर भारत में एकमात्र मंदिर है जहाँ राम की राजा के रूप में पूर्ण राजकीय सम्मान — शाही सलामी, पुलिस गार्ड और राजकीय ध्वज — के साथ पूजा होती है।",
      modelPath: "/models/deities/ram.glb",
      color: "from-green-400 to-emerald-500"
    }]
  },
  "lingaraja-temple": {
    deities: [{
      name: "Lord Lingaraja (Shiva-Vishnu)", nameHi: "भगवान लिंगराज (हरिहर)",
      aspect: "Harihara — combined form of Shiva and Vishnu", aspectHi: "हरिहर — शिव और विष्णु का संयुक्त रूप",
      description: "Lingaraja is unique — the presiding deity is Harihara, a combined form of both Shiva (Hara) and Vishnu (Hari). The lingam is considered svayambhu (self-manifested) and is bathed daily in milk, water and bhang (cannabis).",
      descriptionHi: "लिंगराज अनूठा है — प्रमुख देवता हरिहर हैं, शिव (हर) और विष्णु (हरि) दोनों का संयुक्त रूप। लिंग को स्वयंभू (स्वयं प्रकट) माना जाता है और प्रतिदिन दूध, जल और भाँग से स्नान कराया जाता है।",
      modelPath: "/models/deities/shiva.glb",
      color: "from-purple-400 to-indigo-500"
    }]
  },
  "jagannath-temple": {
    deities: [{
      name: "Lord Jagannath", nameHi: "भगवान जगन्नाथ",
      aspect: "Vishnu as Lord of the Universe", aspectHi: "जगत के स्वामी विष्णु",
      description: "Jagannath is a unique idol — unlike any classical Hindu image. He is depicted as a round-eyed, armless deity made of sacred neem wood (Daru Brahma), painted black with large white eyes and red lips. The idol is ritually replaced every 12-19 years.",
      descriptionHi: "जगन्नाथ एक अनूठी मूर्ति है — किसी भी शास्त्रीय हिंदू प्रतिमा के विपरीत। वे गोल आँखों वाले, बाहुहीन देवता के रूप में पवित्र नीम की लकड़ी (दारु ब्रह्म) से बने हैं, काले रंग से पुते हैं, बड़ी सफेद आँखें और लाल होंठ हैं।",
      modelPath: "/models/deities/jagannath.glb",
      color: "from-yellow-500 to-amber-600"
    }]
  },
  "kamakhya-temple": {
    deities: [{
      name: "Goddess Kamakhya", nameHi: "देवी कामाख्या",
      aspect: "Shakti — the supreme feminine energy", aspectHi: "शक्ति — सर्वोच्च स्त्री शक्ति",
      description: "Kamakhya is one of the 51 Shakti Peethas — the most powerful sites of goddess worship in India. Uniquely, there is no idol here; the goddess is worshipped as a natural rock cleft (yoni) representing the creative power of the universe.",
      descriptionHi: "कामाख्या 51 शक्तिपीठों में से एक है — भारत में देवी पूजा के सबसे शक्तिशाली स्थल। विशेष रूप से, यहाँ कोई मूर्ति नहीं है; देवी की पूजा एक प्राकृतिक चट्टानी दरार (योनि) के रूप में होती है।",
      modelPath: "/models/deities/kamakhya.glb",
      color: "from-red-500 to-pink-600"
    }]
  },
  "modhera-sun-temple": {
    deities: [{
      name: "Surya (Modhera)", nameHi: "सूर्य देव (मोढेरा)",
      aspect: "God of the Sun", aspectHi: "सूर्य के देवता",
      description: "The Modhera Sun Temple is dedicated to the sun god Surya. The temple is so precisely aligned that at sunrise on the equinoxes, the sun's rays fall directly on the Surya idol in the inner sanctum. The idol was removed by Mahmud of Ghazni during his raid.",
      descriptionHi: "मोढेरा सूर्य मंदिर सूर्य देव को समर्पित है। मंदिर इतनी सटीकता से संरेखित है कि विषुव दिवसों पर उगते सूरज की किरणें सीधे गर्भगृह में सूर्य की मूर्ति पर पड़ती हैं।",
      modelPath: "/models/deities/surya.glb",
      color: "from-yellow-400 to-orange-500"
    }]
  },
  "somnath-temple": {
    deities: [{
      name: "Lord Somnath (Shiva)", nameHi: "भगवान सोमनाथ (शिव)",
      aspect: "Shiva as Jyotirlinga — Lord of the Moon", aspectHi: "ज्योतिर्लिंग — चंद्रमा के स्वामी शिव",
      description: "Somnath is the first and most sacred of the 12 Jyotirlingas — self-manifested lingams of light. The name means 'Lord of the Moon' — the moon god Soma is said to have built the original temple. The temple has been destroyed and rebuilt 17 times.",
      descriptionHi: "सोमनाथ 12 ज्योतिर्लिंगों में से पहला और सबसे पवित्र है — प्रकाश के स्वयं-प्रकट लिंग। नाम का अर्थ है 'चंद्रमा के स्वामी' — चंद्र देव सोम ने मूल मंदिर बनाया था। मंदिर 17 बार नष्ट और पुनर्निर्मित किया गया है।",
      modelPath: "/models/deities/shiva.glb",
      color: "from-blue-400 to-indigo-500"
    }]
  }
};
