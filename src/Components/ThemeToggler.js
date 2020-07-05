import React, { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      className={`theme-toggler-btn ${
        theme.isDarkTheme ? theme.light : theme.dark
      }`}
    >
      <i className="fa fa-moon-o"></i>
    </button>
  );
};

export default ThemeToggler;
