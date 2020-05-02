import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "admin/views/dashboard";

const AdminRoute = () => {
  return (
    <Switch>
      <Route path="/admin" component={Dashboard} />
    </Switch>
  );
};

export default AdminRoute;
