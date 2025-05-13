import React, { Component } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";

class Experience extends Component {
  frontendSkills = [
    { name: "AngularJS", level: "Studied", url: "https://angular.dev//" },
    { name: "Bootstrap", level: "Beginner", url: "https://getbootstrap.com/" },
    { name: "C", level: "Studied", url: "https://en.wikipedia.org/wiki/C_(programming_language)" },
    { name: "C++", level: "Studied", url: "https://isocpp.org/" },
    { name: "C#", level: "Experienced", url: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
    { name: "CSS", level: "Experienced", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "HTML", level: "Experienced", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "Java", level: "Experienced", url: "https://www.java.com/en/" },
    { name: "JavaScript", level: "Experienced", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "React", level: "Beginner", url: "https://reactjs.org/" },
    { name: "Unity", level: "Studying", url: "https://unity.com/" },
  ];

  backendSkills = [
    { name: "NodeJs", level: "Experienced", url: "https://nodejs.org/" },
    { name: "MongoDB", level: "Studied", url: "https://www.mongodb.com/" },
    { name: "MySQL", level: "Studied", url: "https://www.mysql.com/" },
  ];

  renderSkills(skills) {

    const firstColumn = skills.slice(0, 6);
    const secondColumn = skills.slice(6);

    return (
      <div className="experience__columns">
        <div className="experience__column">
          {firstColumn.map((skill, index) => (
            <article className="experience__details" key={index}>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <a href={skill.url} target="_blank" rel="noopener noreferrer">
                  <h4>{skill.name}</h4>
                </a>
                <small className="text-light">{skill.level}</small>
              </div>
            </article>
          ))}
        </div>

        <div className="experience__column">
          {secondColumn.map((skill, index) => (
            <article className="experience__details" key={index + 5}>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <a href={skill.url} target="_blank" rel="noopener noreferrer">
                  <h4>{skill.name}</h4>
                </a>
                <small className="text-light">{skill.level}</small>
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  }

  render() {
    return (
      <section id="experience">
        <h2>My Professional Journey</h2>
        <p className="experience__intro">
          Over the years, I've honed my skills in various technologies. Here's a glimpse of my expertise:
        </p>
        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            {this.renderSkills(this.frontendSkills)}
          </div>

          <div className="experience__backend">
            <h3>Backend Development</h3>
            {this.renderSkills(this.backendSkills)}
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
