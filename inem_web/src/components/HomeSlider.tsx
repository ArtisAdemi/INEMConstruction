import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import twoworkers from "../assets/twoworkers.jpg";
import Construction from "../assets/Construction.jpeg";
import Construction2 from "../assets/Construction2.jpeg";
import Construction3 from "../assets/Construction3.jpeg";
import arrow from "../assets/decorations/ArrowLeft.svg";
import { useNavigate } from "react-router-dom";

const HomeSlider: React.FC = () => {

  const navigate = useNavigate();

  const redirect = (path: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

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
      text: "Une qualité irréprochable pour votre plus grande satisfaction",
    },
    {
      image: Construction,
      text: "Réactivité pour planifier vos projets dans les délais",
    },
    {
      image: Construction2,
      text: "Une transparence avec un excellent rapport qualité prix",
    },
    {
      image: Construction3,
      text: "Licences, certifications et assurances pour votre confort",
    },
  ];

  return (
    <div className="slider-wrapper bg-center bg-cover relative">
      <Slider ref={sliderRef} {...settings}>
        {sliders.map((slider, index) => (
          <div key={index} className="relative h-screen">
            <img src={slider.image} alt="" className="w-full h-screen object-cover brightness-[0.3]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
              <div className="text-center">
                <h3 className="text-4xl text-white font-semibold mb-2 leading-tight">{slider.text}</h3>
                {/* <p className="text-white mb-4">{slider.text}</p> */}
              </div>
              <div className="flex align-bottom items-end">
                <button onClick={() => redirect("/about")} className="text-lg py-3 px-8 mt-5 text-white border-2 border-white hover:border-[#439C91] hover:duration-500 duration-500 hover:text-[#439C91] z-30 relative">En savoir plus</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="absolute inset-0 hidden xl:flex justify-between items-center z-40 pointer-events-none">
        <button className="button p-3 rounded-lg hover:scale-105 duration-300 bg-transparent text-white font-semibold pointer-events-auto" onClick={previous}>
          <img src={arrow} alt="" className="" />
        </button>
        <button className="button !p-3 rounded-lg hover:scale-105 duration-300 bg-transparent text-white font-semibold pointer-events-auto" onClick={next}>
          <img src={arrow} alt="" className="rotate-180" />
        </button>
      </div>
    </div>
  );
};

export default HomeSlider;
