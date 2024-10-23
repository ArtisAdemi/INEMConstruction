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
        <div className=" items-center justify-center ">
            <div className='h-[300px] relative'>
                <img src={project5} alt="Contact" className='w-full h-full object-cover' />
                <div className='absolute inset-0 bg-black opacity-50'></div> {/* Semi-transparent overlay */}
                <div className='absolute top-1/2 inset-x-0 text-center text-white transform -translate-y-1/2'>
                    <h1 className='text-2xl font-bold'>Nos prestations</h1>
                </div>
            </div>
            <div className="flex flex-col items-center mx-auto  px-[8%] xl:px-[16%] py-12">
                <div className='flex flex-col lg:flex-row'>
                    <div className="lg:w-2/3">
                        <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
                        <p className="text-gray-700 mb-8">
                            {typeof service.description === 'string' ? service.description : ''}
                        </p>
                        {Array.isArray(service.description?.info) && service.description.info.map((item, index) => (
                            <div key={index} className="mb-4">
                                <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
                                <ul className="list-disc pl-5">
                                    {item.detailedInfo.map((detail, detailIndex) => (
                                        <li key={detailIndex}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="lg:w-1/3 flex justify-center lg:justify-end mt-8 lg:mt-0">
                        <img src={service.image} alt="Service" className="w-full lg:h-[700px] object-cover" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default SingleService;