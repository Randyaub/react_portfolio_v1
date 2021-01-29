import React from "react";

import "./CardDescription.css";

const CardDescription = (props) => {
  return (
    <>
      <h1 className="card-title">{props.title}</h1>
      <div className="card-paragraph">{props.paragraph}</div>
    </>
  );
};

export default CardDescription;
