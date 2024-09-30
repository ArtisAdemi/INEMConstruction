import React from "react";
import Construction from "../assets/Construction.jpeg";
import WhatWeDo1 from "../assets/decorations/WhatWeDo1.png";
import WhatWeDo2 from "../assets/decorations/WhatWeDo2.png";
import WhatWeDo3 from "../assets/decorations/WhatWeDo3.png";

const HomeAbout: React.FC = () => {
  return (
    <div className="mt-12 px-[8%] xl:px-[16%] xl:flex justify-between gap-x-6 mb-10">
      <div className="item mb-6">
        <img src={Construction} alt="" />
        <div className="flex mt-6">
          <img src={WhatWeDo1} alt="" className="w-12 h-12 mr-4" />
          <div>
            <h1 className="text-lg font-bold mb-3 hover:text-[#FF9723] cursor-pointer duration-300">ZERO HARM EVERYDAY</h1>
            <p className="text-[#555]">You have ideas, goals, and dreams. We have a culturally diverse, forward thinking team looking for talent like. Lorem ipsum dolor suscipit.</p>
            <button className="text-[#555] mt-3 font-semibold hover:text-[#FF9723] duration-300 hover:underline">Learn More</button>
          </div>
        </div>
      </div>
      <div className="item mb-6">
        <img src={Construction} alt="" />
        <div className="flex mt-6">
          <img src={WhatWeDo2} alt="" className="w-12 h-12 mr-4" />
          <div>
            <h1 className="text-lg font-bold mb-3 hover:text-[#FF9723] cursor-pointer duration-300">Virtual Construction</h1>
            <p className="text-[#555]">You have ideas, goals, and dreams. We have a culturally diverse, forward thinking team looking for talent like. Lorem ipsum dolor suscipit.</p>
            <button className="text-[#555] mt-3 font-semibold hover:text-[#FF9723] duration-300 hover:underline">Learn More</button>
          </div>
        </div>
      </div>
      <div className="item mb-6">
        <img src={Construction} alt="" />
        <div className="flex mt-6">
          <img src={WhatWeDo3} alt="" className="w-12 h-12 mr-4" />
          <div>
            <h1 className="text-lg font-bold mb-3 hover:text-[#FF9723] cursor-pointer duration-300">Build To Last</h1>
            <p className="text-[#555]">You have ideas, goals, and dreams. We have a culturally diverse, forward thinking team looking for talent like. Lorem ipsum dolor suscipit.</p>
            <button className="text-[#555] mt-3 font-semibold hover:text-[#FF9723] duration-300 hover:underline">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
