import React, { useEffect, useState } from "react";
import Image from "next/image";
import first from '../images/1.jpg'
import second from '../images/2.jpg'
import third from '../images/3.jpg'

const images = [first, second, third];

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