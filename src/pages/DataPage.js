import React from "react";

import useData from "../hooks/useData";
import DataGetButton from "../components/DataGetButton";
import DataPostButton from "../components/DataPostButton";
import DataClearButton from "../components/DataClearButton";

const DataPage = () => {
  const { data } = useData();
  return (
    <div>
      <p>Status: {data.status}</p>
      <p>Url: {data.url}</p>
      <DataGetButton />
      <DataPostButton />
      <DataClearButton />
    </div>
  );
};

export default DataPage;
