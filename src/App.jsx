import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'

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
