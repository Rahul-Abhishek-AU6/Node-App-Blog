import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from "../sagas";
import reducers from "../reducers";
import { POST_TYPES } from "../constants";

const { LOAD_POSTS } = POST_TYPES;

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);
store.dispatch({ type: LOAD_POSTS });

export default store;
