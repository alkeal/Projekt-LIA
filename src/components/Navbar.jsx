import {Link} from "react-router-dom"
import React, { useState } from 'react'
import '../styles/Navbar.css'
import { useTranslation } from 'react-i18next';


export default function Navbar(){

    const [openLinks, setOpenLinks] = useState(false)
    const { t, i18n } = useTranslation();

    const swapLanguage = (langaugeCode) => {
        i18n.changeLanguage(langaugeCode);
      };

    return(

        <div className="Navbar">

 <ul>
    <div className="rightSide" id={openLinks ? "open" : "close"}>
      <div className="hiddenLinks">

     <li><Link  to="/Homepage">{t('HEM')}</Link></li>

     <li> <Link to="/Gallerypage">{t('GALLERI')}</Link></li>

     <li><Link to="/Infopage">{t('OM MIG')}</Link></li>

     <li><Link to="/Infopage">{t('HITTA HIT')}</Link></li>

     <li><Link to="/Bookingpage"><div className="book">{t('BOKA TID')}</div></Link></li>
     <li className="Sweden" onClick={() => swapLanguage('se')}>
  <img src="./src/assets/Sweden.png" alt="Svenska" />
</li>
<li className="UnitedKingdom" onClick={() => swapLanguage('en')}>
  <img src="./src/assets/UnitedKingdom.png" alt="English" />
</li>
<li className="France" onClick={() => swapLanguage('fr')}>
  <img src="./src/assets/France.png" alt="French" />
</li>
           </div>
      </div>
</ul>

 </div>



    )


}