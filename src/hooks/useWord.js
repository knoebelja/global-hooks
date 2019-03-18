import { useStore } from "../store";

const useWord = () => {
  const [word, setWord] = useStore("word");
  const wordMethods = {
    setWord,
    clearWord: () => {
      setWord("");
    }
  };
  return { word, ...wordMethods };
};

export default useWord;
