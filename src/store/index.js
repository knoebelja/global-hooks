import React, { createContext, useContext, useReducer } from "react";

import reducer, { initialState } from "./reducer";
import withMiddleware from "./middleware";

const StateContext = createContext(initialState);
const DispatchContext = createContext(null);

/**
 * STORE HOOK
 * grab and update  state anywhere
 */

export const useStore = (key, action) => {
  const state = useContext(StateContext)[key];
  const dispatch = useContext(DispatchContext);
  const setState = value => {
    return dispatch(action(value));
  };
  return [state, setState];
};

/**
 * STORE PROVIDER
 * provides context for state and dispatch
 */

const StoreProvider = ({ children }) => {
  const [state, dispatch] = withMiddleware(useReducer(reducer, initialState));
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default StoreProvider;
