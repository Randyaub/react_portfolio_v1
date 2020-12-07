import React, { useState } from "react";

import "./Slider.css";

const Slider = (props) => {
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (props.modalImage.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    x === -100 * (props.modalImage.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <>
      <div className="slider">
        {props.modalImage.map((item, index) => {
          return (
            <div
              key={index}
              className="slide"
              style={{ transform: `translateX(${x}%)` }}
            >
              <img className="modal-image" alt="modal-slider" src={item}></img>
            </div>
          );
        })}
        <button id="goLeft" onClick={goLeft}>
          <i class="fas fa-chevron-left"></i>
        </button>
        <button id="goRight" onClick={goRight}>
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
      <div className="slider-text">
        {props.imageDescription.map((description, index) => {
          return (
            <div
              key={index}
              className="slide"
              style={{ transform: `translateX(${x}%)` }}
            >
              <p className="modal-paragraph">{description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Slider;
