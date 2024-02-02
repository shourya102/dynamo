import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./ProblemEditor.css";
import FormattingArea from "../../components/FormattingArea/FormattingArea";
import {
  PiNumberOneFill,
  PiNumberThreeFill,
  PiNumberTwoFill,
} from "react-icons/pi";
import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";
import Search from "../../components/Search/Search";
import {
  AiFillCaretRight,
  AiFillPlusCircle,
  AiOutlineClose,
} from "react-icons/ai";
import HSelector from "../../components/HSelector/HSelector";
import Dropdown from "../../components/Dropdown/Dropdown";
import Card from "../../components/Card/Card";
import ProblemService from "../../services/ProblemService";
import { CSSTransition } from "react-transition-group";

const ProblemEditor = () => {
  const [problemName, setProblemName] = useState("");
  const [problemDescription, setProblemDescription] = useState("");
  const [difficulty, setDifficulty] = useState("EASY");
  const [returnType, setReturnType] = useState("INTEGER");
  const [methodName, setMethodName] = useState("");
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [parameterNames, setParameterNames] = useState([]);
  const [parameterTypes, setParameterTypes] = useState([]);
  const [index, setIndex] = useState(0);
  const topicList = [
    "Array",
    "String",
    "Linked List",
    "Matrix",
    "Maths",
    "BFS",
    "DFS",
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [tabSelected, setTabSelected] = useState(1);
  const difficultyList = [
    {
      name: "Easy",
      color: "red-600",
    },
    {
      name: "Medium",
      color: "yellow-600",
    },
    {
      name: "Hard",
      color: "green-600",
    },
  ];
  const typeList = [
    "Integer",
    "Double",
    "Boolean",
    "Character",
    "String",
    "Long",
    "Unsigned Integer",
  ];
  const [parametersList, setParametersList] = useState([]);

  const handleSubmit = () => {
    ProblemService.createProblem({
      name: problemName,
      difficulty: difficulty,
      problemDescription: problemDescription,
      returnType: returnType,
      methodName: methodName,
      parameterNames: parameterNames,
      parameterTypes: parameterTypes,
      topics: selectedTopics,
    });
  };

  useEffect(() => {
    setParameterNames(parametersList.map((i) => i.name));
    setParameterTypes(parametersList.map((i) => i.type.toUpperCase()));
    console.log(problemDescription.toString());
  }, [parametersList, problemDescription]);

  const updateParameters = (id, updatedItem) => {
    setParametersList((prevState) => {
      return prevState.map((item) =>
        item.id === id ? { ...updatedItem } : item,
      );
    });
  };

  const addParameter = (index) => {
    setParametersList((prevState) => [
      ...prevState,
      {
        id: index,
        name: "",
        type: "Integer",
      },
    ]);
  };

  const removeParameter = (index) => {
    setParametersList((prevState) => {
      return prevState.filter((i) => i.id !== index);
    });
  };

  const filteredList = useMemo(() => {
    return topicList.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm, topicList]);

  const addOrRemoveTopic = useCallback(
    (e) => {
      if (e.target.innerText === undefined) return;
      if (selectedTopics.includes(e.target.innerText)) {
        const index = selectedTopics.indexOf(e.target.innerText);
        selectedTopics.splice(index, 1);
        setSelectedTopics([...selectedTopics]);
      } else {
        setSelectedTopics((prevState) => [...prevState, e.target.innerText]);
      }
    },
    [selectedTopics],
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex mx-4 mt-4 mb-20 justify-center font-inter h-[54.5rem]">
      <div className="items-center space-y-2 text-paragraph w-full sm:w-5/6 md:w-2/3 lg:w-1/2 flex flex-col relative">
        <div className="w-full flex items-center">
          <div
            className={`${tabSelected === 1 ? "border-slate-600" : "border-skin-border-3"} transition-colors delay-100 ease-linear flex-grow border-2 `}
          ></div>
          <div
            className={`${tabSelected === 2 ? "border-slate-600" : "border-skin-border-3"} transition-colors delay-100 ease-linear flex-grow border-2`}
          ></div>
          <div
            className={`${tabSelected === 3 ? "border-slate-600" : "border-skin-border-3"} transition-colors delay-100 ease-linear flex-grow border-2`}
          ></div>
        </div>

        <div className="w-full flex relative">
          <CSSTransition
            in={tabSelected === 1}
            timeout={300}
            classNames="pop-out"
            unmountOnExit
          >
            <div className="absolute w-full space-y-4 flex flex-col items-center">
              <Card>
                <label className="flex items-center space-x-1" htmlFor="name">
                  <PiNumberOneFill />
                  <span>What should be the problem name?</span>
                </label>
                <input
                  type="text"
                  value={problemName}
                  onChange={(e) => setProblemName(e.target.value)}
                  placeholder="Enter a problem name..."
                  name="name"
                  id="name"
                  className="rounded-lg shadow-sm bg-skin-base-3 p-3 border border-skin-border-2"
                />
              </Card>
              <Card>
                <label
                  className="flex space-x-1 items-center"
                  htmlFor="description"
                >
                  <PiNumberTwoFill />
                  <span>What should be the problem description?</span>
                </label>
                <FormattingArea setDescription={setProblemDescription} />
              </Card>
              <Card>
                <label
                  className="flex items-center space-x-1"
                  htmlFor="difficulty"
                >
                  <PiNumberThreeFill />
                  <span>What should be the problem difficulty?</span>
                </label>
                <HSelector
                  setItem={setDifficulty}
                  buttonList={difficultyList}
                />
              </Card>
              <button
                onClick={() =>
                  setTabSelected((prevState) => {
                    if (prevState <= 3) return prevState + 1;
                  })
                }
                className="bg-transition hover:bg-slate-600 flex justify-center my-2  w-36 bg-slate-700 text-gray-200 shadow-sm p-4 rounded-full"
              >
                <BiRightArrowCircle size={25} />
              </button>
            </div>
          </CSSTransition>
          <CSSTransition
            in={tabSelected === 2}
            timeout={300}
            classNames="pop-out"
            unmountOnExit
          >
            <div className="absolute w-full space-y-4 flex flex-col items-center">
              <Card>
                <label className="flex space-x-1 items-center" htmlFor="topics">
                  <PiNumberOneFill />
                  <span>Pick at most 5 topics.</span>
                </label>
                <Search
                  value={searchTerm}
                  onChange={handleSearch}
                  onClear={() => setSearchTerm("")}
                  placeholder="Search a topic"
                  type="text"
                  p={2}
                  className="rounded-lg"
                  bg="skin-base-3"
                />
                <div className="flex flex-wrap">
                  {filteredList.length > 0 &&
                    filteredList.map((item, index) => {
                      const isSelected = selectedTopics.includes(item);
                      return (
                        <button
                          key={index}
                          onClick={addOrRemoveTopic}
                          className={`${isSelected ? "bg-skin-fill-2-solid" : ""} flex space-x-1 items-center hover:bg-skin-fill-2 bg-skin-base-3
                                                    select-none mt-2 mr-2 p-2 bg-transition rounded-lg border border-skin-border-2`}
                        >
                          <AiOutlineClose
                            className={`${!isSelected ? "w-0 overflow-clip" : ""} width-transition`}
                          />
                          <span>{item}</span>
                        </button>
                      );
                    })}
                  {filteredList.length === 0 && (
                    <div className="bg-skin-base-3 rounded-lg p-2 mt-2 border border-skin-border-2">
                      <span>
                        No topic found with the keyword "{searchTerm}".
                      </span>
                    </div>
                  )}
                </div>
              </Card>
              <Card>
                <label
                  className="flex items-center space-x-1"
                  htmlFor="methodName"
                >
                  <PiNumberTwoFill />
                  <span>What should be the method name?</span>
                </label>
                <input
                  type="text"
                  value={methodName}
                  onChange={(e) => setMethodName(e.target.value)}
                  placeholder="Enter a method name..."
                  name="methodName"
                  id="method-name"
                  className="rounded-lg shadow-sm bg-skin-base-3 p-3 border border-skin-border-2"
                />
              </Card>
              <Card>
                <label
                  className="flex items-center space-x-1"
                  htmlFor="returnType"
                >
                  <PiNumberThreeFill />
                  <span>What should be the return type?</span>
                </label>
                <HSelector buttonList={typeList} setItem={setReturnType} />
              </Card>
              <div className="flex space-x-2">
                <button
                  onClick={() =>
                    setTabSelected((prevState) => {
                      if (prevState > 0) return prevState - 1;
                    })
                  }
                  className=" relative bg-transition hover:bg-slate-600 flex justify-center my-2  w-36 bg-slate-700 text-gray-200 shadow-sm p-4 rounded-full"
                >
                  <BiLeftArrowCircle size={25} />
                </button>
                <button
                  onClick={() =>
                    setTabSelected((prevState) => {
                      if (prevState <= 3) return prevState + 1;
                    })
                  }
                  className="bg-transition hover:bg-slate-600 flex justify-center my-2  w-36 bg-slate-700 text-gray-200 shadow-sm p-4 rounded-full"
                >
                  <BiRightArrowCircle size={25} />
                </button>
              </div>
            </div>
          </CSSTransition>
          <CSSTransition
            in={tabSelected === 3}
            timeout={300}
            classNames="pop-out"
            unmountOnExit
          >
            <div className="absolute w-full space-y-4 flex flex-col items-center">
              <Card>
                <label
                  className="flex items-center space-x-1"
                  htmlFor="parameters"
                >
                  <PiNumberOneFill />
                  <span>What should be the parameters?</span>
                </label>
                <div className="w-full flex flex-col space-y-2">
                  <button
                    onClick={() =>
                      addParameter(() => {
                        let index_temp = index;
                        setIndex((prevState) => prevState + 1);
                        return index_temp;
                      })
                    }
                    className="self-center flex items-center space-x-1 bg-skin-base-3 border border-skin-border-2 rounded-2xl p-3"
                  >
                    <span>Add Parameter</span>
                    <AiFillPlusCircle size={33} />
                  </button>
                  {parametersList.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="w-full flex flex-col space-y-2"
                      >
                        <div className="flex items-center rounded-lg overflow-clip">
                          <input
                            type="text"
                            value={item.name}
                            onChange={(e) =>
                              updateParameters(item.id, {
                                ...item,
                                name: e.target.value,
                              })
                            }
                            placeholder="Enter a parameter name..."
                            name="methodName"
                            id="method-name"
                            className="flex-grow shadow-sm bg-skin-base-3 p-3 border border-skin-border-2"
                          />
                          <button
                            onClick={() => removeParameter(item.id)}
                            className="bg-skin-base-3 p-3 shadow-sm hover:bg-red-600 bg-transition border-y border-r border-skin-border-2"
                          >
                            <AiOutlineClose />
                          </button>
                        </div>
                        <Dropdown
                          title={item.type}
                          radius="2xl"
                          grow={true}
                          p={3}
                          color="skin-base-2"
                        >
                          {typeList.map((item1, index1) => {
                            return (
                              <button
                                key={index1}
                                onClick={() =>
                                  updateParameters(item.id, {
                                    ...item,
                                    type: item1,
                                  })
                                }
                                className="p-2"
                              >
                                {item1}
                              </button>
                            );
                          })}
                        </Dropdown>
                      </div>
                    );
                  })}
                </div>
              </Card>
              <div className="flex space-x-2">
                <button
                  onClick={() =>
                    setTabSelected((prevState) => {
                      if (prevState > 0) return prevState - 1;
                    })
                  }
                  className=" relative bg-transition hover:bg-slate-600 flex justify-center my-2  w-36 bg-slate-700 text-gray-200 shadow-sm p-4 rounded-full"
                >
                  <BiLeftArrowCircle size={25} />
                </button>
                <button
                  onClick={handleSubmit}
                  className="bg-transition hover:bg-slate-600 space-x-1 items-center flex justify-center my-2  w-36 bg-slate-700 text-gray-200 shadow-sm p-4 rounded-full"
                >
                  <span>Create</span>
                  <AiFillCaretRight />
                </button>
              </div>
            </div>
          </CSSTransition>
        </div>
      </div>
    </div>
  );
};

export default ProblemEditor;
