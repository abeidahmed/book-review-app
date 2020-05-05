import React, { useRef } from "react";
import { useOnOutsideClick } from "utils/on-outside-click";

const ModalWrapper = ({ isActive, onOutsideClick, children }) => {
  const ref = useRef();

  useOnOutsideClick(ref, onOutsideClick);

  return (
    <div
      className={`${
        isActive ? "block" : "hidden"
      } z-100 fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center`}
    >
      <div className="fixed inset-0 transition-opacity">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <div
        ref={ref}
        className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full"
      >
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
