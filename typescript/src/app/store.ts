import {
  createStore, applyMiddleware, combineReducers, compose
} from "redux";
import {
  routerStateReducer,
  reduxReactRouter
} from "redux-router";
const createHistory = require("history/lib/createBrowserHistory");

import * as reducers from "./reducers/index";


declare var __PRODUCTION__: boolean;
declare var module: any;


const reducer = combineReducers({
  router: routerStateReducer,
  lists: reducers.lists,
  cards: reducers.cards
});
const middlewares: any = [];

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

export default function configureStore(initialState?: any) {
  const store = finalCreateStore(reducer, initialState);

  if (module.hot) {
    // enable Webpack hot module replacement for reducers
    module.hot.accept("./reducers", () => {
      const nextReducer = require("./reducers");
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
