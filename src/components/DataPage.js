import React from "react";

import useData from "../hooks/useData";

const DataPage = () => {
  const { data, fetchGetRequest, fetchPostRequest, clearData } = useData();
  return (
    <div>
      <p>Status: {data.status}</p>
      <p>Url: {data.data.url}</p>
      <button onClick={fetchGetRequest}>Get Request</button>
      <button onClick={fetchPostRequest}>Post Request</button>
      <button onClick={clearData}>Clear Response</button>
    </div>
  );
};

export default DataPage;
