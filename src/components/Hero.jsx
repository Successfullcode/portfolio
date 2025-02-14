import "./Hero.css";


import React from 'react'

import Hero1 from "../assets/Hero1.jpeg"
import {Link} from "react-router-dom"

const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="hero-img" src={Hero1} alt="hero" />
      </div>
      <div className="content">
        <p>HI, I'M Okwuluora Ndi Igbo.</p>
        <h1>I Promotes Good Living.</h1>
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