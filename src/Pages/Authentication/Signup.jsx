import axios from 'axios'
import React,{ useState }  from 'react'
import { Link, useNavigate } from 'react-router-dom'

import "./Auth.css"

const Signup = () => {

  const navigate = useNavigate()
  const [credentials,setCredentials]  = useState({
      email:'',
      pass:'',
      cpass:''
  })

  const dataHandler=(e)=>{
    let name = e.target.name
    let value = e.target.value
    setCredentials({...credentials,[name]:value})
}

const logInUser=async(e)=>{
  e.preventDefault()
  if(credentials.pass === credentials.cpass){
    await axios.post('/api/auth/signup',{
        firstName:'user',
        lastName:'test',
        email:credentials.email,
        password:credentials.password
      })
      .then(res=>{
        localStorage.setItem('token',res.data.encodedToken)
        navigate('/')
      }).catch((err)=>alert('got api error',err))
  }else{
      alert("PLEASE ENTER CORRECT PASSWORD")
  }
}



  return (
    <div className="content">
<form className="auth-form signup-form">
  <h1>Signup</h1>
  <div className="form-item">
    <label htmlFor="name">Full Name</label>
    <input className="input-field login-input"
      type="text"
      id="name"
      value={credentials.email} name='email' onChange={dataHandler}
      placeholder="Enter your full name"
    />
  </div>
  <div className="form-item">
    <label htmlFor="email">Email Address</label>
    <input className="input-field login-input"
      type="email"
      id="email"
      value={credentials.pass} name='pass' onChange={dataHandler}
      placeholder="sakshikumar@gmail.com"
    />
  </div>
  <div className="form-item">
    <label htmlFor="password">Password
    </label>
    <input className="input-field login-input" type="password" id="password"
    value={credentials.cpass} name='cpass' onChange={dataHandler} placeholder="*****" />
  </div>
  <div className="form-item">
    <label htmlFor="confirm-password">Confirm Password
    </label>
    <input className="input-field login-input" type="password" id="confirm-password" placeholder="*****" />
  </div>
  <div className="form-item bottom">
    <div className="remember">
      <input type="checkbox" />
    <span className="remember-text">I accept all Terms & Conditions</span>
    </div>          
  </div>
  <button onClick={logInUser} className="btn login-btn">Create New Account</button
  ><Link to="/login"  className="new-acc"
    >Already have an account <i className="fas fa-chevron-right"></i
  ></Link>
</form>
</div>
  )
}

export default Signup