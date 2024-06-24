function showChangeStatusModal(taskId, taskTitle, currentStatus) {
  const changeStatusModal = document.getElementById("change-status-modal");
  const changeStatusForm = document.getElementById("change-status-form");
  const taskIdDisplay = document.getElementById("task-id-display");
  const taskTitleDisplay = document.getElementById("task-title-display");

  changeStatusForm.dataset.taskId = taskId;
  taskIdDisplay.textContent = taskId;
  taskTitleDisplay.textContent = taskTitle;
  changeStatusForm.elements["status"].value = currentStatus;

  changeStatusModal.style.display = "block";
}
