import React from "react";

import "./CardTech.css";

const CardTech = (props) => {
  return (
    <ul className="c-CardTech">
      {props.techUsed.map((tech, index) => (
        <li className="c-CardTech__item" key={index}>
          {tech}
        </li>
      ))}
    </ul>
  );
};

export default CardTech;
