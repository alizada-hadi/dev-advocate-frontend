import React from "react";

const FrontendPagination = ({ companyPerPage, totalCompanies, paginate }) => {
  const pageNumbers = [];
  for (let i = 0; i <= Math.ceil(totalCompanies / companyPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav aria-label="Page navigation example" className="mt-12">
      <ul className="inline-flex -space-x-px">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              type="button"
              className="py-2 px-3 leading-tight rounded-sm text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {number + 1}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FrontendPagination;
