import React from "react";
import "./ModalTitle.css";

const ModelTitle = (props) => {
  return (
    <div>
      <h3 className="c-ModalTitle__title">{props.title}</h3>
      {/*close button*/}
      <div onClick={props.imageClicked} className="c-ModalTitle__x">
        X
      </div>
    </div>
  );
};

export default ModelTitle;
