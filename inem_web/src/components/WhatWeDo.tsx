import React from "react";
import brickwall from "../assets/brickwall.png"
import facade from "../assets/architecture.png"
import exterier from "../assets/design.png"
import tarace from "../assets/house.png"
import renovation from "../assets/customer-support.png"
import facade2 from "../assets/facade2.png"

const services = [
  { title: 'Construction de murs', description: 'Murs porteurs, murs extérieurs et intérieurs en brique, parpaing ou pierre.', icon: brickwall, slug: 'construction-de-murs' },
  { title: 'Rénovation et réparation', description: 'Réfection de murs, rejointoiement, consolidation de structures existantes.', icon: renovation, slug: 'rénovation-et-réparation' },
  { title: 'Terrasses et dallages', description: 'Création de terrasses en béton, pose de dalles et pavés pour espaces extérieurs.', icon: tarace, slug: 'terrasses-et-dallages' },
  { title: 'Fondations', description: 'Mise en œuvre de fondations solides pour vos projets de construction.', icon: facade, slug: 'fondations' },
  { title: 'Aménagements extérieurs', description: 'Murets, clôtures en maçonnerie, création de piscines.', icon: exterier, slug: 'aménagements-extérieurs' },
  { title: 'Ravalement de façades', description: 'Nettoyage, rénovation et embellissement de façades pour redonner du charme à votre maison.', icon: facade2, slug: 'ravalement-de-façades' },
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
              <div className="mt-auto">
                <a href={`/services/${service.slug}`} className="font-semibold flex items-center justify-start gap-2 group">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" width={20} height={20} className="">
                    <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                  </svg>
                  <span className="">EN SAVOIR PLUS</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
