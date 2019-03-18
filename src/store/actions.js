import * as constants from "./constants";

/**
 * ACTIONS
 */

export const count = payload => {
  return { type: constants.SET_COUNT, payload };
};

export const word = payload => {
  return { type: constants.SET_WORD, payload };
};

export const data = payload => {
  return { type: constants.SET_DATA, payload };
};
