import React from "react";
import { projects } from "../assets/projects";
import { useNavigate } from "react-router-dom";
import project5 from "../assets/project5.jpg";

const Projects: React.FC = () => {
  const navigate = useNavigate();

  const redirect = (path: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  return (
    <div className="container">
      <div className="h-[300px] relative w-screen">
        <img src={project5} alt="Contact" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Semi-transparent overlay */}
        <div className="absolute top-1/2 inset-x-0 text-center text-white transform -translate-y-1/2">
          <h1 className="text-2xl font-bold">Nos réalisations</h1>
        </div>
      </div>
      <div className="text-center p-6 lg:px-[16%] bg-[#F9F9F9] w-screen flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mb-8 pt-10">Our Featured Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {projects.map((project) => (
            <div key={project.id} className="">
              <div className="overflow-hidden relative group cursor-pointer">
                <img className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-125 z-0" src={project.images[0]} alt={project.title} />
                <div>
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center pl-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="flex flex-col absolute bottom-1 left-3">
                      <h2 className="text-white text-start text-xl font-semibold pb-3">{project.title}</h2>
                      <p className="text-white text-sm text-start overflow-hidden text-ellipsis line-clamp-2">{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-start">
                <button className="bg-[#4a9a90] hover:bg-[#92d8d0] text-white text-start py-1 px-2 rounded mt-2 relative z-20" onClick={() => redirect(`/projects/${project.slug}`)}>
                  VIEW PROJECT
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
