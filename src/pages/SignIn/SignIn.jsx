import React, {useState} from 'react';
import {BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin} from "react-icons/bi";
import {IconContext} from "react-icons";
import {Link, useNavigate} from 'react-router-dom'
import './SignIn.css';
import UserService from "../../services/UserService";

export default function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const signIn = (e) => {
        e.preventDefault();
        UserService.signIn({username, password}).then(response => {
            localStorage.setItem("session", JSON.stringify(response.data));
            navigate('/');
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <div className='SignIn flex justify-center items-center'>
            <div className='fixb flex flex-col items-center w-5/6 md:w-3/4 lg:w-1/3 shadow-md  bg-skin-base-3 rounded-3xl'>
                <div className='p-9 w-full'>
                    <h1 className=' text-title text-center font-semibold my-7'>Welcome back!</h1>
                    <form className='flex gap-3 flex-col' method='POST' action="">
                        <input type="email"
                               placeholder='abc123@gmail.com'
                               className='border p-3 rounded-3xl  focus:outline-none'
                               name=""
                               value={username}
                               onChange={(e) => setUsername(e.target.value)}
                               id="email"
                        />
                        <input type="password"
                               placeholder='password'
                               className='border p-3 rounded-3xl focus:outline-none'
                               name=""
                               id="password"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                               autoComplete='false'
                        />
                        <button
                            className='bg-slate-700 rounded-3xl hover:bg-slate-600 focus:text-green-700 p-3 text-white uppercase'
                            onClick={signIn}>
                            Sign In
                        </button>
                    </form>
                    <div className='max-w-lg flex pt-3  gap-3'>
                        <p>Don't have an account?</p>
                        <Link className='text-blue-600  hover:text-green-700' to='/sign-up'>
                            <span>Sign up</span>
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
