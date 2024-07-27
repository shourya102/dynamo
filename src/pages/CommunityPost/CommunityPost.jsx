import React, { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { BiDotsHorizontal, BiDotsVertical, BiShare } from "react-icons/bi";
import FormattingArea from "../../components/FormattingArea/FormattingArea";
import { CgComment } from "react-icons/cg";
import Comment from "../../components/Comment/Comment";
import { TbDots } from "react-icons/tb";

const CommunityPost = () => {
  const [comment, setComment] = useState("");

  return (
    <div className="flex justify-center min-h-[55rem] w-full">
      <div className="flex flex-col p-4 bg-skin-base-3 lg:w-4/5 md:w-5/6 w-full">
        <div className="flex flex-col border-b border-skin-border-2 pb-4">
          <div className="flex flex-col space-y-1">
            <h1 className="text-semi font-bold mb-4 bg-skin-base-2 p-2 w-fit rounded-2xl">
              New Post
            </h1>
            <div className="flex text-paragraph space-x-2">
              <span className="rounded-full w-12 h-12 flex justify-center items-center bg-white border border-skin-border-2">
                <BsFillPersonFill size={30} />
              </span>
              <h1>Shourya Sahu</h1>
              <div className="flex-grow justify-end flex">
                <button className="flex -translate-y-3 self-center">
                  <BiDotsVertical />
                </button>
              </div>
            </div>
            <span className="ml-14 -translate-y-5">Posted 1 hour ago</span>
          </div>
          <div className="p-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus,
            debitis deserunt esse id illo maiores minus molestias non obcaecati
            officia officiis pariatur possimus praesentium quaerat quas sequi
            sunt tempore temporibus veniam voluptatem. Aspernatur at aut autem
            consectetur cumque deserunt, dolor dolorem enim eum exercitationem
            id iste labore, magnam minus molestiae neque possimus praesentium
            quod repudiandae sapiente tempora temporibus velit! Aliquid aperiam
            cum dolorem dolorum ducimus earum eligendi eveniet ex impedit
            laudantium neque nihil non nostrum nulla odit officia, optio rem
            saepe tempore vel vero voluptate voluptatem voluptatum. At beatae
            corporis dicta harum illum laboriosam laudantium libero obcaecati
            quidem. Facilis, laudantium.
          </div>
          <div className="flex justify-between space-x-1 mt-8">
            <div className="flex space-x-1">
              <button className="w-20 items-center space-x-1 ibg-skin-base-2 border border-skin-border-2 p-3 flex justify-center rounded-2xl">
                <AiFillLike />
                <span>999</span>
              </button>
              <button className="w-20 flex items-center p-3 justify-center rounded-2xl">
                <AiFillDislike />
              </button>
            </div>
            <div>
              <button className="w-20 bg-skin-base-2 border border-skin-border-2 p-3 flex justify-center rounded-2xl">
                <BiShare />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-4 ">
          <div className="flex flex-col space-y-4 border-b border-skin-border-2 pb-4">
            <h1 className="font-bold text-semi">Post A Comment</h1>
            <FormattingArea className="h-[10rem]" setDescription={setComment} />
            <button className="p-3 space-x-1 justify-center items-center bg-skin-base-2 inline-flex w-fit self-end rounded-2xl border border-skin-border-2">
              <CgComment />
              <span>Comment</span>
            </button>
          </div>
          <div className="flex flex-col pt-4 space-y-4">
            <h1 className="font-bold text-semi">Comments</h1>
            <div className="flex flex-col space-y-2">
              <Comment />
              <Comment />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPost;
