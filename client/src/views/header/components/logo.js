import React from "react";
import LogoDark from "assets/logo/logo-dark.svg";
import LogoMark from "assets/logo/logo-mark.svg";

const Logo = () => {
  return (
    <div className="flex-shrink-0">
      <img className="block lg:hidden h-8 w-auto" src={LogoMark} alt="logo" />
      <img className="hidden lg:block h-8 w-auto" src={LogoDark} alt="logo" />
    </div>
  );
};

export default Logo;
