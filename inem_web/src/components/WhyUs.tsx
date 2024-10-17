import React from 'react';
import image from "../assets/jason-briscoe-sfze-8LfCXI-unsplash.jpg"


const services = [
    { title: 'Expertise inégalée', description: 'Nos maçons sont des artisans chevronnés qui maîtrisent l\'art de la maçonnerie. Leur expérience et leur savoir-faire garantissent des résultats exceptionnels.' },
    { title: 'Transparence totale', description: 'Nous établissons des contrats détaillés pour chaque projet, clarifiant les coûts, les délais et les matériaux utilisés. La transparence est au cœur de notre approche.' },
    { title: 'Réputation solide', description: 'Notre réputation parle d\'elle-même. Nous sommes fiers de nos réalisations et de la satisfaction de nos clients, ce qui se reflète dans nos avis positifs.' },
    { title: 'Innovation et Qualité', description: 'Nous combinons les techniques de maçonnerie traditionnelles avec les dernières avancées technologiques pour offrir des solutions durables et esthétiques.' },
    { title: 'Approche Personnalisée', description: 'Nous croyons en l\'écoute de nos clients. Chaque projet est conçu sur mesure pour répondre aux besoins et aux aspirations uniques de nos clients.' },
    { title: 'Engagement envers la Sécurité', description: 'La sécurité de nos équipes et de nos clients est notre priorité absolue. Nous respectons les normes les plus strictes en matière de sécurité sur chaque chantier.' },
    { title: 'Proximité et Service Client', description: 'Nous entretenons des relations personnelles avec nos clients et nous sommes toujours à leur disposition pour répondre à leurs questions et résoudre leurs préoccupations.' },
];

const WhyUs: React.FC = () => {
    return (
        // <div className="bg-[#162934] text-white py-16">
        //     <h2 className="text-center text-4xl font-bold mb-12">Pourquoi nous choisir ?</h2>
        //     <h2 className="text-center text-3xl font-semibold mb-12 px-[8%] xl:px-[16%]">Lorsque vous choisissez Inem Construction, vous faites le choix de l'excellence. Voici quelques
        //         raisons pour lesquelles nos clients nous font confiance</h2>
        //     <div className="xl:px-[16%] px-[8%]">
        //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        //             {services.map((service, index) => (
        //                 <div
        //                     key={index}
        //                     className={`p-6 rounded-lg shadow-lg h-[250px] flex flex-col items-start`}
        //                 >

        //                     <h3 className="text-xl font-bold mb-2">{service.title}</h3>
        //                     {service.description && <p>{service.description}</p>}
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </div>
        <div className="relative h-[1300px] xl:h-screen">
            <img src={image} alt="" className="w-full h-screen xl:h-[70%] object-cover brightness-[0.3]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center xl:justify-normal xl:mt-[6%] z-20">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 px-[8%] xl:px-[16%]">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-start justify-center`}
                        >

                            <h3 className="text-xl text-white font-bold mb-2">{service.title}</h3>
                            {service.description && <p className='text-white'>{service.description}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default WhyUs;
