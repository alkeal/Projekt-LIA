import React from "react";
import "../styles/FindMeSection.css";

function FindMeSection() {
  return (
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
  );
}

export default FindMeSection;
