import React, { Component } from 'react'
import Slider from 'react-slick'
import Hero from '../../../assets/holidaze/hero.png'
import Detail from '../../../assets/holidaze/detail.png'
import Hosting from '../../../assets/holidaze/hosting.png'
import Bookings from '../../../assets/holidaze/bookings.png'
import Venues from '../../../assets/holidaze/venues.png'
import StyleTile from '../../../assets/holidaze/Styletile.png'

export default class Responsive extends Component {
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        return (
            <div className="mx-auto max-w-6xl px-5 my-10">
                <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
                    <div className="flex flex-col gap-5">
                        <div className="bg-grey p-10 drop-shadow-md">
                            <h1 className="font-serif text-6xl text-center">
                                Holidaze
                            </h1>
                            <p className="">
                                Introducing Holidaze, a modern frontend
                                accommodation booking application that was
                                developed as an impressive school project during
                                my time at Noroff School of Technology. This
                                project aimed to create an Airbnb-like platform
                                where users can seamlessly browse and book
                                various accommodation options for their stay.
                                Additionally, venue managers have the ability to
                                register, allowing them to effortlessly create
                                and manage their own rental properties. Explore
                                the future of booking with Holidaze, where
                                convenience meets innovation.
                                https://holidaze-navy.vercel.app/.
                            </p>
                        </div>
                        <img src={StyleTile} />
                        <div className="flex gap-5">
                            <a
                                href="https://github.com/Sandrajasmin/Project-Exam"
                                className="bg-grey drop-shadow-md text-black w-full p-2 flex justify-center"
                            >
                                <i class="fa-brands fa-github fa-2x"></i>
                            </a>
                            <a
                                href="https://www.figma.com/file/gXz1efa75ju9bPOU0Rncr1/Project-Exam?type=design&node-id=1%3A23&t=njcl2xqBKr19gn3f-1"
                                className="bg-grey drop-shadow-md text-black w-full p-2 flex justify-center"
                            >
                                <i class="fa-brands fa-figma fa-2x"></i>
                            </a>
                        </div>
                    </div>
                    <Slider {...settings} className="lg:w-1/2">
                        <div className="h-[400px] w-[400px]">
                            <img
                                className="h-full w-full object-cover"
                                src={Hero}
                                alt=""
                            />
                        </div>
                        <div className="h-[400px] w-[400px]">
                            <img
                                className="h-full w-full object-cover"
                                src={Detail}
                                alt=""
                            />
                        </div>
                        <div className="h-[400px] w-[400px]">
                            <img
                                className="h-full w-full object-cover"
                                src={Hosting}
                                alt=""
                            />
                        </div>
                        <div className="h-[400px] w-[400px]">
                            <img
                                className="h-full w-full object-cover"
                                src={Bookings}
                                alt=""
                            />
                        </div>
                        <div className="h-[400px] w-[400px]">
                            <img
                                className="h-full w-full object-cover"
                                src={Venues}
                                alt=""
                            />
                        </div>
                    </Slider>
                </div>
            </div>
        )
    }
}
