import { apiURL } from "./config.js";
import { displayTasks, fetchTasks } from "./show-tasks.js";

export async function createTask(event) {
  event.preventDefault();

  const title = document.getElementById("task-title").value;
  const description = document.getElementById("task-description").value;
  const status = document.getElementById("task-status").value;
  const fechacreacion = new Date().toISOString();

  const newTask = {
    titulo: title,
    descripcion: description,
    estado: status,
    fechacreacion: fechacreacion,
  };

  const response = await fetch(apiURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTask),
  });

  if (response.ok) {
    const task = await response.json();
    displayTasks(
      [task, ...(await fetchTasks())],
      document.getElementById("task-list")
    );
    document.getElementById("new-task-modal").style.display = "none";
  } else {
    alert("Error al crear la tarea");
  }
}
