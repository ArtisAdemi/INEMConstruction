import React from "react";

const HappyClients: React.FC = () => {
  return (
    <div className="px-[8%] py-12 text-black xl:px-[16%] md:flex justify-between items-center">
      <div className="flex flex-col justify-between items-center mb-12 md:mb-0">
        <h1 className="font-bold text-5xl mb-3">250+</h1>
        <h1>Projets</h1>
      </div>
      <div className="flex flex-col justify-between items-center mb-12 md:mb-0">
        <h1 className="font-bold text-5xl mb-3">10+</h1>
        <h1>Années d'Expérience</h1>
      </div>
      <div className="flex flex-col justify-between items-center">
        <h1 className="font-bold text-5xl mb-3">25+</h1>
        <h1>Villes</h1>
      </div>
    </div>
  );
};

export default HappyClients;
