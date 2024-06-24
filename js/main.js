import { changeTaskStatus } from "./change-status-task.js";
import { createTask } from "./create-task.js";
import { modals } from "./modals.js";
import { displayTasks, fetchTasks } from "./show-tasks.js";

const taskList = document.getElementById("task-list");

(async function init() {
  const tasks = await fetchTasks();
  displayTasks(tasks, taskList);
  modals();
})();

// Crear nuevas tareas
const newTaskForm = document.getElementById("new-task-form");
newTaskForm.addEventListener("submit", createTask);

// Cambiar estado de la tarea
const changeStatusForm = document.getElementById("change-status-form");
changeStatusForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const taskId = event.target.dataset.taskId;
  const newStatus = event.target.elements["status"].value;
  await changeTaskStatus(taskId, newStatus);
  changeStatusForm.closest(".modal").style.display = "none";
});
