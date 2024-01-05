import React, {useState} from 'react';
import './Problems.css';
import Dropdown from "../../components/DropDown/Dropdown";
import {AiFillExclamationCircle, AiOutlineCheck, AiOutlineClose} from "react-icons/ai";
import {BiSearch} from "react-icons/bi";
import {FaRandom} from "react-icons/fa";

const Problems = (props) => {

    const filters = useState([null, null, null]);

    return (
        <div className="flex justify-center">
            <div className="flex flex-col bg-skin-base-3 h-[44rem] p-4 space-y-2">
                <div className="flex space-x-3 justify-center">
                    <div className="h-52 w-52 bg-white rounded-2xl"></div>
                    <div className="h-52 w-52 bg-white rounded-2xl"></div>
                    <div className="h-52 w-52 bg-white rounded-2xl"></div>
                </div>
                {/*change height later, testing purpose*/}
                <div className="flex flex-col space-y-2">
                    <div className="flex space-x-2">
                        <Dropdown title="Status">
                            <button className="p-2 flex space-x-1 justify-center items-center"><p>Solved</p><AiOutlineCheck/></button>
                            <button className="p-2 flex space-x-1 justify-center items-center"><p>Attempted</p><AiFillExclamationCircle/></button>
                            <button className="p-2 flex space-x-1 justify-center items-center"><p>Unsolved</p><AiOutlineClose/></button>
                        </Dropdown>
                        <Dropdown title="Difficulty">
                            <button className="p-2 text-green-600">Easy</button>
                            <button className="p-2 text-yellow-600">Medium</button>
                            <button className="p-2 text-red-600">Hard</button>
                        </Dropdown>
                        <Dropdown title="Tags">

                        </Dropdown>
                        <Dropdown title="...">

                        </Dropdown>
                    </div>
                    <div className="flex space-x-2">
                        <search className="flex shadow-sm w-full">
                            <div className="flex items-center bg-skin-base-2 rounded-l-2xl p-2"><BiSearch/></div>
                            <input
                                type="text"
                                placeholder="Search a question..."
                                className="w-full bg-skin-base-2 border-skin-border-2 py-2f"/>
                            <button className="bg-skin-base-2 rounded-r-2xl p-2"><AiOutlineClose/></button>
                        </search>
                        <button className="flex justify-center items-center space-x-2 bg-skin-base-2 p-3 rounded-full">
                            <span>Randomize</span>
                            <FaRandom/>
                        </button>
                    </div>
                </div>
                <div>
                    <table>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default Problems;