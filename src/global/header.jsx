import React, { useState } from 'react'
import { NavLink} from 'react-router-dom'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className="sticky top-0 z-50">
            <header className="">
                <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-center lg:justify-start">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none"
                                aria-controls="mobile-menu"
                                aria-expanded={isMenuOpen ? 'true' : 'false'}
                                onClick={toggleMenu}
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className={`block h-6 w-6 ${
                                        isMenuOpen ? 'hidden' : ''
                                    }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                                <svg
                                    className={`h-6 w-6 ${
                                        isMenuOpen ? '' : 'hidden'
                                    }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button
                                type="button"
                                className={`inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none ${
                                    isMenuOpen ? 'rotate-90' : ''
                                }`}
                                aria-controls="mobile-menu"
                                aria-expanded={isMenuOpen ? 'true' : 'false'}
                                onClick={toggleMenu}
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className={`block h-6 w-6 ${
                                        isMenuOpen ? 'hidden' : ''
                                    }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                                <svg
                                    className={`h-6 w-6 ${
                                        isMenuOpen ? '' : 'hidden'
                                    }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="flex">
                            <div
                                id="logo-mobile"
                                className="flex flex-1 justify-center lg:justify-start"
                            >
                                <div className="logo">
                                    <a
                                        className="flex h-full my-5 pb-5"
                                        href="/index.html"
                                    >
                                        <span className="font-serif animate-text bg-gradient-to-t from-[#070707] via-[#ACACAC] to-[#070707] bg-clip-text text-transparent animate-in slide-in-from-top duration-1000 text-8xl">
                                            S
                                        </span>
                                        <span className="font-serif animate-text bg-gradient-to-r from-[#070707] via-[#ACACAC] to-[#000000] bg-clip-text text-transparent text-8xl mt-[21.5px] -ml-[14px]">
                                            J
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="sm:ml-6 sm:block hidden">
                                <div className="flex space-x-4 items-start pt-16">
                                    <a
                                        href="#"
                                        className="text-black hover:font-bold px-3 rounded-md text-base font-body"
                                    >
                                        About
                                    </a>

                                    <a
                                        href="#"
                                        className="text-black hover:font-bold px-3 rounded-md text-base font-body"
                                    >
                                        Projects
                                    </a>
                                    <a
                                        href="#"
                                        className="text-black hover:font-bold px-3 rounded-md text-base font-body"
                                    >
                                        Contact
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="mobile-menu"
                    className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
                >
                    <nav className="space-y-1 flex flex-col items-center">
                        <a
                            href="#"
                            className="text-black hover:bg-grey block px-3 py-2 rounded-md text-lg hover:font-medium"
                            aria-current="page"
                        >
                            About
                        </a>

                        <a
                            href="#"
                            className="text-black hover:bg-grey block px-3 py-2 rounded-md text-lg hover:font-medium"
                        >
                            Projects
                        </a>

                        <a
                            href="#"
                            className="text-black hover:bg-grey block px-3 py-2 rounded-md text-lg hover:font-medium"
                        >
                            Contact
                        </a>
                    </nav>
                </div>
            </header>
        </div>
    )
}
