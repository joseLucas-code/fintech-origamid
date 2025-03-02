import { useEffect, useState } from "react";

export default function useLocalStorage(
  key: string,
  inicial: string,
): [string, React.Dispatch<React.SetStateAction<string>>] {
  const [state, setState] = useState(() => {
    const local = window.localStorage.getItem(key);

    return local ? local : inicial;
  });

  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
}
