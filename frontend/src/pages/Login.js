import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Account.css";
import logo from "../static/logo.png";

const Login = () => {

  if (localStorage.getItem('user')){
    window.location ='/community'
  }
  const [msg, setMsg] = useState();

  const login = (e) => {
    e.preventDefault();

    const data = {
      username: document.getElementById("username").value,
      password: document.getElementById("pass").value,
    };

    fetch("http://localhost:8000/auth/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        if (res.url.endsWith("login")) {
          setMsg("Invalid Credentials");
        } else {
          localStorage.setItem('user', data.username)
          window.location = "/community";
        }
      }
    });
  };

  return (
    <>
      <main>
        <div className="main">
          <Link to="/">
            <img src={logo} className="mylogo" />
          </Link>
          <div className="form">
            <h1>
              Login Now<span className="gradient">.</span>
            </h1>
            <p className="account-text">
              Not a Member? <Link to="/register">Sign Up</Link>
            </p>
            <form action="" onSubmit={login}>
              {msg ? <div className="error">{msg}</div> : <></>}

                <input type="username" id='username' placeholder='Enter your username' required className='input'/>
                <input type="password" id='pass' placeholder='Password' required className='input'/>
                <a href='#'>Forgot Password?</a><br />
                <button className="account">Log in</button>
            </form>
          </div>

          <div className="desc">
            <h1>
              Welcome Back to the <br/>
              <span className="gradient">Community</span>
            </h1>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
