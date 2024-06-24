function readTask(description) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(description);

  const configString = localStorage.getItem("appConfig");
  if (configString) {
    const config = JSON.parse(configString);
    utterance.lang = config.language || "en-US";
    utterance.rate = parseFloat(config.speed) || 1;
  }

  synth.speak(utterance);
}
