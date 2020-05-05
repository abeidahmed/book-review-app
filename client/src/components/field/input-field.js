import React from "react";
import { fieldValidation } from "utils/field-validation";

export const InputField = ({ label, id, error, errorType, ...props }) => {
  return (
    <>
      <label htmlFor={id} className="text-sm text-gray-700 font-medium">
        {label}
      </label>
      <input
        id={id}
        className={`form-input ${fieldValidation(error, errorType) &&
          "form-input-error"} mt-1 block w-full px-3 py-2 shadow-sm`}
        {...props}
      />
      {fieldValidation(error, errorType) && (
        <p className="mt-1 text-sm font-medium text-red-700">{fieldValidation(error, errorType)}</p>
      )}
    </>
  );
};
