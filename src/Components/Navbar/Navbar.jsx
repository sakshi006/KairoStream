import React from 'react'
import "./Navbar.css"

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="type-one--navbar">
  <div className="top-nav">
     <img src="https://cdn.dribbble.com/users/22136/screenshots/10873421/media/cec33efe113c8f7b0b999c682fe174fd.jpg?compress=1&resize=400x300&vertical=top" alt="logo-company" className="company-logo" />
     <i className="fas fa-bars"></i>
     <p>Kairo Stream</p>
  </div>
  <div className="hide">
     <div className="top-links">
     <Link to="/login">
          <button className="btn">Login</button>
        </Link>
        </div>
  </div>
</div>
  )
}

export default Navbar