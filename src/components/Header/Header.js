import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = (props) => {
  return (
    <div className="header">
      <nav className="header-nav">
        <ul>
          <NavLink
            to="/"
            className={"nav-link"}
            style={{ textDecoration: "none" }}
          >
            <li>Home</li>
          </NavLink>
          <NavLink to="/products" className={"nav-link"}>
            <li>Products</li>
          </NavLink>
          <NavLink to="/contact" className={"nav-link"}>
            <li>Contact</li>
          </NavLink>
        </ul>
      </nav>
      <div id="cart">Cart</div>
    </div>
  );
};

export default Header;
