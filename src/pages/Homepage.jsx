import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/Homepage.css";

function Homepage() {

  
  return (

    
    
    <div className="homepage">

      <div className="name-section">
      <h2>MIA</h2>
      <h1>HADADI</h1>

      </div>

      <div className="gallery-section">
        
         {/* Animation to the right*/}

         {/* A button with an arrow in the animation that says 'View Gallery' */}
      
      </div>

      <div className="about-section">

         {/* Images */}

          {/* Title with text about Mia */}

          {/* A button with an arrow that says 'Read More' */}

      </div>

      <div className="findme-section">

         {/* Title */}

          {/* Name of Salon displayed over a faded map */}

           {/* A button with an arrow that says 'View Map' */}

      </div>

      <div className="booking-section">

         {/* Title with text */}

          {/* Heading with text*/}

           {/* Images */}

           {/* Heading with text */}

           {/* A button with an arrow that says 'Book Now' */}

      </div>

       {/* Footer */}
    </div>
  );
}

export default Homepage;
