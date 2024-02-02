import React, { useEffect, useState } from "react";
import logo from "./logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";
import ToggleButton from "../ToggleButton/ToggleButton";
import { NavbarList } from "./NavbarList";
import { Link } from "react-router-dom";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import userService from "../../services/UserService";

const Navbar = (props) => {
  const [mobiletask, setmobiletask] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (userService.getCurrentUser()) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  const click = () => {
    setmobiletask(!mobiletask);
  };
  return (
    <div>
      <nav className="Navbar bg-skin-base-3 bg-opacity-20 flex justify-between shadow-sm">
        <div className="flex float-left justify-center items-center ml-4 mr-4 gap-20">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="w-20" />
            <h1 className="font-semibold text-title tracking-tighter text-title-light-pink">
              .dynam<span className="text-title-light-blue">o</span>
            </h1>
          </div>
          <ul className="hidden cursor-grab lg:flex gap-5 text-paragraph">
            {NavbarList.map((item, index) => {
              return (
                <li
                  key={index}
                  className="hover:text-skin-hover cursor-pointer"
                >
                  <Link to={item.route}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden lg:flex float-right justify-center items-center ml-4 mr-4 gap-3">
          <ToggleButton click={props.darkMode} theme={props.theme} />
          {loggedIn && <ProfileDropdown setLoggedIn={setLoggedIn} />}
          {!loggedIn && (
            <div className="space-x-2">
              <Link
                to={"/sign-in"}
                className="bg-skin-fill-1 p-4 shadow-sm rounded-3xl border border-skin-border-1"
              >
                <span>Login</span>
              </Link>
              <span>or</span>
              <Link
                to={"/sign-up"}
                className="bg-skin-fill-1 p-4 shadow-sm rounded-3xl border border-skin-border-1"
              >
                <span>Register</span>
              </Link>
            </div>
          )}
        </div>
        <button
          onClick={click}
          className="flex lg:hidden float-right justify-center items-center ml-4 mr-4"
        >
          <FiMenu
            className={`${mobiletask ? "hidden" : ""} transition `}
            size={30}
            opacity={"50%"}
          />
          <FiX
            className={`${mobiletask ? "" : "hidden"} transition `}
            size={30}
            opacity={"50%"}
          />
        </button>
      </nav>
      <div
        className={`bg-skin-base-3  bg-opacity-20 ${mobiletask ? "" : "hidden"}  flex flex-col gap-3 item-center justify-center shadow-sm`}
      >
        <Link
          className=" text-center hover:text-skin-hover item-center w-[100%] cursor-pointer p-4 shadow-sm"
          to="/"
        >
          Home
        </Link>
        <Link
          className=" text-center hover:text-skin-hover item-center w-[100%] cursor-pointer p-3 shadow-sm"
          to="/sign-in"
        >
          Sign in
        </Link>
        <Link
          className=" text-center hover:text-skin-hover item-center w-[100%] cursor-pointer p-3 shadow-sm"
          to="/problems"
        >
          Problem
        </Link>
        <Link
          className=" text-center hover:text-skin-hover item-center w-[100%] cursor-pointer p-3 shadow-sm"
          to="/"
        >
          Contest
        </Link>
        <Link
          className=" text-center hover:text-skin-hover item-center w-[100%] cursor-pointer p-3 shadow-sm"
          to="/"
        >
          Community
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
