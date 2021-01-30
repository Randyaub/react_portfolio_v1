import React from "react";

import LinkButton from "../../../common/LinkButton";
import "./ModalButtons.css";

const ModalButtons = (props) => {
  return (
    <div className="c-ModalButtons">
      <div className="c-ModalButtons-btn">
        <LinkButton buttonText={"GitHub "} url={props.github} />
      </div>
      {props.url === "#" ? (
        ""
      ) : (
        <div className="c-ModalButtons-btn">
          <LinkButton buttonText={"Live Version "} url={props.url} />
        </div>
      )}
    </div>
  );
};

export default ModalButtons;
