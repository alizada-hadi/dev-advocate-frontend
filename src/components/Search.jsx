import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/?query=${keyword}`);
    } else {
      navigate("/");
    }
  };
  return (
    <div className="flex justify-center">
      <div className="flex items-center">
        <div className="flex">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              name="search"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              id="website-admin"
              className="rounded-none mt-16 rounded-l-lg h-16 bg-gray-50 border text-gray-900 focus:ring-white focus:border-white focus:outline-none block flex-1 min-w-96 w-[35rem] text-md border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="search developer..."
            />
          </form>
          <button className="inline-flex items-center px-3 mt-16 h-16 text-md text-gray-900 bg-gray-200 rounded-r-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <AiOutlineSearch className="text-2xl mr-2" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
