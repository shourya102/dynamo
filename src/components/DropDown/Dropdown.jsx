import React, {useEffect, useRef, useState} from 'react';
import './Dropdown.css';
import {AiFillCaretDown} from "react-icons/ai";
import {CSSTransition} from "react-transition-group";

const Dropdown = (props) => {
    const [showDrop, setShowDrop] = useState(false);
    const dropDownRef = useRef(null)
    const toggleDrop = () => {
        setShowDrop(prev => !prev);
    }

    useEffect(() => {
        const handleExtraClick = (e) => {
            if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
                setShowDrop(false);
            }
        }

        document.addEventListener('mousedown', handleExtraClick);
        return () => {
            document.removeEventListener('mousedown', handleExtraClick);
        }
    }, []);

    return (
        <div ref={dropDownRef}>
            <div onClick={toggleDrop}
                 className={` ${showDrop ? 'rounded-t-2xl' : 'rounded-2xl'} w-[10rem] flex justify-center items-center bg-skin-base-2 shadow-sm select-none cursor-pointer`}>
                <div className="flex justify-center items-center p-2 space-x-1">
                    <p>{props.title}</p>
                    <AiFillCaretDown className={`${showDrop ? 'rotate-180' : ''} transition delay-100 `}/>
                </div>
            </div>
            <CSSTransition in={showDrop} timeout={300} unmountOnExit
                           classNames="dropdown">
                <div
                    className={`w-[10rem] rounded-b-2xl justify-center items-center drop flex-col absolute flex bg-skin-base-2 shadow-sm overflow-clip`}>
                    {props.children}
                </div>
            </CSSTransition>
        </div>
    );
}


export default Dropdown;