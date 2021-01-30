import React from "react";

import "./Header.css";

import HeaderName from "./HeaderName";
import HeaderNavBar from "./HeaderNavBar";

const Header = (props) => {
  return (
    <header id="top">
      <div className="container">
        <HeaderNavBar
          goToProjects={props.goToProjects}
          goToContacts={props.goToContacts}
        />
        <HeaderName />
      </div>
    </header>
  );
};

export default Header;
