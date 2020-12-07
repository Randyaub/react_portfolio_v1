import React from "react";

import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <h3 className="about-title">About Me</h3>
          <div className="left-column">
            <div>
              <img className="picture" src="Face.jpg" alt="my_face"></img>
            </div>
          </div>
          <div className="right-column">
            <div>
              <p>
                I am a{" "}
                <span className="highlight">Full-Stack Software Developer</span>{" "}
                from Regina, Saskatchewan. I graduated school with a{" "}
                <span className="highlight">
                  B.S. in Software Systems Development
                </span>
                . During my studies I developed a passion for all aspects of
                creating websites. I am excited to work with like minded people.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
