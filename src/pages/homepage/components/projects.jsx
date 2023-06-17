import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/holidazeLogo.png'
import BiddifyLogo from '../../../assets/biddifyLogo.png'
import MarkethouseLogo from '../../../assets/markethouseLogo.png'
import RainydaysLogo from '../../../assets/rainydaysLogo.png'

export default function ProjectSection() {
    return (
        <div id="project-section">
            <section class="grid gap-x-16 lg:gap-x-5 text-white gap-5 my-10 lg:grid-cols-2 mx-auto max-w-6xl place-items-center">
                <div class="w-[320px] lg:w-full h-[340px] bg-transparent cursor-pointer group perspective">
                    <div class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                        <div class="absolute backface-hidden bg-grey w-full h-full text-black flex flex-col items-center justify-center">
                            <h2 className="font-serif text-6xl">001.</h2>
                            <p className="text-4xl">Holidaze</p>
                        </div>
                        <div class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-grey overflow-hidden">
                            <div class="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-10">
                                <img className="h-14 w-14 my-2" src={Logo} />
                                <p className="text-sm my-2">
                                    Introducing Holidaze, my Airbnb-inspired
                                    project showcasing my frontend development
                                    skills. Discover and book unique venues or
                                    list your own spaces effortlessly.
                                    Experience seamless travel and hosting at
                                </p>
                                <Link
                                    to="/holidaze"
                                    class="bg-white text-base px-6 py-1 font-medium text-black rounded-sm absolute -bottom-5 delay-500 duration-1000 group-hover:bottom-5 scale-0 group-hover:scale-125"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-[320px] lg:w-full h-[340px] bg-transparent cursor-pointer group perspective">
                    <div class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                        <div class="absolute backface-hidden bg-grey w-full h-full text-black flex flex-col items-center justify-center">
                            <h2 className="font-serif text-6xl">002.</h2>
                            <p className="text-4xl">Biddify</p>
                        </div>
                        <div class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-grey overflow-hidden">
                            <div class="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-10">
                                <img
                                    className="w-[80px] h-[20px] lg:h-[40px] lg:w-[160px] my-2"
                                    src={BiddifyLogo}
                                />
                                <p className="text-sm my-2">
                                    Introducing Biddify, an exceptional frontend
                                    development project that was created during
                                    my studies at Noroff School of Technology.
                                    Biddify is an engaging auction website that
                                    allows users to bid on items and experience
                                    the thrill of selling. With a user-friendly
                                    interface, you can effortlessly explore a
                                    wide range of items, place bids, and stay
                                    updated in real-time.
                                </p>
                                <Link
                                    to="/biddify"
                                    class="bg-white text-base px-6 py-1 font-medium text-black rounded-sm absolute -bottom-5 delay-500 duration-1000 group-hover:bottom-5 scale-0 group-hover:scale-125"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-[320px] lg:w-full h-[340px] bg-transparent cursor-pointer group perspective">
                    <div class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                        <div class="absolute backface-hidden bg-grey w-full h-full text-black flex flex-col items-center justify-center">
                            <h2 className="font-serif text-6xl">003.</h2>
                            <p className="text-4xl">MarketHouse</p>
                        </div>
                        <div class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
                            <div class="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-10">
                                <img
                                    className="h-14 w-14 my-2"
                                    src={MarkethouseLogo}
                                />
                                <p className="text-sm my-2">
                                    Introducing MarkedHouse, a frontend project
                                    developed during my studies at Noroff School
                                    of Technology. MarkedHouse offers a
                                    user-friendly platform where you can
                                    conveniently browse and purchase a variety
                                    of tech products. Explore the latest gadgets
                                    and electronics, enjoy a seamless shopping
                                    experience.
                                </p>
                                <Link
                                    to="/markethouse"
                                    class="bg-white text-base px-6 py-1 font-medium text-black rounded-sm absolute -bottom-5 delay-500 duration-1000 group-hover:bottom-5 scale-0 group-hover:scale-125"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-[320px] lg:w-full h-[360px] lg:h-[340px] bg-transparent cursor-pointer group perspective">
                    <div class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                        <div class="absolute backface-hidden bg-grey w-full h-full text-black flex flex-col items-center justify-center">
                            <h2 className="font-serif text-6xl">004.</h2>
                            <p className="text-4xl">Rainy Days</p>
                        </div>
                        <div class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
                            <div class="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-10">
                                <img className=" my-2" src={RainydaysLogo} />
                                <p className="text-sm my-2">
                                    RainyDays, my first frontend project
                                    developed during my studies at Noroff.
                                    RainyDays is an online platform that offers
                                    a range of jackets for various weather
                                    conditions.
                                </p>
                                <Link
                                    to="/rainydays"
                                    class="bg-white text-base px-6 py-1 font-medium text-black rounded-sm absolute -bottom-5 delay-500 duration-1000 group-hover:bottom-5 scale-0 group-hover:scale-125"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
