import React from "react";

const ProfileLink = ({ logout }) => {
  const handleLogout = () => {
    logout();
  };

  return (
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
      <button
        onClick={handleLogout}
        className="w-full text-left block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
      >
        Sign out
      </button>
    </div>
  );
};

export default ProfileLink;
