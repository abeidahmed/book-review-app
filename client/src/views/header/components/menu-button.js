import React from "react";
import Icon from "components/icon";

const MenuButton = ({ toggleMenu, menuState }) => {
  return (
    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      <button
        onClick={() => toggleMenu(!menuState)}
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 focus:outline-none focus:bg-gray-200 focus:text-gray-900 transition duration-150 ease-in-out"
      >
        {menuState ? (
          <Icon icon="close" className="h-6 w-6" />
        ) : (
          <Icon icon="menu" className="block h-6 w-6" />
        )}
      </button>
    </div>
  );
};

export default MenuButton;
