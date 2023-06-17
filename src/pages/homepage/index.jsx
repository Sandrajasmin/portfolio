import React from 'react'
import HeroSection from './components/heroSection'
import AboutSection from './components/AboutSection'
import Projects from './components/projects'
import Contact from './components/contactSection'

export default function Homepage() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <Projects  />
            <Contact />
        </>
    )
}
