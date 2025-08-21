const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;

// Carrega preferência salva
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.textContent = '☀️ ';
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Troca texto do botão
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️ ';
        localStorage.setItem('theme', 'dark');
    } else {
        toggleButton.textContent = '🌙 ';
        localStorage.setItem('theme', 'light');
    }
});
// JavaScript para carrossel automático
const carrosselContainer = document.querySelector('.carrossel-container');
const carrosselItems = document.querySelectorAll('.carrossel-item');
const prevBtn = document.querySelector('.carrossel-btn.prev');
const nextBtn = document.querySelector('.carrossel-btn.next');

let index = 0;
const total = carrosselItems.length;

// Função para atualizar o carrossel
function updateCarrossel() {
  carrosselContainer.style.transform = `translateX(-${index * 100}%)`;
}

// Botões de navegação
prevBtn.addEventListener('click', () => {
  index = (index - 1 + total) % total;
  updateCarrossel();
});

nextBtn.addEventListener('click', () => {
  index = (index + 1) % total;
  updateCarrossel();
});

// Carrossel automático a cada 2 segundos
setInterval(() => {
  index = (index + 1) % total;
  updateCarrossel();
}, 2000); // 2000ms = 2 segundos
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
