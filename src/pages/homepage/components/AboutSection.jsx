import React from 'react'
import ProfilePicture from '../../../assets/profilePicture.png'

export default function AboutSection() {
    return (
        <>
            <div className="bg-grey" id="about-section">
                <div className="max-w-6xl mx-auto py-16 px-5 flex flex-col gap-5 items-center lg:flex-row">
                    <div className="flex flex-col items-center gap-5">
                        <p className="text-3xl">About me</p>
                        <span>
                            <hr className="w-40 text-black border border-black"></hr>
                        </span>
                        <p className="text-base text-center">
                            I'm a 29-year-old former store manager turned
                            aspiring developer. I have a passion for design and
                            believe that functionality and aesthetics should go
                            hand in hand. When I'm not coding, you can find me
                            learning new things. traveling, or fueling my
                            caffeine addiction.
                        </p>
                    </div>
                    <img
                        className=""
                        src={ProfilePicture}
                        alt="Sandra Jasmin in text with profile in background"
                    />
                </div>
            </div>
        </>
    )
}
