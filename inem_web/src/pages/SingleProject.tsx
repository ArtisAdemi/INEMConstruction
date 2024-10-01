import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../assets/projects';

const SingleProject: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const project = projects.find(p => p.slug === slug);
    const images = project?.images;

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="container mx-auto py-12 px-4 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative">
                    <div className="carousel">
                        <div className="carousel-inner relative overflow-hidden w-full">
                            <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden defaultChecked />
                            <div className="carousel-item absolute opacity-0" style={{ height: '50vh' }}>
                                <img src={images ? images[0] : ''} className="block h-full w-full object-cover" alt="Project" />
                            </div>
                            <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden />
                            <div className="carousel-item absolute opacity-0" style={{ height: '50vh' }}>
                                <img src={images ? images[1] : ''} className="block h-full w-full object-cover" alt="Project" />
                            </div>
                            <label htmlFor="carousel-2" className="carousel-control prev control-1">‹</label>
                            <label htmlFor="carousel-1" className="carousel-control next control-2">›</label>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    <div className="mb-4">
                        <strong>Client:</strong> Pransbay Powers Authority
                    </div>
                    <div className="mb-4">
                        <strong>Architect:</strong> Diarke Pelli Incorp
                    </div>
                    <div className="mb-4">
                        <strong>Location:</strong> McLean, VA
                    </div>
                    <div className="mb-4">
                        <strong>Size:</strong> 65,000 SF
                    </div>
                    <div className="mb-4">
                        <strong>Year Completed:</strong> 2015
                    </div>
                    <div className="mb-4">
                        <strong>Categories:</strong> Commercial, Interiors
                    </div>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded">VIEW PROJECT</button>
                </div>
            </div>
        </div>
    );
}

export default SingleProject;