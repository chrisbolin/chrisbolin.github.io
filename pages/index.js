import React, { useContext } from "react";
import CardApp from "../src/themes/card";
import SimpleApp from "../src/themes/simple";
import Head from "../src/head";
import ThemeContext, {
  ThemeProvider,
  THEME_CARD,
  THEME_SIMPLE,
} from "../src/themes/theme-context";

const App = () => {
  const { theme } = useContext(ThemeContext);
  switch (theme) {
    case THEME_CARD:
      return <CardApp />;
    case THEME_SIMPLE:
      return <SimpleApp />;
    default:
      throw new Error(`theme not found: ${theme}`);
  }
};

export default () => {
  return (
    <ThemeProvider>
      <Head />
      <App />
    </ThemeProvider>
  );
};
