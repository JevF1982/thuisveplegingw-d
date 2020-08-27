import React, { useState, Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ScrollArrow from "../../../Utils/ScrollArrow";

import "./Navbar.scss";

function Navbar() {
  const [hamburgerClass, sethamburgerClass] = useState("");
  const [navlinksClass, setnavlinksClass] = useState("nav-links");

  const handleSetClass = () => {
    if (navlinksClass === "nav-links") {
      setnavlinksClass("nav-links nav-open");
      sethamburgerClass("open");
    } else {
      setnavlinksClass("nav-links");
      sethamburgerClass("");
    }
  };
  return (
    <div>
      <nav>
        <div id="logo-container">
          <img
            src={require("../../../../static/logo2.jpg")}
            alt="logo"
            id="logo"
          />
          <span id="logo-text">ThuisVerpleging Wendy & Daan</span>
        </div>
        <a
          id="hamburger"
          href="#"
          className={hamburgerClass}
          onClick={handleSetClass}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </a>
        <div className={navlinksClass}>
          <ul>
            <li>
              <AnchorLink href="#home">Home</AnchorLink>
            </li>
            <li>
              {" "}
              <AnchorLink href="#aboutus">Over Ons</AnchorLink>
            </li>
            <li>
              {" "}
              <AnchorLink href="#service">Service</AnchorLink>
            </li>
            <li>
              {" "}
              <AnchorLink href="#contact">Contact</AnchorLink>
            </li>
          </ul>
        </div>
      </nav>
      <a id="home"></a>
      <ScrollArrow />
    </div>
  );
}

export default Navbar;
