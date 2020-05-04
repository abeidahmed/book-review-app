import React from "react";
import { AdminLayout } from "components/layout";
import Form from "./components/form";
import Icon from "components/icon";

const AddCategory = () => {
  return (
    <AdminLayout>
      <div>
        <div className="text-right">
          <span className="shadow-sm rounded-md">
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out">
              <Icon icon="plus" className="-ml-1 mr-2 h-5 w-5" />
              Publish
            </button>
          </span>
        </div>
      </div>
      <Form />
    </AdminLayout>
  );
};

export default AddCategory;
