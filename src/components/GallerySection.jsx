import React from "react";
import sampleImage from "../assets/sampleimage.jpg";
import "../styles/components/GallerySection.css";

function GallerySection() {
  return (
    <div className="gallery-section">
      {/* Animation to the right*/}
      <img src={sampleImage} alt="SAMPLE" className="sample-image" />

      {/* A button with an arrow in the animation that says 'View Gallery' */}
      <button id="btn-gallery">VIEW GALLERY → </button>
    </div>
  );
}

export default GallerySection;
