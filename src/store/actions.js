import * as constants from "./constants";

/**
 * ACTIONS
 */

export const changeCount = count => {
  return { type: constants.CHANGE_COUNT, count };
};

export const changeWord = word => {
  return { type: constants.CHANGE_WORD, word };
};

export const changeResponse = response => {
  return { type: constants.CHANGE_RESPONSE, response };
};
