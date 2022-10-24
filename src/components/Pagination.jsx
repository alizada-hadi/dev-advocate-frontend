import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({
  has_previous,
  prev_page,
  current_page,
  next_page,
  has_next,
  pages,
  pagination,
}) => {
  return (
    <nav aria-label="Page navigation example" className="mt-8">
      <ul className="inline-flex -space-x-px">
        <li>
          <Link
            to={`/`}
            className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            First
          </Link>
        </li>
        <li>
          <Link
            to={
              pagination?.has_previous
                ? `/?page=${pagination?.current_page - 1}`
                : ""
            }
            className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Previous
          </Link>
        </li>
        {pagination?.pages?.map((page, index) => (
          <li key={index}>
            {page % 2 === 0 && (
              <Link
                to={`/?page=${page}`}
                className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {page}
              </Link>
            )}
          </li>
        ))}
        <li>
          <Link
            to={
              pagination?.has_next
                ? `/?page=${pagination?.current_page + 1}`
                : ""
            }
            className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </Link>
        </li>
        <li>
          <Link
            to={`/?page=${pagination?.total_pages}`}
            className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Last
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
