import React from "react";

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
          <button>
            <a
              href={props.github}
              className="button-links"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </button>
          {props.url === "#" ? (
            ""
          ) : (
            <button>
              <a
                href={props.url}
                className="button-links"
                target="_blank"
                rel="noreferrer"
              >
                Live Version
              </a>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
