import React from "react";
import Icon from "components/icon";

const Header = () => {
  return (
    <header className="px-4 bg-white h-16 flex items-center shadow">
      <button className="lg:hidden p-1 -ml-2 rounded-md text-gray-700 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition duration-150 ease-in-out">
        <Icon icon="menu" className="h-6 w-6" />
      </button>
      <h1>Dashboard</h1>
    </header>
  );
};

export default Header;
