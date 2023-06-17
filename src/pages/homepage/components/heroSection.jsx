import React from 'react'
import HeroDesktop from '../../../assets/desktop.png'

export default function HeroSection() {
    return (
        <>
            <div
                id="hero-section"
                className="flex justify-center px-3 py-10 lg:py-28 max-w-6xl mx-auto"
            >
                <img
                    src={HeroDesktop}
                    alt="Sandra Jasmin in text with profile in background"
                />
            </div>
        </>
    )
}
