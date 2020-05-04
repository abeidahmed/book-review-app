import React, { useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminRoute from "admin/routes/admin-route";
import ModalRoot from "components/modal/modal-parent";
import PublicRoute from "routes/public-route";

const modalReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        modalType: action.modalType,
        modalProps: action.modalProps
      };
    case "CLOSE_MODAL":
      return {
        modalType: "",
        modalProps: {}
      };

    default:
      return state;
  }
};

const initialState = {
  modalType: "",
  modalProps: {}
};

export const ModalProvider = React.createContext(initialState);

export default function App() {
  const [modalState, dispatch] = useReducer(modalReducer, initialState);
  return (
    <ModalProvider.Provider value={{ modalState, dispatch }}>
      <ModalRoot />
      <Router>
        <Switch>
          <Route path="/admin" component={AdminRoute} />
          <Route path="/" component={PublicRoute} />
        </Switch>
      </Router>
    </ModalProvider.Provider>
  );
}
