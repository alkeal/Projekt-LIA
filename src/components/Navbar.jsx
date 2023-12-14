import {Link} from "react-router-dom"
import React, { useState } from 'react'
import '../styles/Navbar.css'


export default function Navbar(){

    const [openLinks, setOpenLinks] = useState(false)


    return(

        <div className="Navbar">

 <ul>
    <div className="rightSide" id={openLinks ? "open" : "close"}>
      <div className="hiddenLinks">

     <li><Link  to="/Homepage">HEM</Link></li>

     <li> <Link to="/Gallerypage">GALLERI</Link></li>

     <li><Link to="/Infopage">OM MIG</Link></li>

     <li><Link to="/Infopage">HITTA HIT</Link></li>

     <li><Link to="/Bookingpage"><div className="book">BOKA TID</div></Link></li>

           </div>
      </div>
</ul>

 </div>



    )


}