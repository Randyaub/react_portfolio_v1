import React from "react";
import "./SliderImages.css";

const SliderImages = (props) => {
  const { images, xAxis, goLeft, goRight } = props;

  return (
    <div className="c-SliderImages">
      {images.map((item, index) => {
        return (
          <div
            key={index}
            className="c-SliderImages__slide"
            style={{ transform: `translateX(${xAxis}%)` }}
          >
            <img
              className="c-SliderImages__image"
              alt="modal-slider"
              src={item}
            ></img>
          </div>
        );
      })}
      <button id="goLeft" onClick={goLeft}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button id="goRight" onClick={goRight}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default SliderImages;
