import React from "react";
import "./HeroSection.scss";

function HeroSection() {
  return (
    <div className="hero-wrapper">
      <div className="overlay">
        <div className="hero-content">
          <h1>THUISZORG IN GENK EN OMSTREKEN</h1>
          <h3>Voor optimale zorgverlening</h3>

          <div className="btns">
            <button className="contact-btn">
              <span>Neem Contact Op</span>{" "}
            </button>
            <div style={{ marginTop: "19px" }}>
              <img
                src={require("../../../../static/facebook.png")}
                alt="facebook-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
