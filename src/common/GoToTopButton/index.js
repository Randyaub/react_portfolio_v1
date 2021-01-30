import React from "react";
import "./GoToTopButton.css";

const GoToTopButton = (props) => {
  return (
    <i
      onClick={props.goToTop}
      className="fas fa-angle-double-up c-GoToTopButton"
    ></i>
  );
};

export default GoToTopButton;
