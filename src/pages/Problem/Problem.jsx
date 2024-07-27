import React, { useEffect, useState } from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import ReactCodeMirror from "@uiw/react-codemirror";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { darcula } from "@uiw/codemirror-themes-all";
import { useParams } from "react-router-dom";
import axios from "axios";

const Problem = () => {
  const id = useParams();
  const [problemData, setProblemData] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/problems/get-problem/" + id.id)
      .then((res) => {
        setProblemData(res.data);
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="flex space-x-4 p-4 h-[54rem]">
      <div className="bg-skin-base-3 flex flex-col resize-x overflow-clip border border-skin-border-3 rounded-lg w-1/2  h-full">
        <div className="flex p-2 bg-skin-base-2 space-x-1 [&>*]:border-r [&>*]:border-skin-border-2 [&>*:last-child]:border-none">
          <div className="px-2">{problemData.name}</div>
          <div className="px-2">Solution</div>
          <div className="px-2">Discussion</div>
        </div>
        <div className="flex flex-col flex-grow space-y-2 overflow-y-scroll p-4">
          <h1 className="text-title text-skin-bright font-bold">
            {problemData.id}. {problemData.name}
          </h1>
          <div className="p-3 bg-skin-base-2 w-fit rounded-2xl text-green-600">
            {problemData.difficulty}
          </div>
          <p>{problemData.description}</p>
        </div>
        <div className="bg-skin-base-2 p-2 space-x-2 flex">
          <button className="bg-skin-fill-1 flex justify-center rounded-lg p-2 w-12">
            <AiOutlineLike size={15} />
          </button>
          <button className="bg-skin-fill-1 flex justify-center rounded-lg p-2 w-12">
            <AiOutlineDislike size={15} />
          </button>
        </div>
      </div>
      <div className="flex flex-grow h-full flex-col space-y-4">
        <div className="bg-skin-base-3 overflow-clip flex flex-col border border-skin-border-3 rounded-lg h-[35rem]">
          <div className="flex p-2 bg-skin-base-2">
            <Dropdown title="Language" color="skin-base-2" radius="2xl">
              <div className="p-2 justify-center flex">Java</div>
              <div className="p-2 justify-center flex">C++</div>
            </Dropdown>
          </div>
          <div className="flex-grow overflow-y-scroll h-[31rem]">
            <ReactCodeMirror
              theme={darcula}
              minHeight="31rem"
              extensions={[loadLanguage("java")]}
            />
          </div>
        </div>
        <div className="bg-skin-base-3 overflow-clip flex flex-col flex-grow border border-skin-border-3 rounded-lg">
          <div className="p-2 flex [&>*]:border-r [&>*]:border-skin-border-2 [&>*:last-child]:border-none bg-skin-base-2">
            <div className="px-2">Testcase</div>
            <div className="px-2">Test Results</div>
          </div>
          <div className="p-4 overflow-y-scroll">
            <div className="flex space-x-2">
              <button className="p-3 border border-skin-border-1 rounded-2xl bg-skin-base-4">
                Case 1
              </button>
              <button className="p-3 border border-skin-border-1 rounded-2xl bg-skin-base-4">
                Case 2
              </button>
            </div>
            <div className="flex flex-col space-y-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem;
