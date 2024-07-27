import React from "react";
import { AiFillTrophy } from "react-icons/ai";
import { FcPrivacy } from "react-icons/fc";
import { MdOutlinePublic } from "react-icons/md";

const Contest = () => {
  return (
    <div className="flex flex-col justify-center md:flex-row h-[54rem]">
      <div className="flex lg:w-3/5 md:w-5/6 w-full justify-center p-4 h-full">
        <div className=" flex flex-col flex-grow overflow-clip shadow-sm bg-skin-base-3 border border-skin-border-2 rounded-lg">
          <div className="flex bg-skin-base-2">
            <button className="p-3 bg-skin-base-3">Active Contests</button>
            <button className="p-3">My Contests</button>
          </div>
          <div className="flex mt-4 flex-col p-4 space-y-2">
            <div className="flex flex-col border border-skin-border-2 shadow-sm bg-skin-base-4 p-2 rounded-lg">
              <div className="flex justify-between">
                <h1 className="flex items-center space-x-1 text-semi text-blue-600 font-bold">
                  <AiFillTrophy />
                  <span>Private Contest 1</span>
                </h1>
                <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-skin-bright-rev">
                  Private
                </div>
              </div>
              <span className="ml-8">{new Date().toDateString()}</span>
              <div className="p-3  ml-8 rounded-2xl bg-skin-base-2 w-fit mt-2 text-green-600 border border-skin-border-2">
                Easy
              </div>
            </div>
            <div className="flex flex-col border border-skin-border-2 shadow-sm bg-skin-base-4 p-2 rounded-lg">
              <div className="flex justify-between">
                <h1 className="flex items-center space-x-1 text-semi text-blue-600 font-bold">
                  <AiFillTrophy />
                  <span>Private Contest 1</span>
                </h1>
                <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-skin-bright-rev">
                  Private
                </div>
              </div>
              <span className="ml-8">{new Date().toDateString()}</span>
              <div className="p-3  ml-8 rounded-2xl bg-skin-base-2 w-fit mt-2 text-green-600 border border-skin-border-2">
                Easy
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full md:w-[30rem] p-4 md:pl-0 md:py-4">
        <div className="flex flex-col h-[20rem] [&>*:nth-child(odd)]:bg-skin-base-3 bg-skin-base-2 border border-skin-border-2 w-full rounded-lg">
          <div className="flex p-3 bg-skin-base-3 shadow-sm border-b border-skin-border-2">
            <div className="w-20">Rank</div>
            <div className="flex-grow">User</div>
            <div className="w-20">Points</div>
          </div>
          <div className="flex p-3 border-b border-skin-border-2">
            <div className="w-20">1</div>
            <div className="flex-grow">admin</div>
            <div className="w-20 font-bold">200</div>
          </div>
          <div className="flex p-3 border-b border-skin-border-2">
            <div className="w-20">2</div>
            <div className="flex-grow">admin2</div>
            <div className="w-20 font-bold">300</div>
          </div>
        </div>
        <div className="flex flex-col justify-center p-4 w-full">
          <h1 className="text-title text-center w-full font-bold text-skin-bright border-b border-skin-border-2">
            Create A Contest
          </h1>
          <div className="flex w-56 h-56 self-center rounded-full m-4 justify-center items-center p-10">
            <AiFillTrophy color="gold" size={120} />
          </div>
          <div className="flex justify-between items-center">
            <button className="p-3 space-x-1 bg-orange-600 text-white rounded-2xl flex justify-center items-center">
              <FcPrivacy />
              <span>Private Contest</span>
            </button>
            <span className="font-bold">Or</span>
            <button className="p-3 space-x-1 bg-green-600 text-white rounded-2xl flex justify-center items-center">
              <MdOutlinePublic />
              <span>Public Contest</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contest;
