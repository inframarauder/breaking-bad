import React, { useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ThemeContext } from "../Contexts/ThemeContext";
import axios from "axios";

const CharacterList = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme.isDarkTheme ? theme.dark : theme.light}>
      <Container className="character-list-container"></Container>
    </div>
  );
};

export default CharacterList;
