import { useState } from "react";
import Heading from "./components/Heading";
import TaskForm from "./components/TaskForm";
import List from "./components/List";
import { Task } from "./models/types";

const intialData = localStorage.getItem("todos");

const App = () => {
  const [data, setData] = useState<Task[]>(
    intialData ? JSON.parse(intialData) : []
  );

  localStorage.setItem("todos", JSON.stringify(data));

  const addTask = (task: Task) => {
    setData((tasks) => [...tasks, task]);
  };

  const deleteTask = (id: string) => {
    setData((tasks) => tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <Heading title="Task App" />
      <TaskForm addTask={addTask} />
      <List data={data} deleteTask={deleteTask} />
    </>
  );
};

export default App;
