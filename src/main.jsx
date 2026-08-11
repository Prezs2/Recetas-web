import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Beef from './pages/Beef/Beef'
import Pig from './pages/Pig/Pig'
import Legumes from './pages/Legumes/Legumes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beef" element={<Beef />} />
        <Route path="/pig" element={<Pig />} />
        <Route path="/legumes" element={<Legumes />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
