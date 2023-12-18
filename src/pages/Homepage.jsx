import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import sampleImage from "../assets/sampleimage.jpg";
import "../styles/Homepage.css";

function Homepage() {
  return (
    <div className="homepage">
      <div className="top-section">
        <div className="name-section">
          <h2>MIA</h2>
          <h1>HADADI</h1>
        </div>

        <div className="gallery-section">
          {/* Animation to the right*/}
          <img src={sampleImage} alt="SAMPLE" className="sample-image" />

          {/* A button with an arrow in the animation that says 'View Gallery' */}
          <button id="btn-gallery">VIEW GALLERY → </button>
        </div>
      </div>

      <div className="about-section">
        <div className="image-container">
          <img src={sampleImage} alt="Image 1" className="about-image" />
          <img src={sampleImage} alt="Image 2" className="about-image" />
          <img src={sampleImage} alt="Image 3" className="about-image" />
        </div>
        <div className="about-text">
          <h1>ABOUT</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button id="btn-about">READ MORE →</button>
        </div>
      </div>

      <div className="findme-section">
        <div className="findme-header">
          <h1>FIND ME</h1>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2036.0489424791488!2d18.0821419!3d59.315439700000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77f9a049f4b5%3A0xb2e5701445562583!2sFolkungagatan%2089%2C%20116%2030%20Stockholm!5e0!3m2!1sen!2sse!4v1702646677208!5m2!1sen!2sse"
            width="1170"
            height="465"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="map-overlay"></div>
        </div>
        <div className="findme-content">
          <h1>Name of Place</h1>
        </div>
        <button id="btn-findme">VIEW MAP →</button>
      </div>

      <div className="booking-section">
        {/* Title with text */}
        <h1>BOOK NOW</h1>

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
