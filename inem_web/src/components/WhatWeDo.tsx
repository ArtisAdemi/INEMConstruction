import React from "react";

const services = [
  { title: "Construction", description: "lorem ipsum", icon: "🏗️" },
  { title: "Renovation", description: "", icon: "🔧" },
  { title: "Consultation", description: "", icon: "🛠️" },
  { title: "Repair Services", description: "", icon: "🚗" },
  { title: "Architecture", description: "", icon: "📐" },
  { title: "Electric", description: "", icon: "🔌" },
];

const WhatWeDo: React.FC = () => {
  return (
    <div className=" text-white bg-[#EFF2F4] py-16">
      <h2 className="text-center text-black text-4xl font-bold mb-12">
        What We Do
      </h2>
      <div className="xl:px-[16%] px-[8%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg h-[250px] ${
                index % 2 === 0 ? "bg-white text-black" : "bg-[#439C91]"
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
