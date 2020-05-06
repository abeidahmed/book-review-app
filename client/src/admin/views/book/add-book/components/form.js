import React from "react";
import Icon from "components/icon";
import { InputField } from "components/field";

const Form = () => {
  return (
    <div className="mt-5 md:flex md:mt-8 md:-ml-6">
      <div className="max-w-md md:w-1/3 xl:max-w-md md:px-6">
        <h2 className="text-gray-900 text-lg font-semibold">Book</h2>
        <p className="mt-2 text-sm text-gray-500 lg:text-base">
          Add a book that people would like to read.
        </p>
      </div>
      <div className="shadow mt-5 bg-white rounded-md p-4 md:mt-0 md:w-2/3 md:p-6">
        <div>
          <InputField id="add_book_title" label="Title" type="text" placeholder="Eg: Alchemist" />
        </div>
        <div className="lg:flex lg:-mx-3">
          <div className="mt-4 lg:px-3 lg:w-1/2">
            <label className="block text-sm text-gray-700 font-medium">
              <span className="text-gray-700">Select author</span>
              <select className="form-select mt-1 block w-full">
                <option>Paulo Coelho</option>
                <option>Abeid Ahmed</option>
                <option>Ujin Tamang</option>
                <option>Suhail Ahmed</option>
              </select>
            </label>
          </div>
          <div className="mt-4 lg:px-3 lg:w-1/2">
            <label className="block text-sm text-gray-700 font-medium">
              <span className="text-gray-700">Book category</span>
              <select className="form-select mt-1 block w-full">
                <option>Horror</option>
                <option>Thriller</option>
                <option>Science</option>
                <option>Fiction</option>
              </select>
            </label>
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="add_book_description" className="text-sm text-gray-700 font-medium">
            Description
          </label>
          <textarea
            rows="4"
            id="add_book_description"
            type="text"
            placeholder="Write a short description about the book"
            className="form-textarea mt-1 block w-full px-3 py-2 shadow-sm"
          />
        </div>
        <div className="mt-4 border-2 border-dashed rounded-md">
          <label htmlFor="add_book_file_upload" className="cursor-pointer">
            <p className="py-6 px-3 flex flex-col items-center justify-center text-center">
              <Icon icon="add-image" className="w-10 h-10 text-gray-400" />
              <span className="mt-1 text-sm text-gray-500">
                <span className="block font-medium text-gray-600">
                  <span className="text-indigo-600">Upload a file</span> or drag and drop
                </span>
                <span className="mt-1 block">JPG, JPEG upto 1MB</span>
              </span>
            </p>
          </label>
          <input id="add_book_file_upload" type="file" className="hidden" />
        </div>
      </div>
    </div>
  );
};

export default Form;
