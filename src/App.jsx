import { useState } from 'react'
//import { Route, Routes } from 'react-router-dom'
import Homepage from "./pages/Homepage"
import Infopage from "./pages/Homepage"
import Bookingpage from "./pages/Homepage"
import {BrowserRouter as Router, Route, Routes}from "react-router-dom"

function App() {
  


  return (

    
    <div className='App'>

      <Routes>

       <Route path='/'
         element= {<Homepage/>} />

       <Route path='/Infopage'
         element= {<Infopage/>} />

       <Route path='/Bookingpage'
         element= {<Bookingpage/>} />

      </Routes>
    </div>
  )
}

export default App
