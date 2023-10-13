import React, {useState} from 'react';
import './ToggleButton.css';
import {BsFillMoonFill} from "react-icons/bs";
import {FaSun} from "react-icons/fa";

const ToggleButton = (props) => {
    const [pos, setPos] = useState('');
    const [isShown,setShown] = useState(false);
    const handleClick = () => {
        setPos(prevState => {
            if (prevState === '') return 'toggled';
            else return '';
        });
        setShown(prevState => {
           return !prevState;
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
            <div className="flex float-right icons gap-2">
                {isShown && <BsFillMoonFill className="icon-item-1" size={25} color={'rgba(255,241,171,0.8)'}/>}
                {!isShown && <FaSun size={25} color={'rgb(255, 80, 0, 0.8)'}/>}
            </div>
        </div>
    );
}

export default ToggleButton;