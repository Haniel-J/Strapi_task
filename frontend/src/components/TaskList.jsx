import API from "../services/api";
import "./tasklist.css";

function TaskList({ tasks, fetchTasks }) {
  const toggleCompleted = async (task) => {
    await API.put(`/tasks/${task.documentId}`, {
      data: {
        completed: !task.completed,
      },
    });

    fetchTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div className="list">
      {tasks.map((task) => (
        <div
          key={task.documentId}
          className={`card ${task.completed ? "done" : ""}`}
        >
          <h3>{task.title}</h3>

          <p>{task.description}</p>

          <span className="status">
            {task.completed ? "Completada" : "Pendiente"}
          </span>
 
          <div className="actions">
            <button onClick={() => toggleCompleted(task)}>
              Cambiar estado
            </button>

            <button onClick={() => deleteTask(task.documentId)}>
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;