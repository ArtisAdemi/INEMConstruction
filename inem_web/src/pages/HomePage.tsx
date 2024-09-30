import React from "react";
import HomeSlider from "../components/HomeSlider";
import WhatWeDo from "../components/WhatWeDo";
import HomeAbout from "../components/HomeAbout";

const HomePage: React.FC = () => {
  return (
    <div className="w-full h-2screen overflow-hidden">
      <HomeSlider />
      <HomeAbout />
      <WhatWeDo />
    </div>
  );
};

export default HomePage;
