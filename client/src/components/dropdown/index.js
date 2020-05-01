import React, { useRef } from "react";
import { useOnOutsideClick } from "utils/on-outside-click";

export const Dropdown = ({ isActive, onOutsideClick, children }) => {
  const ref = useRef();

  useOnOutsideClick(ref, onOutsideClick);

  return (
    <div
      ref={ref}
      className={`${
        isActive ? "block" : "hidden"
      } origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg`}
    >
      {children}
    </div>
  );
};
