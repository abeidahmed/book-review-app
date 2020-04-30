import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Avatar } from "components/avatar";
import DesktopLink from "./components/desktop-link";
import Logo from "./components/logo";
import MenuButton from "./components/menu-button";
import MobileLink from "./components/mobile-link";
import ProfileLink from "./components/profile-link";

const Header = ({ location }) => {
  const [menuActive, setMenuActive] = useState(false);
  const [profileActive, setProfileActive] = useState(false);

  const url = location.pathname;
  if (url.startsWith("/sign") || url.startsWith("/login")) {
    return null;
  }

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <MenuButton toggleMenu={setMenuActive} menuState={menuActive} />
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <Logo />
            <DesktopLink />
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:block">
              <Link
                to="/sign_up"
                className="flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                Sign up
              </Link>
            </div>
            <div className="ml-5 relative">
              <Avatar toggleDropdown={setProfileActive} dropdownState={profileActive} />
              <div
                className={`${
                  profileActive ? "block" : "hidden"
                } origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg`}
              >
                <ProfileLink />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${menuActive ? "block" : "hidden"} sm:hidden`}>
        <MobileLink />
      </div>
    </nav>
  );
};

export default withRouter(Header);
