// Exemplo de interatividade
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
});
  function menuclick() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu.style.display === 'block') {
      navMenu.style.display = 'none';
    } else {
      navMenu.style.display = 'block';
    }
  }
function escreva() {
  const texto = document.getElementById("visualização");
  const display = window.innerWidth;
  if (display < 768) {
    texto.innerHTML = "Visualização Mobile";
  } else {
    texto.innerHTML = "Visualização Desktop";
  }
  
}
window.addEventListener("resize", escreva);
window.addEventListener("load", escreva);