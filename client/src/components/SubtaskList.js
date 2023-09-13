import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import { swalAlert } from "../utils/swal";

export default function SubtaskList({ subtasks }) {
  const handleChange = ()=>{}
  const handleDelete = ()=>{
    swalAlert({});
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
                      style={{textAlign:"start"}}
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
                  <BsFillTrashFill onClick={handleDelete} />
                </Col>
              </Row>
            </div>
          );
        })}
    </>
  );
}
