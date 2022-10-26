import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchCompanies,
  fetchAdvocates,
} from "../features/advocates/advocatesSlice";
import { useDispatch, useSelector } from "react-redux";
import { FiTwitter } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

const CompanyDetail = () => {
  const dispatch = useDispatch();
  const { username } = useParams();
  const { companies, advocates } = useSelector((state) => state.advocates);

  const company = companies?.companies?.find(
    (company) => company.username === username
  );

  useEffect(() => {
    dispatch(fetchCompanies());
    dispatch(fetchAdvocates());
  }, [dispatch]);

  return (
    <div className="pt-32 bg-slate-100 h-screen">
      <div class="grid overflow-hidden grid-cols-6 grid-rows-2 gap-2 mx-32">
        <div className="box col-span-2">
          <div className="border rounded-lg bg-white border-gray-800">
            <div className="flex flex-col">
              <img
                src={company?.logo}
                alt=""
                className="mx-auto w-48 h-48 rounded-xl my-8"
              />

              <h1 className="text-center text-3xl font-Inter font-medium">
                {company?.name}
              </h1>
              <div className="flex items-center justify-center mt-4">
                <a href={company?.twitter} className="mr-6">
                  <FiTwitter className="text-3xl" />
                </a>
                <a href={company?.linkedin}>
                  <CiLinkedin className="text-4xl" />
                </a>
              </div>
              <p className="my-5 text-justify indent-4 mx-8">{company?.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;
