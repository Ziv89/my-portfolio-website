import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a
          href="https://github.com/Ziv89"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          <FaGithub className="icon" />
          <span className="social-text">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/ziv-shamir-143b5aa2/"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          <FaLinkedin className="icon" />
          <span className="social-text">LinkedIn</span>
        </a>
        <a
          href="https://www.facebook.com/zivs1/"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          <FaFacebook className="icon" />
          <span className="social-text">Facebook</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
