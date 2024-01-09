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
            <Link to="/FindMepage">{t("HITTA HIT")} </Link>
            
          </li>

          <li>
            <Link to="/Bookingpage">
              <div className="book">{t("BOKA TID")}</div>
            </Link>
          </li>
        </div>
 
        <div className="ContactsContainer">
            <div className="ContactIcons">
              <li><img src="./src/assets/MapPin.png" alt="MapPin" /> Adress, 1234, Stockholm</li>
              <li><img src="./src/assets/Phone.png" alt="Phone" /> Telefonnummer</li>
              <li><img src="./src/assets/Mail.png" alt="Mail" /> minmejl@gmail.com</li>
            </div>
           
        </div>
       
        <div className="SocialMediaContainer">
            <div className="SocialMediaIcons">
                
            </div>
        </div>
      </ul>
    </div>
  );
}
