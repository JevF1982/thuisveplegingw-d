import React, { useState } from "react";

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
          class={hamburgerClass}
          onClick={handleSetClass}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </a>
        <div className={navlinksClass}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              {" "}
              <a href="/">Over Ons</a>
            </li>
            <li>
              {" "}
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
