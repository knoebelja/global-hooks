import React from "react";

import useCount from "../hooks/useCount";

const ResetCountButton = () => {
  const { resetCount } = useCount();
  return <button onClick={resetCount}>Reset Count</button>;
};

export default ResetCountButton;
