import React from "react";
import Icon from "components/icon";

const ButtonToggle = ({ toggleDropdown, dropdownState, title, ...props }) => {
  return (
    <button
      onClick={() => toggleDropdown(!dropdownState)}
      className="text-sm text-gray-700 font-medium py-3 w-full block inline-flex items-center justify-between focus:outline-none"
      {...props}
    >
      {title}
      <span>
        <Icon
          icon="chevron-right"
          className={`h-4 w-4 text-gray-600 transform ${dropdownState &&
            "rotate-90"} transition duration-150 ease-in-out`}
        />
      </span>
    </button>
  );
};

export default ButtonToggle;
