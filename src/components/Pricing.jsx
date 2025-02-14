import "./Pricing.css"

import React from 'react'
import {Link} from 'react-router-dom'

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>- Basic -</h3>
          <span className="bar"></span>
          <p className="btc">$ 200</p>
          <p>- 3 Days -</p>
          <p>- 3 Pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Desgn -</p>
          <Link to="/contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>
        <div className="card">
          <h3>- Premuin -</h3>
          <span className="bar"></span>
          <p className="btc">$ 500</p>
          <p>- 3 Days -</p>
          <p>- 3 Pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Desgn -</p>
          <Link to="/contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>
        <div className="card">
          <h3>- Business -</h3>
          <span className="bar"></span>
          <p className="btc">$ 800</p>
          <p>- 5 Days -</p>
          <p>- 8 Pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Desgn -</p>
          <Link to="/contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Pricing