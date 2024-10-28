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
    { title: 'Engagement envers l’Environnement', description: 'Conscients de notre impact, nous nous engageons à utiliser des matériaux écologiques et des techniques de construction respectueuses de l\'environnement. Nous favorisons les solutions durables pour contribuer à un avenir plus vert.' },
];

const WhyUs: React.FC = () => {
    return (

        <div className="relative h-[2150px] sm:h-[1600px] md:h-[1400px] xl:h-[900px]">
            <img src={image} alt="" className="w-full h-full object-cover brightness-[0.3]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                <div className='flex flex-col justify-center xl:text-center pb-10 xl:pb-8 px-[8%] xl:px-[16%]'>
                    <h1 className='text-white font-bold text-3xl sm:text-center xl:text-4xl mb-3'>Pourquoi nous choisir ?</h1>
                    <p className='text-white md:text-center'>Lorsque vous choisissez Inem Construction, vous faites le choix de l'excellence. Voici quelques
                        raisons pour lesquelles nos clients nous font confiance</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 gap-8 px-[8%] xl:px-[16%]">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-start border border-white p-4  rounded-lg justify-center`}
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
