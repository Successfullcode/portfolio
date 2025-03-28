import "./Hero.css";


import React from 'react'

import Hero1 from "../assets/Hero1.jpg"
import {Link} from "react-router-dom"

const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="hero-img" src={Hero1} alt="hero" />
      </div>
      <div className="content">
        <p>HI, I'M SucceDevX.</p>
        <h1>I am a passionate web developer.</h1>
        <div>
          <Link to="/project" className="btn">
            Project
          </Link>
          <Link to="/contact" className="btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero