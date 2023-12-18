import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // engelska översättningar här
    },
  },
  sv: {
    translation: {
      // svenska översättningar här
    },
  },
  fr: {
    translation: {
      // franska översättningar här
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "se", // standard språk
    fallbackLng: "se", // vilket språk att använda om det saknas översättningar
    interpolation: {
      escapeValue: false, // reagerar redan på xss
    },
  });

export default i18n;