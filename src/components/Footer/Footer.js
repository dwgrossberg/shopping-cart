import React from "react";
import "./Footer.scss";
import gitHubIcon from "../../assets/github.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="made-by">
        <p>Made by</p>
        <a href="https://github.com/dwgrossberg">
          <img id="github-icon" alt="github-icon" src={gitHubIcon} />
        </a>
        <p>Dan Grossberg</p>
      </div>
    </div>
  );
};

export default Footer;
