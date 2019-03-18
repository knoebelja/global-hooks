import React from "react";

import useCount from "../hooks/useCount";

const CountDecreaseButton = () => {
  const { decreaseCount } = useCount();
  return <button onClick={decreaseCount}>Decrease Count</button>;
};

export default CountDecreaseButton;
