import axios from "axios";
import { useState } from "react";

const useData = () => {
    const [data, setData] = useState({ status: "", url: "" });

    const getData = async () => {
        try {
            const res = await axios.get("https://httpbin.org/get");
            setData({ status: res.status, url: res.data.url });
        } catch (err) {
            console.error(err);
        }
    };

    const clearData = () => {
        setData({ status: "", url: "" });
    };

    return { data, getData, clearData };
};

export default useData;
