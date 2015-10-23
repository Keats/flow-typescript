/* @flow */
import {
  createStore, applyMiddleware, combineReducers, compose,
} from "redux";
import {
  routerStateReducer,
  reduxReactRouter,
} from "redux-router";
import createHistory from "history/lib/createBrowserHistory";
import thunk from "redux-thunk";

import * as reducers from "./reducers/index";


const reducer = combineReducers({
  router: routerStateReducer,
  ...reducers,
});
const middlewares = [thunk];

const reduxRouter = reduxReactRouter({ createHistory });

let finalCreateStore = compose(
  applyMiddleware(...middlewares),
  reduxRouter
)(createStore);

if (__PRODUCTION__ === false) {
  const { devTools, persistState } = require("redux-devtools");
  finalCreateStore = compose(
    applyMiddleware(...middlewares),
    reduxRouter,
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&])\b/))
  )(createStore);
}

export default function configureStore(initialState: any) {
  const store = finalCreateStore(reducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./reducers", () => {
      const nextReducer = require("./reducers");
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
