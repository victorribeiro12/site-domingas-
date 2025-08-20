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
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

// Função para abrir/fechar o menu hamburguer
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active"); // animação do X
  menu.classList.toggle("active");       // mostra/esconde o menu
});

// Destacar item ativo quando clicado
document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", e => {
    // Remove a classe active de todos os links
    document.querySelectorAll(".menu a").forEach(l => l.classList.remove("active"));
    
    // Adiciona active ao link clicado
    e.target.classList.add("active");

    // Fecha o menu se estiver aberto
    menuToggle.classList.remove("active");
    menu.classList.remove("active");
  });
});