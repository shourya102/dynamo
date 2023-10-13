import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from "./components/Footer/Footer";
import React, {useState} from "react";

function App() {
    const [theme, setTheme] = useState('');
    const darkMode = () => {
        setTheme(prevState => {
            if(prevState === '') return 'theme-dark';
            else return '';
        })
    }
    return (
        <div className={`${theme} App max-h-screen overflow-y-scroll`}>
            <Navbar darkMode={darkMode}/>
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                </Routes>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;
