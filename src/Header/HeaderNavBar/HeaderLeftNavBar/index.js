import React from "react";
import "./HeaderLeftNavBar.css";

import GoToProjectsButton from "../../../common/GoToProjectsButton";

const HeaderLeftNavBar = (props) => {
  return (
    <ul className="c-HeaderLeftNavBar">
      <li>
        <GoToProjectsButton goToProjects={props.goToProjects} />
      </li>
    </ul>
  );
};

export default HeaderLeftNavBar;
