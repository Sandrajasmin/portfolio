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
            slidesToShow: 2,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 2,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
            beforeChange: function (currentSlide, nextSlide) {
                console.log('before change', currentSlide, nextSlide)
            },
            afterChange: function (currentSlide) {
                console.log('after change', currentSlide)
            },
        }
        return (
            <div className="mx-auto max-w-6xl px-5 my-10">
                <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
                    <div className="flex flex-col gap-5 lg:w-1/2">
                        <div className="bg-grey p-5 lg:p-10 drop-shadow-md">
                            <h1 className="font-serif text-6xl text-center py-2">
                                Holidaze
                            </h1>
                            <p className="text-sm">
                                Introducing Holidaze, a school project developed
                                during my time at Noroff School of Technology.
                                This project aimed to create an Airbnb-like
                                platform where users can seamlessly browse and
                                book various accommodation options for their
                                stay. Additionally, venue managers have the
                                ability to register, allowing them to
                                effortlessly create and manage their own rental
                                properties. Explore the future of booking with
                                Holidaze, where convenience meets innovation .
                                <a
                                    href="https://holidaze-navy.vercel.app/."
                                    target="_blank"
                                    className=" underline"
                                >
                                    Feel free to take a look
                                </a>
                            </p>
                        </div>
                        <img src={StyleTile} />
                        <div className="flex gap-5">
                            <a
                                href="https://github.com/Sandrajasmin/Project-Exam"
                                target="_blank"
                                className="bg-grey drop-shadow-md text-black w-full p-2 flex justify-center"
                            >
                                <i class="fa-brands fa-github fa-2x"></i>
                            </a>
                            <a
                                href="https://www.figma.com/file/gXz1efa75ju9bPOU0Rncr1/Project-Exam?type=design&node-id=1%3A23&t=njcl2xqBKr19gn3f-1"
                                target="_blank"
                                className="bg-grey drop-shadow-md text-black w-full p-2 flex justify-center"
                            >
                                <i class="fa-brands fa-figma fa-2x"></i>
                            </a>
                        </div>
                    </div>
                    <Slider {...settings} className="lg:w-1/2">
                        <div className="h-full w-[400px] ">
                            <img
                                className="h-full w-full"
                                src={Hero}
                                alt="Holidaze website"
                            />
                        </div>
                        <div className="h-full w-[400px]">
                            <img
                                className="h-full w-full"
                                src={Detail}
                                alt="Holidaze website"
                            />
                        </div>
                        <div className="h-full w-[400px]">
                            <img
                                className="h-full w-full"
                                src={Hosting}
                                alt="Holidaze website"
                            />
                        </div>
                        <div className="h-full  w-[400px]">
                            <img
                                className="h-full w-full"
                                src={Bookings}
                                alt="Holidaze website"
                            />
                        </div>
                        <div className="h-full  w-[400px]">
                            <img
                                className="h-full w-full"
                                src={Venues}
                                alt="Holidaze website"
                            />
                        </div>
                    </Slider>
                </div>
            </div>
        )
    }
}
