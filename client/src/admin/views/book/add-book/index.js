import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { AdminLayout } from "components/layout";
import { CREATE_BOOK } from "api/book/create-book";
import Form from "./components/form";
import { GET_BOOKS } from "api/book/book-list";
import Icon from "components/icon";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [authorIds, setAuthorIds] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();

  const [addBook, { loading }] = useMutation(CREATE_BOOK, {
    update(cache, { data: addBook }) {
      const { books } = cache.readQuery({ query: GET_BOOKS });
      cache.writeQuery({
        query: GET_BOOKS,
        data: { books: books.concat(addBook) }
      });
    },
    onCompleted() {
      history.push("/admin/books");
    }
  });

  const handleSubmit = async () => {
    try {
      await addBook({
        variables: {
          title,
          description,
          categoryId,
          authorIds
        }
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <AdminLayout className="p-0">
      <div className="bg-white px-6 border-b border-gray-200 py-3">
        <div className="text-right">
          <span className="shadow-sm rounded-md">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              <Icon icon="plus" className="-ml-1 mr-2 h-5 w-5" />
              Publish
            </button>
          </span>
        </div>
      </div>
      <Form
        error={error}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        authorIds={authorIds}
        setAuthorIds={setAuthorIds}
        categoryId={categoryId}
        setCategoryId={setCategoryId}
      />
    </AdminLayout>
  );
};

export default AddBook;
