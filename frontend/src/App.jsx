import React from 'react';
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Career from './pages/Career';
import Footer from './Components/Footer';
import Contact from './pages/Contact';
// Assuming you have a Home component

function App() {
  return (
    <div>
      <Navbar />
      
    <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/about" element={<About/>} />
     <Route path="/services" element={<Services/>} />
     <Route path="/career" element={<Career/>} />
     <Route path='/contact' element={<Contact/>} />
     
       
     
    </Routes>

    <Footer/>
    </div>
  );
}

export default App;