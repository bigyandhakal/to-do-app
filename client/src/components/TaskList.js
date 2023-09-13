import React from "react";
import { Accordion } from "react-bootstrap";
import TaskBar from "./TaskBar";
import MsgAlert from "./MsgAlert";
import SubtaskList from "./SubtaskList";
import Add from "./Add";

export default function TaskList({ tasks }) {
  return (
    <>
      <Accordion defaultActiveKey="0">
        {tasks && tasks.length > 0 ? (
          tasks.map((task, index) => {
            return (
                <Accordion.Item eventKey={index} key={task._id}>
                  <Accordion.Header>
                    <TaskBar status={task.status} title={task.title} completed={task.subtasks.filter((d) =>d.status === "completed").length} total={task.subtasks.length}/>
                  </Accordion.Header>
                  <Accordion.Body>
                    {task && task.subtasks.length > 0 ? (
                      <>
                      <SubtaskList subtasks={task.subtasks} />
                      </>
                    ) : (
                      <>
                        <MsgAlert msg="No subtask found. Add to get started" />
                      </>
                    )}
                    <Add label="Add new subtask" placeholder="Eg: Gather clothes" btnName="Add new Subtask"/>
                  </Accordion.Body>
                </Accordion.Item>
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
