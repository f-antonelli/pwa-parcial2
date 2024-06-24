import { apiURL } from "./config.js";

export async function fetchTasks() {
  const response = await fetch(apiURL);
  const tasks = await response.json();
  return tasks;
}

export function displayTasks(tasks, taskList) {
  taskList.innerHTML = "";
  tasks.sort((a, b) => new Date(b.fechacreacion) - new Date(a.fechacreacion));

  const notFinishedTasks = tasks.filter((task) => task.estado !== "finalizado");
  const finishedTasks = tasks.filter((task) => task.estado === "finalizado");

  notFinishedTasks.concat(finishedTasks).forEach((task) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    <div class="card-content">
      <h2>${task.titulo}</h2>
      <p>Creado el: ${new Date(task.fechacreacion).toLocaleString()}</p>
      ${
        task.estado === "finalizado"
          ? `<p>Concluido el: ${new Date(
              task.fechaconclusion
            ).toLocaleString()}</p>`
          : ""
      }
      <p>Estado: ${task.estado}</p>
      </div>
      <div class="card-buttons">
      <button onclick="readTask('${task.descripcion}')">
      <img src="../assets/boton-de-play.png" alt="play">
      </button> 
      <button class="change-status" onclick="showChangeStatusModal('${
        task.id
      }', '${task.titulo}', '${
      task.estado
    }')"><img src="../assets/change.png" alt="cambiar"></button> </div>
    `;
    if (task.estado === "finalizado") {
      card.classList.add("finished");
    }
    taskList.appendChild(card);
  });
}
