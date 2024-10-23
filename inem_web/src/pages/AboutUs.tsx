import React from "react";
import project5 from "../assets/project5.jpg";
import Construction from "../assets/Construction.jpeg";

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
        <h1 className="text-4xl font-bold text-center">Notre mission!</h1>
      </div>
      <div className="mt-8 px-[8%] xl:px-[16%] xl:flex justify-between gap-x-6 mb-10">
        <div className="item mb-6 flex flex-col h-full">
          <div className="h-64 overflow-hidden">
            <img src={Construction} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col flex-grow mt-6">
            <h1 className="text-lg font-bold mb-3 hover:text-[#FF9723] cursor-pointer duration-300">Préserver et Transmettre un Héritage de Maçonnerie</h1>
            <p className="text-[#555] flex-grow">Notre mission est de préserver la tradition artisanale
              de la maçonnerie tout en intégrant des techniques
              modernes. Nous nous engageons à transmettre notre
              savoir-faire de génération en génération, en
              maintenant un équilibre entre l'authenticité de notre
              métier et l'innovation. Cet héritage est la base de notre
              succès et nous permet de garantir des réalisations
              durables et de qualité.</p>
          </div>
        </div>
        <div className="item mb-6 flex flex-col h-full">
          <div className="h-64 overflow-hidden">
            <img src={Construction} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col flex-grow mt-6">
            <h1 className="text-lg font-bold mb-3 hover:text-[#FF9723] cursor-pointer duration-300">Offrir une Qualité Inégalée dans Chaque Projet</h1>
            <p className="text-[#555] flex-grow">Nous nous engageons à réaliser chaque projet
              avec un engagement total envers la qualité.
              Notre équipe traite chaque chantier comme une
              œuvre d'art, en s'assurant que chaque étape, de
              la première brique au dernier détail, est
              exécutée avec précision et soin. Nous visons à
              dépasser les attentes de nos clients en livrant
              des résultats qui allient esthétique et
              performance.</p>
          </div>
        </div>
        <div className="item mb-6 flex flex-col h-full">
          <div className="h-64 overflow-hidden">
            <img src={Construction} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col flex-grow mt-6">
            <h1 className="text-lg font-bold mb-3 hover:text-[#FF9723] cursor-pointer duration-300">Allier Tradition et Innovation pour Créer de la Valeur</h1>
            <p className="text-[#555] flex-grow">Nous croyons en l'importance de l'innovation dans notre
              métier. En combinant des techniques de maçonnerie
              traditionnelles avec des méthodes et matériaux innovants, nous
              créons des solutions modernes et durables. Notre mission est
              de rester à la pointe de notre domaine tout en conservant
              l'authenticité et la fiabilité qui font notre réputation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
