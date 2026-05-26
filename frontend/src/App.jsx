import { useEffect, useState } from "react";
import API from "./services/api";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container">
      <h1 className="title"> ToDo App</h1>

      <TaskForm fetchTasks={fetchTasks} />

      <hr />

      <TaskList tasks={tasks} fetchTasks={fetchTasks} />
    </div>
  );
}

export default App;