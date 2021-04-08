import React from 'react';
import { Route, Switch, Link, NavLink, Redirect } from "react-router-dom";
import { Login } from "../component/Login/LoginComponent";
import Register from "../component/Register/RegisterComponent";
import Home from "../component/Home/HomeComponent";
function Router() {
  return (
    <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home} />
    </Switch>
  );
}

export default Router;

