import {Link} from "react-router-dom"
import React, { useState } from 'react'
import './Navbar.css'


export default function Navbar(){

    const [openLinks, setOpenLinks] = useState(false)


    return(

        <div className="Navbar">

 <ul>
    <div className="rightSide" id={openLinks ? "open" : "close"}>
      <div className="hiddenLinks">

     <li><Link  to="/Homepage">Hem</Link></li>

      <li><Link to="/Bookingpage">Boka tid</Link></li>

      <li><Link to="/Infopage">Mer information</Link></li>

     <li> <Link to="/Gallerypage">Galleri</Link></li>

           </div>
      </div>
</ul>

 </div>



    )


}