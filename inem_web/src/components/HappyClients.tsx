import React from "react";

const HappyClients: React.FC = () => {
  return (
    <div className="px-[8%] py-12 text-white xl:px-[16%] bg-[#162934] md:flex justify-between items-center">
      <div className="flex flex-col justify-between items-center mb-12 md:mb-0">
        <h1 className="font-bold text-5xl mb-3">250+</h1>
        <h1>Projects</h1>
      </div>
      <div className="flex flex-col justify-between items-center mb-12 md:mb-0">
        <h1 className="font-bold text-5xl mb-3">10+</h1>
        <h1>Years of Experience</h1>
      </div>
      <div className="flex flex-col justify-between items-center">
        <h1 className="font-bold text-5xl mb-3">25+</h1>
        <h1>Cities</h1>
      </div>
    </div>
  );
};

export default HappyClients;