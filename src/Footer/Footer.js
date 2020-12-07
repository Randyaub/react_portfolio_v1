import React from "react";

import "./Footer.css";

const Footer = (props) => {
  return (
    <footer id="bottom">
      <i onClick={props.goToTop} className="fas fa-angle-double-up go-top"></i>
      <div>
        <h5>Randy Aubichon © 2020</h5>
      </div>
    </footer>
  );
};

export default Footer;
