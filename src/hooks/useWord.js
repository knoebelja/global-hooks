import { useStore } from "../store";

const useWord = () => {
    const [word, setWord] = useStore("word");

    const clearWord = () => {
        setWord("");
    };

    return { word, setWord, clearWord };
};

export default useWord;
