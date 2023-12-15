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
        {/* Title */}
        <h1>FIND ME</h1>

        {/* Name of Salon displayed over a faded map */}

        {/* A button with an arrow that says 'View Map' */}
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
