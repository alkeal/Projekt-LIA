import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/Homepage.css";
import GallerySection from "../components/GallerySection";
import AboutSection from "../components/AboutSection";
import FindMeSection from "../components/FindMeSection";
import BookingSection from "../components/BookingSection";

function Homepage() {
  return (
    <div className="homepage">
      <div className="top-section">
        <div className="name-section">
          <h2>MIA</h2>
          <h1>HADADI</h1>
        </div>
        <GallerySection />
      </div>
      <AboutSection />
      <FindMeSection />
      <BookingSection />

      {/* Footer */}
    </div>
  );
}

export default Homepage;
