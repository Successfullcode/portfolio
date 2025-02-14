import React from 'react'
import './App.css'
import Home from '../src/routes/Home.jsx'
import About from "../src/routes/About.jsx";
import Contact from "../src/routes/Contact.jsx";
import Project from "../src/routes/Project.jsx";
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';







function App() {
  

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
