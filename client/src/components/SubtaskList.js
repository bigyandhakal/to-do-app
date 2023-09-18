import React from "react";
import { useApiContext } from "../contexts/ApiContext";
import { Col, Form, Row } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import { swalAlert } from "../utils/swal";
import Loading from "./Loading";
import "../App.css";
import { URLS } from "../constants";

export default function SubtaskList({ subtasks}) {
  const { deleteById, updateStatus } = useApiContext();
  const { loading, error } = useApiContext();
  // const [subtask, setSubTask] = useState({ _id: "" });

  const handleChange = async (e, id) => {
    const payload = { status: e.target.checked ? "completed" : "pending" };
    await updateStatus({ url: URLS.SUBTASKS, id, payload });
  };

  const handleDelete = async (id) => {
    const d = await swalAlert();
    if (d) {
      await deleteById({ url: URLS.SUBTASKS, id });
      return true;
    }
    return false;
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
                      checked={
                        subtask.status === "completed" ? true : false
                      }
                      onChange={(e) => handleChange(e, subtask._id)}
                      label={subtask.title || ""}
                    />
                  </Form.Group>
                </Col>
                <Col xs="3">
                  <BsFillTrashFill
                    onClick={() => handleDelete(subtask._id)}
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
