import React, { useEffect, useState } from 'react'
import images from '../constants/images';


const Slider = () => {
    const [index, setIndex] = useState(0);
    useEffect(() => {

        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <img src={images[index].src} alt={images[index].alt} className='w-full h-100 rounded-2xl ' />
            
        </>
    )
}

export default Slider