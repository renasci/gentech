import { useState } from 'react';

export const useLocalStorage = (key) => {
  const [value, setValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  });

  const setStorageValue = (inputValue) => {
    inputValue = typeof inputValue === "function" ? inputValue(value) : inputValue;
    window.localStorage.setItem(key, JSON.stringify(inputValue));
    setValue(inputValue);
  };

  return [value, setStorageValue];
}

