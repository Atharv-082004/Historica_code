export interface HistoricalEvent {
  month: number;
  day: number;
  monumentId: string;
  year: string;
  event: string;
  eventHi: string;
  emoji: string;
}

export const ON_THIS_DAY: HistoricalEvent[] = [
  // January
  { month: 1, day: 2,  monumentId: "taj-mahal",        year: "1653", emoji: "🕌",
    event: "The Taj Mahal's main mausoleum chamber was sealed and consecrated, completing the central structure.",
    eventHi: "ताज महल के मुख्य मकबरे कक्ष को सील और पवित्र किया गया, जिससे केंद्रीय संरचना पूरी हुई।" },
  { month: 1, day: 7,  monumentId: "red-fort",          year: "1648", emoji: "🏰",
    event: "Emperor Shah Jahan formally moved his court from Agra to the newly built Red Fort in Shahjahanabad.",
    eventHi: "सम्राट शाहजहाँ ने अपना दरबार आगरा से नवनिर्मित लाल किले में स्थानांतरित किया।" },
  { month: 1, day: 14, monumentId: "konark-sun-temple", year: "1250", emoji: "☀️",
    event: "The Konark Sun Temple was aligned so its main entrance faces the rising Makara Sankranti sun on this date.",
    eventHi: "कोणार्क सूर्य मंदिर का मुख्य प्रवेश द्वार मकर संक्रांति के उगते सूर्य के सामने संरेखित किया गया।" },
  { month: 1, day: 20, monumentId: "golden-temple",     year: "1764", emoji: "✨",
    event: "The Sikh army recaptured Harmandir Sahib (Golden Temple) and repaired damage from the Afghan invasion.",
    eventHi: "सिख सेना ने हरमंदिर साहिब पर पुनः अधिकार कर लिया और अफगान आक्रमण से हुई क्षति की मरम्मत की।" },
  { month: 1, day: 26, monumentId: "red-fort",          year: "1950", emoji: "🏰",
    event: "India's first Republic Day was celebrated nationally; the Red Fort's ramparts became an enduring symbol of sovereignty.",
    eventHi: "भारत का पहला गणतंत्र दिवस राष्ट्रीय स्तर पर मनाया गया; लाल किले की प्राचीर संप्रभुता का स्थायी प्रतीक बनी।" },

  // February
  { month: 2, day: 4,  monumentId: "golden-temple",     year: "1604", emoji: "✨",
    event: "Guru Arjan Dev installed the Adi Granth (Guru Granth Sahib) inside the newly completed Harmandir Sahib (Golden Temple).",
    eventHi: "गुरु अर्जन देव ने नवनिर्मित हरमंदिर साहिब में आदि ग्रंथ (गुरु ग्रंथ साहिब) स्थापित किया।" },
  { month: 2, day: 11, monumentId: "qutub-minar",       year: "1369", emoji: "🗼",
    event: "Firuz Shah Tughlaq ordered extensive repairs to the Qutub Minar after lightning damaged its upper stories.",
    eventHi: "फ़िरोज़ शाह तुगलक ने बिजली गिरने से क्षतिग्रस्त हुई कुतुब मीनार की ऊपरी मंजिलों की मरम्मत का आदेश दिया।" },
  { month: 2, day: 19, monumentId: "charminar",          year: "1591", emoji: "🕌",
    event: "Muhammad Quli Qutb Shah laid the foundation stone of the Charminar to mark the eradication of the plague from Hyderabad.",
    eventHi: "मुहम्मद कुली कुतुब शाह ने हैदराबाद से प्लेग के अंत की स्मृति में चारमीनार की नींव रखी।" },
  { month: 2, day: 24, monumentId: "hampi",             year: "1336", emoji: "🏛️",
    event: "Harihara I was crowned the first ruler of the Vijayanagara Empire at Hampi, founding one of India's greatest kingdoms.",
    eventHi: "हरिहर प्रथम को हम्पी में विजयनगर साम्राज्य का पहला शासक घोषित किया गया, जो भारत के सबसे महान राज्यों में से एक था।" },
  { month: 2, day: 27, monumentId: "hampi",             year: "1565", emoji: "⚔️",
    event: "The Battle of Talikota ended the Vijayanagara Empire; Hampi was subsequently sacked and fell into ruin.",
    eventHi: "तालीकोटा की लड़ाई ने विजयनगर साम्राज्य का अंत किया; हम्पी को लूटा गया और वह खंडहर बन गया।" },

  // March
  { month: 3, day: 4,  monumentId: "hawa-mahal",        year: "1799", emoji: "🏯",
    event: "Maharaja Sawai Pratap Singh completed the Hawa Mahal (Palace of Winds) in Jaipur.",
    eventHi: "महाराजा सवाई प्रताप सिंह ने जयपुर में हवा महल (पवनों का महल) का निर्माण पूरा किया।" },
  { month: 3, day: 10, monumentId: "lotus-temple",      year: "1980", emoji: "🌸",
    event: "Construction began on the Lotus Temple in New Delhi, a stunning 27-petal Bahá'í house of worship.",
    eventHi: "नई दिल्ली में कमल मंदिर का निर्माण शुरू हुआ, जो 27 पंखुड़ियों वाला बहाई उपासना स्थल है।" },
  { month: 3, day: 16, monumentId: "ajanta-ellora",     year: "1819", emoji: "🏛️",
    event: "British officer John Smith accidentally rediscovered the Ajanta Caves while tiger hunting.",
    eventHi: "ब्रिटिश अधिकारी जॉन स्मिथ ने बाघ शिकार के दौरान अनायास अजंता की गुफाओं को फिर से खोजा।" },
  { month: 3, day: 22, monumentId: "qutub-minar",       year: "1199", emoji: "🗼",
    event: "Qutb ud-Din Aibak laid the first course of stone for the Qutub Minar, inaugurating the Delhi Sultanate's grandest monument.",
    eventHi: "कुतुब उद-दीन ऐबक ने कुतुब मीनार की पहली पंक्ति रखी, जिससे दिल्ली सल्तनत के महान स्मारक का उद्घाटन हुआ।" },
  { month: 3, day: 28, monumentId: "gateway-of-india",  year: "1913", emoji: "🌊",
    event: "Architect George Wittet submitted the revised plans for the Gateway of India, inspired by 16th-century Gujarati architecture.",
    eventHi: "वास्तुकार जॉर्ज विटेट ने गेटवे ऑफ इंडिया के संशोधित डिजाइन प्रस्तुत किए, जो 16वीं सदी की गुजराती वास्तुकला से प्रेरित थे।" },

  // April
  { month: 4, day: 5,  monumentId: "taj-mahal",         year: "1632", emoji: "🕌",
    event: "Shah Jahan formally commissioned the Taj Mahal; thousands of artisans were summoned from across the Mughal Empire.",
    eventHi: "शाहजहाँ ने औपचारिक रूप से ताज महल का निर्माण आदेश दिया; मुगल साम्राज्य के हजारों कारीगरों को बुलाया गया।" },
  { month: 4, day: 10, monumentId: "konark-sun-temple",  year: "1984", emoji: "☀️",
    event: "The Konark Sun Temple was designated a UNESCO World Heritage Site, recognising its extraordinary architectural heritage.",
    eventHi: "कोणार्क सूर्य मंदिर को यूनेस्को विश्व धरोहर स्थल घोषित किया गया, इसकी असाधारण वास्तुकला विरासत को मान्यता मिली।" },
  { month: 4, day: 14, monumentId: "gateway-of-india",   year: "1948", emoji: "🌊",
    event: "The last British troops in India marched through the Gateway of India and departed by sea, ending British rule.",
    eventHi: "भारत में अंतिम ब्रिटिश सैनिक गेटवे ऑफ इंडिया से मार्च करते हुए समुद्र के रास्ते रवाना हुए, जिससे ब्रिटिश शासन समाप्त हुआ।" },
  { month: 4, day: 21, monumentId: "charminar",          year: "1687", emoji: "🕌",
    event: "Mughal Emperor Aurangzeb entered Hyderabad and visited the Charminar, marking the city's absorption into the Mughal Empire.",
    eventHi: "मुगल सम्राट औरंगजेब हैदराबाद में प्रवेश किया और चारमीनार का दर्शन किया, जिससे शहर मुगल साम्राज्य में शामिल हुआ।" },
  { month: 4, day: 24, monumentId: "lotus-temple",       year: "1986", emoji: "🌸",
    event: "Construction of the Lotus Temple's iconic 27-petal structure was finally completed after six years of work.",
    eventHi: "छह साल की मेहनत के बाद कमल मंदिर की प्रतिष्ठित 27-पंखुड़ी संरचना का निर्माण पूरा हुआ।" },

  // May
  { month: 5, day: 1,  monumentId: "red-fort",          year: "1639", emoji: "🏰",
    event: "Emperor Shah Jahan broke ground on the Red Fort (Lal Qila) at the new Mughal capital Shahjahanabad (Old Delhi).",
    eventHi: "सम्राट शाहजहाँ ने नई मुगल राजधानी शाहजहानाबाद में लाल किले की नींव रखी।" },
  { month: 5, day: 8,  monumentId: "hawa-mahal",        year: "1876", emoji: "🏯",
    event: "The Prince of Wales visited Jaipur; the Hawa Mahal was illuminated in his honour for the first time.",
    eventHi: "वेल्स के राजकुमार ने जयपुर का दौरा किया; उनके सम्मान में पहली बार हवा महल को रोशन किया गया।" },
  { month: 5, day: 12, monumentId: "gol-gumbaz",        year: "1656", emoji: "🕌",
    event: "The Gol Gumbaz mausoleum was completed after 30 years of construction, housing the tomb of Mohammed Adil Shah.",
    eventHi: "30 साल के निर्माण के बाद गोल गुम्बज़ मकबरे का काम पूरा हुआ, जिसमें मोहम्मद आदिल शाह की कब्र है।" },
  { month: 5, day: 16, monumentId: "ajanta-ellora",     year: "1983", emoji: "🏛️",
    event: "The Ajanta Caves received UNESCO World Heritage status, acknowledging their priceless Buddhist murals and sculptures.",
    eventHi: "अजंता की गुफाओं को यूनेस्को विश्व धरोहर का दर्जा मिला, जिसमें उनके अमूल्य बौद्ध चित्रों और मूर्तियों को सराहा गया।" },
  { month: 5, day: 22, monumentId: "golden-temple",     year: "1809", emoji: "✨",
    event: "Maharaja Ranjit Singh signed the Treaty of Amritsar, securing Sikh sovereignty and the Golden Temple's independence.",
    eventHi: "महाराजा रणजीत सिंह ने अमृतसर की संधि पर हस्ताक्षर किए, जिससे सिख संप्रभुता और स्वर्ण मंदिर की स्वतंत्रता सुरक्षित हुई।" },
  { month: 5, day: 28, monumentId: "ajanta-ellora",     year: "1983", emoji: "🏛️",
    event: "The Ajanta Caves received UNESCO World Heritage status, acknowledging their priceless Buddhist murals and sculptures.",
    eventHi: "अजंता की गुफाओं को यूनेस्को विश्व धरोहर का दर्जा दिया गया, उनके अमूल्य बौद्ध चित्रों और मूर्तियों को मान्यता मिली।" },

  // June
  { month: 6, day: 5,  monumentId: "hampi",             year: "1986", emoji: "🏛️",
    event: "The Group of Monuments at Hampi was inscribed as a UNESCO World Heritage Site.",
    eventHi: "हम्पी के स्मारक समूह को यूनेस्को विश्व धरोहर स्थल के रूप में सूचीबद्ध किया गया।" },
  { month: 6, day: 13, monumentId: "qutub-minar",       year: "1803", emoji: "🗼",
    event: "A major earthquake struck Delhi, cracking the Qutub Minar; British authorities later undertook its first scientific restoration.",
    eventHi: "दिल्ली में भूकंप से कुतुब मीनार में दरारें पड़ीं; बाद में ब्रिटिश अधिकारियों ने पहली वैज्ञानिक मरम्मत की।" },
  { month: 6, day: 17, monumentId: "golden-temple",     year: "1984", emoji: "✨",
    event: "Operation Blue Star concluded; restoration of the Golden Temple's damaged sections began under the Indian government.",
    eventHi: "ऑपरेशन ब्लू स्टार समाप्त हुआ; भारत सरकार के तहत स्वर्ण मंदिर की क्षतिग्रस्त संरचनाओं की मरम्मत शुरू हुई।" },
  { month: 6, day: 22, monumentId: "lotus-temple",      year: "1987", emoji: "🌸",
    event: "The Lotus Temple won the Architectural Award of Excellence from the Institution of Structural Engineers, London.",
    eventHi: "कमल मंदिर को लंदन के इंस्टीट्यूशन ऑफ स्ट्रक्चरल इंजीनियर्स से उत्कृष्ट वास्तुकला पुरस्कार मिला।" },
  { month: 6, day: 25, monumentId: "taj-mahal",         year: "1631", emoji: "🕌",
    event: "Mumtaz Mahal passed away; a grief-stricken Shah Jahan resolved to build the greatest mausoleum in history for her.",
    eventHi: "मुमताज महल का निधन हुआ; शोक में डूबे शाहजहाँ ने उनके लिए इतिहास का सबसे बड़ा मकबरा बनाने का संकल्प लिया।" },

  // July
  { month: 7, day: 3,  monumentId: "qutub-minar",       year: "1993", emoji: "🗼",
    event: "The Qutub Minar and its Monuments complex was designated a UNESCO World Heritage Site.",
    eventHi: "कुतुब मीनार और उसके स्मारक परिसर को यूनेस्को विश्व धरोहर स्थल घोषित किया गया।" },
  { month: 7, day: 9,  monumentId: "red-fort",          year: "1857", emoji: "🏰",
    event: "Bahadur Shah Zafar, the last Mughal emperor, issued proclamations from the Red Fort urging India's sepoys to unite.",
    eventHi: "अंतिम मुगल सम्राट बहादुर शाह जफर ने लाल किले से भारत के सिपाहियों को एकजुट होने की अपील की।" },
  { month: 7, day: 11, monumentId: "charminar",          year: "2010", emoji: "🕌",
    event: "A proposal to restore and illuminate the Charminar with solar-powered LEDs was approved, transforming Hyderabad's nightscape.",
    eventHi: "चारमीनार को सौर ऊर्जा से चलने वाली LED से रोशन करने और मरम्मत की योजना को मंजूरी मिली, जिससे हैदराबाद का रात्रि दृश्य बदल गया।" },
  { month: 7, day: 19, monumentId: "konark-sun-temple",  year: "1250", emoji: "☀️",
    event: "According to historical accounts, King Narasimhadeva I consecrated the completed Konark Sun Temple.",
    eventHi: "ऐतिहासिक वृत्तांतों के अनुसार, राजा नरसिंहदेव प्रथम ने पूर्ण कोणार्क सूर्य मंदिर को पवित्र किया।" },
  { month: 7, day: 25, monumentId: "hawa-mahal",        year: "2006", emoji: "🏯",
    event: "Hawa Mahal was featured on a commemorative stamp issued by India Post to celebrate Rajasthan's heritage.",
    eventHi: "भारतीय डाक विभाग ने राजस्थान की विरासत के उपलक्ष्य में हवा महल को स्मारक डाक टिकट पर प्रकाशित किया।" },

  // August
  { month: 8, day: 3,  monumentId: "gateway-of-india",  year: "1911", emoji: "🌊",
    event: "King George V visited Bombay; the decision to build the Gateway of India was finalised to commemorate his visit.",
    eventHi: "किंग जॉर्ज पंचम ने बॉम्बे का दौरा किया; उनकी यात्रा की स्मृति में गेटवे ऑफ इंडिया बनाने का निर्णय लिया गया।" },
  { month: 8, day: 15, monumentId: "red-fort",          year: "1947", emoji: "🇮🇳",
    event: "Prime Minister Jawaharlal Nehru hoisted the national flag from the Red Fort's ramparts for the first time on India's Independence Day.",
    eventHi: "प्रधानमंत्री जवाहरलाल नेहरू ने स्वतंत्रता दिवस पर पहली बार लाल किले की प्राचीर से राष्ट्रीय ध्वज फहराया।" },
  { month: 8, day: 16, monumentId: "taj-mahal",         year: "1908", emoji: "🕌",
    event: "British Viceroy Lord Curzon completed his major restoration of the Taj Mahal's gardens and interiors.",
    eventHi: "ब्रिटिश वायसराय लॉर्ड कर्जन ने ताज महल के बागीचों और अंदरूनी हिस्सों की बड़ी मरम्मत पूरी की।" },
  { month: 8, day: 20, monumentId: "gol-gumbaz",        year: "1686", emoji: "🕌",
    event: "Mughal Emperor Aurangzeb captured Bijapur; the Gol Gumbaz passed into Mughal hands and was preserved as a monument.",
    eventHi: "मुगल सम्राट औरंगजेब ने बीजापुर पर कब्जा किया; गोल गुम्बज़ मुगलों के अधीन आया और इसे स्मारक के रूप में संरक्षित किया गया।" },
  { month: 8, day: 24, monumentId: "ajanta-ellora",     year: "753",  emoji: "🏛️",
    event: "The Rashtrakuta king Dantidurga commissioned the Kailasa Temple at Ellora — the world's largest single-rock excavation.",
    eventHi: "राष्ट्रकूट राजा दंतिदुर्ग ने एलोरा में कैलाश मंदिर का निर्माण कराया — जो विश्व की सबसे बड़ी एकल-चट्टान खुदाई है।" },

  // September
  { month: 9, day: 2,  monumentId: "hawa-mahal",        year: "2005", emoji: "🏯",
    event: "A 50-million rupee conservation project to restore the Hawa Mahal's 953 jharokhas was completed.",
    eventHi: "हवा महल की 953 झरोखों की मरम्मत के लिए 5 करोड़ रुपये का संरक्षण प्रोजेक्ट पूरा हुआ।" },
  { month: 9, day: 8,  monumentId: "taj-mahal",         year: "2004", emoji: "🕌",
    event: "The Archaeological Survey of India launched a chemical treatment programme to combat yellowing of the Taj Mahal's marble.",
    eventHi: "भारतीय पुरातत्व सर्वेक्षण ने ताज महल के संगमरमर की पीलाहट रोकने के लिए रासायनिक उपचार कार्यक्रम शुरू किया।" },
  { month: 9, day: 14, monumentId: "gateway-of-india",  year: "1924", emoji: "🌊",
    event: "The Gateway of India was officially inaugurated by the Viceroy of India, Lord Reading.",
    eventHi: "गेटवे ऑफ इंडिया का भारत के वायसराय लॉर्ड रीडिंग द्वारा आधिकारिक रूप से उद्घाटन किया गया।" },
  { month: 9, day: 20, monumentId: "konark-sun-temple",  year: "1903", emoji: "☀️",
    event: "The Archaeological Survey of India filled the Konark Sun Temple's main hall with sand to preserve its structural integrity.",
    eventHi: "भारतीय पुरातत्व सर्वेक्षण ने कोणार्क सूर्य मंदिर के मुख्य हॉल को संरचनात्मक अखंडता बनाए रखने के लिए रेत से भरा।" },
  { month: 9, day: 22, monumentId: "lotus-temple",      year: "1986", emoji: "🌸",
    event: "The Lotus Temple was formally dedicated and opened to the public for the first time.",
    eventHi: "कमल मंदिर को औपचारिक रूप से समर्पित किया गया और पहली बार जनता के लिए खोला गया।" },

  // October
  { month: 10, day: 5, monumentId: "hampi",             year: "1343", emoji: "🏛️",
    event: "Harihara I and Bukka Raya established the Vijayanagara Empire, choosing Hampi as their magnificent capital.",
    eventHi: "हरिहर प्रथम और बुक्का राय ने विजयनगर साम्राज्य की स्थापना की और हम्पी को अपनी भव्य राजधानी के रूप में चुना।" },
  { month: 10, day: 12, monumentId: "red-fort",         year: "1739", emoji: "🏰",
    event: "Persian emperor Nadir Shah occupied the Red Fort after his victory at Karnal, taking the Peacock Throne to Persia.",
    eventHi: "फ़ारसी सम्राट नादिर शाह ने करनाल की जीत के बाद लाल किले पर कब्जा किया और मयूर सिंहासन फारस ले गया।" },
  { month: 10, day: 15, monumentId: "gol-gumbaz",       year: "1626", emoji: "🕌",
    event: "Mohammed Adil Shah began construction of his own mausoleum — what would become the Gol Gumbaz.",
    eventHi: "मोहम्मद आदिल शाह ने अपने मकबरे का निर्माण शुरू किया — जो आगे चलकर गोल गुम्बज़ बना।" },
  { month: 10, day: 27, monumentId: "golden-temple",    year: "1581", emoji: "✨",
    event: "Guru Arjan Dev, the fifth Sikh Guru, began construction of the Harmandir Sahib (Golden Temple).",
    eventHi: "पाँचवें सिख गुरु, गुरु अर्जन देव ने हरमंदिर साहिब (स्वर्ण मंदिर) का निर्माण शुरू किया।" },

  // November
  { month: 11, day: 3,  monumentId: "red-fort",         year: "2007", emoji: "🏰",
    event: "The Red Fort Complex was inscribed on UNESCO's World Heritage List, its 369-year history recognised globally.",
    eventHi: "लाल किला परिसर को यूनेस्को की विश्व धरोहर सूची में शामिल किया गया, इसके 369 साल के इतिहास को वैश्विक मान्यता मिली।" },
  { month: 11, day: 10, monumentId: "ajanta-ellora",    year: "1000", emoji: "🏛️",
    event: "The Ellora Caves were completed over centuries of continuous carving — a testament to India's greatest artisans.",
    eventHi: "एलोरा की गुफाएँ सदियों की निरंतर नक्काशी से पूरी हुईं — भारत के महानतम कारीगरों की गवाही।" },
  { month: 11, day: 18, monumentId: "charminar",        year: "1591", emoji: "🕌",
    event: "The Charminar's mosque on the upper floor held its first Friday prayers, the oldest mosque still active in Hyderabad.",
    eventHi: "चारमीनार की ऊपरी मंजिल की मस्जिद में पहली जुमे की नमाज़ अदा की गई, जो हैदराबाद की सबसे पुरानी सक्रिय मस्जिद है।" },
  { month: 11, day: 24, monumentId: "taj-mahal",        year: "1632", emoji: "🕌",
    event: "The foundations of the Taj Mahal were laid; 1,000 elephants were used to transport construction materials.",
    eventHi: "ताज महल की नींव रखी गई; निर्माण सामग्री ढोने के लिए 1,000 हाथियों का उपयोग किया गया।" },
  { month: 11, day: 29, monumentId: "gateway-of-india", year: "1911", emoji: "🌊",
    event: "King George V and Queen Mary arrived at the Apollo Bunder; the foundation stone for the Gateway of India was laid.",
    eventHi: "किंग जॉर्ज पंचम और क्वीन मैरी अपोलो बंदर पहुँचे; गेटवे ऑफ इंडिया की नींव का पत्थर रखा गया।" },

  // December
  { month: 12, day: 2,  monumentId: "lotus-temple",     year: "1986", emoji: "🌸",
    event: "The Lotus Temple received the Architectural Award of Excellence from the Institution of Structural Engineers, London.",
    eventHi: "कमल मंदिर को लंदन के इंस्टीट्यूशन ऑफ स्ट्रक्चरल इंजीनियर्स का उत्कृष्ट वास्तुकला पुरस्कार मिला।" },
  { month: 12, day: 10, monumentId: "taj-mahal",        year: "1983", emoji: "🕌",
    event: "The Taj Mahal was designated a UNESCO World Heritage Site, cementing its status as one of humanity's greatest achievements.",
    eventHi: "ताज महल को यूनेस्को विश्व धरोहर स्थल घोषित किया गया, जिससे यह मानवता की सबसे बड़ी उपलब्धियों में से एक बन गया।" },
  { month: 12, day: 16, monumentId: "qutub-minar",      year: "1206", emoji: "🗼",
    event: "Qutb ud-Din Aibak was crowned the first Sultan of Delhi at Lahore; his vision for the Qutub Minar would define Indian Islamic architecture.",
    eventHi: "कुतुब उद-दीन ऐबक को लाहौर में दिल्ली का पहला सुल्तान घोषित किया गया; उनकी कुतुब मीनार की कल्पना ने भारतीय इस्लामी वास्तुकला को परिभाषित किया।" },
  { month: 12, day: 21, monumentId: "qutub-minar",      year: "1220", emoji: "🗼",
    event: "Iltutmish completed the Qutub Minar's upper storeys, fulfilling his predecessor Qutb ud-Din Aibak's vision.",
    eventHi: "इल्तुतमिश ने कुतुब मीनार की ऊपरी मंजिलें पूरी कीं, अपने पूर्ववर्ती कुतुब उद-दीन ऐबक की परिकल्पना को साकार किया।" },
  { month: 12, day: 28, monumentId: "golden-temple",    year: "1762", emoji: "✨",
    event: "Ahmad Shah Durrani destroyed the Golden Temple; the Sikhs rebuilt it within months, demonstrating unshakeable devotion.",
    eventHi: "अहमद शाह दुर्रानी ने स्वर्ण मंदिर को नष्ट किया; सिखों ने महीनों में इसे पुनर्निर्मित किया, अटूट श्रद्धा का परिचय दिया।" },
];

export function getTodaysEvents(): HistoricalEvent[] {
  const now = new Date();
  const m = now.getMonth() + 1;
  const d = now.getDate();

  // Exact date match — return all events on this date
  const exact = ON_THIS_DAY.filter(e => e.month === m && e.day === d);
  if (exact.length > 0) return exact;

  // Same month — use day number to pick a consistent but varied event
  const monthEvents = ON_THIS_DAY.filter(e => e.month === m);
  if (monthEvents.length > 0) {
    const idx = (d - 1) % monthEvents.length;
    return [monthEvents[idx]];
  }

  // Last resort — day-based pick across all events
  const idx = (d - 1) % ON_THIS_DAY.length;
  return [ON_THIS_DAY[idx]];
}
