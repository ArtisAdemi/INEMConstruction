import React from "react";
import zeazini3 from "../assets/uphome2.jpg";
import { services } from "../assets/services";

const Services: React.FC = () => {
  return (
    <div>
      <div className="h-[300px] relative">
        <img src={zeazini3} alt="Contact" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Semi-transparent overlay */}
        <div className="absolute top-1/2 inset-x-0 text-center text-white transform -translate-y-1/2">
          <h1 className="text-2xl font-bold">Nos prestations</h1>
        </div>
      </div>
      <div className=" p-6 px-[8%] xl:px-[16%] bg-[#F9F9F9] flex flex-col items-center">
        <h1 className="text-4xl font-bold  mb-8 pt-10">Nos prestations</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          {services.map((service) => (
            <div key={service.id} className="overflow-hidden relative flex flex-col h-full">
              <img className="w-full h-48 object-cover" src={service.image} alt={service.title} />
              <div className="mt-3 flex flex-col flex-grow">
                <div className="w-full">
                  <h2 className="text-xl font-bold mb-2">{service.title}</h2>
                  <p className="text-gray-700 mb-4">{service.shortDescription}</p>
                </div>
                <div className="mt-auto">
                  <a href={`/services/${service.slug}`} className="hover:text-[#439C91] font-semibold flex items-center justify-start gap-2 group">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" width={20} height={20} className="group-hover:fill-[#439C91]">
                      <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                    </svg>
                    <span className="group-hover:text-[#439C91]">EN SAVOIR PLUS</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
