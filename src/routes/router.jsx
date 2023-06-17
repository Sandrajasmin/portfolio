import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '../pages/homepage/index'
import Holidaze from '../pages/detail/holidaze/index'
import MarketHouse from '../pages/detail/markethouse/index'
import About from '../pages/homepage/components/AboutSection'
import Project from '../pages/homepage/components/projects'
import Contact from '../pages/homepage/components/contactSection'
import Biddify from '../pages/detail/biddify/index'
import Rainydays from '../pages/detail/rainydays/index'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-section" element={<About />} />
                <Route path="/project-section" element={<Project />} />
                <Route path="/contact-section" element={<Contact />} />
                <Route path="/holidaze" element={<Holidaze />} />
                <Route path="/markethouse" element={<MarketHouse />} />
                <Route path="/biddify" element={<Biddify />} />
                <Route path="/rainydays" element={<Rainydays />} />
            </Routes>
        </>
    )
}

export default App
