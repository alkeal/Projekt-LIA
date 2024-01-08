import React from "react";
import "../styles/pages/Bookingpage.css";

export default function Bookingpage() {
  return (
    <div className="booking-page">
      <h1>Boka tid</h1>

      <section className="booking-info">
        <h2>Priser</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <ul>
          <br></br>
          <li>Klippning - 1000 kr</li>
          <li>Klippning - 1000 kr</li>
          <li>Klippning - 1000 kr</li>
          <li>Färgning - 1000 kr</li>
          <li>Färgning - 1000 kr</li>
          <li>Färgning - 1000 kr</li>
          <li>Styling - 1000 kr</li>
          <li>Styling - 1000 kr</li>
          <li>Styling - 1000 kr</li>
        </ul>
        <a
          href="https://www.bokadirekt.se/places/ca-company-halsa-och-skonhet-10744?sr=DA1147D6_F780_4B70_888F_145DC48EE155/mia-fris%C3%B6r"
        >
          Boka på Bokadirekt.se
        </a>
      </section>
      <section className="contact-form">
        <h2>Kontakta mig</h2>
        <form>
          <label htmlFor="name">Namn:</label>
          <input type="text" id="name" name="name" placeholder="Ditt namn" />

          <label htmlFor="email">E-post:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Din e-post"
          />

          <label htmlFor="message">Meddelande:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Ditt meddelande"
          ></textarea>

          <button type="submit">Skicka</button>
        </form>
      </section>
    </div>
  );
}
