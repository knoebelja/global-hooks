import { useStore } from "../store";

const useWord = () => {
  const [word, setWord] = useStore("word");
  return {
    word,
    changeWord: newWord => {
      setWord(newWord);
    },
    clearWord: () => {
      setWord("");
    }
  };
};

export default useWord;
