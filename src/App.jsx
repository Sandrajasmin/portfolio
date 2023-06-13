import './index.css'
import Header from './global/header'
import HomePage from './pages/homepage/index'
function App() {
    return (
        <>
            <div className="mx-auto max-w-6xl">
                <Header />
                <HomePage />
            </div>
        </>
    )
}

export default App
