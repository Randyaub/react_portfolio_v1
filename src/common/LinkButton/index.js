import React from "react";

import "./LinkButton.css";

const LinkButton = (props) => {
  return (
    <button className="linkButton">
      <a
        href={props.url}
        className="button-links"
        target="_blank"
        rel="noreferrer"
      >
        {props.buttonText}
      </a>
    </button>
  );
};

export default LinkButton;
