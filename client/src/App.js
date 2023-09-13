import React from "react";
import Todo from "./pages/Todo";
import { Container, Col, Row } from "react-bootstrap";
import Toastr from "./global/toastr";

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
      <Toastr showToast={false} />
    </>
  );
};

export default App;
