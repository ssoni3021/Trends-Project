import React from "react";
import { FcShop } from "react-icons/fc";
import { Link } from "react-router-dom";
import "./Nav.css";
import LogoutButton from "../LogoutButton/LogoutButton";
import { FaUserCircle } from "react-icons/fa";
import CartSidebar from "../CartSidebar/CartSidebar";
import CartIcon from "../CartIcon/CartIcon";

const Nav = () => {
  const isLoggedIn = JSON.parse(localStorage.getItem("userLogin"))?.loggedIn;

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="logo">
          <FcShop className="logo-icon" />
          <span className="logo-text">TrendyShoes</span>
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/" className="nav-link">
            Men
          </Link>
          <Link to="/" className="nav-link">
            Women
          </Link>
        </div>
        <div className="profile-container">
          <CartIcon/>
          <CartSidebar />
          {isLoggedIn ? (
            <>
              <Link to="/user-profile">
                <FaUserCircle className="userlogo nav-icons" />
              </Link>
              <LogoutButton />
            </>
          ) : (
            <Link to="/signin" className="btn-signin">
              Sign In / Sign Up
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;

