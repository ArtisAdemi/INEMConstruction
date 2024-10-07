import React from "react";
import HomeSlider from "../components/HomeSlider";
import WhatWeDo from "../components/WhatWeDo";
import HomeAbout from "../components/HomeAbout";
import RecentProjects from "../components/RecentProjects";
import HappyClients from "../components/HappyClients";

const HomePage: React.FC = () => {
  return (
    <div className="w-full h-2screen overflow-hidden">
      <HomeSlider />
      <HomeAbout />
      <WhatWeDo />
      <HappyClients />
      <RecentProjects />
    </div>
  );
};

export default HomePage;
