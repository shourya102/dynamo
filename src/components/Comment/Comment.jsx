import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { AiFillHeart, AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

const Comment = () => {
  return (
    <div className="flex flex-col bg-skin-base-3 shadow-sm p-4 border border-skin-border-2 rounded-lg">
      <div className="flex flex-col space-y-1">
        <div className="flex text-paragraph space-x-2">
          <span className="rounded-full w-12 h-12 flex justify-center items-center bg-white border border-skin-border-2">
            <BsFillPersonFill size={30} />
          </span>
          <h1>Shourya Sahu</h1>
        </div>
        <span className="ml-14 -translate-y-5">Posted 1 hour ago</span>
      </div>
      <p className="p-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        adipisci architecto autem consectetur corporis culpa debitis dolorem
        doloribus excepturi facere impedit ipsa, iste iusto labore laboriosam
        libero mollitia, necessitatibus non numquam obcaecati odio odit
        provident, quos recusandae reiciendis repudiandae saepe sed sequi
        similique tempora ullam unde ut vitae. Eligendi, sint!
      </p>
      <div className="flex space-x-2">
        <button className="p-3 flex space-x-1 items-center bg-skin-base-2 border border-skin-border-2 rounded-2xl">
          <AiOutlineLike />
          <span>999</span>
        </button>
        <button className="p-3">
          <AiOutlineDislike />
        </button>
      </div>
    </div>
  );
};

export default Comment;
