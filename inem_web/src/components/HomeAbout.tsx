import React from "react";
import Construction from "../assets/Construction.jpeg";

const HomeAbout: React.FC = () => {
  return (
    <div className="my-16 xl:my-48 px-[8%] xl:px-[16%] xl:flex justify-between gap-x-6 ">
      <div className="xl:w-[40%] justify-between flex flex-col">
        <h1 className="text-4xl font-bold mb-3 xl:mb-0">ABOUT US</h1>
        <p className="text-gray-600 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non similique, est ad minus quos hic ab, laboriosam eligendi facere quas rem cupiditate voluptatem accusantium exercitationem excepturi quisquam autem. Illo, culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ratione laudantium porro aliquam, natus, at beatae eum neque accusamus quasi commodi nobis dolorem inventore necessitatibus aut, cumque dolorum consequatur asperiores.</p>
      </div>
      <div className="xl:w-[60%] mt-8 xl:mt-0">
        <img src={Construction} alt="" />
      </div>
    </div>
  );
};

export default HomeAbout;
