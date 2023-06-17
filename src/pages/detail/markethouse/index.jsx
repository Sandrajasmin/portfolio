import React, { Component } from 'react'
import Slider from 'react-slick'
import Hero from '../../../assets/markethouse/hero.png'
import HeroDark from '../../../assets/markethouse/herodark.png'
import Detail from '../../../assets/markethouse/detail.png'
import Checkout from '../../../assets/markethouse/checkout.png'
import Search from '../../../assets/markethouse/search.png'

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
                                MarketHouse
                            </h1>
                            <p className="">
                                Introducing MarketHouse, a frontend project
                                developed during my studies at Noroff School of
                                Technology. MarkedHouse offers a user-friendly
                                platform where you can conveniently browse and
                                purchase a variety of tech products. Explore the
                                latest gadgets and electronics, enjoy a seamless
                                shopping experience, and elevate your tech game.
                                Feel free to explore the two different themes on
                                the websitez https://markethouse.netlify.app/
                            </p>
                        </div>
                        <div className="flex gap-5">
                            <a
                                href="https://github.com/Sandrajasmin/Markethouse"
                                className="bg-grey drop-shadow-md text-black w-full p-2 flex justify-center"
                            >
                                <i class="fa-brands fa-github fa-2x"></i>
                            </a>
                            <a
                                href="https://www.figma.com/file/E2ok51g3L6OoYqoUao9bLR/MarketHouse?type=design&node-id=0%3A1&t=xWJ997gE3sL1LOv1-1"
                                className="bg-grey drop-shadow-md text-black w-full p-2 flex justify-center"
                            >
                                <i class="fa-brands fa-figma fa-2x"></i>
                            </a>
                        </div>
                    </div>
                    <Slider {...settings} className="lg:w-1/2">
                        <div className="h-[400px] w-[400px]">
                            <img className="" src={Hero} alt="" />
                        </div>
                        <div className="h-[400px] w-[400px]">
                            <img className="" src={Detail} alt="" />
                        </div>
                        <div className="h-[400px] w-[400px]">
                            <img className="" src={Checkout} alt="" />
                        </div>
                        <div className="h-[400px] w-[400px]">
                            <img className="" src={HeroDark} alt="" />
                        </div>
                        <div className="h-[400px] w-[400px]">
                            <img className="" src={Search} alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
        )
    }
}
