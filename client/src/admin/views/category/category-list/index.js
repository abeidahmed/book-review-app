import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { useQuery } from "@apollo/react-hooks";
import { AdminLayout } from "components/layout";
import { GET_CATEGORIES } from "api/category/category-list";
import Icon from "components/icon";
import { Spinner } from "components/spinner";

const CategoryList = () => {
  const { data, loading, error } = useQuery(GET_CATEGORIES);

  if (loading || error) return <Spinner />;

  return (
    <AdminLayout>
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
            Category list
          </h2>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="shadow-sm rounded-md">
            <Link
              to="/admin/categories/add_new"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              <Icon icon="plus" className="-ml-1 mr-2 h-5 w-5" />
              Add category
            </Link>
          </span>
        </div>
      </div>

      <div className="my-16 shadow overflow-hidden sm:rounded-lg">
        <div className="align-middle inline-block w-full overflow-x-auto border-b border-gray-200">
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 whitespace-no-wrap border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 whitespace-no-wrap border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 whitespace-no-wrap border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Book count
                </th>
                <th className="px-6 py-3 whitespace-no-wrap border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Posted on
                </th>
                <th className="px-6 py-3 whitespace-no-wrap border-b border-gray-200 bg-gray-50"></th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {data.categories.map(category => (
                <tr key={category._id}>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <p className="text-sm leading-5 text-gray-900">{category.title}</p>
                  </td>
                  <td className="px-6 py-4 max-w-xs truncate border-b border-gray-200 text-sm leading-5 text-gray-500">
                    {category.description}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                    {category.bookCount}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                    {moment(category.createdAt).format("Do MMM, YYYY")}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                    <a href="/" className="text-indigo-600 hover:text-indigo-900">
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default CategoryList;
