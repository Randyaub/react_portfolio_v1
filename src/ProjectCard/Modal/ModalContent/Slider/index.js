import React, { useState } from "react";
import "./Slider.css";

import SliderImages from "./SliderImages";
import SliderText from "./SliderText";

const Slider = (props) => {
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (props.modalImage.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (props.modalImage.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className="c-Slider">
      <SliderImages
        images={props.modalImage}
        xAxis={x}
        goLeft={goLeft}
        goRight={goRight}
      />
      <SliderText texts={props.imageDescription} xAxis={x} />
    </div>
  );
};

export default Slider;
