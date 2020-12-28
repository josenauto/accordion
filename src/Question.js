import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    // <article className="question">
    //   <header>
    //     <h4>{title}</h4>
    //     <button className="btn">btn</button>
    //   </header>
    //   <p>{info}</p>
    // </article>
    <Card>
      <Card.Header>
        <Button variant="primary" onClick={() => setShowInfo(!showInfo)}>
          &#x2795;
        </Button>
        {title}
      </Card.Header>
      {showInfo && (
        <Card.Body>
          <Card.Text>{info}</Card.Text>
        </Card.Body>
      )}
    </Card>
  );
};

export default Question;
