import useApi from "../hooks/useApi";
import React, { useEffect} from "react";
import Title from "../components/Title";
import Add from "../components/Add";
import TaskList from "../components/TaskList";
import Loading from "../components/Loading";

export default function Todo() {
  const { loading, error, list, data: tasks } = useApi();
  useEffect(() => {
    list({ url: "http://localhost:5555/api/v1/todos" });
  }, []);

  if(error) return <>{JSON.stringify(error)}</>
  if(loading) return <Loading/>
  return (
    <>
      <Title title="TODO App" />
      <Add
        label="Add new task"
        placeholder="Eg: Do laundry"
        btnName="Add task"
      />
      {tasks && tasks.length > 0 ? (
        <TaskList tasks={tasks} />
      ) : (
        <Loading count={tasks.length} />
      )}
    </>
  );
}
