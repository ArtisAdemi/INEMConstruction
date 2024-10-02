import React from "react";
import { projects } from "../assets/projects";
import { useNavigate } from "react-router-dom";

const RecentProjects: React.FC = () => {
  const navigate = useNavigate();

  const redirect = (path: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  return (
    <div className="text-center p-5 lg:px-[16%] bg-[#F9F9F9] flex flex-col items-center">
      <p className="text-sm text-gray-500">WORK OF EXCELLENCE</p>
      <h1 className="text-4xl mb-5">RECENT PROJECTS</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 mb-5 lg:w-[80%]">
        {projects.slice(0, 6).map((project, index) => (
          <div key={index} className="overflow-hidden relative group cursor-pointer">
            <img className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110" src={project.images[0]} alt={`Project ${index + 1}`} />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center pl-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex flex-col">
                <h2 className="text-white text-xl font-semibold pb-3">{project.title}</h2>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-2 rounded" onClick={() => redirect(`/projects/${project.slug}`)}>
                  VIEW PROJECT
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="bg-[#FF9723] hover:opacity-80 text-white py-2 px-4 rounded" onClick={() => redirect("/projects")}>
        VIEW ALL PROJECTS
      </button>
    </div>
  );
};

export default RecentProjects;
