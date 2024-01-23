import React from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Search = (props) => {
  return (
    <search
      className={`${props.className} flex shadow-sm w-full bg-${props.bg} border border-skin-border-2 rounded-2xl`}
    >
      <div
        className={`flex items-center bg-transparent rounded-l-2xl p-${props.p}`}
      >
        <BiSearch />
      </div>
      <input
        value={props.value}
        onChange={(e) => props.onChange(e)}
        type={props.type}
        placeholder={props.placeholder}
        className={`w-full bg-transparent py-${props.p}`}
      />
      <button className={`bg-transparent rounded-r-2xl p-${props.p} `}>
        <AiOutlineClose />
      </button>
    </search>
  );
};

export default Search;
