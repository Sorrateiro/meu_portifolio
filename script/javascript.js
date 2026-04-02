
function Aocarregar() {
  const mobileMenu = document.getElementById("mobile-menu");
  const navbar = document.getElementById("navbar");
  const visualizacao = document.getElementById("visualização");

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

  window.addEventListener("resize", atualizarLayout);
  atualizarLayout();
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
