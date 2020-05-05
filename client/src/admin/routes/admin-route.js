import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import AddBook from "admin/views/book/add-book";
import AddCategory from "admin/views/category/add-category";
import BookList from "admin/views/book/book-list";
import CategoryList from "admin/views/category/category-list";
import Dashboard from "admin/views/dashboard";
import Header from "admin/views/header";
import Sidebar from "admin/views/sidebar";
import UserList from "admin/views/user/user-list";

const AdminRoute = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  return (
    <div className="flex">
      <Sidebar sidebarActive={sidebarActive} setSidebarActive={setSidebarActive} />
      <div className="w-full flex flex-col">
        <Header setSidebarActive={setSidebarActive} />
        <Switch>
          <Route exact path="/admin/books" component={BookList} />
          <Route path="/admin/books/add_new" component={AddBook} />
          <Route path="/admin/dashboard" component={Dashboard} />
          <Route exact path="/admin/categories" component={CategoryList} />
          <Route path="/admin/categories/add_new" component={AddCategory} />
          <Route path="/admin/users" component={UserList} />
        </Switch>
      </div>
    </div>
  );
};

export default AdminRoute;
