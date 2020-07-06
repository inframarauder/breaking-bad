import React, { useState, useEffect } from "react";
import Quotes from "./Quotes";
import axios from "axios";
import { Card } from "react-bootstrap";

const CharacterCard = ({ character }) => {
  const [opacity, setOpacity] = useState("opacity-0");
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("https://breakingbadapi.com/api/quote", {
          params: { author: character.name },
        });
        setQuotes(res.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

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
        <div className="character-details">
          <h4>
            {character.name}({character.nickname})
          </h4>
          <p>
            {character.occupation.map((occupation, index) => (
              <span key={index}>
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
        <Quotes quotes={quotes} />
      </div>
    </Card>
  );
};

export default CharacterCard;
