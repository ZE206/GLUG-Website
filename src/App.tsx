import { useState } from 'react'

import './App.css'
import Navbar from './components/Header/navbar'
import { BrowserRouter as Router,Route,Routes, Link } from "react-router";


function App() {
  

  return (
    <div className='font-primary bg-background'>
    <Navbar />
     <Link to="/">Home</Link>
     <Link to="/about">About</Link>
     <Link to="/contact">Contact</Link>
    </div>
  )
}

export default App
