import React, { useState } from "react";
import "./ProfileDropdown.css";
import testpic from "../../pages/Profile/flower.jpg";
import { CSSTransition } from "react-transition-group";
import { BsPerson } from "react-icons/bs";
import { AiOutlineQuestion } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import userService from "../../services/UserService";

const ProfileDropdown = (props) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const clickedProfile = () => {
    setIsVisible((prevState) => !prevState);
  };

  const ProfileList = [
    {
      name: "Profile",
      icon: <BsPerson />,
      style:
        "cursor-pointer flex items-center space-x-1 p-2 rounded-lg hover:bg-skin-base-2 hover:bg-opacity-50",
      nav: "/profile",
    },
    {
      name: "Solved",
      icon: <AiOutlineQuestion />,
      style:
        "cursor-pointer flex items-center space-x-1 p-2 rounded-lg hover:bg-skin-base-2 hover:bg-opacity-50",
      nav: "/",
    },
  ];

  const logout = () => {
    if (userService.getCurrentUser()) {
      userService.logOut(userService.getCurrentUser().id);
      props.setLoggedIn(false);
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col">
      <button
        onClick={clickedProfile}
        className="bg-white bg-opacity-50 overflow-clip rounded-full h-14 w-14"
      >
        <img src={testpic} alt="profilepic" />
      </button>
      <CSSTransition
        in={isVisible}
        timeout={500}
        unmountOnExit
        classNames="fade"
      >
        <div
          className={`p-5 absolute w-[13rem] flex flex-col bg-skin-base-3 rounded-2xl translate-y-20 -translate-x-36 overflow-clip shadow-md backdrop-blur-lg`}
        >
          {ProfileList.map((item, id) => {
            return (
              <button
                key={id}
                className={item.style}
                onClick={() => navigate(item.nav)}
              >
                <div>{item.name}</div>
                {item.icon}
              </button>
            );
          })}
          <button
            className="cursor-pointer flex items-center space-x-1 p-2 rounded-lg hover:bg-skin-base-2 hover:bg-opacity-50"
            onClick={logout}
          >
            <div>Log out</div>
            <BiLogOut />
          </button>
        </div>
      </CSSTransition>
    </div>
  );
};

export default ProfileDropdown;
