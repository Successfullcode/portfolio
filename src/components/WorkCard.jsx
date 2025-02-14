import "./WorkCard.css";

import React from 'react'
import {Link} from "react-router-dom"

const workCard = (props) => {
  return (
    <div className="project-card">
              <img src={props.imgsrc} alt="" />
              <h2 className="project-title">{props.title}</h2>
              <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btns">
                  <Link to={props.view} className="btn">
                    View
                  </Link>
                  <Link to={props.source} className="btn">
                    Source
                  </Link>
                </div>
              </div>
            </div>
  );
}

export default workCard
