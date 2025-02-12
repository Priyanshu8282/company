import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Career from './pages/Career';
import Footer from './Components/Footer';
import Contact from './pages/Contact';
import Cursor from './Components/Cursor';


function App() {
  return (
    <div>
      <Navbar />
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      
      <Footer />
      
      <Cursor/>
    </div>
  );
}

export default App;
