import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { BsMoonStars, BsSun } from "react-icons/bs";

const Header = () => {
  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center">
          <span className="self-center text-2xl font-Inter font-semibold whitespace-nowrap dark:text-white">
            DEV-Advocate
          </span>
        </Link>
        <div className="flex md:order-2">
          <ul className="hidden md:flex flex-col p-4 mt-4 items-center bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="">
              <Link
                to="#"
                className="py-2 pr-4 pl-3 text-lg font-Inter flex items-center text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page"
              >
                <AiOutlineUsergroupAdd className="text-2xl mr-2" />
                <span>Advocates</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center py-2 pr-4 pl-3 text-lg font-Inter text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                <MdOutlineMapsHomeWork className="text-xl mr-2" />
                Companies
              </Link>
            </li>

            <button className="border text-lg font-Inter px-8 py-2 item-center rounded-md hover:bg-blue-700 hover:text-slate-100 transition ease-out duration-100">
              Get Started
            </button>

            <button>
              <BsMoonStars className="text-2xl" />
            </button>
          </ul>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
