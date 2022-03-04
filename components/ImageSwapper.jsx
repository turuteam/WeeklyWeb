import React, { useEffect, useState } from "react";
import Image from "next/image";
import second from '../images/2.jpg'
import third from '../images/3.jpg'

const images = [second, third];

export default function ImageSwapper() {
    const [currentImage, setCurrentImage] = useState(second);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(images[Math.floor(Math.random() * images.length)]);
        }, 4000)
        
        return () => clearInterval(intervalId);
    }, [])

    return (
        <div>
            <Image src={currentImage} x/>
        </div>
    )
}