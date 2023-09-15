import React, { useState } from "react";
import { useApiContext } from "../contexts/ApiContext";
import { Col, Form, Row } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import { swalAlert } from "../utils/swal";
import Loading from "./Loading";
import "../App.css";

export default function SubtaskList({ subtasks, url }) {
  const { loading, error, deleteById } = useApiContext();
  const [subtask, setSubTask] = useState({ _id: "" });
  const handleChange = () => {};
  const handleDelete = async () => {
    const id = { _id: subtask._id };
    await deleteById({ url, id });
    swalAlert({});
  };
  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  if (error) {
    return <>{JSON.stringify(error)}</>;
  }
  return (
    <>
      {subtasks &&
        subtasks.length > 0 &&
        subtasks.map((subtask, index) => {
          return (
            <div key={index} className="mb-3">
              <Row>
                <Col xs="9">
                  <Form.Group>
                    <Form.Check
                      style={{ textAlign: "start" }}
                      type="checkbox"
                      defaultChecked={
                        subtask.status === "completed" ? true : false
                      }
                      onChange={handleChange}
                      label={subtask.title || ""}
                    />
                  </Form.Group>
                </Col>
                <Col xs="3">
                  <BsFillTrashFill
                    onClick={handleDelete}
                    className="custom-button"
                  />
                </Col>
              </Row>
            </div>
          );
        })}
    </>
  );
}
