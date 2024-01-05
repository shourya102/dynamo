import React, {useState} from 'react';
import './Dropdown.css';
import {AiFillCaretDown} from "react-icons/ai";

const Dropdown = (props) => {
    const [showDrop, setShowDrop] = useState(false);
    const toggleDrop = () => {
        setShowDrop(prev => !prev);
    }

    return (
        <div>
            <div onClick={toggleDrop}
                 className={` ${showDrop ? 'rounded-t-2xl' : 'rounded-2xl'} w-[10rem] flex justify-center items-center bg-skin-base-2 shadow-sm select-none cursor-pointer`}>
                <div className="flex justify-center items-center p-2 space-x-1">
                    <p>{props.title}</p>
                    <AiFillCaretDown className={`${showDrop ? 'rotate-180' : ''} transition delay-100 `}/>
                </div>
            </div>
            <div
                className={`${!showDrop ? 'hidden' : ''} w-[10rem] rounded-b-2xl justify-center items-center drop flex-col absolute flex bg-skin-base-2 shadow-sm`}>
                {props.children}
            </div>
        </div>
    );
}


export default Dropdown;