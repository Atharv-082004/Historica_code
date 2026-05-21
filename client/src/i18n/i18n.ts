import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translations/en";
import hi from "./translations/hi";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      hi: { translation: hi },
    },
    lng: localStorage.getItem("historica-lang") || "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("historica-lang", lng);
});

export default i18n;
