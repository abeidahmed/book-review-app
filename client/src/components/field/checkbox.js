import React from "react";

export const Checkbox = ({ title, ...props }) => {
  return (
    <label className="inline-flex items-center">
      <input type="checkbox" className="form-checkbox" {...props} />
      <span className="ml-2">{title}</span>
    </label>
  );
};
