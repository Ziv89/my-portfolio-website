import React from "react";
import "./about.css";
import myImage from "../images/myself.jpg";
import CTA from "../components/header/CTA";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="background-overlay"></div>
      <h2>About Me</h2>
      <p>
        I'm Ziv Shamir, a passionate and dedicated React Developer. With a strong foundation in Full-Stack Development, I have experience building smartphone apps and comprehensive management systems. Currently, I am working as a freelancer, developing impactful solutions while actively seeking new opportunities.
      </p>
      <div className="container about__container">
        <div className="about__me">
          <img src={myImage} alt="Ziv Shamir" className="about__me-image" />
        </div>
        <div className="about__content">
          <h2>Skills & Interests</h2>
          <p>
            I specialize in modern web development practices, leveraging my skills to build efficient and dynamic user interfaces.
          </p>
          <ul>
            <li>React.js Development</li>
            <li>Full-Stack Development</li>
            <li>Problem Solving</li>
            <li>Team Collaboration</li>
            <li>Responsive Web Design</li>
          </ul>
        </div>
      </div>
      <div className="triangle-cta">
        <CTA />
      </div>
    </section>
  );
};

export default About;
