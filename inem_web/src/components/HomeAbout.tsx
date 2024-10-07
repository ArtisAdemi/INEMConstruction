import React from "react";
import Construction from "../assets/Construction.jpeg";

const HomeAbout: React.FC = () => {
  return (
    <div className="my-48 px-[8%] xl:px-[16%] ">
      <div className="xl:flex justify-between gap-x-6 ">
        <div className="xl:w-[40%] flex flex-col">
          <h1 className="text-4xl font-bold">Notre histoire</h1>
          <p className="text-gray-600 text-lg mt-6">Chez Inem construction , nous incarnons l'art de la maçonnerie depuis de nombreuses années à Bourgoin Jallieu Synonyme de qualité, d'expertise et d'engagement envers nos clients. Nous sommes fiers de vous présenter une entreprise de maçonnerie qui repousse constamment les limites pour offrir des services exceptionnels.</p>
        </div>
        <div className="xl:w-[60%] mt-8 xl:mt-0">
          <img src={Construction} alt="" />
        </div>
      </div>
      <div className="flex justify-center items-center mt-6">
        <button className="text-lg py-3 px-8 mt-5 border-[#439C91] border-[1px] hover:duration-500 duration-500 hover:text-[#439C91] z-30 relative">notre histoire</button>
      </div>
    </div>
  );
};

export default HomeAbout;
