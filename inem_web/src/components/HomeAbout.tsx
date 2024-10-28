import React from "react";
import Construction from "../assets/peter-thomas-ExzaIWpdulo-unsplash.jpg";
import { useNavigate } from "react-router-dom";

const HomeAbout: React.FC = () => {
  const navigate = useNavigate();

  const redirect = (path: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  return (
    <div className="my-48 px-[8%] xl:px-[16%] ">
      <div className="xl:flex justify-between gap-x-6 ">
        <div className="xl:w-[40%] flex flex-col">
          <h1 className="text-4xl font-bold">Notre histoire</h1>
          <p className="text-gray-600 text-lg mt-6">
            Chez Inem construction , nous incarnons l'art de la maçonnerie
            depuis de nombreuses années à Bourgoin Jallieu Synonyme de qualité,
            d'expertise et d'engagement envers nos clients. Nous sommes fiers de
            vous présenter une entreprise de maçonnerie qui repousse constamment
            les limites pour offrir des services exceptionnels.
          </p>
          <button
            className="text-lg py-3 px-8 mt-5 md:w-1/2 border-[#439C91] hover:bg-[#439C91] border-[1px] hover:duration-500 duration-500 hover:text-[#FFF] z-30 relative"
            onClick={() => redirect("/about")}
          >
            Notre Histoire
          </button>
        </div>
        <div className="xl:w-[60%] mt-8 xl:mt-0">
          <img src={Construction} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
