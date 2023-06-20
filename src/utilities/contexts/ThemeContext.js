import { createContext, useContext, useMemo } from "react";
import { useLocalStorage } from "../localstorage/useLocalStorage";

export const themes = {
  dark: "dark",
  light: "light",
};

const ThemeContext = createContext({ theme: "dark" });
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme, setTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
export const useTheme = () => {
  return useContext(ThemeContext);
};
