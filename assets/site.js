const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const header = document.querySelector("[data-header]");

if (navToggle && nav) {
  const closeNav = () => {
    navToggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  };

  navToggle.addEventListener("click", () => {
    const willOpen = navToggle.getAttribute("aria-expanded") !== "true";
    navToggle.setAttribute("aria-expanded", String(willOpen));
    nav.classList.toggle("is-open", willOpen);
    document.body.classList.toggle("nav-open", willOpen);
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeNav();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNav();
      navToggle.focus();
    }
  });

  window.matchMedia("(min-width: 761px)").addEventListener("change", closeNav);
}

if (header && !document.body.classList.contains("interior")) {
  const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});
