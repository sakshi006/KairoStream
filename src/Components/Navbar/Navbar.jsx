import React from "react";
import "./Navbar.css";

import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  let token = localStorage.getItem("token");
  const LogUserOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="type-one--navbar">
      <div className="top-nav" style={{ margin: "0%" }}>
        <Link to="/">
          <img
            src="https://cdn.dribbble.com/users/22136/screenshots/10873421/media/cec33efe113c8f7b0b999c682fe174fd.jpg?compress=1&resize=400x300&vertical=top"
            alt="logo-company"
            className="company-logo"
          />
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <p className="site-name">Kairo Stream</p>
        </Link>

        <i className="fas fa-bars"></i>
      </div>
      <div className="hide">
        <div className="top-links">
          {!token ? (
            <Link to="/login">
              <button className="btn">Playlist</button>
            </Link>
          ) : (
            <Link to="/playlist">
              <button className="btn">Playlist</button>
            </Link>
          )}

          {!token ? (
            <Link to="/login">
              <button className="btn">History</button>
            </Link>
          ) : (
            <Link to="/history">
              <button className="btn">History</button>
            </Link>
          )}

          {!token ? (
            <Link to="/login">
              <button className="btn">Liked Videos</button>
            </Link>
          ) : (
            <Link to="/liked">
              <button className="btn">Liked Videos</button>
            </Link>
          )}

          {!token ? (
            <Link to="/login">
              <button className="btn">Watch Later</button>
            </Link>
          ) : (
            <Link to="/watchlater">
              <button className="btn">Watch Later</button>
            </Link>
          )}

          {!token ? (
            <>
              <Link to="/login">
                <button className="btn">Login</button>
              </Link>
              <Link to="/signup">
                <button className="btn">Signup</button>
              </Link>
            </>
          ) : (
            <Link to="/">
              <button onClick={LogUserOut} className="btn">
                LogOut
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
