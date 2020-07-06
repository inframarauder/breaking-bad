/* eslint-disable */

import React, { useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ThemeContext } from "../Contexts/ThemeContext";
import { CharacterContext } from "../Contexts/CharacterContext";
import CharacterCard from "./CharacterCard";

import axios from "axios";

const CharacterList = () => {
  const { theme } = useContext(ThemeContext);
  const { characters, addCharacters } = useContext(CharacterContext);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "https://breakingbadapi.com/api/characters"
        );
        addCharacters(res.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className={theme.isDarkTheme ? theme.dark : theme.light}>
      <Container className="character-list-container">
        {characters && characters.length > 0 ? (
          <Row>
            {characters.map((character) => (
              <Col sm={4} key={character.char_id} className="character-col">
                <CharacterCard character={character} />
              </Col>
            ))}
          </Row>
        ) : (
          <div>Loading..</div>
        )}
      </Container>
    </div>
  );
};

export default CharacterList;
