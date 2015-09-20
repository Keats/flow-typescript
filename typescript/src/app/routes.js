// There to appease react/react-in-jsx-scope rule
import React from "react";

import { Route } from "react-router";

import App from "./components/app";

const routes = (
  <Route path="/" component={App}>
    <Route path="about" component={App} />
  </Route>
);

export default routes;
