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
      text: "Artis Babuqi in da Club",
    },
    {
      image: Construction2,
      text: "Florian Seksi ma i Qarti",
    },
    {
      image: Construction3,
      text: "Labinot Llegenda Kanter strajt",
    },
  ];

  return (
    <div className="slider-wrapper bg-center bg-cover">
      <Slider {...settings}>
        {sliders.map((slider, index) => (
          <div key={index} className="relative h-screen">
            <img src={slider.image} alt="" className="w-full h-screen object-cover" />
            <div className="absolute top-[45%] left-[50%] lg:right-[45%] z-50 flex items-center justify-center">
              <div className="flex-col">
                <h3 className="text-xl text-white font-semibold mb-2 leading-tight">{slider.text}</h3>
                <p className="text-white mb-4">{slider.text}</p>
              </div>
            </div>
            <div className="flex align-bottom h-[2%] items-end">
              <button className="text-blue-600 hover:underline">Learn More</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlider;
