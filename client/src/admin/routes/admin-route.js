import React from "react";
import { Route, Switch } from "react-router-dom";
import BookList from "admin/views/book/book-list";
import Dashboard from "admin/views/dashboard";
import Sidebar from "admin/views/sidebar";

const AdminRoute = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Switch>
          <Route path="/admin/books" component={BookList} />
          <Route path="/admin/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </div>
  );
};

export default AdminRoute;
