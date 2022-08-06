import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  let getClasses = () => {
    return props.itemsCount === 0
      ? "visually-hidden"
      : "bg-danger position-absolute top-0 start-100 translate-middle badge rounded-pill";
  };
  return (
    <header>
      <div className="logo">
        <NavLink className="for-nav" to="/">
          <i className="fas fa-utensils"></i>Foods.
        </NavLink>
      </div>
      <nav className="navbar">
        <NavLink to="/" className="for-nav">
          Home
        </NavLink>
        <NavLink className="for-nav" to="/dishes">
          Dishes
        </NavLink>
        <NavLink className="for-nav" to="/about">
          About
        </NavLink>
        <NavLink className="for-nav" to="/menu">
          Menu
        </NavLink>
        <NavLink className="for-nav" to="/review">
          Review
        </NavLink>
        <NavLink className="for-nav" to="/order">
          Order
        </NavLink>
      </nav>
      <div className="icons">
        <i className="fas fa-bars" id="menu-bars"></i>
        <NavLink to={`/search`}>
          <i className="fas fa-search" id="search-icon"></i>
        </NavLink>
        <NavLink className="for-nav fas fa-heart" to="/love"></NavLink>
        <NavLink
          className="for-nav fas fa-shopping-cart position-relative"
          to="/cart"
        >
          <span className={getClasses()}>{props.itemsCount}</span>
        </NavLink>
      </div>
    </header>
  );
}

export default Navbar;
