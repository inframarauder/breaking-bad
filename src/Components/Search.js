import React, { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";

const Search = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`search-container ${
        theme.isDarkTheme ? theme.dark : theme.light
      }`}
    >
      <input
        className="search-bar"
        type="text"
        placeholder="Enter character name..."
        autoComplete="off"
      />
    </div>
  );
};

export default Search;
