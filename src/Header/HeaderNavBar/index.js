import React from "react";
import "./HeaderNavBar.css";

import HeaderLeftNavBar from "./HeaderLeftNavBar";
import HeaderRightNavBar from "./HeaderRightNavBar";

const HeaderNavBar = (props) => {
  return (
    <nav className="c-HeaderNavBar">
      <HeaderLeftNavBar goToProjects={props.goToProjects} />
      <HeaderRightNavBar goToContacts={props.goToContacts} />
    </nav>
  );
};

export default HeaderNavBar;
