import React from "react";
import Todo from "./pages/Todo";
import { Container, Col, Row } from "react-bootstrap";
import Toastr from "./global/Toastr";
const App = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="text-center">
            <Todo />
          </Col>
        </Row>
      </Container>
      <Toastr />
    </>
  );
};

export default App;
