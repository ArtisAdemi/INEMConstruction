import React from 'react';
import { projects } from '../assets/projects';

const RecentProjects: React.FC = () => {

    return (
        <div className="text-center p-5 lg:px-[16%] bg-[#F9F9F9]">
            <p className="text-sm text-gray-500">WORK OF EXCELLENCE</p>
            <h1 className="text-4xl mb-5">RECENT PROJECTS</h1>
            <div className="flex justify-center mb-5 space-x-2">
                <div className="border-[3px] border-yellow-500 border-l-0 border-t-0 border-r-0 space-x-2">
                    <button className="hover:bg-yellow-500 hover:text-white py-2 px-4 rounded">SHOW ALL</button>
                    <button className="hover:bg-yellow-500  hover:text-white py-2 px-4 rounded">COMMERCIAL</button>
                    <button className="hover:bg-yellow-500  hover:text-white py-2 px-4 rounded">EDUCATION</button>
                    <button className="hover:bg-yellow-500  hover:text-white py-2 px-4 rounded">GOVERNMENT</button>
                    <button className="hover:bg-yellow-500  hover:text-white py-2 px-4 rounded">INFRASTRUCTURE</button>
                    <button className="hover:bg-yellow-500  hover:text-white py-2 px-4 rounded">RESIDENTIAL</button>
                    <button className="hover:bg-yellow-500  hover:text-white py-2 px-4 rounded">HEALTHCARE</button>
                </div>
            </div>
            <div className="grid grid-cols-3 mb-5">
                {projects.slice(0, 6).map((project, index) => (
                    <div key={index} className="overflow-hidden relative group cursor-pointer">
                        <img className="w-full transform transition-transform duration-300 group-hover:scale-110" src={project.image} alt={`Project ${index + 1}`} />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h2 className="text-white text-2xl font-bold">{project.title}</h2>
                            <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded">VIEW PROJECT</button>
                        </div>
                    </div>
                ))}
            </div>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded">VIEW ALL PROJECTS</button>
        </div>
    );
};

export default RecentProjects;