import React from "react";
import Search from "../../components/Search/Search";
import Dropdown from "../../components/Dropdown/Dropdown";
import CommunityCard from "../../components/CommunityCard/CommunityCard";
import { Link } from "react-router-dom";

const Community = () => {
  return (
    <div className="flex justify-center min-h-screen">
      <div className=" flex w-full md:w-5/6 lg:w-4/5 items-start bg-skin-base-3">
        <div className="flex w-full bg-base-4 flex-col">
          <div className="flex flex-col space-y-4 w-full bg-skin-base-3 p-4 border-b border-skin-border-2">
            <div className="flex space-x-2">
              <Dropdown color="skin-base-2" title="Topics" p={3} radius="2xl">
                <div className="p-3">Abc</div>
              </Dropdown>
              <Search placeholder="Search here... " p={3} />
            </div>
            <div className="flex justify-between space-x-2">
              <div className="flex space-x-2">
                <Dropdown
                  color="skin-base-2"
                  title="Language"
                  p={3}
                  radius="2xl"
                ></Dropdown>
                <Dropdown
                  color="skin-base-2"
                  title="Sort By"
                  p={3}
                  radius="2xl"
                ></Dropdown>
              </div>
              <div className="flex">
                <Link
                  className="p-3 bg-skin-fill-1 border border-skin-border-2 bg-transition shadow-sm hover:bg-gradient-to-tr hover:from-pink-300 hover:to-violet-300 hover:text-black rounded-2xl"
                  to="/createpost"
                >
                  Create a Post
                </Link>
              </div>
            </div>
          </div>
          <div className="flex p-4">
            <CommunityCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
