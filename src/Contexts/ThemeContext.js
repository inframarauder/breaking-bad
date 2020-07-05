import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState({
    isDarkTheme: true,
    dark: "dark",
    light: "light",
  });

  const toggleTheme = () => {
    setTheme({ ...theme, isDarkTheme: !theme.isDarkTheme });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
