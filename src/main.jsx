import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HashRouter as Router } from "react-router-dom";
import {I18nextProvider} from "react-i18next";
import i18n from "./translate/i18n.js"; // Byt ut mot sökvägen till din i18n-konfiguration





ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <I18nextProvider i18n={i18n}>
      <App />
      </I18nextProvider>
  </React.StrictMode>
);
