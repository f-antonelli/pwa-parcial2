function saveConfiguration() {
  const language = document.getElementById("language").value;
  const speed = document.getElementById("speed").value;
  const config = {
    language: language,
    speed: speed,
  };
  localStorage.setItem("appConfig", JSON.stringify(config));
  alert("Configuración guardada");
}

function closeSettings() {
  const settingsModal = document.getElementById("settings-modal");
  settingsModal.style.display = "none";
}
