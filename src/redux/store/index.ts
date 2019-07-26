import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";
import logger from "redux-logger";

const composeEnhancer =
  window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

const configureStore = (preloadedState: any) =>
  createStore(rootReducer, preloadedState, composeEnhancer(applyMiddleware(thunk, logger)));

export { configureStore };