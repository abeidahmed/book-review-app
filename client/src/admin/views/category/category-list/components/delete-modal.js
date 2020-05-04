import React, { useContext } from "react";
import Icon from "components/icon";
import { ModalProvider } from "App";

const DeleteCategory = () => {
  const { modalState, dispatch } = useContext(ModalProvider);

  const isActive = modalState.modalType === "DELETE_CATEGORY" ? true : false;

  return (
    <div
      className={`${
        isActive ? "block" : "hidden"
      } z-100 fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center`}
    >
      <div className="fixed inset-0 transition-opacity">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <Icon className="h-6 w-6 text-red-600" icon="alert" />
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Deactivate account</h3>
              <div className="mt-2">
                <p className="text-sm leading-5 text-gray-500">
                  Are you sure you want to deactivate your account? All of your data will be
                  permanantly removed. This action cannot be undone.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
            >
              Delete
            </button>
          </span>
          <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
            <button
              type="button"
              onClick={() => dispatch({ type: "CLOSE_MODAL" })}
              className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline transition ease-in-out duration-150 sm:text-sm sm:leading-5"
            >
              Cancel
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DeleteCategory;
