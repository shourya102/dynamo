import React from 'react';
import logo from './logo.png'
import {FiMenu} from "react-icons/fi";
import './Navbar.css';
import ToggleButton from "../ToggleButton/ToggleButton";

const Navbar = (props) => {
    return (
        <nav className="Navbar bg-skin-base-3 bg-opacity-20 flex justify-between shadow-sm">
            <div className="flex float-left justify-center items-center ml-4 mr-4 gap-20">
                <div className="flex items-center">
                    <img src={logo} alt="logo" className="w-20"/>
                    <h1 className="font-semibold text-title tracking-tighter text-title-light-pink">
                        .dynam<span className="text-title-light-blue">o</span>
                    </h1>
                </div>
                <div className="hidden lg:flex gap-5 text-paragraph">
                    <div className="hover:text-skin-hover cursor-pointer">Home</div>
                    <div className="hover:text-skin-hover cursor-pointer">Problems</div>
                    <div className="hover:text-skin-hover cursor-pointer">Contest</div>
                    <div className="hover:text-skin-hover cursor-pointer">Community</div>
                </div>
            </div>
            <div className="hidden lg:flex float-right justify-center items-center ml-4 mr-4 gap-3">
                <ToggleButton/>
                <button onClick={props.darkMode} className="bg-gray-500 rounded-full text-paragraph w-14 h-14 hover:bg-gray-700 shadow-xl"></button>
                <div className="bg-white rounded-full w-14 h-14"></div>
                <div className="bg-white rounded-full w-14 h-14"></div>
            </div>
            <div className="flex lg:hidden float-right justify-center items-center ml-4 mr-4">
                <FiMenu size={30} opacity={'50%'}/>
            </div>
        </nav>
    );
}

export default Navbar;