import React from "react";

const Form = () => {
  return (
    <div className="mt-5 md:flex md:mt-8 md:-ml-6">
      <div className="max-w-md md:w-1/3 xl:max-w-md md:px-6">
        <h2 className="text-gray-900 text-lg font-semibold">Category</h2>
        <p className="mt-2 text-sm text-gray-500 lg:text-base">
          Category title and description should be short and to the point.
        </p>
      </div>
      <div className="shadow mt-5 bg-white rounded-md p-4 md:mt-0 md:w-2/3 md:p-6">
        <div>
          <label htmlFor="add_category_title" className="text-sm text-gray-700 font-medium">
            Title
          </label>
          <input
            id="add_category_title"
            type="text"
            placeholder="Horror"
            className="mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="add_category_description" className="text-sm text-gray-700 font-medium">
            Description
          </label>
          <textarea
            style={{ minHeight: 150 }}
            id="add_category_description"
            type="text"
            placeholder="Horror"
            className="mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
