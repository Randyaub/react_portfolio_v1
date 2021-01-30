import React from "react";

import "./CardImage.css";

const CardImage = (props) => {
  return (
    <div
      className="c-CardImage"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <button onClick={props.imageClicked} className="c-CardImage-btn">
        LEARN MORE
      </button>
      <i className="fas fa-expand c-CardImage__icon"></i>
      <div className="c-CardImage__overlay"></div>
    </div>
  );
};

export default CardImage;
