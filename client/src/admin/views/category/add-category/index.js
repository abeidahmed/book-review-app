import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { AdminLayout } from "components/layout";
import { CREATE_CATEGORY } from "api/category/create-category";
import Form from "./components/form";
import { GET_CATEGORIES } from "api/category/category-list";
import Icon from "components/icon";

const AddCategory = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const [createCategory] = useMutation(CREATE_CATEGORY, {
    update(
      cache,
      {
        data: { createCategory }
      }
    ) {
      const { categories } = cache.readQuery({ query: GET_CATEGORIES });
      cache.writeQuery({
        query: GET_CATEGORIES,
        data: { categories: categories.concat(createCategory) }
      });
    },
    onCompleted() {
      history.push("/admin/categories");
    }
  });

  const handleSubmit = async () => {
    try {
      await createCategory({
        variables: {
          title,
          description
        }
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <AdminLayout>
      <div>
        <div className="text-right">
          <span className="shadow-sm rounded-md">
            <button
              onClick={handleSubmit}
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
      />
    </AdminLayout>
  );
};

export default AddCategory;
