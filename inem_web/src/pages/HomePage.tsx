import React from "react";
import HomeSlider from "../components/HomeSlider";
import WhatWeDo from "../components/WhatWeDo";

const HomePage: React.FC = () => {
  return (
    <div className="w-full h-2screen overflow-hidden">
      <HomeSlider />
      <WhatWeDo />
    </div>
  );
};

export default HomePage;
