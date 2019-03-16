import React from "react";

import useData from "../hooks/useData";

const PostRequestButton = () => {
  const { fetchPostResponse } = useData();
  return <button onClick={fetchPostResponse}>Post Request</button>;
};

export default PostRequestButton;
