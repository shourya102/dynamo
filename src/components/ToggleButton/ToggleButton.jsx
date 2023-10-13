import React, {useState} from 'react';
import './ToggleButton.css';
import {BsFillMoonFill} from "react-icons/bs";
import {FaSun} from "react-icons/fa";

const ToggleButton = (props) => {
    const [pos, setPos] = useState('');
    const handleClick = () => {
        setPos(prevState => {
            if (prevState === '') return 'toggled';
            else return '';
        });
    }

    return (
        <div
            className={`ToggleButton w-20 h-14 bg-skin-fill-1 flex rounded-3xl items-center gap-2 p-1 shadow-sm ${props.className}`}>
            <button
                className={`fix flex rounded-full bg-skin-fill-2 ${pos} transition-transform ease-in delay-100`}
                onClick={() => {
                    handleClick();
                    props.click();
                }}>
            </button>
            <div className={`flex row`}>
                {/*<BsFillMoonFill className={`inline float-right`} size={25} color={'rgb(0, 0, 0, 0.5)'}/>*/}
                {/*<FaSun size={25} className={`inline float-left`} color={'rgb(0, 0, 0, 0.5)'}/>*/}
            </div>
        </div>
    );
}

export default ToggleButton;