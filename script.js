document.documentElement.classList.add("js-enabled");

document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => link.closest("details").removeAttribute("open"));
});
