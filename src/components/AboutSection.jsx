import React from "react";
import sampleImage from "../assets/sampleimage.jpg";
import "../styles/AboutSection.css";

function AboutSection() {
  return (
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
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <button id="btn-about">READ MORE →</button>
      </div>
    </div>
  );
}

export default AboutSection;
