import React, { createContext, useContext, useReducer } from "react";

import reducer, { initialState } from "./reducer";

const globalStateContext = createContext(initialState);
const globalDispatchContext = createContext(null);

/**
 * GLOBAL HOOKS
 * grab and update global state anywhere
 */

export const useGlobalState = key => {
  return useContext(globalStateContext)[key];
};

export const useGlobalDispatch = () => {
  return useContext(globalDispatchContext);
};

/**
 * GLOBAL STORE PROVIDER
 * provides global state everywhere
 */

const GlobalStoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <globalStateContext.Provider value={state}>
      <globalDispatchContext.Provider value={dispatch}>
        {children}
      </globalDispatchContext.Provider>
    </globalStateContext.Provider>
  );
};

export default GlobalStoreProvider;
