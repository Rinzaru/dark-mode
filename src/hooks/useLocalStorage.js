import { useState } from "react";

export const useLocalStorage = (localItem, defaultValue) => {
  const [lStorage, setState] = useState(
    JSON.parse(localStorage.getItem(localItem)) || defaultValue
  );

  const setLocalStorage = (newItem) => {
    localStorage.setItem(localItem, JSON.stringify(newItem));
    setState(newItem);
  };
  return [lStorage, setLocalStorage];
};
