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
    //navbar//
window.addEventListener('resize', updateCarousel);
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
});

// Destacar item ativo
document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", e => {
    document.querySelectorAll(".menu a").forEach(l => l.classList.remove("active"));
    e.target.classList.add("active");

    menuToggle.classList.remove("active");
    menu.classList.remove("active");
  });
});