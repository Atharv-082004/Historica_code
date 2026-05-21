import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { CheckCircle2, XCircle, Info } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Question {
  type: "city" | "year" | "dynasty" | "fact" | "entry" | "material" | "identify" | "unesco" | "height" | "feature";
  monumentId: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  icon: string;
}

const shuffle = <T,>(arr: T[]): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const ALL_QUESTIONS: Omit<Question, "correctIndex">[] = [
  { type: "city", monumentId: "taj-mahal", icon: "🕌", prompt: "In which city does the Taj Mahal stand?", options: shuffle(["Agra", "Delhi", "Jaipur", "Lucknow"]), explanation: "The Taj Mahal is in Agra, Uttar Pradesh, on the right bank of the river Yamuna." },
  { type: "year", monumentId: "taj-mahal", icon: "📅", prompt: "When was construction of the Taj Mahal completed?", options: shuffle(["1653", "1700", "1612", "1720"]), explanation: "Construction began in 1632 and was completed in 1653 — taking about 22 years." },
  { type: "dynasty", monumentId: "taj-mahal", icon: "👑", prompt: "Which emperor commissioned the Taj Mahal?", options: shuffle(["Shah Jahan", "Akbar", "Aurangzeb", "Babur"]), explanation: "Shah Jahan built it as a mausoleum for his beloved wife Mumtaz Mahal." },
  { type: "height", monumentId: "taj-mahal", icon: "📐", prompt: "How tall is the main dome of the Taj Mahal?", options: shuffle(["73 metres", "50 metres", "90 metres", "60 metres"]), explanation: "The central onion dome stands 73 metres high, flanked by four chhatris." },
  { type: "material", monumentId: "taj-mahal", icon: "🪨", prompt: "What is the primary material used to build the Taj Mahal?", options: shuffle(["White marble", "Red sandstone", "Granite", "Limestone"]), explanation: "The entire structure is clad in white Makrana marble from Rajasthan." },
  { type: "city", monumentId: "qutub-minar", icon: "🗼", prompt: "Where is the Qutub Minar located?", options: shuffle(["Delhi", "Agra", "Jaipur", "Lucknow"]), explanation: "The Qutub Minar stands in Mehrauli, South Delhi." },
  { type: "height", monumentId: "qutub-minar", icon: "📐", prompt: "What is the height of the Qutub Minar?", options: shuffle(["73 metres", "56 metres", "90 metres", "48 metres"]), explanation: "At 73 metres, it is the tallest brick minaret in the world." },
  { type: "dynasty", monumentId: "qutub-minar", icon: "👑", prompt: "Which dynasty began construction of the Qutub Minar?", options: shuffle(["Mamluk Dynasty", "Mughal Empire", "Rajput Clan", "Lodi Dynasty"]), explanation: "Qutub-ud-din Aibak of the Mamluk (Slave) Dynasty started it around 1199." },
  { type: "material", monumentId: "qutub-minar", icon: "🪨", prompt: "What are the first three storeys of the Qutub Minar made of?", options: shuffle(["Red sandstone", "White marble", "Granite", "Brick and lime"]), explanation: "The lower three storeys are red sandstone; the top two are marble and sandstone." },
  { type: "feature", monumentId: "qutub-minar", icon: "✨", prompt: "Which unique record does the Qutub Minar hold?", options: shuffle(["Tallest brick minaret in the world", "Largest dome in Asia", "Oldest mosque in India", "Tallest stone tower in Asia"]), explanation: "Standing 73 m tall, it is officially the world's tallest brick-built minaret." },
  { type: "city", monumentId: "red-fort", icon: "🏰", prompt: "In which city is the Red Fort situated?", options: shuffle(["Delhi", "Agra", "Lahore", "Lucknow"]), explanation: "The Red Fort is in Old Delhi on the banks of the river Yamuna." },
  { type: "year", monumentId: "red-fort", icon: "📅", prompt: "When was the Red Fort completed?", options: shuffle(["1648", "1700", "1612", "1580"]), explanation: "Construction ran from 1639 to 1648 under Emperor Shah Jahan." },
  { type: "feature", monumentId: "red-fort", icon: "✨", prompt: "What event takes place at the Red Fort every Independence Day?", options: shuffle(["Prime Minister hoists national flag", "Republic Day parade", "President's address", "Beating Retreat ceremony"]), explanation: "Every 15 August, India's Prime Minister hoists the national flag from its ramparts." },
  { type: "city", monumentId: "hawa-mahal", icon: "🏯", prompt: "In which Pink City is the Hawa Mahal found?", options: shuffle(["Jaipur", "Jodhpur", "Udaipur", "Bikaner"]), explanation: "Hawa Mahal is one of Jaipur's most iconic landmarks in Rajasthan." },
  { type: "feature", monumentId: "hawa-mahal", icon: "✨", prompt: "How many small windows (jharokhas) does Hawa Mahal have?", options: shuffle(["953", "500", "750", "1,200"]), explanation: "953 jharokhas with intricate lattice work give it a honeycomb-like facade." },
  { type: "identify", monumentId: "hawa-mahal", icon: "🔍", prompt: "Hawa Mahal was designed so royal women could observe street life without being seen. What does 'Hawa Mahal' mean?", options: shuffle(["Palace of Winds", "Palace of Light", "Palace of Joy", "Palace of Women"]), explanation: "'Hawa Mahal' translates to Palace of Winds — breezes flow freely through its latticed windows." },
  { type: "city", monumentId: "konark-sun-temple", icon: "☀️", prompt: "The Konark Sun Temple is in which Indian state?", options: shuffle(["Odisha", "Tamil Nadu", "Karnataka", "Andhra Pradesh"]), explanation: "The temple stands near the town of Konark on the coastline of Odisha." },
  { type: "feature", monumentId: "konark-sun-temple", icon: "✨", prompt: "The Konark Sun Temple is designed in the shape of what?", options: shuffle(["A colossal chariot of the Sun God", "A multi-tiered pyramid", "A lotus flower", "A sailing ship"]), explanation: "The temple mimics a giant stone chariot with 24 wheels pulled by 7 horses." },
  { type: "identify", monumentId: "konark-sun-temple", icon: "🔍", prompt: "The wheels of which temple can be used as accurate sundials?", options: shuffle(["Konark Sun Temple", "Brihadeeswara Temple", "Meenakshi Temple", "Lingaraja Temple"]), explanation: "Each of the 24 carved wheels at Konark is a precision sundial telling the time." },
  { type: "city", monumentId: "ajanta-ellora", icon: "🏛️", prompt: "Near which city are the Ajanta and Ellora Caves located?", options: shuffle(["Aurangabad", "Pune", "Nashik", "Nagpur"]), explanation: "Both cave complexes are near Aurangabad in Maharashtra." },
  { type: "feature", monumentId: "ajanta-ellora", icon: "✨", prompt: "What is the Kailasa Temple at Ellora famous for?", options: shuffle(["Largest monolithic rock excavation in the world", "Tallest rock-cut statue in India", "Oldest Buddhist monastery", "Largest cave painting collection"]), explanation: "Kailasa Temple (Cave 16) is carved top-down from a single rock — the world's largest monolithic structure." },
  { type: "city", monumentId: "gol-gumbaz", icon: "🕌", prompt: "Gol Gumbaz is located in which Karnataka city?", options: shuffle(["Bijapur", "Bengaluru", "Mysuru", "Hampi"]), explanation: "Gol Gumbaz stands in Vijayapura (Bijapur) in northern Karnataka." },
  { type: "feature", monumentId: "gol-gumbaz", icon: "✨", prompt: "What is Gol Gumbaz's dome famous for?", options: shuffle(["Whispering gallery with remarkable acoustics", "Gilded interior ceiling", "Hidden underground chambers", "Rotating central platform"]), explanation: "The gallery around the inner dome bounces even a whisper across its 44 m diameter." },
  { type: "city", monumentId: "hampi", icon: "🏛️", prompt: "Hampi is situated on the banks of which river?", options: shuffle(["Tungabhadra", "Godavari", "Krishna", "Kaveri"]), explanation: "The ruins of Hampi spread along the south bank of the Tungabhadra in Karnataka." },
  { type: "feature", monumentId: "hampi", icon: "✨", prompt: "The stone chariot at Hampi's Vittala Temple is depicted on which Indian currency note?", options: shuffle(["₹50 note", "₹100 note", "₹500 note", "₹10 note"]), explanation: "The iconic Vittala Temple stone chariot appears on the Indian ₹50 banknote." },
  { type: "city", monumentId: "charminar", icon: "🕌", prompt: "In which city does the Charminar stand?", options: shuffle(["Hyderabad", "Secunderabad", "Bijapur", "Aurangabad"]), explanation: "The Charminar is the iconic centrepiece of the old city of Hyderabad." },
  { type: "feature", monumentId: "charminar", icon: "✨", prompt: "What does 'Charminar' literally mean?", options: shuffle(["Four Minarets", "Four Arches", "City Mosque", "Four Pillars"]), explanation: "'Char' means four and 'minar' means tower — the four minarets define the monument." },
  { type: "city", monumentId: "lotus-temple", icon: "🌸", prompt: "The Lotus Temple is a house of worship for which faith?", options: shuffle(["Bahá'í Faith", "Buddhism", "Hinduism", "Jainism"]), explanation: "The Lotus Temple is a Bahá'í House of Worship, open to all regardless of religion." },
  { type: "feature", monumentId: "lotus-temple", icon: "✨", prompt: "How many marble petals make up the exterior of the Lotus Temple?", options: shuffle(["27", "9", "18", "36"]), explanation: "27 free-standing marble-clad petals form nine clusters of three, creating nine sides." },
  { type: "city", monumentId: "gateway-of-india", icon: "🌊", prompt: "The Gateway of India overlooks which sea?", options: shuffle(["Arabian Sea", "Bay of Bengal", "Indian Ocean", "Lakshadweep Sea"]), explanation: "The Gateway faces the Mumbai Harbour and the vast Arabian Sea." },
  { type: "identify", monumentId: "gateway-of-india", icon: "🔍", prompt: "Which monument was the last to see British troops leave India in 1948?", options: shuffle(["Gateway of India", "India Gate", "Victoria Memorial", "Red Fort"]), explanation: "The last British regiment marched through the Gateway of India as they left in 1948." },
  { type: "city", monumentId: "golden-temple", icon: "✨", prompt: "In which city is the Golden Temple located?", options: shuffle(["Amritsar", "Ludhiana", "Chandigarh", "Patiala"]), explanation: "Sri Harmandir Sahib (Golden Temple) is the spiritual centre of Amritsar, Punjab." },
  { type: "feature", monumentId: "golden-temple", icon: "🌟", prompt: "Approximately how much gold was used to cover the Golden Temple?", options: shuffle(["750 kg", "250 kg", "1,000 kg", "500 kg"]), explanation: "About 750 kg of pure gold leaf covers the upper floors of the temple." },
  { type: "city", monumentId: "mysore-palace", icon: "🏰", prompt: "In which Karnataka city is the famous illuminated palace of the Wadiyar kings?", options: shuffle(["Mysore", "Bengaluru", "Hampi", "Bijapur"]), explanation: "Mysore Palace is in Mysore (Mysuru), Karnataka — the royal seat of the Wadiyar dynasty." },
  { type: "feature", monumentId: "mysore-palace", icon: "✨", prompt: "How many light bulbs illuminate Mysore Palace every Sunday?", options: shuffle(["100,000", "50,000", "10,000", "250,000"]), explanation: "Nearly 1,00,000 bulbs light up the palace every Sunday evening and on festivals." },
  { type: "identify", monumentId: "mysore-palace", icon: "🔍", prompt: "Which October festival turns Mysore Palace into a spectacular sea of golden light?", options: shuffle(["Dasara", "Diwali", "Ugadi", "Navratri"]), explanation: "The Mysore Dasara festival fills the palace grounds with a grand elephant procession and dazzling illuminations." },
  { type: "city", monumentId: "meenakshi-temple", icon: "🛕", prompt: "The Meenakshi Amman Temple is the heart of which Tamil Nadu city?", options: shuffle(["Madurai", "Chennai", "Coimbatore", "Trichy"]), explanation: "The temple is the spiritual and cultural centre of Madurai, one of India's oldest living cities." },
  { type: "feature", monumentId: "meenakshi-temple", icon: "✨", prompt: "How many gopurams (gateway towers) does the Meenakshi Amman Temple complex have?", options: shuffle(["14", "7", "4", "21"]), explanation: "The complex has 14 gopurams ranging from 45 to 52 metres, each covered with thousands of colourful sculptures." },
  { type: "identify", monumentId: "meenakshi-temple", icon: "🔍", prompt: "Which deity is primarily worshipped at the Meenakshi Amman Temple?", options: shuffle(["Goddess Meenakshi (Parvati)", "Lord Vishnu", "Lord Brahma", "Goddess Saraswati"]), explanation: "The temple is dedicated to Goddess Meenakshi, a form of Parvati, and her consort Sundareshvara (Shiva)." },
  { type: "city", monumentId: "khajuraho-temples", icon: "🏛️", prompt: "The Khajuraho Temples are in which Indian state?", options: shuffle(["Madhya Pradesh", "Rajasthan", "Uttar Pradesh", "Chhattisgarh"]), explanation: "The temples are in Chhatarpur district, Madhya Pradesh, built by the Chandela dynasty." },
  { type: "feature", monumentId: "khajuraho-temples", icon: "✨", prompt: "Of the original 85 Khajuraho temples built, how many survive today?", options: shuffle(["25", "50", "10", "40"]), explanation: "Only 25 of the original 85 temples built by the Chandela dynasty survive into the 21st century." },
  { type: "identify", monumentId: "khajuraho-temples", icon: "🔍", prompt: "Who rediscovered the Khajuraho Temples hidden in jungle in 1838?", options: shuffle(["British surveyor T.S. Burt", "Lord Curzon", "General Taylor", "James Fergusson"]), explanation: "British surveyor T.S. Burt stumbled upon the temples while on a survey expedition and brought them to wider attention." },
  { type: "city", monumentId: "sanchi-stupa", icon: "☸️", prompt: "Where is the Great Stupa of Sanchi located?", options: shuffle(["Madhya Pradesh", "Bihar", "Uttar Pradesh", "Odisha"]), explanation: "Sanchi is a small town in Madhya Pradesh, about 46 km from Bhopal." },
  { type: "dynasty", monumentId: "sanchi-stupa", icon: "👑", prompt: "Which emperor originally built the Great Stupa at Sanchi?", options: shuffle(["Emperor Ashoka", "Chandragupta Maurya", "Kanishka", "Samudragupta"]), explanation: "Ashoka commissioned the Great Stupa in the 3rd century BCE to enshrine the relics of the Buddha." },
  { type: "feature", monumentId: "sanchi-stupa", icon: "✨", prompt: "What decorative elements were added to Sanchi Stupa in the 1st century BCE?", options: shuffle(["Four carved toranas (gateways)", "A gilded dome", "Painted murals", "Stone Buddha statues"]), explanation: "Four elaborately carved toranas (gateways) depicting scenes from Buddha's life were added by the Satavahana dynasty." },
  { type: "city", monumentId: "fatehpur-sikri", icon: "🕌", prompt: "Fatehpur Sikri is located near which city?", options: shuffle(["Agra", "Jaipur", "Lucknow", "Delhi"]), explanation: "Fatehpur Sikri is about 40 km from Agra in Uttar Pradesh." },
  { type: "feature", monumentId: "fatehpur-sikri", icon: "✨", prompt: "The Buland Darwaza at Fatehpur Sikri is the tallest gateway in the world. How tall is it?", options: shuffle(["54 metres", "38 metres", "72 metres", "45 metres"]), explanation: "The Buland Darwaza stands 54 metres high and was built to commemorate Akbar's conquest of Gujarat." },
  { type: "identify", monumentId: "fatehpur-sikri", icon: "🔍", prompt: "Why was Fatehpur Sikri abandoned just 14 years after it was built?", options: shuffle(["Failure of the water supply", "Mughal defeat in battle", "Severe earthquake", "Emperor's death"]), explanation: "The most widely accepted theory is that the city was abandoned due to inadequacy of its water supply." },
  { type: "city", monumentId: "victoria-memorial", icon: "🏛️", prompt: "The Victoria Memorial is located in which city?", options: shuffle(["Kolkata", "Mumbai", "Delhi", "Chennai"]), explanation: "The Victoria Memorial stands in central Kolkata, formerly Calcutta — the capital of British India." },
  { type: "material", monumentId: "victoria-memorial", icon: "🪨", prompt: "The Victoria Memorial is built from the same marble as which other famous Indian monument?", options: shuffle(["Taj Mahal", "Qutub Minar", "Lotus Temple", "Sanchi Stupa"]), explanation: "Both the Victoria Memorial and the Taj Mahal are built from white Makrana marble from Rajasthan." },
  { type: "feature", monumentId: "victoria-memorial", icon: "✨", prompt: "What sits on top of Victoria Memorial's central dome?", options: shuffle(["Rotating bronze Angel of Victory", "Golden spire", "Marble statue of Queen Victoria", "Iron weathervane"]), explanation: "A 4.9-metre bronze Angel of Victory weighing over 3.6 tonnes rotates with the wind on top of the dome." },
  { type: "city", monumentId: "amber-fort", icon: "🏯", prompt: "Amber Fort is located how far from Jaipur?", options: shuffle(["11 kilometres", "50 kilometres", "5 kilometres", "30 kilometres"]), explanation: "Amber Fort sits on a hill in Amer, just 11 km north of Jaipur in Rajasthan." },
  { type: "feature", monumentId: "amber-fort", icon: "✨", prompt: "What is the famous Sheesh Mahal in Amber Fort also known as?", options: shuffle(["Palace of Mirrors", "Hall of Jewels", "Crystal Palace", "Diamond Pavilion"]), explanation: "Sheesh Mahal (Palace of Mirrors) has thousands of tiny mirror inlays — a single candle creates the effect of 4,000 stars." },
  { type: "identify", monumentId: "amber-fort", icon: "🔍", prompt: "Amber Fort is part of which UNESCO World Heritage Site?", options: shuffle(["Hill Forts of Rajasthan", "Rajput Palaces of India", "Mughal Heritage Trail", "Forts of the Deccan"]), explanation: "Amber Fort was inscribed in 2013 as part of the 'Hill Forts of Rajasthan' UNESCO World Heritage Site." },
  { type: "city", monumentId: "mahabalipuram", icon: "🌊", prompt: "Mahabalipuram (Shore Temple) is on the coast of which body of water?", options: shuffle(["Bay of Bengal", "Arabian Sea", "Indian Ocean", "Gulf of Mannar"]), explanation: "The Shore Temple stands directly at the edge of the Bay of Bengal in Tamil Nadu." },
  { type: "dynasty", monumentId: "mahabalipuram", icon: "👑", prompt: "Which South Indian dynasty built the Shore Temple at Mahabalipuram?", options: shuffle(["Pallava Dynasty", "Chola Dynasty", "Pandya Dynasty", "Vijayanagara Empire"]), explanation: "The Shore Temple was built by Pallava king Narasimhavarman II (Rajasimha) around 700–728 CE." },
  { type: "feature", monumentId: "mahabalipuram", icon: "✨", prompt: "What is unique about Arjuna's Penance at Mahabalipuram?", options: shuffle(["World's largest bas-relief carved in rock", "World's tallest free-standing stone panel", "World's oldest stone carving", "World's largest open-air museum"]), explanation: "Arjuna's Penance is the world's largest bas-relief — a 27-metre-wide carving on a single granite boulder face." },
  { type: "identify", monumentId: "humayuns-tomb", icon: "🔍", prompt: "Which Mughal monument is considered the direct architectural predecessor of the Taj Mahal?", options: shuffle(["Humayun's Tomb", "Agra Fort", "Red Fort", "Safdarjung's Tomb"]), explanation: "Humayun's Tomb (1572) pioneered the garden-tomb concept and double dome that Shah Jahan perfected in the Taj Mahal 80 years later." },
  { type: "dynasty", monumentId: "humayuns-tomb", icon: "👑", prompt: "Who commissioned Humayun's Tomb after the emperor's death?", options: shuffle(["His widow Bega Begum", "His son Akbar", "Shah Jahan", "Aurangzeb"]), explanation: "Bega Begum (Haji Begum), Humayun's senior widow, commissioned the tomb in 1565 and is herself buried there." },
  { type: "feature", monumentId: "humayuns-tomb", icon: "✨", prompt: "How many Mughal family members are buried at Humayun's Tomb, earning it the nickname 'Dormitory of the Mughals'?", options: shuffle(["Over 150", "About 30", "Exactly 12", "Over 500"]), explanation: "More than 150 Mughal family members are interred within the complex, making it the largest concentration of Mughal burials." },
  { type: "feature", monumentId: "agra-fort", icon: "✨", prompt: "From which tower of Agra Fort could the imprisoned Shah Jahan see the Taj Mahal?", options: shuffle(["Musamman Burj", "Jahangiri Mahal", "Diwan-i-Khas", "Amar Singh Gate"]), explanation: "Shah Jahan spent the last 8 years of his life imprisoned by Aurangzeb in the Musamman Burj, gazing at the Taj Mahal where Mumtaz lay." },
  { type: "city", monumentId: "agra-fort", icon: "🏙️", prompt: "Which emperor primarily built the current Agra Fort in red sandstone from 1565?", options: shuffle(["Akbar", "Shah Jahan", "Humayun", "Babur"]), explanation: "Akbar demolished the earlier fort and constructed the present massive red sandstone structure from 1565–1573." },
  { type: "material", monumentId: "agra-fort", icon: "🪨", prompt: "What is the primary building material of Agra Fort's outer walls?", options: shuffle(["Red sandstone", "White marble", "Granite", "Yellow limestone"]), explanation: "Akbar built the imposing outer walls and gates from local red sandstone, while Shah Jahan later added white marble palace interiors." },
  { type: "height", monumentId: "brihadeeswara-temple", icon: "📐", prompt: "How tall is the vimana tower of the Brihadeeswara Temple in Thanjavur?", options: shuffle(["66 metres", "48 metres", "82 metres", "55 metres"]), explanation: "The Brihadeeswara vimana stands 66 metres tall and was the tallest structure in India at the time of its completion in 1010 CE." },
  { type: "feature", monumentId: "brihadeeswara-temple", icon: "✨", prompt: "What remarkable shadow phenomenon occurs at the Brihadeeswara Temple on equinox days?", options: shuffle(["The tower casts no shadow at noon", "The shadow points exactly north", "A shadow enters the sanctum at sunrise", "The shadow spells 'Shiva' in Tamil"]), explanation: "The Brihadeeswara vimana was engineered so precisely that it casts no shadow at all at solar noon on equinox days." },
  { type: "dynasty", monumentId: "brihadeeswara-temple", icon: "👑", prompt: "Which Chola emperor built the Brihadeeswara Temple at Thanjavur?", options: shuffle(["Raja Raja Chola I", "Rajendra Chola I", "Kulottunga Chola", "Vikramaditya"]), explanation: "Raja Raja Chola I built and consecrated this great temple in 1010 CE to mark his military conquests across South India." },
  { type: "identify", monumentId: "mahabodhi-temple", icon: "🔍", prompt: "The Mahabodhi Temple marks the spot where which historical figure attained enlightenment?", options: shuffle(["Siddhartha Gautama (The Buddha)", "Mahavira (Jainism)", "Adi Shankaracharya", "Guru Nanak"]), explanation: "Siddhartha Gautama sat under the Bodhi tree at Bodh Gaya and attained enlightenment, becoming the Buddha, around 500 BCE." },
  { type: "city", monumentId: "mahabodhi-temple", icon: "🏙️", prompt: "In which Indian state is the Mahabodhi Temple at Bodh Gaya located?", options: shuffle(["Bihar", "Uttar Pradesh", "Madhya Pradesh", "Odisha"]), explanation: "Bodh Gaya is in the Gaya district of Bihar, on the banks of the Niranjana (Falgu) river." },
  { type: "feature", monumentId: "mahabodhi-temple", icon: "✨", prompt: "What sacred tree grows in the Mahabodhi Temple courtyard?", options: shuffle(["Bodhi tree (Ficus religiosa)", "Peepal tree", "Banyan tree", "Ashoka tree"]), explanation: "A Bodhi tree — Ficus religiosa — grows in the courtyard, a direct descendant of the original tree under which the Buddha sat." },
  { type: "identify", monumentId: "elephanta-caves", icon: "🔍", prompt: "What is the name of the iconic triple-headed Shiva sculpture at Elephanta Caves?", options: shuffle(["Trimurti (Maheshmurti)", "Nataraja", "Lingam of Elephanta", "Shiva-Parvati Vivah"]), explanation: "The Trimurti (also called Maheshmurti) is a 6-metre three-headed bust of Shiva showing his roles as creator, preserver, and destroyer." },
  { type: "city", monumentId: "elephanta-caves", icon: "🏙️", prompt: "How do visitors reach the Elephanta Caves from central Mumbai?", options: shuffle(["1-hour ferry from Gateway of India", "Road bridge from Bandra", "Helicopter from Nariman Point", "Underwater tunnel from Colaba"]), explanation: "The only way to reach Elephanta Island is by taking a 1-hour ferry from the Gateway of India at Apollo Bunder." },
  { type: "feature", monumentId: "elephanta-caves", icon: "✨", prompt: "Who gave the name 'Elephanta' to the cave island?", options: shuffle(["Portuguese colonisers", "British East India Company", "Local Maratha fishermen", "Mughal emperor Akbar"]), explanation: "Portuguese sailors named the island 'Elephanta' after a large stone elephant they found near the landing point." },
  { type: "feature", monumentId: "rani-ki-vav", icon: "✨", prompt: "On which Indian currency note does the Rani ki Vav appear?", options: shuffle(["₹100 note", "₹500 note", "₹50 note", "₹200 note"]), explanation: "The image of Rani ki Vav appears on the reverse of the Indian ₹100 note, recognising it as a symbol of Gujarat's heritage." },
  { type: "dynasty", monumentId: "rani-ki-vav", icon: "👑", prompt: "Who built Rani ki Vav in Patan, Gujarat?", options: shuffle(["Queen Udayamati of the Solanki dynasty", "Rani Padmini of Mewar", "Nur Jahan of the Mughal court", "Ahilyabai Holkar of Indore"]), explanation: "Rani ki Vav was built in 1063 CE by Queen Udayamati as a memorial to her husband, King Bhimdev I of the Solanki dynasty." },
  { type: "identify", monumentId: "rani-ki-vav", icon: "🔍", prompt: "What type of structure is Rani ki Vav?", options: shuffle(["A stepwell (vav / baoli)", "A royal mausoleum", "A Jain temple complex", "A palace garden"]), explanation: "A vav (or baoli) is a stepwell — a subterranean water structure with stepped corridors. Rani ki Vav is the finest surviving example." },
  { type: "feature", monumentId: "jantar-mantar", icon: "✨", prompt: "What is the Samrat Yantra at Jantar Mantar Jaipur?", options: shuffle(["The world's largest sundial", "A telescope for observing stars", "A device to measure earthquakes", "A water clock"]), explanation: "The Samrat Yantra is a 27-metre sundial whose shadow moves at 1 mm per second, measuring time accurate to within 2 seconds." },
  { type: "dynasty", monumentId: "jantar-mantar", icon: "👑", prompt: "Who built the Jantar Mantar observatory in Jaipur?", options: shuffle(["Maharaja Jai Singh II", "Maharana Pratap", "Akbar the Great", "Raja Man Singh"]), explanation: "Maharaja Sawai Jai Singh II of Jaipur built five observatories across India between 1724–1735, with Jaipur being the largest." },
  { type: "fact", monumentId: "jantar-mantar", icon: "💡", prompt: "How many astronomical observatories did Maharaja Jai Singh II build across India?", options: shuffle(["Five", "Two", "Seven", "Three"]), explanation: "Jai Singh II built five Jantar Mantar observatories — in Jaipur, Delhi, Ujjain, Mathura, and Varanasi." },
  { type: "fact", monumentId: "nalanda-ruins", icon: "💡", prompt: "Approximately how many students were enrolled at Nalanda University at its peak?", options: shuffle(["10,000", "500", "50,000", "2,000"]), explanation: "At its height in the 7th century CE, Nalanda accommodated approximately 10,000 students from across Asia." },
  { type: "identify", monumentId: "nalanda-ruins", icon: "🔍", prompt: "Who destroyed the great library of Nalanda University?", options: shuffle(["Bakhtiyar Khilji (1193 CE)", "Mahmud of Ghazni", "Timur Lang", "Aurangzeb"]), explanation: "Bakhtiyar Khilji's forces sacked Nalanda around 1193 CE; the massive library burned for months, destroying millions of manuscripts." },
  { type: "feature", monumentId: "nalanda-ruins", icon: "✨", prompt: "Which Chinese scholar visited Nalanda University in the 7th century CE and left detailed accounts?", options: shuffle(["Xuanzang (Hiuen Tsang)", "Marco Polo", "Fa Hien", "Ibn Battuta"]), explanation: "Chinese Buddhist scholar Xuanzang spent 5 years at Nalanda (629–645 CE) and documented its 10,000 students, vast library, and courses." },
  { type: "feature", monumentId: "chittor-fort", icon: "✨", prompt: "What is the Vijay Stambha inside Chittor Fort?", options: shuffle(["A 37-metre Tower of Victory built in 1448", "A royal mausoleum for Rana Kumbha", "A lighthouse on the fort ramparts", "A water tower for the fort garrison"]), explanation: "Vijay Stambha (Tower of Victory) is a 37-metre nine-storey carved tower built by Rana Kumbha in 1448 to celebrate his defeat of Mahmud Khilji." },
  { type: "fact", monumentId: "chittor-fort", icon: "💡", prompt: "What was 'Jauhar' — the act famously associated with Chittor Fort?", options: shuffle(["Mass self-immolation by Rajput women to preserve honour", "A Rajput war ceremony before battle", "The annual festival of Chittor Fort", "A military formation used in the fort's defence"]), explanation: "Jauhar was a Rajput practice of mass self-immolation by women when defeat was certain, to preserve honour. It occurred three times at Chittor." },
  { type: "identify", monumentId: "chittor-fort", icon: "🔍", prompt: "Chittor Fort is the largest fort in India. How large is it?", options: shuffle(["700 acres (about 2.8 sq km)", "200 acres (about 0.8 sq km)", "1,500 acres (about 6 sq km)", "50 acres (about 0.2 sq km)"]), explanation: "Chittor Fort sprawls across 700 acres on a 180-metre-high mesa — the largest fort complex in India." },
  { type: "feature", monumentId: "kailasa-temple", icon: "✨", prompt: "What makes the Kailasa Temple at Ellora unique among all structures in India?", options: shuffle(["It is carved top-down from a single rock cliff", "It is built entirely without cement", "It has no windows or natural light", "It was built in a single day according to legend"]), explanation: "Kailasa Temple (Cave 16) is the world's largest monolithic rock excavation — the entire temple was carved downward from a single basalt cliff face." },
  { type: "dynasty", monumentId: "kailasa-temple", icon: "👑", prompt: "Which dynasty built the Kailasa Temple at Ellora in the 8th century CE?", options: shuffle(["Rashtrakuta Dynasty", "Chalukya Dynasty", "Chola Dynasty", "Pallava Dynasty"]), explanation: "The Rashtrakuta king Krishna I commissioned the Kailasa Temple around 756–773 CE as a tribute to Shiva as Mount Kailash." },
  { type: "fact", monumentId: "kailasa-temple", icon: "💡", prompt: "How much rock was removed to create the Kailasa Temple at Ellora?", options: shuffle(["About 400,000 tonnes", "About 10,000 tonnes", "About 1 million tonnes", "About 5,000 tonnes"]), explanation: "An estimated 400,000 tonnes of basalt rock was removed by hand using chisels and hammers — all carved from a single hillside." },
  // ── BATCH 3: 50 NEW MONUMENTS QUIZ QUESTIONS ──────────────────────────
  { type: "identify", monumentId: "mehrangarh-fort", icon: "🔍", prompt: "Mehrangarh Fort towers above which Indian 'Blue City'?", options: shuffle(["Jodhpur", "Jaisalmer", "Bikaner", "Jaipur"]), explanation: "Mehrangarh Fort rises 125 metres above Jodhpur — the 'Blue City' — named for the blue-painted houses clustered below the fort's cliff." },
  { type: "feature", monumentId: "mehrangarh-fort", icon: "✨", prompt: "How many successive gates (pols) does a visitor pass through to enter Mehrangarh Fort?", options: shuffle(["Seven gates", "Three gates", "Ten gates", "One gate"]), explanation: "Mehrangarh has seven successive gateways (pols), each built by a different ruler, with iron spike-studded doors to prevent war elephant attacks." },
  { type: "fact", monumentId: "mehrangarh-fort", icon: "💡", prompt: "At which world-famous music festival held at Mehrangarh Fort is Rajasthani folk music celebrated annually?", options: shuffle(["RIFF (Rajasthan International Folk Festival)", "Jaipur Literature Festival", "Pushkar Camel Fair", "Jodhpur Flamenco Festival"]), explanation: "The RIFF (Rajasthan International Folk Festival) is held at Mehrangarh every October, attracting musicians from across the world." },
  { type: "identify", monumentId: "jaisalmer-fort", icon: "🔍", prompt: "What nickname is given to Jaisalmer Fort due to the colour of its sandstone?", options: shuffle(["Sonar Qila (Golden Fort)", "Lal Qila (Red Fort)", "Safed Qila (White Fort)", "Kala Qila (Black Fort)"]), explanation: "Jaisalmer Fort is called Sonar Qila (Golden Fort) because its yellow Jaisalmer limestone glows golden at sunrise and sunset." },
  { type: "feature", monumentId: "jaisalmer-fort", icon: "✨", prompt: "What makes Jaisalmer Fort unique among Indian forts?", options: shuffle(["It is one of the few living forts with ~3,000 residents inside", "It is the only fort made of white marble", "It has the tallest walls in Rajasthan", "It has never been photographed"]), explanation: "Jaisalmer Fort is one of the world's few living forts — approximately 3,000 people still live within its walls today." },
  { type: "fact", monumentId: "jaisalmer-fort", icon: "💡", prompt: "In which 1975 Bengali film by Satyajit Ray does Jaisalmer Fort appear prominently?", options: shuffle(["Sonar Kella (Golden Fortress)", "Charulata", "Pather Panchali", "Devi"]), explanation: "Satyajit Ray's beloved 1975 film 'Sonar Kella' (The Golden Fortress) features Jaisalmer Fort and helped bring it to national fame." },
  { type: "fact", monumentId: "kumbhalgarh-fort", icon: "💡", prompt: "Kumbhalgarh Fort's outer wall is 36 km long — making it second only to which other wall globally?", options: shuffle(["The Great Wall of China", "Hadrian's Wall (Britain)", "The Berlin Wall", "The Wall of Ávila (Spain)"]), explanation: "Kumbhalgarh's 36-km outer wall is the second-longest continuous wall in the world, after the Great Wall of China." },
  { type: "identify", monumentId: "kumbhalgarh-fort", icon: "🔍", prompt: "Which great Rajput hero was born inside Kumbhalgarh Fort in 1540 CE?", options: shuffle(["Maharana Pratap", "Prithviraj Chauhan", "Rana Sanga", "Hemchandra Vikramaditya"]), explanation: "Maharana Pratap — the legendary Rajput warrior who resisted Mughal conquest of Mewar — was born in the Badal Mahal within Kumbhalgarh Fort." },
  { type: "feature", monumentId: "kumbhalgarh-fort", icon: "✨", prompt: "How many temples are contained within Kumbhalgarh Fort's 36-km perimeter?", options: shuffle(["360 temples (300 Jain + 60 Hindu)", "12 temples", "50 temples", "Over 1,000 temples"]), explanation: "Kumbhalgarh Fort contains 360 temples — 300 Jain and 60 Hindu — spread across its enormous walled perimeter." },
  { type: "identify", monumentId: "junagarh-fort", icon: "🔍", prompt: "Why is Junagarh Fort historically remarkable compared to other Rajasthani forts?", options: shuffle(["It was never conquered", "It is the tallest fort in Rajasthan", "It is built entirely of marble", "It contains the oldest museum in India"]), explanation: "Junagarh is one of the very few major Rajasthani forts that was never conquered by any enemy army throughout its history." },
  { type: "city", monumentId: "junagarh-fort", icon: "🏙️", prompt: "In which Rajasthani city is Junagarh Fort located?", options: shuffle(["Bikaner", "Jodhpur", "Ajmer", "Jaisalmer"]), explanation: "Junagarh Fort is in Bikaner, Rajasthan — built in 1593 CE by Raja Rai Singh, a general in Emperor Akbar's army." },
  { type: "feature", monumentId: "junagarh-fort", icon: "✨", prompt: "What unusual WWII artefact is kept in Junagarh Fort's museum?", options: shuffle(["A biplane used in WWI, gifted by the British", "A German submarine periscope", "Adolf Hitler's pistol", "A Japanese Zero fighter"]), explanation: "One of only two surviving WWI biplanes in the world is kept at Junagarh Fort — it was gifted to the Maharaja of Bikaner by the British." },
  { type: "identify", monumentId: "udaipur-city-palace", icon: "🔍", prompt: "City Palace Udaipur overlooks which famous lake?", options: shuffle(["Lake Pichola", "Fateh Sagar Lake", "Jaisamand Lake", "Siliserh Lake"]), explanation: "The City Palace overlooks Lake Pichola — its white marble and limestone facades reflected in the lake create one of India's most photographed views." },
  { type: "feature", monumentId: "udaipur-city-palace", icon: "✨", prompt: "What is the famous Mor Chowk inside Udaipur City Palace?", options: shuffle(["Peacock Courtyard with glass mosaic peacocks representing three seasons", "A courtyard shaped like a peacock's tail", "The Maharana's private prayer room", "A mirror-lined dancing hall"]), explanation: "Mor Chowk (Peacock Courtyard) has three glass mosaic peacocks — representing the three seasons of summer, winter, and monsoon — each in a different colour." },
  { type: "dynasty", monumentId: "udaipur-city-palace", icon: "👑", prompt: "The City Palace was built over 400 years by how many successive kings of the Mewar Rajput dynasty?", options: shuffle(["22 successive Mewar kings", "7 kings", "One king (Udai Singh II)", "50 kings"]), explanation: "22 successive Maharanas of the Mewar dynasty added to the palace over four centuries — from Maharana Udai Singh II (1559) onwards." },
  { type: "feature", monumentId: "ranakpur-temple", icon: "✨", prompt: "How many uniquely carved marble pillars does the Ranakpur Jain Temple contain?", options: shuffle(["1,444 pillars — no two alike", "500 pillars", "108 pillars", "2,000 pillars"]), explanation: "Ranakpur Jain Temple has 1,444 intricately carved marble pillars — an extraordinary achievement, with every single pillar unique in its carving." },
  { type: "dynasty", monumentId: "ranakpur-temple", icon: "👑", prompt: "Who commissioned the Ranakpur Chaturmukha temple in 1437 CE?", options: shuffle(["Seth Dharana Shah (a wealthy Jain merchant)", "Maharana Kumbha of Mewar", "Akbar the Great", "Rana Sanga"]), explanation: "Seth Dharana Shah, a wealthy Jain merchant and minister, built the temple over 65 years from 1437 CE using white Makrana marble." },
  { type: "fact", monumentId: "ranakpur-temple", icon: "💡", prompt: "To which Jain deity is the Ranakpur Temple primarily dedicated?", options: shuffle(["Adinatha (Rishabhanatha), the 1st Jain Tirthankara", "Mahavira, the 24th Tirthankara", "Parshvanatha, the 23rd Tirthankara", "Neminatha, the 22nd Tirthankara"]), explanation: "Ranakpur is a Chaturmukha (four-faced) temple dedicated to Adinatha (Rishabhanatha), the first of the 24 Jain Tirthankaras." },
  { type: "identify", monumentId: "dilwara-temples", icon: "🔍", prompt: "Where are the Dilwara Jain Temples located?", options: shuffle(["Mount Abu, Rajasthan", "Ranakpur, Rajasthan", "Palitana, Gujarat", "Shravanabelagola, Karnataka"]), explanation: "The Dilwara Temples are on Mount Abu — Rajasthan's only hill station — at an elevation of about 1,220 metres in the Aravalli Range." },
  { type: "feature", monumentId: "dilwara-temples", icon: "✨", prompt: "Why are the Dilwara Temples considered exceptional despite their plain exterior?", options: shuffle(["The interior marble carving is of incomparable detail and density", "They are the oldest Jain temples in India", "They are built on a floating platform", "They change colour with seasons"]), explanation: "From the outside, the Dilwara temples look plain — the extraordinary revelation is the incomparably intricate white marble carving inside every chamber." },
  { type: "fact", monumentId: "dilwara-temples", icon: "💡", prompt: "According to tradition, how were the craftsmen at Dilwara Temples paid for their work?", options: shuffle(["In gold equal to the weight of marble dust they produced daily", "With land grants from the king", "With free housing for life", "By weight of silver per sculpture completed"]), explanation: "Craftsmen at Dilwara were reportedly paid in gold equal to the weight of marble dust they produced each day — incentivising ever-finer carving." },
  { type: "identify", monumentId: "ajmer-dargah", icon: "🔍", prompt: "To which Sufi saint is the Ajmer Sharif Dargah dedicated?", options: shuffle(["Hazrat Khwaja Moinuddin Chishti", "Hazrat Nizamuddin Auliya", "Baba Farid", "Amir Khusro"]), explanation: "The Ajmer Sharif Dargah is the shrine of Hazrat Khwaja Moinuddin Chishti, who came to India in 1192 CE and founded the Chishti order." },
  { type: "fact", monumentId: "ajmer-dargah", icon: "💡", prompt: "How many pilgrims attend the Urs (death anniversary) festival at Ajmer Sharif each year?", options: shuffle(["Over 500,000 pilgrims from all faiths", "About 5,000 pilgrims", "Only Muslims are permitted", "About 50,000 pilgrims"]), explanation: "The annual Urs festival at Ajmer Sharif draws over 500,000 pilgrims of all faiths — Hindus, Muslims, Sikhs, and Christians all visit this syncretic shrine." },
  { type: "feature", monumentId: "ajmer-dargah", icon: "✨", prompt: "Which Mughal Emperor made famous barefoot pilgrimages from Agra to Ajmer Sharif?", options: shuffle(["Akbar", "Aurangzeb", "Shah Jahan", "Babur"]), explanation: "Emperor Akbar regularly made barefoot pilgrimages from Agra to Ajmer — a journey of over 400 km — to pray at Khwaja Moinuddin Chishti's tomb." },
  { type: "identify", monumentId: "purana-qila", icon: "🔍", prompt: "Purana Qila is believed to be built on the site of which legendary ancient city from the Mahabharata?", options: shuffle(["Indraprastha (the Pandava capital)", "Hastinapura (the Kaurava capital)", "Dwarka (Krishna's city)", "Lanka (Ravana's kingdom)"]), explanation: "Archaeological excavations at Purana Qila have found continuous habitation since 2500 BCE — the site is traditionally identified as the Pandava city of Indraprastha." },
  { type: "fact", monumentId: "purana-qila", icon: "💡", prompt: "How did Mughal Emperor Humayun die at Purana Qila in 1556?", options: shuffle(["He fell down the stairs of the Sher Mandal library tower", "He was poisoned at a feast", "He died in battle outside the fort", "He died of plague inside the fort"]), explanation: "Humayun died in January 1556 when he slipped and fell down the steep stairs of the Sher Mandal octagonal tower while descending with his hands full of books." },
  { type: "dynasty", monumentId: "purana-qila", icon: "👑", prompt: "Who primarily built the current Purana Qila structure?", options: shuffle(["Sher Shah Suri (completed by Humayun)", "Akbar", "Shah Jahan", "Aurangzeb"]), explanation: "Sher Shah Suri started and largely completed Purana Qila (Sher Garh) after ousting Humayun. The mosque inside is entirely Sher Shah's work (1541 CE)." },
  { type: "identify", monumentId: "safdarjung-tomb", icon: "🔍", prompt: "Safdarjung's Tomb is known as the last example of which architectural tradition?", options: shuffle(["Mughal garden tomb tradition", "Rajput fort architecture", "South Indian gopuram style", "Bengali terracotta temple style"]), explanation: "Safdarjung's Tomb (1754 CE) is considered the last great Mughal garden tomb — after this, the Mughal architectural tradition declined rapidly." },
  { type: "fact", monumentId: "safdarjung-tomb", icon: "💡", prompt: "Who was Safdarjung, for whom this Delhi tomb was built?", options: shuffle(["Prime Minister of the Mughal Empire under Muhammad Shah", "A Rajput general who served the Mughals", "A poet at the Mughal court", "The last Mughal Emperor"]), explanation: "Mirza Muqim Abul Mansur Khan 'Safdarjung' was the Prime Minister (Wazir) of the Mughal Empire under Emperor Muhammad Shah, and later under Ahmad Shah Bahadur." },
  { type: "feature", monumentId: "safdarjung-tomb", icon: "✨", prompt: "What are the names of the two pavilions flanking the main gateway of Safdarjung's Tomb?", options: shuffle(["Moti Mahal and Jangli Mahal", "Diwan-i-Khas and Diwan-i-Aam", "Sheesh Mahal and Phool Mahal", "Rang Mahal and Mumtaz Mahal"]), explanation: "The two pavilions are Moti Mahal (Pearl Palace) and Jangli Mahal (Wilderness Palace) — their whimsical names hint at their original decorative splendour." },
  { type: "identify", monumentId: "jama-masjid", icon: "🔍", prompt: "How many worshippers can the courtyard of Jama Masjid, Delhi accommodate?", options: shuffle(["25,000", "5,000", "100,000", "1,000"]), explanation: "Jama Masjid's vast 100×100-metre sandstone courtyard can accommodate 25,000 worshippers — making it India's largest mosque by congregation capacity." },
  { type: "dynasty", monumentId: "jama-masjid", icon: "👑", prompt: "Which Mughal emperor built Jama Masjid, Delhi — his last major architectural project?", options: shuffle(["Shah Jahan", "Akbar", "Aurangzeb", "Jahangir"]), explanation: "Shah Jahan built Jama Masjid between 1644 and 1656 CE — his final major architectural work before the end of his reign." },
  { type: "feature", monumentId: "jama-masjid", icon: "✨", prompt: "A sacred relic kept in Jama Masjid includes what object associated with the Prophet Muhammad?", options: shuffle(["A sandal of the Prophet and a hair from his beard", "A fragment of the Kaaba stone", "A piece of the Prophet's cloak", "The earliest Quran manuscript"]), explanation: "Jama Masjid houses several relics including a sandal of the Prophet, a strand of his beard hair, and an impression of his footprint in stone." },
  { type: "identify", monumentId: "itmad-ud-daulah", icon: "🔍", prompt: "Why is Itmad-ud-Daulah's Tomb nicknamed the 'Baby Taj'?", options: shuffle(["It pioneered white marble and pietra dura inlay — techniques perfected in the Taj Mahal", "It is a miniature copy of the Taj Mahal", "It was built by the same architect as the Taj Mahal", "It is located next to the Taj Mahal"]), explanation: "Built 15 years before the Taj Mahal, Itmad-ud-Daulah pioneered white marble construction and pietra dura inlay — the techniques Shahjahan later perfected in the Taj." },
  { type: "fact", monumentId: "itmad-ud-daulah", icon: "💡", prompt: "Who built Itmad-ud-Daulah's Tomb and for whom?", options: shuffle(["Empress Nur Jahan built it for her father Mirza Ghiyas Beg", "Shah Jahan built it for his wife Mumtaz", "Jahangir built it for Nur Jahan", "Akbar built it for Birbal"]), explanation: "Empress Nur Jahan built this tomb for her father Mirza Ghiyas Beg (title: Itmad-ud-Daulah) between 1622 and 1628 — a woman commissioning a major Mughal monument." },
  { type: "feature", monumentId: "itmad-ud-daulah", icon: "✨", prompt: "What architectural innovation did Itmad-ud-Daulah's Tomb introduce to Mughal architecture?", options: shuffle(["It was the first Mughal structure built entirely of white marble with pietra dura inlay", "It introduced the double dome to India", "It was the first mosque with minarets", "It introduced the Charbagh garden layout"]), explanation: "Itmad-ud-Daulah was the first Mughal structure entirely of white marble and the first to use extensive pietra dura (semi-precious stone inlay) — a Florentine technique." },
  { type: "identify", monumentId: "akbars-tomb", icon: "🔍", prompt: "What is architecturally unique about Akbar's Tomb at Sikandra compared to all other Mughal mausoleums?", options: shuffle(["It has no dome — topped by an open marble platform", "It is the tallest Mughal tomb", "It is built entirely of black marble", "It is the only Mughal tomb without a garden"]), explanation: "Akbar's Tomb is unique — instead of a dome, it is crowned with an open-air white marble platform in a stepped pyramidal design, unlike any other Mughal mausoleum." },
  { type: "fact", monumentId: "akbars-tomb", icon: "💡", prompt: "Akbar's Tomb uniquely blends which religions' architectural motifs?", options: shuffle(["Hindu, Buddhist, Jain, and Islamic", "Only Islamic", "Hindu and Islamic only", "Greek and Islamic"]), explanation: "Akbar's Tomb reflects his syncretic philosophy — it combines Hindu, Buddhist, Jain, and Islamic architectural elements in a single structure, as Akbar embraced all faiths." },
  { type: "dynasty", monumentId: "akbars-tomb", icon: "👑", prompt: "Who completed the construction of Akbar's Tomb after Akbar's death in 1605?", options: shuffle(["His son Jahangir", "His grandson Shah Jahan", "Akbar's minister Birbal", "Empress Nur Jahan"]), explanation: "Akbar designed his own tomb before his death. His son Jahangir completed construction, adding the ornate southern gateway and the white marble upper platform." },
  { type: "identify", monumentId: "leh-palace", icon: "🔍", prompt: "Leh Palace was modelled on which famous Tibetan palace?", options: shuffle(["The Potala Palace of Lhasa, Tibet", "The Norbulingka Summer Palace", "The Jokhang Temple", "The Tashilhunpo Monastery"]), explanation: "Leh Palace was explicitly modelled on the Potala Palace of Lhasa, Tibet — both share the same tapering, multi-storey earthen and stone construction style." },
  { type: "feature", monumentId: "leh-palace", icon: "✨", prompt: "At what elevation is Leh Palace situated, making it one of the world's highest royal palaces?", options: shuffle(["3,524 metres (11,562 feet)", "1,500 metres (4,921 feet)", "5,000 metres (16,404 feet)", "2,000 metres (6,561 feet)"]), explanation: "Leh Palace stands at 3,524 metres (11,562 feet) above sea level — one of the highest royal palaces in the world." },
  { type: "fact", monumentId: "leh-palace", icon: "💡", prompt: "Why did the Namgyal royal family abandon Leh Palace in the 19th century?", options: shuffle(["Dogra forces conquered Ladakh and the family moved to Stok", "The palace caught fire", "The family moved to Lhasa Tibet", "A devastating earthquake damaged the palace"]), explanation: "When the Dogra forces of Jammu conquered Ladakh in 1834–1842, the Namgyal family was compelled to abandon the palace and move to the Stok Palace." },
  { type: "identify", monumentId: "hemis-monastery", icon: "🔍", prompt: "Hemis Monastery is famous for possessing one of the world's largest thangka paintings. How often is it displayed?", options: shuffle(["Once every 12 years", "Every year at the Hemis Festival", "Every 50 years", "Only when the Dalai Lama visits"]), explanation: "Hemis possesses a 12-storey-tall silk thangka (appliqué painting) — one of the largest in the world. It is displayed publicly only once every 12 years during a special festival." },
  { type: "fact", monumentId: "hemis-monastery", icon: "💡", prompt: "Hemis Monastery is the wealthiest monastery in Ladakh and belongs to which school of Tibetan Buddhism?", options: shuffle(["Drukpa Kagyu", "Gelugpa (Yellow Hat)", "Nyingmapa", "Sakya"]), explanation: "Hemis belongs to the Drukpa Kagyu school of Tibetan Buddhism — the same tradition founded by Milarepa and Gampopa in 12th-century Tibet." },
  { type: "feature", monumentId: "hemis-monastery", icon: "✨", prompt: "What is the most famous cultural event held at Hemis Monastery each year?", options: shuffle(["Hemis Festival — monks perform Cham masked dances celebrating Guru Padmasambhava", "Losar (Tibetan New Year) celebrations", "The Kalachakra ceremony", "A pilgrimage march around the monastery"]), explanation: "The Hemis Festival (Tsechu) is held in June or July — monks perform Cham dances in elaborate masks and costumes in the monastery courtyard." },
  { type: "identify", monumentId: "golconda-fort", icon: "🔍", prompt: "Which world-famous diamonds are historically associated with the mines under Golconda's control?", options: shuffle(["The Koh-i-Noor, Hope Diamond, and Darya-ye-Noor", "The Cullinan and Regent Diamond", "The Pink Star and Blue Moon", "The Orlov and Shah Diamonds"]), explanation: "The Koh-i-Noor (now in the British Crown Jewels), the Hope Diamond (blue, now in the Smithsonian), and the Darya-ye-Noor (now in Tehran) all originated from Golconda mines." },
  { type: "feature", monumentId: "golconda-fort", icon: "✨", prompt: "What remarkable acoustic engineering feature of Golconda Fort was used for military security?", options: shuffle(["A handclap at the main gate is heard at the summit 1 km away", "Cannons could be heard 5 km outside the fort", "The walls echo enemy footsteps from 500 metres", "A bell at the gate rings automatically when the gate opens"]), explanation: "A handclap or whistle at Fateh Darwaza (Victory Gate) at the base can be heard clearly at the Bala Hissar throne room at the summit — 1 km away — by deliberate acoustic engineering." },
  { type: "dynasty", monumentId: "golconda-fort", icon: "👑", prompt: "Which dynasty built Golconda Fort into a powerful capital in the 16th century?", options: shuffle(["Qutb Shahi dynasty", "Kakatiya dynasty", "Nizam of Hyderabad", "Bahmani Sultanate"]), explanation: "The Qutb Shahi dynasty (1518–1687 CE) expanded Golconda into a major capital and diamond-trading power. The last Qutb Shahi ruler was defeated by Aurangzeb in 1687." },
  { type: "identify", monumentId: "ramappa-temple", icon: "🔍", prompt: "What is extraordinary about the bricks used in the Ramappa Temple's shikhara tower?", options: shuffle(["They float on water — made from a lightweight special material", "They are carved from single-crystal granite", "They are made from recycled ancient Roman bricks", "They glow in the dark"]), explanation: "The Ramappa Temple's shikhara is built with 'floating bricks' — extremely lightweight bricks made from a porous fired slag mixture, so light they float on water." },
  { type: "fact", monumentId: "ramappa-temple", icon: "💡", prompt: "After whom is the Ramappa Temple named — unusually, not after its deity?", options: shuffle(["Its sculptor, Ramappa", "King Ramarajulu who commissioned it", "A local saint named Rama", "The village of Ramapuram"]), explanation: "The temple is named after its architect-sculptor Ramappa — one of very few temples in India named after its sculptor rather than its presiding deity." },
  { type: "feature", monumentId: "ramappa-temple", icon: "✨", prompt: "What are the 'madanika' sculptures that adorn the exterior corners of the Ramappa Temple?", options: shuffle(["Graceful dancing maiden bracket figures in dynamic poses", "Stone lions guarding the entrance", "Depictions of the 10 avatars of Vishnu", "Portrait sculptures of the Kakatiya royal family"]), explanation: "The madanika are stunning sculptural bracket figures of slender dancing women in various poses — considered the finest examples of Kakatiya figurative sculpture." },
  { type: "identify", monumentId: "warangal-fort", icon: "🔍", prompt: "What are the most distinctive architectural features of Warangal Fort?", options: shuffle(["Four massive ornamental stone arches (toranas) at the four cardinal gates", "Seven concentric walls", "A 50-metre-tall minaret", "A moat filled with saltwater"]), explanation: "Warangal Fort's most iconic features are its four massive carved stone arches (toranas), each over 10 metres tall, marking the north, south, east, and west entrances." },
  { type: "dynasty", monumentId: "warangal-fort", icon: "👑", prompt: "Which medieval traveller visited the Kakatiya kingdom at Warangal in 1289 CE and praised its diamond trade?", options: shuffle(["Marco Polo", "Ibn Battuta", "Xuanzang", "Niccolò Da Conti"]), explanation: "Marco Polo visited the Kakatiya kingdom in 1289 CE and wrote glowing accounts of its fine cotton muslin (muslin), diamond trade, and the city of Warangal." },
  { type: "fact", monumentId: "warangal-fort", icon: "💡", prompt: "What ended the Kakatiya dynasty at Warangal in 1323 CE?", options: shuffle(["Captured by the Delhi Sultanate under Muhammad bin Tughluq", "Conquered by the Vijayanagara Empire", "Destroyed by a Mongol invasion", "Abandoned due to a severe drought"]), explanation: "The Delhi Sultanate under Ulugh Khan (later Muhammad bin Tughluq) captured Warangal in 1323 CE after a prolonged siege, ending the Kakatiya dynasty." },
  { type: "identify", monumentId: "chowmahalla-palace", icon: "🔍", prompt: "Who were the Nizams of Hyderabad, who lived at Chowmahalla Palace?", options: shuffle(["The rulers of Hyderabad State — for a time the world's richest people", "Mughal governors of the Deccan", "The kings of the Vijayanagara Empire", "The Qutb Shahi rulers of Golconda"]), explanation: "The Nizams of Hyderabad (Asaf Jah dynasty) ruled Hyderabad State from 1724–1948. The last Nizam, Mir Osman Ali Khan, was listed by Time magazine in 1937 as the world's wealthiest person." },
  { type: "feature", monumentId: "chowmahalla-palace", icon: "✨", prompt: "What impressive chandelier feature marks the Khilwat (Durbar) Hall of Chowmahalla Palace?", options: shuffle(["Belgian crystal chandeliers weighing over 1,000 kg each", "Venetian glass chandeliers holding 10,000 candles", "Gold chandeliers set with 5,000 diamonds", "Murano glass chandeliers from 17th-century Venice"]), explanation: "The Khilwat Hall (Durbar Hall) features Belgian crystal chandeliers, each weighing over 1,000 kg — imported at enormous expense by the Nizams for royal audiences." },
  { type: "fact", monumentId: "chowmahalla-palace", icon: "💡", prompt: "What is Chowmahalla literally translated as?", options: shuffle(["Four Palaces", "Grand Pavilion", "Royal Mansion", "Twin Towers"]), explanation: "Chowmahalla comes from Persian: 'Chār' (four) + 'Maḥallāt' (palaces) — the complex indeed consists of four palaces arranged around two formal courtyards." },
  { type: "fact", monumentId: "bidar-fort", icon: "💡", prompt: "What unique traditional metalwork art form originated in Bidar?", options: shuffle(["Bidriware — silver inlay on blackened zinc alloy", "Kundan jewellery", "Meenakari enamelwork", "Thewa jewellery"]), explanation: "Bidriware is a craft unique to Bidar — intricate silver designs inlaid into a blackened zinc-copper alloy, a technique developed under the Bahmani Sultanate in the 14th–15th centuries." },
  { type: "identify", monumentId: "bidar-fort", icon: "🔍", prompt: "Bidar Fort contains the ruins of the Mahmud Gawan Madrasa. What happened to this famous medieval college?", options: shuffle(["Accidentally destroyed when its gunpowder store exploded in 1696", "Demolished by Aurangzeb in the 17th century", "Burned by Vijayanagara forces in the 15th century", "Still fully intact and used as a school"]), explanation: "The madrasa burned in 1696 when an accidental explosion ignited the gunpowder arsenal stored inside — destroying much of the building that was once one of medieval India's great institutions." },
  { type: "dynasty", monumentId: "bidar-fort", icon: "👑", prompt: "Bidar was the capital of which Deccan sultanate from the 15th century?", options: shuffle(["Bahmani Sultanate", "Qutb Shahi Sultanate", "Nizam Shahi Sultanate", "Adil Shahi Sultanate"]), explanation: "Bidar became the capital of the Bahmani Sultanate in 1428 CE — the first major Islamic kingdom of the Deccan, which eventually split into the five Deccan Sultanates." },
  { type: "identify", monumentId: "hoysaleswara-temple", icon: "🔍", prompt: "The Hoysaleswara Temple at Halebidu has no shikhara (tower). What does it have instead?", options: shuffle(["An unbroken horizontal band of dense sculptural friezes on the entire exterior", "A flat wooden roof", "A large central dome like a mosque", "A thatched roof in traditional style"]), explanation: "Hoysaleswara has no shikhara tower — instead, every centimetre of its exterior walls is covered with 11 horizontal bands of sculptural carving, making it the most densely carved building in India." },
  { type: "dynasty", monumentId: "hoysaleswara-temple", icon: "👑", prompt: "Which medieval dynasty built the Hoysaleswara Temple at Halebidu?", options: shuffle(["Hoysala Empire", "Chalukya dynasty", "Vijayanagara Empire", "Kakatiya dynasty"]), explanation: "The Hoysala Empire built Hoysaleswara Temple beginning in 1121 CE — the Hoysalas were the great art patrons of medieval Karnataka (12th–14th century CE)." },
  { type: "fact", monumentId: "hoysaleswara-temple", icon: "💡", prompt: "Why did the construction of Hoysaleswara Temple take over 90 years?", options: shuffle(["Each of the 340+ sculptures required painstaking individual carving", "The stone was quarried from extremely distant locations", "Multiple wars repeatedly interrupted construction", "The architects kept changing the design"]), explanation: "The extraordinary density of carving required — over 340 different sculptural panels — meant construction continued for over 90 years without ever being fully completed." },
  { type: "identify", monumentId: "pattadakal", icon: "🔍", prompt: "What makes Pattadakal architecturally unique among Indian temple sites?", options: shuffle(["It shows North Indian (Nagara) and South Indian (Dravida) temple styles at the same site", "It is built entirely underground", "All temples face west instead of east", "The temples are built in a circular formation"]), explanation: "Pattadakal contains both North Indian Nagara-style and South Indian Dravida-style temples at the same location — it is a living laboratory of 7th–8th century Indian temple architecture." },
  { type: "dynasty", monumentId: "pattadakal", icon: "👑", prompt: "Who built the largest temple at Pattadakal — the Virupaksha Temple (733 CE)?", options: shuffle(["Queen Lokamahadevi to celebrate her husband's victory over the Pallavas", "King Vikramaditya II himself", "Emperor Pulakesi II", "A local saint named Virupa"]), explanation: "Queen Lokamahadevi commissioned the Virupaksha Temple in 733 CE to commemorate her husband Vikramaditya II's military victory over the Pallava dynasty." },
  { type: "feature", monumentId: "pattadakal", icon: "✨", prompt: "What was Pattadakal's primary ceremonial function in the Chalukya kingdom?", options: shuffle(["The coronation city of Chalukya kings — 'patta' means crown in Kannada", "The royal burial ground of Chalukya rulers", "The site of the Chalukya military academy", "The main trading port of the Chalukya empire"]), explanation: "Pattadakal served as the coronation city for Chalukya kings — 'patta' in Kannada means 'crown' and 'dakal' means 'to receive' — making it the symbolic heart of royal power." },
  { type: "identify", monumentId: "badami-caves", icon: "🔍", prompt: "The Badami Cave Temples are carved into what type of distinctive geological feature?", options: shuffle(["Red ochre sandstone cliffs above a lake", "White limestone caves", "Black basalt cliffs", "Yellow granite outcroppings"]), explanation: "Badami's four cave temples are carved directly into dramatic red-ochre sandstone cliffs rising above the tranquil Agastya Lake — the red stone gives the caves their warm, distinctive colour." },
  { type: "fact", monumentId: "badami-caves", icon: "💡", prompt: "Cave 4 at Badami is a Jain cave — what makes this unusual?", options: shuffle(["The other three caves are Hindu (Shaiva and Vaishnava)", "Cave 4 is the oldest and most elaborate", "Cave 4 was added 500 years after the others", "Cave 4 is the only one open to the public"]), explanation: "Cave 4 is a Jain cave dedicated to Mahavira, while Caves 1-3 are Hindu — this reflects the Chalukyas' religious pluralism, patronising Shaivism, Vaishnavism, and Jainism simultaneously." },
  { type: "dynasty", monumentId: "badami-caves", icon: "👑", prompt: "Which ancient Deccan dynasty carved the Badami Cave Temples in the 6th century CE?", options: shuffle(["Badami Chalukya dynasty", "Rashtrakuta dynasty", "Vijayanagara Empire", "Pallava dynasty"]), explanation: "The Badami Chalukya dynasty (also called Western Chalukyas) carved these caves with their capital at Vatapi (Badami) — making them the oldest major rock-cut temples in Deccan India." },
  { type: "identify", monumentId: "gomateshwara", icon: "🔍", prompt: "The Gomateshwara statue at Sravanabelagola is the world's largest free-standing monolithic statue. How tall is it?", options: shuffle(["18 metres (57 feet)", "50 metres (164 feet)", "10 metres (33 feet)", "30 metres (98 feet)"]), explanation: "The Gomateshwara statue is 18 metres tall and was carved from a single granite boulder in 983 CE — still the world's largest free-standing monolithic statue after 1,000 years." },
  { type: "feature", monumentId: "gomateshwara", icon: "✨", prompt: "What is the once-in-12-years festival where the Gomateshwara statue is anointed?", options: shuffle(["Mahamastakabhisheka — milk, honey, and sandalwood poured over the head", "Kumbh Mela at the statue base", "Paryushana festival", "Diwali celebrations"]), explanation: "Mahamastakabhisheka (head anointing ceremony) is held every 12 years — over a million pilgrims gather to pour pots of milk, honey, turmeric, and coloured powder over the statue's head." },
  { type: "fact", monumentId: "gomateshwara", icon: "💡", prompt: "What is depicted climbing up the legs of the Gomateshwara statue?", options: shuffle(["Stone creepers (vines) — showing how long Bahubali stood in meditation", "A snake coiled around his legs", "Lotus flowers growing from the earth", "Devotees climbing to touch his feet"]), explanation: "Stone creepers are carved growing up the legs and arms of the statue — representing the vines that grew on Bahubali's body during his years of standing meditation." },
  { type: "identify", monumentId: "lepakshi-temple", icon: "🔍", prompt: "What famous architectural mystery at Lepakshi Temple has never been fully explained?", options: shuffle(["A pillar that appears not to touch the floor — a cloth can be passed underneath", "A staircase that appears to spiral infinitely", "A pool of water that never dries despite no source", "A room with no echo despite being completely enclosed"]), explanation: "One of Lepakshi Temple's 70 pillars appears to be suspended — a thin cloth or sheet of paper can be passed under it. It remains an unsolved architectural puzzle." },
  { type: "feature", monumentId: "lepakshi-temple", icon: "✨", prompt: "What is the Nandi at Lepakshi Temple remarkable for?", options: shuffle(["It is one of India's largest Nandi bulls — 4.5 m tall and carved from a single boulder", "It is made of solid gold", "It is the oldest Nandi sculpture in India", "It automatically faces the rising sun each morning"]), explanation: "The monolithic Nandi at Lepakshi is 4.5 metres high and 8.23 metres long — carved from a single granite boulder, one of the largest Nandi sculptures in India." },
  { type: "fact", monumentId: "lepakshi-temple", icon: "💡", prompt: "What does the name 'Lepakshi' mean, connected to the Ramayana?", options: shuffle(["'Rise, O Bird' — what Rama said to the dying eagle Jatayu", "'Land of Wings' — where Ravana's vimana (aerial vehicle) landed", "'Eye of Ram' — referring to a natural eye-shaped rock", "'Seven Hills' — reflecting the terrain"]), explanation: "'Lepakshi' comes from the Telugu words 'Le' (rise) + 'Pakshi' (bird) — according to legend, Lord Rama said 'Le Pakshi!' (Rise, O Bird!) to Jatayu the eagle who died here fighting Ravana." },
  { type: "identify", monumentId: "tirupati-temple", icon: "🔍", prompt: "How many pilgrims visit the Tirupati Venkateswara Temple every single day on average?", options: shuffle(["Over 100,000 pilgrims daily", "About 10,000 daily", "5,000 daily", "500,000 on special festivals only"]), explanation: "Tirupati is the most visited religious site in the world — over 100,000 pilgrims visit on a typical day, rising to 500,000 on major festival days." },
  { type: "fact", monumentId: "tirupati-temple", icon: "💡", prompt: "What do pilgrims traditionally offer at Tirupati as a form of devotion?", options: shuffle(["Their hair (tonsure/head shaving)", "Gold coins equivalent to their weight", "Seven days of fasting", "A barefoot walk up 4,000 steps"]), explanation: "Tonsure (head shaving) is the primary devotional offering at Tirupati — the temple collects and auctions over 50,000 kg of human hair annually." },
  { type: "feature", monumentId: "tirupati-temple", icon: "✨", prompt: "What is the famous Tirupati Laddu, and what special legal protection does it have?", options: shuffle(["A sacred sweet prasadam with a Geographical Indication (GI) tag protecting its recipe", "A gold coin distributed to all pilgrims", "A religious offering only monks can prepare", "A festival only held on Saturdays"]), explanation: "The Tirupati Laddu is a sacred sweet (prasadam) distributed to all pilgrims. It holds a Geographical Indication (GI) tag — the recipe is legally protected as uniquely from Tirupati." },
  { type: "identify", monumentId: "rameswaram-temple", icon: "🔍", prompt: "What record does Ramanathaswamy Temple's outer corridor hold?", options: shuffle(["World's longest temple corridor — 1,212 metres with 1,212 pillars", "World's tallest gopuram", "World's most ancient temple", "World's largest temple complex by area"]), explanation: "The outer prakaram of Ramanathaswamy Temple is 1,212 metres long with 1,212 pillars — the world's longest temple corridor." },
  { type: "fact", monumentId: "rameswaram-temple", icon: "💡", prompt: "What unusual pilgrimage practice do devotees perform inside Ramanathaswamy Temple before darshan?", options: shuffle(["Bathing in all 22 sacred wells (teerthas) inside the temple", "Walking barefoot through all four corridors", "Circumambulating the temple 108 times", "Submerging in the sea before entering"]), explanation: "Pilgrims bathe in all 22 sacred teerthas (wells) inside the temple — each well is believed to have different curative and spiritual properties." },
  { type: "feature", monumentId: "rameswaram-temple", icon: "✨", prompt: "Rameswaram is one of India's four sacred Char Dham sites. What are the other three?", options: shuffle(["Badrinath, Dwarka, and Puri (Jagannath)", "Varanasi, Mathura, and Haridwar", "Kedarnath, Amarnath, and Somnath", "Kashi, Ayodhya, and Vrindavan"]), explanation: "The four Char Dhams are Badrinath (Himalayas), Dwarka (Gujarat), Puri (Odisha), and Rameswaram (Tamil Nadu) — a pilgrimage circuit covering all four corners of India." },
  { type: "identify", monumentId: "gangaikonda-cholapuram", icon: "🔍", prompt: "What does 'Gangaikonda Cholapuram' mean, and what achievement does it celebrate?", options: shuffle(["'City of the Chola who conquered the Ganga' — celebrating Rajendra Chola's campaign to the Ganges", "'City of the Great Chola' — celebrating Rajaraja's coronation", "'Chola fort on the Ganges' — a military outpost", "'City of victory' — generic Chola title"]), explanation: "Gangaikonda Cholapuram means 'City of the Chola who took the Ganga' — built by Rajendra Chola I who led his army to the Ganges river and brought back pots of Ganga water." },
  { type: "fact", monumentId: "gangaikonda-cholapuram", icon: "💡", prompt: "How did Rajendra Chola I symbolically declare his northern victory at his new capital?", options: shuffle(["Pots of Ganga water were poured into the temple tank (Shiva Ganga)", "He built a replica of Varanasi's ghats", "He carved a map of his conquests on the temple walls", "He melted down enemy kings' crowns to make the vimana's golden tip"]), explanation: "Rajendra Chola I had pots of sacred Ganga water carried south by his defeated enemies and poured into the sacred tank at his new temple capital — a powerful symbolic act." },
  { type: "dynasty", monumentId: "gangaikonda-cholapuram", icon: "👑", prompt: "The Brihadeesvarar Temple at Gangaikonda Cholapuram was built by which Chola king?", options: shuffle(["Rajendra Chola I (son of Rajaraja Chola I)", "Rajaraja Chola I (builder of Thanjavur Brihadeeswara)", "Kulottunga Chola I", "Rajendra Chola II"]), explanation: "Rajendra Chola I (son of Rajaraja Chola I, who built Thanjavur) built Gangaikonda Cholapuram's Brihadeesvarar Temple in 1035 CE — the second great Chola imperial temple." },
  { type: "identify", monumentId: "basilica-bom-jesus", icon: "🔍", prompt: "Whose mortal remains are preserved in the Basilica of Bom Jesus in Goa?", options: shuffle(["Saint Francis Xavier, the Jesuit missionary who brought Christianity to Asia", "Vasco da Gama, the Portuguese explorer", "Pope John Paul II", "Saint Thomas the Apostle"]), explanation: "The Basilica of Bom Jesus in Old Goa holds the preserved body of Saint Francis Xavier (1506–1552), the Jesuit missionary who evangelised across Asia, from India to Japan." },
  { type: "fact", monumentId: "basilica-bom-jesus", icon: "💡", prompt: "How often is the casket of Saint Francis Xavier opened for the Grand Exposition?", options: shuffle(["Every 10 years", "Every year at Christmas", "Every 50 years", "Only on the saint's death anniversary"]), explanation: "The Grand Exposition of St. Francis Xavier's relics is held every 10 years, drawing millions of pilgrims from around the world to Old Goa." },
  { type: "feature", monumentId: "basilica-bom-jesus", icon: "✨", prompt: "What is remarkable about the construction materials of the Basilica of Bom Jesus?", options: shuffle(["It was built without lime plaster — laterite stone alone was used", "It was built entirely of white Goan marble", "It was prefabricated in Portugal and shipped to India", "It uses no iron or metal fasteners whatsoever"]), explanation: "The Basilica of Bom Jesus was constructed using laterite stone (a local porous stone) without lime plaster in the mortar — a testament to the engineering skill of the Portuguese-era builders." },
  { type: "identify", monumentId: "daulatabad-fort", icon: "🔍", prompt: "Which sultan attempted to move the entire population of Delhi to Daulatabad as a new capital?", options: shuffle(["Muhammad bin Tughluq (1327 CE)", "Alauddin Khilji", "Sher Shah Suri", "Babur"]), explanation: "Muhammad bin Tughluq ordered the entire population of Delhi to march 1,100 km to Daulatabad in 1327 CE — the forced migration resulted in mass deaths and the policy was reversed within two years." },
  { type: "feature", monumentId: "daulatabad-fort", icon: "✨", prompt: "Why was Daulatabad Fort considered virtually impregnable?", options: shuffle(["The basalt rock sides were cut vertically smooth, plus a crocodile moat and dark spiral tunnel", "It had the thickest walls in India", "It was surrounded by an impassable river", "It was built entirely underground"]), explanation: "The fort's defences included: smooth-cut vertical basalt sides (no handholds), a crocodile moat, a pitch-dark spiral tunnel with trap doors and fire outlets — making it nearly impossible to assault." },
  { type: "fact", monumentId: "daulatabad-fort", icon: "💡", prompt: "The Chand Minar inside Daulatabad Fort was modelled on which famous Delhi monument?", options: shuffle(["The Qutub Minar", "The Red Fort", "The Jama Masjid minarets", "The Humayun's Tomb minarets"]), explanation: "The 30-metre Chand Minar inside Daulatabad was built in 1435 CE by Alauddin Bahmani, modelled on the famous Qutub Minar in Delhi — a deliberate statement of Deccan imperial ambition." },
  { type: "fact", monumentId: "aga-khan-palace", icon: "💡", prompt: "What historically significant event took place at the Aga Khan Palace, Pune during 1942–1944?", options: shuffle(["Mahatma Gandhi and Kasturba Gandhi were interned here by the British during the Quit India Movement", "The Indian National Congress was founded here", "The Partition of India was planned here", "Subhas Chandra Bose escaped from here"]), explanation: "The British used the Aga Khan Palace as an internment camp — Mahatma Gandhi, Kasturba Gandhi (who died here), and Sarojini Naidu were detained here during the Quit India Movement." },
  { type: "identify", monumentId: "aga-khan-palace", icon: "🔍", prompt: "Who built the Aga Khan Palace in Pune in 1892?", options: shuffle(["Sultan Muhammad Shah, Aga Khan III, as charity for famine-hit poor", "The Peshwas of the Maratha Empire", "The British East India Company", "Nizam of Hyderabad"]), explanation: "Sultan Muhammad Shah, Aga Khan III (the Ismaili Muslim leader) built the palace in 1892 to provide employment to the rural poor hit by the severe Deccan famine of that year." },
  { type: "feature", monumentId: "aga-khan-palace", icon: "✨", prompt: "What memorial can visitors see at the Aga Khan Palace today?", options: shuffle(["The samadhi of Kasturba Gandhi (Gandhi's wife) who died here in 1944", "The cell where Gandhi wrote the Indian Constitution", "The room where the Quit India resolution was drafted", "A statue of Vasco da Gama"]), explanation: "The Samadhi (memorial) of Kasturba Gandhi — who died in British captivity here in February 1944 — is preserved in the palace garden, along with Gandhi's own ashes." },
  { type: "identify", monumentId: "shaniwar-wada", icon: "🔍", prompt: "Shaniwar Wada was the seat of the Peshwas — who were the Peshwas?", options: shuffle(["Prime Ministers of the Maratha Empire who became its de facto rulers", "The royal family of the Maratha Empire", "Mughal governors of Maharashtra", "The royal priests of the Maratha court"]), explanation: "The Peshwas were the Prime Ministers of the Maratha Empire, who from the 18th century effectively ruled the empire themselves while the Maratha king became a figurehead." },
  { type: "feature", monumentId: "shaniwar-wada", icon: "✨", prompt: "What mysterious event destroyed most of Shaniwar Wada in 1828?", options: shuffle(["A fire of unknown origin that burned for five days", "A lightning strike during a storm", "A deliberate act of arson by the British", "An earthquake that caused a gas leak to ignite"]), explanation: "Shaniwar Wada was largely destroyed by a mysterious fire in 1828 — the exact cause was never determined, and only the massive outer stone walls and gateway survived." },
  { type: "fact", monumentId: "shaniwar-wada", icon: "💡", prompt: "What is the ghost story associated with Shaniwar Wada?", options: shuffle(["The ghost of Peshwa Narayanrao, murdered here at age 16 in 1773, is said to haunt the ruins", "The ghost of Kasturba Gandhi walks the gardens", "The spirit of Shivaji Maharaj appears on full moon nights", "A headless horseman is seen at the main gate at midnight"]), explanation: "Shaniwar Wada is associated with the ghost of the 16-year-old Peshwa Narayanrao who was murdered inside the wada in 1773 by guards loyal to his uncle Raghunathrao." },
  { type: "identify", monumentId: "raigad-fort", icon: "🔍", prompt: "What momentous event occurred at Raigad Fort on 6 June 1674?", options: shuffle(["Shivaji Maharaj was crowned Chhatrapati (Emperor of the Marathas)", "The Maratha Empire defeated the Mughal Army", "Shivaji signed a peace treaty with Aurangzeb", "The fort was captured from the Mughals"]), explanation: "On June 6, 1674, Shivaji Maharaj was crowned Chhatrapati (Emperor) at Raigad — formally establishing the Maratha Empire and challenging Mughal supremacy." },
  { type: "feature", monumentId: "raigad-fort", icon: "✨", prompt: "How do visitors today reach the summit of Raigad Fort?", options: shuffle(["By ropeway (cable car) or climbing 1,737 stone steps", "By a mountain road passable by cars", "By helicopter only in certain seasons", "By boat across a lake then a short walk"]), explanation: "Raigad Fort is reached either by a ropeway (cable car) or by climbing 1,737 stone steps up the cliff face — the steps are a popular pilgrimage route for devotees of Shivaji Maharaj." },
  { type: "fact", monumentId: "raigad-fort", icon: "💡", prompt: "What are the ruins at the summit of Raigad Fort's most significant site?", options: shuffle(["The Samadhi (memorial) of Chhatrapati Shivaji Maharaj", "Shivaji's birth chamber", "The original Maratha treasury", "The ruins of Shivaji's audience hall"]), explanation: "The most revered site at Raigad is the Samadhi of Chhatrapati Shivaji Maharaj — the memorial marking where the great warrior-king was cremated after his death in 1680 CE." },
  { type: "identify", monumentId: "gwalior-fort", icon: "🔍", prompt: "Which Mughal Emperor famously called Gwalior Fort 'the pearl amongst the fortresses of Hind'?", options: shuffle(["Babur", "Akbar", "Humayun", "Shah Jahan"]), explanation: "Babur — the founder of the Mughal Empire — praised Gwalior Fort in his memoir (Baburnama) as 'the pearl among the fortresses of Hind.'" },
  { type: "feature", monumentId: "gwalior-fort", icon: "✨", prompt: "What is distinctive about the Man Singh Palace inside Gwalior Fort?", options: shuffle(["Six drum-shaped towers decorated with blue, yellow, and green ceramic tile bands", "A palace floating on an underground lake", "A palace carved entirely from white marble", "India's first palace with indoor plumbing"]), explanation: "Man Singh Palace (1486–1516) has six drum-shaped cylindrical towers decorated with intricate bands of blue, yellow, green, and white ceramic tiles — unique in medieval Indian architecture." },
  { type: "fact", monumentId: "gwalior-fort", icon: "💡", prompt: "Which legendary Indian musician was born at the foot of Gwalior Fort?", options: shuffle(["Tansen — one of the Navaratnas of Akbar's court", "Miyan ki Todi — the father of Hindustani music", "Bismillah Khan", "Ustad Alladiya Khan"]), explanation: "Tansen (c. 1506–1589), one of the nine gems of Emperor Akbar's court and legendary master of Hindustani classical music, was born at Gwalior. His tomb stands at the foot of the fort." },
  { type: "identify", monumentId: "orchha-fort", icon: "🔍", prompt: "What unique feature does the Ram Raja Temple in Orchha have, unlike any other temple in India?", options: shuffle(["Ram is worshipped as a king with full state military honours (police present arms twice daily)", "It is the only temple where Ram and Sita are worshipped together", "It is India's only temple managed by the army", "It was built in a single night according to legend"]), explanation: "The Ram Raja Temple in Orchha is the only temple in India where Ram is treated as a reigning king — police guards present arms to Ram's idol twice daily, as they would to a visiting head of state." },
  { type: "feature", monumentId: "orchha-fort", icon: "✨", prompt: "What was the Jahangir Mahal in Orchha built for?", options: shuffle(["A single overnight visit by Emperor Jahangir", "As the permanent royal palace of the Bundela kings", "As a guesthouse for Mughal officials", "As a treasury to store Maratha tribute"]), explanation: "The 136-room Jahangir Mahal was built specifically for one royal visit by Emperor Jahangir in 1606 CE — Jahangir stayed for one night and then departed, never to return." },
  { type: "fact", monumentId: "orchha-fort", icon: "💡", prompt: "What scenic natural feature surrounds the Orchha fort complex?", options: shuffle(["The Betwa River flowing around a rocky island", "A moat fed by the Chambal River", "Dense Vindhyan forest", "Three natural lakes"]), explanation: "Orchha Fort sits on a rocky island in the Betwa River — the river's rapids and rocky channels surround the island on three sides, providing a natural moat." },
  { type: "identify", monumentId: "bhimbetka-caves", icon: "🔍", prompt: "How old are the oldest paintings at the Bhimbetka Rock Shelters — older than which famous European cave art?", options: shuffle(["~30,000 years old — older than the Lascaux Cave paintings in France (17,000 years)", "~5,000 years old — same age as the Harappan civilisation", "~10,000 years old", "~100,000 years old"]), explanation: "Some Bhimbetka paintings are estimated to be 30,000 years old — significantly older than the famous Lascaux cave paintings in France (about 17,000 years old)." },
  { type: "fact", monumentId: "bhimbetka-caves", icon: "💡", prompt: "How were the Bhimbetka Rock Shelters discovered in 1957?", options: shuffle(["Archaeologist V.S. Wakankar spotted them from a train window and investigated", "A local tribal community reported them to authorities", "A British archaeologist found them during road construction", "A student accidentally fell into them while hiking"]), explanation: "Archaeologist V.S. Wakankar was on a train from Bhopal when he noticed the distinctive rock formations from the window. He investigated and discovered one of the most significant prehistoric sites in Asia." },
  { type: "feature", monumentId: "bhimbetka-caves", icon: "✨", prompt: "What subjects do the prehistoric paintings at Bhimbetka depict?", options: shuffle(["Animals, hunting scenes, dancing figures, and eventually horses and chariots", "Only geometric patterns", "Only human figures", "Maps of ancient India"]), explanation: "Bhimbetka paintings span 30,000 years — beginning with Stone Age animals (bison, tigers, rhinos) and hunting scenes, gradually showing dancing, religious rituals, and eventually horses and chariots." },
  { type: "identify", monumentId: "mandu-jahaz-mahal", icon: "🔍", prompt: "Why is the Jahaz Mahal in Mandu called the 'Ship Palace'?", options: shuffle(["It is 120 metres long and flanked by water on both sides — appearing to float like a ship", "It was built by a seafaring king from Gujarat", "Its roofline is shaped like the prow of a ship", "Its columns look like ship masts"]), explanation: "Jahaz Mahal sits on a narrow strip of land between two lakes — when the lakes are full (especially after monsoon), the 120-metre palace appears to float on water like a great stone ship." },
  { type: "dynasty", monumentId: "mandu-jahaz-mahal", icon: "👑", prompt: "Mandu's 'city of joy' is associated with the legendary love story of which sultan and singer-poetess?", options: shuffle(["Sultan Baz Bahadur and Rani Roopmati", "Shah Jahan and Mumtaz Mahal", "Akbar and Jodha Bai", "Prithviraj Chauhan and Sanyogita"]), explanation: "Mandu's greatest romance is Sultan Baz Bahadur's love for Rani Roopmati — the last sultan of Malwa's love for a folk singer-poetess, immortalised in folk songs and poetry." },
  { type: "feature", monumentId: "mandu-jahaz-mahal", icon: "✨", prompt: "When is Mandu most spectacular to visit?", options: shuffle(["July to September (monsoon) when lakes are full and the palace truly floats", "December to February (winter) for clear skies", "March to May for spring flowers", "October for the Diwali festival"]), explanation: "Mandu is best visited during or just after the monsoon (July–October) when the two lakes flanking Jahaz Mahal are full, creating the unforgettable image of the palace 'floating' on water." },
  { type: "identify", monumentId: "lingaraja-temple", icon: "🔍", prompt: "The Lingaraja Temple is dedicated to Harihara — who is Harihara?", options: shuffle(["A composite form of both Shiva and Vishnu — unusually combining two traditions", "Another name for Shiva alone", "Another name for Vishnu alone", "A local Odishan deity"]), explanation: "Harihara is a unique composite deity combining Shiva ('Hara') and Vishnu ('Hari') in one form — Lingaraja's dedication to Harihara reflects Odisha's syncretic tradition." },
  { type: "feature", monumentId: "lingaraja-temple", icon: "✨", prompt: "The Lingaraja Temple is a living temple with an important restriction. What is it?", options: shuffle(["Non-Hindus may not enter the inner sanctum; they can view from a platform", "The temple is closed on Mondays", "Only Brahmin priests may enter the main complex", "Women are not permitted inside during certain rituals"]), explanation: "Lingaraja Temple is a living Hindu temple — non-Hindus are not permitted inside. They can view the temple from a specially constructed viewing platform adjacent to the outer wall." },
  { type: "fact", monumentId: "lingaraja-temple", icon: "💡", prompt: "How many smaller shrines and temples are contained within Lingaraja Temple's compound walls?", options: shuffle(["Over 50 subsidiary shrines", "7 shrines", "200 shrines", "Only the main Lingaraja shrine"]), explanation: "The vast Lingaraja Temple compound wall encloses over 50 subsidiary temples and shrines — each dedicated to different deities — in addition to the main 55-metre tower." },
  { type: "identify", monumentId: "jagannath-temple", icon: "🔍", prompt: "What English word originated from the name of the Puri Jagannath Temple?", options: shuffle(["Juggernaut — meaning an unstoppable, crushing force", "Jungle — meaning dense forest", "Pundit — meaning an expert", "Pyjamas — from 'pajama'"]), explanation: "The English word 'Juggernaut' (meaning an unstoppable crushing force) comes from 'Jagannath' — derived from European accounts of the enormous chariots being pulled through Puri's streets." },
  { type: "feature", monumentId: "jagannath-temple", icon: "✨", prompt: "What makes the Jagannath Temple kitchen (Ananda Bazar) a world record holder?", options: shuffle(["It is the world's largest kitchen — feeding 100,000 pilgrims daily from 752 clay pots", "It uses no fire — only solar cooking", "It is the world's oldest continuously operating kitchen", "It serves the world's spiciest food"]), explanation: "Jagannath Temple's kitchen feeds up to 100,000 pilgrims daily using 752 clay pots stacked in seven layers over wood fires — considered the world's largest kitchen." },
  { type: "fact", monumentId: "jagannath-temple", icon: "💡", prompt: "What annual festival at Puri involves three enormous chariots being pulled through the city streets?", options: shuffle(["Rath Yatra (Chariot Festival)", "Diwali procession", "Holi celebration", "Navratri chariot parade"]), explanation: "The annual Rath Yatra (Chariot Festival) sees three massive wooden chariots carrying Jagannath, Balabhadra, and Subhadra pulled through Puri's Grand Road by hundreds of thousands of devotees." },
  { type: "identify", monumentId: "udayagiri-khandagiri", icon: "🔍", prompt: "What is the Hati Gumpha at Udayagiri famous for?", options: shuffle(["The 17-line Brahmi inscription of Emperor Kharavela — one of India's most important ancient inscriptions", "A carved elephant at the cave entrance", "A 10-metre-tall elephant sculpture", "An underground river flowing through the cave"]), explanation: "Hati Gumpha (Elephant Cave) contains Emperor Kharavela's 17-line Brahmi inscription from c. 150 BCE — describing his military campaigns, religious activities, and public works." },
  { type: "dynasty", monumentId: "udayagiri-khandagiri", icon: "👑", prompt: "For what purpose were the Udayagiri and Khandagiri caves originally carved?", options: shuffle(["As residences and monasteries for Jain monks", "As royal burial chambers", "As granaries for the king", "As defensive fortifications"]), explanation: "The Udayagiri and Khandagiri caves were carved as residences (viharas) for Jain monks by Emperor Kharavela of the Mahameghavahana dynasty in the 1st century BCE." },
  { type: "feature", monumentId: "udayagiri-khandagiri", icon: "✨", prompt: "What remarkable scenes are carved in the friezes of Rani Gumpha (Queen's Cave) at Udayagiri?", options: shuffle(["Royal court scenes, athletes, abduction scenes, and musical processions", "Only religious Jain imagery", "Maps of ancient trade routes", "Scenes from the Ramayana and Mahabharata"]), explanation: "Rani Gumpha has India's earliest narrative rock-carved friezes showing royal processions, court entertainments, athletes, musicians, and dramatic scenes — remarkable for their 2,000-year age." },
  { type: "identify", monumentId: "sarnath", icon: "🔍", prompt: "Why is Sarnath the most important site in Buddhism?", options: shuffle(["It is where the Buddha gave his first sermon after attaining enlightenment at Bodh Gaya", "It is where the Buddha was born", "It is where the Buddha attained enlightenment", "It is where the Buddha died"]), explanation: "After attaining enlightenment at Bodh Gaya, the Buddha walked to Sarnath's Deer Park and gave his first sermon (Dhammacakkappavattana Sutta) to five disciples — 'setting the wheel of Dharma in motion.'" },
  { type: "fact", monumentId: "sarnath", icon: "💡", prompt: "The Lion Capital of Ashoka found at Sarnath became what national symbol of India?", options: shuffle(["India's National Emblem (the four-lion pillar top)", "The national animal symbol", "The symbol on India's currency", "The symbol of the Supreme Court"]), explanation: "The Ashoka Lion Capital discovered at Sarnath (four lions back-to-back on a circular abacus) was adopted as India's National Emblem on January 26, 1950, the day India became a Republic." },
  { type: "feature", monumentId: "sarnath", icon: "✨", prompt: "Which modern national symbol is also derived from Sarnath?", options: shuffle(["The Dharma Chakra (wheel) on India's national flag", "The peacock — India's national bird", "The lotus — India's national flower", "The Ashoka tree — national tree"]), explanation: "The Dharma Chakra (24-spoke wheel) on India's national flag is derived from the Ashoka Pillar at Sarnath — representing the Buddha's first turning of the Wheel of Dharma." },
  { type: "identify", monumentId: "vaishali", icon: "🔍", prompt: "What historic governance achievement is Vaishali credited with?", options: shuffle(["Being the world's first known democratic republic — the Vajjian Confederacy (6th century BCE)", "Hosting the first Buddhist council", "Being the first city in India to have a written constitution", "Being the site of India's first parliament"]), explanation: "Vaishali was the capital of the Vajjian Confederacy in the 6th century BCE — widely regarded as the world's first republic, with an elected governing council of representatives." },
  { type: "fact", monumentId: "vaishali", icon: "💡", prompt: "Which Jain Tirthankara was born at Vaishali?", options: shuffle(["Lord Mahavira — the 24th and last Jain Tirthankara", "Lord Parshvanatha — the 23rd Tirthankara", "Lord Adinatha — the 1st Tirthankara", "Lord Neminatha — the 22nd Tirthankara"]), explanation: "Lord Mahavira — the 24th and final Jain Tirthankara, who founded the Jain faith as we know it today — was born at Kundalagram near Vaishali in 599 BCE." },
  { type: "feature", monumentId: "vaishali", icon: "✨", prompt: "What did Emperor Ashoka place at Vaishali to mark its Buddhist significance?", options: shuffle(["One of his famous polished sandstone pillars with a single lion capital", "A large brick stupa over the Buddha's relic", "A monastery for 1,000 monks", "A giant wheel of dharma"]), explanation: "Emperor Ashoka erected one of his finest polished sandstone pillars at Vaishali — topped with a single lion (unlike the four-lion capital at Sarnath) — to mark the site's connection to the Buddha." },
  { type: "identify", monumentId: "kushinagar", icon: "🔍", prompt: "Kushinagar is one of the four most sacred Buddhist sites. What event occurred here?", options: shuffle(["The Mahaparinirvana (final passing) of the Buddha, around 483 BCE", "The birth of the Buddha", "The Buddha's enlightenment", "The Buddha's first sermon"]), explanation: "Kushinagar is where Siddhartha Gautama (the Buddha) passed away — Mahaparinirvana — around 483 BCE, at the age of 80, lying between twin Sal trees." },
  { type: "feature", monumentId: "kushinagar", icon: "✨", prompt: "What does the Parinirvana Temple at Kushinagar contain?", options: shuffle(["A 6.1-metre gilded reclining Buddha statue depicting his moment of passing", "The original Bodhi tree cutting from Bodh Gaya", "The ashes of the Buddha", "A solid gold footprint of the Buddha"]), explanation: "The Parinirvana Temple contains a magnificent 6.1-metre-long gilded reclining Buddha, carved in the 5th century CE, depicting the exact moment of the Buddha's final passing." },
  { type: "fact", monumentId: "kushinagar", icon: "💡", prompt: "Who rediscovered the Kushinagar archaeological site in 1876?", options: shuffle(["British archaeologist A.C.L. Carlleyle", "Alexander Cunningham, first ASI Director", "Max Müller (German Sanskrit scholar)", "V.S. Wakankar (discoverer of Bhimbetka)"]), explanation: "A.C.L. Carlleyle excavated the Kushinagar site in 1876, uncovering the Parinirvana stupa and the reclining Buddha statue — identifying it as the site of the Buddha's death." },
  { type: "identify", monumentId: "vikramshila", icon: "🔍", prompt: "Which great Tibetan scholar was head of Vikramshila before travelling to Tibet?", options: shuffle(["Atisha (Dipankara Srijnana)", "Xuanzang (Hiuen Tsang)", "Nagarjuna", "Dharmakirti"]), explanation: "Atisha (Dipankara Srijnana), who transformed Tibetan Buddhism in the 11th century, was the Mahapandita (head scholar) of Vikramshila before being invited to Tibet in 1042 CE." },
  { type: "dynasty", monumentId: "vikramshila", icon: "👑", prompt: "Which Buddhist dynasty founded Vikramshila University?", options: shuffle(["Pala dynasty (King Dharmapala, c. 800 CE)", "Gupta dynasty", "Maurya dynasty (Ashoka)", "Pushyabhuti dynasty"]), explanation: "King Dharmapala of the Pala dynasty founded Vikramshila around 800 CE — the Pala dynasty were great patrons of Mahayana and Vajrayana Buddhism in eastern India." },
  { type: "fact", monumentId: "vikramshila", icon: "💡", prompt: "What ended Vikramshila University in approximately 1203 CE?", options: shuffle(["Sacked and destroyed by Bakhtiyar Khilji's forces, shortly after Nalanda", "Abandoned due to floods from the Ganges", "Destroyed in a conflict with the Sena dynasty", "Closed by order of the Pala king"]), explanation: "Vikramshila was sacked by Bakhtiyar Khilji around 1203 CE — the same general who destroyed Nalanda — as part of his military campaign through Bihar and Bengal." },
  { type: "identify", monumentId: "kamakhya-temple", icon: "🔍", prompt: "What makes Kamakhya Temple unlike most other Hindu temples?", options: shuffle(["It has no physical idol — the sanctum contains a natural rock cleft worshipped as the goddess", "It has no roof — worship is done in open air", "It is built underwater", "It has a purely animal sacrifice tradition"]), explanation: "Kamakhya Temple has no physical murti (idol) — the innermost sanctum contains a natural cleft in the rock, kept moist by a natural spring, worshipped as the yoni of the goddess Kamakhya." },
  { type: "feature", monumentId: "kamakhya-temple", icon: "✨", prompt: "What unusual annual festival at Kamakhya involves the temple being closed for three days?", options: shuffle(["Ambubachi Mela — when the goddess is believed to menstruate", "Navratri — when the goddess fasts", "Durga Puja — when the idol is replaced", "Shivratri — when only priests may enter"]), explanation: "During Ambubachi Mela (June), the temple closes for three days — the goddess Kamakhya is believed to menstruate, and the sacred water inside the cleft turns red. It is considered highly auspicious." },
  { type: "fact", monumentId: "kamakhya-temple", icon: "💡", prompt: "Kamakhya Temple is one of the 51 Shakti Peethas. What is a Shakti Peetha?", options: shuffle(["Sites where parts of the goddess Sati's body fell — the most sacred Shakti shrines", "Temples built by Shakti (female) rulers only", "Temples with over 100 female devotees", "Locations where the goddess Durga appeared in visions"]), explanation: "According to myth, when Shiva carried the dead body of Sati, Vishnu cut it into 51 pieces that fell to earth — each landing spot became a Shakti Peetha (sacred shrine of the goddess)." },
  { type: "identify", monumentId: "tawang-monastery", icon: "🔍", prompt: "What record does Tawang Monastery hold among Buddhist monasteries?", options: shuffle(["Largest Buddhist monastery in India; second largest in the world", "The oldest monastery in the Himalayas", "The highest monastery in the world", "The monastery with the largest thangka collection"]), explanation: "Tawang Monastery is the largest Buddhist monastery in India and second largest in the world — only the Potala Palace complex in Lhasa is larger." },
  { type: "fact", monumentId: "tawang-monastery", icon: "💡", prompt: "What significant historical journey did the 14th Dalai Lama make via Tawang in 1959?", options: shuffle(["He fled Chinese-occupied Tibet through Tawang to seek asylum in India", "He made his first official state visit to India", "He gave a famous speech at Tawang Monastery", "He conducted the Kalachakra initiation at Tawang"]), explanation: "In 1959, after the Chinese takeover of Tibet, the 14th Dalai Lama escaped through the mountain passes into Tawang, which was his first refuge in India before reaching Dharamsala." },
  { type: "feature", monumentId: "tawang-monastery", icon: "✨", prompt: "Tawang is the birthplace of which Dalai Lama?", options: shuffle(["The 6th Dalai Lama (Tsangyang Gyatso, 1683–1706)", "The 14th Dalai Lama (Tenzin Gyatso, b. 1935)", "The 1st Dalai Lama", "The 5th Dalai Lama"]), explanation: "The 6th Dalai Lama, Tsangyang Gyatso (1683–1706), was born near Tawang — he was famously known as the 'poet Dalai Lama' who wrote love songs rather than religious texts." },
  { type: "identify", monumentId: "howrah-bridge", icon: "🔍", prompt: "What is the official name of Howrah Bridge, and who is it named after?", options: shuffle(["Rabindra Setu — named after poet Rabindranath Tagore", "Victoria Setu — named after Queen Victoria", "Nehru Setu — named after Jawaharlal Nehru", "Bose Setu — named after Subhash Chandra Bose"]), explanation: "Howrah Bridge was officially renamed Rabindra Setu in 1965, in honour of Nobel laureate poet Rabindranath Tagore — though most Kolkatans still call it Howrah Bridge." },
  { type: "feature", monumentId: "howrah-bridge", icon: "✨", prompt: "How was Howrah Bridge constructed — without using any nuts or bolts?", options: shuffle(["Entirely with riveted steel joints — 26,500 tonnes of riveted steel", "Welded steel joints exclusively", "Cast iron poured into molds on site", "Pre-cast concrete sections"]), explanation: "Howrah Bridge was built using only rivets — 26,500 tonnes of high-tensile steel connected with 507,000 rivets. Not a single nut or bolt was used in its construction." },
  { type: "fact", monumentId: "howrah-bridge", icon: "💡", prompt: "What is slowly damaging the steel pillars of Howrah Bridge?", options: shuffle(["Acid from betel (paan) spittle eroding the metal", "River pollution corroding the base", "Vibration from heavy traffic causing metal fatigue", "Saltwater spray from the sea"]), explanation: "The steel pillars of Howrah Bridge are slowly being eaten away by the acidity of betel (paan) spittle — millions of people spit pan juice on the pillars daily, causing significant acid corrosion." },
  { type: "identify", monumentId: "modhera-sun-temple", icon: "🔍", prompt: "What solar phenomenon makes the Modhera Sun Temple architecturally remarkable?", options: shuffle(["On the equinoxes, the rising sun illuminates the inner sanctum directly", "On the winter solstice, the sun sets exactly behind the main spire", "The temple creates a shadow clock accurate to within one minute", "During the monsoon, rain water flows through channels to wash the Surya lingam"]), explanation: "The Modhera Sun Temple is precisely aligned east-west so that on the spring and autumn equinoxes (March 21 and September 21), the first rays of the rising sun fall directly on the inner sanctum." },
  { type: "feature", monumentId: "modhera-sun-temple", icon: "✨", prompt: "The Surya Kund (stepped tank) in front of Modhera Sun Temple has how many miniature shrines?", options: shuffle(["108 shrines — one on each step of the four descending stairways", "12 shrines — one for each zodiac sign", "52 shrines — one for each week of the year", "365 shrines — one for each day of the year"]), explanation: "The Surya Kund has 108 miniature shrines built into its descending stairways on all four sides — 108 is a sacred number in Hindu astronomy and cosmology." },
  { type: "dynasty", monumentId: "modhera-sun-temple", icon: "👑", prompt: "Which king built the Modhera Sun Temple in 1026 CE?", options: shuffle(["King Bhimdev I of the Solanki (Chaulukya) dynasty", "Mahmud of Ghazni (who sacked it)", "King Kumarpal of the Solanki dynasty", "A local chieftain of the Gurjara clan"]), explanation: "King Bhimdev I of the Solanki (Chaulukya) dynasty built the Sun Temple at Modhera in 1026 CE — just one or two years after Mahmud of Ghazni had sacked and looted the previous temple on the same site." },
  { type: "identify", monumentId: "dholavira", icon: "🔍", prompt: "What world record does Dholavira claim from the Harappan period?", options: shuffle(["The world's oldest known signboard — a 10-character Indus script inscription", "The world's largest ancient city", "The world's oldest water well", "The world's first known written legal code"]), explanation: "Dholavira contains what is believed to be the world's oldest signboard — a 10-character Indus script inscription, displayed at the citadel entrance, approximately 4,000 years old." },
  { type: "feature", monumentId: "dholavira", icon: "✨", prompt: "What was exceptional about Dholavira's water management system compared to other ancient cities?", options: shuffle(["It had 16 sophisticated reservoirs — the most complex water management of any Bronze Age city", "It was the first city with underground sewers", "It had an aqueduct system from distant rivers", "It used tidal water from the sea via canals"]), explanation: "Dholavira had 16 large reservoirs and many wells — an extraordinary water management achievement for a city in the arid Rann of Kutch, capturing every drop of rainfall and managing it efficiently." },
  { type: "fact", monumentId: "dholavira", icon: "💡", prompt: "When was Dholavira designated a UNESCO World Heritage Site?", options: shuffle(["2021 — India's 40th UNESCO inscription", "1983", "2000", "2010"]), explanation: "Dholavira was inscribed as a UNESCO World Heritage Site in 2021 — India's 40th such inscription — recognising it as one of the finest examples of Indus Valley urban planning." },
  { type: "identify", monumentId: "somnath-temple", icon: "🔍", prompt: "How many times has the Somnath Temple been destroyed and rebuilt throughout history?", options: shuffle(["Six times", "Three times", "Twice", "Seventeen times"]), explanation: "The Somnath Temple has been destroyed and rebuilt six times — repeatedly looted (notably by Mahmud of Ghazni) and then reconstructed by subsequent Hindu rulers, making it a symbol of resilience." },
  { type: "fact", monumentId: "somnath-temple", icon: "💡", prompt: "Who was the primary force behind rebuilding Somnath Temple after Indian independence in 1951?", options: shuffle(["Sardar Vallabhbhai Patel", "Jawaharlal Nehru (who actually opposed the government funding it)", "Mahatma Gandhi", "Dr. B.R. Ambedkar"]), explanation: "Sardar Vallabhbhai Patel (Iron Man of India) passionately championed the reconstruction of Somnath Temple. He personally visited the site and oversaw the project before his death in 1950. Nehru was cautious about government involvement." },
  { type: "feature", monumentId: "somnath-temple", icon: "✨", prompt: "What is the significance of the Baan Stambha (Arrow Pillar) at Somnath Temple?", options: shuffle(["An inscription says 'From this point to the South Pole, there is no land — only sea'", "It is aligned with the North Star", "It marks the exact longitude of zero degrees", "It is a war memorial listing all battles at Somnath"]), explanation: "The Baan Stambha (arrow pillar) at Somnath points south with an inscription stating that from that point to the South Pole, there is no land — only sea — reflecting ancient Indian geographic knowledge of the Indian Ocean." },
];

