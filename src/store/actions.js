import * as constants from "./constants";

/**
 * ACTIONS
 */

export const changeCount = payload => {
  return { type: constants.CHANGE_COUNT, payload };
};

export const changeWord = payload => {
  return { type: constants.CHANGE_WORD, payload };
};

export const changeData = payload => {
  return { type: constants.CHANGE_DATA, payload };
};
