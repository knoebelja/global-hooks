import axios from "axios";

import { useGlobalState, useGlobalDispatch } from "../store";
import { changeResponse } from "../store/actions";
import { initialState } from "../store/reducer";

/**
 * Hooks Example - asynchronous
 */

const useRequests = () => {
  const response = useGlobalState("response");
  const dispatch = useGlobalDispatch();
  const requestDispatchers = {
    fetchGetRequest: async () => {
      try {
        const res = await axios.get("https://httpbin.org/get");
        dispatch(changeResponse(res));
      } catch (err) {
        console.error(err);
      }
    },
    fetchPostRequest: async () => {
      try {
        const res = await axios.post("https://httpbin.org/post");
        dispatch(changeResponse(res));
      } catch (err) {
        console.error(err);
      }
    },
    clearData: () => {
      dispatch(changeResponse(initialState.response));
    }
  };
  return [response, requestDispatchers];
};

export default useRequests;
