import { useState } from "react";
import Homepage from "./pages/Homepage";
import Infopage from "./pages/Homepage";
import Bookingpage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Infopage" element={<Infopage />} />
          <Route path="/Bookingpage" element={<Bookingpage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
