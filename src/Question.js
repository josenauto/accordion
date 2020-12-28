import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <Card>
      <Card.Header>
        <Button variant="primary" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
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
