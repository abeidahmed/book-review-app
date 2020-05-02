import React from "react";
import { Route, Switch } from "react-router-dom";
import BookList from "admin/views/book/book-list";
import CategoryList from "admin/views/category/category-list";
import Dashboard from "admin/views/dashboard";
import Header from "admin/views/header";
import Sidebar from "admin/views/sidebar";

const AdminRoute = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full flex flex-col">
        <Header />
        <Switch>
          <Route path="/admin/books" component={BookList} />
          <Route path="/admin/dashboard" component={Dashboard} />
          <Route path="/admin/categories" component={CategoryList} />
        </Switch>
      </div>
    </div>
  );
};

export default AdminRoute;
