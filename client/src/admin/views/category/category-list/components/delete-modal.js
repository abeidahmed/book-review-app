import React, { useContext } from "react";
import { useMutation } from "@apollo/react-hooks";
import { DELETE_CATEGORY } from "api/category/delete-category";
import { DeleteModal } from "components/modal/modal-type";
import { GET_CATEGORIES } from "api/category/category-list";
import { ModalProvider } from "App";
import { Spinner } from "components/spinner";

const DeleteCategory = () => {
  const { modalState, dispatch } = useContext(ModalProvider);

  const [deleteCategory, { loading, error }] = useMutation(DELETE_CATEGORY, {
    update(
      cache,
      {
        data: { deleteCategory }
      }
    ) {
      const { categories } = cache.readQuery({ query: GET_CATEGORIES });
      cache.writeQuery({
        query: GET_CATEGORIES,
        data: { categories: categories.filter(category => category._id !== deleteCategory) }
      });
    },
    onCompleted() {
      handleClose();
    }
  });

  const handleDelete = () => {
    deleteCategory({
      variables: {
        id: modalState.modalProps
      }
    });
  };

  const handleClose = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const isActive = modalState.modalType === "DELETE_CATEGORY" ? true : false;

  if (error) return <Spinner />;

  return (
    <DeleteModal
      isActive={isActive}
      handleClose={handleClose}
      handleDelete={handleDelete}
      loading={loading}
      title="Delete Category"
      description="Are you sure you want to delete this category? Once you click on delete, there's no going back."
    />
  );
};

export default DeleteCategory;
