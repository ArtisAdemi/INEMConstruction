import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import twoworkers from "../assets/twoworkers.jpg";
import Construction from "../assets/Construction.jpeg";
import Construction2 from "../assets/Construction2.jpeg";
import Construction3 from "../assets/Construction3.jpeg";
import arrow from "../assets/decorations/ArrowLeft.svg";

const HomeSlider: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const sliders = [
    {
      image: twoworkers,
      text: "First Construction Text",
    },
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
    <div className="slider-wrapper bg-center bg-cover relative">
      <Slider ref={sliderRef} {...settings}>
        {sliders.map((slider, index) => (
          <div key={index} className="relative h-screen">
            <img src={slider.image} alt="" className="w-full h-screen object-cover brightness-50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
              <div className="text-center">
                <h3 className="text-7xl text-white font-semibold mb-2 leading-tight">{slider.text}</h3>
                <p className="text-white mb-4">{slider.text}</p>
              </div>
              <div className="flex align-bottom items-end">
                <button className="text-lg py-3 px-8 mt-5 text-white border-2 border-white hover:bg-white hover:duration-500 duration-500 hover:text-[#ff7404] z-30 relative">Learn More</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="absolute inset-0 flex justify-between items-center z-40 pointer-events-none">
        <button className="button p-3 rounded-lg hover:scale-105 duration-300 bg-transparent text-white font-semibold pointer-events-auto" onClick={previous}>
          <img src={arrow} alt="" className="filter invert sepia saturate-100 hue-rotate-60 brightness-100 contrast-100" />
        </button>
        <button className="button !p-3 rounded-lg hover:scale-105 duration-300 bg-transparent text-white font-semibold pointer-events-auto" onClick={next}>
          <img src={arrow} alt="" className="rotate-180 filter invert sepia saturate-100 hue-rotate-60 brightness-100 contrast-100" />
        </button>
      </div>
    </div>
  );
};

export default HomeSlider;
