import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from './translate/en.json';
import svTranslations from './translate/sv.json';
import frTranslations from './translate/fr.json';

const resources = {
  en: {
    translation: {
      // engelska översättningar här
      enTranslations
    },
  },
  sv: {
    translation: {
      // svenska översättningar här
      svTranslations
    },
  },
  fr: {
    translation: {
      // franska översättningar här
      frTranslations
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "sv", // standard språk
    fallbackLng: "sv", // vilket språk att använda om det saknas översättningar
    interpolation: {
      escapeValue: false, // reagerar redan på xss
    },
  });

export default i18n;