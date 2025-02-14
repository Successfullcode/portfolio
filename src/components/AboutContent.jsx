import { Link } from "react-router-dom"
import "./AboutContent.css"

import React from 'react'
import Pic1 from "../assets/Pic1.jpeg"
import Pic from "../assets/Pic.jpeg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I</h1>
        <p>I'm Okwulupora ndi Igbo. I Promotes Good Living.</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img className="img" src={Pic1} alt="image" />
          </div>
          <div className="img-stack bottom">
            <img className="img" src={Pic} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent