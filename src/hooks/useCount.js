import { useStore } from "../store";

const useCount = () => {
  const [count, setCount] = useStore("count");
  const countMethods = {
    increaseCount: () => {
      setCount(count + 1);
    },
    decreaseCount: () => {
      setCount(count - 1);
    },
    resetCount: () => {
      setCount(0);
    }
  };
  return { count, ...countMethods };
};

export default useCount;
