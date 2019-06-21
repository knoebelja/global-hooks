import axios from "axios";

import { useStore } from "../store";
import { initialState } from "../store/reducer";

const useData = () => {
    const [data, setData] = useStore("data");

    const getData = async () => {
        try {
            const res = await axios.get("https://httpbin.org/get");
            setData({ status: res.status, url: res.data.url });
        } catch (err) {
            console.error(err);
        }
    };

    const clearData = () => {
        setData(initialState.data);
    };

    return { data, getData, clearData };
};

export default useData;
