import { apiURL } from "./config.js";
import { displayTasks, fetchTasks } from "./show-tasks.js";

export async function changeTaskStatus(taskId, newStatus) {
  const fechaconclusion =
    newStatus === "finalizado" ? new Date().toISOString() : null;

  const response = await fetch(`${apiURL}/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      estado: newStatus,
      fechaconclusion: fechaconclusion,
    }),
  });

  if (response.ok) {
    const tasks = await fetchTasks();
    displayTasks(tasks, document.getElementById("task-list"));
  } else {
    alert("Error al cambiar el estado de la tarea");
  }
}
