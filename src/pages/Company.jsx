import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchCompanies } from "../features/advocates/advocatesSlice";
import FrontendPagination from "../components/FrontendPagination";
import Spinner from "../components/Spinner";
import CompanyCard from "../components/CompanyCard";
import { AiOutlineSearch } from "react-icons/ai";

import { useSearchParams } from "react-router-dom";

const Company = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [companyPerPage] = useState(10);
  let { companies, status } = useSelector((state) => state.advocates);

  const searchTerm = searchParams.get("name") || "";
  const indexOfLastCompany = currentPage * companyPerPage;
  const indexOfFirstCompany = indexOfLastCompany - companyPerPage;
  const slicedCompanies = companies.companies?.slice(
    indexOfFirstCompany,
    indexOfLastCompany
  );

  const handleChange = (e) => {
    const name = e.target.value;

    if (name) {
      setSearchParams({ name });
    } else {
      setSearchParams({});
    }
  };

  const paginate = (number) => {
    setCurrentPage(number);
  };

  useEffect(() => {
    dispatch(fetchCompanies());
  }, [dispatch]);
  return (
    <div className="bg-slate-100">
      <div className="w-full h-[28rem] bg-slate-700">
        <h1 className="text-center pt-[9rem] font-Roboto text-white text-5xl font-semibold">
          Search for software development <b className="uppercase">companies</b>{" "}
          ?
        </h1>
        <div className="flex justify-center">
          <div className="flex items-center">
            <div className="flex">
              <input
                type="text"
                name="q"
                value={searchTerm}
                id="website-admin"
                onChange={handleChange}
                className="rounded-none mt-16 rounded-l-lg h-16 bg-gray-50 border text-gray-900 focus:ring-white focus:border-white focus:outline-none block flex-1 min-w-96 w-[35rem] text-md border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="search companies..."
              />
              <button className="inline-flex items-center px-3 mt-16 h-16 text-md text-gray-900 bg-gray-200 rounded-r-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <AiOutlineSearch className="text-2xl mr-2" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-8 md:mx-16 lg:mx-24 xl:mx-32">
        <div className="grid overflow-hidden gap-2">
          <div className=" mt-8 mb-24">
            {status === "loading" ? (
              <Spinner />
            ) : (
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
                {slicedCompanies
                  ?.filter((company) =>
                    company.name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  )
                  .map((company, index) => (
                    <CompanyCard key={index} company={company} />
                  ))}
              </div>
            )}

            <FrontendPagination
              companyPerPage={companyPerPage}
              totalCompanies={companies?.companies?.length}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
