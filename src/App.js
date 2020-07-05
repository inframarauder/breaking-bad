import React from "react";
import Header from "./Components/Header";
import ThemeContextProvider from "./Contexts/ThemeContext";
function App() {
  return (
    <ThemeContextProvider>
      <Header />
    </ThemeContextProvider>
  );
}

export default App;
