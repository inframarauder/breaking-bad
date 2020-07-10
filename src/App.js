import React from "react";
import Header from "./Components/Header";
import Search from "./Components/Search";
import CharacterList from "./Components/CharacterList";
import Footer from "./Components/Footer";
import ThemeContextProvider from "./Contexts/ThemeContext";
import CharacterContextProvider from "./Contexts/CharacterContext";

function App() {
  return (
    <ThemeContextProvider>
      <Header />
      <CharacterContextProvider>
        <Search />
        <CharacterList />
      </CharacterContextProvider>
      <Footer />
    </ThemeContextProvider>
  );
}

export default App;
