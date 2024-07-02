import { useState } from 'react'

import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './compents/Home'

import Contact from './compents/Contact'
import About from './compents/About'
import Navbar from './NavFooter/Navbar'
import Fooder from './NavFooter/Fooder'
import Project from './compents/Project'

function App() {
  

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <Fooder/>
    </BrowserRouter>
  )
}

export default App
