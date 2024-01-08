import React from "react";
import "../styles/pages/FindMepage.css";

export default function FindMepage() {
  return (
    <div className="findme-page">
      <h1>Hitta mig</h1>
      <div className="map-placeholder">
        {/* bild på karta eller en riktig karta */}
      </div>
      <div className="contact-details">
        <h2> Info {/* information */}</h2>
        <p> mer info {/* telefon, email, adress mm */}</p>
      </div>
      <div className="social-media">{/* eventuella länkar */}</div>
    </div>
  );
}
