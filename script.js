document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button[data-section]");
  const sections = document.querySelectorAll(".section");

  function showSection(id) {
    sections.forEach(sec => sec.classList.remove("active"));
    document.getElementById(id).classList.add("active");
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const section = btn.getAttribute("data-section");
      showSection(section);
    });
  });

  // Iniciar en "inicio"
  showSection("inicio");
});
