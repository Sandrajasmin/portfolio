import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { pathname } = useLocation()
    const isHomePage = pathname === '/'

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen)
    }

    function closeMenu() {
        setIsMenuOpen(false)
    }

    useEffect(() => {
        // Scroll to top on page load
        scroll.scrollToTop()
    }, [pathname]) // Trigger effect when pathname changes

    return (
        <div className="sticky top-0 z-50 bg-[#ffffff]">
            <header className="">
                <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-center lg:justify-start">
                        <div className="flex">
                            <div
                                id="logo-mobile"
                                className="flex flex-1 justify-center lg:justify-start"
                            >
                                <div className="logo">
                                    <NavLink
                                        className="flex h-full mt-5 pb-5 lg:my-0 lg:mt-5 lg:pb-0"
                                        to="/"
                                    >
                                        <span className="font-serif animate-text bg-gradient-to-t from-[#070707] via-[#ACACAC] to-[#070707] bg-clip-text text-transparent animate-in slide-in-from-top duration-1000 text-8xl">
                                            S
                                        </span>
                                        <span className="font-serif animate-text bg-gradient-to-r from-[#070707] via-[#ACACAC] to-[#000000] bg-clip-text text-transparent text-8xl mt-[21.5px] -ml-[14px]">
                                            J
                                        </span>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="sm:ml-6 sm:block hidden">
                                <div className="flex space-x-4 items-start pt-16">
                                    <NavLink
                                        to={isHomePage ? 'about-section' : '/'}
                                        smooth={true}
                                        className="text-black hover:font-bold px-3 rounded-md text-base font-body"
                                    >
                                        About
                                    </NavLink>
                                    <NavLink
                                        to={
                                            isHomePage ? 'project-section' : '/'
                                        }
                                        className="text-black hover:font-bold px-3 rounded-md text-base font-body"
                                    >
                                        Projects
                                    </NavLink>
                                    <NavLink
                                        to={
                                            isHomePage ? 'contact-section' : '/'
                                        }
                                        className="text-black hover:font-bold px-3 rounded-md text-base font-body"
                                    >
                                        Contact
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
