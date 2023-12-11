import { useState } from 'react'
import './App.css'
//import { Route, Routes } from 'react-router-dom'
import Homepage from "./components/Homepage"
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
