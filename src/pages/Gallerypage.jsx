import React from 'react'
import '../styles/pages/GalleryPage.css'; 
import Sample from '../assets/sampleimage.jpg'

export default function Gallerypage() {
  const images = [Sample, Sample, Sample];
  return (
    <div className="gallery-page">
      <h1 className="gallery-title">Photo Gallery</h1>
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
      {/* ARROWS */}
    </div>
  );
}