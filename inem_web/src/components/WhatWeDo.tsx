import React from 'react';

const services = [
  { title: 'Construction de murs', description: 'Murs porteurs, murs extérieurs et intérieurs en brique, parpaing ou pierre.', icon: '🏗️' },
  { title: 'Rénovation et réparation', description: 'Réfection de murs, rejointoiement, consolidation de structures existantes.', icon: '🔧' },
  { title: 'Terrasses et dallages', description: 'Création de terrasses en béton, pose de dalles et pavés pour espaces extérieurs.', icon: '🛠️' },
  { title: 'Fondations', description: 'Mise en œuvre de fondations solides pour vos projets de construction.', icon: '🚗' },
  { title: 'Aménagements extérieurs', description: 'Murets, clôtures en maçonnerie, création de piscines.', icon: '📐' },
  { title: 'Ravalement de façades', description: 'Nettoyage, rénovation et embellissement de façades pour redonner du charme à votre maison.', icon: '🔌' },
];

const WhatWeDo: React.FC = () => {
  return (
    <div className="bg-[#162934] text-white py-16">
      <h2 className="text-center text-4xl font-bold mb-12">Nos prestations</h2>
      <div className="xl:px-[16%] px-[8%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg h-[250px] ${index % 2 === 0 ? 'bg-white text-black' : 'bg-[#439C91]'
                } flex flex-col items-start`}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
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
