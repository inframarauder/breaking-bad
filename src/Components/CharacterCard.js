import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Carousel } from "react-bootstrap";

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
        <div className="quotes">
          {quotes.length > 0 ? (
            <Carousel indicators={false} controls={false}>
              {quotes.map((quote) => (
                <Carousel.Item key={quote.quote_id}>
                  <p>{quote.quote}</p>
                </Carousel.Item>
              ))}
            </Carousel>
          ) : (
            "Loading.."
          )}
        </div>
      </div>
    </Card>
  );
};

export default CharacterCard;
