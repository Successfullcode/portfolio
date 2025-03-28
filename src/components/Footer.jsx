import "./Footer.css"

import React from 'react'

import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaWhatsapp} from "react-icons/fa"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Imo  State</p>
              <p>Nigeria</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              {" "}
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />{" "}
              08104160633
            </h4>
          </div>
          <div className="email">
            <h4>
              {" "}
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              successobijuru81@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About SucceDevX</h4>
          <p>
            This is me SucceDevX, A passionate web developer (fullstack).
          </p>
          <div className="social">
            <Link to="">
              <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </Link>
            <FaWhatsapp
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer