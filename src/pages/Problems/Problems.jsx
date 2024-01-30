import React, { useEffect, useRef, useState } from "react";
import "./Problems.css";
import Dropdown from "../../components/Dropdown/Dropdown";
import {
  AiFillExclamationCircle,
  AiOutlineCheck,
  AiOutlineClose,
} from "react-icons/ai";
import { FaRandom } from "react-icons/fa";
import Table from "../../components/Table/Table";
import LinkCard from "../../components/LinkCard/LinkCard";
import { LinkCardList } from "./LinkCardList";
import useWindowSize from "../../hooks/useWindowSize";
import Search from "../../components/Search/Search";

const Problems = (props) => {
  const lst =  [
    {
      queHeading: "Question 1",
      ac: "String 1",
      difficulty: "Easy",
      solved: true,
      topic: "Topic 1"
    },
    {
      queHeading: "Question 2",
      ac: "String 2",
      difficulty: "Medium",
      solved: false,
      topic: "Topic 2"
    },
    {
      queHeading: "Question 3",
      ac: "String 3",
      difficulty: "Hard",
      solved: true,
      topic: "Topic 3"
    },
    {
      queHeading: "Question 1",
      ac: "String 1",
      difficulty: "Easy",
      solved: true,
      topic: "Topic 1"
    },
    {
      queHeading: "Question 2",
      ac: "String 2",
      difficulty: "Medium",
      solved: false,
      topic: "Topic 2"
    },
    {
      queHeading: "Question 3",
      ac: "String 3",
      difficulty: "Hard",
      solved: true,
      topic: "Topic 3"
    }
    // Add more objects as needed
  ];
  const windowSize = useWindowSize();
  const [showFloatingBoxes, setShowFloatingBoxes] = useState(false);
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    if (windowSize.width < 788) {
      setShowFloatingBoxes(true);
    } else {
      setShowFloatingBoxes(false);
    }
  }, [windowSize.width]);

  const handleMouseDown = (e) => {
    if (
      e.target === scrollContainerRef.current ||
      scrollContainerRef.current.contains(e.target)
    ) {
      e.preventDefault();
      setIsDragging(true);
      setStartX(e.clientX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleMouseUp = (e) => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.clientX - scrollContainerRef.current.offsetLeft;
    const dragDistance = x - startX;
    scrollContainerRef.current.scrollLeft = scrollLeft - dragDistance;
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col bg-skin-base-3 w-full md:w-fit h-[98rem] p-4 space-y-2">
        {!showFloatingBoxes && (
          <ul className="flex space-x-3 justify-center">
            {LinkCardList.map((item, index) => {
              return (
                <li key={index}>
                  <LinkCard
                    to={item.to}
                    image={item.image}
                    style={item.style}
                  />
                </li>
              );
            })}
          </ul>
        )}
        {showFloatingBoxes && (
          <ul
            className={`${isDragging ? "cursor-grab" : ""} flex flex-shrink-0 space-x-3 justify-start scrollbar overflow-x-auto`}
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseUp}
          >
            {LinkCardList.map((item, index) => {
              return (
                <li key={index}>
                  <LinkCard
                    to={item.to}
                    image={item.image}
                    style={
                      item.style_2 +
                      ` ${isDragging ? "cursor-grab" : "cursor-pointer"}`
                    }
                  />
                </li>
              );
            })}
          </ul>
        )}
        {/*change height later, testing purpose*/}
        <div className="flex flex-col space-y-2">
          <div className="flex justify-evenly w-full space-x-2">
            <Dropdown
              grow={true}
              title="Status"
              color="skin-base-2"
              radius="2xl"
            >
              <button className="p-2 flex space-x-1 justify-center items-center">
                <p>Solved</p>
                <AiOutlineCheck />
              </button>
              <button className="p-2 flex space-x-1 justify-center items-center">
                <p>Attempted</p>
                <AiFillExclamationCircle />
              </button>
              <button className="p-2 flex space-x-1 justify-center items-center">
                <p>Unsolved</p>
                <AiOutlineClose />
              </button>
            </Dropdown>
            <Dropdown
              grow={true}
              title="Difficulty"
              color="skin-base-2"
              radius="2xl"
            >
              <button className="p-2 text-green-600">Easy</button>
              <button className="p-2 text-yellow-600">Medium</button>
              <button className="p-2 text-red-600">Hard</button>
            </Dropdown>
            <Dropdown
              grow={true}
              title="Tags"
              color="skin-base-2"
              radius="2xl"
            ></Dropdown>
            <Dropdown
              grow={true}
              title="Lists"
              color="skin-base-2"
              radius="2xl"
            ></Dropdown>
          </div>
          <div className="flex space-x-2">
            <Search p={2} placeholder="Search a question" type="text" />
            <button className="flex border border-skin-border-2 justify-center items-center space-x-2 bg-skin-base-2 p-3 rounded-full">
              <span>Randomize</span>
              <FaRandom />
            </button>
          </div>
        </div>
        <div>
          <Table Problems={lst}></Table>
        </div>
      </div>
    </div>
  );
};

export default Problems;
