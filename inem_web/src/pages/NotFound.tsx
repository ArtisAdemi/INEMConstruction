import React from "react";
import { useNavigate } from "react-router-dom";

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const redirect = (path: string) => {
    navigate(path);
  };

  return (
    <div className="px-[8%] xl:px-[16%] mt-28 xl:mt-48 py-10 text-center">
      <h1 className="text-4xl lg:text-5xl font-bold text-[#061C3D]">OOPS! PAGE NOT FOUND</h1>
      <p className="text-lg text-gray-600 mt-4">Something went wrong. It looks like your requested link could not be found. It looks like the link is broken or the page is removed.</p>
      <button className="mt-6 bg-[#FF9723] text-white px-6 py-3 rounded-lg hover:opacity-80 hover:scale-105 transition duration-300" onClick={() => redirect("/")}>
        Back Home
      </button>
    </div>
  );
};
