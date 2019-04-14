import * as constants from "./constants";

/**
 * ACTIONS
 */

export function count({ payload }) {
  return { type: constants.SET_COUNT, payload };
}

export function data({ payload }) {
  return { type: constants.SET_DATA, payload };
}

export function word({ payload }) {
  return { type: constants.SET_WORD, payload };
}
