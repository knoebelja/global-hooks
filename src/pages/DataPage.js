import React from "react";

import useData from "../hooks/useData";
import DataGetButton from "../components/DataGetButton";
import DataClearButton from "../components/DataClearButton";

const DataPage = () => {
    const { data } = useData();
    return (
        <div>
            <p>Status: {data.status}</p>
            <p>Url: {data.url}</p>
            <DataGetButton />
            <DataClearButton />
        </div>
    );
};

export default DataPage;
