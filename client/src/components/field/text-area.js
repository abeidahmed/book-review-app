import React from "react";
import { fieldValidation } from "utils/field-validation";

export const TextArea = ({ error, errorType, ...props }) => {
  return (
    <>
      <textarea
        className={`${
          fieldValidation(error, errorType)
            ? "border-red-600"
            : "border-transparent focus:border-gray-300"
        } block w-full py-3 px-3 text-base resize-none border focus:outline-none`}
        {...props}
      />
      {fieldValidation(error, errorType) && (
        <p className="mt-1 text-sm font-medium text-red-700">{fieldValidation(error, errorType)}</p>
      )}
    </>
  );
};
