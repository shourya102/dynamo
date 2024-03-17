import React from "react";
import "./Table.css";
import { AiOutlineSolution } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function Table(props) {
  return (
    <div className="flex [&>*:nth-child(even)]:bg-skin-base-2 [&>*:nth-child(odd)] flex-col mt-8 w-full">
      <div className="flex py-3 space-x-4 border-b border-skin-border-2">
        <div className="w-12 pl-2">Id</div>
        <div className="w-80">Title</div>
        <div className="w-28">Difficulty</div>
        <div className="w-28">Solution</div>
        <div className="w-28">Acceptance</div>
        <div className="w-28">Status</div>
      </div>
      <div className="flex py-3 space-x-4">
        <div className="w-12 pl-2">1</div>
        <Link to="/problem" className="w-80">
          Two Sum
        </Link>
        <div className="w-28">Easy</div>
        <div className="w-28">
          <AiOutlineSolution size={25} />
        </div>
        <div className="w-28">Acceptance</div>
        <div className="w-28">Status</div>
      </div>
      <div className="flex py-3 space-x-4">
        <div className="w-12 pl-2">1</div>
        <Link to="/problem" className="w-80">
          Two Sum
        </Link>
        <div className="w-28">Easy</div>
        <div className="w-28">
          <AiOutlineSolution size={25} />
        </div>
        <div className="w-28">Acceptance</div>
        <div className="w-28">Status</div>
      </div>
      <div className="flex py-3 space-x-4">
        <div className="w-12 pl-2">1</div>
        <Link to="/problem" className="w-80">
          Two Sum
        </Link>
        <div className="w-28">Easy</div>
        <div className="w-28">
          <AiOutlineSolution size={25} />
        </div>
        <div className="w-28">Acceptance</div>
        <div className="w-28">Status</div>
      </div>
    </div>
  );
}
