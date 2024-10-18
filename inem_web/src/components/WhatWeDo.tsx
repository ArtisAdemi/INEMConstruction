import React from "react";
import brickwall from "../assets/brickwall.png"
import facade from "../assets/architecture.png"
import exterier from "../assets/design.png"
import tarace from "../assets/house.png"
import renovation from "../assets/customer-support.png"
import facade2 from "../assets/facade2.png"

const services = [
  { title: 'Construction de murs', description: 'Murs porteurs, murs extérieurs et intérieurs en brique, parpaing ou pierre.', icon: brickwall },
  { title: 'Rénovation et réparation', description: 'Réfection de murs, rejointoiement, consolidation de structures existantes.', icon: renovation },
  { title: 'Terrasses et dallages', description: 'Création de terrasses en béton, pose de dalles et pavés pour espaces extérieurs.', icon: tarace },
  { title: 'Fondations', description: 'Mise en œuvre de fondations solides pour vos projets de construction.', icon: facade },
  { title: 'Aménagements extérieurs', description: 'Murets, clôtures en maçonnerie, création de piscines.', icon: exterier },
  { title: 'Ravalement de façades', description: 'Nettoyage, rénovation et embellissement de façades pour redonner du charme à votre maison.', icon: facade2 },
];

const WhatWeDo: React.FC = () => {
  return (
    <div className="bg-[#EFF2F4] text-white py-16">
      <h2 className="text-center text-black text-4xl font-bold mb-12">Nos prestations</h2>
      <div className="xl:px-[16%] px-[8%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg h-[250px] ${index % 2 === 0 ? "bg-white text-black" : "bg-[#439C91]"
                } flex flex-col items-start`}
            >
              <img src={service.icon} alt="" className="w-[36px] mb-3" />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              {service.description && <p>{service.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
