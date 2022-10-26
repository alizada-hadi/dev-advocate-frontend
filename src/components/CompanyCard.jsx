import React from "react";
import { HiOutlineUserGroup } from "react-icons/hi";
import { Link } from "react-router-dom";

const CompanyCard = ({ company }) => {
  return (
    <Link to={`/company/${company.username}`}>
      <div className="border rounded-lg shadow-md hover:shadow-none">
        <img
          src={company.logo}
          alt=""
          className="w-32 h-32 rounded-full mx-auto my-3"
        />
        <span className="flex items-center justify-between px-2 py-1 bg-gray-300 w-16 mx-auto rounded-xl">
          <HiOutlineUserGroup className="text-xl" />
          <span>{company?.advocates?.length}</span>
        </span>
        <div className="flex flex-col mx-8">
          <h1 className="text-center mt-3 text-xl">{company?.name}</h1>
          <p className="my-3 text-md indent-4">
            {company?.bio.substring(0, 100)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CompanyCard;
