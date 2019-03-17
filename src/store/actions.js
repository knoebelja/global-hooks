import * as constants from "./constants";

/**
 * ACTIONS
 */

export const count = payload => {
  return { type: constants.CHANGE_COUNT, payload };
};

export const word = payload => {
  return { type: constants.CHANGE_WORD, payload };
};

export const data = payload => {
  return { type: constants.CHANGE_DATA, payload };
};
