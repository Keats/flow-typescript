// https://github.com/palantir/tslint/issues/689
// TODO: can be removed with tslint 3.0
/* tslint:disable:no-unused-variable */
import * as React from "react";
/* tslint:enable:no-unused-variable */

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
