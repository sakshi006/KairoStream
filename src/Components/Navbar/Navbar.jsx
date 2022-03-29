import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="type-one--navbar">
      <div className="top-nav">
       <Link to="/">
       <img
          src="https://cdn.dribbble.com/users/22136/screenshots/10873421/media/cec33efe113c8f7b0b999c682fe174fd.jpg?compress=1&resize=400x300&vertical=top"
          alt="logo-company"
          className="company-logo"
        />
 </Link>
 <Link to="/" style={{textDecoration:"none"}}>
        <p className="site-name">Kairo Stream</p>
        </Link>
      
        <i className="fas fa-bars"></i>
      </div>
      <div className="hide">
        <div className="top-links">
          <Link to="/gallery">
            <button className="btn">Playlist</button>
          </Link>
          <Link to="/history">
            <button className="btn">History</button>
          </Link>
          <Link to="/liked">
            <button className="btn">Liked Videos</button>
          </Link>
          <Link to="/watchlater">
            <button className="btn">Watch Later</button>
          </Link>
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
