import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from "./components/Footer/Footer";
import React, {useEffect, useState} from "react";
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';

function App() {
    const [theme, setTheme] = useState(() => {
        const initialTheme = localStorage.getItem("theme");
        return initialTheme ? initialTheme : '';
    });
    const darkMode = () => {
        setTheme(prevState => {
            if (prevState === '') return 'theme-dark';
            else return '';
        })
    }
    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <div className={`${theme} App max-h-screen overflow-y-scroll`}>
            <Router>
                <Navbar darkMode={darkMode} theme={theme}/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/sign-up' element={<SignUp/>}/>
                    <Route path='/sign-in' element={<SignIn/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
