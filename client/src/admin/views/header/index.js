import React, { useState } from "react";
import { Avatar } from "components/avatar";
import { Dropdown } from "components/dropdown";
import Icon from "components/icon";

const Header = () => {
  const [profileActive, setProfileActive] = useState(false);

  return (
    <header className="px-4 bg-white h-16 flex items-center shadow">
      <button className="lg:hidden p-1 -ml-2 rounded-md text-gray-700 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition duration-150 ease-in-out">
        <Icon icon="menu" className="h-6 w-6" />
      </button>
      <div className="relative ml-auto">
        <Avatar toggleDropdown={setProfileActive} />
        <Dropdown isActive={profileActive} onOutsideClick={() => setProfileActive(false)}>
          <div className="py-1 rounded-md bg-white shadow-xs">
            <a
              href="/"
              className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
            >
              Your Profile
            </a>
            <a
              href="/"
              className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
            >
              Settings
            </a>
            <button className="w-full text-left block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
              Sign out
            </button>
          </div>
        </Dropdown>
      </div>
    </header>
  );
};

export default Header;
