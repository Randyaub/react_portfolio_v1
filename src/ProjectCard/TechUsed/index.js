import React from "react";

import "./TechUsed.css";

const TechUsed = (props) => {
  return (
    <ul className="tech-list">
      {props.techUsed.map((tech, index) => (
        <li className="tech-list-item" key={index}>
          {tech}
        </li>
      ))}
    </ul>
  );
};

export default TechUsed;
