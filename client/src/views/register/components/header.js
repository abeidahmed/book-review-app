import React from "react";
import { Link } from "react-router-dom";
import Logo from "assets/logo/logo-mark.svg";

const Header = () => {
  return (
    <div>
      <img className="mx-auto h-12 w-auto" src={Logo} alt="Workflow" />
      <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
        Sign up and get started
      </h2>
      <p class="mt-2 text-center text-sm leading-5 text-gray-600">
        Existing user?{" "}
        <Link
          to="/login"
          class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default Header;
