import React from "react";
import Icon from "components/icon";
import LogoFull from "assets/logo/logo-full.svg";
import SidebarLink from "./components/link";

const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen border-r bg-white flex-shrink-0">
      <div className="h-16 flex items-center justify-between px-3">
        <img className="h-8 w-auto" src={LogoFull} alt="logo" />
        <button className="p-1 -mr-2 rounded-md text-gray-700 focus:outline-none focus:text-gray-900 focus:bg-gray-200 transition duration-150 ease-in-out">
          <Icon icon="close" className="h-6 w-6" />
        </button>
      </div>
      <div>
        <SidebarLink />
      </div>
    </aside>
  );
};

export default Sidebar;
