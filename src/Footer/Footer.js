import React from "react";
import GoToTopButton from "../common/GoToTopButton";

import "./Footer.css";

const Footer = (props) => {
  return (
    <footer className="c-Footer">
      <GoToTopButton goToTop={props.goToTop} />
      <h5>Randy Aubichon © 2020</h5>
    </footer>
  );
};

export default Footer;
