import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { advocateDetail } from "../features/advocates/advocatesSlice";
import Spinner from "../components/Spinner";
import { AiOutlineUser } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

const DeveloperDetail = () => {
  const dispatch = useDispatch();
  const { advocate, status } = useSelector((state) => state.advocates);

  const { username } = useParams();
  useEffect(() => {
    dispatch(advocateDetail(username));
  }, [dispatch]);
  return (
    <div className="pt-32 bg-slate-100 h-screen">
      <div className="mx-12 md:mx-24 lg:mx-32">
        {status === "loading" ? (
          <Spinner />
        ) : (
          <div className="flex flex-col border max-w-xl bg-white rounded-lg border-gray-800 shadow-md">
            <img
              src={advocate.advocate?.profile_pic}
              className="w-48 h-48 mx-auto my-8 rounded-full"
              alt=""
            />
            <h2 className="text-center mb-6 text-2xl font-Inter font-semibold">
              {advocate?.advocate?.name}
            </h2>
            <div className="flex items-center justify-between mx-32 mb-8">
              <span className="flex items-center font-bold font-Inter">
                <AiOutlineUser className="mr-2 text-2xl" />
                {advocate.advocate?.follower_count > 10000
                  ? `${advocate.advocate?.follower_count / 1000} K `
                  : advocate.advocate?.follower_count}
              </span>
              <a
                href={`${advocate?.advocate?.twitter}`}
                className="flex items-center font-bold font-Inter"
                target="_blank"
              >
                <FiTwitter className="text-2xl mr-2" />
                {advocate?.advocate?.username}
              </a>
            </div>
            <p className="mb-8 text-justify mx-12 text-lg">
              {advocate?.advocate?.bio}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeveloperDetail;
