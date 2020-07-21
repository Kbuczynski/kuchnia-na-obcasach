import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "../../node_modules/react-awesome-slider/dist/autoplay";
import AwesomeSliderStyles from "../../node_modules/react-awesome-slider/src/styles";
import img1 from "../assets/slider/slider-1.jpg";
import img2 from "../assets/slider/slider-2.jpg";
import img3 from "../assets/slider/slider-3.jpg";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false}
      interval={5000}
      cssModule={AwesomeSliderStyles}
      className="slider"
    >
      <div data-src={img1} className="slider__item" alt="Ciasto z porzeczkami">Smacznie</div>
      <div data-src={img3} className="slider__item" alt="deser malinowy">Zdrowo</div>
      <div data-src={img2} className="slider__item" alt="Babka z porzeczkami">Sezonowo</div>
    </AutoplaySlider>
  );
};

export default Slider;
