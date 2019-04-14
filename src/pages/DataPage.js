import React, { useState } from "react";

import Button from "../components/Button";
import makeFetcher from "../util/fetch";
import { initialState } from "../store/reducer";
import { useStore } from "../store";

const DataPage = () => {
  const [data, setData] = useStore("data");
  const get = makeFetcher("get", setData);
  const post = makeFetcher("post", setData);
  const clearData = () => {
    setData(initialState.data);
  };
  return (
    <div>
      <p>Status: {data.status}</p>
      <p>Url: {data.url}</p>
      <Button label="GET Request" onClick={get} />
      <Button label="POST Request" onClick={post} />
      <Button label="Clear Response" onClick={clearData} />
    </div>
  );
};

export default DataPage;
