import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./Dropdown.css";
import { AiFillCaretDown } from "react-icons/ai";
import { CSSTransition } from "react-transition-group";

const Dropdown = (props) => {
  const [showDrop, setShowDrop] = useState(false);
  const dropDownRef = useRef(null);
  const [width, setWidth] = useState(0);

  const toggleDrop = () => {
    setShowDrop((prev) => !prev);
  };

  const changeWidth = {
    width: width,
  };

  useEffect(() => {
    const handleExtraClick = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setShowDrop(false);
      }
    };

    document.addEventListener("mousedown", handleExtraClick);
    return () => {
      document.removeEventListener("mousedown", handleExtraClick);
    };
  }, []);

  useLayoutEffect(() => {
    if (dropDownRef.current) setWidth(dropDownRef.current.offsetWidth);
  }, [showDrop]);

  return (
    <div
      className={`${props.grow ? "flex-grow w-full" : "flex-grow-0"} flex flex-col`}
    >
      <div
        onClick={toggleDrop}
        ref={dropDownRef}
        className={`${showDrop ? `border-t border-x rounded-t-${props.radius}` : `border rounded-${props.radius}`} 
        border-skin-border-2 flex justify-center items-center bg-${props.color} shadow-sm select-none cursor-pointer`}
      >
        <div
          className={`flex justify-center items-center p-${props.p} p-2 space-x-1`}
        >
          <p>{props.title}</p>
          <AiFillCaretDown
            className={`${showDrop ? "rotate-180" : ""} transition delay-100 `}
          />
        </div>
      </div>
      <div className="relative">
        <CSSTransition
          in={showDrop}
          timeout={300}
          unmountOnExit
          classNames="dropdown"
        >
          <div
            style={changeWidth}
            className={`rounded-b-${props.radius} w-full justify-start drop
                     absolute z-drop bg-${props.color} shadow-sm overflow-clip max-h-44 overflow-y-scroll`}
          >
            <div
              className={`border-x border-b border-skin-border-2 w-full flex flex-col rounded-b-${props.radius}`}
            >
              {props.children}
            </div>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default Dropdown;
