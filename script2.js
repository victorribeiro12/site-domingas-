const toggleBtn = document.getElementById("toggle-dark");
    const body = document.body;

    // Verifica se já tem preferência salva
    if (localStorage.getItem("dark-mode") === "enabled") {
      body.classList.add("dark-mode");
      toggleBtn.textContent = "🌙";
    }

    toggleBtn.addEventListener("click", () => {
      body.classList.toggle("dark-mode");

      if (body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "🌙";
        localStorage.setItem("dark-mode", "enabled");
      } else {
        toggleBtn.textContent = "☀️";
        localStorage.setItem("dark-mode", "disabled");
      }
    });