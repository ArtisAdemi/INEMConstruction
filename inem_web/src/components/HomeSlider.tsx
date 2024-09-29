import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Construction from "../assets/Construction.jpeg";

const HomeSlider: React.FC = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        <div>
          <img src={Construction} alt="hero image" className="w-full h-full object-cover" />
        </div>
        <div>
          <img src={Construction} alt="hero image" className="w-full h-full object-cover" />
        </div>
        <div>
          <img src={Construction} alt="hero image" className="w-full h-full object-cover" />
        </div>
        <div>
          <img src={Construction} alt="hero image" className="w-full h-full object-cover" />
        </div>
        <div>
          <img src={Construction} alt="hero image" className="w-full h-full object-cover" />
        </div>
        <div>
          <img src={Construction} alt="hero image" className="w-full h-full object-cover" />
        </div>
      </Slider>
    </div>
  );
};

export default HomeSlider;
