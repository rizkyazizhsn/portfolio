import { useCallback, useState } from "react";

export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback((value?: boolean) => {
    setValue((prev) => value ?? !prev);
  }, []);

  return [value, toggle] as const;
};
