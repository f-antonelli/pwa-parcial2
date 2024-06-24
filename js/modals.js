export function modals() {
  const newTaskBtn = document.getElementById("new-task-btn");
  const settingsBtn = document.getElementById("settings-btn");

  const newTaskModal = document.getElementById("new-task-modal");
  const changeStatusModal = document.getElementById("change-status-modal");
  const settingsModal = document.getElementById("settings-modal");

  const closeButtons = document.getElementsByClassName("close");

  newTaskBtn.onclick = () => (newTaskModal.style.display = "block");
  settingsBtn.onclick = () => (settingsModal.style.display = "block");

  for (let button of closeButtons) {
    button.onclick = () => {
      newTaskModal.style.display = "none";
      changeStatusModal.style.display = "none";
      settingsModal.style.display = "none";
    };
  }

  window.onclick = (event) => {
    if (event.target == newTaskModal) {
      newTaskModal.style.display = "none";
    } else if (event.target == changeStatusModal) {
      changeStatusModal.style.display = "none";
    } else if (event.target == settingsModal) {
      settingsModal.style.display = "none";
    }
  };
}
