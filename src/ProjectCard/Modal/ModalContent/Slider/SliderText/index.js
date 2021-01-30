import React from "react";
import "./SliderText.css";

const SliderText = (props) => {
  const { texts, xAxis } = props;

  return (
    <div className="c-SliderText">
      {texts.map((description, index) => {
        return (
          <div
            key={index}
            className="c-SliderText__slide"
            style={{ transform: `translateX(${xAxis}%)` }}
          >
            <p className="c-SliderText__paragraph">{description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SliderText;
