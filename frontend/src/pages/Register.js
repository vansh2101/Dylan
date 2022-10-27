import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Account.css";
import logo from "../static/logo.png";

const Register = () => {
  const [msg, setMsg] = useState();

  const register = (e) => {
    e.preventDefault();

    const data = {
      username: document.getElementById("username").value,
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      pass1: document.getElementById("pass").value,
      pass2: document.getElementById("pass").value,
    };

    fetch("http://localhost:8000/auth/register/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!data.error) {
          window.location = "/login";
        } else {
          setMsg(data.msg);
        }
      });
  };

  return (
    <main>
      <div className="main">
        <Link to="/">
          <img src={logo} className="mylogo" />
        </Link>
        <div className="form">
          <h1>
            Create a new Account<span className="gradient">.</span>
          </h1>
          <p className="account-text">
            Aleardy a Member? <Link to="/login">Log in</Link>
          </p>
          <form action="" onSubmit={register}>
            {msg ? <div className="error">{msg}</div> : <></>}

            <input type="text" id="username" placeholder="Username" required />
            <input type="text" id="name" placeholder="Name" required />
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              required
            />
            <input type="password" id="pass" placeholder="Password" required />
            <button className="account">Create Account</button>
          </form>
        </div>

        <div className="desc">
            <h1>
              Welcome to the <br/>
              <span className="gradient">Community</span>
            </h1>
          </div>
      </div>
    </main>
  );
};

export default Register;
