import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import Add from "../components/Add";
import TaskList from "../components/TaskList";
import Loading from "../components/Loading";

export default function Todo() {
  const fakeTask = [
    {
      _id: "1",
      title: "Do Laundry",
      status: "pending",
      subtasks: [{ _id: "1", title: "Gather Laundry", status: "pending" },{ _id: "1", title: "Go to buy detergent", status: "completed" }],
    },
    { _id: "2", title: "Do Homework", status: "completed", subtasks: [] },
    { _id: "3", title: "Go to gym", status: "completed", subtasks: [] },
  ];
  const [tasks, setTasks] = useState([]);
  const countTask = fakeTask.length;

  useEffect (()=>{
    setTimeout(()=>{
      setTasks(fakeTask)
    }, 1000)
  },[fakeTask])
  return (
    <>
      <Title title="TODO App" />
      <Add
        label="Add new task"
        placeholder="Eg: Do laundry"
        btnName="Add task"
      />
      { tasks && tasks.length > 0 ? <TaskList tasks={tasks} />:<Loading count={countTask}/>}
    </>
  );
}
