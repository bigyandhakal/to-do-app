import { useApiContext } from "../contexts/ApiContext";
import React, { useEffect } from "react";
import Title from "../components/Title";
import Add from "../components/Add";
import TaskList from "../components/TaskList";
import MsgAlert from "../components/MsgAlert";
import { URLS } from "../constants";

export default function Todo() {
  const { error, list, data: tasks } = useApiContext();
  useEffect(() => {
    setTimeout(()=>{
      list({ url: URLS.TODOS })
    }, 1000);
  }, [list]);

  if (error) return <>{JSON.stringify(error)}</>;
  return (
    <>
      <Title title="TODO App" />
      <Add
        url={URLS.TODOS}
        label="Add new task"
        placeholder="Eg: Do laundry"
        btnName="Add task"
      />
      {tasks && tasks.length > 0 ? (
        <TaskList tasks={tasks} />
      ) : (
        <MsgAlert msg="No task found"/>
      )}
    </>
  );
}
