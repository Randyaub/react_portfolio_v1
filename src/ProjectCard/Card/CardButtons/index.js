import React from "react";
import "./CardButtons.css";

import LinkButton from "../../../common/LinkButton";

const CardButtons = (props) => {
  return (
    <>
      <div className="c-CardButtons__btn">
        <LinkButton buttonText={"GitHub"} url={props.github} />
      </div>
      {props.url === "#" ? (
        ""
      ) : (
        <div className="c-CardButtons__btn">
          <LinkButton buttonText={"Live Version"} url={props.url} />
        </div>
      )}
    </>
  );
};

export default CardButtons;
