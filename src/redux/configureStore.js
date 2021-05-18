import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";

import createReducer from "./reducers";

export default function configureStore() {
  const middlewares = [thunkMiddleware, logger];

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(createReducer(), compose(...enhancers));

  return store;
}
