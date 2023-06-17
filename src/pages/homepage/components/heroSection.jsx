import React, { useEffect, useRef } from 'react'
import SandraText from '../../../assets/sandra.png'
import JasminText from '../../../assets/jasmin.png'

export default function HeroSection() {
    const imageRefs = useRef([])

    useEffect(() => {
        const images = imageRefs.current
        images.forEach((image) => {
            if (image) {
                image.style.opacity = 1 // Set opacity to 1 after component mounts
            }
        })
    }, [])

    return (
        <div
            id="hero-section"
            className="flex justify-center px-3 py-10 lg:py-28 max-w-6xl mx-auto lg:h-screen"
        >
            <div className="w-full h-full flex flex-col gap-10">
                <img
                    ref={(el) => (imageRefs.current[0] = el)}
                    className="inset-0 opacity-0 transition-opacity duration-600 ease-in-out animate-image"
                    src={SandraText}
                    alt="Sandra Jasmin in text with profile in background"
                />
                <img
                    ref={(el) => (imageRefs.current[1] = el)}
                    className="inset-0 opacity-0 transition-opacity duration-1000 ease-in-out animate-image"
                    src={JasminText}
                    alt="Sandra Jasmin in text with profile in background"
                />
            </div>
        </div>
    )
}
