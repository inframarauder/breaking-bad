import React, { useState } from "react";
import { Card } from "react-bootstrap";

const CharacterCard = ({ character }) => {
  const [opacity, setOpacity] = useState("opacity-0");

  const toggleOpacity = () => {
    setOpacity((opacity) =>
      opacity === "opacity-0" ? "opacity-08" : "opacity-0"
    );
  };
  return (
    <Card className="character-card">
      <Card.Img variant="top" src={character.img} className="character-img" />
      <div
        className={`middle ${opacity}`}
        onMouseOver={toggleOpacity}
        onMouseOut={toggleOpacity}
      >
        <div className="character-details-header">
          <h4>
            {character.name}({character.nickname})
          </h4>
          <p>
            {character.occupation.map((occupation) => (
              <span>
                {occupation}
                <br />
              </span>
            ))}
            <br />
            Born : {character.birthday}
            <br />
            {character.status}
          </p>
        </div>

        <hr />
      </div>
    </Card>
  );
};

export default CharacterCard;
