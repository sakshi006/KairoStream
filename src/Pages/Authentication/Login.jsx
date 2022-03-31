import axios from "axios";
import React,{ useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

export const Login = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({ email: "", pass: "" });

  const dummyUser = {
    email: "adarshbalika@gmail.com",
    pass: "adarshBalika123",
  };

  const addDummyUser = (e) => {
    e.preventDefault();
    setCredentials(dummyUser);
  };
  
  const dataHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setCredentials({ ...credentials, [name]: value });
  };

  const logInUser = async (e) => {
    e.preventDefault();
    await axios
      .post("/api/auth/login", {
        email: credentials.email,
        password: credentials.pass,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.encodedToken);
        navigate("/");
      })
      .catch((err) => alert("USER NOT FOUND"));
  };

  return (
    <div className="content">
      <form className="auth-form">
        <h1>Login</h1>
        <div className="form-item">
          <label htmlFor="email">Email Address</label>
          <input
            className="input-field login-input"
            type="email"
            id="email"
            value={credentials.email}
            onChange={dataHandler}
            placeholder="sakshikumar@gmail.com"
          />
        </div>
        <div className="form-item">
          <label htmlFor="password">Password</label>
          <input
            className="input-field login-input"
            type="password"
            id="password"
            value={credentials.pass}
            onChange={dataHandler}
            placeholder="*****"
          />
        </div>
        <div className="form-item bottom">
          <div className="remember">
            <input type="checkbox" />
            <span className="remember-text">Remember me</span>
          </div>
          <span className="forgot-pass">Forgot your Password?</span>
        </div>
        <button onClick={addDummyUser} className="btn login-btn">
          Add dummy data
        </button>
        <button onClick={logInUser} className="btn login-btn">
          Login
        </button>
        <Link to="/signup" className="new-acc">
          Create New Account <i className="fas fa-chevron-right"></i>
        </Link>
      </form>
    </div>
  );
};
