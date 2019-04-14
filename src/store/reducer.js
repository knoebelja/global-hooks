import * as constants from "./constants";

/**
 * INITIAL STATE
 * of the Store Provider
 */

export const initialState = {
  count: 0,
  data: { method: "N/A", url: "N/A" },
  word: ""
};

/**
 * REDUCER
 * updates store via actions
 */

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.SET_COUNT:
      return { ...state, count: action.payload };
    case constants.SET_DATA:
      return { ...state, data: action.payload };
    case constants.SET_WORD:
      return { ...state, word: action.payload };
    default:
      return state;
  }
}
