import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({cartCounter}) => {
  return (
    <>
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo">
          <span className="logo-dot">●</span>
          <span className="logo-text">blinkit</span>
        </div>

        <div className="delivery">
          <span className="delivery-title">Delivery in</span>
          <span className="delivery-time">10 minutes</span>
        </div>
      </div>

      <div className="nav-search">
        <input type="text" placeholder="Search for products" />
      </div>

      <div className="nav-right">
        <Link to="/login"><button className="login-btn">Login</button></Link>
        <Link to="/mycart">
  <button className="cart-btn">🛒 My Cart({cartCounter})</button></Link>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
