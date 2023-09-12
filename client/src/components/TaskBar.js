import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function TaskBar({ title, status, completed, total }) {
  return (
    <Container>
      <Row>
        <Col>
          <input type="checkbox" checked={status === "completed"} onChange={()=>{}} />
          &nbsp;
          <>{title || "Task Name"}</>
        </Col>
        <Col>
          {completed > 0 && total > 0 && (
            <div>
              {completed || "-"} of {total || "-"} completed
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}
