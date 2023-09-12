import React from "react";
import { InputGroup, Form, Button } from "react-bootstrap";

export default function Add({label, placeholder, btnName}) {
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text>{label || "Label"}</InputGroup.Text>
        <Form.Control placeholder={placeholder || "Placeholder"} />
        <Button variant="success">{btnName || "Button Label"}</Button>
      </InputGroup>
    </>
  );
}
