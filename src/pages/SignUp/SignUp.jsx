import React from 'react'
import {BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin} from "react-icons/bi";
import {IconContext} from "react-icons";
import {Link} from 'react-router-dom';
import './SignUp.css';

export default function SignUp() {
    return (
        <div className='SignUp flex justify-center items-center'>
            <div className='fixb flex flex-col items-center w-5/6 md:w-3/4 lg:w-1/3 shadow-md  bg-skin-base-3 rounded-2xl '>
                <div className='p-9 w-full'>
                    <h1 className=' text-title  text-center font-semibold my-7'>Sign Up</h1>
                    <form className='flex gap-3 flex-col w-full' method='POST' action="">
                        <input type="text"
                               placeholder='username'
                               className='border p-3 rounded-md focus:outline-none'
                               name=""
                               id="username"
                        />
                        <input type="email"
                               placeholder='abc123@gmail.com'
                               className='border p-3 rounded-md focus:outline-none'
                               name=""
                               id="email"
                        />
                        <input type="password"
                               placeholder='password'
                               className='border p-3 rounded-md focus:outline-none'
                               name=""
                               id="password"
                               autoComplete='false'
                        />
                        <button
                            className='bg-slate-700 rounded-md hover:bg-slate-600 focus:text-green-700 p-3 text-white uppercase'>Sign
                            Up
                        </button>
                    </form>
                    <div className='max-w-lg flex pt-3 gap-3'>
                        <p>Have an account?</p>
                        <Link className='text-blue-600  hover:text-green-700' to='/sign-in'>
                            <span className=''>Sign in</span>
                        </Link>
                    </div>
                    <div className='add-top  flex mt-5 p-3 gap-4 justify-center '>
                        <IconContext.Provider value={{size: '30'}}>
                            <a href="#"><BiLogoFacebook/></a>
                            <a href="#"><BiLogoLinkedin/></a>
                            <a href="#"><BiLogoInstagram/></a>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    );
}
