import React from "react";

import Button from "../components/Button";
import { initialState } from "../store/reducer";
import { useStore } from "../store";

const CountPage = () => {
  const [count, setCount] = useStore("count");
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  const resetCount = () => {
    setCount(initialState.count);
  };
  return (
    <div>
      <p>Count: {count}</p>
      <Button label="Increase Count" onClick={increaseCount} />
      <Button label="Decrease Count" onClick={decreaseCount} />
      <Button label="Reset Count" onClick={resetCount} />
    </div>
  );
};

export default CountPage;
