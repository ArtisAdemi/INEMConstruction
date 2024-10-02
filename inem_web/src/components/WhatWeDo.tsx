import React from "react";
import WhatWeDoImage from "../assets/WhatWeDo.jpg";
import WhatWeDo1 from "../assets/decorations/WhatWeDo1.png";
import WhatWeDo2 from "../assets/decorations/WhatWeDo2.png";
import WhatWeDo3 from "../assets/decorations/WhatWeDo3.png";
import WhatWeDo4 from "../assets/decorations/WhatWeDo4.png";
import WhatWeDo5 from "../assets/decorations/WhatWeDo5.png";
import WhatWeDo6 from "../assets/decorations/WhatWeDo6.png";

const WhatWeDo: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-center text-gray-500 text-lg">WE ARE SPECIALISTS IN</h2>
      <h1 className="text-center text-4xl font-bold mb-12">WHAT WE DO</h1>
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full xl:w-1/3 p-4 flex flex-col justify-center items-center">
          <div className="flex items-center w-full xl:w-1/3 p-4">
            <img src={WhatWeDo1} alt="Home Construction" className="w-12 h-12 mr-4" />
            <div>
              <h3 className="text-xl font-bold xl:w-[200px]">HOME CONSTRUCTION</h3>
              <p className="text-gray-600 xl:w-[200px]">Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
            </div>
          </div>
          <div className="flex items-center w-full xl:w-1/3 p-4">
            <div className="flex items-center">
              <img src={WhatWeDo2} alt="Building Remodels" className="w-12 h-12 mr-4" />
              <div>
                <h3 className="text-xl font-bold xl:w-[200px]">BUILDING REMODELS</h3>
                <p className="text-gray-600 xl:w-[200px]">Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
              </div>
            </div>
          </div>
          <div className="flex items-center w-full xl:w-1/3 p-4">
            <div className="flex items-center">
              <img src={WhatWeDo3} alt="Interior Design" className="w-12 h-12 mr-4" />
              <div>
                <h3 className="text-xl font-bold xl:w-[200px]">INTERIOR DESIGN</h3>
                <p className="text-gray-600 xl:w-[200px]">Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full hidden xl:flex xl:w-1/3 xl:px-4 xl:pt-4 justify-center items-center">
          <img src={WhatWeDoImage} alt="Worker" className="w-[80%] h-auto" />
        </div>
        <div className="w-full xl:w-1/3 p-4 flex flex-col justify-center items-center">
          <div className="w-full p-4">
            <div className="flex items-center w-full xl:p-4">
              <img src={WhatWeDo4} alt="Exterior Design" className="w-12 h-12 mr-4" />
              <div>
                <h3 className="text-xl font-bold xl:w-[200px]">EXTERIOR DESIGN</h3>
                <p className="text-gray-600 xl:w-[200px]">Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
              </div>
            </div>
          </div>
          <div className="w-full p-4">
            <div className="flex items-center w-full xl:w-1/3 xl:p-4">
              <img src={WhatWeDo5} alt="Renovation" className="w-12 h-12 mr-4" />
              <div>
                <h3 className="text-xl font-bold xl:w-[200px]">RENOVATION</h3>
                <p className="text-gray-600 xl:w-[200px]">Lorem ipsum dolor sit amet cadip it amet cadipit amet cadipiscing erat</p>
              </div>
            </div>
          </div>
          <div className="w-full p-4">
            <div className="flex items-center w-full xl:w-1/3 xl:p-4">
              <img src={WhatWeDo6} alt="Safety Management" className="w-12 h-12 mr-4" />
              <div>
                <h3 className="text-xl font-bold xl:w-[200px]">SAFETY MANAGEMENT</h3>
                <p className="text-gray-600 xl:w-[200px]">Lorem ipsum dolor sit amet con adipiscing erat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
