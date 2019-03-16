import React from "react";

import useData from "../hooks/useData";

const DataPage = () => {
  const [response, requestDispatchers] = useData();
  const { fetchGetRequest, fetchPostRequest, clearData } = requestDispatchers;
  return (
    <div>
      <p>Status: {response.status}</p>
      <p>Url: {response.data.url}</p>
      <button onClick={fetchGetRequest}>Get Request</button>
      <button onClick={fetchPostRequest}>Post Request</button>
      <button onClick={clearData}>Clear Response</button>
    </div>
  );
};

export default DataPage;
