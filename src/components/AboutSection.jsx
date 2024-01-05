import React from "react";
import sampleImage from "../assets/sampleimage.jpg";
import "../styles/components/AboutSection.css";
import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <div className="about-section">
      <div className="image-container">
        <img src={sampleImage} alt="Image 1" className="about-image" />
        <img src={sampleImage} alt="Image 2" className="about-image" />
        <img src={sampleImage} alt="Image 3" className="about-image" />
      </div>
      <div className="about-text">
        <h1>OM MIG</h1>
        <p>
          Mia Hadadi är en frisör med rötterna i en familj av hantverkare, där
          skapandet av skönhet har gått i arv. Med en gedigen utbildning från
          Vidal Sassoon Academy i London och två decennier av erfarenhet från
          egen salong, har Mia en sällsam förmåga att se och framhäva varje
          kunds unika stil. Hennes passion för mötet med människor och hennes
          konstnärliga talang gör varje besök till en speciell upplevelse.
        </p>
        <Link to="/Aboutpage" className="btn-about">LÄS MER →</Link>
      </div>
    </div>
  );
}

export default AboutSection;
