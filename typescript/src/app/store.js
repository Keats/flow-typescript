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
import routes from "./routes";


const reducer = combineReducers({
  router: routerStateReducer,
  ...reducers,
});
const middlewares = [thunk];


let finalCreateStore;

const reduxRouter = reduxReactRouter({
  routes,
  createHistory,
});

if (__PRODUCTION__) {
  finalCreateStore = compose(
    applyMiddleware(...middlewares),
    reduxRouter
  )(createStore);
} else {
  const { devTools, persistState } = require("redux-devtools");
  finalCreateStore = compose(
    applyMiddleware(...middlewares),
    reduxRouter,
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&])\b/))
  )(createStore);
}

export default function configureStore(initialState) {
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


