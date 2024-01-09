import React from "react";
import "../styles/pages/Aboutpage.css";
import Sample from "../assets/sampleimage.jpg";

export default function Aboutpage() {
  return (
    <div className="about-page">
      <div className="about-top-section">
      <img src={Sample} alt="mia" className="first-image" />
      <div className="about-first-container">
        <section className="about-first-row">
          <p>
            <b>M</b>ia Hadidi har sedan ung ålder haft en passion för
            frisöryrket, en passion som växte fram under tonåren. Hon började
            klippa hår redan som 14-åring och har sedan dess utvecklat sitt
            hantverk. Med en familjebakgrund där morfadern var frisör, fanns det
            både inspiration och kunskap att dra nytta av.
            <br></br>
            <br></br>
            År 1993 tog Mia steget att vidareutbilda sig på den anrika Vidal
            Sassoon Academy i London, en erfarenhet som lade grunden för hennes
            framtid inom yrket. Efter att ha drivit en egen salong i 20 år,
            valde hon att ta en ny riktning i karriären genom att hyra stol,
            vilket gav henne en ny frihet att fokusera på den del av yrket som
            hon älskar mest - mötet med människor.
          </p>
        </section>
      </div>
      </div>
      <div className="about-second-container">
        <section className="about-second-row">
          <p>
            I sin profession utför Mia ett brett spektrum av tjänster inom
            hårstyling, från klippningar till färgningar, slingor och permanent,
            samt hårförtjockning och förlängningar. Hennes dedikation till yrket
            speglas i hennes strävan att ständigt hålla sig uppdaterad genom att
            regelbundet närvara vid utbildningskurser och visningar.
            <br></br>
            <br></br>
            Mia värdesätter kundrelationer högt och ser varje möte som en
            möjlighet att inte bara försköna utan även skapa en varaktig
            relation. Hon ser fram emot att välkomna dig till CA & Co, där hon
            fortsätter att sätta färg och form på sina kunders hårdrömmar.
          </p>
        </section>
      </div>
    </div>
  );
}
