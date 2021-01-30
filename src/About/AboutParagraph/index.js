import React from "react";
import "./AboutParagraph.css";

const AboutParagraph = () => {
  return (
    <div className="c-AboutParagraph">
      <div>
        <p className="c-AboutParagraph__paragraph">
          I am a{" "}
          <span className="c-AboutParagraph-highlight">
            Full-Stack Software Developer
          </span>{" "}
          from Regina, Saskatchewan. I graduated from university with a{" "}
          <span className="c-AboutParagraph-highlight">
            B.S. in Software Systems Development.
          </span>{" "}
          During my education I have developed a passion for all aspects of web
          development. I am excited to work with like minded people.
        </p>
      </div>
    </div>
  );
};

export default AboutParagraph;
