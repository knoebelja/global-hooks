import { applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

const logger = createLogger();

const middleware = [logger];

/**
 * WITH MIDDLEWARE
 * wraps useReducer to apply redux middleware
 */

const withMiddleware = ([state, dispatch]) => {
  const getStore = () => ({ dispatch, getState: () => state });
  const store = applyMiddleware(...middleware)(getStore)();
  return [store.getState(), store.dispatch];
};

export default withMiddleware;
