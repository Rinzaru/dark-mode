import React, { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [value, setValue] = useLocalStorage("dark-mode");

  useEffect(() => {
    if (value === true) {
      return document.body.classList.add("dark-mode");
    }
    return document.body.classList.remove("dark-mode");
  }, [value]);

  return [value, setValue];
};
