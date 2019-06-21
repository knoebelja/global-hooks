import React from "react";

import useData from "../hooks/useData";
import Button from "../components/Button";

const DataPage = () => {
    const { data, getData, clearData } = useData();
    return (
        <div>
            <p>Status: {data.status}</p>
            <p>Url: {data.url}</p>
            <Button label="Get Data" onClick={getData} />
            <Button label="Clear Data" onClick={clearData} />
        </div>
    );
};

export default DataPage;
