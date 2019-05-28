import { createStore, applyMiddleware } from "redux";
import penderMiddleware from "redux-pender";
import ReduxThunk from "redux-thunk";
import modules from "./modules";

const configureStore = initialState => {
  const store = createStore(
    modules,
    applyMiddleware(ReduxThunk, penderMiddleware())
  );
  return store;
};

export default configureStore;
