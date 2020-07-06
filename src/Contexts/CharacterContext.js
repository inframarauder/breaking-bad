import React, { createContext, useState } from "react";

export const CharacterContext = createContext();

const CharacterContextList = (props) => {
  const [characters, setCharacters] = useState([]);

  const addCharacters = (payload) => {
    setCharacters(payload);
  };
  return (
    <CharacterContext.Provider value={{ characters, addCharacters }}>
      {props.children}
    </CharacterContext.Provider>
  );
};

export default CharacterContextList;
