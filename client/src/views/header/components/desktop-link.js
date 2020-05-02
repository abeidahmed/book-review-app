import React from "react";
import { Link } from "react-router-dom";

const DesktopLink = () => {
  return (
    <div className="hidden sm:block sm:ml-6">
      <div className="flex">
        <Link
          to="/admin/dashboard"
          className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out"
        >
          Dashboard
        </Link>
        <a
          href="/"
          className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
        >
          Team
        </a>
        <a
          href="/"
          className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
        >
          Projects
        </a>
        <a
          href="/"
          className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
        >
          Calendar
        </a>
      </div>
    </div>
  );
};

export default DesktopLink;
