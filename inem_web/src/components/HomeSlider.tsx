import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Construction from "../assets/Construction.jpeg";
import Construction2 from "../assets/Construction2.jpeg";
import Construction3 from "../assets/Construction3.jpeg";

const HomeSlider: React.FC = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliders = [
    {
      image: Construction,
      text: "First Construction Text",
    },
    {
      image: Construction2,
      text: "Second Construction Text",
    },
    {
      image: Construction3,
      text: "Third Construction Text",
    },
  ];

  return (
    <div className="slider-wrapper bg-center bg-cover">
      <Slider {...settings}>
        {sliders.map((slider, index) => (
          <div key={index} className="relative h-screen">
            <img src={slider.image} alt="" className="w-full h-screen object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-50">
              <div className="text-center">
                <h3 className="text-xl text-white font-semibold mb-2 leading-tight">{slider.text}</h3>
                <p className="text-white mb-4">{slider.text}</p>
              </div>
              <div className="flex align-bottom items-end">
                <button className="text-lg py-3 px-8 mt-5 text-white border-2 border-white hover:bg-white hover:duration-500 duration-500 hover:text-[#ff7404]">Learn More</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlider;
