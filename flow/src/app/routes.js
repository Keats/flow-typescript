/* @flow */
// There to appease react/react-in-jsx-scope rule
import React from "react";

import { Route, IndexRoute } from "react-router";

import AppRoute from "./components/AppRoute";
import DashboardRoute from "./components/DashboardRoute";
import AboutRoute from "./components/AboutRoute";


const routes = (
  <Route path="/" component={AppRoute}>
    <IndexRoute component={DashboardRoute} />
    <Route path="about" component={AboutRoute} />
  </Route>
);

export default routes;
