import React from "react";
import LinkButton from "../common/LinkButton";

import Slider from "../Slider/Slider";

import "./Modal.css";

const Modal = (props) => {
  return (
    <div className={`modal-bg ${props.modal === true ? "bg-active" : ""}`}>
      <div className="modal">
        <div className="modal-information">
          <div className="modal-title">
            <h3>{props.title}</h3>
          </div>
          <Slider
            modalImage={props.modalImage}
            imageDescription={props.imageDescription}
          />
          <span onClick={props.buttonClicked} className="modal-close">
            X
          </span>
        </div>
        <div className="modal-buttons">
          <LinkButton buttonText={"GitHub "} url={props.github} />
          {props.url === "#" ? (
            ""
          ) : (
            <LinkButton buttonText={"Live Version "} url={props.url} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
