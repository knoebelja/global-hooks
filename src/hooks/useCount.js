import { useStore } from "../store";

const useCount = () => {
  const [count, setCount] = useStore("count");
  return {
    count,
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
};

export default useCount;
