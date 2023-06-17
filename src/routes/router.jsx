import { Routes, Route } from 'react-router-dom'
import Home from '../pages/homepage/index'
import Holidaze from '../pages/detail/holidaze/index'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/holidaze" element={<Holidaze />} />
        </Routes>
    )
}

export default App
