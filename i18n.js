import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // dina engelska översättningar här
    },
  },
  sv: {
    translation: {
      // dina svenska översättningar här
    },
  },
  fr: {
    translation: {
      // dina franska översättningar här
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // standard språk
    fallbackLng: "en", // vilket språk att använda om det saknas översättningar
    interpolation: {
      escapeValue: false, // reagerar redan på xss
    },
  });

export default i18n;