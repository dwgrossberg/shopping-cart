import React from "react";
import { NavLink } from "react-router-dom";
import icon from "../../assets/icon.png";
import Cart from "../Cart/Cart";
import "./Header.scss";

const Header = (props) => {
  return (
    <div className="header">
      <nav className="header-nav">
        <ul>
          <li>
            <img alt="icon" src={icon} id="icon"></img>
          </li>
          <NavLink
            to="/"
            className={"nav-link"}
            style={{ textDecoration: "none" }}
          >
            <li>home</li>
          </NavLink>
          <NavLink to="/products" className={"nav-link"}>
            <li>products</li>
          </NavLink>
          <NavLink to="/contact" className={"nav-link"}>
            <li>contact</li>
          </NavLink>
        </ul>
      </nav>
      <Cart />
    </div>
  );
};

export default Header;
