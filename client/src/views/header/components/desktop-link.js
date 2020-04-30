import React from "react";

const DesktopLink = () => {
  return (
    <div className="hidden sm:block sm:ml-6">
      <div className="flex">
        <a
          href="/"
          className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
        >
          Dashboard
        </a>
        <a
          href="/"
          className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
        >
          Team
        </a>
        <a
          href="/"
          className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
        >
          Projects
        </a>
        <a
          href="/"
          className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
        >
          Calendar
        </a>
      </div>
    </div>
  );
};

export default DesktopLink;
