import React from "react";

import "./About.css";
import AboutImage from "./AboutImage";
import AboutParagraph from "./AboutParagraph";

const About = () => {
  return (
    <section className="c-About">
      <div className="container">
        <div className="c-About__container flex">
          <h3 className="c-About__title">About Me</h3>
          <AboutImage />
          <AboutParagraph />
        </div>
      </div>
    </section>
  );
};

export default About;
