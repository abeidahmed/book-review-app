import React, { useContext } from "react";
import { ModalProvider } from "App";
import DeleteCategory from "admin/views/category/category-list/components/delete-modal";

const MODAL_COMPONENTS = {
  DELETE_CATEGORY: DeleteCategory
};

const ModalRoot = () => {
  const { modalState } = useContext(ModalProvider);

  const modalType = modalState.modalType;
  const modalProps = modalState.modalProps;

  if (!modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[modalType];
  return <SpecificModal {...modalProps} />;
};

export default ModalRoot;
