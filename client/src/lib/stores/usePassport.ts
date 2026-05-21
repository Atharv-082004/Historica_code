import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface PassportRegion {
  id: string;
  label: string;
  emoji: string;
  monumentIds: string[];
  badgeColor: string;
}

export const REGIONS: PassportRegion[] = [
  {
    id: "north",
    label: "North India",
    emoji: "🏔️",
    monumentIds: ["taj-mahal", "qutub-minar", "red-fort", "hawa-mahal", "golden-temple", "fatehpur-sikri", "amber-fort", "humayuns-tomb", "agra-fort", "jantar-mantar", "chittor-fort", "mehrangarh-fort", "jaisalmer-fort", "kumbhalgarh-fort", "junagarh-fort", "udaipur-city-palace", "ranakpur-temple", "dilwara-temples", "ajmer-dargah", "purana-qila", "safdarjung-tomb", "jama-masjid", "itmad-ud-daulah", "akbars-tomb", "leh-palace", "hemis-monastery"],
    badgeColor: "from-blue-500 to-indigo-600",
  },
  {
    id: "south-deccan",
    label: "South & Deccan",
    emoji: "🌴",
    monumentIds: ["hampi", "gol-gumbaz", "charminar", "ajanta-ellora", "mysore-palace", "meenakshi-temple", "mahabalipuram", "brihadeeswara-temple", "elephanta-caves", "kailasa-temple", "golconda-fort", "ramappa-temple", "warangal-fort", "chowmahalla-palace", "bidar-fort", "hoysaleswara-temple", "pattadakal", "badami-caves", "gomateshwara", "lepakshi-temple", "tirupati-temple", "rameswaram-temple", "gangaikonda-cholapuram", "basilica-bom-jesus", "daulatabad-fort", "aga-khan-palace", "shaniwar-wada", "raigad-fort"],
    badgeColor: "from-green-500 to-emerald-600",
  },
  {
    id: "central",
    label: "Central India",
    emoji: "🏛️",
    monumentIds: ["khajuraho-temples", "sanchi-stupa", "gwalior-fort", "orchha-fort", "bhimbetka-caves", "mandu-jahaz-mahal"],
    badgeColor: "from-yellow-500 to-orange-500",
  },
  {
    id: "east",
    label: "East India",
    emoji: "🌅",
    monumentIds: ["konark-sun-temple", "victoria-memorial", "mahabodhi-temple", "nalanda-ruins", "lingaraja-temple", "jagannath-temple", "udayagiri-khandagiri", "sarnath", "vaishali", "kushinagar", "vikramshila", "kamakhya-temple", "tawang-monastery", "howrah-bridge"],
    badgeColor: "from-orange-500 to-amber-600",
  },
  {
    id: "west",
    label: "West India",
    emoji: "🌊",
    monumentIds: ["gateway-of-india", "lotus-temple", "rani-ki-vav", "modhera-sun-temple", "dholavira", "somnath-temple"],
    badgeColor: "from-purple-500 to-pink-600",
  },
];

