import React from "react";
import Icon from "components/icon";

export const SearchField = ({ size, ...props }) => {
  return (
    <div className="relative">
      <input
        className={`${
          size === "sm" ? "h-9" : size === "lg" ? "h-10" : ""
        } block w-full form-input pl-9 pr-3 text-sm`}
        {...props}
      />
      <div className="absolute inset-y-0 flex items-center left-0 pl-3">
        <Icon icon="search" className="h-4 w-4 text-gray-500" />
      </div>
    </div>
  );
};
