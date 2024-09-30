import React from "react";
import HomeSlider from "../components/HomeSlider";
import WhatWeDo from "../components/WhatWeDo";
import RecentProjects from "../components/RecentProjects";
const HomePage: React.FC = () => {
    return (
        <div className="w-full h-2screen overflow-hidden">
            <HomeSlider />
            <WhatWeDo />
            <RecentProjects />
        </div>
    );
};

export default HomePage;
