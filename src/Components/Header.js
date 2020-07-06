import React, { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <nav className={`header  ${theme.isDarkTheme ? theme.dark : theme.light}`}>
      <div className="theme-toggler">
        <ThemeToggler />
      </div>
      <div className="logo-container">
        <img className="logo" src="/assets/logo.png" alt="logo" />
      </div>
    </nav>
  );
};

export default Header;
