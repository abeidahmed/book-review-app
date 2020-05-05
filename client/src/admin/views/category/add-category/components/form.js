import React from "react";
import { InputField } from "components/field";

const Form = ({ error, title, setTitle, description, setDescription }) => {
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
          <InputField
            id="add_category_title"
            label="Title"
            error={error}
            errorType="Category"
            type="text"
            placeholder="Eg: Thriller"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="add_category_description" className="text-sm text-gray-700 font-medium">
            Description
          </label>
          <textarea
            rows="4"
            id="add_category_description"
            type="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Write a short description about the category"
            className="form-textarea mt-1 block w-full px-3 py-2 shadow-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
