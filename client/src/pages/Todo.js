import { useApiContext } from "../contexts/ApiContext";
// import useApi from "../hooks/useApi";
import React, { useEffect } from "react";
import Title from "../components/Title";
import Add from "../components/Add";
import TaskList from "../components/TaskList";
import Loading from "../components/Loading";
import { URLS } from "../constants";

export default function Todo() {
  const { loading, error, list, data: tasks } = useApiContext();
  // const { loading, error, list, data: tasks } = useApi();
  useEffect(() => {
    setTimeout(()=>{
      list({ url: URLS.TODOS })
    }, 1000);
  }, [list]);

  if (error) return <>{JSON.stringify(error)}</>;
  if (loading) return <Loading />;
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
        <Loading count={7}/>
      )}
    </>
  );
}
