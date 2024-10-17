import React from "react";
import project5 from "../assets/project5.jpg";
import Construction from "../assets/Construction.jpeg";
import WhatWeDo1 from "../assets/decorations/WhatWeDo1.png";
import WhatWeDo2 from "../assets/decorations/WhatWeDo2.png";
import WhatWeDo3 from "../assets/decorations/WhatWeDo3.png";
// import HomeAbout from "../components/HomeAbout";

const AboutUs: React.FC = () => {
  return (
    <div>
      <div className="h-[300px] relative">
        <img src={project5} alt="Contact" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Semi-transparent overlay */}
        <div className="absolute top-1/2 inset-x-0 text-center text-white transform -translate-y-1/2">
          <h1 className="text-2xl font-bold">Notre histoire</h1>
        </div>
      </div>
      {/* <HomeAbout /> */}
      <div className="mt-12 px-[8%] xl:px-[16%] justify-between flex flex-col gap-y-6 mb-10">
        <div className="hidden xl:block">
          <img src={Construction} alt="" className="w-full" />
        </div>
        <p className="text-xl text-gray-600">Notre histoire commence avec une passion pour la maçonnerie transmise de génération en génération.
          Ce qui a commencé comme un héritage familial est devenu une entreprise florissante, qui s'est forgée une réputation d'excellence et de fiabilité. Nous avons su allier tradition et innovation pour devenir un leader dans notre domaine.</p>
        <p className="text-xl text-gray-600">Notre Engagement envers la Qualité</p>
        <p className="text-xl text-gray-600">La maçonnerie est notre métier, mais c'est aussi notre passion. Notre engagement envers la qualité est inébranlable.
          Chaque projet que nous entreprenons est une œuvre d'art en soi, où chaque brique est posée avec précision et chaque détail est soigneusement travaillé.
          Notre objectif est de dépasser les attentes de nos clients à chaque étape du processus.</p>
      </div>
      <div className="mt-24 px-[8%] xl:px-[16%] justify-between gap-x-6">
        <h1 className="text-4xl font-bold text-center">Our Mission!</h1>
      </div>
      <div className="mt-8 px-[8%] xl:px-[16%] xl:flex justify-between gap-x-6 mb-10">
        <div className="item mb-6">
          <img src={Construction} alt="" />
          <div className="flex mt-6">
            <img src={WhatWeDo1} alt="" className="w-12 h-12 mr-4" />
            <div>
              <h1 className="text-lg font-bold mb-3 hover:text-[#FF9723] cursor-pointer duration-300">ZERO HARM EVERYDAY</h1>
              <p className="text-[#555]">You have ideas, goals, and dreams. We have a culturally diverse, forward thinking team looking for talent like. Lorem ipsum dolor suscipit.</p>
            </div>
          </div>
        </div>
        <div className="item mb-6">
          <img src={Construction} alt="" />
          <div className="flex mt-6">
            <img src={WhatWeDo2} alt="" className="w-12 h-12 mr-4" />
            <div>
              <h1 className="text-lg font-bold mb-3 hover:text-[#FF9723] cursor-pointer duration-300">Virtual Construction</h1>
              <p className="text-[#555]">You have ideas, goals, and dreams. We have a culturally diverse, forward thinking team looking for talent like. Lorem ipsum dolor suscipit.</p>
            </div>
          </div>
        </div>
        <div className="item mb-6">
          <img src={Construction} alt="" />
          <div className="flex mt-6">
            <img src={WhatWeDo3} alt="" className="w-12 h-12 mr-4" />
            <div>
              <h1 className="text-lg font-bold mb-3 hover:text-[#FF9723] cursor-pointer duration-300">Build To Last</h1>
              <p className="text-[#555]">You have ideas, goals, and dreams. We have a culturally diverse, forward thinking team looking for talent like. Lorem ipsum dolor suscipit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
