import { useState } from 'react'
import Homepage from "./pages/Homepage"
import AboutPage from "./pages/Aboutpage"
import Bookingpage from "./pages/Bookingpage"
import GalleryPage from './pages/Gallerypage'
import Navbar  from './components/Navbar'
import Footer from './components/Footer'
import {BrowserRouter as Router, Route, Routes}from "react-router-dom"
import {useTranslation} from "react-i18next";



function App() {
  
  const {t} = useTranslation("common");


  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Aboutpage" element={<AboutPage />} />
          <Route path="/Bookingpage" element={<Bookingpage />} />
          <Route path="/Gallerypage" element={<GalleryPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
