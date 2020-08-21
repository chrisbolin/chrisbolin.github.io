import { createContext, useState, useContext } from "react";
import { LinkButton } from "../link";

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

export const ChangeThemeButton = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <LinkButton
      onClick={() => {
        changeTheme();
      }}
    >
      {theme === THEME_CARD && "[simplify this]"}
      {theme === THEME_SIMPLE && "[make this weirder]"}
    </LinkButton>
  );
};

export default ThemeContext;
