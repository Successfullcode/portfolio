import { Link } from "react-router-dom"
import "./Navbar.css"

import React, { useState } from 'react'
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () =>{
    if (window.scrollY > 50){
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  return (
    <div className="header">
      <Link to="/">
        <h1>SucceDevX</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link onClick={() => setClick(false)} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={() => setClick(false)} to="/project">
            Project
          </Link>
        </li>
        <li>
          <Link onClick={() => setClick(false)} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link onClick={() => setClick(false)} to="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
}

export default Navbar