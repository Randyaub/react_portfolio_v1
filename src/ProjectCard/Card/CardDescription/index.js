import React from "react";

import "./CardDescription.css";

const CardDescription = (props) => {
  return (
    <>
      <h1 className="c-CardDescription__title">{props.title}</h1>
      <div className="c-CardDescription__paragraph">{props.paragraph}</div>
    </>
  );
};

export default CardDescription;
