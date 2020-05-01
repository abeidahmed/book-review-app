import React from "react";
import { Link } from "react-router-dom";
import LogoDark from "assets/logo/logo-full.svg";
import LogoMark from "assets/logo/logo-mark.svg";

const Logo = () => {
  return (
    <div className="flex-shrink-0">
      <Link to="/" className="block lg:hidden">
        <img className="h-8 w-auto" src={LogoMark} alt="logo" />
      </Link>
      <Link to="/" className="hidden lg:block">
        <img className="h-8 w-auto" src={LogoDark} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
