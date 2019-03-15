import { useGlobalState, useGlobalDispatch } from "../store";
import { changeCount } from "../store/actions";

const useCount = () => {
  const count = useGlobalState("count");
  const dispatch = useGlobalDispatch();
  const dispatchers = {
    increaseCount: () => {
      dispatch(changeCount(count + 1));
    },
    decreaseCount: () => {
      dispatch(changeCount(count - 1));
    },
    resetCount: () => {
      dispatch(changeCount(0));
    }
  };
  return [count, dispatchers];
};

export default useCount;
