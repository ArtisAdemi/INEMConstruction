import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { projects } from '../assets/projects';

const SingleProject: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const project = projects.find(p => p.slug === slug);
    const images = project?.images;
    const [currentIndex, setCurrentIndex] = useState(0);
    const selectedImage = images ? images[currentIndex] : '';
    const navigate = useNavigate();

    if (!project) {
        return <div>Project not found</div>;
    }

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 && images ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (images ? (prevIndex === images.length - 1 ? 0 : prevIndex + 1) : prevIndex));
    };

    const redirect = (path: string) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate(path);
    }

    return (
        <div className="">
            <div className='h-[300px] relative'>
                <img src={images ? images[0] : ''} alt="Contact" className='w-full h-full object-cover' />
                <div className='absolute inset-0 bg-black opacity-50'></div> {/* Semi-transparent overlay */}
                <div className='absolute top-1/2 inset-x-0 text-center text-white transform -translate-y-1/2'>
                    <h1 className='text-2xl font-bold'>Projets</h1>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-12 px-[8%] xl:px-[16%]">
                <div className="relative">
                    <div className="carousel">
                        <div className="carousel-inner relative overflow-hidden w-full">
                            <img src={selectedImage} alt="" className='w-full h-[375px] object-cover' />
                            <button onClick={handlePrev} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2">‹</button>
                            <button onClick={handleNext} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2">›</button>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                    <div className="mb-4">
                        <strong>Client:</strong> {project.client}
                    </div>
                    <div className="mb-4">
                        <strong>Ville:</strong> {project.location}
                    </div>
                    <div className="mb-4">
                        <strong>Taille:</strong> {project.size}
                    </div>
                    <div className="mb-4">
                        <strong>Catégories:</strong> {project.services.join(', ')}
                    </div>
                    <button className="bg-[#439C91] hover:opacity-80 w-full lg:w-fit text-white py-2 px-4 rounded" onClick={() => redirect('/contact')}>Contacte</button>
                </div>
            </div>
        </div>
    );
}

export default SingleProject;