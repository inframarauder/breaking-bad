import React from "react";
import { Carousel } from "react-bootstrap";

const Quotes = ({ quotes }) => {
  return (
    <div className="quotes">
      {quotes.length > 0 ? (
        <Carousel indicators={false} controls={false} interval={3000}>
          {quotes.map((quote) => (
            <Carousel.Item key={quote.quote_id}>
              <p>{`" ${quote.quote} "`}</p>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        "No quotes available for this character..."
      )}
    </div>
  );
};

export default Quotes;
