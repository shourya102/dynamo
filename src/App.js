import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from "./components/Footer/Footer";
import React, {useState} from "react";
import SignUP from './pages/SignUp/SignUP';
import SignIn from './pages/SignIn/SignIn';

function App() {
    const [theme, setTheme] = useState('');
    const darkMode = () => {
        setTheme(prevState => {
            if (prevState === '') return 'theme-dark';
            else return '';
        })
    }
    return (
        <div className={`${theme} App max-h-screen overflow-y-scroll`}>
            <Router>
                <Navbar darkMode={darkMode}/>

                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/sign-up' element={<SignUP/>}/>
                    <Route path='/sign-in' element={<SignIn/>}/>


                    
                </Routes>

                <Footer/>
            </Router>
        </div>
    );
}

export default App;
