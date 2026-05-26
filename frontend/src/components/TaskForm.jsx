import { useState } from "react";
import API from "../services/api";

import "./taskform.css";

function TaskForm({ fetchTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) return alert("El título es obligatorio");

    await API.post("/tasks", {
      data: {
        title,
        description,
        completed: false,
      },
    });

    setTitle("");
    setDescription("");
    fetchTasks();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input"
        placeholder="Título de la tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="textarea"
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button className="button" type="submit">
        Crear tarea
      </button>
    </form>
  );
}

export default TaskForm;