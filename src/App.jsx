import './index.css'
import Router from './routes/router'
import Header from './global/header'

function App() {
    return (
        <>
            <div className="mx-auto">
                <Header />
                <Router />
            </div>
        </>
    )
}

export default App
