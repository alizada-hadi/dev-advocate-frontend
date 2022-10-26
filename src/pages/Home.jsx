import React, { useEffect } from "react";
import Search from "../components/Search";
import DevloperCard from "../components/DevloperCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdvocates } from "../features/advocates/advocatesSlice";
import Pagination from "../components/Pagination";
import Spinner from "../components/Spinner";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { advocates, status } = useSelector((state) => state.advocates);

  const query = location.search;

  useEffect(() => {
    dispatch(fetchAdvocates(query));
  }, [dispatch, query]);
  return (
    <div className="bg-slate-100">
      <div className="w-full h-[28rem] bg-slate-700">
        <h1 className="text-center pt-[9rem] font-Roboto text-white text-5xl font-semibold">
          Look for <b className="uppercase">developers</b> ?
        </h1>
        <Search />
      </div>
      <div className="mx-8 md:mx-16 lg:mx-24 xl:mx-32">
        <div className="grid overflow-hidden gap-2">
          <div className=" mt-8 mb-24">
            {status === "loading" ? (
              <Spinner />
            ) : (
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
                {advocates?.advocates?.map((advocate, index) => (
                  <DevloperCard key={index} advocate={advocate} />
                ))}
              </div>
            )}

            {status === "loading" ? (
              ""
            ) : advocates?.pagination?.total_pages === 1 ? (
              ""
            ) : (
              <Pagination pagination={advocates?.pagination} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
