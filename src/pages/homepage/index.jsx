import React from 'react'
import HeroDesktop from '../../assets/desktop.png'

export default function TextWithImage() {
    return (
        <>
            <div className="flex justify-center px-3 py-10 lg:py-28">
                <img
                    src={HeroDesktop}
                    alt="Sandra Jasmin in text with profile in background"
                />
            </div>
        </>
    )
}
