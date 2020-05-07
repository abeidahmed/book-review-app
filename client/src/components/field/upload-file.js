import React from "react";
import Icon from "components/icon";

export const UploadFile = () => {
  return (
    <>
      <label htmlFor="add_book_file_type">
        <p className="my-1 py-3 px-2 flex flex-col items-center justify-center border border-dashed border-gray-400 rounded-md cursor-pointer">
          <Icon icon="add-image" className="h-6 w-6 text-gray-500" />
          <span className="text-xs text-indigo-700 font-medium">Upload a file</span>
        </p>
      </label>
      <input type="file" id="add_book_file_type" className="hidden" />
    </>
  );
};
