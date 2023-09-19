import React, { useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import { useApiContext } from "../contexts/ApiContext";

export default function Add({ url, label, placeholder, btnName, taskId }) {
  const { error, create } = useApiContext();

  const [task, setTask] = useState({ title: "" });
  const handleClick = async () => {
    const payload = { title: task.title };
    if (taskId) {
      payload.todo_id = taskId;
    }
    await create({ url, payload });
    setTask({ title: "" });
  };

  if (error) {
    return <>{JSON.stringify(error)}</>;
  }

  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text>{label || "Label"}</InputGroup.Text>
        <Form.Control
          placeholder={placeholder || "Placeholder"}
          value={task.title}
          onChange={(e) => {
            setTask((task) => {
              return { ...task, title: e.target.value };
            });
          }}
        />
        <Button variant="success" onClick={handleClick}>
          {btnName || "Button Label"}
        </Button>
      </InputGroup>
    </>
  );
}
