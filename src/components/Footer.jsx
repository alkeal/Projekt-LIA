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
    <div className="Footer">
      <ul>
        <div className="Information" id={openLinks ? "open" : "close"}>
          <li>
            <Link to="/">{t("HEM")}</Link>
          </li>

          <li>
            <Link to="/Gallerypage">{t("GALLERI")}</Link>
          </li>

          <li>
            <Link to="/Aboutpage">{t("OM MIG")}</Link>
          </li>

          <li>
            <Link to="/FindMepage">{t("HITTA HIT")}</Link>
          </li>

          <li>
            <Link to="/Bookingpage">
              <div className="book">{t("BOKA TID")}</div>
            </Link>
          </li>
        </div>

        <div className="Contacts"></div>

        <div className="SocialMedia"></div>
      </ul>
    </div>
  );
}
