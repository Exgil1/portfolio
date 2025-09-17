// small guard to avoid "addEventListener of null" errors
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // close mobile menu when a link clicked
  document.querySelectorAll(".nav-links a").forEach(a =>
    a.addEventListener("click", () => navLinks.classList.remove("show"))
  );
}
