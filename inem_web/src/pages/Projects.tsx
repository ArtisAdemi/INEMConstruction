import React from "react";
import { projects } from "../assets/projects";
import { useNavigate } from "react-router-dom";
import project5 from "../assets/uphome.jpg";

const Projects: React.FC = () => {
  const navigate = useNavigate();

  const redirect = (path: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  return (
    <div className="">
      <div className="h-[300px] relative">
        <img
          src={project5}
          alt="Contact"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute top-1/2 inset-x-0 text-center text-white transform -translate-y-1/2">
          <h1 className="text-2xl font-bold">Nos réalisations</h1>
        </div>
      </div>
      <div className="text-center p-6 px-[8%] xl:px-[16%] bg-[#F9F9F9] flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mb-8 pt-10">
          Nos Projets d'Exception
        </h1>
        <p className="mb-12">Notre portfolio regorge d'exemples de projets de maçonnerie réussis. Nous vous invitons à explorer notre galerie de photos pour découvrir la diversité de notre travail et notre engagement envers la perfection.</p>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {projects.map((project) => (
            <div key={project.id} className="">
              <div className="overflow-hidden relative group cursor-pointer">
                <img
                  className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-125 z-0"
                  src={project.images[0]}
                  alt={project.title}
                  loading="lazy"
                />
                <div>
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center pl-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="flex flex-col absolute bottom-1 left-3">
                      <h2 className="text-white text-start text-xl font-semibold pb-3">
                        {project.title}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-start">
                <button
                  className="bg-[#4a9a90] hover:bg-[#92d8d0] text-white text-start py-1 px-2 rounded mt-2 relative z-20"
                  onClick={() => redirect(`/projects/${project.slug}`)}
                >
                  EN SAVOIR PLUS
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
