import React from "react";
import { useApolloClient } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";

const ProfileLink = () => {
  const client = useApolloClient();
  const history = useHistory();

  const handleLogout = () => {
    client.writeData({ data: { isLoggedIn: false } });
    localStorage.removeItem("token");
    history.push("/");
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
