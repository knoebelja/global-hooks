import * as constants from "./constants";

/**
 * ACTIONS
 */

export const data = payload => {
    return { type: constants.SET_DATA, payload };
};

export const word = payload => {
    return { type: constants.SET_WORD, payload };
};
