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

     <li><Link  to="/">Hem</Link></li>

     <li> <Link to="/Gallerypage">Galleri</Link></li>

     <li><Link to="/Infopage">Om mig</Link></li>

     <li><Link to="/Infopage">Hitta hit</Link></li>

     <li><Link to="/Bookingpage"><div className="book">Boka tid</div></Link></li>

           </div>
      </div>
</ul>

 </div>



    )


}