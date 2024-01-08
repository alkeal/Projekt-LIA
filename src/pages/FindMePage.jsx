import React from "react";
import "../styles/pages/FindMepage.css";
import Sample from '../assets/sampleimage.jpg'

export default function FindMepage() {
  return (
    <div className="findme-page">
        <h1>Hitta hit</h1>
      <section className="map-section">
        <img src={Sample} alt="karta" className="map-image" />
      </section>
      <section className="info-section">
        <div className="contact-details">
          <h2>Kontakt</h2>
          <p>Folkungagatan 89, 116 30 Stockholm</p>
          <p>+46 123 456 789</p>
          <p>exempel@email.com</p>
        </div>
      </section>
    </div>
  );
}
