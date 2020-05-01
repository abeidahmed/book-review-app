import React from "react";
import { Link } from "react-router-dom";

const MobileLink = () => {
  return (
    <div className="px-2 pt-2 pb-3">
      <a
        href="/"
        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 transition duration-150 ease-in-out"
      >
        Dashboard
      </a>
      <a
        href="/"
        className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-600 transition duration-150 ease-in-out"
      >
        Team
      </a>
      <a
        href="/"
        className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-600 transition duration-150 ease-in-out"
      >
        Projects
      </a>
      <a
        href="/"
        className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-600 transition duration-150 ease-in-out"
      >
        Calendar
      </a>
      <Link
        to="/sign_up"
        className="mt-3 block px-3 py-2 rounded-md text-center text-base font-medium text-white bg-indigo-600 focus:bg-indigo-700 transition duration-150 ease-in-out"
      >
        Sign up
      </Link>
    </div>
  );
};

export default MobileLink;
