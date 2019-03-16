import * as constants from "./constants";

/**
 * INITIAL STATE
 * of the Store Provider
 */

export const initialState = {
  count: 0,
  word: "blank",
  data: {
    status: "NONE",
    data: {}
  }
};

/**
 * REDUCER
 * updates store via actions
 */

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.CHANGE_COUNT:
      return { ...state, count: action.payload };
    case constants.CHANGE_WORD:
      return { ...state, word: action.payload };
    case constants.CHANGE_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default reducer;
