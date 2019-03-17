import React, { createContext, useContext, useReducer } from "react";

import * as actions from "./actions";
import reducer, { initialState } from "./reducer";
import withMiddleware from "./middleware";

const StateContext = createContext(null);
const DispatchContext = createContext(null);

/**
 * STORE HOOK
 * grab and update  state anywhere
 */

export const useStore = key => {
  const value = useContext(StateContext)[key];
  const dispatch = useContext(DispatchContext);
  function setValue(value) {
    return dispatch(actions[key](value));
  }
  return [value, setValue];
};

/**
 * STORE PROVIDER
 * provides context for state and dispatch
 */

export default function StoreProvider({ children }) {
  const [state, dispatch] = withMiddleware(useReducer(reducer, initialState));
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}
