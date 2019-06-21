import * as constants from "./constants";

/**
 * INITIAL STATE
 * of the Store Provider
 */
export const initialState = {
    data: {
        status: null,
        url: null
    },
    word: ""
};

/**
 * REDUCER
 * updates store via actions
 */
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.SET_WORD:
            return { ...state, word: action.payload };
        case constants.SET_DATA:
            return { ...state, data: action.payload };
        default:
            return state;
    }
};

export default reducer;
