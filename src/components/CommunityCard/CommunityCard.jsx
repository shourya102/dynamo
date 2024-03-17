import React from "react";
import { Link } from "react-router-dom";

const CommunityCard = () => {
  return (
    <div className="flex-col p-3 shadow-md flex border-t-4 space-y-2 border-gray-600 rounded-lg w-full bg-skin-fill-1">
      <div className="flex justify-between">
        <Link
          to="/communitypost"
          className="font-bold text-skin-bright text-2xl"
        >
          Welcome to Dynamo
        </Link>
        <div>Posted 1 hour ago</div>
      </div>
      <div className="flex space-x-2">
        <div className="p-3 bg-skin-base-3 rounded-2xl border border-skin-border-2">
          Array
        </div>
        <div className="p-3 bg-skin-base-3 rounded-2xl border border-skin-border-2">
          String
        </div>
      </div>
      <div className="bg-skin-bright self-end w-fit text-skin-bright-rev p-2 rounded-lg border border-skin-border-2">
        <span>Posted By: admin</span>
      </div>
    </div>
  );
};

export default CommunityCard;
