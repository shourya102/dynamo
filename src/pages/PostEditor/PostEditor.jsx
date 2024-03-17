import React, { useCallback, useMemo, useState } from "react";
import FormattingArea from "../../components/FormattingArea/FormattingArea";
import Search from "../../components/Search/Search";
import { AiOutlineClose } from "react-icons/ai";
import Card from "../../components/Card/Card";

const PostEditor = () => {
  const [postText, setPostText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const topicList = ["Arrays", "List", "String"];
  const [selectedTopics, setSelectedTopics] = useState([]);

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
    <div className="flex w-full h-[60rem] justify-center">
      <div className="flex flex-col space-y-4 lg:w-4/5 p-4 md:w-5/6 w-full">
        <h1 className="font-varela font-extrabold border-b border-skin-border-2 text-semi my-4">
          Create A Post
        </h1>
        <FormattingArea className="h-[25rem]" setDescription={setPostText} />
        <div className="flex flex-col space-y-3">
          <Card>
            <label className="flex space-x-1 items-center" htmlFor="topics">
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
                  <span>No topic found with the keyword "{searchTerm}".</span>
                </div>
              )}
            </div>
          </Card>
        </div>
        <div className="flex justify-end w-full">
          <button className="bg-slate-700 w-32 shadow-sm hover:bg-slate-800 text-white rounded-2xl p-3 ">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostEditor;
