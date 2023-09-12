import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function TaskBar({ task, completed, total }) {
  return (
    <Container>
      <Row>
        <Col>
          <input type="checkbox" />
          &nbsp;
          <>{task || "Task Name"}</>
        </Col>
        <Col>
          <div>
            {completed || "-"} of {total || "-"} completed
          </div>
        </Col>
      </Row>
    </Container>
  );
}
