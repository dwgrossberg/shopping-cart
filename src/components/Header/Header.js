import React from "react";
import { NavLink } from "react-router-dom";
import icon from "../../assets/icon.png";
import CartIcon from "../CartIcon/CartIcon";
import "./Header.scss";

const Header = (props) => {
  const { cart, products, setCategory } = props;
  const handleClick = () => {
    setCategory([...products]);
  };
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
          <NavLink
            to="/products"
            className={"nav-link"}
            style={{ textDecoration: "none" }}
            onClick={handleClick}
          >
            <li>products</li>
          </NavLink>
        </ul>
      </nav>
      <NavLink to="/cart">
        <CartIcon cart={cart} />
      </NavLink>
    </div>
  );
};

export default Header;
