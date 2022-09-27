import React from "react";
import "./Footer.scss";
import gitHubIcon from "../../assets/gitHubIconWhite.png";

const Footer = (props) => {
  return (
    <div className="Footer">
      <div className="made-by">
        <a
          href="https://www.theodinproject.com/"
          target="_blank"
          rel="noreferrer"
        >
          <p>The Odin Project</p>
        </a>
        <a href="https://github.com/dwgrossberg">
          <img id="github-icon" alt="github-icon" src={gitHubIcon} />
        </a>
        <p>Made by Dan Grossberg</p>
      </div>
    </div>
  );
};

export default Footer;
