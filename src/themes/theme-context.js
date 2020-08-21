import { createContext, useState } from "react";

export const THEME_CARD = "THEME_CARD";
export const THEME_SIMPLE = "THEME_SIMPLE";

const THEME_DEFAULT = THEME_CARD;

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEME_DEFAULT);

  const changeTheme = () =>
    setTheme((oldTheme) => {
      if (oldTheme === THEME_SIMPLE) return THEME_CARD;
      return THEME_SIMPLE;
    });

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
