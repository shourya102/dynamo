import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";

export default function ToggleableComponent(props) {
  const [toggle, setToggle] = useState(false);
  const toggleFunction = () => {
    setToggle(!toggle);
  };
  return (
    <div className="border-[.1px] border-skin-border-2  mt-5 bg-skin-base-3 rounded-2xl  shadow-sm">
      <div className="p-4 px-6  text-[1.5rem]   flex flex-row justify-between">
        <span>{props.title}</span>
        <span className="cursor-pointer" onClick={toggleFunction}>
          {" "}
          {!toggle && <MdKeyboardArrowDown size={37} />}{" "}
          {toggle && <IoIosArrowUp size={28} />}{" "}
        </span>
      </div>
      <div className="">
        {toggle && <div className="p-5">{props.children}</div>}
      </div>
    </div>
  );
}
