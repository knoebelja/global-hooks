import axios from "axios";

import { useStore } from "../store";
import { changeData } from "../store/actions";

const useData = () => {
  const [data, setData, initialData] = useStore("data", changeData);
  return {
    data,
    fetchGetResponse: async () => {
      try {
        const res = await axios.get("https://httpbin.org/get");
        setData({ status: res.status, url: res.data.url });
      } catch (err) {
        console.error(err);
      }
    },
    fetchPostResponse: async () => {
      try {
        const res = await axios.post("https://httpbin.org/post");
        setData({ status: res.status, url: res.data.url });
      } catch (err) {
        console.error(err);
      }
    },
    clearData: () => {
      setData(initialData);
    }
  };
};

export default useData;
