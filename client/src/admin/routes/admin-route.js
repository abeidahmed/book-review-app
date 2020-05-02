import React from "react";
import { Route, Switch } from "react-router-dom";
import BookList from "admin/views/book/book-list";
import Dashboard from "admin/views/dashboard";

const AdminRoute = () => {
  return (
    <Switch>
      <Route exact path="/admin/books" component={BookList} />
      <Route exact path="/admin" component={Dashboard} />
    </Switch>
  );
};

export default AdminRoute;
