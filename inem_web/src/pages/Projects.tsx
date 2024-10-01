import React from 'react';
import { projects } from '../assets/projects';
import { useNavigate } from 'react-router-dom';
import project5 from '../assets/project5.jpg';

const Projects: React.FC = () => {
    const navigate = useNavigate();

    const redirect = (path: string) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate(path);
    }

    return (
        <div className="container">
            <div className='h-[300px] relative w-screen'>
                <img src={project5} alt="Contact" className='w-full h-full object-cover' />
                <div className='absolute inset-0 bg-black opacity-50'></div> {/* Semi-transparent overlay */}
                <div className='absolute top-1/2 inset-x-0 text-center text-white transform -translate-y-1/2'>
                    <h1 className='text-2xl font-bold'>Projects</h1>
                </div>
            </div>
            <div className="text-center p-6 lg:px-[16%] bg-[#F9F9F9] w-screen flex flex-col items-center">
                <h1 className="text-4xl font-bold text-center mb-8 pt-10">Our Featured Projects</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                    {projects.map(project => (
                        <div key={project.id} className="overflow-hidden relative group cursor-pointer">
                            <img className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-125" src={project.images[0]} alt={project.title} />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center pl-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="flex flex-col">
                                    <h2 className="text-white text-xl font-semibold pb-3">{project.title}</h2>
                                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-2 rounded" onClick={() => redirect(`/projects/${project.slug}`)}>VIEW PROJECT</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;