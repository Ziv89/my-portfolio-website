import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  navigateToPortfolio,
  navigateToAbout,
  navigateToContact,
  navigateToExperience,
} from "../components/nav/nav";
import "./main.css";

const Main = () => {
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setShowNav((prevState) => !prevState);
  };

  return (
    <header>
      <div className="mainDiv">
        <h5>Hello World!</h5>
        <h1>I Am</h1>
        <div className="text-light">React Developer</div>
        <button className="pressButton" onClick={handleButtonClick}>
          Press Here for Information
        </button>
        {showNav && (
          <div className="nav-container">
            <h2>Select Details</h2>
            <ul className="nav-list">
              <li onClick={() => navigateToAbout(navigate)}>About Me</li>
              <li onClick={() => navigateToExperience(navigate)}>My Experience</li>
              <li className="close-select" onClick={handleButtonClick}>Close</li>
              </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Main;
