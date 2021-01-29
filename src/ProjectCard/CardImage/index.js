import React from "react";

import "./CardImage.css";

const CardImage = (props) => {
  return (
    <div
      className="card-image"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <button onClick={props.imageClicked} className="card-btn">
        LEARN MORE
      </button>
      <i class="fas fa-expand card-expand-icon"></i>
      <div className="image-overlay"></div>
    </div>
  );
};

export default CardImage;
