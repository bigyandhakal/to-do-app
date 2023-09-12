import React from "react";
import { Accordion } from "react-bootstrap";
import TaskBar from "./TaskBar";
import MsgAlert from "./MsgAlert";
import SubtaskList from "./SubtaskList";

export default function TaskList({ tasks }) {
  return (
    <>
      <Accordion defaultActiveKey="0">
        {tasks && tasks.length > 0 ? (
          tasks.map((task, index) => {
            return (
              <>
                <Accordion.Item eventKey={index} key={task._id}>
                  <Accordion.Header>
                    <TaskBar status={task.status} title={task.title} />
                  </Accordion.Header>
                  <Accordion.Body>
                    {task && task.subtasks.length > 0 ? (
                      <>
                      <SubtaskList />
                      </>
                    ) : (
                      <>
                        <MsgAlert msg="No subtask found. Add to get started" />
                      </>
                    )}
                  </Accordion.Body>
                </Accordion.Item>
              </>
            );
          })
        ) : (
          <>
            <MsgAlert msg="No task found. Add new task" />
          </>
        )}
      </Accordion>
    </>
  );
}