export const MONUMENT_NAMES: Record<string, string> = {
  "taj-mahal": "Taj Mahal",
  "qutub-minar": "Qutub Minar",
  "red-fort": "Red Fort",
  "hawa-mahal": "Hawa Mahal",
  "golden-temple": "Golden Temple",
  "fatehpur-sikri": "Fatehpur Sikri",
  "amber-fort": "Amber Fort",
  "hampi": "Hampi",
  "gol-gumbaz": "Gol Gumbaz",
  "charminar": "Charminar",
  "ajanta-ellora": "Ajanta & Ellora",
  "mysore-palace": "Mysore Palace",
  "meenakshi-temple": "Meenakshi Temple",
  "mahabalipuram": "Mahabalipuram",
  "khajuraho-temples": "Khajuraho",
  "sanchi-stupa": "Sanchi Stupa",
  "konark-sun-temple": "Konark",
  "victoria-memorial": "Victoria Memorial",
  "gateway-of-india": "Gateway of India",
  "lotus-temple": "Lotus Temple",
  "rani-ki-vav": "Rani ki Vav",
  "humayuns-tomb": "Humayun's Tomb",
  "agra-fort": "Agra Fort",
  "brihadeeswara-temple": "Brihadeeswara",
  "mahabodhi-temple": "Mahabodhi Temple",
  "elephanta-caves": "Elephanta Caves",
  "jantar-mantar": "Jantar Mantar",
  "nalanda-ruins": "Nalanda",
  "chittor-fort": "Chittor Fort",
  "kailasa-temple": "Kailasa Temple",
  "mehrangarh-fort": "Mehrangarh Fort",
  "jaisalmer-fort": "Jaisalmer Fort",
  "kumbhalgarh-fort": "Kumbhalgarh Fort",
  "junagarh-fort": "Junagarh Fort",
  "udaipur-city-palace": "City Palace Udaipur",
  "ranakpur-temple": "Ranakpur Temple",
  "dilwara-temples": "Dilwara Temples",
  "ajmer-dargah": "Ajmer Dargah",
  "purana-qila": "Purana Qila",
  "safdarjung-tomb": "Safdarjung Tomb",
  "jama-masjid": "Jama Masjid Delhi",
  "itmad-ud-daulah": "Itmad-ud-Daulah",
  "akbars-tomb": "Akbar's Tomb",
  "leh-palace": "Leh Palace",
  "hemis-monastery": "Hemis Monastery",
  "golconda-fort": "Golconda Fort",
  "ramappa-temple": "Ramappa Temple",
  "warangal-fort": "Warangal Fort",
  "chowmahalla-palace": "Chowmahalla Palace",
  "bidar-fort": "Bidar Fort",
  "hoysaleswara-temple": "Hoysaleswara",
  "pattadakal": "Pattadakal",
  "badami-caves": "Badami Caves",
  "gomateshwara": "Gomateshwara",
  "lepakshi-temple": "Lepakshi Temple",
  "tirupati-temple": "Tirupati Temple",
  "rameswaram-temple": "Rameswaram",
  "gangaikonda-cholapuram": "Gangaikonda",
  "basilica-bom-jesus": "Basilica Bom Jesus",
  "daulatabad-fort": "Daulatabad Fort",
  "aga-khan-palace": "Aga Khan Palace",
  "shaniwar-wada": "Shaniwar Wada",
  "raigad-fort": "Raigad Fort",
  "gwalior-fort": "Gwalior Fort",
  "orchha-fort": "Orchha Fort",
  "bhimbetka-caves": "Bhimbetka",
  "mandu-jahaz-mahal": "Jahaz Mahal Mandu",
  "lingaraja-temple": "Lingaraja Temple",
  "jagannath-temple": "Jagannath Temple",
  "udayagiri-khandagiri": "Udayagiri Caves",
  "sarnath": "Sarnath",
  "vaishali": "Vaishali",
  "kushinagar": "Kushinagar",
  "vikramshila": "Vikramshila",
  "kamakhya-temple": "Kamakhya Temple",
  "tawang-monastery": "Tawang Monastery",
  "howrah-bridge": "Howrah Bridge",
  "modhera-sun-temple": "Sun Temple Modhera",
  "dholavira": "Dholavira",
  "somnath-temple": "Somnath Temple",
};

interface PassportStore {
  visitedIds: string[];
  markVisited: (id: string) => void;
  isVisited: (id: string) => boolean;
  getRegionProgress: (region: PassportRegion) => { visited: number; total: number; complete: boolean };
  totalVisited: () => number;
  earnedBadges: () => string[];
}

export const usePassport = create<PassportStore>()(
  persist(
    (set, get) => ({
      visitedIds: [],

      markVisited: (id: string) => {
        set((state) => ({
          visitedIds: state.visitedIds.includes(id) ? state.visitedIds : [...state.visitedIds, id],
        }));
      },

      isVisited: (id: string) => get().visitedIds.includes(id),

      getRegionProgress: (region: PassportRegion) => {
        const visited = region.monumentIds.filter(id => get().visitedIds.includes(id)).length;
        return { visited, total: region.monumentIds.length, complete: visited === region.monumentIds.length };
      },

      totalVisited: () => get().visitedIds.length,

      earnedBadges: () =>
        REGIONS.filter(r => {
          const { complete } = get().getRegionProgress(r);
          return complete;
        }).map(r => r.id),
    }),
    { name: "historica-passport" }
  )
);
