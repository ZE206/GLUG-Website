import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Header/navbar'
import { BrowserRouter as Router,Route,Routes, Link } from "react-router";


function App() {
  

  return (
    <>
    <Navbar />
     <Link to="/">Home</Link>
     <Link to="/about">About</Link>
     <Link to="/contact">Contact</Link>
    </>
  )
}

export default App
