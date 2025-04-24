import { Link } from "react-router-dom"
import "./AboutContent.css"

import React from 'react'
import Pic from "../assets/Pic.jpg"
import Hero2 from "../assets/Hero2.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I</h1>
        <p>I'm Success Obijuru . I am a passionate web devlover.</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img className="img" src={Pic} alt="image" />
          </div>
          <div className="img-stack bottom">
            <img className="img" src={Hero2} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent