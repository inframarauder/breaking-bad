import React from "react";
import Header from "./Components/Header";
import CharacterList from "./Components/CharacterList";
import ThemeContextProvider from "./Contexts/ThemeContext";
import CharacterContextProvider from "./Contexts/CharacterContext";

function App() {
  return (
    <ThemeContextProvider>
      <Header />
      <CharacterContextProvider>
        <CharacterList />
      </CharacterContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
