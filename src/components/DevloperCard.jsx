import React from "react";
import { Link } from "react-router-dom";

const DevloperCard = ({ advocate }) => {
  return (
    <Link to={"/"}>
      <div className="border-2 rounded hover:shadow-md bg-white">
        <div className="flex px-3 py-2">
          <img
            src={advocate?.profile_pic}
            alt={advocate.profile_pic}
            className="w-32 h-32 rounded-md"
          />
          <div>
            <div className="flex flex-col">
              <h3 className="ml-3 text-xl font-semibold capitalize font-Inter">
                {advocate?.name}
              </h3>

              <span className="ml-3 font-bold text-gray-700 mt-3">
                {advocate?.follower_count > 10000
                  ? `${advocate?.follower_count / 1000} K `
                  : advocate?.follower_count}
                {"  "}
                Followers
              </span>
            </div>
          </div>
        </div>
        <p className="indent-4 px-4 py-3 mt-2 text-justify">{advocate?.bio}</p>
      </div>
    </Link>
  );
};

export default DevloperCard;
