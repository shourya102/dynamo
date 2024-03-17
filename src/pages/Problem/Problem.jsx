import React from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

const Problem = () => {
  return (
    <div className="flex space-x-4 p-4 h-[54rem]">
      <div className="bg-skin-base-3 flex flex-col resize-x overflow-clip border border-skin-border-3 rounded-lg w-1/2  h-full">
        <div className="flex p-2 bg-skin-base-2 space-x-1 [&>*]:border-r [&>*]:border-skin-border-2 [&>*:last-child]:border-none">
          <div className="px-2">Description</div>
          <div className="px-2">Solution</div>
          <div className="px-2">Discussion</div>
        </div>
        <div className="flex flex-col flex-grow space-y-2 overflow-y-scroll p-4">
          <h1 className="text-title text-skin-bright font-bold">1. Two Sum</h1>
          <div className="p-3 bg-skin-base-2 w-fit rounded-2xl text-green-600">
            Easy
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
            aperiam autem corporis dolorem doloribus, magni minus mollitia
            quaerat quos repellendus tenetur veniam! Amet aperiam atque
            blanditiis explicabo harum laudantium maxime nemo, nesciunt
            perferendis quia rem sequi soluta tempora totam ut. Aspernatur
            assumenda, blanditiis commodi cum cumque, earum est eum fugiat illum
            impedit in iste natus necessitatibus nemo nesciunt nostrum nulla
            obcaecati officia omnis optio quaerat quam quas quia quis quod
            reiciendis rem repellat sed similique ut veritatis voluptatem
            voluptates voluptatum! Ad, adipisci aut consequuntur laborum magni
            maiores necessitatibus obcaecati officiis praesentium quae quam
            quasi quia recusandae rem, soluta tenetur, voluptas.
          </p>
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
          <div className="flex-grow"></div>
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
