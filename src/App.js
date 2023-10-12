import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