const buildQuestions = (count = 15): Question[] => {
  const resolved: Question[] = ALL_QUESTIONS.map(q => {
    const shuffledOptions = shuffle(q.options);
    const correct = q.options[0];
    return { ...q, options: shuffledOptions, correctIndex: shuffledOptions.indexOf(correct) };
  });
  const byMonument: Record<string, Question[]> = {};
  for (const q of resolved) {
    if (!byMonument[q.monumentId]) byMonument[q.monumentId] = [];
    byMonument[q.monumentId].push(q);
  }
  const picked: Question[] = [];
  for (const id of Object.keys(byMonument)) picked.push(...shuffle(byMonument[id]).slice(0, 2));
  return shuffle(picked).slice(0, count);
};

const typeLabel: Record<Question["type"], string> = {
  city: "Location", year: "Year", dynasty: "Dynasty / Builder", fact: "Fun Fact",
  entry: "Entry & Access", material: "Materials", identify: "Identify the Monument",
  unesco: "UNESCO Status", height: "Dimensions", feature: "Unique Feature",
};
const typeColor: Record<Question["type"], string> = {
  city: "bg-blue-100 text-blue-700", year: "bg-purple-100 text-purple-700",
  dynasty: "bg-amber-100 text-amber-700", fact: "bg-green-100 text-green-700",
  entry: "bg-teal-100 text-teal-700", material: "bg-stone-100 text-stone-700",
  identify: "bg-rose-100 text-rose-700", unesco: "bg-indigo-100 text-indigo-700",
  height: "bg-orange-100 text-orange-700", feature: "bg-yellow-100 text-yellow-700",
};

