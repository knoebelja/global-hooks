import axios from "axios";

import { useStore } from "../store";
import { initialState } from "../store/reducer";

const useData = () => {
  const [data, setData] = useStore("data");
  const dataMethods = {
    getData: async () => {
      try {
        const res = await axios.get("https://httpbin.org/get");
        setData({ status: res.status, url: res.data.url });
      } catch (err) {
        console.error(err);
      }
    },
    postData: async () => {
      try {
        const res = await axios.post("https://httpbin.org/post");
        setData({ status: res.status, url: res.data.url });
      } catch (err) {
        console.error(err);
      }
    },
    clearData: () => {
      setData(initialState.data);
    }
  };
  return { data, ...dataMethods };
};

export default useData;
