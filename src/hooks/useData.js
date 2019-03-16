import axios from "axios";

import { useStore } from "../store";
import { changeData } from "../store/actions";
import { initialState } from "../store/reducer";

const useData = () => {
  const [data, setData] = useStore("data", changeData);
  return {
    data,
    fetchGetRequest: async () => {
      try {
        const res = await axios.get("https://httpbin.org/get");
        setData(res);
      } catch (err) {
        console.error(err);
      }
    },
    fetchPostRequest: async () => {
      try {
        const res = await axios.post("https://httpbin.org/post");
        setData(res);
      } catch (err) {
        console.error(err);
      }
    },
    clearData: () => {
      setData(initialState.data);
    }
  };
};

export default useData;