const BLITZ_SECONDS = 60;
const POINTS_PER_Q = 10;
const STREAK_THRESHOLDS = [1, 3, 5, 8];
const MULTIPLIERS = [1, 2, 3, 5];
const LS_KEY = "historica-blitz-scores";

function getMultiplier(streak: number) {
  let m = 1;
  for (let i = 0; i < STREAK_THRESHOLDS.length; i++) {
    if (streak >= STREAK_THRESHOLDS[i]) m = MULTIPLIERS[i];
  }
  return m;
}

function loadScores(): number[] {
  try { return JSON.parse(localStorage.getItem(LS_KEY) || "[]"); }
  catch { return []; }
}
function saveScore(s: number) {
  const scores = [...loadScores(), s].sort((a, b) => b - a).slice(0, 5);
  localStorage.setItem(LS_KEY, JSON.stringify(scores));
}

type Mode = "menu" | "classic" | "blitz";

const QuizPage = () => {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();
  const [mode, setMode] = useState<Mode>("menu");

  // Classic state
  const [questions, setQuestions] = useState<Question[]>(() => buildQuestions());
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  // Blitz state
  const [blitzQuestions, setBlitzQuestions] = useState<Question[]>([]);
  const [blitzIndex, setBlitzIndex] = useState(0);
  const [blitzPicked, setBlitzPicked] = useState<number | null>(null);
  const [blitzScore, setBlitzScore] = useState(0);
  const [blitzStreak, setBlitzStreak] = useState(0);
  const [blitzTimeLeft, setBlitzTimeLeft] = useState(BLITZ_SECONDS);
  const [blitzDone, setBlitzDone] = useState(false);
  const [blitzIsNewRecord, setBlitzIsNewRecord] = useState(false);
  const [blitzScores, setBlitzScores] = useState<number[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startBlitz = () => {
    const qs = buildQuestions(50);
    setBlitzQuestions(qs);
    setBlitzIndex(0);
    setBlitzPicked(null);
    setBlitzScore(0);
    setBlitzStreak(0);
    setBlitzTimeLeft(BLITZ_SECONDS);
    setBlitzDone(false);
    setBlitzIsNewRecord(false);
    setBlitzScores(loadScores());
    setMode("blitz");
    timerRef.current = setInterval(() => {
      setBlitzTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timerRef.current!);
          setBlitzDone(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  };

  const endBlitz = (finalScore: number) => {
    clearInterval(timerRef.current!);
    setBlitzDone(true);
    const prev = loadScores();
    saveScore(finalScore);
    setBlitzScores(loadScores());
    if (prev.length === 0 || finalScore > prev[0]) setBlitzIsNewRecord(true);
  };

  const onBlitzPick = (i: number) => {
    if (blitzPicked !== null || blitzDone) return;
    setBlitzPicked(i);
    const bq = blitzQuestions[blitzIndex];
    const correct = i === bq.correctIndex;
    const newStreak = correct ? blitzStreak + 1 : 0;
    setBlitzStreak(newStreak);
    const mult = getMultiplier(correct ? blitzStreak + 1 : blitzStreak);
    const newScore = blitzScore + (correct ? POINTS_PER_Q * mult : 0);
    setBlitzScore(newScore);
    setTimeout(() => {
      const nextIdx = blitzIndex + 1;
      if (nextIdx >= blitzQuestions.length) {
        endBlitz(newScore);
      } else {
        setBlitzIndex(nextIdx);
        setBlitzPicked(null);
      }
    }, 500);
  };

  // Classic helpers
  const q = questions[index];
  const onPick = (i: number) => { if (picked !== null) return; setPicked(i); if (i === q.correctIndex) setScore(s => s + 1); };
  const next = () => { if (index + 1 >= questions.length) setDone(true); else { setIndex(i => i + 1); setPicked(null); } };
  const restart = () => { setQuestions(buildQuestions()); setIndex(0); setPicked(null); setScore(0); setDone(false); };

  const bq = blitzQuestions[blitzIndex];
  const blitzMult = getMultiplier(blitzStreak);

  // ── MENU ──────────────────────────────────────────────────────────────────
  if (mode === "menu") {
    const topScores = loadScores();
    return (
      <div className="w-full h-full overflow-y-auto bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 flex items-center justify-center p-6">
        <div className="w-full max-w-lg">
          <div className="text-center mb-8">
            <div className="text-5xl mb-3">🏛️</div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-orange-700 mb-1">
              {t("quiz.title")}
            </h1>
            <p className="text-orange-600 text-sm">{t("quiz.subtitle")}</p>
          </div>

          <div className="grid gap-4">
            {/* Classic */}
            <button
              onClick={() => { setMode("classic"); setQuestions(buildQuestions()); setIndex(0); setPicked(null); setScore(0); setDone(false); }}
              className="group p-5 bg-white/90 border-2 border-amber-200 rounded-2xl hover:border-amber-400 hover:shadow-lg transition-all text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-2xl shadow-md group-hover:scale-105 transition-transform">📚</div>
                <div className="flex-1">
                  <h3 className="font-bold text-amber-900 text-lg">{t("quiz.startClassic")}</h3>
                  <p className="text-amber-600 text-sm">{t("quiz.classicDesc")}</p>
                </div>
                <svg className="text-amber-400 group-hover:text-amber-600 transition-colors" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </div>
            </button>

            {/* Blitz */}
            <button
              onClick={startBlitz}
              className="group p-5 bg-gradient-to-br from-rose-900/90 to-orange-900/90 border-2 border-rose-600/40 rounded-2xl hover:border-rose-400 hover:shadow-lg hover:shadow-rose-900/30 transition-all text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-rose-500 to-orange-600 flex items-center justify-center text-2xl shadow-md group-hover:scale-105 transition-transform">⚡</div>
                <div className="flex-1">
                  <h3 className="font-bold text-white text-lg">{t("quiz.startBlitz")}</h3>
                  <p className="text-rose-300 text-sm">{t("quiz.blitzDesc")}</p>
                </div>
                <svg className="text-rose-400 group-hover:text-rose-200 transition-colors" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </div>
            </button>
          </div>

          {/* Leaderboard */}
          {topScores.length > 0 && (
            <div className="mt-6 bg-white/80 border border-amber-200 rounded-xl p-4">
              <h3 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">🏆 {t("quiz.leaderboard")} <span className="text-xs font-normal text-amber-600">(Blitz)</span></h3>
              {topScores.map((s, i) => (
                <div key={i} className="flex items-center justify-between py-1.5 border-b border-amber-100 last:border-0">
                  <span className="text-sm font-medium text-amber-700">{["🥇","🥈","🥉","4th","5th"][i]}</span>
                  <span className="text-amber-900 font-bold">{s} pts</span>
                </div>
              ))}
            </div>
          )}

          <div className="mt-4 flex justify-center">
            <Button variant="outline" onClick={() => setLocation("/")}>Back to Map</Button>
          </div>
        </div>
      </div>
    );
  }

  // ── CLASSIC ───────────────────────────────────────────────────────────────
  if (mode === "classic") {
    return (
      <div className="w-full h-full overflow-y-auto bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 p-6">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-orange-700">{t("quiz.title")}</h1>
              <p className="text-sm text-orange-600 mt-0.5">{t("quiz.classicDesc")}</p>
            </div>
            <Button variant="outline" onClick={() => setMode("menu")}>{t("quiz.backToMenu")}</Button>
          </div>

          {!done ? (
            <Card className="border-amber-200 shadow-xl bg-white/90 backdrop-blur-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between text-sm text-amber-700 mb-3">
                  <span>{t("quiz.question")} {index + 1} {t("quiz.of")} {questions.length}</span>
                  <span className="font-semibold">{t("quiz.score")}: {score}</span>
                </div>
                <div className="h-1.5 w-full bg-amber-100 rounded-full mb-5 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all" style={{ width: `${((index + 1) / questions.length) * 100}%` }} />
                </div>
                <div className="mb-1">
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${typeColor[q.type]}`}>{q.icon} {typeLabel[q.type]}</span>
                </div>
                <AnimatePresence mode="wait">
                  <motion.p key={index} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} className="text-lg font-medium text-orange-900 my-4">{q.prompt}</motion.p>
                </AnimatePresence>
                <div className="grid gap-3">
                  {q.options.map((opt, i) => {
                    const isCorrect = picked !== null && i === q.correctIndex;
                    const isWrong = picked === i && i !== q.correctIndex;
                    const isNeutral = picked !== null && i !== q.correctIndex && picked !== i;
                    return (
                      <button key={i} onClick={() => onPick(i)} disabled={picked !== null}
                        className={`text-left px-4 py-3 rounded-lg border-2 transition-all flex items-center gap-3 ${
                          isCorrect ? "bg-emerald-50 border-emerald-400 text-emerald-900"
                          : isWrong ? "bg-rose-50 border-rose-400 text-rose-900"
                          : isNeutral ? "bg-white/50 border-gray-100 text-gray-400"
                          : "bg-white border-amber-200 hover:bg-amber-50 hover:border-amber-400 text-orange-900"}`}>
                        {picked !== null && isCorrect && <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />}
                        {picked !== null && isWrong && <XCircle className="h-5 w-5 text-rose-500 shrink-0" />}
                        {(picked === null || isNeutral) && <span className="w-5 h-5 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold shrink-0">{String.fromCharCode(65 + i)}</span>}
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>
                {picked !== null && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-5">
                    <div className={`rounded-lg p-3 flex gap-2 mb-4 ${picked === q.correctIndex ? "bg-emerald-50 border border-emerald-200" : "bg-rose-50 border border-rose-200"}`}>
                      <Info className={`h-5 w-5 mt-0.5 shrink-0 ${picked === q.correctIndex ? "text-emerald-600" : "text-rose-600"}`} />
                      <div>
                        <p className={`text-xs font-semibold mb-0.5 ${picked === q.correctIndex ? "text-emerald-700" : "text-rose-700"}`}>{picked === q.correctIndex ? t("quiz.correct") : `${t("quiz.incorrect")}: ${q.options[q.correctIndex]}`}</p>
                        <p className="text-sm text-gray-700">{q.explanation}</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button onClick={next} className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white">
                        {index + 1 >= questions.length ? t("quiz.finish") : t("quiz.next") + " →"}
                      </Button>
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          ) : (
            <Card className="border-amber-200 shadow-xl bg-white/90 backdrop-blur-md">
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4">{score === questions.length ? "🏆" : score >= questions.length * 0.7 ? "🎉" : "📚"}</div>
                <h2 className="text-2xl font-bold text-amber-800 mb-2">Quiz Complete!</h2>
                <p className="text-6xl font-bold text-orange-700 mb-4">{score} <span className="text-3xl text-orange-400">/ {questions.length}</span></p>
                <div className="flex gap-3 justify-center">
                  <Button onClick={restart} className="bg-gradient-to-r from-amber-500 to-orange-600 text-white">{t("quiz.playAgain")}</Button>
                  <Button variant="outline" onClick={() => setMode("menu")}>{t("quiz.backToMenu")}</Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    );
  }

  // ── BLITZ ─────────────────────────────────────────────────────────────────
  if (mode === "blitz") {
    const timerPct = (blitzTimeLeft / BLITZ_SECONDS) * 100;
    const timerColor = blitzTimeLeft > 20 ? "from-emerald-400 to-green-500" : blitzTimeLeft > 10 ? "from-amber-400 to-orange-500" : "from-rose-500 to-red-600";

    if (blitzDone || !bq) {
      const topScores = blitzScores;
      return (
        <div className="w-full h-full overflow-y-auto bg-gradient-to-br from-rose-950 via-slate-900 to-orange-950 p-6 flex items-center justify-center">
          <div className="w-full max-w-md text-center">
            {blitzIsNewRecord && (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="inline-block bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold text-sm px-4 py-1.5 rounded-full mb-4">
                🎉 {t("quiz.newRecord")}
              </motion.div>
            )}
            <div className="text-5xl mb-3">⚡</div>
            <h2 className="text-2xl font-bold text-white mb-1">{t("quiz.blitzOver")}</h2>
            <p className="text-slate-400 text-sm mb-4">{blitzIndex} questions answered</p>
            <div className="text-6xl font-bold text-white mb-1">{blitzScore}</div>
            <p className="text-rose-400 text-sm mb-6">points scored</p>

            {topScores.length > 0 && (
              <div className="bg-white/10 border border-white/10 rounded-xl p-4 mb-6 text-left">
                <h3 className="text-amber-400 font-semibold text-sm mb-3 flex items-center gap-2">🏆 {t("quiz.leaderboard")}</h3>
                {topScores.map((s, i) => (
                  <div key={i} className={`flex items-center justify-between py-2 border-b border-white/10 last:border-0 ${i === 0 ? "text-amber-300 font-bold" : "text-slate-300"}`}>
                    <span className="text-sm">{["🥇","🥈","🥉","4th","5th"][i]}</span>
                    <span>{s} pts</span>
                  </div>
                ))}
              </div>
            )}

            <div className="flex gap-3 justify-center">
              <Button onClick={startBlitz} className="bg-gradient-to-r from-rose-500 to-orange-600 text-white">{t("quiz.playAgain")}</Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" onClick={() => setMode("menu")}>{t("quiz.backToMenu")}</Button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="w-full h-full overflow-y-auto bg-gradient-to-br from-rose-950 via-slate-900 to-orange-950 p-4">
        <div className="max-w-2xl mx-auto">
          {/* HUD */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1">
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>⏱ {t("quiz.timeLeft")}</span>
                <span className={blitzTimeLeft <= 10 ? "text-rose-400 font-bold animate-pulse" : "text-slate-300"}>{blitzTimeLeft}s</span>
              </div>
              <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${timerColor} rounded-full`}
                  style={{ width: `${timerPct}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
            <div className="text-center min-w-[70px]">
              <div className="text-2xl font-bold text-white">{blitzScore}</div>
              <div className="text-xs text-slate-400">pts</div>
            </div>
            <div className="text-center min-w-[60px]">
              {blitzStreak >= 3 ? (
                <motion.div key={blitzStreak} initial={{ scale: 1.4 }} animate={{ scale: 1 }}>
                  <div className={`text-lg font-bold ${blitzMult >= 5 ? "text-yellow-400" : blitzMult >= 3 ? "text-orange-400" : "text-amber-300"}`}>×{blitzMult}</div>
                  <div className="text-xs text-slate-400">🔥{blitzStreak}</div>
                </motion.div>
              ) : (
                <div>
                  <div className="text-lg font-bold text-slate-500">×1</div>
                  <div className="text-xs text-slate-500">{t("quiz.streak")}: {blitzStreak}</div>
                </div>
              )}
            </div>
          </div>

          {/* Question */}
          <Card className="border-white/10 bg-white/5 backdrop-blur-md shadow-xl">
            <CardContent className="p-5">
              <div className="mb-2">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${typeColor[bq.type]}`}>{bq.icon} {typeLabel[bq.type]}</span>
              </div>
              <AnimatePresence mode="wait">
                <motion.p key={blitzIndex} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-base font-medium text-white my-3">{bq.prompt}</motion.p>
              </AnimatePresence>
              <div className="grid gap-2">
                {bq.options.map((opt, i) => {
                  const isCorrect = blitzPicked !== null && i === bq.correctIndex;
                  const isWrong = blitzPicked === i && i !== bq.correctIndex;
                  return (
                    <button key={i} onClick={() => onBlitzPick(i)} disabled={blitzPicked !== null}
                      className={`text-left px-4 py-2.5 rounded-lg border transition-all text-sm font-medium ${
                        isCorrect ? "bg-emerald-500/20 border-emerald-400 text-emerald-200"
                        : isWrong ? "bg-rose-500/20 border-rose-400 text-rose-200"
                        : blitzPicked !== null ? "bg-white/5 border-white/10 text-slate-500"
                        : "bg-white/10 border-white/20 hover:bg-white/20 text-slate-100"}`}>
                      <span className="mr-2 opacity-60">{String.fromCharCode(65 + i)}.</span>{opt}
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <div className="mt-3 flex justify-between items-center">
            <span className="text-slate-500 text-xs">{blitzIndex + 1} answered</span>
            <Button variant="ghost" size="sm" className="text-slate-500 hover:text-slate-300" onClick={() => { clearInterval(timerRef.current!); endBlitz(blitzScore); }}>End early</Button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default QuizPage;
