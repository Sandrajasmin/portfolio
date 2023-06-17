import React, { Component } from 'react'
import Slider from 'react-slick'
import Hero from '../../../assets/biddify/hero.png'
import Profile from '../../../assets/biddify/profile.png'
import Detail from '../../../assets/biddify/detail.png'
import Signin from '../../../assets/biddify/signin.png'
import Search from '../../../assets/biddify/search.png'

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
                                Biddify
                            </h1>
                            <p className="">
                                Introducing Biddify, a captivating auction site
                                I've developed to showcase my frontend
                                development skills. Explore the world of bidding
                                and selling with ease on this platform.
                                Experience thrilling auctions, browse unique
                                items, and witness the excitement unfold. Take a
                                look at my project at
                                https://biddify.netlify.app/
                            </p>
                        </div>
                        <div className="flex gap-5">
                            <a
                                href="https://github.com/Sandrajasmin/SemesterProject-2"
                                className="bg-grey drop-shadow-md text-black w-full p-2 flex justify-center"
                            >
                                <i class="fa-brands fa-github fa-2x"></i>
                            </a>
                            <a
                                href="https://www.figma.com/file/hnukNchD88xHrIXUm78vli/Auction-Site-%7C-Semester-prosject?type=design&node-id=13%3A51&t=gpdQSWxkJKzIFJOn-1"
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
                            <img className="" src={Signin} alt="" />
                        </div>
                        <div className="h-[400px] w-[400px]">
                            <img className="" src={Profile} alt="" />
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
