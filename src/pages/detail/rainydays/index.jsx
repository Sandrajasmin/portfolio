import React, { Component } from 'react'
import Slider from 'react-slick'
import Hero from '../../../assets/rainydays/hero.png'
import ListJackets from '../../../assets/rainydays/listofjackets.png'
import Hero2 from '../../../assets/rainydays/hero2.png'
import About from '../../../assets/rainydays/about.png'
import Payment from '../../../assets/rainydays/payment.png'
import StyleTile from '../../../assets/rainydays/styletile.png'

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
                                Rainy Days
                            </h1>
                            <p className="">
                                Introducing RainyDays, a frontend e-commerce
                                project developed during my studies at Noroff
                                School of Technology. RainyDays is an online
                                platform that offers a range of stylish jackets
                                for various weather conditions. Please note that
                                the website is currently not hosted, so the
                                products may not be visible. However, you can
                                still explore the design and user interface of .
                                <a
                                    href="https://rainydays-sj.netlify.app."
                                    target="_blank"
                                    className=" underline"
                                >
                                    RainyDays!
                                </a>
                                Thank you for your understanding.
                            </p>
                        </div>
                        <img src={StyleTile} />
                        <div className="flex gap-5">
                            <a
                                href="https://github.com/Sandrajasmin/first-year-cross-course-assignment-brief-one"
                                target="_blank"
                                className="bg-grey drop-shadow-md text-black w-full p-2 flex justify-center"
                            >
                                <i class="fa-brands fa-github fa-2x"></i>
                            </a>
                            <a
                                href="https://www.figma.com/file/94nJeJKYNzNO9Mefb6OEee/2021-10-04_Design1_ma2_Sandra-MollerSorensen_fp?type=design&node-id=0%3A1&t=AZbp0qQvrxZJiaDR-1"
                                target="_blank"
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
                                src={ListJackets}
                                alt=""
                            />
                        </div>
                        <div className="h-[400px] w-[400px]">
                            <img
                                className="h-full w-full object-cover"
                                src={Hero2}
                                alt=""
                            />
                        </div>
                        <div className="h-[400px] w-[400px]">
                            <img
                                className="h-full w-full object-cover"
                                src={Payment}
                                alt=""
                            />
                        </div>
                        <div className="h-[400px] w-[400px]">
                            <img
                                className="h-full w-full object-cover"
                                src={About}
                                alt=""
                            />
                        </div>
                    </Slider>
                </div>
            </div>
        )
    }
}
