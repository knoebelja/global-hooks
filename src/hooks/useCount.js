import { useStore } from "../store";
import { changeCount } from "../store/actions";

const useCount = () => {
  const [count, setCount] = useStore("count", changeCount);
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
