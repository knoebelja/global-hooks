import React from "react";

import funCount from "../hooks/useCount";

const CountDecreaseButton = () => {
  const { decreaseCount } = funCount();
  return <button onClick={decreaseCount}>Decrease Count</button>;
};

export default CountDecreaseButton;
