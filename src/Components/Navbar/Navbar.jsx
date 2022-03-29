import React from 'react'
import "./Navbar.css"

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="type-one--navbar">
  <div className="top-nav">
     <img src="https://cdn.dribbble.com/users/22136/screenshots/10873421/media/cec33efe113c8f7b0b999c682fe174fd.jpg?compress=1&resize=400x300&vertical=top" alt="logo-company" className="company-logo" />
     <p>Kairo Stream</p>
     <i className="fas fa-bars"></i>
  </div>
  <div className="hide">
     <div className="top-links">
     <Link to="/login">
          <button className="btn">Login</button>
        </Link>
        <Link to="/signup">
          <button className="btn">SignUp</button>
        </Link>
        <Link to="/gallery">
          <button className="btn">Gallery</button>
        </Link>
        </div>
  </div>
</div>
  )
}

export default Navbar