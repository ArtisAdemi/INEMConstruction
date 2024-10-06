import React from 'react'
import project5 from '../assets/project5.jpg';
import { services } from '../assets/services';

const Services: React.FC = () => {
    return (
        <div>
            <div className='h-[300px] relative w-screen'>
                <img src={project5} alt="Contact" className='w-full h-full object-cover' />
                <div className='absolute inset-0 bg-black opacity-50'></div> {/* Semi-transparent overlay */}
                <div className='absolute top-1/2 inset-x-0 text-center text-white transform -translate-y-1/2'>
                    <h1 className='text-2xl font-bold'>Services</h1>
                </div>
            </div>
            <div className="text-center p-6 lg:px-[16%] bg-[#F9F9F9] w-screen flex flex-col items-center">
                <h1 className="text-4xl font-bold text-center mb-8 pt-10">Our Services</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
                    {services.map(service => (
                        <div key={service.id} className="overflow-hidden relative">
                            <img className="w-full h-48 object-cover" src={service.image} alt={service.title} />
                            <div className="p-4 flex">
                                <div className="text-[#439C91] text-4xl mb-4 w-1/3"><img src={service.icon} className='w-2/3' alt="" /></div>
                                <div className='w-2/3'>
                                    <h2 className="text-xl font-bold mb-2">{service.title}</h2>
                                    <p className="text-gray-700 mb-4">{service.description}</p>
                                    <a href={`/services/${service.slug}`} className="hover:text-[#439C91] font-semibold flex items-center justify-start gap-2 group">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" width={20} height={20} className="group-hover:fill-yellow-500">
                                            <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                                        </svg>
                                        <span className='group-hover:text-[#439C91]'>LEARN MORE</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Services