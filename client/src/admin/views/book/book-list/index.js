import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { useQuery } from "@apollo/react-hooks";
import { AdminLayout } from "components/layout";
import { GET_BOOKS } from "api/book/book-list";
import Icon from "components/icon";
import { Spinner } from "components/spinner";

const BookList = () => {
  const { data, loading, error } = useQuery(GET_BOOKS);

  if (loading || error) return <Spinner />;

  const bookAuthors = authors => {
    let authorName = [];
    for (let author of authors) {
      authorName.push(author.name);
    }
    return authorName.join(", ");
  };

  return (
    <AdminLayout>
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
            Book list
          </h2>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="shadow-sm rounded-md">
            <Link
              to="/admin/books/add_new"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              <Icon icon="plus" className="-ml-1 mr-2 h-5 w-5" />
              Add book
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
                  Author
                </th>
                <th className="px-6 py-3 whitespace-no-wrap border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 whitespace-no-wrap border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Posted on
                </th>
                <th className="px-6 py-3 whitespace-no-wrap border-b border-gray-200 bg-gray-50"></th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {data.books.map(book => (
                <tr key={book._id}>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <p className="text-sm max-w-xs truncate leading-5 text-gray-900">
                      {book.title}
                    </p>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                    <span className="truncate max-w-xs">{bookAuthors(book.authors)}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {book.category.title}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                    {moment(book.createdAt).format("Do MMM, YYYY")}
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

export default BookList;
