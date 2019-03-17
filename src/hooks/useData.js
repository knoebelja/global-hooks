import axios from "axios";

import { useStore } from "../store";
import { initialState } from "../store/reducer";

const useData = () => {
  const [data, setData] = useStore("data");
  let loadingMessage = "";
  return {
    data,
    fetchGetResponse: async () => {
      try {
        const GET_RESPONSE = "GET_RESPONSE";
        loadingMessage = GET_RESPONSE;
        const res = await axios.get("https://httpbin.org/get");
        if (loadingMessage === GET_RESPONSE)
          setData({ status: res.status, url: res.data.url });
        loadingMessage = "";
      } catch (err) {
        console.error(err);
      }
    },
    fetchPostResponse: async () => {
      try {
        const POST_RESPONSE = "POST_RESPONSE";
        loadingMessage = POST_RESPONSE;
        const res = await axios.post("https://httpbin.org/post");
        if (loadingMessage === POST_RESPONSE)
          setData({ status: res.status, url: res.data.url });
        loadingMessage = "";
      } catch (err) {
        console.error(err);
      }
    },
    clearData: () => {
      setData(initialState.data);
      loadingMessage = "";
    }
  };
};

export default useData;
