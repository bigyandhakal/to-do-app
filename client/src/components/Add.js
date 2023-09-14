import React, { useState} from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import Loading from "./Loading";
// import useApi from "../hooks/useApi";
// import { ApiContext } from "../contexts/ApiContext";
import { useApiContext } from "../contexts/ApiContext";

export default function Add({ url, label, placeholder, btnName }) {
  
  const {loading, error, create } = useApiContext();

  const [task, setTask] = useState({ title: "" });
  // const { error, loading, create } = useApi();

  const handleClick = async () => {
    const payload = { title: task.title };
    await create({ url, payload });
  };

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  if (error) {
    return (
      <>{JSON.stringify(error)}</>
    );
  }

  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text>{label || "Label"}</InputGroup.Text>
        <Form.Control
          placeholder={placeholder || "Placeholder"}
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
