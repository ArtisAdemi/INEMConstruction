import Construction from '../assets/Construction.jpeg'
import WhatWeDo from '../components/WhatWeDo'

const HomePage = () => {
    return (
        <div className="w-full h-2screen">
            <img src={Construction} alt="hero image" className="w-full h-full object-cover" />
            <WhatWeDo />
        </div>
    )
}

export default HomePage