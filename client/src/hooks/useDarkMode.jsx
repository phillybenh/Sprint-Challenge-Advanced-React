import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = (key, initialValue) => {
  const [dark, setDark] = useLocalStorage(key, initialValue);

  useEffect(() => {
    if (dark === true) {
      document.querySelector("body").classList.add("dark-mode");
      document.querySelector("h1").classList.add("quietHeader");
    //   document.querySelector(".card").style.backgroundColor = "red";
    } else {
      document.querySelector("body").classList.remove("dark-mode");
      document.querySelector("h1").classList.remove("quietHeader");
    //   document.querySelector(".card").style.backgroundColor = "blue";
    }
  }, [dark]);
  return [dark, setDark];
};


