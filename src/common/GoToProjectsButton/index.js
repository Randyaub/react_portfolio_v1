import React from "react";

const GoToProjectsButton = (props) => {
  return (
    <div onClick={props.goToProjects} id="goToProjects">
      {" "}
      PROJECTS{" "}
    </div>
  );
};

export default GoToProjectsButton;
