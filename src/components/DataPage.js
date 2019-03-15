import React from "react";

import useRequest from "../hooks/useRequest";

const DataPage = () => {
  const [response, requestDispatchers] = useRequest();
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
