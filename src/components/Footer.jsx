
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../styles/components/Footer.css";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const [openLinks, setOpenLinks] = useState(false);
  const { t, i18n } = useTranslation();

  const swapLanguage = (languageCode) => {
    console.log(`Changing language to ${languageCode}`);
    i18n.changeLanguage(languageCode);
  };
return (

<div></div>



);}