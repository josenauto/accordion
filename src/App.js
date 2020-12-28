import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <Container>
      <Row>
        <Col md={12}>
          <h1 className="text-center">Questions and answers about login</h1>
        </Col>
        <Col md={12}>
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
