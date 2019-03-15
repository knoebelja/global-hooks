import * as constants from "./constants";

/**
 * INITIAL STATE
 * of the Global State Provider
 */

export const initialState = {
  count: 0,
  word: "blank",
  response: {
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
      return { ...state, count: action.count };
    case constants.CHANGE_WORD:
      return { ...state, word: action.word };
    case constants.CHANGE_RESPONSE:
      return { ...state, response: action.response };
    default:
      return state;
  }
};

export default reducer;
