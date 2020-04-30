import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "views/header";
import Home from "views/home";
import Login from "views/login";
import Register from "views/register";

export default function PublicRoute() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/sign_up" component={Register} />
      </Switch>
    </div>
  );
}
