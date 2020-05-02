import React, { useState } from "react";
import { Avatar } from "components/avatar";
import { Dropdown } from "components/dropdown";
import Icon from "components/icon";
import ProfileLink from "./components/profile-link";

const Header = ({ setSidebarActive }) => {
  const [profileActive, setProfileActive] = useState(false);

  return (
    <header className="px-4 bg-white h-16 z-40 flex items-center shadow">
      <button
        onClick={() => setSidebarActive(true)}
        className="lg:hidden p-1 -ml-2 rounded-md text-gray-700 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition duration-150 ease-in-out"
      >
        <Icon icon="menu" className="h-6 w-6" />
      </button>
      <div className="relative ml-auto">
        <Avatar toggleDropdown={setProfileActive} />
        <Dropdown isActive={profileActive} onOutsideClick={() => setProfileActive(false)}>
          <ProfileLink />
        </Dropdown>
      </div>
    </header>
  );
};

export default Header;
