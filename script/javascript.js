
function Aocarregar() {
  const mobileMenu = document.getElementById("mobile-menu");
  const navbar = document.getElementById("navbar");
  const visualizacao = document.getElementById("visualização");
  const botaoTopo = document.getElementById("voltar-topo");

  function atualizarBotaoTopo() {
    botaoTopo.classList.toggle("visivel", window.scrollY > 300);
  }

  function atualizarLayout() {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      mobileMenu.style.display = "block";
      navbar.style.display = "none";
      mobileMenu.setAttribute("aria-expanded", "false");
      if (visualizacao) visualizacao.textContent = "Visualização Mobile";
    } else {
      mobileMenu.style.display = "none";
      navbar.style.display = "flex";
      navbar.style.flexDirection = "column";
      mobileMenu.setAttribute("aria-expanded", "false");
      if (visualizacao) visualizacao.textContent = "Visualização Desktop";
    }
  }

  mobileMenu.addEventListener("click", function() {
    if (navbar.style.display === "none" || navbar.style.display === "") {
      navbar.style.display = "flex";
      navbar.style.flexDirection = "column";
      mobileMenu.setAttribute("aria-expanded", "true");
    } else {
      navbar.style.display = "none";
      mobileMenu.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("click", function(event) {
    const menuAberto = mobileMenu.getAttribute("aria-expanded") === "true";
    const clicouNoHamburguer = event.target === mobileMenu;

    if (window.innerWidth < 768 && menuAberto && !clicouNoHamburguer) {
      navbar.style.display = "none";
      mobileMenu.setAttribute("aria-expanded", "false");
    }
  });

  window.addEventListener("resize", atualizarLayout);
  window.addEventListener("scroll", atualizarBotaoTopo);
  botaoTopo.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  atualizarLayout();
  atualizarBotaoTopo();
}

// Opcional: função única para alternar o menu quando chamado manualmente
function toggleanav() {
  const mobileMenu = document.getElementById("mobile-menu");
  const navbar = document.getElementById("navbar");

  if (!mobileMenu || !navbar) return;

  if (navbar.style.display === "none" || navbar.style.display === "") {
    navbar.style.display = "flex";
    navbar.style.flexDirection = "column";
    mobileMenu.setAttribute("aria-expanded", "true");
  } else {
    navbar.style.display = "none";
    mobileMenu.setAttribute("aria-expanded", "false");
  }
}
