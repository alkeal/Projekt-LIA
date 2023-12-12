import {Link} from "react-router-dom"
import React, { useState } from 'react'
import './Navbar.css'


export default function Navbar(){

    const [openLinks, setOpenLinks] = useState(false)


    return(

        <div className="Navbar">


    <div className="rightSide" id={openLinks ? "open" : "close"}>
      <div className="hiddenLinks">

      <Link  to="/Homepage">Hem</Link>

      <Link to="/Bookingpage">Boka tid</Link>

      <Link to="/Infopage">Mer information</Link>

      <Link to="/Gallerypage">Galleri</Link>

           </div>
      </div>


 </div>



    )


}