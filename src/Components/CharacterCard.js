import React from "react";
import { Card } from "react-bootstrap";

const CharacterCard = ({ character }) => {
  return (
    <Card className="character-card">
      <Card.Img variant="top" src={character.img} className="character-img" />
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CharacterCard;
