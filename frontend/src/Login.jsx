import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if(email && password){
      navigate("/home");
    }
    else{
      alert("Please enter email and password");
    }
  };

  const goToHome = () => {
    navigate("/home");
  };

  return (

    <div className="login-page">

      <div className="left-section">
        <div className="overlay"></div>

        <div className="left-content">
          <h1>
            Groceries delivered
            <span>in minutes.</span>
          </h1>

          <p>
            Fresh fruits, vegetables, snacks, dairy products and daily essentials delivered instantly.
          </p>
        </div>
      </div>

      <div className="right-section">

        <div className="login-box">

          <button
            className="back-btn"
            onClick={goToHome}
          >
            ← Back to Home
          </button>

          <h2>Welcome Back 👋</h2>

          <p className="subtitle">
            Login to continue shopping with Blinkit
          </p>

          <form onSubmit={handleLogin}>

            <div className="input-group">
              <label>Email</label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label>Password</label>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>

            <button type="submit">
              Login
            </button>

          </form>

          <p className="signup-text">
            Don’t have an account?
            <span> Create Account</span>
          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;

