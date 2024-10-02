import React from 'react';
import project5 from '../assets/project5.jpg';
import { services } from '../assets/services';
import { useParams } from 'react-router-dom';

const SingleService: React.FC = () => {
    const { slug } = useParams();
    const service = services.find(service => service.slug === slug);

    if (!service) {
        return <div>Service not found</div>;
    }

    return (
        <div className="container items-center justify-center w-screen">
            <div className='h-[300px] relative w-screen'>
                <img src={project5} alt="Contact" className='w-full h-full object-cover' />
                <div className='absolute inset-0 bg-black opacity-50'></div> {/* Semi-transparent overlay */}
                <div className='absolute top-1/2 inset-x-0 text-center text-white transform -translate-y-1/2'>
                    <h1 className='text-2xl font-bold'>Services</h1>
                </div>
            </div>
            <div className="flex flex-col items-center mx-auto w-screen px-4 lg:px-[16%] py-12">
                <div className='flex flex-col lg:flex-row'>
                    <div className="lg:w-2/3">
                        <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
                        <p className="text-gray-700 mb-8">
                            {service.description}
                            <br />
                            <br />
                            {service.description}
                        </p>
                    </div>
                    <div className="lg:w-1/3 flex justify-center lg:justify-end mt-8 lg:mt-0">
                        <img src={service.image} alt="Service" className="w-2/3 lg:w-full object-cover" />
                    </div>
                </div>
                <div className='py-12'>
                    <h1 className='text-4xl font-bold mb-4'>What you should know</h1>
                    <p className='text-gray-700 mb-8'>
                        {service.whatYouShouldKnow}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SingleService;