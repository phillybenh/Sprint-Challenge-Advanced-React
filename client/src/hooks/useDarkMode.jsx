import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = (key, initialValue) => {
  const [dark, setDark] = useLocalStorage(key, initialValue);

  useEffect(() => {
    if (dark === true) {
      document.querySelector("body").classList.add("dark-mode");
      document.querySelector("body").classList.add("quietHeader");
    } else {
      document.querySelector("body").classList.remove("dark-mode");
      document.querySelector("body").classList.remove("quietHeader");
    }
  }, [dark]);
  return [dark, setDark];
};


