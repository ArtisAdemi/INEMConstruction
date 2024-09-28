import React from 'react'
import heroImage from '../assets/404.png'

const HomePage = () => {
    return (
        <div className="w-full h-2screen">
            <img src={heroImage} alt="hero image" className="w-full h-full object-cover" />
        </div>
    )
}

export default HomePage